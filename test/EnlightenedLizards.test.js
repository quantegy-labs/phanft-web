const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("EnlightenedLizards", function () {
  let accounts = []
  let owner
  let enlightenedLizards

  before(async () => {
    // Get account addresses
    const signers = await hre.ethers.getSigners();
    for (const signer of signers) {
      accounts.push(signer.address)
    }
    owner = accounts[0]

    // Deploy contract
    const EnlightenedLizards = await ethers.getContractFactory("EnlightenedLizards");
    enlightenedLizards = await EnlightenedLizards.deploy();
    await enlightenedLizards.deployed();
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

  it("Should have treasury control", async () => {
    // Check updating the treasury
    let actualTreasury = await enlightenedLizards.getTreasury()
    expect(actualTreasury).to.equal("0x0000000000000000000000000000000000000000")
    await enlightenedLizards.setTreasury(accounts[5])
    actualTreasury = await enlightenedLizards.getTreasury()
    expect(actualTreasury).to.equal(accounts[5])
  })

  it("Should have access control", async () => {
    // Check access control given to owner
    let actualCeo = await enlightenedLizards.ceoAddress()
    let actualCto = await enlightenedLizards.ctoAddress()
    const expectedOwner1 = await enlightenedLizards.owner()
    const expectedOwner2 = owner
    expect(actualCeo).to.equal(expectedOwner1);
    expect(actualCeo).to.equal(expectedOwner2);
    expect(actualCto).to.equal(expectedOwner1);
    expect(actualCto).to.equal(expectedOwner2);

    // Check setting the access control
    // CTO
    await enlightenedLizards.setCTO(accounts[3], { from: expectedOwner1 })
    actualCto = await enlightenedLizards.ctoAddress()
    expect(actualCto).to.equal(accounts[3])
    // CEO3
    await enlightenedLizards.setCEO(accounts[4], { from: expectedOwner1})
    actualCeo = await enlightenedLizards.ceoAddress()
    expect(actualCeo).to.equal(accounts[4])
  });
});
