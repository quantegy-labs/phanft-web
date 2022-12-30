import { CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { Web3ContextProvider } from '../components/Web3Provider'
import theme from '../lib/theme'
import '../styles/globals.css'

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
