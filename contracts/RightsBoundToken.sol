// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

import "./IRightsProtocol.sol";

abstract contract RightsBoundToken is ERC721, Ownable {
    address payable private _feeRecipient; // Address to send the MINTangible fee
    string private _metadataBaseURI; // IPFS directory containing all NFT metadata files
    address private _rightsProtocolAddr; // Address of Rights Protocol Smart Contract

    function setMetadataBaseURI(string calldata metadataBaseURI_)
        public
        onlyOwner
    {
        _metadataBaseURI = metadataBaseURI_;
    }

    function setFeeRecipient(address payable feeRecipient_) public onlyOwner {
        _feeRecipient = feeRecipient_;
    }

    function setRightsProtocolAddr(address rightsProtocolAddr_)
        public
        onlyOwner
    {
        _rightsProtocolAddr = rightsProtocolAddr_;
    }

    function mint(uint256 tokenID) public payable {
        // Check payment, mint token, etc

        // Calculate MINTangible fee value
        uint256 feeValue = 10000000;

        // Transfer fee value to MINTangible
        Address.sendValue(_feeRecipient, feeValue);
    }

    function tokenURI(uint256 tokenID)
        public
        view
        override
        returns (string memory)
    {
        require(
            _exists(tokenID),
            "ERC721Metadata: URI query for nonexistent token"
        );
        return
            string(
                abi.encodePacked(
                    _metadataBaseURI,
                    "/",
                    Strings.toString(tokenID),
                    ".json"
                )
            );
    }

    function rightsURIs(uint256 tokenID) public view returns (string[] memory) {
        return
            IRightsProtocol(_rightsProtocolAddr).rightsURIs(
                address(this),
                tokenID
            );
    }
}
