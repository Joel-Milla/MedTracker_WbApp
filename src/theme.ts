import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: '#00A896', // persian-green
			50: '#55FFEE',
			100: '#40FFEB',
			200: '#17FFE7',
			300: '#00EED5',
			400: '#00C5B1',
			500: '#009C8C',
			600: '#00645A',
			700: '#002C27',
			800: '#000000',
			900: '#000000',
		},
		secondary: {
			main: '#05668D', // curious-blue
			50: '#AAE5F5',
			100: '#98DFF2',
			200: '#73D4EE',
			300: '#4FC8EA',
			400: '#2BBDE5',
			500: '#19A7CE',
			600: '#137E9C',
			700: '#0D566A',
			800: '#072D38',
			900: '#010506',
		},
		error: {
			main: '#2C3531', // dark-tremor
		},
	},
});

export default theme;