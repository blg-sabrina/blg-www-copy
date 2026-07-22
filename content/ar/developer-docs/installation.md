---
description: دليل تثبيت وتكوين BigLedger SDK.
tags:
- user-guide
title: التثبيت
weight: 10
---

دليل تثبيت وتكوين BigLedger SDK.

## متطلبات النظام

- Node.js 16+ أو Python 3.8+
- ذاكرة وصول عشوائي 4 جيجابايت كحد أدنى
- مساحة قرص حرة 10 جيجابايت

## طرق التثبيت

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

## التكوين

أنشئ ملف تكوين:

```javascript
// config.js
module.exports = {
  apiKey: 'YOUR_API_KEY',
  network: 'mainnet', // or 'testnet'
  timeout: 30000
};
```

## التحقق

تحقّق من تثبيتك:

```javascript
const BigLedger = require('@bigledger/sdk');

const client = new BigLedger({
  apiKey: 'YOUR_API_KEY'
});

client.getStatus().then(console.log);
```

## استكشاف الأخطاء وإصلاحها

المشكلات الشائعة وحلولها:

- **أخطاء الاتصال**: تحقّق من مفتاح API وإعدادات الشبكة
- **تعارضات الإصدارات**: تأكّد من استخدامك إصدارات متوافقة
- **مشكلات الأذونات**: تحقّق من أن حسابك يملك الأذونات اللازمة
