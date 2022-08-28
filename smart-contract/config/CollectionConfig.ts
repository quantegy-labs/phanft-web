import CollectionConfigInterface from '../lib/CollectionConfigInterface'
import * as Networks from '../lib/Networks'
import * as Marketplaces from '../lib/Marketplaces'
import whitelistAddresses from '../lib/whitelist.json'

const CollectionConfig: CollectionConfigInterface = {
	testnet: Networks.ethereumTestnet,
	mainnet: Networks.ethereumMainnet,
	// The contract name can be updated using the following command:
	// yarn rename-contract NEW_CONTRACT_NAME
	// Please DO NOT change it manually!
	contractName: 'EnlightenedLizards',
	tokenName: 'Enlightened Lizards 10', // Update when iterating
	tokenSymbol: 'LIZARD',
	hiddenMetadataUri: 'ipfs://Qmbq4mEyewmumf7htMMTKtzj7zE8GxmBf3UwyKpd64BmHC/hidden.json', // fuzzy lizard with '?' overlay
	maxSupply: 10,
	whitelistSale: {
		price: 0.05,
		maxMintAmountPerTx: 1,
	},
	preSale: {
		price: 0.075,
		maxMintAmountPerTx: 2,
	},
	publicSale: {
		price: 0.1,
		maxMintAmountPerTx: 5,
	},
	// contractAddress: '0x56FF2F2B2F49441095E19d998F43e4ec38D94b54', // since 8/25 The deployed contract address (Rinkeby/Mainnet)
	contractAddress: '0x8f6b60d35628AbDA37199ed096Dea3b2B6484A03', // since 8/26
	marketplaceIdentifier: 'enlightened-lizards',
	marketplaceConfig: Marketplaces.openSea,
	whitelistAddresses,
}

export default CollectionConfig
