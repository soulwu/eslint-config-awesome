module.exports = {
  'extends': [
    'eslint-config-cfp/rules/best-practices',
    'eslint-config-cfp/rules/errors',
    'eslint-config-cfp/rules/legacy',
    'eslint-config-cfp/rules/node',
    'eslint-config-cfp/rules/style',
    'eslint-config-cfp/rules/variables'
  ].map(require.resolve),
  'env': {
    'browser': false,
    'node': false,
    'amd': false,
    'mocha': false,
    'jasmine': false
  },
  'ecmaFeatures': {},
  'globals': {},
  'rules': {}
};
