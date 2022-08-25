// SPDX-License-Identifier: MIT

pragma solidity >=0.8.9 <0.9.0;

import "erc721a/contracts/extensions/ERC721AQueryable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "./QuantegyLabsAccessControl.sol";
import "./IRightsProtocol.sol";

contract EnlightenedLizards is ERC721AQueryable, Ownable, ReentrancyGuard {
    using Strings for uint256;
    using SafeMath for uint256;

    bytes32 public merkleRoot;
    mapping(address => bool) public whitelistClaimed;

    string public uriPrefix = ""; // IPFS directory containing all NFT metadata files
    string public uriSuffix = ".json";
    string public hiddenMetadataUri;

    uint256 public cost;
    uint256 public maxSupply;
    uint256 public maxMintAmountPerTx;

    bool public paused = true;
    bool public whitelistMintEnabled = false;
    bool public revealed = false;

    address payable private _feeRecipient; // Address to send the MINTangible fee
    address private _rightsProtocolAddr; // Address of Rights Protocol Smart Contract

    /// Events
    ////////////////////////////////////
    /// @dev Emitted when a new token is minted
    event NewLizardMinted(uint256 tokenId, address phan, string tokenURI);
    /// @dev Emitted when the contract owner withdraws the contract funds out to the treasury
    event FundsWithdrawn(uint256 balance);

    /// Modifiers
    ////////////////////////////////////
    modifier mintCompliance(uint256 _mintAmount) {
        require(
            _mintAmount > 0 && _mintAmount <= maxMintAmountPerTx,
            "Invalid mint amount!"
        );
        // if (msg.sender != owner()) {
        require(
            totalSupply() + _mintAmount <= maxSupply,
            "Max supply exceeded!"
        );
        // }
        _;
    }

    modifier mintPriceCompliance(uint256 _mintAmount) {
        require(msg.value >= cost * _mintAmount, "Insufficient funds!");
        _;
    }

    constructor(
        string memory _tokenName,
        string memory _tokenSymbol,
        uint256 _cost,
        uint256 _maxSupply,
        uint256 _maxMintAmountPerTx,
        string memory _hiddenMetadataUri
    ) ERC721A(_tokenName, _tokenSymbol) {
        setCost(_cost);
        maxSupply = _maxSupply;
        setMaxMintAmountPerTx(_maxMintAmountPerTx);
        setHiddenMetadataUri(_hiddenMetadataUri);
    }

    /// Methods
    ////////////////////////////////////
    function _baseURI() internal view virtual override returns (string memory) {
        return uriPrefix;
    }

    function _startTokenId() internal view virtual override returns (uint256) {
        return 1;
    }

    function tokenURI(uint256 _tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
            _exists(_tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );

        if (revealed == false) {
            return hiddenMetadataUri;
        }

        string memory currentBaseURI = _baseURI();
        return
            bytes(currentBaseURI).length > 0
                ? string(
                    abi.encodePacked(
                        currentBaseURI,
                        _tokenId.toString(),
                        uriSuffix
                    ) // ipfs://[CID]/[tokenId].json
                )
                : ""; // fallback if no baseURI set
    }

    function whitelistMintLizard(
        address _phan,
        uint256 _mintAmount,
        bytes32[] calldata _merkleProof
    )
        public
        payable
        mintCompliance(_mintAmount)
        mintPriceCompliance(_mintAmount)
    {
        // Verify whitelist requirements
        require(whitelistMintEnabled, "The whitelist sale is not enabled!");
        require(!whitelistClaimed[_msgSender()], "Address already claimed!");
        bytes32 leaf = keccak256(abi.encodePacked(_msgSender()));
        require(
            MerkleProof.verify(_merkleProof, merkleRoot, leaf),
            "Invalid proof!"
        );

        // mark the minter as having claimed
        whitelistClaimed[_msgSender()] = true;
        _safeMint(_msgSender(), _mintAmount);

        // _safeMint(_phan, newLizardId);
        // _setTokenURI(newLizardId, _tokenURI);
        // _tokenIds.increment();
        // emit NewLizardMinted(newLizardId, _phan, _tokenURI);
        // return newLizardId;

        // Transfer MINTangible fee 3.3% for digital IP rights and licensing
        uint256 feeValue = cost.mul(33).div(1000);
        Address.sendValue(_feeRecipient, feeValue);
    }

    function mintLizard(address _phan, uint256 _mintAmount)
        public
        payable
        mintCompliance(_mintAmount)
        mintPriceCompliance(_mintAmount)
    {
        require(!paused, "The contract is paused!");
        _safeMint(_msgSender(), _mintAmount);

        // uint256 newLizardId = _tokenIds.current();
        // _safeMint(_phan, newLizardId);
        // _setTokenURI(newLizardId, _tokenURI);
        // _tokenIds.increment();
        // emit NewLizardMinted(newLizardId, _phan, _tokenURI);
        // return newLizardId;

        // Transfer MINTangible fee 3.3% for digital IP rights and licensing
        uint256 feeValue = cost.mul(33).div(1000);
        Address.sendValue(_feeRecipient, feeValue);
    }

    /// @dev Gets the given Digital IP Rights & Licensing URI from MINTangible for the given token ID
    function rightsURIs(uint256 _tokenId)
        public
        view
        returns (string[] memory)
    {
        return
            IRightsProtocol(_rightsProtocolAddr).rightsURIs(
                address(this),
                _tokenId
            );
    }

    /// Owner Methods
    ////////////////////////////////////
    function mintForAddress(uint256 _mintAmount, address _receiver)
        public
        mintCompliance(_mintAmount)
        onlyOwner
    {
        _safeMint(_receiver, _mintAmount);
    }

    function setRevealed(bool _state) public onlyOwner {
        revealed = _state;
    }

    function setCost(uint256 _cost) public onlyOwner {
        cost = _cost;
    }

    function setMaxMintAmountPerTx(uint256 _maxMintAmountPerTx)
        public
        onlyOwner
    {
        maxMintAmountPerTx = _maxMintAmountPerTx;
    }

    function setHiddenMetadataUri(string memory _hiddenMetadataUri)
        public
        onlyOwner
    {
        hiddenMetadataUri = _hiddenMetadataUri;
    }

    function setUriPrefix(string memory _uriPrefix) public onlyOwner {
        uriPrefix = _uriPrefix;
    }

    function setUriSuffix(string memory _uriSuffix) public onlyOwner {
        uriSuffix = _uriSuffix;
    }

    function setPaused(bool _state) public onlyOwner {
        paused = _state;
    }

    function setMerkleRoot(bytes32 _merkleRoot) public onlyOwner {
        merkleRoot = _merkleRoot;
    }

    function setWhitelistMintEnabled(bool _state) public onlyOwner {
        whitelistMintEnabled = _state;
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

    function withdraw() public onlyOwner nonReentrant {
        // This will pay a 5% of the initial sale to a dcook.eth alt
        // =============================================================================
        // (bool hs, ) = payable(0x847F115314b635F58A53471768D14E67e587cb56).call{
        //     value: (address(this).balance * 5) / 100
        // }("");
        // require(hs);
        // =============================================================================

        // This will transfer the remaining contract balance to the owner.
        // Do not remove this otherwise you will not be able to withdraw the funds.
        // =============================================================================
        uint256 balance = address(this).balance;
        (bool os, ) = payable(owner()).call{value: balance}("");
        require(os);
        // =============================================================================

        /// @dev Withdraw the contract balance out to the Quantegy Labs treasury
        // treasury.transfer(balance);
        emit FundsWithdrawn(balance);
    }
}
