import { defineConfig } from 'eslint/config';
import vue from 'eslint-plugin-vue';
import globals from 'globals';

import base from './base.js';

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
  ...vue.configs['flat/recommended']
);
