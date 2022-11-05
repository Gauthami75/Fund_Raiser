// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract FundRaiser {
    event Transfer(
        address to,
        uint amount
    );

    function transferAmount(address payable to, uint256 amount) external {
        require(address(this).balance > amount, "Balance too low");
        to.transfer(amount);
        emit Transfer(to,amount);
    }
}