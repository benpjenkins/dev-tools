module.exports = {
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended', 'prettier', 'prettier/react'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
    },
  },
  env: {
    browser: true,
    node: true,
    jquery: true,
    jest: true,
  },
  rules: {
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "import/prefer-default-export": 0
  },
  ignorePatterns: [ "build/*" ] ,
  plugins: ['@typescript-eslint', 'html', 'prettier', 'react-hooks'],
};
