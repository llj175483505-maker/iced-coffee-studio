/* 在这里替换真实作品资料。链接留空时不会显示“打开作品”。
   示例替换后将 sample 改为 false；cover 使用 assets/ 中的图片路径。 */
window.PORTFOLIO = {
  name: '冰咖啡工作室',
  about: '围绕游戏与软件，把想法一步步变成作品。这个空间记录项目、创作实验，以及从灵感到实现的过程。',
  email: '',
  projects: [
    { id: 'ice-signal', title: '冰原信号', category: 'GAME CONCEPT / 游戏', summary: '原创概念封面与游戏项目介绍的展示样例。', description: '这是一张游戏项目展示卡片的样例，用来预览封面、标题和项目详情的排版。封面是 AI 生成的原创概念图，不是已发布游戏的截图。\n\n你可以将这里替换为游戏玩法、开发过程、本人负责的部分，以及体验链接。', sample: true, cover: 'ice-gate-concept.png', url: '' },
    { id: 'flow', title: 'Flow 工作台', category: 'APPLICATION / 软件', summary: '软件界面与功能亮点的展示样例。', description: '这是软件项目展示卡片的样例，封面为静态界面示意。\n\n真实项目可以介绍解决的问题、主要功能和你的贡献，并附上在线演示或源码链接。', sample: true, cover: '', url: '' },
    { id: 'interaction', title: '光标之间', category: 'EXPERIMENT / 实验', summary: '交互探索与开发过程的展示样例。', description: '这是创作实验展示卡片的样例。封面代码为视觉示意，不代表已发布的软件。\n\n这里适合记录小型原型、交互练习或开发中的探索，并说明实验目标和结果。', sample: true, cover: '', url: '' }
  ]
};
