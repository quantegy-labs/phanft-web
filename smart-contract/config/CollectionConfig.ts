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
	tokenName: 'Enlightened Lizards', // Update when iterating
	tokenSymbol: 'LIZARD',
	hiddenMetadataUri: 'ipfs://QmPaADAAUUXqWBBx8nWtQGaRPvi1hWQM47NpWHwe3NVwZp/metadata.json', // uploaded 8/31 11:45am
	// hiddenMetadataUri: 'ipfs://QmQ1BdefQ9nuqJXCCgGdgB9fRjhW5U2tmS2XNbh63zqjKP/metadata.json', // uploaded 8/31 9:45am
	maxSupply: 555,
	whitelistSale: {
		price: 0.09,
		maxMintAmountPerTx: 1,
	},
	// preSale: {
	// 	price: 0.075,
	// 	maxMintAmountPerTx: 2,
	// },
	publicSale: {
		price: 0.1,
		maxMintAmountPerTx: 5,
	},
	contractAddress: '0x9a1511bd23cd9eDc8aA5311284835Ecd1d477201', // rinkeby
	// contractAddress: '0x54A4cDeA2CF37db48E0c78bb41De6904DFF6d4E2', // mainnet
	marketplaceIdentifier: 'enlightened-lizards',
	marketplaceConfig: Marketplaces.openSea,
	whitelistAddresses,
}

export default CollectionConfig
