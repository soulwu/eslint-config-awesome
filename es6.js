module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    'arrow-spacing': 'error',
    'constructor-super': 'error',
    'generator-star-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    'no-class-assign': 'error',
    'no-confusing-arrow': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-new-symbol': 'error',
    'no-this-before-super': 'error',
    'no-useless-constructor': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'template-curly-spacing': [
      'error',
      'never'
    ],
    'yield-star-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ]
  }
};
