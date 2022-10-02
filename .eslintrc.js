module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    // 'prettier/@typescript-eslint',
    // 'plugin:prettier/recommended'

  ],
  globals: {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  ignorePatterns: [
    '/bin/create/model/sample/**/*.js', // ignore template files
    '/components/icons/*.js' // max-len rule
  ],
  rules: {
    'react/prop-types': 0,
    'max-len': ["warn", { "code": 80, "ignoreComments": true}],
    'indent': ['warn', 2],
    'semi': ['error'],
    'no-trailing-spaces': ['error', { 'ignoreComments': true }],
    'no-unused-vars': [
      'error',
      {
        'vars': 'all',
        'args': 'all',
        'ignoreRestSiblings': true,
        'argsIgnorePattern': '(_|event|reject|e|err|error|props)',
        'varsIgnorePattern': '(other|others|rest)'
      }
    ],
    // 'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react/react-in-jsx-scope': 'off',
    'explicit-function-return-type': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton']
      }
    ],
    jsxBracketSameLine: 0
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  overrides: [
    // Jest Rules
    {
      'files': [
        '**/__tests__/*.js',
        '**/__tests__/*.jsx',
        '**/*.spec.js',
        '**/*.spec.jsx'
      ],
      'env': {
        'jest': true
      }
    },
    // Javascript Rules
    {
      'files': [
        '**/*.js',
        '**/*.jsx',
        '*.js',
        '*.jsx'
      ],
      'rules': {
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'react/no-unescaped-entities': [
          'warn',
          {
            'forbid': ['>', '}']
          }
        ]
      }
    },
    // Typescript Rules
    {
      'files': [
        '**/*.ts',
        '**/*.tsx',
        '*.ts',
        '*.tsx'
      ],
      'rules': {
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            'argsIgnorePattern': '(_|event|reject|e|err|error|props)'
          }
        ],
      }
    }
  ]
};
