const { createHash } = require("node:crypto");

function hashString(input) {
  const hash = createHash("sha256");
  hash.update(input);
  return hash.digest("hex");
}

console.log(hashString("userPassword"));
// c7f7278ad455e70505cf6eec61ae5d5154edde78330a7614d63e048d179050f4