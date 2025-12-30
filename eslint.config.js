import { defineConfig } from 'eslint/config';

import eslint from './src/index.js';

export default defineConfig(eslint.configs.base);
