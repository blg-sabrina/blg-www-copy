---
description: 安装和配置 BigLedger SDK 的指南。
tags:
- user-guide
title: 安装
weight: 10
---

安装和配置 BigLedger SDK 的指南。

## 系统要求

- Node.js 16+ 或 Python 3.8+
- 最低 4GB 内存
- 10GB 可用磁盘空间

## 安装方式

### NPM (Node.js)

```bash
npm install @bigledger/sdk
```

### Pip (Python)

```bash
pip install bigledger-sdk
```

### Docker

```bash
docker pull bigledger/sdk:latest
```

## 配置

创建配置文件：

```javascript
// config.js
module.exports = {
  apiKey: 'YOUR_API_KEY',
  network: 'mainnet', // or 'testnet'
  timeout: 30000
};
```

## 验证

验证您的安装：

```javascript
const BigLedger = require('@bigledger/sdk');

const client = new BigLedger({
  apiKey: 'YOUR_API_KEY'
});

client.getStatus().then(console.log);
```

## 故障排除

常见问题及解决方案：

- **连接错误**：检查您的 API 密钥和网络设置
- **版本冲突**：确保您使用的是兼容的版本
- **权限问题**：验证您的账户拥有必要的权限
