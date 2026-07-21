---
title: "Modul Teras"
description: "Aplet penting yang menjadi asas sistem ERP BigLedger"
weight: 10
---


Modul Teras mengandungi aplet asas yang diperlukan oleh semua modul lain dalam BigLedger. Aplet ini menyediakan infrastruktur asas dan keupayaan pengurusan data induk yang menjadi tunjang keseluruhan sistem.

## Gambaran Keseluruhan

Modul Teras ialah asas ERP BigLedger, yang menyediakan:
- **Pengurusan Data Induk** - Pengurusan berpusat bagi data perniagaan kritikal
- **Konfigurasi Sistem** - Tetapan dan konfigurasi penting
- **Operasi Asas** - Operasi perniagaan asas
- **Integrasi Data** - Data dikongsi merentas semua modul

{{< callout type="info" >}}
**Penting**: Aplet Modul Teras ialah prasyarat bagi semua modul lain. Aplet ini mesti dikonfigurasikan dengan betul sebelum melaksanakan modul perniagaan yang lain.
{{< /callout >}}

## Aplet Teras

### 1. Aplet Carta Akaun
**Tujuan**: Mentakrif dan mengurus struktur carta akaun yang lengkap
- Kategori dan jenis akaun
- Hierarki akaun
- Pemetaan penyata kewangan
- Sokongan pelbagai mata wang

**Digunakan oleh**: Semua transaksi kewangan merentas setiap modul

### 2. Aplet Pentadbir Tenan
**Tujuan**: Pentadbiran dan konfigurasi seluruh sistem
- Pengurusan pengguna dan kebenaran
- Tetapan sistem
- Konfigurasi keselamatan
- Tetapan audit

**Digunakan oleh**: Pentadbir sistem untuk pengurusan sistem keseluruhan

### 3. Aplet Organisasi
**Tujuan**: Mentakrif struktur organisasi
- Persediaan syarikat
- Konfigurasi cawangan
- Struktur jabatan
- Pengurusan pusat kos

**Digunakan oleh**: Semua modul untuk hierarki organisasi

### 4. Aplet Buku Tunai
**Tujuan**: Pengurusan akaun tunai dan bank
- Persediaan akaun tunai
- Konfigurasi akaun bank
- Kaedah pembayaran
- Penjejakan aliran tunai

**Digunakan oleh**: Semua modul yang mengendalikan transaksi kewangan

### 5. Aplet Penyelenggaraan Item Dokumen
**Tujuan**: Mengurus item dan perkhidmatan berasaskan dokumen
- Item perkhidmatan
- Item bukan inventori
- Templat dokumen
- Item pengebilan

**Digunakan oleh**: Operasi berasaskan perkhidmatan, perkhidmatan profesional

### 6. Aplet Konfigurasi Cukai
**Tujuan**: Persediaan dan pengurusan cukai yang lengkap
- Konfigurasi GST/SST
- Kod dan kadar cukai
- Kumpulan cukai
- Peraturan pematuhan

**Digunakan oleh**: Semua modul yang menjana transaksi bercukai

### 7. Aplet Penyelenggaraan Item Inventori
**Tujuan**: Data induk produk dan inventori
- Penciptaan produk
- Kategori item
- Unit ukuran
- Tetapan stok

**Digunakan oleh**: Semua modul berkaitan inventori

### 8. Aplet Penyelenggaraan Pelanggan
**Tujuan**: Pengurusan data induk pelanggan
- Profil pelanggan
- Had kredit
- Terma pembayaran
- Kategori pelanggan

**Digunakan oleh**: Modul Jualan, CRM, AR dan modul berkaitan pelanggan

### 9. Aplet Penyelenggaraan Pembekal
**Tujuan**: Data induk vendor/pembekal
- Profil pembekal
- Terma pembayaran
- Perjanjian pembelian
- Kategori pembekal

**Digunakan oleh**: Modul Pembelian, AP dan perolehan

### 10. Aplet Penyelenggaraan Pekerja
**Tujuan**: Rekod induk pekerja
- Profil pekerja
- Penetapan jabatan
- Peranan dan kebenaran
- Data pampasan

**Digunakan oleh**: Modul HR, Gaji dan modul berkaitan pekerja

## Kebergantungan

### Kebergantungan Modul
Semua modul BigLedger bergantung pada aplet Modul Teras:

| Modul | Kebergantungan Teras |
|--------|------------------|
| **Perakaunan Kewangan** | Carta Akaun, Konfigurasi Cukai, Buku Tunai |
| **Jualan & CRM** | Penyelenggaraan Pelanggan, Konfigurasi Cukai, Item Dokumen |
| **Pembelian** | Penyelenggaraan Pembekal, Konfigurasi Cukai |
| **Inventori** | Penyelenggaraan Item Inventori, Organisasi |
| **HR & Gaji** | Penyelenggaraan Pekerja, Organisasi |
| **POS** | Pelanggan, Item Inventori, Buku Tunai, Cukai |
| **E-Dagang** | Pelanggan, Item Inventori, Cukai, Organisasi |

### Urutan Persediaan
Susunan konfigurasi yang disyorkan:

1. **Persediaan Organisasi**
   - Butiran syarikat
   - Struktur cawangan
   - Jabatan

2. **Asas Kewangan**
   - Carta Akaun
   - Konfigurasi Cukai
   - Persediaan Buku Tunai

3. **Data Induk**
   - Pelanggan
   - Pembekal
   - Pekerja
   - Item (Inventori/Dokumen)

4. **Konfigurasi Sistem**
   - Tetapan Pentadbir Tenan
   - Kebenaran pengguna
   - Peraturan aliran kerja

## Amalan Terbaik Konfigurasi

### Persediaan Awal
1. **Rancang struktur anda** sebelum konfigurasi
2. **Gunakan pengekodan yang konsisten** merentas semua data induk
3. **Sediakan data ujian** sebelum penggunaan sebenar
4. **Dokumentasikan konfigurasi** untuk rujukan

### Konvensyen Penamaan
- **Akaun**: Gunakan penomboran berstruktur (1000-1999 Aset, 2000-2999 Liabiliti)
- **Item**: Kod berasaskan kategori (ELEC-001, FURN-001)
- **Pelanggan/Pembekal**: Kod sistematik (CUS-001, SUP-001)
- **Pekerja**: Berasaskan jabatan (HR-001, FIN-001)

### Integriti Data
- Aktifkan **jejak audit** dari awal
- Sediakan **aliran kerja kelulusan** untuk perubahan data induk
- Semakan **pengesahan data** berkala
- Laksanakan prosedur **kawalan perubahan**

## Titik Integrasi

### Aliran Data Merentas Modul

```
Modul Teras (Data Induk) → Perakaunan Kewangan | Jualan & CRM | Inventori & Gudang | HR & Gaji → Data Transaksi (Pesanan, Invois, dll.)
```

### Integrasi API
Aplet Modul Teras menyediakan API untuk:
- Penyegerakan data induk
- Pengesahan masa nyata
- Eksport/import data
- Integrasi pihak ketiga

## Kes Penggunaan Biasa

### Operasi Pelbagai Cawangan
- Carta akaun berpusat
- Buku tunai khusus cawangan
- Pelaporan disatukan
- Transaksi antara cawangan

### Perniagaan Pelbagai Mata Wang
- Konfigurasi mata wang dalam Organisasi
- Kadar pertukaran dalam tetapan Kewangan
- Pelbagai mata wang dalam Pelanggan/Pembekal
- Harga khusus mata wang

### Keperluan Pematuhan
- Persediaan GST/SST dalam Konfigurasi Cukai
- Jejak audit dalam Pentadbir Tenan
- Laporan berkanun daripada Carta Akaun
- Pengesahan pematuhan

## Penyelesaian Masalah

### Isu Biasa

**Tidak dapat mencipta transaksi**
- Sahkan Carta Akaun adalah lengkap
- Periksa Konfigurasi Cukai
- Pastikan Buku Tunai telah disediakan

**Data induk tidak muncul**
- Periksa struktur Organisasi
- Sahkan kebenaran pengguna
- Pastikan status data (Aktif/Tidak Aktif)

**Kegagalan integrasi**
- Sahkan kelengkapan data induk
- Periksa pemetaan medan
- Semak kebenaran API

## Dokumentasi Berkaitan

### Panduan Persediaan
- [Panduan Persediaan Organisasi](/applets/organization-applet/)
- [Konfigurasi Carta Akaun](/guides/accounting-guides/chart-of-accounts-setup/)
- [Panduan Konfigurasi Cukai](/guides/)

### Dokumentasi Modul
- [Modul Perakaunan Kewangan](/modules/financial-accounting/)
- [Modul Inventori](/modules/inventory/)
- [Modul Jualan & CRM](/modules/crm/)

### Topik Lanjutan
- [Persediaan Pelbagai Entiti](/guides/advanced/)
- [Integrasi API](/developers/api-reference/)
- [Penghijrahan Data](/guides/)

## Langkah Seterusnya

Selepas mengkonfigurasi aplet Modul Teras:

1. **Sediakan Perakaunan Kewangan** untuk operasi kewangan
2. **Konfigurasikan Jualan/Pembelian** untuk operasi perdagangan
3. **Laksanakan Inventori** untuk pengurusan stok
4. **Tambah modul khusus** berdasarkan keperluan perniagaan

{{< callout type="tip" >}}
**Petua Pro**: Luangkan masa untuk mengkonfigurasi aplet Modul Teras dengan betul. Asas ini menentukan kecekapan dan kebolehskalaan keseluruhan pelaksanaan BigLedger anda.
{{< /callout >}}
