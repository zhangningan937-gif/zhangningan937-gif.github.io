---
title: Fuwari 在 GitHub Pages 上的四个坑
published: 2026-11-17
description: pnpm 锁、base 路径、产物分仓、.nojekyll。
tags: [Astro, GitHub Pages]
---

## 1. 只认 pnpm

`package.json` 里写着 `"preinstall": "npx only-allow pnpm"`，用 `npm install` 会在第一步直接失败。装 pnpm，或者删掉这行。

## 2. `site` 和 `base` 不是一回事

- `site`：写最终网址，决定 RSS / sitemap 里的绝对地址。
- `base`：根仓库（`用户名.github.io`）保持 `/`；项目页（`/blog/`）要改成 `/blog/`，否则 CSS 全 404。

## 3. 构建产物和源码分开放

产物推 `main`（根仓库的 Pages 只认它），源码推 `source`。`node_modules` 和 `dist` 都不要进源码分支。

## 4. `.nojekyll`

Astro 的产物全在 `dist/_astro/`。Jekyll 会忽略下划线开头的目录，于是页面 200、样式脚本全 404。在 `public/` 放一个空的 `.nojekyll`，Astro 会原样拷进 `dist`。
