module.exports = {
  extends: [
    __dirname + '/react.js'
  ],
  globals: {
    __DEV__: true
  },
  rules: {
    'react/prop-types': [
      'warn',
      {
        ignore: [
          'children',
          'dispatch',
          'callNative',
          'addNativeEvent',
          'clearNativeEvent',
          'clearAllNativeEvent'
        ]
      }
    ]
  }
};
