import { Box, Container, Grid, Typography } from '@mui/material'

const styles = {
	headings: {
		textAlign: 'center',
		mb: 6,
	},
	heading: {
		textAlign: 'center',
		mb: 1,
		fontSize: 30,
		'@media (min-width: 900px)': {
			fontSize: 40,
		}
	},
	subheading: {
		fontSize: 24,
		'@media (min-width: 900px)': {
			fontSize: 30,
		}
	},
	missionText: {
		fontSize: '1.1rem',
		mb: 2,
		'@media (min-width: 900px)': {
			fontSize: '1.25rem',
			mb: 4,
		}
	},
}

const SectionMission = (): JSX.Element => (
	<Box component="section" id="mission">
		<Container maxWidth="lg">
			<Box sx={styles.headings}>
				<Typography variant="h3" sx={styles.heading}>
					Why PhanFT?
				</Typography>
				<Typography variant="h4" sx={styles.subheading}>Our Time is Near, the Mission&apos;s Clear</Typography>
			</Box>
			<Grid container spacing={4}>
				<Grid item md={6}>
					<Typography sx={styles.missionText}>
						The way people interact and engage digitally is evolving faster than ever. Thanks to Web3 technologies,
						we&apos;re at the forefront of a new era where passionate communities can self-organize to celebrate what
						they love most, create value in forward-thinking ways, and collaborate to achieve common goals.
					</Typography>
					<Typography sx={styles.missionText}>There is so much more than buying and trading JPEGs.</Typography>
					<Typography sx={styles.missionText}>
						Similar to how we Phans were among the first in the mid-90&apos;s web 1.0 era to congregate and build
						digital community in newsgroups, AOL chatrooms, and message boards to trade tapes, share show reviews and
						speculate over rumors; today we have a massive opportunity to become digital pioneers once again, and define
						what a passionate music community can do and be.
					</Typography>
					<Typography sx={styles.missionText}>
						We believe in and understand how NFTs are the ideal vehicle to enable and reward fandom, while supporting a
						healthy digital ecosystem for artists and creators.
					</Typography>
				</Grid>
				<Grid item md={6}>
					<Typography sx={styles.missionText}>
						At PhanFT, our artist partners will receive a royalty, not only on primary sales but also on secondary
						market sales such as on OpenSea. Imagine a world where instead of artists making a one-time sale at the
						merch booth, they get a cut every time their work exchanges hands, for years and years to come. Pretty
						awesome.
					</Typography>
					<Typography sx={styles.missionText}>
						We&apos;re excited to see that same model flow into ticketing, and put secondary sales back into the
						band&apos;s pockets instead of scalpers.
					</Typography>
					<Typography sx={styles.missionText}>
						We&apos;re stoked about this new digital paradigm with endless possibilities. Consider this your invitation
						to jump in the pond (with us here to guide you) as we create a vibrant and inclusive phan community in Web3
						during this 4.0 era.
					</Typography>
				</Grid>
			</Grid>
		</Container>
	</Box>
)

export default SectionMission
