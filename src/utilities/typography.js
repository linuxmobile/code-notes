import Typography from 'typography';

const typography = new Typography({
	baseFontSize: '18px',
	baseLineHeight: 1.5,
	googleFonts: [
		{
			name: 'Inter',
			styles: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
		},
	],
	headerFontFamily: ['Inter', 'sans-serif'],
	bodyFontFamily: ['Inter', 'sans-serif'],
});

typography.injectStyles();

export default typography;
