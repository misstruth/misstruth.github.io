# unpidan.top 域名故障排除指南

## 🔍 当前状态检查

根据 DNS 查询结果，您的域名 `unpidan.top` 已购买并使用 DNSPod（腾讯云）DNS 服务，但还需要配置 DNS 记录。

## 📋 完整配置步骤

### 第一步：推送代码到 GitHub

```bash
# 1. 添加 GitHub 远程仓库
git remote add origin https://github.com/misstruth/misstruth.github.io.git

# 2. 推送代码
git push -u origin main
```

### 第二步：配置 DNS 记录

在您的域名管理后台（腾讯云/DNSPod）添加以下记录：

#### A 记录配置
```
记录类型: A
主机记录: @
记录值: 185.199.108.153
TTL: 600

记录类型: A  
主机记录: @
记录值: 185.199.109.153
TTL: 600

记录类型: A
主机记录: @
记录值: 185.199.110.153
TTL: 600

记录类型: A
主机记录: @
记录值: 185.199.111.153
TTL: 600
```

#### CNAME 记录配置
```
记录类型: CNAME
主机记录: www
记录值: unpidan.top
TTL: 600
```

### 第三步：GitHub Pages 设置

1. 访问 https://github.com/misstruth/misstruth.github.io
2. 点击 "Settings" 选项卡
3. 在左侧菜单找到 "Pages"
4. 在 "Source" 选择 "GitHub Actions"
5. 在 "Custom domain" 输入：`unpidan.top`
6. 勾选 "Enforce HTTPS"
7. 点击 "Save"

## 🕐 等待时间

- **DNS 传播**: 10分钟 - 24小时
- **GitHub Pages 验证**: 几分钟 - 1小时
- **SSL 证书**: 自动生成，可能需要几小时

## 🔧 验证步骤

### 1. 检查 DNS 传播
```bash
# 检查 A 记录
dig unpidan.top

# 检查 CNAME 记录  
dig www.unpidan.top

# 在线检查工具
# https://www.whatsmydns.net/
```

### 2. 检查 GitHub Pages 状态
- 访问仓库 Settings > Pages
- 查看域名验证状态
- 检查是否有错误提示

### 3. 测试访问
```bash
# 测试主域名
curl -I https://unpidan.top

# 测试 www 子域名
curl -I https://www.unpidan.top
```

## ❌ 常见问题及解决方案

### 问题 1: "域名无法访问"
**原因**: DNS 记录未配置或传播未完成
**解决方案**:
1. 检查 DNS 记录是否正确添加
2. 等待 DNS 传播完成（最多24小时）
3. 使用 https://www.whatsmydns.net/ 检查全球传播状态

### 问题 2: "GitHub Pages 显示 404"
**原因**: 代码未推送或 GitHub Pages 未正确配置
**解决方案**:
1. 确认代码已推送到 GitHub
2. 检查 GitHub Actions 是否运行成功
3. 确认 CNAME 文件存在于 static/ 目录

### 问题 3: "SSL 证书错误"
**原因**: GitHub 还在生成 SSL 证书
**解决方案**:
1. 等待几小时让 GitHub 自动生成证书
2. 尝试重新保存 GitHub Pages 设置
3. 确保勾选了 "Enforce HTTPS"

### 问题 4: "www 子域名不工作"
**原因**: CNAME 记录配置错误
**解决方案**:
1. 添加 CNAME 记录: www -> unpidan.top
2. 或者添加 CNAME 记录: www -> misstruth.github.io

## 🚀 快速修复命令

如果您还没有推送到 GitHub，运行：

```bash
# 一键推送到 GitHub
git remote add origin https://github.com/misstruth/misstruth.github.io.git
git push -u origin main
```

## 📞 获取帮助

如果问题仍然存在：

1. **检查 GitHub Actions 日志**
   - 访问仓库的 "Actions" 选项卡
   - 查看最新的工作流运行状态

2. **联系域名服务商**
   - 如果 DNS 配置有问题，联系腾讯云客服

3. **GitHub 社区**
   - 访问 GitHub Community 寻求帮助

## 📊 配置检查清单

- [ ] 代码已推送到 GitHub
- [ ] GitHub Actions 运行成功
- [ ] DNS A 记录已配置（4个IP）
- [ ] DNS CNAME 记录已配置（www）
- [ ] GitHub Pages 自定义域名已设置
- [ ] HTTPS 已启用
- [ ] DNS 传播已完成
- [ ] 可以访问 https://unpidan.top
- [ ] 可以访问 https://www.unpidan.top

完成所有步骤后，您的博客应该可以通过 https://unpidan.top 正常访问！
