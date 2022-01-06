// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Transactions {
  uint256 transactionCount;

  struct TransferStruct {
    address sender;
    address reciever;
    uint amount;
    string message;
    uint256 timestamp;
    string keyword;
  }

  TransferStruct[] transactions;

  event Transfer(address from, address reciever, uint amount, string message, uint256 timestamp, string keyword);

  function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
    transactionCount += 1;
    transactions.push(TransferStruct({
      sender: msg.sender,
      reciever: receiver,
      amount: amount,
      message: message,
      timestamp: block.timestamp,
      keyword: keyword
    }));

    emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
  }

  function getAllTransactions() public view returns (TransferStruct[] memory) {
    return transactions;
  }

  function getTransactionCount() public view returns (uint256) {
    return transactionCount;
  }
}