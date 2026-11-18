---
title: 用 Fuwari 在 GitHub Pages 上搭博客：几个容易卡住的地方
published: 2026-11-17
description: "Astro + Fuwari + GitHub Pages，从选型到上线，把这次真正卡住的步骤记下来。"
tags: ["Astro", "GitHub Pages", "博客"]
category: 折腾
draft: false
---

选 Fuwari 的理由很直接：它是 Astro 模板，构建出来是纯静态文件；默认几乎不发 JavaScript，打开快；中文排版、暗色模式、搜索、目录、RSS 都是现成的。对一个只打算写字的博客来说，这些够了。

真正花时间的不是写页面，是下面这几个地方。

## 一、它只认 pnpm

Fuwari 的 `package.json` 里有一行：

```json
"preinstall": "npx only-allow pnpm"
```

意思是只要你用 `npm install`，安装会在第一步直接失败。这不是报错，是作者故意的。要么装 pnpm，要么把这一行删掉。我装了 pnpm，顺便把源换成国内镜像，一分钟装完。

## 二、`site` 和 `base` 不是一回事

- `site` 决定 RSS、sitemap 里的绝对地址。
- `base` 决定资源路径前面加不加子目录。

部署在 `https://用户名.github.io/` 这种根仓库时，`base` 保持 `/`。如果是 `https://用户名.github.io/blog/` 这种项目页，就得把 `base` 改成 `/blog`，否则 CSS 和图片会全部 404——页面能打开，但样式全丢，很容易以为是构建坏了。

`site` 则一定要写成最终网址，不然订阅链接会指向模板作者的域名。

## 三、构建产物和源码要分开

`pnpm build` 会先跑 `astro build`，再用 Pagefind 给 `dist` 生成搜索索引。搜索结果只有在构建之后才存在，开发模式下搜不到东西是正常的。

发布时把 `dist` 的内容推到 `gh-pages` 分支，Pages 的来源选这个分支；源码留在 `main`。不要反过来把 `dist` 和 `node_modules` 一起提交，仓库会变得又大又难回滚。

## 四、写完先本地看一眼

```bash
pnpm dev      # 改样式、写文章时用
pnpm build    # 上线前必须跑一遍
pnpm preview  # 看构建后的真实效果
```

`dev` 和 `build` 的差异比想象中大：路由、图片优化、搜索索引都只在构建时生成。我现在固定流程是 `build` 加 `preview`，确认没问题再推。

整套东西没有后端，也没有数据库。代价是评论、点赞这类功能得另外接（比如 Giscus），好处是它很难坏。
