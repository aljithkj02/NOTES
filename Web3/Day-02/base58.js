const bs58 = require('bs58');

// Encoding 
function uint8ArrayToBase58(uint8Array) {
  return bs58.encode(uint8Array);
}

const byteArray = new Uint8Array([75, 114, 105, 115, 104, 110, 97]); // Corresponds to "Krishna"
const base58String = uint8ArrayToBase58(byteArray);
console.log(base58String); // Output: Base58 encoded string

// Decoding 
function base58ToUint8Array(base58String) {
    return bs58.decode(base58String);
}

// Example usage:
const base58 = base58String; // Use the previously encoded Base58 string
const byteArrayFromBase58 = base58ToUint8Array(base58);
console.log(byteArrayFromBase58); // Output: Uint8Array([75, 114, 105, 115, 104, 110, 97]); 