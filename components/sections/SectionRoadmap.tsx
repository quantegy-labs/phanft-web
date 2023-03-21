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
		span: {
			color: '#fff',
			fontWeight: 300,
		},
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
				We are setting the mint price low enough to make owning a Lizard easily affordable. This however leaves a
				smaller budget than originally conceived to bundle-in physical items such as LE posters and wearable merch.
			</Typography>
			<Typography sx={styles.roadmapText}>
				We have an abundance of ideas and ability to deliver a &quot;phygital experience&quot; in due time, once we
				establish ourselves and have more resources in our treasury.
			</Typography>
			<Typography sx={styles.roadmapText}>
				Here&apos;s what minting an Enlightened Lizard gets you today. All ideas are subject to modification and change
				as needed.
			</Typography>
			<List>
				<ListItem sx={styles.listItem}>
					<ListItemIcon>
						<Star color="secondary" />
					</ListItemIcon>
					<ListItemText primary="Own a one-of-a-kind, provably-rare digital collectable. Rock it as your social media profile pic to show your support and a wink to your phellow lizards out there." />
				</ListItem>
				<ListItem sx={styles.listItem}>
					<ListItemIcon>
						<Star color="secondary" />
					</ListItemIcon>
					<ListItemText primary="Access our custom bot to crunch and compare show stats across all Enlightened Lizard holders 🤖" />
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
					<ListItemText primary="Invitations to Lizard-holder events and gatherings during tour. i.e. pre-show meetups, and other occasional token-gated events" />
				</ListItem>
				<ListItem sx={styles.listItem}>
					<ListItemIcon>
						<Star color="secondary" />
					</ListItemIcon>
					<ListItemText primary="Access to phan-centric perks from future partners (merch, art, custom craft beer on lot...once our collection is sold out, all becomes possible)" />
				</ListItem>
				<ListItem sx={styles.listItem}>
					<ListItemIcon>
						<Star color="secondary" />
					</ListItemIcon>
					<ListItemText primary="Purchasing a Lizard generates donations to The Waterwheel Foundation and Mockingbird Foundation" />
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
					Phase 2.0 &amp; Beyond
				</Typography>
				<Typography variant="h5" sx={styles.subheading}>
					This begins after selling out Phase 1.0 and delivering on the roadmap.
				</Typography>
			</Box>
			<Box className="large-block" />
			<Typography sx={styles.roadmapText}>
				PhaNFT aims to be a community-driven project, where the uses of secondary sale proceeds are decided by the
				community through a Helping Friendly DAO. Members will be able to propose ideas and vote on spending, with
				decisions made through a majority vote of holders and executed by treasury funds.
			</Typography>
			<Typography sx={styles.roadmapText}>
				Here are just a few ideas that we&apos;ve come up with to propose for use of funds:
			</Typography>
			<List>
				<ListItem sx={styles.listItem}>
					<ListItemIcon>
						<Star color="primary" />
					</ListItemIcon>
					<ListItemText primary="We partner with an established and respected poster artist to design the next NFT collection, where each ones comes with a physical poster twin." />
				</ListItem>
				<ListItem sx={styles.listItem}>
					<ListItemIcon>
						<Star color="primary" />
					</ListItemIcon>
					<ListItemText primary="We bring the shakedown lot experience into a virtual metaverse before couch tour shows, where Lizards and other creatures that seem oh-so-kind can gather to hang out, buy digital and physical goods from vendors, and get more down at virtual dance parties." />
				</ListItem>
				<ListItem sx={styles.listItem}>
					<ListItemIcon>
						<Star color="primary" />
					</ListItemIcon>
					<ListItemText primary="The Rhombus appears and a new portal is unlocked revealing a digital treasure hunt. Prizes include ETH in rewards and exclusive 1-of-1 minted characters including the great and knowledgeable Icculus." />
				</ListItem>
			</List>
		</Container>
	</Box>
)

export default SectionRoadmap
