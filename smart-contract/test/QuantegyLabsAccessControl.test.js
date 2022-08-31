const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('QuantegyLabsAccessControl', function () {
	let accounts = []
	let owner
	let quantegyLabsAccessControl

	before(async () => {
		// Get account addresses
		const signers = await hre.ethers.getSigners()
		for (const signer of signers) {
			accounts.push(signer.address)
		}
		owner = accounts[0]

		// Deploy contract
		const QuantegyLabsAccessControl = await ethers.getContractFactory('QuantegyLabsAccessControl')
		quantegyLabsAccessControl = await QuantegyLabsAccessControl.deploy()
		await quantegyLabsAccessControl.deployed()
	})

	it('has been deployed', async () => {
		expect(quantegyLabsAccessControl).not.to.equal(undefined)
	})

	it('Should have an address', () => {
		const address = quantegyLabsAccessControl.address
		expect(address).not.to.equal(0x0)
		expect(address).not.to.equal('')
		expect(address).not.to.equal(null)
		expect(address).not.to.equal(undefined)
	})

	it('Should have treasury control', async () => {
		// Check updating the treasury
		let actualTreasury = await quantegyLabsAccessControl.getTreasury()
		expect(actualTreasury).to.equal('0x0000000000000000000000000000000000000000')
		await quantegyLabsAccessControl.setTreasury(accounts[5])
		actualTreasury = await quantegyLabsAccessControl.getTreasury()
		expect(actualTreasury).to.equal(accounts[5])
	})

	it('Should have access control', async () => {
		// Check access control given to owner
		const actualCeo = await quantegyLabsAccessControl.getCEO()
		const actualCto = await quantegyLabsAccessControl.getCTO()
		const expectedOwner1 = await quantegyLabsAccessControl.owner()
		const expectedOwner2 = owner
		expect(actualCeo).to.equal(expectedOwner1)
		expect(actualCeo).to.equal(expectedOwner2)
		expect(actualCto).to.equal(expectedOwner1)
		expect(actualCto).to.equal(expectedOwner2)

		// Update and check update
		await quantegyLabsAccessControl.setCEO(accounts[8])
		const newCeo = await quantegyLabsAccessControl.getCEO()
		await quantegyLabsAccessControl.setCTO(accounts[9])
		const newCto = await quantegyLabsAccessControl.getCTO()
		expect(newCeo).to.equal(accounts[8])
		expect(newCto).to.equal(accounts[9])
	})

	it('Should not allow any non-admin to read/write any contract data', async () => {
		const publicUser = accounts[7]
		// Reads
		try {
			await quantegyLabsAccessControl.connect(publicUser).getCEO()
		} catch (e) {
			expect(e).not.to.be.null
		}
		try {
			await quantegyLabsAccessControl.connect(publicUser).getCTO()
		} catch (e) {
			expect(e).not.to.be.null
		}
		try {
			await quantegyLabsAccessControl.connect(publicUser).getTreasury()
		} catch (e) {
			expect(e).not.to.be.null
		}
		// Writes
		try {
			await quantegyLabsAccessControl.connect(publicUser).setCTO(accounts[9])
		} catch (e) {
			expect(e).not.to.be.null
		}
		try {
			await quantegyLabsAccessControl.connect(publicUser).setCEO(accounts[9])
		} catch (e) {
			expect(e).not.to.be.null
		}
		try {
			await quantegyLabsAccessControl.connect(publicUser).setTreasury(accounts[9])
		} catch (e) {
			expect(e).not.to.be.null
		}
	})

	/**
	 * // TODO:
	 * - CEO should be able to update CEO, CTO, and treasury
	 * - CTO should be able to update CTO but not updating CEO nor treasury
	 */
})
