import { ethers } from 'hardhat'

async function main() {
	// ClaimCenter
	console.log('Deploying ClaimCenter contract...')
	const ClaimCenterContract = await ethers.getContractFactory('ClaimCenter')
	const claimCenterContract = await ClaimCenterContract.deploy()// as NftContractType
	await claimCenterContract.deployed()
	console.log('ClaimCenter deployed to:', claimCenterContract.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch(error => {
	console.error(error)
	process.exitCode = 1
})
