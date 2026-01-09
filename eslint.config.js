import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tsEslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
	js.configs.recommended,
	...tsEslint.configs.recommended,
	{
		files: ['**/*.{js,mjs,cjs,ts,tsx}'],
		plugins: {
			'@typescript-eslint': tsEslint.plugin,
			'@stylistic': stylistic,
			'simple-import-sort': simpleImportSort,
		},
		languageOptions: {
			parser: tsEslint.parser,
			parserOptions: {
				sourceType: 'module',
			},
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		rules: {
			semi: ['error', 'always'],
			'prefer-const': 'error',
			'simple-import-sort/imports': [
				'error',
				{
					groups: [
						// Side effect imports (CSS, SCSS)
						['^\\.(css|scss)$', '^\\..*\\.(css|scss)$'],
						// Packages `react` related packages come first
						['^react', '^@?\\w'],
						// Internal packages
						['^@/'],
						// Parent imports. Put `..` last
						['^\\.\\.(?!/?$)', '^\\.\\./?$'],
						// Other relative imports. Put same-folder imports and `.` last
						['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
						// Type imports
						['^.+\\.?(type)$'],
					],
				},
			],
			'simple-import-sort/exports': 'error',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_',
				},
			],
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-empty-object-type': [
				'warn',
				{ allowInterfaces: 'with-single-extends' },
			],
			'@typescript-eslint/consistent-type-imports': [
				'error',
				{
					prefer: 'type-imports',
					fixStyle: 'separate-type-imports',
				},
			],
			'@stylistic/quotes': [
				'error',
				'single',
				{
					avoidEscape: true,
					allowTemplateLiterals: 'always',
				},
			],
			'@stylistic/jsx-quotes': ['error', 'prefer-double'],
			'@stylistic/brace-style': ['error', 'stroustrup'],
			'@stylistic/indent': ['error', 'tab'],
			'no-restricted-syntax': [
				'error',
				{
					selector:
						'ImportDeclaration[source.typeMoney=/\\.(css|scss)$/] > ImportDefaultSpecifier[local.name!="css"]',
					message:
						'CSS/SCSS module imports must use "css" as the import name. Use "import css from \'...\'" instead.',
				},
			],
		},
	},
	{
		files: ['src/**/*.{ts,tsx}'],
		languageOptions: {
			parser: tsEslint.parser,
			parserOptions: {
				sourceType: 'module',
				project: './tsconfig.app.json',
			},
		},
	},
	{
		ignores: ['dist', 'node_modules'],
	},
];
