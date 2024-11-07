# libsodium 小型demo

> 使用 crypto_box_seal https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes

```sh
# demo 生成公钥和私钥
node generate.js
# demo 利用公钥加密值
node decrypt.js
# demo 利用公钥 私钥 以及 加密值解密值
node encrypt.js
```