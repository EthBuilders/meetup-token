// SPDX-License-Identifier: MIT
pragma solidity ^0.6.11;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract EthBuilderSocialToken is Ownable, ERC20 {
    uint8 public constant DECIMALS = 6;
    uint256 public constant INITIAL_SUPPLY = 100000000e6;

    constructor() public ERC20("EthBuilder Social Token", "ETHDEV") {
        _setupDecimals(DECIMALS);
        _mint(msg.sender, INITIAL_SUPPLY);
    }

    function onlySpecialPeopleCanCall()
        external
        view
        onlyOwner
        returns (string memory)
    {
        return "Feels good being special.";
    }
}
