/** @type {import('npm-check-updates').RunOptions} */
module.exports = {
  dep: ['prod', 'dev', 'optional', 'peer'],
  removeRange: true,
  reject: [
    // https://github.com/jsx-eslint/eslint-plugin-react/issues/3977
    'eslint',
    '@eslint/js',
  ],
};
