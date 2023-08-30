module.exports = {
	env: {
		node: true,
		es2022: true,
		browser: true
	},
	extends: ['eslint:recommended', 'plugin:astro/recommended'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	rules: {
		'no-mixed-spaces-and-tabs': 'error',
		'astro/no-set-html-directive': 'error',
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		indent: [2, 'tab', { SwitchCase: 0 }],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single', { allowTemplateLiterals: true, avoidEscape: true }],
		semi: ['error', 'always'],
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error',
		'no-empty-function': 'off',
		'@typescript-eslint/no-empty-function': 'off'
	},
	overrides: [
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro']
			},
			plugins: ['simple-import-sort']
		},
		{
			files: ['*.ts'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				tsconfigRootDir: __dirname,
				project: ['./tsconfig.json']
			},
			extends: [
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking'
			],
			rules: {
				'@typescript-eslint/no-unused-vars': [
					'error',
					{ argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' }
				],
				'@typescript-eslint/no-non-null-assertion': 'off',
				'require-await': 'off',
				'@typescript-eslint/require-await': 'warn'
			}
		},
		{
			files: ['*.d.ts'],
			rules: {
				'@typescript-eslint/triple-slash-reference': 'off'
			}
		},
		{
			files: ['*.tsx'],
			parser: '@typescript-eslint/parser',
			plugins: [
				'@typescript-eslint',
				'react',
				'react-hooks',
				'prettier',
				'import',
				'simple-import-sort'
			],
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				tsconfigRootDir: __dirname,
				project: ['./tsconfig.json']
			},
			extends: [
				'eslint:recommended',
				'plugin:react/recommended',
				'plugin:react-hooks/recommended',
				'plugin:@typescript-eslint/recommended',
				'plugin:prettier/recommended',
				'prettier'
			],
			rules: {
				'react-hooks/rules-of-hooks': 'error',
				'react/react-in-jsx-scope': 'off',
				'react/jsx-uses-react': 'off',
				'react/jsx-filename-extension': [
					1,
					{ extensions: ['.js', '.jsx', '.ts', '.tsx'] }
				],
				'require-await': 'off',
				'@typescript-eslint/require-await': 'warn'
			}
		},
		{
			// Define the configuration for `<script>` tag.
			// Script in `<script>` is assigned a virtual file name with the `.js` extension.
			files: ['**/*.astro/*.js', '*.astro/*.js'],
			parser: '@typescript-eslint/parser'
		}
	]
};
