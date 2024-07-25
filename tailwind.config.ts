import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'p-red': 'hsl(12, 88%, 59%)',
				'p- blue': 'hsl(228, 39%, 23%)',
				'd-gray': 'hsl(227, 12%, 61%)',
				'd-blue': 'hsl(233, 12%, 13%)',
				'pale-red': 'hsl(13, 100%, 96%)',
				'l-gray': 'hsl(0, 0%, 98%)',
			},
			screens: {
				xs: '450px',
				ssm: '550px',
			},
		},
	},
	plugins: [
		function ({ addUtilities }: any) {
			addUtilities({
				'.no-scrollbar': {
					/* For Firefox */
					'scrollbar-width': 'none',
					/* For Chrome, Safari, and Opera */
					'&::-webkit-scrollbar': {
						display: 'none',
					},
				},
			});
		},
	],
};
export default config;
