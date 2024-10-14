/**
 * frogagu 配置文件 .frogagurc.ts
 */
import type { FrogaguRcConfig } from 'frogagu/com-types';

const config: FrogaguRcConfig = {
  gitconfig: {
    globalUserWhiteList: [],
    localUserWhiteList: [
      { name: 'froguard', email: 'figure_wf@163.com' },
      { name: 'froguard-win', email: 'figure_wf@163.com' },
      { name: 'froguard-mac', email: 'figure_wf@163.com' },
      { name: 'voljin', email: 'figure_wf@163.com' },
      { name: 'voljin-win', email: 'figure_wf@163.com' },
      { name: 'voljin-mac', email: 'figure_wf@163.com' },
      { name: 'pumeow', email: 'figure_wf@163.com' },
      { name: 'pumeow-win', email: 'figure_wf@163.com' },
      { name: 'pumeow-mac', email: 'figure_wf@163.com' },
    ],
  },
};

export default config;
