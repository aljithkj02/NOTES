# Web3

## What is Block Chain?
- A block chain is a secure, transparent and decentralized way to record and verify transactions, making it the foundation for crypto currencies like Bitcoin and other application beyond just currency.
- Think of a block chain as a digital ledger or record book.

### Blocks
- A block chain is made up of a series of block.
- Each block is like a page in a ledger, containing a list of transactions.

### Chain
- These blocks are linked or chained together in a specific order, hence the name is "Block chain".

### Decentralized
- Instead of being stored in a single location, this ledger is distributed across many computers ( called Nodes ) around the world.
- Each node has a copy of the entire block chain.

### Immutable
- Once a block is added to the chain, It can't be altered or deleted.
- This is becasue each block contain a unique code (called a hash) and the hash of the previous block, linking them together securely.

## Why Block chain
### 1, Inflating currencies
- Government has been printing currencies left, right, and center. This lead to increasing inflation. Price of everything goes up.
- Holding on to cash is a losers bet in the long run.
- Holding on to any asset (Gold, stock, real estate) is better compared to currencies like USD, INR

### 2, Fractional reserve banking
- Banks don't have our money. They lend out most of it.
- If there is a bank run (everyone goes to the bank to withdraw their money), banks won't be able to pay everyone.
- Currenceies are not backed by assetes anymore.

## Hashing
- Hashing is a process that transforms input data (of any size) into a fixed size string of characters.
- Hash functions have serveral important properties.

    #### 1. Deterministic
    - The same input will always produce the same output.

    #### 2. Fast computation
    - The hash value can be quuickly computed for any given data.

    #### 3. Pre-image resistance
    - It should be computationally infeasible to reverse the hash function.

    #### 4. Small changes in input produce large changes in output
    - Even a tiny change in the input should drastically change the hash output.

    #### 5. Collision resistance
    - It should be computationally infeasible to find 2 different inputs that produce the same hash output.

## Proof Of Work (POW)
- It is a consensus mechanism used in block chain networks to securely validate transactions and add new block to the chain.
- Proof of work aims to find a good miner who has done the computational work (by solving difficult problem) required to add a new block to the chain.
- It ensures that the network reaches a consensus on the state of the block chain and secures it against attacks.