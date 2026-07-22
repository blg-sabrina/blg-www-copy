---
title: "Aplet Penyelenggaraan Pelanggan"
description: "Pengurusan data induk pelanggan yang menyeluruh untuk operasi CRM dan jualan BigLedger"
tags:
- core-module
- customer-management
- crm
- master-data
- sales
weight: 5
---

## Tujuan dan Gambaran Keseluruhan

Aplet Penyelenggaraan Pelanggan ialah repositori pusat untuk semua maklumat pelanggan dalam BigLedger, menyediakan pengurusan data induk pelanggan yang menyeluruh yang menyokong jualan, CRM, akaun belum terima, dan operasi berhadapan pelanggan merentas semua modul.

{{< callout type="info" >}}
**Aplet Modul Teras**: Ini ialah salah satu daripada 13 aplet Modul Teras yang penting, asas untuk mana-mana perniagaan dengan hubungan pelanggan dan operasi jualan.
{{< /callout >}}

### Fungsi Utama
- **Pengurusan Profil Pelanggan** - Repositori maklumat pelanggan yang lengkap
- **Pengurusan Kredit** - Had kredit dan terma pembayaran
- **Segmentasi Pelanggan** - Klasifikasi dan pengkategorian
- **Pengurusan Kenalan** - Hubungan pelanggan berbilang kenalan
- **Integrasi Kewangan** - Akaun belum terima dan penjejakan pembayaran

## Ciri Utama

### Pengurusan Maklumat Pelanggan
- Profil pelanggan lengkap dengan maklumat terperinci
- Berbilang individu kenalan setiap pelanggan
- Sejarah komunikasi pelanggan
- Lampiran dokumen dan nota
- Keutamaan dan keperluan pelanggan
- Sokongan berbilang bahasa untuk pelanggan antarabangsa

### Pengurusan Kredit dan Pembayaran
- Had kredit pelanggan dan pemantauan
- Terma dan syarat pembayaran
- Sejarah kredit dan gelagat pembayaran
- Analisis penuaan dan pengurusan kutipan
- Aliran kerja kelulusan kredit
- Keutamaan kaedah pembayaran

### Klasifikasi Pelanggan
- Kategori dan segmen pelanggan
- Umpukan wilayah geografi
- Umpukan wakil jualan
- Tahap keutamaan pelanggan
- Klasifikasi industri
- Penjejakan peringkat kitaran hayat pelanggan

### Pengurusan Alamat dan Lokasi
- Berbilang alamat setiap pelanggan (pengebilan, penghantaran, dll.)
- Penjejakan lokasi geografi
- Zon dan keutamaan penghantaran
- Umpukan cawangan/kedai
- Pengurusan wilayah perkhidmatan
- Koordinat GPS untuk pengoptimuman laluan

### Integrasi dan Komunikasi
- Integrasi sistem CRM
- Komunikasi e-mel dan SMS
- Pemautan profil media sosial
- Integrasi laman web dan e-dagang
- Akses portal pelanggan
- Integrasi automasi pemasaran

## Spesifikasi Teknikal

### Keperluan Sistem
- **Tahap Akses Minimum**: Pentadbir Jualan
- **Kebergantungan Pangkalan Data**: Jadual induk pelanggan
- **Titik Integrasi**: Modul jualan, CRM, kewangan
- **Ketersediaan API**: Operasi CRUD penuh dengan pertanyaan lanjutan
- **Storan Dokumen**: Lampiran dokumen tanpa had

### Pilihan Konfigurasi Pelanggan
- **Panjang Kod Pelanggan**: 3-50 aksara
- **Entri Alamat**: Sehingga 20 alamat setiap pelanggan
- **Individu Kenalan**: Sehingga 50 kenalan setiap pelanggan
- **Medan Tersuai**: Sehingga 30 medan tersuai
- **Lampiran Dokumen**: Pelbagai jenis fail, sehingga 100MB keseluruhan

### Parameter Prestasi
- **Kapasiti Pelanggan**: Sehingga 1,000,000 pelanggan
- **Prestasi Carian**: <1 saat untuk carian kompleks
- **Operasi Pukal**: Memproses 5,000+ pelanggan setiap kelompok
- **Pengguna Serentak**: 500+ pengguna serentak
- **Kemas Kini Masa Nyata**: Penyegerakan serta-merta merentas modul

## Titik Integrasi

### Kebergantungan Modul Teras
- **Aplet Konfigurasi Cukai** - Tetapan cukai pelanggan
- **Aplet Carta Akaun** - Pemetaan akaun pelanggan
- **Aplet Organisasi** - Umpukan pelanggan berbilang cawangan
- **Aplet Penyelenggaraan Pekerja** - Umpukan wakil jualan

### Integrasi Modul
| Modul | Tujuan Integrasi |
|--------|-------------------|
| **Jualan & CRM** | Pengurusan perhubungan pelanggan yang lengkap |
| **Perakaunan Kewangan** | Akaun belum terima dan kutipan |
| **E-Dagang** | Akaun dan keutamaan pelanggan dalam talian |
| **POS** | Maklumat pelanggan tempat jualan |
| **Pemasaran** | Segmentasi pelanggan dan kempen |
| **Pengurusan Perkhidmatan** | Sejarah dan kontrak khidmat pelanggan |
| **Logistik** | Maklumat penghantaran dan penghantaran |

### Integrasi Luaran
- **Sistem CRM** - Penyegerakan data perhubungan pelanggan
- **Platform Pemasaran** - Pengurusan dan automasi kempen
- **Platform E-Dagang** - Integrasi akaun pelanggan dalam talian
- **Gerbang Pembayaran** - Integrasi kaedah dan sejarah pembayaran
- **Penyedia Logistik** - Pengesahan alamat penghantaran
- **Agensi Kredit** - Pemarkahan dan pemantauan kredit

## Keperluan Konfigurasi

### Keperluan Persediaan Awal
1. **Kategori Pelanggan** - Tentukan struktur klasifikasi pelanggan
2. **Terma Pembayaran** - Sediakan syarat pembayaran standard
3. **Dasar Kredit** - Konfigurasikan peraturan had kredit
4. **Wilayah Jualan** - Tentukan umpukan geografi
5. **Sistem Penomboran** - Sediakan struktur pengekodan pelanggan

### Konfigurasi Penting
- **Jenis Pelanggan**: Klasifikasi B2B, B2C, Borong, Runcit
- **Kaedah Pembayaran**: Tunai, Kad Kredit, Pindahan Bank, Cek
- **Terma Kredit**: Pilihan 30 hari, 60 hari, COD, Prabayar
- **Wilayah Geografi**: Wilayah dan zon jualan
- **Status Pelanggan**: Aktif, Tidak Aktif, Digantung, VIP

### Konfigurasi Lanjutan
- **Hierarki Pelanggan** - Hubungan pelanggan induk-anak
- **Sokongan Berbilang Mata Wang** - Pengendalian pelanggan antarabangsa
- **Aliran Kerja Kelulusan** - Had kredit dan perubahan pelanggan
- **Peraturan Kualiti Data** - Pengesahan dan pengesanan pendua
- **Pematuhan Privasi** - Tetapan GDPR dan perlindungan data

## Kes Penggunaan

### Perniagaan Borong B2B
**Senario**: Syarikat pembuatan yang menjual kepada pengedar
- Akaun pelanggan korporat dengan berbilang lokasi
- Terma kredit dan jadual pembayaran kompleks
- Penetapan harga dan diskaun berasaskan volum
- Berbilang individu kenalan setiap akaun
- Pengurusan hierarki akaun

**Manfaat**: Pengurusan perhubungan B2B yang menyeluruh

### Operasi Rangkaian Runcit
**Senario**: Perniagaan runcit berbilang kedai
- Pangkalan data pelanggan pengguna individu
- Integrasi program kesetiaan
- Penjejakan sejarah pembelian
- Kempen pemasaran diperibadikan
- Keutamaan pelanggan khusus kedai

**Manfaat**: Pengalaman dan pengekalan pelanggan yang dipertingkatkan

### Platform E-Dagang
**Senario**: Marketplace dalam talian dengan beribu-ribu pelanggan
- Pengambilan pelanggan automatik
- Pengurusan profil dalam talian
- Sejarah dan keutamaan pesanan
- Integrasi enjin cadangan
- Pengalaman pelanggan berbilang saluran

**Manfaat**: Pengurusan pelanggan dalam talian yang boleh diskala

### Perniagaan Industri Perkhidmatan
**Senario**: Firma perkhidmatan profesional
- Pengurusan perhubungan pelanggan
- Penjejakan kontrak perkhidmatan
- Automasi pengebilan dan pembayaran
- Sejarah komunikasi
- Penjejakan dan pengurusan rujukan

**Manfaat**: Pengurusan kitaran hayat pelanggan yang lengkap

## Aplet Berkaitan

### Aplet Modul Teras
- **[Aplet Penyelenggaraan Pembekal](/ms/applets/supplier-maintenance-applet/)** - Data induk vendor
- **[Aplet Penyelenggaraan Pekerja](/ms/applets/employee-maintenance-applet/)** - Umpukan pasukan jualan
- **[Aplet Konfigurasi Cukai](/ms/applets/tax-configuration-applet/)** - Tetapan cukai pelanggan

### Aplet Jualan dan CRM
- **[Aplet Pesanan Jualan](/ms/applets/sales-order-applet/)** - Pemprosesan pesanan pelanggan
- **[Aplet Pengurusan Sebut Harga](/ms/applets/quotation-management-applet/)** - Sebut harga pelanggan
- **[Aplet Portal Pelanggan](/ms/applets/customer-portal-applet/)** - Akses pelanggan layan diri

### Aplet Kewangan
- **[Aplet Akaun Belum Terima](/ms/applets/accounts-receivable-applet/)** - Pembayaran pelanggan
- **[Aplet Pengurusan Kredit](/ms/applets/credit-management-applet/)** - Kawalan kredit
- **[Aplet Pengurusan Kutipan](/ms/applets/collection-management-applet/)** - Akaun tertunggak

## Panduan Persediaan

### Permulaan Pantas
1. **Akses Penyelenggaraan Pelanggan** - Navigasi ke aplet
2. **Tentukan Kategori Pelanggan** - Sediakan struktur klasifikasi
3. **Konfigurasikan Terma Pembayaran** - Sediakan terma standard
4. **Cipta Pelanggan Sampel** - Tambah rekod pelanggan ujian
5. **Uji Integrasi** - Sahkan integrasi dengan modul jualan

### Persediaan Lanjutan
1. **Persediaan Hierarki Pelanggan** - Konfigurasikan hubungan induk-anak
2. **Persediaan Pengurusan Kredit** - Konfigurasikan dasar kredit
3. **Konfigurasi Berbilang Alamat** - Sediakan pengurusan alamat
4. **Persediaan Integrasi** - Sambungkan sistem luaran
5. **Konfigurasi Aliran Kerja** - Sediakan proses kelulusan

## Struktur Data Induk Pelanggan

### Maklumat Asas Pelanggan
```yaml
Customer Code: CUS-001
Company Name: ABC Manufacturing Ltd.
Customer Type: B2B Corporate
Industry: Manufacturing
Status: Active
Created Date: 2024-01-15
Sales Representative: John Smith
```

### Maklumat Kenalan
```yaml
Primary Contact:
  Name: Jane Doe
  Title: Purchasing Manager
  Email: jane.doe@abcmfg.com
  Phone: +60-3-1234-5678
  Mobile: +60-12-345-6789

Secondary Contact:
  Name: Bob Johnson
  Title: Finance Director
  Email: bob.johnson@abcmfg.com
  Phone: +60-3-1234-5679
```

### Terma Kewangan
```yaml
Credit Limit: RM 100,000
Payment Terms: NET 30
Currency: MYR
Tax Registration: GST123456789
Account Category: Trade Debtor
Credit Rating: A
Last Credit Review: 2024-06-01
```

### Maklumat Alamat
```yaml
Billing Address:
  Address Line 1: 123 Industrial Park
  Address Line 2: Taman Industri
  City: Shah Alam
  State: Selangor
  Postal Code: 40000
  Country: Malaysia

Shipping Address:
  Address Line 1: Warehouse Complex B
  Address Line 2: Jalan Logistics
  City: Port Klang
  State: Selangor
  Postal Code: 42000
  Country: Malaysia
```

## Amalan Terbaik

### Amalan Terbaik Pengurusan Data
- **Pemiawaian** - Format kemasukan data yang konsisten
- **Kualiti Data** - Pembersihan dan pengesahan data berkala
- **Pengesanan Pendua** - Pencegahan pendua automatik
- **Keselamatan Data** - Kawalan akses dan penyulitan yang betul
- **Strategi Sandaran** - Prosedur sandaran data berkala

### Amalan Terbaik Perhubungan Pelanggan
- **Profil Lengkap** - Maklumat pelanggan yang menyeluruh
- **Kemas Kini Berkala** - Pastikan data pelanggan terkini
- **Sejarah Komunikasi** - Dokumenkan semua interaksi pelanggan
- **Strategi Segmentasi** - Pengkategorian pelanggan yang berkesan
- **Pematuhan Privasi** - Pematuhan GDPR dan undang-undang privasi tempatan

### Amalan Terbaik Pengurusan Kredit
- **Semakan Berkala** - Penilaian had kredit berkala
- **Pemantauan Risiko** - Penilaian risiko kredit berterusan
- **Prosedur Kutipan** - Proses kutipan yang sistematik
- **Terma Pembayaran** - Terma yang jelas dan konsisten
- **Dokumentasi** - Dokumentasi keputusan kredit yang betul

## Penyelesaian Masalah

### Isu Biasa
**Tidak boleh mencipta pelanggan baharu**
- Semak kebenaran pengguna untuk penciptaan pelanggan
- Sahkan medan yang diperlukan telah dilengkapkan
- Pastikan kategori pelanggan dikonfigurasikan
- Semak sekatan kod pelanggan pendua

**Amaran had kredit melebihi**
- Semak tetapan had kredit pelanggan
- Semak jumlah invois tertunggak
- Sahkan ketepatan pengeposan pembayaran
- Semak aliran kerja kelulusan kredit

**Isu penyegerakan integrasi**
- Semak ketersambungan dan kelayakan API
- Sahkan konfigurasi pemetaan data
- Semak log penyegerakan
- Uji kemas kini rekod individu

### Sumber Sokongan
- Panduan persediaan dan konfigurasi pelanggan
- Amalan terbaik pengurusan kredit
- Dokumentasi penyelesaian masalah integrasi
- Panduan pengurusan kualiti data

{{< callout type="tip" >}}
**Petua Pro**: Luangkan masa untuk menyediakan kategori pelanggan dan peraturan kualiti data yang betul dari awal. Data pelanggan yang bersih dan tersusun dengan baik ialah asas operasi jualan dan pemasaran yang berkesan.
{{< /callout >}}
