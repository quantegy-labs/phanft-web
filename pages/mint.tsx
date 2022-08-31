import { Box, Container, Grid, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AppLayout from '../components/layouts/AppLayout'
import MintingContainer from '../components/minting/MintingContainer'

const AdminPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>PhanFT | Your Web 3.0 Pass to 4.0 Phandom</title>
			</Head>
			<AppLayout>
				<Container maxWidth="xl" sx={{ my: 8 }}>
					<Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" mb={10}>
						<Typography variant="h2">Mint A Lizard</Typography>
						<Typography variant="h5">Enlighten the Lizards by minting a token.</Typography>
					</Box>
					<Grid container spacing={3}>
						<Grid item xs={12} md={5}>
							<Typography sx={{ mb: 3 }}>
								Have the Lizards died? Not yet! They're practically extinct from doing things smart people don't do, but
								you can be smart and help save them from extinction by minting a token on the blockchain.
							</Typography>
							<Typography sx={{ mb: 3 }}>
								You can choose to pay with ETH through your MetaMask wallet, or you can you choose to pay directly with
								a credit card.
							</Typography>
							<Box sx={{ maxWidth: '500px', m: 'auto', mt: 8 }}>
								<Image width={600} height={600} src="/lizard5.png" alt="Lizards Genesis PFP" />
							</Box>
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
