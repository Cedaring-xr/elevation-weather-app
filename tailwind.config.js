/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
		screens: {
			sm: '400px',
			md: '650px',
			lg: '1000px',
			xl: '1620px'
		}
	},
	plugins: []
}
