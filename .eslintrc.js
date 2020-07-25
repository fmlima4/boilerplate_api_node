module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['airbnb-base', 'prettier', "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['prettier', "plugin:@typescript-eslint/recommended", "prettier/@typescript-eslint", ],
  rules: {
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePatern: 'next',
      },
    ],
    'eslint linebreak-style': ['error', 'windows'],
  },
};
