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
    sourceType: 'module',
    impliedStrict: true,
    jsx: true,
  },
  rules: {},
};
