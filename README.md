# 宁安的博客

基于 [Fuwari](https://github.com/saicaca/fuwari)（[Astro](https://astro.build/)）的个人博客：克莱因蓝 + 毛玻璃（glassmorphism）配色，极光渐变背景 + 漂浮微粒，托管在 GitHub Pages。

- 线上地址：<https://zhangningan937-gif.github.io/>
- 仓库：`zhangningan937-gif.github.io`（`main` 分支是源码，`gh-pages` 分支是构建产物）

## 平时怎么写文章

1. 在 `src/content/posts/` 下新建一个 `.md` 文件（文件名就是网址，建议英文小写）：

   ```markdown
   ---
   title: 文章标题
   published: 2026-11-18
   description: "摘要，会显示在列表卡片上。"
   tags: ["标签1", "标签2"]
   category: 学习
   draft: false
   ---

   正文从这里开始，支持 Markdown、公式（$...$）、代码块、提示框（> [!NOTE]）。
   ```

   `category` 目前用的是：**学习 / 折腾 / 随笔**。`draft: true` 的文章不会发布。

2. 本地预览：双击 `serve.bat`（先构建再用真实产物预览），打开 <http://localhost:4322/>。
3. 发布：双击 `deploy.bat`（需要 `D:\study-buddy\gh-token.txt` 里有 GitHub 令牌）。

## 目录里有什么

| 位置 | 作用 |
|---|---|
| `src/content/posts/` | 文章（Markdown） |
| `src/content/spec/about.md` | 「关于」页面 |
| `src/config.ts` | 站点名、副标题、导航栏、个人资料、主题色 |
| `src/styles/variables.styl` | 全部颜色变量（克莱因蓝在这里改） |
| `src/styles/main.css` | 组件样式 + 文章排版样式 |
| `src/assets/images/` | 头像、横幅 |
| `scripts/`、`.tools/` | 构建辅助脚本，与内容无关 |

## 命令速查

```bash
pnpm build      # 构建到 dist/（发布前必跑）
pnpm preview    # 预览构建结果
pnpm dev        # 开发模式（改样式用，搜索等功能不完整）
```

> 本机的 Node 是便携版（`D:\riftt\node-full\node-v24.21.0-win-x64`），pnpm 装在 `.tools/` 里，
> 所以直接用 `serve.bat` / `deploy.bat` 最省事，不要全局装环境。

## 改过 Fuwari 的哪些地方

- 配色换成克莱因蓝（#002FA7）+ 毛玻璃：全站卡片半透明 + `backdrop-filter` 毛玻璃、html 上叠加缓慢流动的极光渐变（`page-aurora`）、纯 CSS 漂浮微粒（`AuroraParticles.astro`，亮色微尘 / 暗色萤火），主题色选择器已关闭
- 横幅（banner）已停用，改为整页极光背景；头像 / favicon 是脚本生成的（`.tools/make-*.mjs`），想换图直接替换 `src/assets/images/` 里的文件
- 标题类文字改用衬线（Noto Serif SC / 思源宋体栈），正文保持无衬线
- `markdown.css` 合并进了 `main.css`：Tailwind 的 `@apply` 跨文件引用在 Windows 上构建会随机失败
- 导航栏改为全圆角玻璃药丸、头像加了蓝色渐变描边、文章卡片悬停微放大

## 许可

Fuwari 采用 MIT 许可（见 `LICENSE`），保留原作者版权声明。文章内容如无特别说明，采用 CC BY-NC-SA 4.0。
