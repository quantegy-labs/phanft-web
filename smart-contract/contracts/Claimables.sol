//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Claimables {
    /// @dev Types of cliamable items, this could be wearables, posters, event and beer tickets, or art pieces
    enum ClaimableType {
        MerchItem,
        PosterItem,
        ArtItem,
        FoodItem,
        EventItem
    }

    /// @param itemType - one of the whitelisted types
    /// @param name - the unique key name for the claimable item
    /// @param isClaimed - if it has been claimed or not
    struct Claimable {
        ClaimableType itemType;
        string itemName;
        bool isClaimed;
    }

    /// @dev This mapping stores the current state for any given token for their claimables.
    /// Each claimable is of a given type, and is noted if it has been claimed or noted
    /// New claimables can be added onto given tokens retroactively for future claimable drops
    mapping(string => Claimable[]) public tokenToClaimables;

    /// Events
    event ItemClaimed(string tokenURI, string itemName);

    constructor() {}

    function addTokenClaimables(
        string memory _tokenURI,
        Claimable memory _newClaimable
    ) public returns (Claimable[] memory tokenClaimables) {
        tokenToClaimables[_tokenURI].push(_newClaimable);
        return tokenToClaimables[_tokenURI];
    }

    function cliamItem(string memory _tokenURI, string memory _itemName)
        public
    {
        Claimable[] memory itemClaimables = tokenToClaimables[_tokenURI];
        // TODO: Use an array slice, store index in some way and access it by that
        // Claimable itemToClaim = itemClaimables.find(c => c.itemName == _itemName);
        // itemToClaim.isClaimed = true;
        emit ItemClaimed(_tokenURI, _itemName);
    }
}
