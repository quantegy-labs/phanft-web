import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { Web3ContextProvider } from '../components/Web3Provider'
// import { ToastContainer } from 'react-toastify'
import '../styles/globals.css'

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

// const notifications = <ToastContainer position="top-left" autoClose={5000} closeOnClick={true} pauseOnHover={true} theme="light" />

const PhanFTApp = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<Web3ContextProvider>
			<ThemeProvider theme={theme}>
				<NextNProgress
					color={theme.palette.primary.main}
					startPosition={0.3}
					stopDelayMs={200}
					height={3}
					showOnShallow={true}
				/>
				<Component {...pageProps} />
				<CssBaseline enableColorScheme />
			</ThemeProvider>
		</Web3ContextProvider>
	)
}

export default PhanFTApp
