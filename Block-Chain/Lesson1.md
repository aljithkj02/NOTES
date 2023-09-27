# Block chain Basics

## What is smart contracts?
- A smart contract is a piece of code running on the blockchain.
- A Smart contract is an agreement, contract, or set of instructions that is deployed on a decentralized block chain.
- Smart contracts are a set of instructions executed in a decentralized way without the need for a centralized or third party intermediary.
- Once the contract is deployed it cannot be altered, it automatically executes, and everyone can see the terms of the agreement.
    - It is a state machine
    - Needs transactions to change the state.
    - Can do logic operations
    - State change happens through mining + transactions.

## Structure of a solidity contract
- "Class" like structure
- Contains functions
- Control structures
    - IF/ELSE
- Loops
    - For/while
- DataTypes
    - (U)Int, Boolean, Array
    - Struct, Mapping, Address
    - No floats!
- Inheritable
- Special structures like , modifiers
- Imports

## Solidity layout
- Version Pragma
- Pre-Compiler statement
- Contract name: CapWords style

```bash
    // SPDX-License-Identifier: MIT
    pragma solidity 0.8.21;

    contract MyContract {
        string public ourString = "Hello world!";
    }
```