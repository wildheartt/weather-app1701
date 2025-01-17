export default {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect", // Автоматическое определение версии React
    },
  },
  rules: {
    // Добавьте свои правила здесь
  },
};
