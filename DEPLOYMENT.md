# 部署指南

## 🚀 部署到 GitHub Pages

### 第一步：创建 GitHub 仓库

1. 登录到您的 GitHub 账户 (misstruth)
2. 创建一个新的仓库，命名为 `misstruth.github.io`
   - ⚠️ **重要**: 仓库名必须是 `misstruth.github.io` 才能使用 GitHub Pages 的默认域名
3. 不要初始化 README、.gitignore 或 LICENSE（因为我们已经有了）

### 第二步：推送代码到 GitHub

在终端中运行以下命令：

```bash
# 添加远程仓库
git remote add origin https://github.com/misstruth/misstruth.github.io.git

# 推送代码到 GitHub
git push -u origin main
```

### 第三步：启用 GitHub Pages

1. 进入您的 GitHub 仓库页面
2. 点击 "Settings" 选项卡
3. 在左侧菜单中找到 "Pages"
4. 在 "Source" 部分选择 "GitHub Actions"
5. 保存设置

### 第四步：等待部署完成

- 推送代码后，GitHub Actions 会自动开始构建和部署
- 您可以在 "Actions" 选项卡中查看部署进度
- 首次部署可能需要几分钟时间

### 第五步：访问您的网站

部署完成后，您的博客将在以下地址可用：
- **GitHub Pages 地址**: https://misstruth.github.io

## 🌐 自定义域名设置

### 购买域名后的配置步骤：

1. **更新 Hugo 配置**
   ```toml
   # 在 hugo.toml 中更新 baseURL
   baseURL = 'https://yourdomain.com/'
   ```

2. **添加 CNAME 文件**
   ```bash
   # 在 static 目录下创建 CNAME 文件
   echo "yourdomain.com" > static/CNAME
   ```

3. **配置 DNS 记录**
   
   在您的域名提供商处添加以下 DNS 记录：
   
   **方法一：使用 A 记录（推荐）**
   ```
   类型: A
   名称: @
   值: 185.199.108.153
   
   类型: A
   名称: @
   值: 185.199.109.153
   
   类型: A
   名称: @
   值: 185.199.110.153
   
   类型: A
   名称: @
   值: 185.199.111.153
   ```
   
   **方法二：使用 CNAME 记录**
   ```
   类型: CNAME
   名称: www
   值: misstruth.github.io
   ```

4. **在 GitHub 设置自定义域名**
   - 进入仓库的 Settings > Pages
   - 在 "Custom domain" 中输入您的域名
   - 勾选 "Enforce HTTPS"

5. **提交更改**
   ```bash
   git add .
   git commit -m "添加自定义域名配置"
   git push
   ```

## 📝 日常使用

### 发布新文章

1. **创建新文章**
   ```bash
   hugo new blog/your-article-title.md
   ```

2. **编辑文章内容**
   - 编辑生成的 Markdown 文件
   - 设置 `draft = false` 来发布文章

3. **提交并推送**
   ```bash
   git add .
   git commit -m "发布新文章: 文章标题"
   git push
   ```

4. **自动部署**
   - GitHub Actions 会自动构建和部署
   - 几分钟后新文章就会在网站上显示

### 本地预览

```bash
# 启动本地开发服务器
hugo server -D

# 访问 http://localhost:1313 预览
```

## 🔧 故障排除

### 常见问题

1. **部署失败**
   - 检查 GitHub Actions 日志
   - 确保 hugo.toml 配置正确
   - 确保主题子模块正确加载

2. **自定义域名不工作**
   - 检查 DNS 记录是否正确配置
   - 等待 DNS 传播（可能需要 24-48 小时）
   - 确保 CNAME 文件存在且内容正确

3. **样式丢失**
   - 检查 baseURL 配置是否正确
   - 确保静态文件路径正确

## 📞 获取帮助

如果遇到问题，可以：
- 查看 [Hugo 官方文档](https://gohugo.io/documentation/)
- 查看 [GitHub Pages 文档](https://docs.github.com/en/pages)
- 在 GitHub 仓库中创建 Issue
