import ColorHash from 'color-hash';

const colorHash = new ColorHash({
	lightness: 0.6,
	saturation: 0.4,
});

const ColorString = (item) => {
	const tagHsl = colorHash.hsl(item);
	const tagColor = `hsla(${tagHsl[0]},${tagHsl[1] * 100}%,${tagHsl[2] * 100}%,0.5)`;

	return tagColor;
};

export default ColorString;
