import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import path from 'node:path'
import postcss from 'postcss'
import tailwind from '@tailwindcss/postcss'

const root = process.cwd()
test('active Tailwind v4 stylesheet compiles named calculator palette utilities', async () => {
  const from = path.join(root, 'app/globals.css')
  const source = await fs.readFile(from, 'utf8')
  const result = await postcss([tailwind({ base: root, optimize: false })]).process(source, { from })
  const css = result.css
  for (const [name, property, value] of [
    ['bg-alabaster', 'background-color', '#FDFBF7'],
    ['bg-burgundy-900', 'background-color', '#6B2A35'],
    ['bg-bronze-100', 'background-color', '#F7F2EB'],
    ['text-bronze-700', 'color', '#8C5D37'],
    ['border-warmBorder', 'border-color', '#EFE7DC'],
  ]) {
    assert.match(css, new RegExp(`\\.${name}\\s*\\{\\s*${property}:\\s*${value}`, 'i'))
  }
  assert.match(css, /background-color:\s*#542129/i)
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
