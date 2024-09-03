/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				robotoCondensed: ['Roboto Condensed', 'sans-serif'],
				robotoFlex: ['Roboto Flex', 'sans-serif'],
				bebasNeue: ['Bebas Neue', 'sans-serif'],
			},
			colors: {
				'dark-blue': '#0147FF',
				'white-100': '#F7F7F7',
				gray: {
					100: '#1D1D1B',
					200: '#282828',
				},
			},
		},
	},
	plugins: [],
};
