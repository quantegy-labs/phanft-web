import { useState, isValidElement } from 'react'
// import { toast } from 'react-toastify'
import { Alert, Box, Button, CircularProgress, Grid, IconButton, Link, Paper, Typography } from '@mui/material'
import { Add, Remove } from '@mui/icons-material'
// @ts-ignore
import cryptoPrice from 'crypto-price'
import CollectionConfig from '../../smart-contract/config/CollectionConfig'
import Whitelist from '../../smart-contract/lib/Whitelist'
import { useWeb3Context } from '../Web3Provider'
import MintingStatus from './MintingStatus'
import MintingForm from './MintingForm'
import CrossmintButton from './CrossmintButton'

const styles = {
	loadingContract: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		py: 6,
		px: 4,
	},
	loadingSpinner: {
		mb: 2,
	},
	noConnectContainer: {
		backgroundColor: '#fafafa',
		color: '#222',
		p: 4,
	},
	connectContainer: {
		backgroundColor: '#fafafa',
		color: '#222',
		p: 4,
	},
	connectBtn: {
		mt: 2,
		mb: 2,
	},
	merkleProof: {
		mt: 4,
	},
	merkleProofForm: {
		backgroundColor: '#333',
		mt: 4,
		p: 2,
		pb: 4,
		borderRadius: 2,
	},
	merkleProofInput: {
		mb: 2,
	},
	proofResponseText: {
		color: '#fff',
		mt: 2,
		fontStyle: 'italic',
		textAlign: 'center',
	},
}

const MintingContainer = (): JSX.Element => {
	// State
	const [loading, setLoading] = useState<boolean>(false)
	const [mintError, setMintError] = useState<string | null>(null)
	const [mintAmount, setMintAmount] = useState<number>(1)
	const [totalCostUSD, setTotalCostUSD] = useState<string>('')

	// Context
	const web3Context = useWeb3Context()
	const {
		web3Error,
		web3Provider,
		contract,
		contractState,
		refreshContractState,
		connectWallet,
		connected,
		connectedAddress,
		otherState,
	} = web3Context

	// Utility Helpers
	const isContractReady = (): boolean => contract !== undefined
	const isSoldOut = (): boolean => contractState.maxSupply !== 0 && contractState.totalSupply >= contractState.maxSupply
	const isNotMainnet = (): boolean =>
		otherState.network !== null && otherState.network?.chainId !== CollectionConfig.mainnet.chainId
	// const generateContractUrl = (): string =>
	// 	otherState.networkConfig.blockExplorer.generateContractUrl(CollectionConfig.contractAddress!)
	const generateMarketplaceUrl = (): string =>
		CollectionConfig.marketplaceConfig.generateCollectionUrl(CollectionConfig.marketplaceIdentifier, !isNotMainnet())
	const generateTransactionUrl = (transactionHash: string): string =>
		otherState.networkConfig.blockExplorer.generateTransactionUrl(transactionHash)
	const setError = (error: any = null): void => {
		let errorMessage = 'Unknown error...'
		if (null === error || typeof error === 'string') {
			setMintError(null)
			return
		} else if (typeof error === 'object') {
			// Support any type of error from the Web3 Provider...
			if (error?.error?.message !== undefined) {
				errorMessage = error.error.message
			} else if (error?.data?.message !== undefined) {
				errorMessage = error.data.message
			} else if (error?.message !== undefined) {
				errorMessage = error.message
			} else if (isValidElement(error)) {
				setMintError(error.toString())
				return
			}
		}
		setMintError(errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1))
	}

	const incrementMintAmount = (): void => {
		if (mintAmount === contractState.maxMintAmountPerTx) return
		setMintAmount(mintAmount + 1)
	}

	const decrementMintAmount = (): void => {
		if (mintAmount === 1) return
		setMintAmount(mintAmount - 1)
	}

	const calculateTotalCostUSD = async () => {
		// Get current USD/ETH price
		const resp = await cryptoPrice.getCryptoPrice('USD', 'ETH')
		const ethUSD = parseFloat(resp.price)
		// Get total ETH for multiple tokens
		const costUSD = 0.1 * mintAmount * ethUSD
		setTotalCostUSD(costUSD.toFixed())
	}

	// Minting Tokens - Public Sale
	const mintTokens = async (amount: number): Promise<void> => {
		try {
			setLoading(true)
			const transaction = await contract?.mintLizard(connectedAddress, amount, {
				value: contractState.tokenPrice.mul(amount),
			})

			// toast.info(
			// 	<>
			// 		Transaction sent! Please wait...
			// 		<br />
			// 		<Link
			// 			color="inherit"
			// 			href={generateTransactionUrl(transaction?.hash ?? '')}
			// 			target="_blank"
			// 			rel="noopener noreferrer"
			// 		>
			// 			View on {otherState.networkConfig.blockExplorer.name}
			// 		</Link>
			// 	</>,
			// )

			const receipt = await transaction?.wait()

			// toast.success(
			// 	<>
			// 		Success!
			// 		<br />
			// 		<Link
			// 			color="inherit"
			const href = generateTransactionUrl(receipt?.transactionHash ?? '')
			// 			target="_blank"
			// 			rel="noopener noreferrer"
			// 		>
			const msg = `View on ${otherState.networkConfig.blockExplorer.name} at ${href}.`
			// 		</Link>
			// 	</>,
			// )
			alert(`Success! You've helped save a Lizard from extinction! ${msg}`)

			await refreshContractState(contract, connectedAddress)
			setLoading(false)
		} catch (e) {
			setError(e)
			setLoading(false)
		}
	}

	// Minting Tokens - Whitelist
	const whitelistMintTokens = async (amount: number): Promise<void> => {
		try {
			setLoading(true)
			const transaction = await contract?.whitelistMintLizard(
				connectedAddress,
				amount,
				Whitelist.getProofForAddress(connectedAddress!),
				{ value: contractState.tokenPrice.mul(amount) },
			)

			// toast.info(
			// 	<>
			// 		Transaction sent! Please wait...
			// 		<br />
			// 		<Link
			// 			color="inherit"
			// 			href={generateTransactionUrl(transaction?.hash ?? '')}
			// 			target="_blank"
			// 			rel="noopener noreferrer"
			// 		>
			// 			View on {otherState.networkConfig.blockExplorer.name}
			// 		</Link>
			// 	</>,
			// )

			const receipt = await transaction?.wait()
			const href = generateTransactionUrl(receipt?.transactionHash ?? '')
			const msg = `View on ${otherState.networkConfig.blockExplorer.name} at ${href}.`
			alert(`Success! You've helped save a Lizard from extinction! ${msg}`)
			// toast.success(
			// 	<>
			// 		Success!
			// 		<br />
			// 		<Link
			// 			color="inherit"
			// 			href={generateTransactionUrl(receipt?.transactionHash ?? '')}
			// 			target="_blank"
			// 			rel="noopener noreferrer"
			// 		>
			// 			View on {otherState.networkConfig.blockExplorer.name}
			// 		</Link>
			// 	</>,
			// )

			await refreshContractState(contract, connectedAddress)
			setLoading(false)
		} catch (e) {
			setError(e)
			setLoading(false)
		}
	}

	// Disconnected UI
	const renderDisconnectedState = (): JSX.Element => (
		<Paper sx={styles.noConnectContainer}>
			<Typography variant="h4" gutterBottom>
				Buy With ETH
			</Typography>
			<Typography gutterBottom>
				Connect your Metamask wallet to interact with the Enlightened Lizards NFT smart contract on the blockchain and
				mint your token. Must have .10 ether in your wallet + .01 extra to cover the transaction fee (gas).
			</Typography>
			{web3Provider ? (
				<Button
					sx={styles.connectBtn}
					variant="contained"
					color="primary"
					size="large"
					onClick={connectWallet}
					fullWidth
				>
					Connect Wallet
				</Button>
			) : (
				<Alert variant="filled" severity="warning" sx={{ mt: 3, mb: 4 }}>
					<Typography variant="subtitle2" gutterBottom>
						It looks like you might not have Metamask yet.{' '}
						<Link href="https://metamask.io" color="inherit" target="_blank" rel="noopener noreferrer">
							Install here
						</Link>
					</Typography>
				</Alert>
			)}
			<Box sx={{ mt: 2 }}>
				<Typography variant="h4" gutterBottom>
					Buy With $USD Available 9/1
				</Typography>
				<Typography gutterBottom>
					If you don't have a web3 wallet, you can still own an Enlightened Lizards NFT and benefit from the PhanFT
					membership. We partnered with{' '}
					<Link href="https://crossmint.io" target="_blank" color="inherit">
						Crossmint
					</Link>{' '}
					to pay with credit card directly without any crypto hassle. The token is transferred to a custodial Crossmint
					wallet, where you may choose to transfer out to another wallet at any given time.
				</Typography>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						{/* <Button variant="outlined" onClick={() => calculateTotalCostUSD()}>GetPrice</Button> */}
						<CrossmintButton mintAmount={mintAmount} tokenPrice="0.1" />
					</Grid>
					<Grid item xs={6}>
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
					</Grid>
				</Grid>
			</Box>
		</Paper>
	)

	// Connected UI
	const renderConnectedState = (): JSX.Element => (
		<Paper sx={styles.connectContainer}>
			{isNotMainnet() && (
				<Alert severity="warning" variant="filled" sx={{ mb: 2 }}>
					<Typography variant="body2">You are not connected to the main network.</Typography>
					<Typography variant="body2">
						Current network: <strong>{otherState.network?.name}</strong>
					</Typography>
				</Alert>
			)}

			{web3Error && (
				<Alert severity="error" variant="filled" sx={{ mb: 2 }}>
					<Typography variant="body2">{web3Error}</Typography>
				</Alert>
			)}

			{mintError && (
				<Alert severity="error" variant="filled" sx={{ mb: 2 }}>
					<Typography variant="body2" gutterBottom>
						{mintError}
					</Typography>
					<Button variant="outlined" color="inherit" size="small" onClick={() => setError()}>
						Close
					</Button>
				</Alert>
			)}

			{!isContractReady() ? (
				<Box sx={styles.loadingContract}>
					<CircularProgress size={50} color="secondary" sx={styles.loadingSpinner} />
					<Typography variant="subtitle1">
						<em>Loading collection data...</em>
					</Typography>
				</Box>
			) : (
				<>
					<MintingStatus isSoldOut={isSoldOut()} />
					{!isSoldOut() ? (
						<MintingForm
							loading={loading}
							mintTokens={mintAmount => mintTokens(mintAmount)}
							whitelistMintTokens={mintAmount => whitelistMintTokens(mintAmount)}
						/>
					) : (
						<div className="collection-sold-out">
							<h2>
								Tokens have been <strong>sold out</strong>! <span className="emoji">🥳</span>
							</h2>
							You can buy from our beloved holders on{' '}
							<Link color="inherit" href={generateMarketplaceUrl()} target="_blank" rel="noreferrer">
								{CollectionConfig.marketplaceConfig.name}
							</Link>
							.
						</div>
					)}
				</>
			)}
		</Paper>
	)

	return connected ? renderConnectedState() : renderDisconnectedState()
}

export default MintingContainer
