module.exports = {
  ecmaFeatures: {
    restParams: true,
    experimentalObjectRestSpread: true
  },
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    'comma-dangle': [2, 'never'],
    'object-curly-spacing': [2, 'never'],
    'spaced-comment': 0,
    'max-len': 0,
    'no-param-reassign': [2, {props: false}]
  }
};
