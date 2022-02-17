//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Weth is ERC20 {
    //
    constructor() ERC20("Wrapped Ether", "WETH") {}

    function deposit() public payable {
        _mint(msg.sender, msg.value);
    }

    function withdraw(uint256 amount) public {
        require(balanceOf(msg.sender) >= amount, "Your balance is not enough!");
        _burn(msg.sender, amount);
        payable(address(msg.sender)).transfer(amount);
    }
}
