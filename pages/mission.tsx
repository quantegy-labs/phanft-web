import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Mission.module.css'

const MissionPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>PhanFT | Our Mission</title>
			</Head>
			<Layout>
				<h1>Why PhanFT?</h1>
			</Layout>
		</>
	)
}

export default MissionPage
