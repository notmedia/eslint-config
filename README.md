# eslint-config

# Installation

```bash
npm i eslint prettier @notmedia/eslint-config -D
```

# Configs

`base` - contains base configuration for both backend and frontend\
`frontend` - extends from `base`, contains frontend (react) specific rules\
`backend` - extends from `base`, contains backend specific rules

# Patterns

```js
export const ALL_FILES = '**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}';
export const JS_FILES = '**/*.{js,jsx,mjs,cjs}';
export const TS_FILES = '**/*.{ts,tsx,mts,cts}';
export const REACT_FILES = '**/*.{jsx,tsx}';
export const TEST_FILES = '**/*.{spec,test}.{js,jsx,mjs,cjs,ts,tsx,mts,cts}';
```


# Usage

```js
// eslint.config.js

import { defineConfig } from 'eslint/config';
import eslint from '@notmedia/eslint-config';

export default defineConfig(eslint.configs.base, {
  files: [eslint.patterns.JS_FILES],
  rules: {
    '@typescript-eslint/no-unsafe-assignment': 'off',
  },
});
```
