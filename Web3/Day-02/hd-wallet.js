import nacl from "tweetnacl";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";

const mnemonic = generateMnemonic();
// const mnemonic = "essay work climb topic finger under torch apart barely tackle stage vacuum";

const seed = mnemonicToSeedSync(mnemonic);

for (let i=0; i<4; i++) {
    const path = `m/44'/501'/${i}'/0'`; // This is the derivation path
    const derivedSeed = derivePath(path, seed.toString("hex")).key;
    
    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    
    console.log(Keypair.fromSecretKey(secret).publicKey.toBase58());
}

// 5noBuT1dYQv9Ki9CGThEWzy7XdDgQ8JjW6644MGZoNWh
// ADuyaC55gNd6c9LqPhyu8NJHDFMkKFiT2ddvkPH5RHRW
// H3Apjz4wBz6VZeybc5Dv5fVvUo2LVthGiHMg4H44Y9YW
