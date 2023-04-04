import { Box, Container, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AppLayout from '../../components/layouts/AppLayout'

const EnlightenedLizardsCollectionPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>PhaNFT | Enlightened Lizards Collection</title>
			</Head>
			<AppLayout>
				<Container maxWidth="xl" sx={{ my: 12, textAlign: 'center', color: '#fff' }}>
					<Image
						priority
						quality={20}
						layout="fixed"
						width={300}
						height={300}
						src="/lizard_unknown.jpg"
						alt="Lizards Genesis PFP"
					/>
					<Box sx={{ mb: 4 }} />
					<Typography variant="h4">Content coming soon...</Typography>
					<Typography variant="h6">Everything&apos;s right, so just hold tight.</Typography>
				</Container>
			</AppLayout>
		</>
	)
}

export default EnlightenedLizardsCollectionPage
