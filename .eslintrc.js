module.exports = {
  extends: [
    'plugin:prettier/recommended',
    'plugin:node/recommended',
    'eslint:all',
    'prettier',
  ],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    impliedStrict: true,
    jsx: true,
    sourceType: 'module',
  },
  rules: {
    'capitalized-comments': 'off',
    'id-length': 'off',
    'max-statements': 'off',
    'no-await-in-loop': 'off',
    'no-console': 'off',
    'no-magic-numbers': 'off',
    'no-plusplus': 'off',
    'node/no-unpublished-require': 'off',
    'one-var': ['error', 'never'],
    'sort-keys': 'off',
  },
};
