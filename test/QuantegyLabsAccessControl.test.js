const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("QuantegyLabsAccessControl", function () {
  let accounts = []
  let owner
  let quantegyLabsAccessControl

  before(async () => {
    // Get account addresses
    const signers = await hre.ethers.getSigners();
    for (const signer of signers) {
      accounts.push(signer.address)
    }
    owner = accounts[0]

    // Deploy contract
    const QuantegyLabsAccessControl = await ethers.getContractFactory("QuantegyLabsAccessControl");
    quantegyLabsAccessControl = await QuantegyLabsAccessControl.deploy();
    await quantegyLabsAccessControl.deployed();
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

  it("Should have treasury control", async () => {
    // Check updating the treasury
    let actualTreasury = await quantegyLabsAccessControl.getTreasury()
    expect(actualTreasury).to.equal("0x0000000000000000000000000000000000000000")
    await quantegyLabsAccessControl.setTreasury(accounts[5])
    actualTreasury = await quantegyLabsAccessControl.getTreasury()
    expect(actualTreasury).to.equal(accounts[5])
  })

  it("Should have access control", async () => {
    // Check access control given to owner
    let actualCeo = await quantegyLabsAccessControl.ceoAddress()
    let actualCto = await quantegyLabsAccessControl.ctoAddress()
    const expectedOwner1 = await quantegyLabsAccessControl.owner()
    const expectedOwner2 = owner
    expect(actualCeo).to.equal(expectedOwner1);
    expect(actualCeo).to.equal(expectedOwner2);
    expect(actualCto).to.equal(expectedOwner1);
    expect(actualCto).to.equal(expectedOwner2);

    // Check setting the access control
    // CTO
    await quantegyLabsAccessControl.setCTO(accounts[3], { from: expectedOwner1 })
    actualCto = await quantegyLabsAccessControl.ctoAddress()
    expect(actualCto).to.equal(accounts[3])
    // CEO3
    await quantegyLabsAccessControl.setCEO(accounts[4], { from: expectedOwner1})
    actualCeo = await quantegyLabsAccessControl.ceoAddress()
    expect(actualCeo).to.equal(accounts[4])
  });
});
