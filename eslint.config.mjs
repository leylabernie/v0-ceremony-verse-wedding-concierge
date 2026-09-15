import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTypescript from "eslint-config-next/typescript"

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  {
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "components/pages/*.backup",
    // RTL component test requires jest/vitest + @testing-library/react, which
    // are not installed. Ignore so unresolved test-only imports don't fail lint.
    "__tests__/**",
  ]),
])
