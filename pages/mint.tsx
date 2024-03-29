import type { NextPage } from 'next'
import Head from 'next/head'
import NextLink from 'next/link'
import { Box, Container, Grid, Link, Typography } from '@mui/material'
import AppLayout from '../components/layouts/AppLayout'
import MintingContainer from '../components/minting/MintingContainer'

const styles = {
	container: { color: '#fff', my: 8 },
	text: {
		color: '#fff',
		mb: 3,
		a: {
			color: 'inherit',
			textDecoration: 'underline',
			fontStyle: 'italic',
		},
	},
}

const AdminPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>PhaNFT | Your Web 3.0 Pass to 4.0 Phandom</title>
			</Head>
			<AppLayout>
				<Container maxWidth="xl" sx={styles.container}>
					<Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" mb={4}>
						<Typography variant="h2">Mint A Lizard</Typography>
						<Typography variant="h5">Enlighten the Lizards by minting a token.</Typography>
						<Box className="large-block" />
					</Box>
					<Grid container spacing={6}>
						<Grid item xs={12} md={5}>
							<Typography sx={styles.text}>
								Have the Lizards died? Not yet! They&apos;re practically extinct from doing things smart people
								don&apos;t do, but you can be smart and help save them from extinction by minting a token on the
								blockchain.
							</Typography>
							<Typography sx={styles.text}>
								You can choose to pay with ETH through your MetaMask wallet, or you can you choose to pay directly with
								a credit card.
							</Typography>
							<Typography sx={styles.text}>
								Please check out our{' '}
								<NextLink href="/guide" passHref>
									<Link>helping friendly guide</Link>
								</NextLink>{' '}
								if this is your first time minting an NFT.
							</Typography>
							{/* <Box sx={{ maxWidth: '500px', m: 'auto', mt: 8 }}>
								<Image
									priority
									quality={20}
									layout="responsive"
									width={600}
									height={600}
									src="/lizard5.jpg"
									alt="Lizards Genesis PFP"
								/>
							</Box> */}
						</Grid>
						<Grid item xs={12} md={7}>
							<MintingContainer />
						</Grid>
					</Grid>
				</Container>
			</AppLayout>
		</>
	)
}

export default AdminPage
