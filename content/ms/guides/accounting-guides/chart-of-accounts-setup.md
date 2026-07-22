---
description: Panduan lengkap untuk menyediakan Carta Akaun anda dalam BigLedger.
tags:
- user-guide
title: Panduan Persediaan Carta Akaun
weight: 10
---

Panduan lengkap untuk menyediakan Carta Akaun anda dalam BigLedger.

## Gambaran Keseluruhan

Carta Akaun (COA) ialah asas sistem kewangan anda dalam BigLedger. Ia mentakrifkan struktur lejar am anda dan menentukan cara transaksi kewangan dikategorikan dan dilaporkan.

## Prasyarat

Sebelum menyediakan COA anda:
- Lengkapkan persediaan Organisasi
- Tentukan tahun fiskal anda
- Tentukan kaedah perakaunan anda (Tunai/Akruan)
- Semak keperluan statutori untuk Malaysia

## Persediaan Langkah demi Langkah

### Langkah 1: Akses Modul Carta Akaun

1. Navigasi ke **Master Data** → **Chart of Account**
2. Klik **New Account** untuk mencipta akaun
3. Atau klik **Import** untuk menggunakan templat

### Langkah 2: Tentukan Struktur Akaun

BigLedger menggunakan struktur akaun berhierarki:

```
1000 - Assets
  1100 - Current Assets
    1110 - Cash and Bank
      1111 - Cash in Hand
      1112 - Bank Accounts
  1200 - Fixed Assets
    1210 - Property and Equipment
    1220 - Vehicles
```

### Langkah 3: Cipta Kategori Akaun

#### Aset (1000-1999)
- Aset Semasa (1000-1499)
- Aset Tetap (1500-1999)

#### Liabiliti (2000-2999)
- Liabiliti Semasa (2000-2499)
- Liabiliti Jangka Panjang (2500-2999)

#### Ekuiti (3000-3999)
- Modal Saham (3000-3099)
- Perolehan Tertahan (3100-3199)

#### Hasil (4000-4999)
- Hasil Jualan (4000-4499)
- Pendapatan Lain (4500-4999)

#### Perbelanjaan (5000-9999)
- Kos Barang Dijual (5000-5999)
- Perbelanjaan Operasi (6000-7999)
- Perbelanjaan Lain (8000-8999)

### Langkah 4: Konfigurasikan Sifat Akaun

Untuk setiap akaun, tetapkan:
- **Kod Akaun**: Pengenal unik
- **Nama Akaun**: Nama deskriptif
- **Jenis Akaun**: Aset/Liabiliti/Ekuiti/Hasil/Perbelanjaan
- **Sub-Jenis**: Pengelasan lanjut
- **Mata Wang**: MYR atau mata wang asing
- **Kod Cukai**: Pautan ke konfigurasi cukai
- **Status**: Aktif/Tidak Aktif

### Langkah 5: Sediakan Akaun Khas

Konfigurasikan akaun sistem:
- **Akaun Bank Lalai**: Untuk resit/bayaran
- **Akaun Belum Terima**: Invois pelanggan
- **Akaun Belum Bayar**: Bil vendor
- **Akaun GST/SST**: Akaun cukai
- **Perolehan Tertahan**: Penutupan akhir tahun
- **Untung/Rugi Pertukaran**: Perbezaan forex

### Langkah 6: Import Baki Pembukaan

1. Pergi ke **Finance** → **Journal Entries**
2. Cipta jurnal Baki Pembukaan
3. Masukkan baki setakat tarikh peralihan
4. Pastikan debit = kredit
5. Poskan catatan jurnal

## Amalan Terbaik

### Konvensyen Penomboran
- Gunakan panjang digit yang konsisten (4-5 digit)
- Tinggalkan jurang untuk akaun masa hadapan
- Kumpulkan akaun berkaitan bersama-sama
- Gunakan sub-akaun untuk butiran

### Penamaan Akaun
- Jadikan deskriptif tetapi ringkas
- Gunakan istilah piawai
- Sertakan lokasi/jabatan jika perlu
- Elakkan aksara khas

### Penyelenggaraan
- Semak COA setiap suku tahun
- Arkibkan akaun yang tidak digunakan
- Dokumenkan perubahan
- Kekalkan jejak audit

## Pematuhan Malaysia

### Keperluan SST
- Akaun Cukai Output (2310)
- Akaun Cukai Input (1410)
- SST Kena Bayar (2311)
- SST Ampaian (2312)

### Akta Syarikat 2016
- Patuhi piawaian perakaunan yang diluluskan
- Kekalkan akaun yang ditetapkan
- Sediakan laporan statutori

## Titik Integrasi

COA berintegrasi dengan:
- **Modul Jualan**: Pengiktirafan hasil
- **Modul Belian**: Rakaman perbelanjaan
- **Inventori**: Pengiraan COGS
- **Aset Tetap**: Pemposan susut nilai
- **E-Invois**: Pemetaan akaun cukai

## Penyelesaian Masalah

### Isu Biasa

**Tidak dapat memadam akaun**
- Semak untuk transaksi yang diposkan
- Alih keluar daripada laporan/belanjawan
- Tetapkan kepada tidak aktif sebaliknya

**Kunci kira-kira tidak seimbang**
- Semak baki pembukaan
- Semak perolehan tertahan
- Sahkan kadar pertukaran

**Akaun salah dalam menu juntai bawah**
- Semak status akaun
- Sahkan jenis akaun
- Semak kebenaran pengguna

## Laporan

Laporan utama yang menggunakan COA:
- Imbangan Duga
- Kunci Kira-kira
- Untung & Rugi
- Lejar Am
- Analisis Akaun

## Langkah Seterusnya

Selepas menyediakan COA:
1. Konfigurasikan Tetapan Cukai
2. Sediakan Baki Pembukaan
3. Cipta Templat Jurnal
4. Konfigurasikan Laporan Kewangan
5. Uji dengan transaksi sampel

---

*Untuk sokongan tambahan, hubungi support@bigledger.com*