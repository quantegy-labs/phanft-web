import { Star } from '@mui/icons-material'
import { Box, Container, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'

const styles = {
	headings: {
		color: '#fff',
		textAlign: 'center',
	},
	heading: {
		color: '#fff',
		textAlign: 'center',
		mb: 1,
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
	roadmapText: {
		color: '#fff',
		fontSize: '1.1rem',
		mb: 2,
		'@media (min-width: 900px)': {
			fontSize: '1.25rem',
			mb: 4,
		},
	},
	listItem: {
		color: '#fff',
	},
}

const SectionRoadmap = (): JSX.Element => (
	<Box component="section" id="roadmap">
		<Container maxWidth="lg">
			<Box sx={styles.headings}>
				<Typography variant="h3" sx={styles.heading}>
					Let&apos;s Get This Show on the Road!
				</Typography>
				<Typography variant="h4" sx={styles.subheading}>
					Phase 1.0 Benefits and Roadmap
				</Typography>
			</Box>
			<Box className="large-block secondary" />
			<Typography sx={styles.roadmapText}>
				We&apos;ve set the mint price low at .02 ETH to make owning a Lizard affordable to all at current market
				conditions. This however leaves a smaller budget than originally conceived to bundle-in physical items such as
				LE posters and wearable merch.
			</Typography>
			<Typography sx={styles.roadmapText}>
				We have an abundance of ideas and ability to deliver a “phyigital experience” in due time, once we establish
				ourselves and have more resources in our treasury.
			</Typography>
			<Typography sx={styles.roadmapText}>
				The viable use-cases for NFTs are fast evolving and we’re learning more every day. All ideas are subject to
				modification and change as needed.
			</Typography>
			<List>
				<ListItem sx={styles.listItem}>
					<ListItemIcon>
						<Star color="secondary" />
					</ListItemIcon>
					<ListItemText primary="Own a one-of-a-kind, provably-rare digital collectable. Rock it as your Twitter or IG profile pic as a subtle wink that you’re in the club!" />
				</ListItem>
				<ListItem sx={styles.listItem}>
					<ListItemIcon>
						<Star color="secondary" />
					</ListItemIcon>
					<ListItemText primary="Free airdrops of future collections and special artist collaborations as we expand the community" />
				</ListItem>
				<ListItem sx={styles.listItem}>
					<ListItemIcon>
						<Star color="secondary" />
					</ListItemIcon>
					<ListItemText primary="Access to phan-centric perks from future partners (Merch, art, custom craft beer...once our collection is sold out, all becomes possible!)" />
				</ListItem>
				<ListItem sx={styles.listItem}>
					<ListItemIcon>
						<Star color="secondary" />
					</ListItemIcon>
					<ListItemText primary="Invitations to Lizard-holder events and gatherings during tour. i.e. pre-show meetups, aftershow concerts, and other occasional token-gated events" />
				</ListItem>
				<ListItem sx={styles.listItem}>
					<ListItemIcon>
						<Star color="secondary" />
					</ListItemIcon>
					<ListItemText primary="Purchasing a Lizard generates donations to The Waterwheel Foundation and Mockingbird Foundation." />
				</ListItem>
				<ListItem sx={styles.listItem}>
					<ListItemIcon>
						<Star color="secondary" />
					</ListItemIcon>
					<ListItemText primary="Help save the Lizards from extinction by minting them to the blockchain and join the quest to gain the knowledge that you lack!" />
				</ListItem>
			</List>
			<Divider />
			<Box sx={styles.headings}>
				<Typography variant="h4" sx={styles.heading}>
					Phase 2.0 & Beyond
				</Typography>
				<Typography variant="h5" sx={styles.subheading}>
					This begins after selling out Phase 1.0 and delivering on the roadmap.
				</Typography>
			</Box>
			<Box className="large-block" />
			<Typography sx={styles.roadmapText}>
				Ultimately, the goal for PhanFT is to be a rich community-driven project. This means that with all the sale
				proceeds from the NFT collection,{' '}
				<em>
					these funds will be decided by the community on how they will be spent through the form of the Helping
					Friendly DAO
				</em>
				.
			</Typography>
			<Typography sx={styles.roadmapText}>
				Members of the DAO will have a place to be able to offer up ideas and discuss on forums about the spending. Then
				this will go through a voting period for the holders, and anything that passes majority votes will be executed
				on and paid for by treasury funds. Here are just a few potential ideas that we&apos;ve come up with that funds
				could be used for:
			</Typography>
			<List>
				<ListItem sx={styles.listItem}>
					<ListItemIcon>
						<Star color="primary" />
					</ListItemIcon>
					<ListItemText primary="We partner with a well-established and respected poster artist to design the next NFT collection, where each ones comes with a physical poster twin, linked on-chain." />
				</ListItem>
				<ListItem sx={styles.listItem}>
					<ListItemIcon>
						<Star color="primary" />
					</ListItemIcon>
					<ListItemText primary="We bring the shakedown lot experience into the metaverse before couch tour shows, where Lizards and other creatures that seem oh-so-kind can gather to hang out, buy digital and physical goods from vendors, and get more down at virtual dance parties." />
				</ListItem>
				<ListItem sx={styles.listItem}>
					<ListItemIcon>
						<Star color="primary" />
					</ListItemIcon>
					<ListItemText primary="The Rhombus appears and a new portal is unlocked revealing a digital treasure hunt. Prizes include up to 2 ETH in rewards and exclusive 1-of-1 minted characters including the great and knowledgeable Icculus." />
				</ListItem>
				<ListItem sx={styles.listItem}>
					<ListItemIcon>
						<Star color="primary" />
					</ListItemIcon>
					<ListItemText primary="Pre-shows and post-show parties in and around the venues of major shows in your city!" />
				</ListItem>
			</List>
		</Container>
	</Box>
)

export default SectionRoadmap
