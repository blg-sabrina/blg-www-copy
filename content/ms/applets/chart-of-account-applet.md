---
title: "Aplet Carta Akaun"
description: "Tentukan dan uruskan struktur carta akaun yang lengkap untuk BigLedger"
tags:
- core-module
- financial-accounting
- chart-of-accounts
- master-data
weight: 185
---

## Tujuan dan Gambaran Keseluruhan

Aplet Carta Akaun ialah asas kewangan BigLedger, menyediakan pengurusan menyeluruh struktur carta akaun lengkap organisasi anda. Aplet Modul Teras ini mentakrifkan kategori akaun, hierarki, dan pemetaan penyata kewangan yang menyokong semua transaksi kewangan merentas setiap modul BigLedger.

{{< callout type="info" >}}
**Aplet Modul Teras**: Ini ialah salah satu daripada 13 aplet Modul Teras yang penting yang diperlukan oleh semua modul BigLedger lain, terutamanya kritikal untuk sebarang operasi kewangan.
{{< /callout >}}

### Fungsi Utama
- **Pengurusan Struktur Akaun** - Cipta dan selenggara hierarki akaun
- **Pemetaan Penyata Kewangan** - Petakan akaun ke laporan kewangan
- **Sokongan Berbilang Mata Wang** - Kendalikan berbilang mata wang dan kadar pertukaran
- **Klasifikasi Akaun** - Kategorikan akaun mengikut jenis dan tujuan
- **Asas Integrasi** - Sediakan data akaun kepada semua modul kewangan

## Ciri Utama

### Struktur Akaun
- Organisasi akaun berhierarki (sehingga 10 peringkat)
- Sistem penomboran akaun yang fleksibel
- Kategori dan subkategori akaun
- Hubungan akaun induk-anak
- Pengurusan status akaun (Aktif/Tidak Aktif)

### Jenis Akaun
- **Aset** - Aset semasa dan bukan semasa
- **Liabiliti** - Liabiliti jangka pendek dan jangka panjang
- **Ekuiti** - Ekuiti pemilik dan pendapatan tertahan
- **Pendapatan** - Akaun hasil dan pendapatan lain
- **Perbelanjaan** - Perbelanjaan operasi dan bukan operasi

### Integrasi Penyata Kewangan
- Pemetaan Kunci Kira-Kira
- Pemetaan penyata Untung & Rugi
- Pemetaan penyata Aliran Tunai
- Pemetaan laporan kewangan tersuai
- Pelaporan perbandingan berbilang tempoh

### Keupayaan Berbilang Mata Wang
- Konfigurasi mata wang asas
- Persediaan akaun mata wang asing
- Integrasi kadar pertukaran masa nyata
- Peraturan terjemahan mata wang
- Pelaporan berbilang mata wang

### Kawalan Akaun
- Kebenaran peringkat akaun
- Kawalan pengeposan transaksi
- Keupayaan umpukan bajet
- Peruntukan pusat kos
- Akses akaun mengikut jabatan

## Spesifikasi Teknikal

### Keperluan Sistem
- **Tahap Akses Minimum**: Pentadbir Kewangan
- **Kebergantungan Pangkalan Data**: Jadual kewangan teras
- **Titik Integrasi**: Semua modul kewangan
- **Ketersediaan API**: Operasi CRUD penuh
- **Kemas Kini Masa Nyata**: Kemas kini baki akaun serta-merta

### Pilihan Konfigurasi Akaun
- **Panjang Kod Akaun**: 3-20 aksara
- **Peringkat Hierarki**: Sehingga 10 peringkat mendalam
- **Jenis Akaun**: 50+ jenis pratakrif
- **Sokongan Mata Wang**: 150+ mata wang global
- **Medan Tersuai**: Sehingga 20 medan tersuai setiap akaun

### Parameter Prestasi
- **Kapasiti Akaun**: Sehingga 100,000 akaun
- **Volum Transaksi**: Berjuta-juta transaksi setiap akaun
- **Penjanaan Laporan**: <5 saat untuk laporan standard
- **Kemas Kini Masa Nyata**: <1 saat untuk kemas kini baki
- **Pengguna Serentak**: 500+ pengguna serentak

## Titik Integrasi

### Kebergantungan Modul Teras
- **Aplet Organisasi** - Struktur syarikat dan cawangan
- **Aplet Konfigurasi Cukai** - Pemetaan akaun cukai
- **Aplet Cashbook** - Integrasi akaun tunai dan bank

### Integrasi Modul
| Modul | Tujuan Integrasi |
|--------|-------------------|
| **Perakaunan Kewangan** | Sumber data akaun utama |
| **Jualan & CRM** | Akaun hasil dan belum terima |
| **Pembelian** | Akaun perbelanjaan dan belum bayar |
| **Inventori** | Akaun aset dan kos |
| **Gaji** | Akaun gaji dan faedah |
| **POS** | Akaun jualan dan tunai |
| **E-Dagang** | Akaun hasil dalam talian |
| **Pembuatan** | Akaun kerja-dalam-proses dan kos |

### Integrasi Luaran
- **Sistem Perbankan** - Penyesuaian akaun bank
- **Pihak Berkuasa Cukai** - Akaun pelaporan berkanun
- **Perisian Pengauditan** - Eksport penyata kewangan
- **Perisikan Perniagaan** - Analitik kewangan
- **Perakaunan Pihak Ketiga** - Penyegerakan akaun

## Keperluan Konfigurasi

### Keperluan Persediaan Awal
1. **Mata Wang Asas** - Tentukan mata wang utama
2. **Kategori Akaun** - Sediakan jenis akaun utama
3. **Sistem Penomboran** - Tentukan struktur pengekodan akaun
4. **Tempoh Kewangan** - Konfigurasikan tempoh perakaunan
5. **Baki Pembukaan** - Masukkan baki akaun permulaan

### Konfigurasi Penting
- **Akaun Aset**: Tunai, Bank, Inventori, Aset Tetap
- **Akaun Liabiliti**: Akaun Belum Bayar, Pinjaman, Akruan
- **Akaun Ekuiti**: Modal, Pendapatan Tertahan
- **Akaun Hasil**: Jualan, Pendapatan Perkhidmatan, Pendapatan Lain
- **Akaun Perbelanjaan**: Kos Jualan, Perbelanjaan Operasi

### Konfigurasi Lanjutan
- **Akaun Disatukan** - Penyatuan berbilang entiti
- **Pelaporan Segmen** - Akaun bahagian/jabatan
- **Perakaunan Projek** - Akaun khusus projek
- **Berbilang Mata Wang** - Akaun mata wang asing
- **Integrasi Belanjawan** - Pemetaan akaun bajet

## Kes Penggunaan

### Persediaan Perniagaan Kecil
**Senario**: Kedai runcit tempatan
- Struktur akaun 4-digit ringkas (1000-9999)
- Kategori akaun asas (Aset, Liabiliti, Pendapatan, Perbelanjaan)
- Operasi mata wang tunggal
- Laporan kewangan standard

**Manfaat**: Struktur kewangan yang ringkas dan mudah difahami

### Perusahaan Berbilang Cawangan
**Senario**: Rangkaian kedai runcit
- Struktur berhierarki kompleks dengan kod cawangan
- Peruntukan akaun mengikut jabatan
- Akaun transaksi antara cawangan
- Pelaporan disatukan dan mengikut cawangan

**Manfaat**: Pengurusan kewangan berbilang lokasi yang menyeluruh

### Syarikat Pembuatan
**Senario**: Operasi pengeluaran dan pemasangan
- Akaun kerja-dalam-proses
- Akaun bahan mentah dan barang siap
- Peruntukan overhed pembuatan
- Pelaporan berasaskan pusat kos

**Manfaat**: Penjejakan kos pembuatan yang terperinci

### Perniagaan Antarabangsa
**Senario**: Operasi berbilang negara
- Persediaan akaun berbilang mata wang
- Akaun pertukaran asing
- Carta akaun khusus negara
- Pelaporan berbilang mata wang yang disatukan

**Manfaat**: Pengurusan kewangan global dengan pematuhan tempatan

## Aplet Berkaitan

### Aplet Modul Teras
- **[Aplet Konfigurasi Cukai](/ms/applets/tax-configuration-applet/)** - Pemetaan akaun cukai
- **[Aplet Cashbook](/ms/applets/cashbook-applet/)** - Akaun tunai dan bank
- **[Aplet Organisasi](/ms/applets/organization-applet/)** - Struktur syarikat

### Aplet Kewangan
- **[Aplet Lejar Am](/ms/applets/general-ledger-applet/)** - Pengeposan transaksi
- **[Aplet Laporan Kewangan](/ms/applets/financial-reports-applet/)** - Penjanaan laporan
- **[Aplet Pengurusan Bajet](/ms/applets/budget-management-applet/)** - Peruntukan bajet

### Aplet Data Induk
- **[Aplet Penyelenggaraan Pelanggan](/ms/applets/customer-maintenance-applet/)** - Akaun pelanggan
- **[Aplet Penyelenggaraan Pembekal](/ms/applets/supplier-maintenance-applet/)** - Akaun vendor

## Panduan Persediaan

### Permulaan Pantas
1. **Akses Carta Akaun** - Navigasi ke aplet
2. **Tentukan Struktur Akaun** - Sediakan penomboran akaun
3. **Cipta Kategori Utama** - Tambah jenis akaun utama
4. **Sediakan Sub-Akaun** - Cipta hierarki akaun terperinci
5. **Konfigurasikan Baki Pembukaan** - Masukkan baki permulaan

### Persediaan Lanjutan
1. **Konfigurasi Berbilang Mata Wang** - Sediakan mata wang asing
2. **Pemetaan Penyata Kewangan** - Petakan akaun ke laporan
3. **Integrasi Bajet** - Pautkan akaun ke sistem bajet
4. **Persediaan Pusat Kos** - Konfigurasikan akaun jabatan
5. **Aliran Kerja Kelulusan** - Sediakan kelulusan perubahan akaun

## Templat Carta Akaun Standard

### Templat Perniagaan Runcit
```
1000-1999: ASSETS
  1000-1099: Current Assets
    1001: Cash on Hand
    1002: Cash at Bank
    1010: Accounts Receivable
    1020: Inventory
  1100-1999: Non-Current Assets
    1101: Equipment
    1102: Accumulated Depreciation

2000-2999: LIABILITIES
  2000-2099: Current Liabilities
    2001: Accounts Payable
    2010: Accrued Expenses
  2100-2999: Non-Current Liabilities
    2101: Long-term Loans

3000-3999: EQUITY
  3001: Owner's Capital
  3002: Retained Earnings

4000-4999: INCOME
  4001: Sales Revenue
  4002: Service Income

5000-5999: EXPENSES
  5001: Cost of Sales
  5002: Salaries & Wages
  5003: Rent Expense
```

## Amalan Terbaik

### Amalan Terbaik Struktur Akaun
- **Penomboran Konsisten** - Gunakan kod akaun yang logik dan konsisten
- **Pertumbuhan Masa Depan** - Tinggalkan ruang untuk akaun masa depan
- **Penamaan Jelas** - Gunakan nama akaun yang deskriptif
- **Semakan Berkala** - Pembersihan carta akaun berkala
- **Dokumentasi** - Selenggara garis panduan penggunaan akaun

### Amalan Terbaik Keselamatan
- **Kawalan Akses** - Hadkan hak pengubahsuaian carta akaun
- **Kelulusan Perubahan** - Laksanakan aliran kerja kelulusan untuk perubahan
- **Jejak Audit** - Pantau semua perubahan akaun
- **Sandaran** - Sandaran berkala struktur carta akaun
- **Pengujian** - Uji perubahan dalam persekitaran pembangunan

## Penyelesaian Masalah

### Isu Biasa
**Tidak boleh mencipta transaksi**
- Sahkan akaun adalah aktif
- Semak kebenaran pengeposan akaun
- Pastikan jenis akaun membenarkan transaksi
- Sahkan kawalan baki akaun

**Laporan kewangan tidak betul**
- Semak pemetaan akaun ke penyata kewangan
- Semak klasifikasi akaun
- Sahkan hierarki akaun
- Sahkan prosedur akhir tempoh

**Isu berbilang mata wang**
- Semak konfigurasi kadar pertukaran
- Sahkan persediaan akaun mata wang
- Semak peraturan terjemahan mata wang
- Sahkan tetapan mata wang asas

### Sumber Sokongan
- Panduan persediaan carta akaun
- Konfigurasi pelaporan kewangan
- Dokumentasi persediaan berbilang mata wang
- Panduan penyelesaian masalah integrasi

{{< callout type="warning" >}}
**Penting**: Perubahan pada Carta Akaun boleh memberi kesan yang ketara terhadap pelaporan kewangan dan integrasi sistem. Sentiasa uji perubahan dengan teliti sebelum melaksanakannya dalam pengeluaran.
{{< /callout >}}
