
// Bytes to Ascii 
const bytesToAscii = (byteArray) => {
    return byteArray.map(byte => String.fromCharCode(byte)).join("");
}

const asciiBytes = [75, 114, 105, 115, 104, 110, 97] // Corresponds to "Krishna"

const asciiString = bytesToAscii(asciiBytes);

console.log(asciiString); // Output: "Krishna"

// Uint8Array to Ascii 
const uint8ToAscii = (bytesArray) => {
    return new TextDecoder().decode(bytesArray)
}

const uintBytess = new Uint8Array([75, 114, 105, 115, 104, 110, 97]); 
console.log(uint8ToAscii(uintBytess)); // Output: "Krishna"

// Ascii to Uint8Array 
const asciiToUint8 = (asciiString) => {
    return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
}

const ascii = "Krishna";

console.log(asciiToUint8(ascii)); // new Uint8Array([75, 114, 105, 115, 104, 110, 97]);