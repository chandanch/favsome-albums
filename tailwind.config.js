/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{jsx,js,tsx,ts}'],
	theme: {
		extend: {
			keyframes: {
				shimmer: {
					'100%': { transform: 'translateX(100%)' },
				},
			},
			animation: {
				shimmer: 'shimmer 1s infinite',
			},
		},
	},
	plugins: [],
};
