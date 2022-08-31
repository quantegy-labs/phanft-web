import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { Web3ContextProvider } from '../components/Web3Provider'
import { ToastContainer } from 'react-toastify';
import '../styles/globals.css'

const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#ec1f65',
			contrastText: '#fff',
		},
		secondary: {
			main: '#54c6eb',
			contrastText: '#fff',
		},
		info: {
			main: '#201c1c',
			contrastText: '#fff',
		},
		background: {
			paper: '#2f4136',
			default: '#2f4136',
		},
	},
	typography: {
		body1: {
			fontSize: '1.25rem',
		},
	},
})

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
				<ToastContainer
          position='top-left'
          autoClose={5000}
          closeOnClick={true}
          pauseOnHover={true}
          theme='dark'
				/>
			</ThemeProvider>
		</Web3ContextProvider>
	)
}

export default PhanFTApp
