---
title: fork MoRealm 阅读器：三条记录
published: 2026-11-15
description: "v1.5 缺 epub-lib、作者漏交断行类、改动清单。"
tags: ["Android", "阅读器"]
category: 折腾
draft: false
---

## 停在 v1.4

main 分支构建时找不到 `epub-lib`：`settings.gradle` 有 `includeBuild("../epub-lib")`，仓库里没有这个目录。翻 tag，v1.4 是最后一个自包含的版本。开源项目的「最新」不等于「能用」，先确认能独立构建再改。

## 漏交的 ZhLayout.kt

运行时报 `ZhLayout.kt` 不存在——中文断行的核心类，作者忘了提交。自己补：贪心填行 + 行首禁则（，。！？、」不许出现在行首，把前一个字符一起挪下去）+ 行末禁则。

## 改动

- 名字「如玉」，自适应图标用 Noto Serif SC 渲染的玉字，收进 66dp 安全区
- 配色两套：纸上 / 墨境，去掉纸纹背景
- 删掉「请作者喝杯咖啡」入口
