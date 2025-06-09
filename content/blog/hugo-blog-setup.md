+++
title = "使用Hugo搭建个人博客的完整指南"
date = "2025-06-09T17:00:00+08:00"
draft = false
tags = ["Hugo", "博客", "教程", "静态网站"]
categories = ["技术"]
+++

在这篇文章中，我将分享如何使用Hugo快速搭建一个美观且功能完整的个人博客。

## 什么是Hugo？

Hugo是一个用Go语言编写的静态网站生成器，具有以下优点：

- **极快的构建速度** - 几秒钟内生成整个网站
- **零依赖** - 单个二进制文件，无需安装其他依赖
- **丰富的主题** - 数百个免费主题可供选择
- **强大的功能** - 支持多语言、分类、标签等
- **易于部署** - 可部署到GitHub Pages、Netlify等平台

## 安装Hugo

### macOS
```bash
brew install hugo
```

### Windows
```bash
choco install hugo-extended
```

### Linux
```bash
sudo apt-get install hugo
```

## 创建新站点

```bash
# 创建新站点
hugo new site my-blog

# 进入站点目录
cd my-blog

# 初始化Git仓库
git init
```

## 选择主题

我推荐使用Ladder主题，它简洁美观且功能丰富：

```bash
# 添加主题作为子模块
git submodule add https://github.com/guangzhengli/hugo-theme-ladder.git themes/hugo-theme-ladder

# 在配置文件中指定主题
echo 'theme = "hugo-theme-ladder"' >> config.toml
```

## 基础配置

编辑 `config.toml` 文件：

```toml
baseURL = 'https://yourdomain.com'
languageCode = 'zh'
title = '我的博客'
theme = 'hugo-theme-ladder'

[params]
  brand = "首页"
  avatarURL = "/images/avatar.png"
  author = "你的名字"
  authorDescription = "简短的自我介绍"
  info = "博客简介"

  [params.options]
    showDarkMode = true
    enableImgZooming = true
```

## 创建第一篇文章

```bash
hugo new blog/my-first-post.md
```

编辑生成的文件，添加内容：

```markdown
+++
title = "我的第一篇文章"
date = "2025-01-19"
draft = false
tags = ["开始"]
+++

这是我的第一篇博客文章！
```

## 本地预览

```bash
hugo server -D
```

访问 `http://localhost:1313` 查看效果。

## 部署到GitHub Pages

1. 在GitHub创建仓库 `username.github.io`
2. 推送代码到仓库
3. 在仓库设置中启用GitHub Pages
4. 选择GitHub Actions作为构建源

创建 `.github/workflows/hugo.yml`：

```yaml
name: Deploy Hugo site to Pages

on:
  push:
    branches: ["main"]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          submodules: recursive

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: 'latest'
          extended: true

      - name: Build
        run: hugo --minify

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
```

## 总结

Hugo是一个强大且易用的静态网站生成器，非常适合搭建个人博客。通过简单的配置和主题选择，你就能拥有一个专业的博客网站。

下一篇文章我将分享如何进一步自定义Hugo主题和添加更多功能。

---

*希望这篇教程对你有帮助！如果有任何问题，欢迎在评论区留言。*
