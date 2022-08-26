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
	tokenName: 'Enlightened Lizards 50', // Update when iterating
	tokenSymbol: 'LIZARD',
	hiddenMetadataUri: 'ipfs://Qmbq4mEyewmumf7htMMTKtzj7zE8GxmBf3UwyKpd64BmHC/hidden.json', // fuzzy lizard with '?' overlay
	maxSupply: 50,
	whitelistSale: {
		price: 0.05,
		maxMintAmountPerTx: 1,
	},
	preSale: {
		price: 0.09,
		maxMintAmountPerTx: 2,
	},
	publicSale: {
		price: 0.1,
		maxMintAmountPerTx: 5,
	},
	contractAddress: '0x56FF2F2B2F49441095E19d998F43e4ec38D94b54', // The deployed contract address (Rinkeby/Mainnet)
	marketplaceIdentifier: 'enlightened-lizards',
	marketplaceConfig: Marketplaces.openSea,
	whitelistAddresses,
}

export default CollectionConfig
