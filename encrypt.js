const sodium = require('libsodium-wrappers')
const secret = 'Hello Word' // replace with the secret you want to encrypt
const key = 'b7KAEVtR5MvuV5dJilUJigeZOvSI0VNUefFPDjVvLhs=' // replace with the Base64 encoded public key

//Check if libsodium is ready and then proceed.
sodium.ready.then(() => {
  // Convert Secret & Base64 key to Uint8Array.
  const binkey = sodium.from_base64(key, sodium.base64_variants.ORIGINAL)
  const binsec = sodium.from_string(secret)

  //Encrypt the secret using LibSodium
  const encBytes = sodium.crypto_box_seal(binsec, binkey)

  // Convert encrypted Uint8Array to Base64
  const output = sodium.to_base64(encBytes, sodium.base64_variants.ORIGINAL)

  console.log(output)
});