import { ethers } from 'hardhat'
import CollectionConfig from '../config/CollectionConfig'
import { NftContractType } from '../lib/NftContractProvider'
import ContractArguments from './../config/ContractArguments'

async function main() {
	// EnlightenedLizards
	console.log('Deploying EnlightenedLizards contract...')
	const Contract = await ethers.getContractFactory(CollectionConfig.contractName)
	const contract = (await Contract.deploy(...ContractArguments)) as NftContractType
	await contract.deployed()
	console.log('EnlightenedLizards deployed to:', contract.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch(error => {
	console.error(error)
	process.exitCode = 1
})
