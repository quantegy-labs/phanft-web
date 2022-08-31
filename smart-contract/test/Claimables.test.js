const { expect } = require('chai')
const { ethers } = require('hardhat')
const { BigNumber, constants } = require('ethers')

describe('Claimables', function () {
	let accounts = []
	let owner
	let Claimables

	const testDefaultValues = (item) => {
		expect(item[0]).to.equal(0)
		expect(item[1]).to.equal('')
		expect(item[2]).to.equal('')
		expect(item[3]).to.equal(false)
		expect(item[4]).to.equal(BigNumber.from(0))
		expect(item[5]).to.equal(constants.AddressZero)
	}

	before(async () => {
		// Get account addresses
		const signers = await hre.ethers.getSigners()
		for (const signer of signers) {
			accounts.push(signer.address)
		}
		owner = accounts[0]

		// Deploy contract
		Claimables = await ethers.getContractFactory('Claimables')
		Claimables = await Claimables.deploy()
		await Claimables.deployed()
	})

	it('has been deployed', async () => {
		expect(Claimables).not.to.equal(undefined)
	})

	it('Should have an address', () => {
		const address = Claimables.address
		expect(address).not.to.equal(0x0)
		expect(address).not.to.equal('')
		expect(address).not.to.equal(null)
		expect(address).not.to.equal(undefined)
	})

	// Comapre that any given claimable item has all zero values
	it('Should have an empty set of tokenClaimables', async () => {
		const claimable = await Claimables.tokenClaimables(1, 'any')
		testDefaultValues(claimable)

		const anotherClaimable = await Claimables.tokenClaimables(2, 'another')
		testDefaultValues(anotherClaimable)
	})

	it('Should allow to add in a claimable for a given token ID', async () => {
		// New claimable details
		const tokenId = 1
		const claimableType = 0 // DigitalItem
		const claimableKey = 'digital-ticket'
		const claimableName = 'PhanFT OYB Event Pass'

		// Make tx
		const resp = await Claimables.addClaimableForToken(tokenId, claimableType, claimableKey, claimableName)
		const tx = await resp.wait()

		// Emitted the event
		const event = tx.events[0]
		expect(event.event).to.equal('ClaimableAdded')
		expect(event.args.tokenId).to.equal(BigNumber.from(tokenId))
		expect(event.args.key).to.equal(claimableKey)
		expect(event.args.addedBy).to.equal(owner)

		// Claimable is available in token's list
		const claimable = await Claimables.tokenClaimables(tokenId, claimableKey)
		expect(claimable[0]).to.equal(claimableType)
		expect(claimable[1]).to.equal(claimableKey)
		expect(claimable[2]).to.equal(claimableName)
		expect(claimable[3]).to.equal(false)
		expect(claimable[4]).to.be.instanceOf(BigNumber) // block.timestamp
		expect(claimable[5]).to.equal(constants.AddressZero)

		// Only adds for given token id
		const anotherClaimable = await Claimables.tokenClaimables(2, claimableKey)
		testDefaultValues(anotherClaimable)
	})

	it('Should allow to claim an item for a given token ID', async () => {
		// New claimable details
		const tokenId = 1
		const claimableType = 0 // DigitalItem
		const claimableKey = 'digital-ticket'
		const claimableName = 'PhanFT OYB Event Pass'
		// Create the token claimable
		await Claimables.addClaimableForToken(tokenId, claimableType, claimableKey, claimableName)
		// Hasn't been claimed by default
		const item = await Claimables.getTokenClaimable(tokenId, claimableKey)
		expect(item.claimed).to.be.false
		// Make the claim tx
		const resp = await Claimables.claimItemForToken(tokenId, claimableKey)
		const tx = await resp.wait()
		// Emitted the event
		const event = tx.events[0]
		expect(event.event).to.equal('ClaimableClaimed')
		expect(event.args.tokenId).to.equal(BigNumber.from(tokenId))
		expect(event.args.key).to.equal(claimableKey)
		expect(event.args.claimedBy).to.equal(owner)
		// Check that same item has been claimed
		const claimable = await Claimables.getTokenClaimable(tokenId, claimableKey)
		expect(claimable.claimed).to.be.true
	})
})
