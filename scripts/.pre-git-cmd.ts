'use strict';
/**
 * 通过 husky 去写入到工程 .git/hooks/pre-commit,pre-push 两个钩子文件中，从而起到拦截 git commit|push 两个指令
 * husky 调用本文件执行，然后在这里进行判断是否能够提交到 git remote
 * 本文件依赖：
 *   npm install -D fs-extra @types/fs-extra ini @types/fs-extra color-cc husky
 */
import os from 'os';
import fs from 'fs';
import path from 'path';
import ini from 'ini';
import { homedir } from 'os';
import Colors from 'color-cc';

const CWD = process.cwd();
const HMD = homedir();
const { USER, HOME, PWD, GIT_CMD } = process.env || {};
const shouldPrintLog = GIT_CMD === 'git push';

// main
(async () => {
  // print log if cmd is 'git push'
  if (shouldPrintLog) {
    const GLOBAL_GIT_CONFIG_PATH = getGitConfigFilePath('global');
    const LOCAL_GIT_CONFIG_PATH = getGitConfigFilePath('local');
    const paths = deleteObjNillProps({ PWD, CWD, HMD, HOME });
    const userInfo = deleteObjNillProps({ USER });
    const gitInfo = deleteObjNillProps({ GLOBAL_GIT_CONFIG_PATH, LOCAL_GIT_CONFIG_PATH, GIT_CMD });
    const logObj = { paths, userInfo, gitInfo };
    console.log(`\n> ${Colors.yellow('ENVS')}: `, logObj);
  }

  // read git config
  const gitConfLocal = getGitConfig('local') || {};
  // branchKey 格式为 'branch "main"'
  const branchKey = Object.keys(gitConfLocal).filter(key => key?.startsWith('branch'))[0];
  const repostory = {
    type: 'git',
    branch: branchKey?.slice(8, -1) || 'main',
    url: gitConfLocal['remote "origin"']?.url,
  };
  const gitConfGlobal = getGitConfig('global') || {};
  const { user } = gitConfGlobal || {};
  const { name, email } = user || {};
  shouldPrintLog && console.log(`> ${Colors.yellow('RepoInfo')}: `, { repostory, name, email });

  //
  const isGitGlobalForbidden = isInCompanyGit(gitConfGlobal);
  if (isGitGlobalForbidden) {
    const msg = [
      Colors.red(`❌ 公司电脑环境下，不允许提交外网 Github 工程：不允许执行 git 指令 ！！！`), // 不允许
      `  💀💀💀💀💀💀💀💀💀`,
      `  ${Colors.red(CWD)}，指令被中断，即将退出...`,
    ];
    console.log(`\n${msg.join('\n')}\n\n`);
    process.exit(-1);
  } else {
    const msg = [
      Colors.success(`允许执行 git 指令 ${Colors.magenta(GIT_CMD)} ^_^`), // 允许
      `  ${Colors.green(CWD)}`,
    ];
    console.log(`\n${msg.join('\n')}\n\n`);
  }
  //
})();

// ======================================== defs ================================================
/**
 * 格式化obj，删除属性为 null 或 undefined 的子属性。返回其本身
 * @param {object} obj
 * @returns {object} obj itself
 */
function deleteObjNillProps(obj: Record<string, any>) {
  if (obj && typeof obj === 'object') {
    for (const [k, v] of Object.entries(obj)) {
      if (v === null || v === undefined) {
        delete obj[k];
      }
    }
  }
  return obj;
}

// git config 类型，全局的和局部的
type GitConfigType = 'local' | 'global';

/**
 * git config 配置文件信息
 */
interface GitConfig {
  // user info
  user?: {
    name?: string | null;
    email?: string | null;
  } | null;
  // core info
  core?: {
    repositoryformatversion?: string;
    filemode?: boolean;
    bare?: boolean;
    logallrefupdates?: boolean;
    ignorecase?: boolean;
    precomposeunicode?: boolean;
    hooksPath?: string;
  };
  // remote info
  ['remote "origin"']?: {
    url: string;
    fetch: string;
  } | null;
  // branch
  'branch "main"'?: GitBranchInfo | null;
  'branch "master"'?: GitBranchInfo | null;
  'branch "develop"'?: GitBranchInfo | null;
  'branch "release"'?: GitBranchInfo | null;
  // others
  [k: string]: any;
}

// git config 信息对象
interface GitBranchInfo {
  remote: string;
  merge: string;
}

/**
 * 获取 git config 文件的地址
 * @param {string} type global | local, 默认不写是 local
 * @returns {string} configFilePath
 * 当不存在的时候，返回的是 null
 */
function getGitConfigFilePath(type: GitConfigType = 'local'): string | null {
  const isGlobal = type === 'global';
  let configFilePath: string | null = null;
  if (isGlobal) {
    const HWD = os.homedir();
    configFilePath = path.join(HWD, '.gitconfig'); // global
    if (!fs.existsSync(configFilePath)) {
      configFilePath = path.join(HWD, '.config/git/config'); // fallback global
    }
  } else {
    configFilePath = path.resolve(process.cwd(), '.git/config'); // local
  }
  // check if exist
  if (!fs.existsSync(configFilePath)) {
    configFilePath = null;
  }
  return configFilePath;
}

/**
 * 解析并获取 git 配置信息
 * @param {string} type global | local, 默认不写是 local
 * @returns {GitConfig}
 */
function getGitConfig(type: GitConfigType = 'local'): GitConfig | null {
  const filePath = getGitConfigFilePath(type);
  if (filePath && fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    // eslint-disable-next-line import/no-named-as-default-member
    return ini.parse(content) as GitConfig;
  }
  return null;
}

/**
 * 检查 gitconf 中，是否是公司环境
 * @param {Partial<GitConfig>} gitConf
 * @returns {boolean}
 */
function isInCompanyGit(gitConf?: Partial<GitConfig> | null) {
  if (gitConf) {
    const { name = null, email = null } = gitConf?.user || {};
    const isNameOk = ['froguard', 'Froguard'].includes((name as string)?.toLowerCase());
    const isEmailOk = ['figure_wf@163.com'].includes(email as string);
    if (isNameOk && isEmailOk) {
      return false;
    }
    return true;
  }
  //
  return true;
}
