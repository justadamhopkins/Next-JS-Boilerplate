import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import typescriptParser from '@typescript-eslint/parser';
import globals from 'globals';
import unusedImports from 'eslint-plugin-unused-imports';
import vitest from 'eslint-plugin-vitest';
import stylisticJs from '@stylistic/eslint-plugin-js';
import importPlugin from 'eslint-plugin-import';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginQuery from '@tanstack/eslint-plugin-query';
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import eslintPluginTestingLibrary from 'eslint-plugin-testing-library';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  ...pluginQuery.configs['flat/recommended'],
  {
    name: 'ignoreList',
    ignores: [
      'dist/**',
      'node_modules/**',
      'build/**',
      '.*.js',
      '.lintstagedrc.mjs',
      'commitlint.config.mjs',
      'eslint.config.mjs',
      'prettier.config.mjs',
      'prettier.base.mjs',
      'tsconfig.json',
      'tsconfig.prod.json',
      'tsconfig.test.json',
      'coverage/*',
      'postcss.config.js',
      '.next',
      'svgo.config.js',
    ],
  },
  {
    name: 'baseConfig',
    files: ['**/*.js?(x)', '**/*.ts?(x)'],
    plugins: {
      unusedImports,
      stylisticJs,
      import: importPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.es2018,
      },
      parser: typescriptParser,
    },
    rules: {
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
        },
      ],
      'check-file/filename-naming-convention': [
        'error',
        {
          'src/**/!(*.test|*.d|*.stories|*.config).*': 'KEBAB_CASE',
        },
      ],
      'check-file/folder-naming-convention': [
        'error',
        {
          'src/app/**/': 'NEXT_JS_APP_ROUTER_CASE', // Handle Next JS app dir folder naming syntax
          'src/!(app|components|routes|plugins)/**/': 'KEBAB_CASE', // Match everything deeply inside src expect for components, routes and plugins directory
          'components/!(_atoms|_molecules|_organisms|_templates)/**/':
            'KEBAB_CASE', //Matches everything inside components folder except for the folder names _atoms, _molecules, and _organisms
          'components/_atoms/**/': 'KEBAB_CASE', // includes all contents in any dir inside this folder
          'components/_molecules/**/': 'KEBAB_CASE', // includes all contents in any dir inside this folder
          'components/_organisms/**/': 'KEBAB_CASE', // includes all contents in any dir inside this folder
          'components/_templates/**/': 'KEBAB_CASE', // includes all contents in any dir inside this folder
        },
      ],
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'no-console': [
        'error',
        {
          allow: ['error', 'warn', 'info', 'clear'],
        },
      ],
      'unusedImports/no-unused-imports': 'error',
      'unusedImports/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', ignoreRestSiblings: true },
      ],
      radix: 'error',
      'stylisticJs/semi': 'error',
      'default-case': 'error',
      'stylisticJs/no-trailing-spaces': 'error',
      'no-bitwise': 'error',
      'stylisticJs/no-multiple-empty-lines': 'error',
      curly: 'error',
      'no-debugger': 'error',
      'no-empty': 'error',
      'no-eval': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { fixStyle: 'inline-type-imports' },
      ],
      'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
      'import/no-duplicates': ['error', { 'prefer-inline': true }],
      '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
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
      'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
      'replace-js-with-ts/replace-js-with-ts': 'error',
    },
  },
  {
    name: 'frontendConfig',
    files: ['**/*.{jsx,tsx,ts,js}'],
    ignores: ['!.storybook', '.sanity/'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      react: eslintPluginReact,
      'react-hooks': fixupPluginRules(eslintPluginReactHooks),
      'jsx-a11y': eslintPluginJsxA11y,
      'testing-library': eslintPluginTestingLibrary,
    },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2022,
      },
    },
    rules: {
      ...eslintPluginReact.configs.recommended.rules,
      ...eslintPluginReact.configs['jsx-runtime'].rules,
      ...eslintPluginReactHooks.configs.recommended.rules,
      ...eslintPluginJsxA11y.flatConfigs.recommended.rules,
      'react/prop-types': 0,
      'react/jsx-no-useless-fragment': 'error',
      'react/hook-use-state': 'error',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: ['arrow-function', 'function-expression'],
          unnamedComponents: 'arrow-function',
        },
      ],
      'testing-library/consistent-data-testid': [
        'error',
        {
          testIdPattern: '^[a-z]+(-[a-z]+)*$',
          testIdAttribute: 'data-testid',
          customMessage:
            'The value of the "data-testid" attribute must follow the kebab-case convention',
        },
      ],
    },
  },
  {
    name: 'testConfig',
    files: ['**/*.test.{ts,tsx}', '**/*.test.{ts,tsx}'],
    plugins: {
      vitest,
    },
    rules: {
      'vitest/consistent-test-it': [
        'error',
        {
          fn: 'it',
          withinDescribe: 'it',
        },
      ],
      'vitest/expect-expect': 'error',
      'vitest/no-focused-tests': ['error', { fixable: false }],
      'vitest/no-standalone-expect': 'error',
      'vitest/max-nested-describe': [
        'error',
        {
          max: 5,
        },
      ],
      'vitest/no-disabled-tests': 'error',
      'vitest/prefer-called-with': 'error',
      'vitest/prefer-each': 'error',
      'vitest/prefer-expect-resolves': 'error',
      'vitest/prefer-spy-on': 'error',
      'vitest/valid-expect': 'error',
    },
    settings: {
      vitest: {
        typecheck: true,
      },
    },
    languageOptions: {
      globals: {
        ...vitest.environments.env.globals,
      },
    },
  },
];
