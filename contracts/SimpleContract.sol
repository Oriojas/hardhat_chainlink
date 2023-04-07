// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.18;

contract SimpleContract {
    uint public number;
    string public name;

    function setNumber(uint _newNumber) public {
        number = _newNumber;
    }

    function setName(string memory _newName) public {
        name = _newName;
    }

}
