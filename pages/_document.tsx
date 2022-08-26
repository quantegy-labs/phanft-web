import type { DocumentContext } from 'next/document'
import Document, { Head, Html, Main, NextScript } from 'next/document'

class AppDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html>
				<Head>
					<meta
						name="description"
						content="By phans, for phans, PhanFT is a series of utility-driven NFT collections to celebrate and unify our amazing music & art loving community in Web3 & IRL."
					/>
					<link rel="icon" href="/favicon.ico" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
					<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default AppDocument
