
// 
module.exports = {
  "*.{js,jsx,ts,md,json}": [
    "prettier --write",
  ],
  "*.{js,jsx,tsx,ts}": [
    "eslint --fix",
  ],
}