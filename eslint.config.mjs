// @ts-check
import astro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: ['dist', 'node_modules', '.astro'],
  },
  ...tseslint.configs.recommended,
  ...astro.configs['flat/recommended'],
  {
    files: ['*.astro', '**/*.astro'],
    rules: {
      'astro/no-set-html-directive': 'error',
    },
  },
];
