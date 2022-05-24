import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Faq.module.css'

const FaqPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>PhanFT | Frequently Asked Questions</title>
			</Head>
			<Layout>
				<h1>Frequently Asked Questions</h1>
			</Layout>
		</>
	)
}

export default FaqPage
