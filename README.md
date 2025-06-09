# PiDan的个人博客

一个基于 Hugo 和 Ladder 主题构建的个人博客网站。

## 🌟 特性

- 📝 支持 Markdown 写作
- 🎨 简洁美观的设计
- 📱 响应式布局，支持移动设备
- 🌙 深色模式支持
- 🏷️ 标签和分类系统
- 📊 文章归档功能
- 🔍 搜索功能
- ⚡ 快速加载

## 🚀 技术栈

- **静态网站生成器**: [Hugo](https://gohugo.io/)
- **主题**: [Hugo Theme Ladder](https://github.com/guangzhengli/hugo-theme-ladder)
- **部署**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📁 项目结构

```
.
├── .github/workflows/    # GitHub Actions 工作流
├── archetypes/          # 内容模板
├── assets/              # 资源文件 (SCSS, JS)
├── content/             # 博客内容
│   ├── blog/           # 博客文章
│   ├── about.md        # 关于页面
│   └── archives.md     # 归档页面
├── layouts/             # 自定义布局模板
├── static/              # 静态文件 (图片, CSS, JS)
├── themes/              # Hugo 主题
├── hugo.toml           # Hugo 配置文件
└── README.md           # 项目说明
```

## 🛠️ 本地开发

### 前置要求

- [Hugo Extended](https://gohugo.io/installation/) (v0.147.8+)
- [Git](https://git-scm.com/)

### 安装和运行

1. 克隆仓库
```bash
git clone https://github.com/misstruth/misstruth.github.io.git
cd misstruth.github.io
```

2. 初始化主题子模块
```bash
git submodule update --init --recursive
```

3. 启动开发服务器
```bash
hugo server -D
```

4. 在浏览器中访问 `http://localhost:1313`

### 创建新文章

```bash
hugo new blog/your-post-title.md
```

## 📝 写作指南

### Front Matter 示例

```yaml
+++
title = "文章标题"
date = "2025-06-09T18:30:00+08:00"
draft = false
tags = ["标签1", "标签2"]
categories = ["分类"]
+++
```

### 图片使用

将图片放在 `static/images/` 目录下，然后在文章中使用：

```markdown
![图片描述](/images/your-image.jpg)
```

## 🚀 部署

本项目使用 GitHub Actions 自动部署到 GitHub Pages。当代码推送到 `main` 分支时，会自动触发构建和部署流程。

### 手动部署

如果需要手动部署：

```bash
hugo --minify
```

生成的文件将在 `public/` 目录中。

## 🔧 配置

主要配置在 `hugo.toml` 文件中：

- `baseURL`: 网站的基础 URL
- `title`: 网站标题
- `params.author`: 作者名称
- `params.avatarURL`: 头像路径
- `params.info`: 网站描述

## 📄 许可证

本项目基于 MIT 许可证开源。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系方式

- GitHub: [@misstruth](https://github.com/misstruth)
- 博客: [https://unpidan.top](https://unpidan.top)

---

⭐ 如果这个项目对你有帮助，请给它一个星标！
