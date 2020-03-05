module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/strongly-recommended',
    '@vue/standard'
  ],
  rules: {
    'indent': ['off', 2],
    'vue/require-default-prop': 'off',
    'no-unused-vars': 'warn',
    'no-new': 'off',
    'vue/mustache-interpolation-spacing': 'off',
    'vue/no-unused-components': 'warn'

  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
