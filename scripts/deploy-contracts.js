// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require('hardhat')

async function main() {
	// Hardhat always runs the compile task when running scripts with its command line interface.
	//
	// If this script is run directly using `node` you may want to call compile manually to make sure everything is compiled
	// await hre.run('compile');

	// Deploy our access control contract
	const QuantegyLabsAccessControl = await hre.ethers.getContractFactory('QuantegyLabsAccessControl')
	const quantegyLabsAccessControl = await QuantegyLabsAccessControl.deploy()
	await quantegyLabsAccessControl.deployed()
	console.log('QuantegyLabsAccessControl deployed to:', quantegyLabsAccessControl.address)

	// Deploy our NFT collection contract
	const EnlightenedLizards = await hre.ethers.getContractFactory('EnlightenedLizards')
	const enlightenedLizards = await EnlightenedLizards.deploy()
	await enlightenedLizards.deployed()
	console.log('EnlightenedLizards deployed to:', enlightenedLizards.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
	.then(() => process.exit(0))
	.catch(error => {
		console.error(error)
		process.exit(1)
	})
