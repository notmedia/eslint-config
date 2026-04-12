# eslint-config

# Installation

```bash
npm i eslint prettier @notmedia/eslint-config -D
```

# Configs

`base` - contains base configuration for both backend and frontend\
`react` - extends from `base`, contains React specific rules\
`vue` - extends from `base`, contains Vue specific rules\
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

import eslint from '@notmedia/eslint-config';
import { defineConfig } from 'eslint/config';

// Backend
export default defineConfig(eslint.configs.backend);

// React
export default defineConfig(eslint.configs.react);

// Vue
export default defineConfig(eslint.configs.vue);
```
