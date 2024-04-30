/**
 * 请将本脚本配置到 package.json 中的 scripts.prepublishOnly 中去
 * "scripts": {
 *   "prepublishOnly": "node ./.pre-npm-publish.js"
 * }
 *
 * 如果配置成 "prepublish" 则会导致在执行 npm install 的时候触发如下的错误提示：
 *
 * npm WARN prepublish-on-install As of npm@5, `prepublish` scripts are deprecated.
 * npm WARN prepublish-on-install Use `prepare` for build steps and `prepublishOnly` for upload-only.
 * npm WARN prepublish-on-install See the deprecation note in `npm help scripts` for more information.
 */
const { npm_package_name, npm_package_version } = process.env || {};

// eslint-disable-next-line
console.error(`[error] 不允许将 package( ${npm_package_name}@${npm_package_version} ) 发布到npm仓库！！！`);

process.exit(-1); // 非0即可组织接下来的命令进行
