//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "./QuantegyLabsAccessControl.sol";

contract EnlightenedLizards is
    ERC721,
    ERC721URIStorage,
    QuantegyLabsAccessControl
{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    /// @dev Collection size and token supply is 555 🐠
    uint256 public totalSupply = 555;

    uint256 public cost = 0.1 ether;
    string baseURI = "https://gateway.pinata.cloud/ipfs/QmcWekLBmhyUW18LzC3ExfCHesijgmiQwMTDjrfADRbkd1";

    /// Events
    ////////////////////////////////////
    /// @dev Emitted when a new token is minted
    event NewLizardMinted(uint256 tokenId, address phan, string tokenURI);
    /// @dev Emitted when the contract owner withdraws the contract funds out to the treasury
    event FundsWithdrawn(uint256 balance);

    /// Constructor
    ////////////////////////////////////
    constructor() ERC721("Enlightened Lizards", "LIZARD") {}

    /// Inheritied Overrides
    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    /// @notice No tipping!
    /// @dev Default fallback function
    /// @dev Reject all Ether from being sent here unless from Quantegy Labs members (Hopefully, we can prevent user accidents)
    fallback() external payable {
        require(
            msg.sender == address(ceoAddress) ||
                msg.sender == address(ctoAddress),
            "No tipping allowed"
        );
    }

    /// @notice No tipping!
    /// @dev Receive fallback function
    /// @dev Reject all Ether from being sent here unless from Quantegy Labs members (Hopefully, we can prevent user accidents)
    receive() external payable {
        require(
            msg.sender == address(ceoAddress) ||
                msg.sender == address(ctoAddress),
            "No tipping allowed"
        );
    }

    /// @dev Withdraw the contract balance out to the Quantegy Labs treasury
    function withdrawFunds() public onlyCEO {
        uint256 balance = address(this).balance;
        treasury.transfer(balance);
        emit FundsWithdrawn(balance);
    }

    /// @dev Mints a new token and updates the URI for the token metadata
    function mintLizard(address _phan, string memory _tokenURI)
        public
        returns (uint256)
    {
        require(_tokenIds.current() < totalSupply, "Collection is sold out");

        if (msg.sender != owner()) {
            require(msg.value >= cost)
        }

        uint256 newLizardId = _tokenIds.current();
        _safeMint(_phan, newLizardId);
        _setTokenURI(newLizardId, _tokenURI);
        _tokenIds.increment();

        emit NewLizardMinted(newLizardId, _phan, _tokenURI);
        return newLizardId;
    }
}
