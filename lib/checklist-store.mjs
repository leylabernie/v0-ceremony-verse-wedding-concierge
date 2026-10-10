import { createHmac, timingSafeEqual, randomUUID } from 'node:crypto'
export const dueKey = 'ceremonyverse:checklist:due'
export function subscriberId(email, secret) { return createHmac('sha256', secret).update(email.trim().toLowerCase()).digest('hex') }
export function actionToken(id, action, secret) { return createHmac('sha256', secret).update(`checklist:${action}:${id}`).digest('hex') }
export function validAction(id, action, token, secret) {
  if (!secret || !/^[a-f0-9]{64}$/.test(id) || !/^[a-f0-9]{64}$/.test(token)) return false
  return timingSafeEqual(Buffer.from(token), Buffer.from(actionToken(id, action, secret)))
}
export async function redisCommand(command) {
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN
  if (!url || !token) throw new Error('Checklist storage unavailable')
  const response = await fetch(url, { method: 'POST', headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }, body: JSON.stringify(command), cache: 'no-store', signal: AbortSignal.timeout(5000) })
  if (!response.ok) throw new Error('Checklist storage unavailable')
  const data = await response.json()
  if (data.error) throw new Error('Checklist storage unavailable')
  return data.result
}
export function createChecklistStore(command = redisCommand) {
 const key = id => `ceremonyverse:checklist:subscriber:${id}`
 return {
  async read(id) {
   const fields = await command(['HGETALL', key(id)])
   if (!Array.isArray(fields) || !fields.length) return undefined
   return Object.fromEntries(Array.from({length: fields.length / 2}, (_, i) => [fields[2*i], fields[2*i+1]]))
  },
  async register(id, email, consent, version, now = Date.now()) {
   return Number(await command(['EVAL', "if redis.call('EXISTS',KEYS[1])==1 then return 0 end; redis.call('HSET',KEYS[1],'email',ARGV[1],'status',ARGV[2],'consent',ARGV[3],'version',ARGV[4],'createdAt',ARGV[5],'step','0','resourceSent','0'); redis.call('EXPIRE',KEYS[1],7776000); return 1", 1, key(id), email, consent ? 'pending' : 'resource-only', consent ? '1' : '0', version, now])) === 1
  },
  async resourceSent(id) { await command(['HSET',key(id),'resourceSent','1']) },
  async confirm(id, now = Date.now()) {
   return Number(await command(['EVAL', "if redis.call('HGET',KEYS[1],'status')~='pending' or redis.call('HGET',KEYS[1],'consent')~='1' then return 0 end; redis.call('HSET',KEYS[1],'status','active','confirmedAt',ARGV[2]); redis.call('ZADD',KEYS[2],ARGV[2],ARGV[1]); return 1",2,key(id),dueKey,id,now]))===1
  },
  async unsubscribe(id) { await command(['EVAL', "if redis.call('EXISTS',KEYS[1])==1 then redis.call('HSET',KEYS[1],'status','unsubscribed') end; redis.call('ZREM',KEYS[2],ARGV[1]); return 1",2,key(id),dueKey,id]) },
  async due(now = Date.now()) { return await command(['ZRANGEBYSCORE',dueKey,'-inf',now,'LIMIT',0,20]) },
  async lock(id) { const lease=randomUUID(); return await command(['SET',`${key(id)}:lock`,lease,'NX','EX',120]) === 'OK' ? lease : undefined },
  async unlock(id, lease) { await command(['EVAL',"if redis.call('GET',KEYS[1])==ARGV[1] then return redis.call('DEL',KEYS[1]) end; return 0",1,`${key(id)}:lock`,lease]) },
  async advance(id, expectedStep, nextDue) {
   return command(['EVAL',"if redis.call('HGET',KEYS[1],'status')~='active' or tonumber(redis.call('HGET',KEYS[1],'step'))~=tonumber(ARGV[2]) then return 0 end; redis.call('HSET',KEYS[1],'step',tonumber(ARGV[2])+1); if ARGV[3]=='done' then redis.call('HSET',KEYS[1],'status','completed'); redis.call('ZREM',KEYS[2],ARGV[1]); else redis.call('ZADD',KEYS[2],ARGV[3],ARGV[1]); end; return 1",2,key(id),dueKey,id,expectedStep,nextDue ?? 'done'])
  },
  async removeDue(id) { await command(['ZREM',dueKey,id]) },
 }
}
