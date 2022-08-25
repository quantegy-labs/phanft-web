import { useState } from 'react';
import { utils } from 'ethers';
import { Box, Button, Grid, IconButton, Typography } from '@mui/material'
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
import { useWeb3Context } from '../Web3Provider';
import Image from 'next/image';
import { Add, Remove } from '@mui/icons-material';

export interface NetworkConfigInterface {
  chainId: number;
  symbol: string;
  blockExplorer: {
    name: string;
    generateContractUrl: (contractAddress: string) => string;
    generateTransactionUrl: (transactionAddress: string) => string;
  };
};

interface MintingFormProps {
	loading: boolean;
  mintTokens(mintAmount: number): Promise<void>;
  whitelistMintTokens(mintAmount: number): Promise<void>;
}

const MintingForm = ({ loading, mintTokens, whitelistMintTokens }: MintingFormProps): JSX.Element => {
	const [mintAmount, setMintAmount] = useState<number>(1)
	const { contractState, otherState: { networkConfig }, connectedAddress } = useWeb3Context()
	const { maxSupply, totalSupply, tokenPrice, maxMintAmountPerTx, isPaused, isWhitelistMintEnabled, isUserInWhitelist } = contractState

  const canMint = (): boolean => {
    return !isPaused || canWhitelistMint();
  }

  const canWhitelistMint = (): boolean => {
    return isWhitelistMintEnabled && isUserInWhitelist;
  }

  const incrementMintAmount = (): void => {
		const value = Math.min(maxMintAmountPerTx, mintAmount + 1)
		console.log(value)
		if (mintAmount === maxMintAmountPerTx) return
    setMintAmount(mintAmount + 1);
  }

  const decrementMintAmount = (): void => {
		const value = Math.max(1, mintAmount - 1)
		console.log(value)
		if (mintAmount === 1) return
    setMintAmount(mintAmount - 1);
  }

  const mint = async (): Promise<void>  => {
    if (!isPaused) {
      await mintTokens(mintAmount);

      return;
    }

    await whitelistMintTokens(mintAmount);
  }

	return canMint()
		? (
			<Box className={`mint-widget ${loading ? 'animate-pulse saturate-0 pointer-events-none' : ''}`}>
				<Grid container spacing={3}>
					<Grid item xs={6}>
						<Image src="/lizard_unknown.png" alt="Collection preview" width={400} height={400} />
					</Grid>
					<Grid item xs={6}>
						<Typography variant="h5" component="p">
							<strong>Total price:</strong> {utils.formatEther(tokenPrice.mul(mintAmount))} {networkConfig.symbol}
						</Typography>

						<Box sx={{ my: 2 }}>
							<IconButton disabled={loading} onClick={() => decrementMintAmount()} color="primary">
								<Remove />
							</IconButton>
							<Typography component="span" sx={{ mx: 1 }}>{mintAmount}</Typography>
							<IconButton disabled={loading} onClick={() => incrementMintAmount()} color="primary">
								<Add />
							</IconButton>
							<Typography component="span" variant="subtitle1" sx={{ ml: 1 }}>Qty.</Typography>
						</Box>

						<Box sx={{ my: 2}}>
							<Button variant="contained" size="large" disabled={loading} onClick={() => mint()}>Mint</Button>
						</Box>

						<Box sx={{ my: 2}}>
							<CrossmintPayButton
								collectionTitle="Enlightened Lizards"
								collectionDescription="Help save the Lizards from extinction by minting them on the blockchain!"
								collectionPhoto="<OPT_URL_TO_PHOTO_COVER>"
								clientId="<YOUR_CLIENT_ID>"
								environment="staging" // Rinkeby is staging
								mintConfig={{
									count: mintAmount.toString(), // as string "2"
									// totalPrice should contain the total price of all NFTs to mint in a single transaction.
									totalPrice: "<SELECTED_PRICE>", // in ETH as string * mintAmount 0.9 * 2 = "0.18"
									// other contract function minting arguments
									phan: connectedAddress,
									tokenUri: "ipfs://cid/1.json"
								}}
								mintTo={connectedAddress}
							/>
						</Box>
					</Grid>
				</Grid>
			</Box>
		)
		: (
			<Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
				<Typography fontSize={36}>⏳</Typography>

				{isWhitelistMintEnabled
					? <Typography>You are not included in the <strong>whitelist</strong>.</Typography>
					: <Typography>The contract is <strong>paused</strong>.</Typography>
				}
				<Typography>Please come back during the next sale!</Typography>
			</Box>
		)
}

export default MintingForm;
