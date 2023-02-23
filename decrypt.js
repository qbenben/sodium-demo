const sodium = require('libsodium-wrappers');

// 加密的 base64 消息
const encryptedMessageBase64 = 'ZLN5Cu09JSUW1X7dG4qnvpGWlpnW9RMJedMNmT0D0DjqxL6rZAx3jcTAnwqdDq+X0EQzCEOzFoIuew=='

// 公钥和私钥的 base64 字符串
const publicKeyBase64 = 'b7KAEVtR5MvuV5dJilUJigeZOvSI0VNUefFPDjVvLhs='
const privateKeyBase64 = 'I25HCqHxo/ND9c2O0mIJIZgGq+SqbyVnYHqKwDgZQSc='

sodium.ready.then(() => {
  // 解码 base64 字符串为二进制数据
  // same => const publicKey = Uint8Array.from(atob(publicKeyBase64), c => c.charCodeAt(0))
  const publicKey = sodium.from_base64(publicKeyBase64, sodium.base64_variants.ORIGINAL)
  const privateKey = sodium.from_base64(privateKeyBase64, sodium.base64_variants.ORIGINAL)
  const encryptedMessage = sodium.from_base64(encryptedMessageBase64, sodium.base64_variants.ORIGINAL)

  const decryptedMessage = sodium.crypto_box_seal_open(encryptedMessage, publicKey, privateKey);
  console.log(sodium.to_string(decryptedMessage));
});
