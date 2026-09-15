// @ts-check
import astro from 'eslint-plugin-astro';
import importX from 'eslint-plugin-import-x';
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
  {
    name: 'module-boundaries',
    plugins: {
      importX,
    },
    settings: {
      'import-x/resolver': {
        node: {
          extensions: [
            '.js',
            '.mjs',
            '.cjs',
            '.jsx',
            '.ts',
            '.tsx',
            '.json',
            '.astro',
          ],
        },
      },
    },
    rules: {
      'importX/no-restricted-paths': [
        'error',
        {
          zones: [
            {
              target: './src/pages',
              from: './src/pages',
            },
            {
              target: './src/components',
              from: ['./src/pages', './src/layouts'],
            },
            {
              target: './src/layouts',
              from: './src/pages',
            },
            {
              target: './src/lib',
              from: ['./src/components', './src/layouts', './src/pages'],
            },
            {
              target: './src/data',
              from: [
                './src/lib',
                './src/components',
                './src/layouts',
                './src/pages',
              ],
            },
          ],
        },
      ],
    },
  },
];
