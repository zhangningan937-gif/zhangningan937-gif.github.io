# 宁安的博客

基于 [Retypeset](https://github.com/radishzzz/astro-theme-retypeset)（MIT，Astro 主题）的个人博客，只改了站名、作者、导航与文章，版式保持主题原样。

- 线上地址：<https://zhangningan937-gif.github.io/>
- 仓库：`zhangningan937-gif.github.io`（`main` = 构建产物，`source` = 源码）

## 写文章

在 `src/content/posts/` 新建 `.md`，文件名就是网址：

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

- `src/config.ts`：站名「宁安」、副标题、作者、URL、语言（仅 zh）、关闭评论/统计、页脚链接
- `src/content/about/about-zh.md`：关于页
- `src/pages/og/[...image].ts`：OG 字体改用系统 Noto Sans SC（`.og-fonts/`，不进仓库）

主题文档见仓库 `README.md` 或 <https://retypeset.radishzz.cc/>。
