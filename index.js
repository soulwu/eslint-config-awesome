module.exports = {
  env:{
    browser: true,
    es6: true
  },
  parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread:true
        },
   },
  extends: [
    'eslint-config-cfp/legacy',
    'eslint-config-cfp/rules/es6',
    'eslint-config-cfp/rules/strict',
    'eslint-config-cfp/rules/react'
  ].map(require.resolve),
  rules: {}
};
