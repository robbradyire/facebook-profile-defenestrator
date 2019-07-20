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
    'no-console': 'off',
    'capitalized-comments': 'off',
    'no-magic-numbers': 'off',
    'node/no-unpublished-require': 'off',
    'one-var': ['error', 'never'],
  },
};
