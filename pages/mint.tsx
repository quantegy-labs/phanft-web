import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Box, Container, Grid, Typography } from '@mui/material'
import AppLayout from '../components/layouts/AppLayout'
import MintingContainer from '../components/minting/MintingContainer'

const MintPage: NextPage = () => {
	const images = ['lizard1.png', 'lizard2.png', 'lizard3.png', 'lizard4.png', 'lizard5.png']
	const [currImgIdx, setCurrImgIdx] = useState(0)
	const [currImg, setCurrImg] = useState(images[0])
	let _interval: NodeJS.Timer | null

	useEffect(() => {
		console.log({ currImg })

		const initCarousel = () => {
			if (!_interval)
				_interval = setInterval(() => {
					let currIdx = currImgIdx
					if (currIdx === images.length - 1) {
						setCurrImgIdx(0)
					} else {
						setCurrImgIdx(currIdx + 1)
					}
				}, 1500)
		}

		// Delay cycling for 3s til after page load
		setTimeout(() => initCarousel(), 3000)

		return () => {
			if (_interval) {
				clearInterval(_interval)
				_interval = null
			}
		}
	}, [])

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
								<Image width={600} height={600} src={`/${images[currImgIdx]}`} alt="Enlightened Lizard" priority />
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

export default MintPage
