import React, { ReactElement, useContext, useEffect, useState } from 'react'
import { ethers, BigNumber } from 'ethers'
import { ExternalProvider, Web3Provider } from '@ethersproject/providers'
import detectEthereumProvider from '@metamask/detect-provider'
import { Box, CircularProgress, Typography } from '@mui/material'
import CollectionConfig from '../smart-contract/config/CollectionConfig'
import Whitelist from '../smart-contract/lib/Whitelist'
import { EnlightenedLizards as NftContractType } from '../lib/EnlightenedLizards'
import type { NetworkConfigInterface } from './minting/MintingForm'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ContractAbi = require('../lib/abi/' +
	CollectionConfig.contractName +
	'.sol/' +
	CollectionConfig.contractName +
	'.json').abi

export type Web3Data = {
	web3Provider: Web3Provider | null
	contract: NftContractType | null
	otherState: OtherState
	contractState: ContractState
	refreshContractState: (contract: NftContractType | null, account: string | null) => Promise<void>
	connectWallet: () => void
	disconnectWallet: () => void
	connected: boolean
	connectedAddress: string
	web3Error: JSX.Element | string | null
}

export type Web3ContextData = {
	web3ProviderData: Web3Data
}

export const Web3Context = React.createContext({} as Web3ContextData)

interface ContractState {
	totalSupply: number
	maxSupply: number
	maxMintAmountPerTx: number
	tokenPrice: BigNumber
	isPaused: boolean
	isWhitelistMintEnabled: boolean
	isUserInWhitelist: boolean
}

interface OtherState {
	userAddress: string | null
	network: ethers.providers.Network | null
	networkConfig: NetworkConfigInterface
}

const defaultContractState: ContractState = {
	totalSupply: 0,
	maxSupply: 0,
	maxMintAmountPerTx: 0,
	tokenPrice: BigNumber.from(0),
	isPaused: true,
	isWhitelistMintEnabled: false,
	isUserInWhitelist: false,
}

const defaultOtherState: OtherState = {
	userAddress: null,
	network: null,
	networkConfig: CollectionConfig.mainnet,
}

export const Web3ContextProvider: React.FC<{ children: ReactElement }> = ({ children }) => {
	const [loading, setLoading] = useState(true)
	const [connected, setConnected] = useState<boolean>(false)
	const [connectedAddress, setConnectedAddress] = useState<string>('')
	const [web3Error, setWeb3Error] = useState<JSX.Element | string | null>(null)
	const [web3Provider, setWeb3Provider] = useState<Web3Provider | null>(null)
	const [contract, setContract] = useState<NftContractType | null>(null)
	const [contractState, setContractState] = useState<ContractState>(defaultContractState)
	const [otherState, setOtherState] = useState<OtherState>(defaultOtherState)

	const generateContractUrl = (): string =>
		otherState.networkConfig.blockExplorer.generateContractUrl(CollectionConfig.contractAddress!)

	const initContract = async (provider: Web3Provider, account: string | null) => {
		try {
			// Setup contract connection using config
			const enlightenedLizards = new ethers.Contract(
				CollectionConfig.contractAddress!,
				ContractAbi,
				provider.getSigner(),
			) as NftContractType
			setContract(enlightenedLizards)
			await refreshContractState(enlightenedLizards, account)
		} catch (e: any) {
			console.error('initContract()', e)
		}
	}

	const getWeb3 = async () => {
		try {
			const browserProvider = (await detectEthereumProvider()) as ExternalProvider
			if (browserProvider) {
				console.log('Ethereum successfully detected!')
				// Provider
				const ethersProvider = new ethers.providers.Web3Provider(browserProvider)
				setWeb3Provider(ethersProvider)

				// Show UI after we get web3 & initiate other calls in background
				setLoading(false)
				// Wallet
				await initWallet(true)
				registerWalletEvents(browserProvider)
				// Contract
				await initContract(ethersProvider, null)
			} else {
				// if the provider is not detected, detectEthereumProvider resolves to null
				console.error('Please install MetaMask!')
				setWeb3Error(
					<>
						We were not able to detect <strong>MetaMask</strong>. We value <strong>privacy and security</strong> a lot
						so we limit the wallet options on our minting dapp. Please install it{' '}
						<a href="https://metamask.io/" target="_blank" rel="noreferrer">
							here
						</a>
						.
						<br />
						<br />
						But don&apos;t worry! <span className="emoji">😃</span> You can always interact with the smart-contract
						through{' '}
						<a href={generateContractUrl()} target="_blank" rel="noreferrer">
							{otherState.networkConfig.blockExplorer.name}
						</a>{' '}
						and <strong>we do our best to provide you with the best user experience possible</strong>, even from there.
					</>,
				)
				setLoading(false)
			}
		} catch (e: any) {
			console.error('getWeb3()', e)
		}
	}

	useEffect(() => {
		try {
			getWeb3()
		} catch (e: any) {
			console.log('caught', e)
		}
	}, [])

	// Refreshes the contract data in state with the most lastest data from contract state, useful for updating UIs after transactions
	const refreshContractState = async (contract: NftContractType | null, account: string | null): Promise<void> => {
		try {
			if (!contract || !account) return
			setContractState({
				maxSupply: (await contract.maxSupply()).toNumber(),
				totalSupply: (await contract.totalSupply()).toNumber(),
				maxMintAmountPerTx: (await contract.maxMintAmountPerTx()).toNumber(),
				tokenPrice: await contract.cost(),
				isPaused: await contract.paused(),
				isWhitelistMintEnabled: await contract.whitelistMintEnabled(),
				isUserInWhitelist: Whitelist.contains(account ? account : connectedAddress || otherState.userAddress || ''),
			})
		} catch (e: any) {
			console.error('refreshContractState()', e)
		}
	}

	// Initializes wallet, network, & contract data
	const initWallet = async (isInitial = false) => {
		try {
			if (!web3Provider) return

			// Get connected wallets
			const walletAccounts = (await web3Provider.listAccounts()) ?? []
			if (walletAccounts.length === 0) {
				return
			}
			const connectedWallet = walletAccounts[0]

			// Get network
			const network = await web3Provider.getNetwork()
			let networkConfig: NetworkConfigInterface
			if (!network) {
				setWeb3Error('Unsupported network!')
				return
			} else if (network.chainId === CollectionConfig.mainnet.chainId) {
				networkConfig = CollectionConfig.mainnet
			} else if (network.chainId === CollectionConfig.testnet.chainId) {
				networkConfig = CollectionConfig.testnet
			} else {
				setWeb3Error('Unsupported network!')
				return
			}

			// Set network and connected address data
			setConnectedAddress(connectedWallet)
			setOtherState({
				userAddress: connectedWallet,
				network,
				networkConfig,
			})

			// set user whitelist
			setContractState({
				...contractState,
				isUserInWhitelist: Whitelist.contains(connectedWallet),
			})

			// Get/Set contract data
			if ((await web3Provider.getCode(CollectionConfig.contractAddress!)) === '0x') {
				setWeb3Error('Could not find the contract, are you connected to the right chain?')
				return
			}

			// Setup contract connection using config
			if (!isInitial) initContract(web3Provider, connectedWallet)
		} catch (e: any) {
			console.error('initWallet()', e)
		}
	}

	const registerWalletEvents = (browserProvider: ExternalProvider): void => {
		try {
			// @ts-ignore
			browserProvider.on('accountsChanged', async accts => {
				setConnectedAddress(accts[0])
				await initWallet()
				const ethersProvider = new ethers.providers.Web3Provider(browserProvider)
				await initContract(ethersProvider, accts[0])
			})

			// @ts-ignore
			browserProvider.on('chainChanged', chain => {
				window.location.reload()
			})
		} catch (e: any) {
			console.error('registerWalletEvents()', e)
		}
	}

	const connectWallet = async (): Promise<void> => {
		try {
			if (!web3Provider) return
			await web3Provider.provider?.request!({ method: 'eth_requestAccounts' })
			await initWallet()
			setConnected(true)
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (e: any) {
			console.error('connectWallet()', e)
			setWeb3Error(e)
		}
	}

	const disconnectWallet = async () => {
		setConnected(false)
		setConnectedAddress('')
	}

	return (
		<Web3Context.Provider
			value={{
				web3ProviderData: {
					web3Provider,
					contract,
					otherState,
					contractState,
					refreshContractState,
					connectWallet,
					disconnectWallet,
					connected,
					connectedAddress,
					web3Error,
				},
			}}
		>
			{!loading ? (
				<Box
					sx={{
						backgroundColor: 'text.primary',
						width: '100vw',
						height: '100vh',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<CircularProgress size={60} sx={{ color: '#ff0087' }} />
					<Typography variant="overline" sx={{ mt: 3, color: '#fafafa' }}>
						Still Waiting...
					</Typography>
				</Box>
			) : (
				children
			)}
		</Web3Context.Provider>
	)
}

export const useWeb3Context = () => {
	const { web3ProviderData } = useContext(Web3Context)

	if (Object.keys(web3ProviderData).length === 0) {
		throw new Error(
			'useWeb3Context() can only be used inside of <Web3ContextProvider />, ' + 'please declare it at a higher level.',
		)
	}

	return web3ProviderData
}
