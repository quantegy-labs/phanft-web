import { createTheme } from '@mui/material'

const theme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#ff0087',
			contrastText: '#fff',
		},
		secondary: {
			main: '#8DFF9C',
			contrastText: '#111',
		},
		info: {
			main: '#201c1c',
			contrastText: '#fff',
		},
		background: {
			paper: '#0e130e',
			default: '#000',
		},
	},
	typography: {
		fontFamily: [
			'Rubik',
			'"Helvetica Neue"',
			'Roboto',
			'-apple-system',
			'BlinkMacSystemFont',
			'Arial',
			'sans-serif',
		].join(','),
		h1: {
			fontFamily: ['Righteous', 'cursive'].join(','),
		},
		h2: {
			fontFamily: ['Righteous', 'cursive'].join(','),
		},
		h3: {
			fontFamily: ['Righteous', 'cursive'].join(','),
		},
		h4: {
			fontFamily: ['Righteous', 'cursive'].join(','),
		},
		h5: {
			fontFamily: ['Righteous', 'cursive'].join(','),
		},
		h6: {
			fontFamily: ['Righteous', 'cursive'].join(','),
		},
		body1: {
			fontSize: '1.1rem',
			mb: 2,
			'@media (min-width: 900px)': {
				fontSize: '1.25rem',
				mb: 4,
			},
		},
	},
})

export default theme
