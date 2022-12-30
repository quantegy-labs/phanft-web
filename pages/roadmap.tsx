import { Box } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import AppLayout from '../components/layouts/AppLayout'
import SectionRoadmap from '../components/sections/SectionRoadmap'

const RoadmapPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>PhanFT | Let&apos;s Get This Show On The Roadmap to Web3</title>
			</Head>
			<AppLayout>
				<Box sx={{ my: 8 }}>
					<SectionRoadmap />
				</Box>
			</AppLayout>
		</>
	)
}

export default RoadmapPage
