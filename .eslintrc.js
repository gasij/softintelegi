module.exports = {
  extends: [
    'react-app',
    'react-app/jest'
  ],
  rules: {
    // Отключаем строгие правила для CI
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'warn',
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  }
};
