import type { NextPage } from 'next'
import Head from 'next/head'
import NextLink from 'next/link'
import { Alert, Box, Container, Link, Paper, Typography } from '@mui/material'
import AppLayout from '../components/layouts/AppLayout'
import Image from 'next/image'
import image1 from '../public/guide_image1.png'
import image2 from '../public/guide_image2.png'
import image3 from '../public/guide_image3.png'
import image4 from '../public/guide_image4.png'
import image5 from '../public/guide_image5.png'
import image6 from '../public/guide_image6.png'
import image7 from '../public/guide_image7.png'

const styles = {
	wrap: {
		a: {
			fontStyle: 'italic',
		},
	},
	title: {
		mt: 8,
		color: '#fff',
	},
	subtitle: {
		color: '#fff',
	},
	paper: {
		px: 4,
		py: 6,
		mb: 8,
		color: '#fff',
		border: '2px solid #8DFF9C',
		borderRadius: '4px',
	},
	heading: {
		mt: 2,
		mb: 4,
		fontWeight: 700,
		// textTransform: 'uppercase',
		fontSize: '1.5rem',
		'@media (min-width: 900px)': {
			fontSize: '1.75rem',
			mb: 4,
		},
	},
	h4: {
		mt: 6,
		mb: 4,
	},
	h5: {
		my: 2,
		fontWeight: 500,
	},
	effectiveDate: {
		fontSize: 16,
		fontStyle: 'italic',
		fontWeight: 300,
		mb: 6,
	},
	p: {
		fontSize: '1.1rem',
		mb: 2,
		'@media (min-width: 900px)': {
			fontSize: '1.25rem',
			mb: 4,
		},
	},
	li: {
		fontSize: '1.1rem',
		mb: 2,
		'@media (min-width: 900px)': {
			fontSize: '1.25rem',
			mb: 4,
		},
	},
}

const GuidePage: NextPage = () => {
	return (
		<>
			<Head>
				<title>PhaNFT | How to Mint Guide</title>
			</Head>
			<AppLayout>
				<Container maxWidth="lg" sx={styles.wrap}>
					<Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" mb={4}>
						<Typography variant="h2" sx={styles.title}>
							How to Mint Guide
						</Typography>
						<Typography variant="h5" sx={styles.subtitle}>
							Follow this helpful phriendly guide to better understand minting tokens.
						</Typography>
						<Box className="large-block" />
					</Box>
					<Paper sx={styles.paper} elevation={3}>
						<Typography variant="h4" sx={{ mb: 4 }}>
							Split Open and Mint!
						</Typography>
						<Typography sx={styles.p}>
							If you&apos;ve never purchased an NFT before and plan to purchase a PhaNFT Enlightened Lizard, you&apos;ll
							want to read this! NFTs are acquired in one of two ways. The first is by minting a token. You bring it to
							life on the blockchain, shocking and persuading its metadata to ignite.
						</Typography>
						<Typography sx={styles.p}>
							The other way NFTs are purchased is via secondary marketplaces such as OpenSea. NFTs that have already
							been minted are bought, sold, and exchanged between wallets via secondary marketplaces. Think of it like
							eBay for NFTs.
						</Typography>
						<Typography sx={styles.p}>For now lets focus on how to mint an Enlightened Lizard from PhaNFT.</Typography>
						<Typography variant="h4" sx={{ mb: 4 }} component="h3">
							Option 1: The Easiest Way - Buy With Credit Card
						</Typography>
						<Typography sx={styles.p}>
							PhaNFT partnered with Crossmint to make purchasing an Enlightened Lizard as easy as possible (no crypto
							required).
						</Typography>
						<Typography sx={styles.p}>
							Here, you click the “Buy with Credit Card” button on our{' '}
							<NextLink href="/mint" passHref>
								<Link underline="always" color="inherit">
									mint page
								</Link>
							</NextLink>
							, follow the basic instructions, and you&apos;re done! This NFT will live in a custodial wallet on
							Crossmint, or you can choose to transfer it to a non-custodian wallet such as MetaMask. See below for
							instructions on how to do this.
						</Typography>
						<Typography variant="h4" sx={{ mb: 4 }} component="h3">
							Option 2: The Crypto Way - Buy With Ether
						</Typography>
						<Typography sx={styles.p}>
							Ether (denominated as ETH) is the cryptocurrency of the Ethereum blockchain network that is hosting the
							Enlightened Lizards collection. It can easily be purchased on a cryptocurrency exchange such as Coinbase,
							Gemini, or Binance. (Coinbase is likely your easiest experience and it&apos;s a public company in the U.S.
							that is FDIC insured).
						</Typography>
						<Alert severity="info" sx={{ mb: 4 }}>
							<strong>Important note on ETH transfer delays</strong> - if you don&apos;t currently own any ETH, and need
							to buy some using fiat currency (such as U.S. Dollars), most of these cryptocurrency exchanges will let
							you trade dollars for ETH before the dollars are actually in your crypto wallet. An example of this would
							be Coinbase letting you do an ACH transfer of $USD from your banking institution into Coinbase, and making
							it available to trade immediately for ETH – even though it will take 3-5 business days for the actual
							money to land in Coinbase. Wire transfers speed this process up but will cost you $25-$40 for that
							transfer fee. In this event, Coinbase (or another exchange you&apos;re using) won&apos;t let you transfer
							the ETH you have bought, from your wallet on that exchange into your MetaMask wallet (or any external
							wallet) until those dollars have been deposited and cleared.
							<br />
							<br />
							This means, if you&apos;re planning to mint, <em>and don&apos;t currently own any ETH</em>, you should
							plan at least 5 business days ahead of time to start the process and buy your ETH at Coinbase or your
							chosen exchange.
							<br />
							<br />
							<em>
								If you&apos;re rolling your eyes at this already and it sounds like a pain, we highly recommend minting
								using your credit card via Crossmint.
							</em>
						</Alert>
						<Typography sx={styles.h5} variant="h5">
							Step 1 - Install a MetaMask Wallet
						</Typography>
						<Typography sx={styles.p}>
							When collecting an NFT, you&apos;ll need a digital wallet to store it in. We recommend using MetaMask.
							Check out{' '}
							<Link
								underline="always"
								color="inherit"
								href="https://www.youtube.com/watch?v=WAStJtjYI_c."
								target="_blank"
								rel="noopener noreferrer"
							>
								this video
							</Link>{' '}
							that will walk you through setting up a secure MetaMask wallet.
						</Typography>
						<Typography sx={styles.p}>
							<strong>Follow these steps to get MetaMask installed:</strong>
						</Typography>
						<Link
							underline="always"
							color="inherit"
							href="https://metamask.io"
							target="_blank"
							rel="noopener noreferrer"
						></Link>
						<ol>
							<li>
								<Typography sx={styles.li}>
									Go to the{' '}
									<Link
										underline="always"
										color="inherit"
										href="https://metamask.io"
										target="_blank"
										rel="noopener noreferrer"
									>
										MetaMask website
									</Link>{' '}
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>Download for your supported browser</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									Click &quot;Add to Chrome&quot;, and then &quot;Add Extension&quot; to install the browser extension.
								</Typography>
							</li>
							<Image className="full-width" priority quality={20} src={image1} alt="How to Mint" />
							<Image className="full-width" priority quality={20} src={image7} alt="How to Mint" />
							<Box sx={{ mb: 4 }} />
							<li>
								<Typography sx={styles.li}>
									After you install the extension, you will be redirected to a new page. Click &quot;Create a
									Wallet&quot;.
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									Create a strong password. This is used to open and unlock your MetaMask wallet, which is different
									than the backup phrase.
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									Backup and verify your secret backup phrase.{' '}
									<strong>This may be the most important step to do in your crypto journey.</strong> The backup phrase
									provides access to your wallet. It allows you to restore it to any device. If someone else gets this
									phrase, they get access to your wallet. Never show or share this phrase with anyone!
								</Typography>
								<Typography sx={styles.li}>
									Keep it secure in a password manager (such as 1Password), or write it down in a few safe and secure
									areas (like a safety deposit box) if you don&apos;t want to have any trace of it recorded digitally.
									We will never ask you for your seed phrase and no legitimate entity or person will.
								</Typography>
							</li>
							<Image className="full-width" priority quality={20} src={image5} alt="How to Mint" />
							<Box sx={{ mb: 4 }} />
							<li>
								<Typography sx={styles.li}>
									Now you have a wallet set up that you can use to interact with Ethereum blockchain network and
									buy/sell NFTs!
								</Typography>
							</li>
						</ol>
						<Typography sx={styles.h5} variant="h5">
							Step 2 - Transfer In Some Funds
						</Typography>
						<Typography sx={styles.p}>
							You&apos;ll need to transfer some Ether (ETH) into your digital wallet. If you are buying ETH on Coinbase
							and using a MetaMask wallet,{' '}
							<Link
								underline="always"
								color="inherit"
								href="https://www.youtube.com/watch?v=9NQgCyOXQlY"
								target="_blank"
								rel="noopener noreferrer"
							>
								watch this tutorial
							</Link>{' '}
							on how to transfer your ETH into your wallet. If you are minting any NFT, your digital wallet needs to
							have enough ETH for the mint price and a little extra for gas fees (which are fees to use the ethereum
							network). We recommend .01 to .02 extra ETH for gas fees.
						</Typography>
						<Typography sx={styles.h5} variant="h5">
							Step 3 - Visit Our Mint Page
						</Typography>
						<Typography sx={styles.p}>
							Once you have enough ETH in your wallet, visit our{' '}
							<NextLink href="/mint" passHref>
								<Link underline="always" color="inherit">
									mint page
								</Link>
							</NextLink>{' '}
							and connect your wallet. Click the wallet icon on upper right hand corner of site navigation bar.
						</Typography>
						<Image className="full-width" priority quality={20} src={image2} alt="How to Mint" />
						<Typography sx={styles.h5} variant="h5">
							Step 4 - Mint a Lizard!
						</Typography>
						<Typography sx={styles.p}>
							When the mint is live, press the “Mint” button that will be large and centered on https://phanft.xyz and
							enter the number of NFTs you want to buy.
						</Typography>
						<Typography sx={styles.p}>
							MetaMask will pop open a dialog box, and you&apos;ll be able to see estimated gas fees and approve or
							reject the transaction. If you&apos;re okay with the fees, click “approve”.
						</Typography>
						<Alert severity="success">
							🎉 Congratulations, you&apos;re done! You&apos;ve helped save a Lizard by minting it on the blockchain! 🎉
						</Alert>
						<Box sx={{ mb: 4 }} />
						<Typography sx={styles.p}>
							You&apos;ll know whether the mint was successful and will soon see the NFT appear in your MetaMask mobile
							wallet or by going to{' '}
							<Link
								underline="always"
								color="inherit"
								href="https://opensea.io"
								target="_blank"
								rel="noopener noreferrer"
							>
								OpenSea
							</Link>
							, connecting your wallet, and clicking “Profile” to see all the NFTs in your wallet.
						</Typography>
					</Paper>

					<Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" mb={4}>
						<Typography variant="h3" sx={styles.title} textAlign="center">
							How to Transfer Your NFT from Crossmint to MetaMask
						</Typography>
						<Box className="large-block" />
					</Box>
					<Paper sx={styles.paper} elevation={3}>
						<Typography sx={styles.p}>
							Follow these steps to transfer your token from your custodial wallet with Crossmint to your non-custodial
							wallet with MetaMask.
						</Typography>
						<ol>
							<li>
								<Typography sx={styles.li}>
									Login to your Crossmint account{' '}
									<Link
										underline="always"
										color="inherit"
										href="https://www.crossmint.io/signin?callbackUrl=https%3A%2F%2Fwww.crossmint.io%2F"
										target="_blank"
										rel="noopener noreferrer"
									>
										here
									</Link>
									.
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>Select the NFT you want to transfer from the “Collection” tab.</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>Click the “Export” button from the top-right corner.</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>On the pop-up dialog, click &quot;Add Wallet&quot;.</Typography>
							</li>
							<Image className="full-width" priority quality={20} src={image6} alt="How to Mint" />
							<li>
								<Typography sx={styles.li}>
									Get your ETH address from your MetaMask wallet. Click the “Copy” icon as shown in the MetaMask
									screenshot below.
								</Typography>
							</li>
							<Image className="full-width" priority quality={20} src={image3} alt="How to Mint" />
							<li>
								<Typography sx={styles.li}>
									Go back to{' '}
									<Link
										underline="always"
										color="inherit"
										href="https://www.crossmint.io/signin?callbackUrl=https%3A%2F%2Fwww.crossmint.io%2F"
										target="_blank"
										rel="noopener noreferrer"
									>
										Crossmint
									</Link>{' '}
									and paste this address into the “Wallet Address” field under “Recipient Wallet”.
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									Then click “Save Wallet” to transfer (export) your NFT to your MetaMask wallet. This cannot be undone,
									so make sure your ETH address is correct in the field above.
								</Typography>
							</li>
							<Image className="full-width" priority quality={20} src={image4} alt="How to Mint" />
							<Box sx={{ mb: 4 }} />
							<li>
								<Typography sx={styles.li}>It may take a minute for the transfer to complete...</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									To confirm your NFT is now in your MetaMask wallet, you can view the transaction in your MetaMask
									“Activity” tab.
								</Typography>
							</li>
						</ol>
					</Paper>

					<Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" mb={4}>
						<Typography variant="h3" sx={styles.title} textAlign="center">
							How to View Your NFT
						</Typography>
						<Box className="large-block" />
					</Box>
					<Paper sx={styles.paper} elevation={3}>
						<Typography sx={styles.p}>
							To view your Enlightened Lizard NFT from your desktop or mobile browser, go to{' '}
							<Link
								underline="always"
								color="inherit"
								href="https://opensea.io"
								target="_blank"
								rel="noopener noreferrer"
							>
								OpenSea
							</Link>{' '}
							connect your wallet, and then click &quot;Profile&quot;.
						</Typography>
						<Typography sx={styles.p}>To view your NFT within your MetaMask mobile wallet:</Typography>
						<ol>
							<li>
								<Typography sx={styles.li}>
									Download MetaMask&apos;s mobile app from the iTunes App Store or Google Play Store.
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>Enter your password to unlock the wallet.</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									You will see 2 Tabs – <em>TOKENS</em> and <em>NFTs</em>. TOKENS shows how much ETH (or other crypto)
									is in your wallet. <em>NFTs</em> shows your NFTs. If the Enlightened Lizard is not automatically
									showing up in your MetaMask mobile wallet:
								</Typography>
								<ul>
									<li>
										<Typography sx={styles.li}>Click the hamburger icon in the top right corner.</Typography>
									</li>
									<li>
										<Typography sx={styles.li}>Tap &apos;Settings&apos;.</Typography>
									</li>
									<li>
										<Typography sx={styles.li}>Tab &apos;Advanced&apos;.</Typography>
									</li>
									<li>
										<Typography sx={styles.li}>
											Check ‘Enhanced Token Detection&apos; so it turns blue. This will download the NFT image from the
											blockchain to your wallet for viewability.
										</Typography>
									</li>
								</ul>
							</li>
							<li>
								<Typography sx={styles.li}>
									If this doesn&apos;t work, go back to your NFTs tab, and click the blue highlighted text “Import NFTs”
									and follow the instructions.
								</Typography>
							</li>
						</ol>
					</Paper>
				</Container>
			</AppLayout>
		</>
	)
}

export default GuidePage
