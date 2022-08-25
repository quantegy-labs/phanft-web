import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import formatAddress from '../../lib/formatAddress';
import { useWeb3Context } from '../Web3Provider';

const styles = {
  container: {
		backgroundColor: '#fff',
		border: '1px solid #ccc',
		borderRadius: 1,
		mb: 4,
  },
	statusItemBox: {
		textAlign: 'center',
		px: 1,
		py: 2,
	},
	statusItemWallet: {
		borderBottom: '1px solid #ccc',
	},
	statusItemSupply: {
		borderRight: '1px solid #ccc',
	},
	statusItemLabel: {
		fontWeight: 700,
		display: 'block',
		fontSize: '1rem',
		color: '#54c6eb'
	},
	statusItemValue: {
		color: '#777',
	},
}

interface MintingStatusProps {
  isSoldOut: boolean;
}

const MintingStatus = ({ isSoldOut }: MintingStatusProps): JSX.Element => {
	const { connectedAddress, contractState } = useWeb3Context()
	const { totalSupply, maxSupply, isPaused, isWhitelistMintEnabled, isUserInWhitelist } = contractState

  const isSaleOpen = (): boolean => {
    return (isWhitelistMintEnabled || !isPaused) && !isSoldOut;
  }

  return (
    <Paper sx={styles.container}>
      <Box sx={[styles.statusItemBox, styles.statusItemWallet]}>
        <Typography sx={styles.statusItemLabel} component="span">Wallet address:</Typography>
        <Typography sx={styles.statusItemValue} component="span">
					{formatAddress(connectedAddress)}
				</Typography>
      </Box>
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<Box sx={[styles.statusItemBox, styles.statusItemSupply]}>
						<Typography sx={styles.statusItemLabel} component="span">Supply:</Typography>
						<Typography sx={styles.statusItemValue} component="span">
							{totalSupply}/{maxSupply}
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={6}>
					<Box sx={styles.statusItemBox}>
						<Typography sx={styles.statusItemLabel} component="span">Sale status:</Typography>
						<Typography sx={styles.statusItemValue} component="span">
							{isSaleOpen() ? <>{isWhitelistMintEnabled ? 'Whitelist only' : 'Open'}</> : 'Closed'}
						</Typography>
					</Box>
				</Grid>
			</Grid>
    </Paper>
  );
}

export default MintingStatus
