const sodium = require('libsodium-wrappers')

//Check if libsodium is ready and then proceed.
sodium.ready.then(() => {
  const { publicKey, privateKey } = sodium.crypto_box_keypair();
  console.log(
    {
      publicKey: sodium.to_base64(publicKey, sodium.base64_variants.ORIGINAL),
      privateKey: sodium.to_base64(privateKey, sodium.base64_variants.ORIGINAL),
    }
  );
});

/**
 * 
 *  {
 *   publicKey: 'b7KAEVtR5MvuV5dJilUJigeZOvSI0VNUefFPDjVvLhs=',
 *   privateKey: 'I25HCqHxo/ND9c2O0mIJIZgGq+SqbyVnYHqKwDgZQSc='
 *  }
 * 
 */
