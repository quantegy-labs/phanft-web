const basePath = process.cwd()
const fs = require('fs')

// src & dest
const srcFile = `${basePath}/collection/555/full metadata/metadata.json`
const destDir = `${basePath}/collection/final/metadata/`

// read json data
let rawdata = fs.readFileSync(srcFile)
let data = JSON.parse(rawdata)

// Clear out final asset directories
fs.rmSync(destDir, { recursive: true, force: true })
fs.mkdirSync(destDir)

// General metadata for Ethereum
const namePrefix = 'Enlightened Lizard'
const imagesBaseUri = 'ipfs://{cid}' // UPDATE THIS
const contractAddress = '0xC715D21FEe866DfB40024eF71C8a452090A14e00' // UPDATE THIS

const generateDescription = (id) => `
**About Enlightened Lizards**

Enlightened Lizards is a NFT collection of utility-driven, digital collectibles that celebrate and unify our amazing community centered around music, art, and positivity. As the genesis collection from [PhanFT](https://phanft.xyz), created for phans by phans, these NFTs grant membership access into the PhanFT ecosystem and unlock all the benefits that come with it. It's your web3 pass to 4.0 phandom!

**Utility-Driven Digital Collectibles**

The utility comes in the form of redeemable items attached to the given token's ID. These can be loaded on retro-actively from PhanFT and can be claimed on-chain. Items can take the form of IRL swag and collaborations with community artists, event tickets, token airdrops, and etc. Check out the [PhanFT roadmap](https://phanft.xyz#roadmap) for more information.

Each token keeps its own state of redeemable items, including what has or hasn't been claimed. For the latest state of this token's redeemable items, view its [NFT status page](https://phanft.xyz/enlightened-lizards/${id}).

**NFT Rights & Licensing**

This NFT Collection has been MINTangible™ Pre-Certified. Pre-Certification ensures that each NFT in the collection includes granted license rights for a registered work from a self-verified NFT creator. Access terms here [<https://rightsregistry.xyz/<phanFT blockchain>/<phanFT smart contract address>](https://rightsregistry.xyz/<phanFT blockchain>/<phanFT smart contract address>)`

// update the pertinant fields
data.collection.forEach((item, idx) => {
	const id = idx + 1

	// remove compiler field
	delete item.compiler

	// update name & description
	item.name = `${namePrefix} ${item.name}`
	item.description = generateDescription(id)

	// update image URI - ipfs://[cid]/1.png
	item.image = `${imagesBaseUri}/${item.image}`

	// point to NFT viewer on PhanFT website
	item.external_url = `https://phanft.xyz/enligtened-lizards/${id}`

	// add in MINTangible digital IP rights URIs
	item.rights = {
		rights_registry_listing: `https://rightsregistry.xyz/ethereum/<contractAddr>/${id}`,
		rights_metadata_url: `ipfs://<folder hash>/rights-metadata/${id}.json`,
	}

	// tie them in with the deployed NFT smart contract
	item.contract_address = contractAddress

	// add in creators information
	item.properties.creators = ['PhanFT (@phanft_official Twitter)']

	// update genesis field
	item.properties.is_genesis = true

	// rewrite the individual token metadata file
	fs.writeFileSync(`${destDir + id}.json`, JSON.stringify(item, null, 2))
})

// rewrite the entire file
fs.writeFileSync(`${destDir}_metadata.json`, JSON.stringify(data, null, 2))

// log
console.log(`Updated imagesBaseUri for images to ===> ${imagesBaseUri}`)
console.log(`Updated description for images to ===> ${generateDescription('id')}`)
console.log(`Updated name prefix for images to ===> ${namePrefix}`)
