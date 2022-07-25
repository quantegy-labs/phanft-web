//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract QuantegyLabsAccessControl is Ownable {
    /// @dev The CEO's address
    address public ceoAddress;
    /// @dev The CTO's address
    address public ctoAddress;
    /// @dev The Quantegy Labs treasury multi-sig address
    address payable internal treasury;

    modifier onlyCEO() {
        require(msg.sender == ceoAddress);
        _;
    }

    modifier onlyCTO() {
        require(msg.sender == ctoAddress);
        _;
    }

    /// @dev Emitted when a new CEO assumes the role
    event CEOUpdated(address newCEO);
    /// @dev Emitted when a new CTO assumes the role
    event CTOUpdated(address newCTO);
    /// @dev Emitted when the contract owner updates the treasury address
    event TreasuryUpdated(address newTreasuryAddress);

    constructor() {
        console.log(
            "Deploying QuantegyLabsAccessControl contract from",
            msg.sender
        );
        console.log("CEO and CTO access has been given to", msg.sender);
        // The creator of the contract is the initial CEO
        ceoAddress = msg.sender;
        // The creator of the contract is also the initial CTO
        ctoAddress = msg.sender;
    }

    /// @dev Assigns a new address to act as the CEO. Only available to the current CEO.
    /// @param _newCEO The address of the new CEO
    function setCEO(address _newCEO) external onlyCEO {
        require(_newCEO != address(0));
        ceoAddress = _newCEO;
        emit CEOUpdated(_newCEO);
    }

    /// @dev Assigns a new address to act as the CTO. Only available to the current CEO.
    /// @param _newCTO The address of the new CTO
    function setCFO(address _newCTO) external onlyCEO {
        require(_newCTO != address(0));
        ctoAddress = _newCTO;
        emit CTOUpdated(_newCTO);
    }

    /// @dev Update the treasury address if/when need be
    function setTreasury(address payable _treasury) external onlyCEO {
        treasury = _treasury;
        emit TreasuryUpdated(_treasury);
    }
}
