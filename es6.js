module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    'arrow-spacing': 2,
    'constructor-super': 2,
    'generator-star-spacing': [
      2,
      {
        before: true,
        after: false
      }
    ],
    'no-class-assign': 2,
    'no-confusing-arrow': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-new-symbol': 2,
    'no-this-before-super': 2,
    'no-useless-constructor': 2,
    'no-var': 2,
    'object-shorthand': 2,
    'prefer-const': 2,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    'template-curly-spacing': [
      2,
      'never'
    ],
    'yield-star-spacing': [
      2,
      {
        before: true,
        after: false
      }
    ]
  }
};
