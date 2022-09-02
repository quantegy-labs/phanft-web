import { useState } from 'react'
import { utils } from 'ethers'
import { Box, Button, CircularProgress, Grid, IconButton, Typography } from '@mui/material'
import { useWeb3Context } from '../Web3Provider'
import Image from 'next/image'
import { Add, Remove } from '@mui/icons-material'
import CrossmintButton from './CrossmintButton'

export interface NetworkConfigInterface {
	chainId: number
	symbol: string
	blockExplorer: {
		name: string
		generateContractUrl: (contractAddress: string) => string
		generateTransactionUrl: (transactionAddress: string) => string
	}
}

interface MintingFormProps {
	loading: boolean
	mintTokens(mintAmount: number): Promise<void>
	whitelistMintTokens(mintAmount: number): Promise<void>
}

const MintingForm = ({ loading, mintTokens, whitelistMintTokens }: MintingFormProps): JSX.Element => {
	const [mintAmount, setMintAmount] = useState<number>(1)
	const {
		contractState,
		otherState: { networkConfig },
	} = useWeb3Context()
	const { tokenPrice, maxMintAmountPerTx, isPaused, isWhitelistMintEnabled, isUserInWhitelist } = contractState

	const canMint = (): boolean => {
		return !isPaused || canWhitelistMint()
	}

	const canWhitelistMint = (): boolean => {
		return isWhitelistMintEnabled && isUserInWhitelist
	}

	const incrementMintAmount = (): void => {
		if (mintAmount === maxMintAmountPerTx) return
		setMintAmount(mintAmount + 1)
	}

	const decrementMintAmount = (): void => {
		if (mintAmount === 1) return
		setMintAmount(mintAmount - 1)
	}

	const mint = async (): Promise<void> => {
		if (!isPaused) {
			await mintTokens(mintAmount)
			return
		}
		await whitelistMintTokens(mintAmount)
	}

	return canMint() ? (
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
						<Typography component="span" sx={{ mx: 1 }}>
							{mintAmount}
						</Typography>
						<IconButton disabled={loading} onClick={() => incrementMintAmount()} color="primary">
							<Add />
						</IconButton>
						<Typography component="span" variant="subtitle1" sx={{ ml: 1 }}>
							Qty.
						</Typography>
					</Box>

					<Box sx={{ my: 2 }}>
						<Button
							variant="contained"
							color="primary"
							size="large"
							onClick={() => (loading ? null : mint())}
							fullWidth
						>
							{loading ? <CircularProgress size={24} color="inherit" /> : 'Mint A Lizard'}
						</Button>
					</Box>

					<CrossmintButton mintAmount={mintAmount} tokenPrice={tokenPrice} />
				</Grid>
			</Grid>
		</Box>
	) : (
		<Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
			<Typography fontSize={36}>⏳</Typography>
			{isWhitelistMintEnabled ? (
				<Typography>
					You are not included in the <strong>whitelist</strong>.
				</Typography>
			) : (
				<Typography>
					The contract is <strong>paused</strong>.
				</Typography>
			)}
			<Typography>Please come back during the next sale!</Typography>
		</Box>
	)
}

export default MintingForm
