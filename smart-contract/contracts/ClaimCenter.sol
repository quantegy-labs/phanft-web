//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import 'hardhat/console.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import './IClaimCenter.sol';
import './QuantegyLabsAccessControl.sol';

/**
 * @dev Partial Claim Center Smart Contract interface
 * These functions should be called by the NFT contracts
 */
contract ClaimCenter is IClaimCenter, QuantegyLabsAccessControl {
	mapping(address => mapping(uint256 => RedeemableItem[])) public claimCenterCollections;

	constructor() {
		console.log('Deploying ClaimCenter contract from', msg.sender);
	}

	function addTokenRedeemable(address _collectionContractAddr, uint256 _tokenId, RedeemableType _type, string memory _key, string memory _name) public onlyCTO returns (RedeemableItem[] memory)
	{
		RedeemableItem memory newItem = RedeemableItem(_collectionContractAddr, _tokenId, _type, _key, _name, block.timestamp, false, 0, address(0));
		claimCenterCollections[_collectionContractAddr][_tokenId].push(newItem);
		return claimCenterCollections[_collectionContractAddr][_tokenId];
	}

	function getTokenRedeemables(address _collectionContractAddr, uint256 _tokenId) public view returns (RedeemableItem[] memory)
	{
		return claimCenterCollections[_collectionContractAddr][_tokenId];
	}

	function claimTokenRedeemable(address _collectionContractAddr, uint256 _tokenId, string memory _key) public view returns (RedeemableItem memory)
	{
		RedeemableItem[] memory redeemableItems = claimCenterCollections[_collectionContractAddr][_tokenId];
		RedeemableItem memory updatedItem;
		for (uint8 i = 0; i < redeemableItems.length; i++) {
			if (keccak256(abi.encodePacked(redeemableItems[i].key)) == keccak256(abi.encodePacked(_key))) {
				updatedItem = redeemableItems[i];
				redeemableItems[i].claimed = true;
				redeemableItems[i].claimedAt = block.timestamp;
				redeemableItems[i].claimedBy = msg.sender;
			}
		}
		return updatedItem;
	}
}
