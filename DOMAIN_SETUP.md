# unpidan.top 域名配置指南

## 🌐 域名配置步骤

### 1. 购买域名
- 域名：`unpidan.top`
- 推荐域名注册商：阿里云、腾讯云、Cloudflare、Namecheap 等

### 2. DNS 配置

在您的域名注册商或 DNS 服务商处添加以下记录：

#### 推荐配置（A 记录 + CNAME）

```dns
# 主域名指向 GitHub Pages
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

# www 子域名指向主域名
类型: CNAME
名称: www
值: unpidan.top
```

#### 备用配置（纯 CNAME）

```dns
# 主域名指向 GitHub Pages
类型: CNAME
名称: @
值: misstruth.github.io

# www 子域名指向 GitHub Pages
类型: CNAME
名称: www
值: misstruth.github.io
```

### 3. GitHub Pages 设置

1. 推送代码到 GitHub 后
2. 进入仓库 Settings > Pages
3. 在 "Custom domain" 输入：`unpidan.top`
4. 勾选 "Enforce HTTPS"
5. 等待 DNS 检查通过

### 4. 验证配置

#### DNS 传播检查
```bash
# 检查 A 记录
dig unpidan.top

# 检查 CNAME 记录
dig www.unpidan.top

# 在线检查工具
# https://www.whatsmydns.net/
```

#### 访问测试
- https://unpidan.top
- https://www.unpidan.top

## 🕐 时间说明

- **DNS 传播时间**：通常 10 分钟 - 24 小时
- **GitHub Pages 验证**：几分钟到 1 小时
- **SSL 证书生成**：自动，可能需要几小时

## 🔧 常见问题

### 问题 1：域名无法访问
**解决方案：**
1. 检查 DNS 记录是否正确配置
2. 等待 DNS 传播完成
3. 确认 GitHub Pages 中域名设置正确

### 问题 2：SSL 证书错误
**解决方案：**
1. 确保勾选了 "Enforce HTTPS"
2. 等待 GitHub 自动生成 SSL 证书
3. 可能需要重新保存域名设置

### 问题 3：www 子域名不工作
**解决方案：**
1. 添加 CNAME 记录：www -> unpidan.top
2. 或者添加 CNAME 记录：www -> misstruth.github.io

## 📋 配置检查清单

- [ ] 购买 unpidan.top 域名
- [ ] 配置 DNS A 记录（4 个 GitHub Pages IP）
- [ ] 配置 DNS CNAME 记录（www -> unpidan.top）
- [ ] 推送代码到 GitHub
- [ ] 在 GitHub Pages 设置自定义域名
- [ ] 启用 HTTPS
- [ ] 等待 DNS 传播
- [ ] 测试访问 https://unpidan.top
- [ ] 测试访问 https://www.unpidan.top

## 🎯 最终效果

配置完成后：
- ✅ https://unpidan.top → 您的博客
- ✅ https://www.unpidan.top → 您的博客
- ✅ https://misstruth.github.io → 重定向到 unpidan.top
- ✅ 自动 HTTPS 加密
- ✅ 全球 CDN 加速

## 📞 技术支持

如果遇到问题：
1. 检查域名注册商的 DNS 管理界面
2. 使用在线 DNS 检查工具
3. 查看 GitHub Pages 的状态页面
4. 联系域名注册商客服
