import { useState, isValidElement } from 'react'
import { toast } from 'react-toastify'
import { CrossmintPayButton } from '@crossmint/client-sdk-react-ui'
import { Alert, Box, Button, CircularProgress, Link, Paper, TextField, Typography } from '@mui/material'
import CollectionConfig from '../../smart-contract/config/CollectionConfig'
import Whitelist from '../../smart-contract/lib/Whitelist'
import { useWeb3Context } from '../Web3Provider'
import MintingStatus from './MintingStatus'
import MintingForm from './MintingForm'

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
		mb: 4,
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
	const [merkleProofManualAddress, setMerkleProofManualAddress] = useState<string>('')
	const [merkleProofManualAddressFeedbackMessage, setMerkleProofManualAddressFeedbackMessage] =
		useState<JSX.Element | null>(null)
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

	// Minting Tokens - Public Sale
	const mintTokens = async (amount: number): Promise<void> => {
		try {
			setLoading(true)
			const transaction = await contract?.mintLizard(connectedAddress, amount, {
				value: contractState.tokenPrice.mul(amount),
			})

			toast.info(
				<>
					Transaction sent! Please wait...
					<br />
					<Link
						color="inherit"
						href={generateTransactionUrl(transaction?.hash ?? '')}
						target="_blank"
						rel="noopener noreferrer"
					>
						View on {otherState.networkConfig.blockExplorer.name}
					</Link>
				</>,
			)

			const receipt = await transaction?.wait()

			toast.success(
				<>
					Success!
					<br />
					<Link
						color="inherit"
						href={generateTransactionUrl(receipt?.transactionHash ?? '')}
						target="_blank"
						rel="noopener noreferrer"
					>
						View on {otherState.networkConfig.blockExplorer.name}
					</Link>
				</>,
			)

			await refreshContractState()
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

			toast.info(
				<>
					Transaction sent! Please wait...
					<br />
					<Link
						color="inherit"
						href={generateTransactionUrl(transaction?.hash ?? '')}
						target="_blank"
						rel="noopener noreferrer"
					>
						View on {otherState.networkConfig.blockExplorer.name}
					</Link>
				</>,
			)

			const receipt = await transaction?.wait()

			toast.success(
				<>
					Success!
					<br />
					<Link
						color="inherit"
						href={generateTransactionUrl(receipt?.transactionHash ?? '')}
						target="_blank"
						rel="noopener noreferrer"
					>
						View on {otherState.networkConfig.blockExplorer.name}
					</Link>
				</>,
			)

			await refreshContractState()
			setLoading(false)
		} catch (e) {
			setError(e)
			setLoading(false)
		}
	}

	// Utility Helpers
	const isContractReady = (): boolean => contract !== undefined
	const isSoldOut = (): boolean => contractState.maxSupply !== 0 && contractState.totalSupply >= contractState.maxSupply
	const isNotMainnet = (): boolean =>
		otherState.network !== null && otherState.network?.chainId !== CollectionConfig.mainnet.chainId
	const generateContractUrl = (): string =>
		otherState.networkConfig.blockExplorer.generateContractUrl(CollectionConfig.contractAddress!)
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

	// Copy to Clipboard
	const copyMerkleProofToClipboard = (): void => {
		const merkleProof = Whitelist.getRawProofForAddress(
			connectedAddress !== '' ? connectedAddress : merkleProofManualAddress,
		)

		if (merkleProof.length < 1) {
			setMerkleProofManualAddressFeedbackMessage(
				<>
					The given address is not in the whitelist. You can{' '}
					<Link color="inherit" href="https://forms.bueno.art/phanft" target="_blank">
						sign up here
					</Link>
					.
				</>,
			)
			return
		}

		navigator.clipboard.writeText(merkleProof)

		setMerkleProofManualAddressFeedbackMessage(
			<>
				<strong>Congratulations!</strong> <span className="emoji">🎉</span>
				<br />
				Your Merkle Proof <strong>has been copied to the clipboard</strong>. You can paste it into{' '}
				<Link color="inherit" href={generateContractUrl()} target="_blank" rel="noreferrer">
					{otherState.networkConfig.blockExplorer.name}
				</Link>{' '}
				to claim your tokens.
			</>,
		)
	}

	// Disconnected UI
	const renderDisconnectedState = (): JSX.Element => (
		<Paper sx={styles.noConnectContainer}>
			<Typography variant="h4" gutterBottom>
				Buy With ETH
			</Typography>
			<Typography gutterBottom>
				Connect your wallet to interact with the Enlightened Lizards NFT smart contract on the blockchain and mint your
				token. Pay with the ether that is in your wallet and cover gas fees. The token is transferred directly to your
				non-custodial wallet.
			</Typography>
			<Button
				sx={styles.connectBtn}
				variant="contained"
				color="primary"
				size="large"
				disabled={web3Provider === undefined}
				onClick={connectWallet}
				fullWidth
			>
				Connect Wallet
			</Button>
			<Typography gutterBottom>
				Hey, looking for a <strong>super-safe experience</strong>? 😃
			</Typography>
			<Typography gutterBottom>
				You can interact with the smart-contract directly through{' '}
				<Link color="inherit" href={generateContractUrl() + '#writeContract#F23'} target="_blank" rel="noreferrer">
					{otherState.networkConfig.blockExplorer.name}
				</Link>
				, without even connecting your wallet to our minting dapp! 🚀
			</Typography>
			<Typography gutterBottom>Keep safe! ❤️</Typography>
			<Box sx={{ mt: 4 }}>
				<Typography variant="h4" gutterBottom>
					Buy With Fiat
				</Typography>
				<Typography gutterBottom>
					If you don't have a web3 wallet, you can still own an Enlightened Lizards NFT and benefit from the PhanFT
					membership. We partner with{' '}
					<Link href="https://crossmint.io" target="_blank" color="inherit">
						Crossmint
					</Link>{' '}
					to pay with credit card directly without any crypto hassle. The token is transferred to a custodial Crossmint
					wallet, where you may choose to transfer out to another wallet at any given time.
				</Typography>
				<Box sx={{ mt: 2 }}>
					<CrossmintPayButton
						collectionTitle="The Enlightened Lizards"
						collectionDescription="Your web 3.0 pass to 4.0 phandom. Help save the lizards from extinction!"
						collectionPhoto="ipfs://QmVpJjcba7VW2zDg1tPiKb7CJRLSL4qDsZGWxwFY2KexPg/hidden.png"
						clientId="f97b9c73-64c2-4b59-ad8d-31a1d5b36892"
						// totalPrice should contain the total price of all NFTs to mint in a single transaction - in ETH as string * mintAmount 0.9 * 2 = "0.18"
						mintConfig={{ type: 'erc-721', totalPrice: '0.1', _mintAmount: '1', _phan: connectedAddress }}
						environment="staging"
					/>
				</Box>
			</Box>
			{contractState.isWhitelistMintEnabled && (
				<Box sx={styles.merkleProof}>
					<Typography variant="h4" gutterBottom>
						Whitelist Proof
					</Typography>
					<Typography gutterBottom>
						Anyone can generate the proof using any public address in the list, but{' '}
						<strong>only the owner of that address</strong> will be able to make a successful transaction by using it.
					</Typography>
					<Typography gutterBottom>
						Enter in your wallet address below to generate a proof stating that your&apos;re in the whitelist. This is
						the only way you&apos;ll be able to mint during the pre-sale period for a discounted price.
					</Typography>
					<Box sx={styles.merkleProofForm}>
						<TextField
							sx={styles.merkleProofInput}
							fullWidth
							label="Public Address"
							variant="outlined"
							color="secondary"
							placeholder="0x000..."
							disabled={connectedAddress !== ''}
							value={connectedAddress !== '' ? connectedAddress : merkleProofManualAddress}
							onChange={e => setMerkleProofManualAddress(e.target.value)}
							margin="normal"
						/>
						<Button variant="contained" color="secondary" size="large" onClick={copyMerkleProofToClipboard} fullWidth>
							Generate and copy to clipboard
						</Button>
						{merkleProofManualAddressFeedbackMessage && (
							<Typography variant="body2" sx={styles.proofResponseText}>
								{merkleProofManualAddressFeedbackMessage}
							</Typography>
						)}
					</Box>
				</Box>
			)}
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
