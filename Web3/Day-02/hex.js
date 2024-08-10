// Array To Hex 
function arrayToHex(byteArray) {
    let hexString = '';
    for (let i = 0; i < byteArray.length; i++) {
        hexString += byteArray[i].toString(16).padStart(2, '0');
    }
    return hexString;
}
  
// Example usage:
const byteArray = new Uint8Array([75, 114, 105, 115, 104, 110, 97]); // Corresponds to "Krishna"

const hexString = arrayToHex(byteArray);
console.log(hexString); // Output: "4b726973686e61"

// Hex to Array 
function hexToArray(hexString) {
    const byteArray = new Uint8Array(hexString.length / 2);
    for (let i = 0; i < byteArray.length; i++) {
      byteArray[i] = parseInt(hexString.substr(i * 2, 2), 16);
    }
    return byteArray;
}
  
// Example usage:
const hex = "4b726973686e61";
const byteArrayFromHex = hexToArray(hex);
console.log(byteArrayFromHex); // Output: Uint8Array([75, 114, 105, 115, 104, 110, 97]);
