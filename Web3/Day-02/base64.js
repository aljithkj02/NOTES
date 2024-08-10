const uint8Array = new Uint8Array([75, 114, 105, 115, 104, 110, 97]);
const base64Encoded = Buffer.from(uint8Array).toString("base64");

console.log(base64Encoded); // S3Jpc2huYQ==

console.log(atob(base64Encoded)) // Krishna
