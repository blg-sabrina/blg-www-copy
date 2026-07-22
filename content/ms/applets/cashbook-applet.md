---
title: "Aplet Cashbook"
description: "Pengurusan akaun tunai dan bank untuk operasi kewangan BigLedger dan penjejakan aliran tunai"
tags:
- core-module
- cash-management
- bank-accounts
- financial-accounting
- cash-flow
weight: 9
---

## Tujuan dan Gambaran Keseluruhan

Aplet Cashbook ialah komponen Modul Teras asas yang menguruskan semua operasi akaun tunai dan bank dalam BigLedger. Aplet ini menyediakan pengurusan tunai menyeluruh, konfigurasi akaun bank, persediaan kaedah pembayaran, dan penjejakan aliran tunai yang menyokong semua transaksi kewangan merentas setiap modul BigLedger.

{{< callout type="info" >}}
**Aplet Modul Teras**: Ini ialah salah satu daripada 13 aplet Modul Teras yang penting, kritikal untuk mana-mana perniagaan yang mengendalikan transaksi tunai, pembayaran bank, atau operasi kewangan.
{{< /callout >}}

### Fungsi Utama
- **Pengurusan Akaun Tunai** - Pengendalian dan kawalan tunai fizikal
- **Konfigurasi Akaun Bank** - Persediaan dan pengurusan berbilang akaun bank
- **Persediaan Kaedah Pembayaran** - Pelbagai konfigurasi kaedah pembayaran
- **Penjejakan Aliran Tunai** - Pemantauan kedudukan tunai masa nyata
- **Penyesuaian Bank** - Penyesuaian penyata bank automatik

## Ciri Utama

### Pengurusan Akaun Tunai
- Berbilang akaun tunai (daftar tunai, tunai runcit, dll.)
- Penjejakan dan pengiraan denominasi tunai
- Prosedur pembukaan dan penutupan tunai harian
- Pelaporan dan penyiasatan varians tunai
- Pengendalian tunai berbilang mata wang
- Langkah keselamatan dan kawalan tunai

### Konfigurasi Akaun Bank
- Persediaan dan pengurusan berbilang akaun bank
- Butiran dan ketersambungan akaun bank
- Integrasi perbankan dalam talian
- Import dan pemprosesan penyata bank
- Sokongan akaun bank berbilang mata wang
- Pengurusan yuran dan caj bank

### Persediaan Kaedah Pembayaran
- Konfigurasi kaedah pembayaran yang menyeluruh
- Integrasi pemprosesan kad kredit
- Sokongan kaedah pembayaran digital (e-dompet, dll.)
- Pemprosesan dan penjelasan cek
- Pengendalian pindahan dawai dan draf bank
- Integrasi gerbang pembayaran

### Pemprosesan Transaksi
- Perekodan transaksi tunai dan bank masa nyata
- Pengeposan automatik ke lejar am
- Aliran kerja pelbagai kelulusan untuk transaksi besar
- Pengkategorian dan pengekodan transaksi
- Keupayaan pembalikan dan pelarasan
- Pemprosesan kelompok untuk transaksi volum tinggi

### Pelaporan dan Analisis
- Laporan kedudukan tunai harian
- Pemantauan baki akaun bank
- Peramalan dan analisis aliran tunai
- Analisis prestasi kaedah pembayaran
- Laporan penyesuaian bank
- Laporan varians dan pengecualian tunai

## Spesifikasi Teknikal

### Keperluan Sistem
- **Tahap Akses Minimum**: Pentadbir Pengurusan Tunai
- **Kebergantungan Pangkalan Data**: Jadual kewangan dan pengurusan tunai
- **Titik Integrasi**: Semua modul kewangan dan transaksi
- **Ketersediaan API**: API pemprosesan transaksi masa nyata
- **Ciri Keselamatan**: Kelulusan pelbagai peringkat dan jejak audit

### Pilihan Konfigurasi Tunai dan Bank
- **Jenis Akaun**: Tunai, Akaun Semasa, Simpanan, Deposit Tetap
- **Sokongan Mata Wang**: 150+ mata wang global
- **Had Transaksi**: Boleh dikonfigurasi setiap akaun dan pengguna
- **Aliran Kerja Kelulusan**: Proses kelulusan pelbagai peringkat
- **API Integrasi**: Sambungan perbankan dan gerbang pembayaran

### Parameter Prestasi
- **Volum Transaksi**: Memproses beribu-ribu transaksi sejam
- **Kemas Kini Masa Nyata**: Kemas kini baki serta-merta merentas modul
- **Pengguna Serentak**: 200+ operasi tunai serentak
- **Penjanaan Laporan**: Laporan kedudukan tunai masa nyata
- **Integrasi Bank**: Penyegerakan baki bank masa nyata

## Titik Integrasi

### Kebergantungan Modul Teras
- **Aplet Carta Akaun** - Pemetaan akaun tunai dan bank
- **Aplet Konfigurasi Cukai** - Pengendalian cukai berkaitan pembayaran
- **Aplet Organisasi** - Pengurusan tunai berbilang lokasi
- **Aplet Penyelenggaraan Pekerja** - Kebenaran pengendali tunai

### Integrasi Modul
| Modul | Tujuan Integrasi |
|--------|-------------------|
| **Jualan & CRM** | Pemprosesan pembayaran pelanggan |
| **Pembelian** | Pemprosesan pembayaran pembekal |
| **Perakaunan Kewangan** | Integrasi lejar am |
| **POS** | Pengendalian tunai tempat jualan |
| **E-Dagang** | Pemprosesan pembayaran dalam talian |
| **Gaji** | Pemprosesan pembayaran pekerja |
| **Pengurusan Perbelanjaan** | Bayaran balik perbelanjaan |

### Integrasi Luaran
- **Sistem Perbankan** - Perbankan dalam talian dan ketersambungan akaun
- **Gerbang Pembayaran** - Pemprosesan kad kredit dan pembayaran digital
- **Perkhidmatan Pengurusan Tunai** - Kereta perisai dan perkhidmatan tunai
- **Perisian Perakaunan** - Penyegerakan data kewangan
- **Sistem Perbendaharaan** - Pengurusan perbendaharaan korporat
- **Perbankan Mudah Alih** - Aplikasi pembayaran dan perbankan mudah alih

## Keperluan Konfigurasi

### Keperluan Persediaan Awal
1. **Butiran Perbankan Syarikat** - Maklumat akaun bank perniagaan
2. **Persediaan Akaun Tunai** - Lokasi tunai fizikal dan daftar
3. **Kaedah Pembayaran** - Konfigurasikan kaedah pembayaran yang diterima
4. **Integrasi Carta Akaun** - Petakan ke akaun GL yang sesuai
5. **Tetapan Keselamatan** - Tahap kebenaran pengendalian tunai

### Konfigurasi Penting
- **Akaun Bank**: Akaun operasi utama, simpanan, akaun pinjaman
- **Daftar Tunai**: Lokasi pengendalian tunai tempat jualan
- **Kaedah Pembayaran**: Tunai, Kad Kredit, Pindahan Bank, Cek
- **Tetapan Mata Wang**: Mata wang asas dan pengendalian pertukaran asing
- **Had Kelulusan**: Ambang kelulusan transaksi

### Konfigurasi Lanjutan
- **Pengurusan Berbilang Bank** - Berbilang perhubungan perbankan
- **Operasi Perbendaharaan** - Pengurusan pelaburan dan pembiayaan
- **Pembayaran Antarabangsa** - Pengendalian pembayaran merentas sempadan
- **Penjelasan Automatik** - Pemprosesan pembayaran elektronik
- **Pengurusan Risiko** - Keselamatan tunai dan pencegahan penipuan

## Kes Penggunaan

### Operasi Kedai Runcit
**Senario**: Rangkaian runcit berbilang lokasi
- Pengurusan daftar tunai tempat jualan
- Pengimbangan dan deposit tunai harian
- Pemprosesan transaksi kad kredit
- Penjejakan pemindahan tunai kedai-ke-bank
- Penyatuan tunai berbilang lokasi

**Manfaat**: Pengurusan tunai runcit yang menyeluruh

### Perniagaan Perkhidmatan
**Senario**: Firma perkhidmatan profesional
- Pemprosesan pembayaran pelanggan
- Pengendalian bayaran balik perbelanjaan
- Pembayaran perbelanjaan operasi
- Automasi penyesuaian bank
- Peramalan aliran tunai

**Manfaat**: Operasi tunai perniagaan perkhidmatan yang diperkemas

### Syarikat Pembuatan
**Senario**: Kemudahan pengeluaran dengan pembekal
- Pemprosesan pembayaran pembekal
- Pengurusan pendahuluan pekerja
- Tunai runcit untuk perbelanjaan operasi
- Kelulusan perbelanjaan modal besar
- Pembayaran pembekal berbilang mata wang

**Manfaat**: Pengurusan tunai pembuatan yang cekap

### Perniagaan E-Dagang
**Senario**: Peruncit dalam talian dengan berbilang kaedah pembayaran
- Integrasi gerbang pembayaran dalam talian
- Pemprosesan bayaran balik dan pemulangan
- Pembayaran pelanggan berbilang mata wang
- Penyesuaian bank automatik
- Pengesahan pembayaran masa nyata

**Manfaat**: Pemprosesan pembayaran e-dagang yang lancar

## Aplet Berkaitan

### Aplet Modul Teras
- **[Aplet Carta Akaun](/ms/applets/chart-of-account-applet/)** - Integrasi struktur akaun
- **[Aplet Konfigurasi Cukai](/ms/applets/tax-configuration-applet/)** - Pengendalian cukai pembayaran
- **[Aplet Organisasi](/ms/applets/organization-applet/)** - Pengurusan tunai berbilang lokasi

### Aplet Kewangan
- **[Aplet Akaun Belum Terima](/ms/applets/accounts-receivable-applet/)** - Pemprosesan pembayaran pelanggan
- **[Aplet Akaun Belum Bayar](/ms/applets/accounts-payable-applet/)** - Pemprosesan pembayaran pembekal
- **[Aplet Penyesuaian Bank](/ms/applets/bank-reconciliation-applet/)** - Penyesuaian automatik

### Aplet Pemprosesan Transaksi
- **[Aplet Pemprosesan Pembayaran](/ms/applets/payment-processing-applet/)** - Pengendalian pembayaran lanjutan
- **[Aplet Pengurusan Aliran Tunai](/ms/applets/cash-flow-management-applet/)** - Analisis aliran tunai
- **[Aplet Pengurusan Perbendaharaan](/ms/applets/treasury-management-applet/)** - Perbendaharaan korporat

## Panduan Persediaan

### Permulaan Pantas
1. **Akses Konfigurasi Cashbook** - Navigasi ke aplet
2. **Persediaan Akaun Bank** - Konfigurasikan akaun bank utama
3. **Persediaan Daftar Tunai** - Sediakan lokasi tunai fizikal
4. **Konfigurasi Kaedah Pembayaran** - Konfigurasikan jenis pembayaran yang diterima
5. **Uji Pemprosesan Transaksi** - Proses transaksi sampel

### Persediaan Lanjutan
1. **Integrasi Berbilang Bank** - Sambungkan berbilang perhubungan perbankan
2. **Integrasi Gerbang Pembayaran** - Sediakan pemprosesan kad kredit
3. **Penyesuaian Automatik** - Konfigurasikan import penyata bank
4. **Persediaan Aliran Kerja Kelulusan** - Konfigurasikan kelulusan transaksi
5. **Konfigurasi Pelaporan** - Sediakan laporan pengurusan tunai

## Struktur Akaun Tunai dan Bank

### Konfigurasi Akaun Bank
```yaml
Account Name: Primary Operating Account
Bank: Maybank Berhad
Account Number: 514234567890
Account Type: Current Account
Currency: MYR
Online Banking: Enabled
Statement Import: Automated Daily
GL Account: 1001 - Cash at Bank
Authorization Required: >RM 10,000
```

### Persediaan Daftar Tunai
```yaml
Register Name: Main Counter Register
Location: Store Front - Counter 1
Currency: MYR
Opening Float: RM 500.00
Maximum Amount: RM 5,000.00
GL Account: 1000 - Cash on Hand
Responsible Person: Cashier-001
Counting Required: Daily Close
```

### Konfigurasi Kaedah Pembayaran
```yaml
Payment Method: Credit Card
Type: Electronic Payment
Processor: iPay88
Processing Fee: 2.5%
Settlement Period: T+2 days
GL Account: 1002 - Credit Card Receivable
Refund Policy: Same Method
Daily Limit: RM 50,000
```

## Amalan Terbaik

### Amalan Terbaik Pengurusan Tunai
- **Pengasingan Tugas** - Asingkan pengendalian dan perekodan tunai
- **Penyesuaian Berkala** - Penyesuaian tunai dan bank harian
- **Kawalan Kelulusan** - Kelulusan pelbagai peringkat untuk transaksi besar
- **Jejak Audit** - Dokumentasi transaksi yang lengkap
- **Langkah Keselamatan** - Kawalan keselamatan fizikal dan sistem

### Amalan Terbaik Pengurusan Akaun Bank
- **Pemantauan Akaun** - Pemantauan baki akaun bank berkala
- **Semakan Penyata** - Semakan dan import penyata bank harian
- **Pengurusan Perhubungan** - Kekalkan perhubungan perbankan yang baik
- **Perbankan Sandaran** - Berbilang perhubungan perbankan untuk lebihan
- **Pengurusan Kos** - Pantau dan minimumkan yuran perbankan

### Amalan Terbaik Pemprosesan Pembayaran
- **Pengoptimuman Kaedah** - Optimumkan gabungan kaedah pembayaran untuk kos
- **Pengurusan Risiko** - Pantau dan kawal risiko pembayaran
- **Keselesaan Pelanggan** - Tawarkan berbilang pilihan pembayaran
- **Kecekapan Pemprosesan** - Automasikan pemprosesan pembayaran jika boleh
- **Pematuhan Peraturan** - Ikuti peraturan industri pembayaran

## Penyelesaian Masalah

### Isu Biasa
**Percanggahan penyesuaian bank**
- Semak ketepatan import penyata bank
- Sahkan kelengkapan pengeposan transaksi
- Semak perbezaan masa dan potongan
- Sahkan perekodan yuran dan caj bank

**Varians daftar tunai**
- Sahkan prosedur pengiraan tunai
- Semak ketepatan perekodan transaksi
- Semak proses pengendalian tunai
- Siasat pergerakan tunai yang luar biasa

**Ralat pemprosesan pembayaran**
- Semak ketersambungan gerbang pembayaran
- Sahkan konfigurasi akaun peniaga
- Semak tetapan kaedah pembayaran
- Sahkan ketersambungan rangkaian dan sistem

### Sumber Sokongan
- Panduan persediaan dan prosedur pengurusan tunai
- Dokumentasi konfigurasi integrasi bank
- Panduan penyelesaian masalah gerbang pembayaran
- Panduan amalan terbaik penyesuaian tunai

{{< callout type="warning" >}}
**Kritikal Keselamatan**: Operasi tunai dan bank memerlukan kawalan keselamatan yang ketat. Laksanakan pengasingan tugas, aliran kerja kelulusan, dan jejak audit yang betul untuk mencegah penipuan dan memastikan ketepatan.
{{< /callout >}}
