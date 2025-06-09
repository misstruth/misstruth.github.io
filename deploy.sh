#!/bin/bash

# 博客部署脚本
# 使用方法: ./deploy.sh "提交信息"

set -e

echo "🚀 开始部署博客..."

# 检查是否提供了提交信息
if [ -z "$1" ]; then
    echo "❌ 请提供提交信息"
    echo "使用方法: ./deploy.sh \"你的提交信息\""
    exit 1
fi

COMMIT_MSG="$1"

echo "📝 添加所有更改..."
git add .

echo "💾 提交更改..."
git commit -m "$COMMIT_MSG"

echo "📤 推送到 GitHub..."
git push

echo "✅ 部署完成！"
echo "🌐 您的网站将在几分钟后更新: https://unpidan.top"
echo "📊 查看部署状态: https://github.com/misstruth/misstruth.github.io/actions"
