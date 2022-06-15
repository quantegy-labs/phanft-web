import { Star } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

const SectionBenefits = (): JSX.Element => (
  <>
    <Typography variant="h3">Benefits</Typography>
    <Typography variant="h4">The PhanFT Membership Perks</Typography>
    <List>
      <ListItem>
        <ListItemIcon>
          <Star />
        </ListItemIcon>
        <ListItemText primary="Invest in owning a one-of-a-kind, provably-rare digital collectable" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Star />
        </ListItemIcon>
        <ListItemText primary="Each Lizard comes with one (1) limited edition physical art print" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Star />
        </ListItemIcon>
        <ListItemText primary="Guaranteed pre-sale access to mint new PhanFT™ NFT collections before public on-sale" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Star />
        </ListItemIcon>
        <ListItemText primary="Access to IRL and digital phan-centric perks from our community partners" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Star />
        </ListItemIcon>
        <ListItemText primary="Invitations to member only events and gatherings with the PhanFT community, i.e., aftershows, pre-show meetups, and more" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Star />
        </ListItemIcon>
        <ListItemText primary="Keys to The Corridor, our very own interactive gathering place in the metaverse being built for PhanFT holders." />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Star />
        </ListItemIcon>
        <ListItemText primary="Join our private Discord. Hang with your fellow phriends and flex your inner phandom with tour chatter, song trivia, couch tour watch parties, and more" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Star />
        </ListItemIcon>
        <ListItemText primary="Ownership of each Lizard directly contributes to The Waterwheel Foundation and Mockingbird Foundation charity partners" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Star />
        </ListItemIcon>
        <ListItemText primary="Help us save the race of Lizards from extinction by minting them to the blockchain and join the quest to gain the knowledge that you lack" />
      </ListItem>
    </List>
  </>
);

export default SectionBenefits;
