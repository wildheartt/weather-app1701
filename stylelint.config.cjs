module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'unit-whitelist': null, // Отключите правило unit-whitelist
  },
  ignoreFiles: [
    'dist/**/*',
    'node_modules/**/*',
    'coverage/**/*',
    'eslint.config.js',
    'stylelint.config.cjs',
    'src/styles.css',
  ],
};
