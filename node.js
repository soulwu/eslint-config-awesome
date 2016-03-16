module.exports = {
  env:{
    node: true,
    es6: true
  },
  parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread:true
        },
   },
  extends: [
    'eslint-config-cfp/legacy',
    'eslint-config-cfp/rules/es6',
    'eslint-config-cfp/rules/strict'
  ].map(require.resolve),
  rules: {}
};
