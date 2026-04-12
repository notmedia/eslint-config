import { defineConfig } from 'eslint/config';
import vue from 'eslint-plugin-vue';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import base, { VUE_FILES } from './base.js';

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
  ...vue.configs['flat/recommended'],
  {
    files: [VUE_FILES],
    languageOptions: {
      parserOptions: {
        projectService: true,
        extraFileExtensions: ['.vue'],
        parser: tseslint.parser,
      },
    },
  }
);
