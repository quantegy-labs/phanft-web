import type { ReactNode } from 'react'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Link from 'next/link'

type LayoutProps = {
	children: ReactNode,
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<>
			<Head>
				<title>PhanFT</title>
				<meta name="description" content="PhanFT is a user-owned collective." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header>
				<nav>
					<ul>
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/mission">Mission</Link>
						</li>
						<li>
							<Link href="/faq">FAQs</Link>
						</li>
					</ul>
				</nav>
			</header>
			<main>
				{children}
				<footer className={styles.footer}>
					<a href="https://quantegylabs.com" target="_blank" rel="noopener noreferrer">
						Property of Quantegy Labs
					</a>
				</footer>
			</main>
		</>
	)
}

export default Layout
