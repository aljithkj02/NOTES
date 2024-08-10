// Representing bits and bytes in JS 

// Bit 
const x = 0;
console.log(x);

// Byte 
const y = 202;
console.log(y)

// Array of bytes
const bytes = [202, 244, 1, 23]; // [8 bytes, 8 bytes, 8 bytes, 8 bytes] total memory = 32 bytes or 256 bits
console.log(bytes);

// A better way to represent an array of bytes is to use UInt8Array in JS
const uint8Bytes = new Uint8Array([202, 244, 1, 23]); // [1 byte, 1 byte, 1 byte, 1 byte] total memory = 4 bytes or 32 bits
console.log(uint8Bytes);

uint8Bytes[3] = 257; // The value of 3rd index turned out to be 1, since the max value is 255 here.
console.log(uint8Bytes);

