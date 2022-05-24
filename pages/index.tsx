import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>PhanFT | Welcome</title>
			</Head>
			<Layout>
				<h1>Welcome to the Phanaverse!</h1>
			</Layout>
		</>
	)
}

export default Home
