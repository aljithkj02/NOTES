## How Banks do Auth?
- In traditional banks, we have a username & password that are enough for us to look at our balance, transfer money, and see the transactions happened.

## How Block chain do Auth?
- If we want to create an account on block chain we need to generate a public-private keypair.

## Hashing 
- Hashing is a process of converting data (like a file or message) into a fixed-size string of characters, which typically appears random.
- Common hashing algorithms - SHA-255, MD5

## Encryption
- Encryption is the process of converting plaintext data into an unreadable format called cipher text, using a specific algorithm and key.
- The data can be decrypted back to its original form only with the appropriate key.

## Key characteristics of encryption
- Reversible - with the correct key, the ciphertext can be decrypted back to plain text.
- Key dependent - The security of the encryption relies on the secrecy of the key.
- There are mainly 2 types of encryptions, Symmetric and Assymetric encryption.

## Symmetric encryption
- Here, the same key is used for both encryption and decryption.

## Asymmetric encryption
- Here, different keys are used for encryption and decryption ( public & private key )
- Asymmetric encryption also known as public key cryptography.
- It is a type of encryption that uses a pair or keys. a public key & a private key.
- The keys are mathematically related, but it is computationally infeasible to derive the private key from the public key.

## Public Key
- A public key is a string that can be shared openly.

## Private Key
- The private key is a secret cryptographic code that must be kept confidential.
- It is used to decrypt data, which is encrypted with the corresponding public key or to create digital signatures.

## Common asymmetric encryption algorithms
1. RSA - Rivest-Shamir-Adleman
2. Ecc - Elliiptic curve cryptography (ECDSA) - ETH & BTC uses.
3. EdDSA - Edwards-curve Digital Signature Algorithm - SOL uses.

## Few usecases of public key cryptography.
- SSL/TLS certificates
- SSH keys to connect to servers and push to github.
- Block chains and crypto currencies.

## Common eleptic curves.
- secp256k1 - BTC and ETH
- ed255519  - SOL

## What is a Bit
- A bit is the smallest usnig of data in a computer.
- And a bit can have one two values ( 0 & 1 )
- Think of a bit like a light switch that can be either off (0) or on (1).

## What is a Byte
- A Byte is a group of 8 bits or 8 bits together form a byte.
- It is the standard unit of data used to represent a single character in memory.
- Since each bit can be either 0 or 1, a byte can have 2^8 (256) possible values ranging from 0 - 255

## uint8Array
- A better way to represent an array of bytes is to use a uin8Array in JS.

## Why uint8Array over native arrays?
- They use less space.
- Native array takes 64 bits or 8 bytes for each number.
- But every value in a uint8Array takes 1 Byte or 8 bits.
- uint8Array enforces contraints - It makes sure that every element doesn't exceed 255.

## Encodings
- Bytes ae cool but highly unreadable.
- It is easier to encode data so it is more human readable.
- Some common encodings includes
    1. ASCII
    2. Hex
    3. Base 64
    4. Base 58

## ASCII
- ASCII stands for "American Standard Code for Information Interchange.
- ASCII is a 7-bit character set containing 128 characters.
- It contains the numbers from 0-9, the upper and lower case English letters A-Z, and some special characters.
- This characters sets used in modern computers, in HTML, and on the internet, are all based on ASCII.

## Hex (Hexa decimal)
- Hexa decimal is a base-26 number sytem or 4-bit number system containing 0-9, A-F. total 16. ( 0 - F)

## Base 64
- Here, 1 character = 6 bits.
- Base 64 encoding uses 64 different characters ( A-Z, a-z, 0-9, +, /)
- Which means each character can represent one of the 64 possible values.

## Base 58
- It is similar to Base 64 but uses a different set of characters to avoid visually similar characters and to make the encoded output more user friendly.
- Base 58 uses different characters.
- Uppercase letters: A-Z (excluding I & O)
- Lowecase letters: a-z (excluding l)
- Numbers: 1-9 (exluding 0)

## Conclustion
- So whenever we are writing something in our code, it is stored as binary data in the computer.
- The same binary can have different different values according to how we are encording it.
- If we encode it with hex we will get another value, if we did with ascii we get another one etc..

## What is the use of asymmetric encryption in blockchain
- Since we are using asymmetric encryption we have a public key and a private key.
- So if we want to send some money to our frinend we will take his public key and send tokens to his id.
- How block chain authenticate that you are the person has signed the transaction?
- Very simple, since we signed it with our private key, block chain use our publick key to decrypt and if it successfully decrypted that ensures we have signed it.
- Similarly when we send a transaction to someone, first we encrypt the message with the recievers public key then with our private key.
- When the reciever gets the message, first he decrypt with our public key and his private key. That is how it make the transaction very secure.

## HD Wallet (Hierarchical Deterministic wallet)
- Before BIP32 (Bitcoin Improvement Proposal 32) or year 2012, if we had to create multiple wallets for various purpose, we can create but the problem was we need to store the all private keys in the locker which is very hard and even if we miss any of these keys it get lost.
- In the Bitcoin Improvement Proposal 32 they have introduces a way to recover our all private keys from a single seed phrase. That is HD wallet is using.

## Derivation path
- It is a way to generate a sequence of keys from a master key or a seed in a HD wallet.
- It helps organize and manage multiple keys systematically.
- eg path,   m/44'/0'/0'/0'/0
- Each part of the path creates a new branch in the key hierarchy, helping us manage multiple accounts and addresses easily.

## Mnemonics phrase
- The mnemonic  phrase or seed phrase is the root of an HD wallet.
- As long as we have this seed phrase, we can create all the keys and address derived from it, regardless of how many accounts or address we have created.
- We must keep the phrase confidentially for securing our wallet and its funds.