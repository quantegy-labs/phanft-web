import { Box, Button, Container, Typography } from '@mui/material'
import Link from 'next/link'

const styles = {
	banner: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		pt: 20,
		pb: 30,
		px: 4,
		background: "url('/banner_msg_lizards.png') center bottom no-repeat",
		backgroundSize: 'cover',
	},
	headline: {
		color: '#fff',
		fontSize: 36,
		'@media (min-width: 900px)': {
			fontSize: 42,
		},
	},
	heading: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 28,
		'@media (min-width: 900px)': {
			fontSize: 36,
		},
	},
	introText: {
		color: '#fff',
		fontSize: '1.1rem',
		mb: 2,
		'@media (min-width: 900px)': {
			fontSize: '1.25rem',
			mb: 4,
		},
	},
	btn: {
		mt: 4,
		py: 1,
		px: 6,
		fontSize: 22,
	},
}

const SectionIntro = (): JSX.Element => (
	<>
		<Box sx={styles.banner}>
			<Typography variant="h2" sx={styles.headline}>
				Your Web 3.0 Pass to 4.0 Phandom
			</Typography>
		</Box>
		<Box id="intro" component="section">
			<Container maxWidth="lg">
				<Typography variant="h3" gutterBottom sx={styles.heading}>
					This one is for you, and a few companions on this ride
				</Typography>
				<Box className="large-block" />
				<Typography sx={styles.introText}>
					PhanFT is your NFT passport to a helping phriendly community who are excited about the future of web3,
					music-art culture, and new forms of participatory fandom.
				</Typography>
				<Typography sx={styles.introText}>
					Together, we&apos;re lighting the torch for a whole new paradigm for phans to collect, commune, and continue
					sharin&apos; in the groove around Vermont&apos;s Phinest. ⭕️
				</Typography>
				<Box display="flex" justifyContent="center">
					<Link href="/mint">
						<Button variant="contained" color="primary" size="large" sx={styles.btn}>
							Mint Now
						</Button>
					</Link>
				</Box>
			</Container>
		</Box>
	</>
)

export default SectionIntro
