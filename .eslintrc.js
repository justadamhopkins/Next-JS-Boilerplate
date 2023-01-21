const prettierRules = require('./prettier.config');

module.exports = {
  extends: [
    'prettier',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    es6: true,
    'jest/globals': true,
  },
  root: true,
  settings: {
    'import/internal-regex': '^(@/|~src)',
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  plugins: ['prettier', 'import', 'jest', 'unused-imports'],
  ignorePatterns: [
    '.eslintrc.js',
    'config/*',
    'testCoverage/*',
    '__mocks__/**/*',
    'src/**/__mocks__/*',
    'src/**/*.stories.*',
    'jest.config.js',
    'package.json',
    'package-lock.json',
    'yarn.lock',
    '*.config.js',
    '*.config.json',
    'reports/*',
  ],
  rules: {
    '@typescript-eslint/prefer-nullish-coalescing': [0],
    'prettier/prettier': ['warn', prettierRules],
    'no-return-await': 'error',
    'no-unused-vars': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/no-empty-interface': ['error'],
    '@typescript-eslint/no-non-null-assertion': 'warn',
    curly: 'error',
    'import/extensions': 0,
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],
    'no-var': 'error',
    radix: 'error',
    semi: 'error',
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    eqeqeq: [
      'error',
      'always',
      {
        null: 'ignore',
      },
    ],
    'prefer-arrow-callback': 1,
    'default-case': 'warn',
    'no-trailing-spaces': 1,
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'no-bitwise': 'off',
    'no-multiple-empty-lines': 2,
    'no-debugger': 1,
    'no-duplicate-imports': 'error',
    'no-empty': 'error',
    'no-eval': 'error',
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroupsExcludedImportTypes: ['builtin'],
        pathGroups: [
          {
            pattern: '^(?!(@/|~src|(\\.)\\1|\\.scss)).+',
            group: 'external',
          },
          {
            pattern: '^(@/|~src)',
            group: 'internal',
          },
          {
            pattern: '^(\\.(?!\\.scss))\\1',
            group: 'parent',
          },
          {
            pattern: '^\\.+',
            group: 'sibling',
          },
          {
            pattern: '**/*.+(scss)',
            patternOptions: {dot: true, nocomment: true},
            group: 'index',
            position: 'after',
          },
          {
            pattern: '{.,..}/**/*.+(scss)',
            patternOptions: {dot: true, nocomment: true},
            group: 'index',
            position: 'after',
          },
        ],
      },
    ],
    '@typescript-eslint/no-implicit-dependencies': 0,
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'default',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase', 'snake_case'],
        leadingUnderscore: 'allowSingleOrDouble',
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase', 'snake_case'],
        leadingUnderscore: 'allowSingleOrDouble',
      },
      {
        selector: 'parameter',
        format: ['camelCase', 'PascalCase', 'snake_case'],
        leadingUnderscore: 'allowSingleOrDouble',
      },
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
        custom: {
          regex: '^T[A-Z]',
          match: true,
        },
      },
      {
        selector: 'enum',
        format: ['PascalCase'],
        custom: {
          regex: '^E[A-Z]',
          match: true,
        },
      },
    ],
    'react/sort-comp': [0],
    'react/jsx-props-no-spreading': [0],
    'react/jsx-one-expression-per-line': [0],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-wrap-multilines': [0],
    'jsx-a11y/anchor-is-valid': [0],
    'jsx-quotes': ['error', 'prefer-double'],
    'react/jsx-boolean-value': ['error', 'always'],
    'react/prop-types': [0],
    'global-require': [0],
    'react/jsx-filename-extension': [1, {extensions: ['.tsx', '.jsx']}],
  },
};