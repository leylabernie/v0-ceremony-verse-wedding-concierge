import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import path from 'node:path'
import postcss from 'postcss'
import tailwind from '@tailwindcss/postcss'

const root = process.cwd()
test('active Tailwind v4 stylesheet compiles theme tokens and calculator scope styles', async () => {
  const from = path.join(root, 'app/globals.css')
  const source = await fs.readFile(from, 'utf8')
  const result = await postcss([tailwind({ base: root, optimize: false })]).process(source, { from })
  const css = result.css
  for (const [token, value] of [
    ['--color-alabaster', '#FDFBF7'],
    ['--color-burgundy-900', '#6B2A35'],
    ['--color-burgundy-800', '#542129'],
    ['--color-bronze-700', '#8C5D37'],
    ['--color-bronze-100', '#F7F2EB'],
    ['--color-warmBorder', '#EFE7DC'],
  ]) {
    assert.match(source, new RegExp(`${token.replace(/[-]/g, '[-]')}:\\s*${value}`, 'i'))
  }
  // ensure stylesheet compiles and retains calculator scope
  assert.match(css, /:root|@layer/)
  assert.match(source, /@layer base\s*\{\s*\.cv-resort-audit/)
})

test('local font assets and licenses exist and layout avoids Google build-time downloads', async () => {
  const layout = await fs.readFile(path.join(root, 'app/layout.tsx'), 'utf8')
  assert.match(layout, /next\/font\/local/)
  assert.doesNotMatch(layout, /next\/font\/google/)
  for (const file of ['cormorant-garamond-latin-wght-normal.woff2', 'cormorant-garamond-latin-wght-italic.woff2', 'dm-sans-latin-wght-normal.woff2']) {
    const buffer = await fs.readFile(path.join(root, 'app/fonts', file))
    assert.equal(buffer.subarray(0, 4).toString(), 'wOF2')
  }
  for (const name of ['Cormorant-Garamond', 'DM-Sans']) {
    assert.match(await fs.readFile(path.join(root, 'app/fonts', `${name}-LICENSE.txt`), 'utf8'), /SIL OPEN FONT LICENSE/i)
  }
})
