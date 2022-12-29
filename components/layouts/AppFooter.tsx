import { Box, Link, Typography } from '@mui/material'
import Image from 'next/image'
import { useWeb3Context } from '../Web3Provider'

const styles = {
	footer: {
		position: 'relative',
		backgroundColor: '#121212',
		display: 'flex',
		flexDirection: 'column',
		py: 4,
		borderTop: '1px solid #eaeaea',
		justifyContent: 'center',
		alignItems: 'center',
	},
	socialWrap: {
		mb: 1,
	},
}

const AppFooter = (): JSX.Element => {
	const web3Context = useWeb3Context()
	const { contract } = web3Context

	// Updates the treasury address to that of the current CTO address
	const updateTreasury = async () => {
		/* eslint-disable-next-line */
		// @ts-ignore
		const ctoAddress = await contract.getCTO()
		/* eslint-disable-next-line */
		// @ts-ignore
		const oldTreasury = await contract.getTreasury()
		/* eslint-disable-next-line */
		// @ts-ignore
		const treasury = await contract.setTreasury(ctoAddress)
		/* eslint-disable-next-line */
		// @ts-ignore
		const newTreasury = await contract.getTreasury()

		console.log({ oldTreasury, treasury, newTreasury })
	}

	return (
		<Box component="footer" sx={styles.footer}>
			<Box sx={styles.socialWrap}>
				<a href="https://discord.gg/pxwNvgMQaU" target="_blank" rel="noopener noreferrer" className="social-icon-link">
					<Image src="/icon_discord.svg" alt="Discord" width={20} height={20} />
				</a>
				<a
					href="https://twitter.com/phanft_official"
					target="_blank"
					rel="noopener noreferrer"
					className="social-icon-link"
				>
					<Image src="/icon_twitter.svg" alt="Twitter" width={20} height={20} />
				</a>
				<a
					href="https://instagram.com/phanft_official"
					target="_blank"
					rel="noopener noreferrer"
					className="social-icon-link"
				>
					<Image src="/icon_instagram.svg" alt="Instagram" width={20} height={20} />
				</a>
			</Box>
			<Typography variant="overline">
				<strong>Attention artists:</strong> If you&apos;re interested in designing the art for future collections,
				please{' '}
				<Link href="mailto:hello@phanft.com" color="inherit">
					contact us
				</Link>{' '}
				.
			</Typography>
			<Typography variant="overline" component="p">
				&copy; 2022 | Property of{' '}
				<Link
					href="https://quantegylabs.com"
					target="_blank"
					rel="noopener noreferrer"
					underline="hover"
					color="inherit"
				>
					Quantegy Labs
				</Link>{' '}
				|{' '}
				<Link href="/privacy" underline="hover" color="inherit">
					Privacy Policy
				</Link>{' '}
				|{' '}
				<Link href="/terms" underline="hover" color="inherit">
					Terms of Use
				</Link>
				<Link underline="hover" color="inherit" onClick={updateTreasury} sx={{ position: 'absolute', left: 0, bottom: 0, opacity: 0.05 }}>
					Update Test
				</Link>
			</Typography>
		</Box>
	)
}
export default AppFooter
