// SPDX-License-Identifier: MIT

pragma solidity >=0.8.9 <0.9.0;

import "erc721a/contracts/extensions/ERC721AQueryable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "./IRightsProtocol.sol";
import "./Claimables.sol";

/*
	Post-deploy steps:
	0. Update ./config/CollectionConfig.ts w/ deployed address
	1. Run 'yarn verify [contract-address] --network truffle
	2. Set treasury address
	3. Set CTO address (optional)
	4.
	Mintangible steps:
	1. Rinkeby operator & fee recipient - setRightsFeeRecipient(0x0060ca998a581D2929842e9d54bbC84566860fe9)
	2. Rinkby RightsProtocol.sol contract - setRightsProtocolAddr(0xDEAC20254655FaC4b508e2c57D64fbC098CA6537)
	3. Update approveContractOperator for this contract https://rinkeby.etherscan.io/address/0xdeac20254655fac4b508e2c57d64fbc098ca6537#writeContract
*/

contract EnlightenedLizards is ERC721AQueryable, Claimables {
    using Strings for uint256;
    using SafeMath for uint256;
		using Counters for Counters.Counter;
		Counters.Counter private _tokenIdCounter;

		// Whitelisting
    bytes32 public merkleRoot;
    mapping(address => bool) public whitelistClaimed;
    bool public whitelistMintEnabled = false;

		// Token Metadata
    string public uriPrefix = ""; // IPFS directory containing all NFT metadata files
    string public uriSuffix = ".json";
    string public hiddenMetadataUri;
		string public hiddenRightsUri = "this is not allowed to be seen until reveal";

    // Minting tokens
		uint256 public cost;
    uint256 public maxSupply;
    uint256 public maxMintAmountPerTx;

		// Collection status
    bool public paused = true;
    bool public revealed = false;

		// MINTangible ditial NFT rights
    address payable private _rightsFeeRecipient; // Address to send the MINTangible fee
    address private _rightsProtocolAddr; // Address of Rights Protocol Smart Contract


    /// Events
    ////////////////////////////////////
    /// @dev Emitted when a new token is minted
    event NewLizardMinted(uint256 tokenId, string tokenURI, address phan);
    /// @dev Emitted when the contract owner withdraws the contract funds out to the treasury
    event FundsWithdrawn(uint256 balance);
		/// @dev Emitted when a token holder claims claimable rewards, initiated by contract owner on behalf of the recipient
		event WearableItemClaimed(uint256 tokenId, address phan);
		event PosterItemClaimed(uint256 tokenId, address phan);


    /// Modifiers
    ////////////////////////////////////
    modifier mintQtyCompliance(uint256 _mintAmount) {
			require(
				_mintAmount > 0 && _mintAmount <= maxMintAmountPerTx,
				"Invalid mint amount!"
			);
			require(
				totalSupply() + _mintAmount <= maxSupply,
				"Max supply exceeded!"
			);
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


    /// Overrides
		/// https://github.com/chiru-labs/ERC721A/blob/main/contracts/ERC721A.sol
    ////////////////////////////////////
    function _baseURI() internal view virtual override returns (string memory) {
			return uriPrefix;
    }

		/// @dev Start our token counting for this collection at 1 rather than 0
    function _startTokenId() internal view virtual override returns (uint256) {
			return 1;
    }

		/// @dev This stitches togther bits of dynamic data to a singular string
		/// @return // ipfs://[CID]/[tokenId].json or "" as a fallback
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
						)
					)
					: "";
    }


		/// Methods
    ////////////////////////////////////
    function whitelistMintLizard(
        address _phan,
        uint256 _mintAmount,
        bytes32[] calldata _merkleProof
    )
        public
        payable
        mintQtyCompliance(_mintAmount)
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

				// Token ID tracking, internal minting ids is in ERC721A
				// First increment, so we can start at 1 and mint for next token id available
				_tokenIdCounter.increment();
				uint256 newLizardId = _tokenIdCounter.current();

				// Mint the given quantity for a singular tx
        _safeMint(_phan, _mintAmount);

        // mark the minter as having claimed
        whitelistClaimed[_phan] = true;

				// Add the tokenId to the token claimables mapping
				// _tokenClaimablesSize.increment();
				// Create two claimables for the new token
				// addClaimableForToken(newLizardId, ClaimableType.PhysicalItem, 'poster', 'Limited Edition Poster');
				// addClaimableForToken(newLizardId, ClaimableType.PhysicalItem, 'wearable', 'Custom PhanF Wearable');

        // Transfer MINTangible fee 3.3% for digital IP rights and licensing
        uint256 feeValue = cost.mul(33).div(1000);
        Address.sendValue(_rightsFeeRecipient, feeValue);

				// Emit event with new metadata url
        string memory newTokenURI = tokenURI(newLizardId);
        emit NewLizardMinted(newLizardId, newTokenURI, _phan);
    }

    function mintLizard(address _phan, uint256 _mintAmount)
        public
        payable
        mintQtyCompliance(_mintAmount)
        mintPriceCompliance(_mintAmount)
    {
			require(!paused, "The contract is paused!");

			// Token ID tracking, internal minting ids is in ERC721A
			// First increment, so we can start at 1 and mint for next token id available
			_tokenIdCounter.increment();
			uint256 newLizardId = _tokenIdCounter.current();

			// Mint the given quantity for a singular tx
			_safeMint(_phan, _mintAmount);

			// mark the minter as having claimed
			whitelistClaimed[_phan] = true;

			// Add the tokenId to the token claimables mapping
			// _tokenClaimablesSize.increment();
			//Create two claimables for the new token
			// addClaimableForToken(newLizardId, ClaimableType.PhysicalItem, 'poster', 'Limited Edition Poster');
			// addClaimableForToken(newLizardId, ClaimableType.PhysicalItem, 'wearable', 'Custom PhanFT Wearable');

			// Transfer MINTangible fee 3.3% for digital IP rights and licensing
			uint256 feeValue = cost.mul(33).div(1000);
			Address.sendValue(_rightsFeeRecipient, feeValue);

			// Emit event with new metadata url
			string memory newTokenURI = tokenURI(newLizardId);
			emit NewLizardMinted(newLizardId, newTokenURI, _phan);
    }

    /// @dev Gets the given Digital IP Rights & Licensing URI from MINTangible for the given token ID
		/// Only shows the rights URIs post-reveal, as one could find image referneces in the rights metadata
    function rightsURIs(uint256 _tokenId)
        public
        view
        returns (string[] memory tokenRightsUris)
    {
			if (revealed == true) {
				return
					IRightsProtocol(_rightsProtocolAddr).rightsURIs(
							address(this),
							_tokenId
					);
			}

			return tokenRightsUris;
    }


    /// Owner Methods
    // ////////////////////////////////////
		/// @dev Mint a token for free on behalf of, this could be useful for airdropping, minting for free
    function adminMintLizard(address _receiver, uint256 _mintAmount)
        public
        mintQtyCompliance(_mintAmount)
        adminOnly
    {
        _safeMint(_receiver, _mintAmount);
    }

    function setPaused(bool _state) public onlyCTO {
        paused = _state;
    }

    function setRevealed(bool _state) public onlyCTO {
        revealed = _state;
    }

    function setCost(uint256 _cost) public adminOnly {
        cost = _cost;
    }

    function setMaxMintAmountPerTx(uint256 _maxMintAmountPerTx)
        public
        onlyCTO
    {
        maxMintAmountPerTx = _maxMintAmountPerTx;
    }

    function setWhitelistMintEnabled(bool _state) public onlyCTO {
        whitelistMintEnabled = _state;
    }

		function setMerkleRoot(bytes32 _merkleRoot) public onlyCTO {
        merkleRoot = _merkleRoot;
    }

		function setHiddenMetadataUri(string memory _hiddenMetadataUri)
        public
        onlyCTO
    {
        hiddenMetadataUri = _hiddenMetadataUri;
    }

    function setUriPrefix(string memory _uriPrefix) public onlyCTO {
        uriPrefix = _uriPrefix;
    }

    function setUriSuffix(string memory _uriSuffix) public onlyCTO {
        uriSuffix = _uriSuffix;
    }


		/// Digital Rights
		////////////////////////////////////
    function setRightsFeeRecipient(address payable rightsFeeRecipient_) public onlyCTO {
        _rightsFeeRecipient = rightsFeeRecipient_;
    }

    function setRightsProtocolAddr(address rightsProtocolAddr_)
        public
        onlyCTO
    {
        _rightsProtocolAddr = rightsProtocolAddr_;
    }

		function getBank() public view onlyCTO returns (address) {
			return this.getTreasury();
		}


		/// Banking
		////////////////////////////////////
    function fundTreasury() public onlyCEO nonReentrant {
        // TODO: withdraw out to other addresses automatically, i.e. 5%:
        // (bool hs, ) = payable(0x847F115314b635F58A53471768D14E67e587cb56).call{
        //     value: (address(this).balance * 5) / 100
        // }("");
        // require(hs);

        /// @dev Withdraw the contract balance out to the Quantegy Labs TODO: treasury
        // treasury.transfer(balance);

        // This will transfer the remaining contract balance to the treasury address.
        uint256 balance = address(this).balance;
        (bool os, ) = payable(this.getTreasury()).call{value: balance}("");
        require(os);

        emit FundsWithdrawn(balance);
    }
}
