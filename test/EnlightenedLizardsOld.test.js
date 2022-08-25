const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("EnlightenedLizardsOld", function () {
  let accounts = []
  let owner
  let enlightenedLizards
  let treasury

  before(async () => {
    // Get account addresses
    const signers = await hre.ethers.getSigners();
    for (const signer of signers) {
      accounts.push(signer.address)
    }
    owner = accounts[0]
    treasury = accounts[9]

    // Deploy contract
    const EnlightenedLizards = await ethers.getContractFactory("EnlightenedLizardsOld");
    enlightenedLizards = await EnlightenedLizards.deploy();
    await enlightenedLizards.deployed();

    // Set treasury
    await enlightenedLizards.setTreasury(treasury)
  })

  it('has been deployed', async () => {
    expect(enlightenedLizards).not.to.equal(undefined)
  })

  it('Should have an address', () => {
    const address = enlightenedLizards.address
    expect(address).not.to.equal(0x0)
    expect(address).not.to.equal('')
    expect(address).not.to.equal(null)
    expect(address).not.to.equal(undefined)
  })

  it('Should have a name', async () => {
    const name = await enlightenedLizards.name()
    expect(name).to.equal('Enlightened Lizards')
  })

  it('Should have a symbol', async () => {
    const symbol = await enlightenedLizards.symbol()
    expect(symbol).to.equal('LIZARD')
  })

  it("Should have a max token supply", async () => {
    // Check base values
    const actualTotalSupply = await enlightenedLizards.totalSupply()
    const expectedTotalSupply = 555
    expect(actualTotalSupply).to.equal(expectedTotalSupply);
  })

  it('should mint a token', async () => {})

  it('should not mint more than the max supply', async () => {})

  it('should allow to a tokens URI metadata', async () => {})

  it('should send a royalty to the treasury during a transfer (sale)', async () => {})

  it('should allow the CEO to withdraw the funds to the treasury', async () => {
    const treasuryBalance = treasury.balance
    const contractBalance = enlightenedLizards.address.balance
    console.log(treasuryBalance, contractBalance)
  })

  // it('should allow a token to have two redeemables', async () => {})
});
