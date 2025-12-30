# eslint-config

# Installation

```bash
npx install-peerdeps @notmedia/eslint-config -d
```

# Usage

```js
import { defineConfig } from 'eslint/config';

import eslint from '@notmedia/eslint-config';

export default defineConfig(eslint.configs.base);
```
