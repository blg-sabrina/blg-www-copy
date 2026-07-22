---
description: Panduan untuk memasang dan mengkonfigurasi BigLedger SDK.
tags:
- user-guide
title: Pemasangan
weight: 10
---

Panduan untuk memasang dan mengkonfigurasi BigLedger SDK.

## Keperluan Sistem

- Node.js 16+ atau Python 3.8+
- RAM 4GB minimum
- 10GB ruang cakera kosong

## Kaedah Pemasangan

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

## Konfigurasi

Cipta fail konfigurasi:

```javascript
// config.js
module.exports = {
  apiKey: 'YOUR_API_KEY',
  network: 'mainnet', // or 'testnet'
  timeout: 30000
};
```

## Pengesahan

Sahkan pemasangan anda:

```javascript
const BigLedger = require('@bigledger/sdk');

const client = new BigLedger({
  apiKey: 'YOUR_API_KEY'
});

client.getStatus().then(console.log);
```

## Penyelesaian Masalah

Isu biasa dan penyelesaiannya:

- **Ralat sambungan**: Semak kunci API dan tetapan rangkaian anda
- **Konflik versi**: Pastikan anda menggunakan versi yang serasi
- **Isu kebenaran**: Sahkan akaun anda mempunyai kebenaran yang diperlukan
