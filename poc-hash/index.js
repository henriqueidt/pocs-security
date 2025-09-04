const { createHash, createHmac } = require("node:crypto");

/**
 * Hash a string using SHA-256.
 */
function hashString(input) {
  const hash = createHash("sha256");
  hash.update(input);
  return hash.digest("hex");
}

/**
 * Create an HMAC using SHA-256.
 */
function hmacString(input) {
  const SECRET_KEY = "some-secret-key"
  const hmac = createHmac("sha256", SECRET_KEY);
  hmac.update(input);
  return hmac.digest("hex");
}

console.log(hashString("userPassword"));
// c7f7278ad455e70505cf6eec61ae5d5154edde78330a7614d63e048d179050f4

console.log(hmacString("userPassword"));
// a0d24fc647bec3d6ab24df85300d837b342151198886e84d026f73c96d0e4732