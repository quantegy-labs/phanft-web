import { Container, Typography } from '@mui/material'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import AppLayout from '../../components/layouts/AppLayout'

type Props = {
	id: string
}

const EnlightenedLizardDetailsPage: NextPage = (props) => {
	// @ts-ignore
	const { id } = props

	return (
		<>
			<Head>
				<title>PhanFT | Enlightened Lizards #{id}</title>
			</Head>
			<AppLayout>
				<Container maxWidth="xl" sx={{ my: 8, textAlign: 'center' }}>
					<Typography variant="h4">Content coming soon...</Typography>
					<Typography variant="h6">Everything's right, so just hold tight.</Typography>
				</Container>
			</AppLayout>
		</>
	)
}


export const getServerSideProps: GetServerSideProps = async context => {
	// Get user object
	let id = context.query.id
	if (typeof id === 'object') id = id[0].toLowerCase()
	else id = id?.toLowerCase()
	return {
		props: {
			id: id
		},
	}
}

export default EnlightenedLizardDetailsPage
