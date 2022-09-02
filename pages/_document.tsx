import type { DocumentContext } from 'next/document'
import Script from 'next/script'
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
					{process.env.NODE_ENV === 'production' && (
						<>
							<Script
								src="https://www.googletagmanager.com/gtag/js?id=G-S72HBDZ5XN"
								strategy="afterInteractive"
							/>
							<Script id="google-analytics" strategy="afterInteractive">
								{`
									window.dataLayer = window.dataLayer || [];
									function gtag(){window.dataLayer.push(arguments);}
									gtag('js', new Date());

									gtag('config', 'G-S72HBDZ5XN');
								`}
							</Script>
						</>
					)}
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
