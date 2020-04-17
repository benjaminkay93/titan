module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['standard-with-typescript', 'plugin:react/recommended'],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  overrides: [{
    files: ['*.ts', '*.js', '*.tsx'],
    rules: {
      'comma-dangle': ['error', 'only-multiline'],
      '@typescript-eslint/prefer-interface': 0,
      '@typescript-eslint/explicit-function-return-type': 0,
      '@typescript-eslint/promise-function-async': 0,
    },
  }],
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    'react/display-name': 0,
    'react/prop-types': 0,
  },
  env: {
    "jest": true,
  },
  globals: {
    APP_ROOT_PATH: true
  },
  settings: {
    react: {
      version: "16.8",
    },
  },
}

