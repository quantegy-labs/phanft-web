// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// /**
// 	* @dev Types of redeemable items, this could be wearables, posters, event and beer tickets, or art pieces
// 	*/
// enum RedeemableType {
// 	None, // 0
// 	DigitalItem, // 1
// 	PhysicalItem, // 2
// 	EventItem // 3
// }

// /// @param type - one of the whitelisted types
// /// @param key - the unique key name for the redeemable item
// /// @param name - the item display name name for the redeemable item
// /// @param claimed - if it has been claimed or not
// /// @param claimedAt - when it has been claimed
// /// @param claimedBy - who claimed it
// struct RedeemableItem {
// 	address collectionAddress;
// 	uint256 tokenId;
// 	RedeemableType redeemableType;
// 	string key;
// 	string name;
// 	uint256 createdAt;
// 	bool claimed;
// 	uint256 claimedAt;
// 	address claimedBy;
// }


// /**
//  * @dev Partial Claim Center Smart Contract interface
//  * These functions should be called by the NFT contracts
//  */
// interface IClaimCenter {
// 	// Getting
// 	function getClaimCenterCollections() external returns (address[] memory);
// 	function getCollectionRedeemables(address _collectionContractAddr) external returns (RedeemableItem[][] memory);
// 	function getTokenRedeemables(address _collectionContractAddr, uint256 _tokenId) external returns (RedeemableItem[] memory);

// 	// Adding
// 	function addCollectionToClaimCenter(address _collectionContractAddr) external;
// 	function addTokenToClaimCenterCollection(address _collectionContractAddr, uint256 _tokenId) external returns (RedeemableItem[][] memory);
// 	function addCollectionRedeemable(address _collectionContractAddr, RedeemableType _type, string memory _key, string memory _name) external returns (RedeemableItem[][] memory);
// 	function addTokenRedeemable(address _collectionContractAddr, uint256 _tokenId, RedeemableType _type, string memory _key, string memory _name) external returns (RedeemableItem[] memory);

// 	// Claiming
// 	function claimTokenRedeemable(address _collectionContractAddr, uint256 _tokenId, string memory _key) external returns (RedeemableItem memory);
// }
