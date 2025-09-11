// We relax react/no-unescaped-entities to only forbid '>' and '}' so content pages can use normal quotes in JSX text.
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
    },
  },
];

export default eslintConfig;
