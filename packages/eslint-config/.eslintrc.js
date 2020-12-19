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
    "import/prefer-default-export": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
    // there is a typescript rule to catch no-use-before-define
    // this rule results in false positives with typescript
    "no-use-before-define": 0
  },
  ignorePatterns: [ "build/*" ] ,
  plugins: ['@typescript-eslint', 'html', 'prettier', 'react-hooks'],
};
