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

