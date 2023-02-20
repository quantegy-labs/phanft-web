import { Box, Container, Grid, Link, Paper, Typography } from '@mui/material'
import Image from 'next/image'

const styles = {
	infoWrap: {
		backgroundColor: '#000',
		pt: 0,
	},
	paper: {
		p: 4,
		border: '2px solid #8DFF9C',
		borderRadius: '4px',
	},
	spacer: {
		my: 6,
	},
	heading: {
		color: '#fff',
		fontSize: 30,
		'@media (min-width: 900px)': {
			fontSize: 40,
		},
	},
	subheading: {
		color: '#fff',
		fontSize: 20,
		fontStyle: 'italic',
		fontWeight: 300,
		'@media (min-width: 900px)': {
			fontSize: 26,
		},
	},
	text: {
		color: '#fff',
		mb: 2,
	},
}

const SectionInfo = (): JSX.Element => (
	<>
		<Box id="info" component="section" sx={styles.infoWrap}>
			<Container maxWidth="lg">
				<Paper elevation={3} sx={styles.paper}>
					<Grid container spacing={4}>
						<Grid item xs={12} sm={4}>
							<Image
								quality={20}
								layout="responsive"
								width={460}
								height={320}
								src="/charities.png"
								alt="Waterwheel &amp; Mockingbird Foundation"
							/>
						</Grid>
						<Grid item xs={12} sm={8}>
							<Typography variant="h3" gutterBottom sx={styles.heading}>
								Sharin&apos; in the Groove
							</Typography>
							<Typography variant="h5" gutterBottom sx={styles.subheading}>
								Investing back into the community
							</Typography>
							<Box className="small-block secondary left" />
							<Typography sx={styles.text}>
								A 15% portion of net proceeds from the Lizards mint will be donated to the{' '}
								<Link href="https://phish.com/waterwheel/" target="_blank" rel="noreferrer" color="inherit">
									<em>Waterwheel Foundation</em>
								</Link>{' '}
								and{' '}
								<Link href="https://mbird.org/" target="_blank" rel="noreferrer" color="inherit">
									<em>The Mockingbird Foundation</em>
								</Link>
								. These initial contributions will set the stage for a charitable component to our digital community
								going forward.
							</Typography>
							<Typography sx={styles.text}>
								The rest of the proceeds will be used as operating expenses to manifest our big dreams and execute on
								the slew of benefits we have planned for you.
							</Typography>
						</Grid>
					</Grid>
				</Paper>
				<Box sx={styles.spacer} />
				<Paper elevation={3} sx={styles.paper}>
					<Grid container spacing={4}>
						<Grid item xs={12} sm={8}>
							<Typography variant="h3" gutterBottom sx={styles.heading}>
								The Nitty Gritty
							</Typography>
							<Typography variant="h5" gutterBottom sx={styles.subheading}>
								Tech specs and how to mint
							</Typography>
							<Box className="small-block secondary left" />
							<Typography sx={styles.text}>
								Enlightened Lizards are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.
							</Typography>
							<Typography sx={styles.text}>
								The collection is among the first to be{' '}
								<Link
									href="https://rightsregistry.xyz/ethereum/0x54A4cDeA2CF37db48E0c78bb41De6904DFF6d4E2"
									target="_blank"
									underline="always"
									color="inherit"
								>
									<em>certified on the MINTangible Rights Registry</em>
								</Link>{' '}
								with rights granted in a transparent, on-chain licensing agreement.
							</Typography>
							<Typography sx={styles.text}>
								If you&apos;re new to the minting process or just want some more info, please see our{' '}
								<Link href="#faq" color="inherit">
									<em>FAQs section</em>
								</Link>{' '}
								that helps make the process super easy for you. N00b friendly.
							</Typography>
						</Grid>
						<Grid item xs={12} sm={4}>
							<Image
								quality={20}
								layout="responsive"
								width={300}
								height={300}
								src="/lizard_unknown.png"
								alt="Lizards Genesis PFP"
							/>
						</Grid>
					</Grid>
				</Paper>
			</Container>
		</Box>
	</>
)

export default SectionInfo
