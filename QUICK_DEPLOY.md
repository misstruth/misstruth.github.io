# 🚀 快速部署指南

## 第一步：推送代码到 GitHub

### 方法一：使用 GitHub CLI（推荐）
```bash
# 如果还没有安装 GitHub CLI
brew install gh

# 登录 GitHub
gh auth login

# 创建仓库并推送
gh repo create misstruth.github.io --public --push --source=.
```

### 方法二：手动推送
```bash
# 如果遇到身份验证问题，请先在 GitHub 创建仓库
# 1. 访问 https://github.com/new
# 2. 仓库名: misstruth.github.io
# 3. 设为 Public
# 4. 不要初始化任何文件

# 然后推送代码
git push -u origin main
```

## 第二步：配置 DNS 记录

在您的域名管理后台（腾讯云/DNSPod）添加：

### A 记录（必须）
```
类型: A, 主机: @, 值: 185.199.108.153
类型: A, 主机: @, 值: 185.199.109.153  
类型: A, 主机: @, 值: 185.199.110.153
类型: A, 主机: @, 值: 185.199.111.153
```

### CNAME 记录（可选）
```
类型: CNAME, 主机: www, 值: unpidan.top
```

## 第三步：GitHub Pages 设置

1. 访问 https://github.com/misstruth/misstruth.github.io/settings/pages
2. Source: 选择 "GitHub Actions"
3. Custom domain: 输入 `unpidan.top`
4. 勾选 "Enforce HTTPS"
5. 保存设置

## 第四步：等待生效

- DNS 传播：10分钟 - 24小时
- GitHub Pages 部署：几分钟
- SSL 证书：自动生成

## 🔍 检查状态

### 检查 DNS
```bash
dig unpidan.top
```

### 检查网站
- https://unpidan.top
- https://www.unpidan.top

### 检查 GitHub Actions
- https://github.com/misstruth/misstruth.github.io/actions

## ⚡ 如果遇到问题

1. **推送失败**: 检查 GitHub 身份验证
2. **DNS 不生效**: 等待传播或联系域名商
3. **404 错误**: 检查 GitHub Actions 是否成功
4. **SSL 错误**: 等待 GitHub 生成证书

完成这些步骤后，您的博客就能通过 https://unpidan.top 访问了！
