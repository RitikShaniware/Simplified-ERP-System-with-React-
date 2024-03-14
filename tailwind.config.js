/** @type {import('tailwindcss').Config} */
module.exports = {
	corePlugins: {
		preflight: false
	},
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	safelist: [
		'ml-4', 'ml-8', 'ml-12',
		'mr-4', 'mr-8', 'mr-12'
	]
	,
	theme: {
		extend: {},
	},
	plugins: [],
}
