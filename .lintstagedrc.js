
// 
module.exports = {
  "*.{js,jsx,ts,md,json}": [
    // prettier 风格美化
    "prettier --write",
    "echo 'prettier 格式化'",
  ],
  "*.{js,jsx,tsx,ts}": [
    // eslint 修复
    "eslint --fix",
    "echo 'eslint 修复'",
  ],
}