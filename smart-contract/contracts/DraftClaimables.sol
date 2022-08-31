//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import 'hardhat/console.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import './QuantegyLabsAccessControl.sol';


/// TODO: layer everything up by one, where instead of handling for one collection, handle across mapping of collection addresses which store their own list of claimable items

/**
	* @dev Types of claimable items, this could be wearables, posters, event and beer tickets, or art pieces
	*/
enum ClaimableType {
	None, // 0
	DigitalItem, // 1
	PhysicalItem, // 2
	EventItem // 3
}

/// @param type - one of the whitelisted types
/// @param key - the unique key name for the claimable item
/// @param name - the item display name name for the claimable item
/// @param claimed - if it has been claimed or not
/// @param claimedAt - when it has been claimed
/// @param claimedBy - who claimed it
struct ClaimableItem {
	ClaimableType claimableType;
	string key;
	string name;
	bool claimed;
	uint256 claimedAt; // also doubles as createdAt until it's claimed
	address claimedBy;
}

/// @dev In this pattern, ERC721 Collection contracts can inherit this Claimables contract and be reponsible for updating it's claimables as it sees fit, having access to this storage and internal counter
contract Claimables is QuantegyLabsAccessControl {
	using Counters for Counters.Counter;

	/// Each claimable is of a given type, and is noted if it has been claimed or noted
	/// New claimables can be added onto given tokens retroactively for future claimable drops
	/// @dev This mapping stores the current state of claimables for a given token ID
	/// @dev A token contains a mapping of claimables, based off their unique 'key' field
	/// This represents a mapping of token IDs, expected to be of the collection that inherits this contract.
	/// Since this isn't an array, we keep a counter to keep track of the size of this mapping.
	mapping(uint256 => mapping(string => ClaimableItem)) public tokenClaimables;

	/// @dev This keeps track of the collection size that inherits this contract, useful for retro-adctively
	/// adding or removing a claimable items for all tokens within the collection.
	/// Each time a new token is minted, this will increment, and that will only be when it updates.
	/// This will then be used to map through when adding/removing a token to the entire collection.
	Counters.Counter internal _tokenClaimablesSize; // init at 0

	/// Events
	event ClaimableAdded(uint256 tokenId, string key, address addedBy);
	event ClaimableDeleted(uint256 tokenId, string key, address deletedBy);
	event ClaimableClaimed(uint256 tokenId, string key, address claimedBy);

	modifier tokenCompliance(uint256 _tokenId) {
		// This should be a better chedk
		require(tokenClaimables[_tokenId][""].claimedBy == address(0), 'No claimables for given token ID');
		_;
	}

	constructor() {
		console.log('Deploying Claimables contract from', msg.sender);
	}

	function getTokenClaimable(uint256 _tokenId, string memory _claimableKey) public view tokenCompliance(_tokenId) returns (ClaimableItem memory)
	{
		return tokenClaimables[_tokenId][_claimableKey];
	}

	/// @dev Adds a claimable item for a given token ID
	function addClaimableForToken(uint256 _tokenId, ClaimableType _claimableType, string memory _key, string memory _name) public adminOnly returns (ClaimableItem memory)
	{
		// Instantiate a new claimable with some default values
		ClaimableItem memory newClaimable = ClaimableItem(_claimableType, _key, _name, false, block.timestamp, address(0));
		// Assign it to the token's claimables at the new key position
		tokenClaimables[_tokenId][_key] = newClaimable;

		// emit the event and return the newly created item
		emit ClaimableAdded(_tokenId, _key, _msgSender());
		return newClaimable;
	}

/// @dev Adds a claimable item for all tokens
	function addClaimableForAllTokens(ClaimableType _claimableType, string memory _key, string memory _name) public adminOnly
	{
		for (uint8 i = 1; i <= _tokenClaimablesSize.current(); i++) {
			addClaimableForToken(i, _claimableType, _key, _name);
		}
	}

	/// @dev Removes a claimable item for a given token ID
	function removeClaimableForToken(uint256 _tokenId, string memory _key) public adminOnly
	{
		delete tokenClaimables[_tokenId][_key];
		emit ClaimableDeleted(_tokenId, _key, _msgSender());
	}

	/// @dev Removes a claimable item for all tokens
	function removeClaimableForAllTokens(string memory _key) public adminOnly
	{
		for (uint8 i = 1; i <= _tokenClaimablesSize.current(); i++) {
			removeClaimableForToken(i, _key);
		}
	}

	/// TODO: @dev Updaets a claimable item for a given a token ID
	function claimItemForToken(uint256 _tokenId, string calldata _key) public returns (ClaimableItem memory)
	{
		ClaimableItem memory claimItem = tokenClaimables[_tokenId][_key];
		// Update the items data
		claimItem.claimed = true;
		claimItem.claimedBy = _msgSender();
		claimItem.claimedAt = block.timestamp;

		// Store it back in
		tokenClaimables[_tokenId][_key] = claimItem;

		// Return the newly updated claimable
		emit ClaimableClaimed(_tokenId, _key, _msgSender());
		return tokenClaimables[_tokenId][_key];
	}

	function addTokenToTokenClaimablesList(uint256 _tokenId) public tokenCompliance(_tokenId) returns (ClaimableItem[][] memory collectionRedeemables)
	{
		// set it with a base default claimable key as empty string
		tokenClaimables[_tokenId][''] = ClaimableItem(ClaimableType.None, '', '', false, block.timestamp, address(0));
		// return the total collection's list
		return collectionRedeemables;
	}
}
