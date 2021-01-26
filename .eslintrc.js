module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/airbnb', 'prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/extensions': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 100,
        tabWidth: 2,
        semi: false
      }
    ],
    'comma-dangle': ['error', 'only-multiline'],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state', // for vuex state
          'acc', // for reduce accumulators
          'e' // for e.returnvalue
        ]
      }
    ]
  },
  plugins: ['prettier'],
  ignorePatterns: ['*.spec.js']
}
