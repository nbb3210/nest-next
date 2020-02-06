module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'import/no-unresolved': [0],
    'import/prefer-default-export': [0],
    'class-methods-use-this': [0],
    'no-empty-function': [1],
    'no-unused-vars': [0],
    'no-useless-constructor': [1],
    'no-tabs': [1],
    'react/prop-types': [1],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'max-len': [2, 120],
    'import/extensions': [0],
    'react/jsx-one-expression-per-line': [0],
    'object-curly-newline': [0],
  },
};
