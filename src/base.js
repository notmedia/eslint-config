import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export const ALL_FILES = '**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}';
export const JS_FILES = '**/*.{js,jsx,mjs,cjs}';

export default defineConfig(
  {
    ignores: ['dist/**'],
  },
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    files: [ALL_FILES],
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
      },
      globals: {
        ...globals.vitest,
      },
    },
    rules: {
      curly: 'error',
      eqeqeq: ['error', 'always'],
      'no-console': 'error',
      'no-param-reassign': 'error',
      'no-duplicate-imports': 'error',

      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],

      'simple-import-sort/imports': [
        'error',
        {
          groups: [['^\\u0000'], ['^(node:)'], ['^[^.]'], ['^\\.']],
        },
      ],
    },
  },
  {
    files: [JS_FILES],
    extends: [tseslint.configs.disableTypeChecked],
  },
  prettierRecommended,
  {
    rules: {
      'prettier/prettier': [
        'error',
        {
          semi: true,
          tabWidth: 2,
          printWidth: 100,
          singleQuote: true,
          trailingComma: 'es5',
          endOfLine: 'lf',
        },
      ],
    },
  }
);
