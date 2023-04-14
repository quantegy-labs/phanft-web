import Head from 'next/head'
import AppLayout from '../components/layouts/AppLayout'
import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'

const NotFoundPage = () => (
	<>
		<Head>
			<title>PhaNFT | Page Not Found</title>
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
				<Typography variant="h4">Page not found!</Typography>
				<Typography variant="h6">You&apos;ll never get out of this maze...</Typography>
			</Container>
		</AppLayout>
	</>
)

export default NotFoundPage
