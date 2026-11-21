# 宁安的博客

基于 [Retypeset](https://github.com/radishzzz/astro-theme-retypeset)（MIT，Astro 主题）的个人博客，只改了站名、作者、导航与文章，版式保持主题原样。

- 线上地址：<https://zhangningan937-gif.github.io/>
- 仓库：`zhangningan937-gif.github.io`（`main` = 构建产物，`source` = 源码）

## 写文章

两种方式，任选：

1. **在线写**（推荐）：打开 <https://zhangningan937-gif.github.io/write/>，第一次先填 GitHub 令牌（只存在本机浏览器），然后像发论坛帖一样写标题、正文、标签，点「发布」。提交后 GitHub Actions 自动构建，1–2 分钟线上生效。个签也在这一页改。
2. **本地写**：在 `src/content/posts/` 新建 `.md`，然后双击 `deploy.bat`。

`.md` 格式：

```markdown
---
title: 标题
published: 2026-11-20
description: 一句话摘要
tags: [标签]
---

正文。
```

`draft: true` 不发布；`pin: 1` 置顶。

## 预览 / 发布

- 双击 `serve.bat`：构建 + 本地预览（http://localhost:4321）
- 双击 `deploy.bat`：构建 + 推送到 GitHub Pages

> 本机 Node 为便携版（`D:\riftt\node-full\node-v24.21.0-win-x64`），pnpm 装在 `.tools/`，
> 用上面两个 bat 即可，无需全局环境。

## 改了哪些配置

- `src/config.ts`：站名「宁安」、副标题（读 `src/data/site.json` 的个签）、作者、URL、语言（仅 zh）、关闭评论/统计、页脚链接
- `src/data/site.json`：个签，可在 `/write/` 页面修改
- `src/pages/write.astro`：在线写作页（论坛式编辑器，浏览器直接提交到 `source` 分支）
- `.github/workflows/deploy.yml`：推到 `source` 后自动构建并发布到 `main`
- `src/pages/og/`：已移除，OG 图改用 `public/icons/og.png`

主题文档见仓库 `README.md` 或 <https://retypeset.radishzz.cc/>。
