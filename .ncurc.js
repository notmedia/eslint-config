import { defineConfig } from 'npm-check-updates';

export default defineConfig({
  dep: ['prod', 'dev', 'optional', 'peer'],
  removeRange: true,
  reject: [
    // https://github.com/jsx-eslint/eslint-plugin-react/issues/3977
    'eslint',
    '@eslint/js',
  ],
});
