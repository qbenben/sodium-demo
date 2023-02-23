const sodium = require('libsodium-wrappers');

// 加密的 base64 消息
const encryptedMessageBase64 = 'ZLN5Cu09JSUW1X7dG4qnvpGWlpnW9RMJedMNmT0D0DjqxL6rZAx3jcTAnwqdDq+X0EQzCEOzFoIuew=='

// 公钥和私钥的 base64 字符串
const publicKeyBase64 = 'b7KAEVtR5MvuV5dJilUJigeZOvSI0VNUefFPDjVvLhs='
const privateKeyBase64 = 'I25HCqHxo/ND9c2O0mIJIZgGq+SqbyVnYHqKwDgZQSc='

// 解码 base64 字符串为二进制数据
const publicKey = Uint8Array.from(atob(publicKeyBase64), c => c.charCodeAt(0));
const privateKey = Uint8Array.from(atob(privateKeyBase64), c => c.charCodeAt(0));
const encryptedMessage = Uint8Array.from(atob(encryptedMessageBase64), c => c.charCodeAt(0));

(async () => {
  await sodium.ready;
  // 使用 crypto_box_seal_open 函数对加密消息进行解密
  const decryptedMessage = sodium.crypto_box_seal_open(encryptedMessage, publicKey, privateKey, 'text');
  console.log(decryptedMessage);
})();
