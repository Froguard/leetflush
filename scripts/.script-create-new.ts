/**
 * 创建新的 src/item
 * 应用于 npm run create/new 指令中（package.json文件的scripts）
 */
import path from 'path';
import Colors from 'color-cc';
import minimist from 'minimist';
import { writeFileSync, existsSync, mkdirSync } from 'fs';

const ROOT_PATH = path.join(__dirname, '../');
const NOW = getNowTime();

interface CurArgv {
  _: (string | number)[];
  // others
  [k: string]: any;
}
const argv = minimist(process.argv.slice(2)) as CurArgv;
const { _: names } = argv || {};
// console.log(argv);
const newItemName = (names?.length ? names[0] : '') || NOW;
console.log({ newItemName });

/**
 * main
 */
(async () => {
  //
  if (newItemName) {
    // create files
    const newFilePathRel = `./src/${newItemName}.ts`;
    const newFilePath = path.join(ROOT_PATH, newFilePathRel);
    if (existsSync(newFilePath)) {
      console.log(Colors.warning(`The target file is existed!`), Colors.magenta(newFilePath));
      // process.exit(-1);
    } else {
      const dirPath = path.dirname(newFilePath);
      if (!existsSync(dirPath)) {
        mkdirSync(dirPath);
      }
      const content = ['//  \n', '/*', ' ', ' ', '*/\n', `// 调试命令: ts-node ${newFilePathRel}\n`].join('\n');
      writeFileSync(newFilePath, content, { encoding: 'utf-8' });
      console.log(Colors.success(`Create file success! ${Colors.green(newFilePathRel)}`));
    }
    console.log('\n');
    //
  } else {
    console.error(Colors.error('请输入要创建的item名称，如 npm run create hellworld'));
    process.exit(-1);
  }
  //
})();

function getNowTime() {
  const now = new Date();
  return [
    [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-'),
    [now.getHours(), now.getMinutes(), now.getSeconds()].join('-'),
    now.getMilliseconds(),
  ].join('_');
}
