// //SPDX-License-Identifier: Unlicense
// pragma solidity ^0.8.0;

// import 'hardhat/console.sol';
// import '@openzeppelin/contracts/utils/Counters.sol';
// import './IClaimCenter.sol';
// import './QuantegyLabsAccessControl.sol';

// /**
//  * @dev Partial Claim Center Smart Contract interface
//  * These functions should be called by the NFT contracts
//  */
// abstract contract ClaimCenter is IClaimCenter, QuantegyLabsAccessControl {
// 	// Collections
// 	mapping(address => mapping(uint256 => RedeemableItem[])) public claimCenterCollections;
// 	mapping(address => uint256) private _claimCenterCollectionsTokenCounts;
// 	address[] private _claimCenterCollectionAddresses;
// 	string[] private _redeemableItemKeys;

// 	// mapping(uint256 => mapping(string => ClaimableItem)) public tokenClaimables;
// 	// Counters.Counter internal _tokenClaimablesSize;

// 	constructor() {
// 		console.log('Deploying ClaimCenter contract from', msg.sender);
// 	}

// 	/// Item keys
// 	function addItemKey(string memory _itemKey) public onlyCTO
// 	{
// 		// Adds an item key only if it doesn't exist in the list already
// 		// bool containsItemKey = false;
// 		// for (uint8 i = 0; i < _redeemableItemKeys.length; i++) {
// 		// 	if (_redeemableItemKeys[i] == _itemKey) containsItemKey = true;
// 		// }
// 		// if (!containsItemKey)
// 		_redeemableItemKeys.push(_itemKey);
// 	}

// 	function getRedeemableItemKeys() public onlyCTO returns (string[] memory)
// 	{
// 		return _redeemableItemKeys;
// 	}

// 	/// Getting

// 	function getClaimCenterCollections() public view returns (address[] memory)
// 	{
// 		return _claimCenterCollectionAddresses;
// 	}

// 	function getTokenRedeemables(address _collectionContractAddr, uint256 _tokenId) public view returns (RedeemableItem[] memory)
// 	{
// 		return claimCenterCollections[_collectionContractAddr][_tokenId];
// 	}

// 	/// Adding

// 	function addCollectionToClaimCenter(address _collectionContractAddr) public returns (address[] memory)
// 	{
// 		// Put a placeholder in for tokenId of 0
// 		this.addTokenToClaimCenterCollection(_collectionContractAddr, 0);

// 		// Add address to array of collection addresses
// 		_claimCenterCollectionAddresses.push(_collectionContractAddr);

// 		// Initiate collection token count to zero
// 		_claimCenterCollectionsTokenCounts[_collectionContractAddr] = 0;

// 		return _claimCenterCollectionAddresses;
// 	}

// 	function addTokenToClaimCenterCollection(address _collectionContractAddr, uint256 _tokenId) public onlyCTO
// 	{
// 		// Adds a base, default redeemable for tokenId of 0
// 		RedeemableItem memory defaultItem = RedeemableItem(_collectionContractAddr, 0, RedeemableType.None, '', '', 0, false, 0, address(0));
// 		claimCenterCollections[_collectionContractAddr][_tokenId] = defaultItem;

// 		// Increment the token counter for the collection
// 		_claimCenterCollectionsTokenCounts[_collectionContractAddr]++;
// 	}

// 	// function addCollectionRedeemable(address _collectionContractAddr, RedeemableType _type, string memory _key, string memory _name) public returns (RedeemableItem[][] memory)
// 	// {
// 	// 	RedeemableItem memory newItem = RedeemableItem(_collectionContractAddr, 0, _type, _key, _name, 0, false, 0, address(0));

// 	// 	// Loop through the mapping by using the size as the conditional, start looping from 1
// 	// 	for (uint256 i = 1; i <= _claimCenterCollectionsTokenCounts[_collectionContractAddr]; i++) {
// 	// 		claimCenterCollections[_collectionContractAddr][i].push(newItem);
// 	// 	}
// 	// }

// 	// function addTokenRedeemable(address _collectionContractAddr, uint256 _tokenId, RedeemableType _type, string memory _key, string memory _name) public returns (RedeemableItem[] memory)
// 	// {
// 	// 	RedeemableItem memory newItem = RedeemableItem(_collectionContractAddr, _tokenId, _type, _key, _name, 0, false, 0, address(0));
// 	// 	claimCenterCollections[_collectionContractAddr][_tokenId][_key] = newItem;
// 	// }

// 	// /// Claiming

// 	// function claimTokenRedeemable(address _collectionContractAddr, uint256 _tokenId, string memory _key) external virtual returns (RedeemableItem memory);
// }
