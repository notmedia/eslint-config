import { defineConfig } from 'eslint/config';
import react from 'eslint-plugin-react';
import globals from 'globals';

import base, { ALL_FILES } from './base.js';

export default defineConfig(
  {
    extends: [base],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2022,
      },
    },
  },
  {
    files: [ALL_FILES],
    plugins: {
      react,
    },
    settings: { react: { version: 'detect' } },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'react/self-closing-comp': 'error',
    },
  },
  {
    files: [ALL_FILES],
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [['^\\u0000'], ['^(node:)'], ['^[^.]'], ['^@/'], ['^\\.'], ['^.+\\.s?css$']],
        },
      ],
    },
  }
);
