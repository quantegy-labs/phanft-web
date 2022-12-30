import { Container, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import AppLayout from '../../components/layouts/AppLayout'

const EnlightenedLizardsCollectionPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>PhanFT | Enlightened Lizards Collection</title>
			</Head>
			<AppLayout>
				<Container maxWidth="xl" sx={{ my: 8, textAlign: 'center' }}>
					<Typography variant="h4">Content coming soon...</Typography>
					<Typography variant="h6">Everything&apos;s right, so just hold tight.</Typography>
				</Container>
			</AppLayout>
		</>
	)
}

export default EnlightenedLizardsCollectionPage
