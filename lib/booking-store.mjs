import { redisCommand } from "./checklist-store.mjs";
const prefix = "ceremonyverse:booking:";
const slot = (iso) => prefix + "slot:" + iso;
const record = (id) => prefix + "record:" + id;
const ttl = 86400 * 90;
export function createBookingStore(command = redisCommand) {
  return {
    async available(slots) {
      if (!slots.length) return [];
      const locks = await command(["MGET", ...slots.map(slot)]);
      if (!Array.isArray(locks) || locks.length !== slots.length)
        throw Error("Calendar unavailable");
      return slots.filter((_, i) => locks[i] === null);
    },
    async claim(id, lead) {
      const script = `if not redis.call('SET',KEYS[1],ARGV[1],'NX','EX',ARGV[3]) then return 0 end
        redis.call('SET',KEYS[2],ARGV[2],'EX',ARGV[3]); return 1`;
      return (
        (await command([
          "EVAL",
          script,
          2,
          slot(lead.startIso),
          record(id),
          id,
          JSON.stringify(lead),
          ttl,
        ])) === 1
      );
    },
    async get(id) {
      const raw = await command(["GET", record(id)]);
      return raw ? JSON.parse(raw) : null;
    },
    async release(id, iso) {
      return command([
        "EVAL",
        "if redis.call('GET',KEYS[1])==ARGV[1] then return redis.call('DEL',KEYS[1],KEYS[2]) end; return 0",
        2,
        slot(iso),
        record(id),
        id,
      ]);
    },
  };
}
