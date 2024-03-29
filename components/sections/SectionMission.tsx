import { Box, Container, Grid, Typography } from '@mui/material'

const styles = {
	headings: {
		textAlign: 'center',
	},
	heading: {
		mb: 2,
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
	missionText: {
		fontSize: '1.1rem',
		mb: 2,
		'@media (min-width: 900px)': {
			fontSize: '1.25rem',
			mb: 4,
		},
	},
}

const SectionMission = (): JSX.Element => (
	<Box component="section" id="mission">
		<Container maxWidth="lg">
			<Box sx={styles.headings}>
				<Typography variant="h3" sx={styles.heading}>
					Why PhaNFT?
				</Typography>
				<Typography variant="h4" sx={styles.subheading}>
					Our Time is Near, the Mission&apos;s Clear
				</Typography>
				<Box className="large-block" />
			</Box>
			<Grid container spacing={4}>
				<Grid item md={6}>
					<Typography sx={styles.missionText}>
						The way people interact and engage digitally is evolving faster than ever. Thanks to blockchain
						technologies, we&apos;re at the forefront of a new era where communities with shared passions can
						self-organize to celebrate what they love, create value digitally in forward-thinking ways, and collaborate
						in distributed fashion to achieve common goals.
					</Typography>
					<Typography sx={styles.missionText}>
						Similar to how phans were among the first in the mid-90&apos;s web 1.0 era to congregate and build digital
						community in newsgroups, AOL chatrooms, and message boards to trade tapes, share show reviews and speculate
						over rumors; today we have a massive opportunity to become digital pioneers once again, and together
						reinvent and redefine what a passionate music community can do and be.
					</Typography>
					<Typography sx={styles.missionText}>
						What we are building is a place &apos;strut yo&apos; stuff&apos;. Got tour tales to tell? Do you like
						teaching others about web3 concepts? Creating digital art or videos? Lizard holders have the opportunity to
						contribute your unique gifts, skills, and talents to help the project grow.
					</Typography>
				</Grid>
				<Grid item md={6}>
					<Typography sx={styles.missionText}>
						We know it&apos;s a tough time for NFTs right now in the public perception. Markets are cyclical and we
						believe bright days are ahead. Underneath the noise, we believe in and understand why NFTs are the ideal
						vehicle to enable and reward fandom, while supporting a healthy digital ecosystem for artists and creators.
						This tech is here to stay and we want to be leaders who embrace it.
					</Typography>
					<Typography sx={styles.missionText}>
						If PhaNFT is fortunate enough to flourish, we plan on doing a variety of partnerships with established
						artists in the scene. Our digital artist partners will receive a royalty not only on primary sales but also
						on secondary market sales, such as on OpenSea. Imagine a world where instead of artists making a one-time
						sale at the merch booth, they get a cut every time their work exchanges hands, for years and years to come.
						Pretty awesome.
					</Typography>
					<Typography sx={styles.missionText}>
						We&apos;re stoked about this new paradigm with endless possibilities. Consider this your invitation to jump
						in the pond (with us here to guide you) as we create a vibrant and inclusive phan community in Web3 during
						our favorite band&apos;s 4.0 era.
					</Typography>
				</Grid>
			</Grid>
		</Container>
	</Box>
)

export default SectionMission
