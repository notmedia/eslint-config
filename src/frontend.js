import { defineConfig } from 'eslint/config';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

import base, { REACT_FILES } from './base.js';

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
    files: [REACT_FILES],
    extends: [
      react.configs.flat.recommended,
      react.configs.flat['jsx-runtime'],
      reactHooks.configs.flat['recommended-latest'],
    ],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'react/self-closing-comp': 'error',

      'simple-import-sort/imports': [
        'error',
        {
          groups: [['^\\u0000'], ['^(node:)'], ['^[^.]'], ['^@/'], ['^\\.'], ['^.+\\.s?css$']],
        },
      ],
    },
  }
);
