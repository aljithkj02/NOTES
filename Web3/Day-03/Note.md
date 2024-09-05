## What is Keccak256?
- Keccak256 is a cryptographic hashing algorithm.
- It is the basis of the SHA3 standard and is used in Ethereum.
- When we generate a new key pair for an Ethereum wallet, we create a private key and a corresponding public key.
- The public key which is 64 Bytes or 128 hex characters long, is then hashed using Keccak256 algorithm.
- After hashing the result is a 32 Byte (64 hex characters) hash.
- The Ethereum address is derived by taking the last 20 bytes (40 hex characters) of this Keccak256 hash of the public key.

## RPC (Remote Procedure Call)
- RPC is a protocol that allows a program to request a service or execute a procedure (function) on a remote server as if it were executing locally.
- This means the client program can call a function on the server and pass arguments to it, just like calling a local function.

## JSON RPC
- It is a remote procedure call protocol encoded in JSON.

## RPC Node
- A RPC node is a server which will communicate with the actual nodes from a blockchain network.
- Often we use this RPC node, when we create a dApp, we use RPC url which will hit the RPC server and that communicate with the real block chain node and give us response or does transaction.

## wei & gwei
- In Ethereum the smallest unit of currency is called wei
    ```
        1 Ether === 10^18 wei
    ```
- gwei is another unit used for measuring smaller amounts of Ether.
- Particularly in the context of gas fees.
    ```
        1 Ether === 10^9 gwei
    ```

## Lamport
- It is the smallest unit in the Solana chain.
    ```
        1 Sol === 10^8 lamports
    ```