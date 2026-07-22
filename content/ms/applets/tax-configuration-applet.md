---
title: "Aplet Konfigurasi Cukai"
description: "Persediaan dan pengurusan cukai yang lengkap untuk pematuhan dan operasi kewangan BigLedger"
tags:
- core-module
- tax-management
- compliance
- gst
- sst
- vat
weight: 8
---

## Tujuan dan Gambaran Keseluruhan

Aplet Konfigurasi Cukai ialah komponen Modul Teras yang kritikal yang menguruskan semua konfigurasi berkaitan cukai dalam BigLedger. Aplet ini menyediakan persediaan cukai yang komprehensif, pengurusan pematuhan, dan pengiraan cukai automatik yang menyokong semua transaksi bercukai merentas setiap modul BigLedger.

{{< callout type="info" >}}
**Aplet Modul Teras**: Ini ialah salah satu daripada 13 aplet Modul Teras yang penting, diperlukan oleh semua modul yang menjana transaksi bercukai termasuk Jualan, Pembelian, E-Dagang, POS, dan Perakaunan Kewangan.
{{< /callout >}}

### Fungsi Utama
- **Pengurusan Kod Cukai** - Persediaan dan konfigurasi kod cukai yang lengkap
- **Konfigurasi Kadar Cukai** - Kadar cukai semasa dan sejarah
- **Pengurusan Pematuhan** - Pelaporan dan penyerahan kawal selia
- **Enjin Pengiraan Cukai** - Pengiraan cukai automatik
- **Sokongan Pelbagai Bidang Kuasa** - Pelbagai pihak berkuasa cukai dan wilayah

## Ciri Utama

### Pengurusan Kod dan Kadar Cukai
- Pustaka kod cukai yang komprehensif (GST, SST, VAT, Cukai Jualan)
- Konfigurasi kadar cukai dengan tarikh berkuat kuasa
- Penjejakan dan perubahan kadar cukai sejarah
- Pengurusan pengecualian cukai dan pengadaran sifar
- Pengiraan cukai kompaun dan berlata
- Import/eksport konfigurasi cukai

### Pihak Berkuasa Cukai dan Bidang Kuasa
- Sokongan pelbagai pihak berkuasa cukai
- Pemetaan bidang kuasa cukai geografi
- Peraturan cukai antara negeri dan antarabangsa
- Pengurusan nombor pendaftaran cukai
- Keperluan pelaporan khusus pihak berkuasa
- Kalendar pematuhan dan tarikh akhir

### Kumpulan dan Kategori Cukai
- Pengkategorian cukai produk/perkhidmatan
- Klasifikasi cukai pelanggan/pembekal
- Peraturan cukai berasaskan transaksi
- Layanan cukai khusus industri
- Kadar cukai promosi dan percutian
- Persediaan mekanisme caj balik

### Pengiraan Cukai Automatik
- Enjin pengiraan cukai masa nyata
- Percukaian pada peringkat item baris dan dokumen
- Pelarasan cukai diskaun dan tokokan
- Peraturan pembundaran dan tetapan ketepatan
- Harga termasuk cukai dan tidak termasuk cukai
- Pengiraan cukai berasaskan mata wang

### Pematuhan dan Pelaporan
- Penjanaan laporan cukai berkanun
- Penyediaan dan pemfailan penyata cukai
- Jejak audit dan log transaksi cukai
- Pemantauan pematuhan dan makluman
- Keupayaan integrasi e-pemfailan
- Pengurusan surat-menyurat pihak berkuasa cukai

## Spesifikasi Teknikal

### Keperluan Sistem
- **Tahap Akses Minimum**: Pentadbir Cukai
- **Kebergantungan Pangkalan Data**: Jadual konfigurasi cukai
- **Titik Integrasi**: Semua modul yang menjana transaksi
- **Ketersediaan API**: API pengiraan dan pelaporan cukai
- **Pemprosesan Masa Nyata**: Pengiraan cukai serta-merta

### Pilihan Konfigurasi Cukai
- **Kod Cukai**: Sehingga 500 kod cukai setiap bidang kuasa
- **Kadar Cukai**: Ketepatan sehingga 6 tempat perpuluhan
- **Tarikh Berkuat Kuasa**: Penjejakan kadar sejarah tanpa had
- **Pihak Berkuasa Cukai**: Sokongan untuk pelbagai bidang kuasa
- **Peraturan Tersuai**: Konfigurasi peraturan cukai yang fleksibel

### Parameter Prestasi
- **Kelajuan Pengiraan**: <100ms untuk pengiraan cukai yang kompleks
- **Isi Padu Transaksi**: Berjuta-juta pengiraan cukai setiap hari
- **Pengguna Serentak**: 1,000+ pengguna serentak
- **Penjanaan Laporan**: Laporan cukai besar dalam <30 saat
- **Pengekalan Data**: 10+ tahun sejarah transaksi cukai

## Titik Integrasi

### Kebergantungan Modul Teras
- **Aplet Carta Akaun** - Akaun liabiliti dan perbelanjaan cukai
- **Aplet Penyelenggaraan Pelanggan** - Klasifikasi cukai pelanggan
- **Aplet Penyelenggaraan Pembekal** - Tetapan cukai vendor
- **Aplet Organisasi** - Butiran pendaftaran cukai syarikat

### Integrasi Modul
| Modul | Tujuan Integrasi |
|--------|-------------------|
| **Jualan & CRM** | Pengiraan dan pelaporan cukai jualan |
| **Pembelian** | Cukai pembelian dan pengurusan kredit input |
| **E-Dagang** | Pemprosesan cukai transaksi dalam talian |
| **POS** | Pengiraan cukai di tempat jualan |
| **Perakaunan Kewangan** | Pengeposan dan penyesuaian cukai |
| **Inventori** | Kesan cukai penilaian stok |
| **Pembuatan** | Pengendalian cukai berkaitan pengeluaran |
| **Perdagangan Antarabangsa** | Pengurusan cukai import/eksport |

### Integrasi Luaran
- **Sistem Pihak Berkuasa Cukai** - Pemfailan dan penyerahan elektronik
- **Perisian Perakaunan** - Penyegerakan data cukai
- **Platform E-Dagang** - Perkhidmatan pengiraan cukai dalam talian
- **Sistem Perbankan** - Pemprosesan pembayaran cukai
- **Perkhidmatan Perundingan Cukai** - Integrasi khidmat nasihat cukai profesional
- **Perisian Pematuhan** - Sistem pemantauan kawal selia

## Keperluan Konfigurasi

### Keperluan Persediaan Awal
1. **Pendaftaran Cukai Syarikat** - Daftar butiran cukai perniagaan
2. **Pihak Berkuasa Cukai** - Konfigurasikan bidang kuasa cukai yang berkaitan
3. **Kod Cukai Asas** - Sediakan kadar cukai standard (GST/SST/VAT)
4. **Akaun Cukai** - Petakan kod cukai kepada carta akaun
5. **Tempoh Cukai** - Tentukan tempoh pelaporan cukai

### Konfigurasi Penting
- **Kadar Cukai Standard**: 0%, 6% GST, 10% SST, dsb.
- **Kategori Cukai**: Standard, Kadar sifar, Dikecualikan, Luar skop
- **Jenis Cukai**: Cukai Output, Cukai Input, Caj Balik
- **Akaun Cukai**: Akaun Cukai Kena Bayar, Cukai Boleh Diperoleh Semula
- **Tempoh Pelaporan**: Bulanan, Suku Tahunan, Tahunan

### Konfigurasi Lanjutan
- **Cukai Pelbagai Bidang Kuasa** - Peraturan cukai pelbagai negara/negeri
- **Cukai Khusus Industri** - Layanan cukai khusus
- **Kadar Cukai Promosi** - Pengurangan cukai sementara
- **Peraturan Cukai Kompleks** - Cukai kompaun dan berlata
- **Integrasi E-Pemfailan** - Penyerahan cukai automatik

## Kes Penggunaan

### Perniagaan Malaysia (GST/SST)
**Senario**: Syarikat pembuatan di Malaysia
- Pendaftaran dan konfigurasi GST
- SST ke atas perkhidmatan dan barangan import
- Persediaan kadar sifar eksport
- Penyediaan penyata GST bulanan
- Pelaporan SST suku tahunan

**Manfaat**: Pematuhan cukai Malaysia yang lengkap

### Operasi Pelbagai Negara
**Senario**: Perniagaan antarabangsa dengan pelbagai pejabat
- Konfigurasi cukai khusus negara
- Peraturan cukai transaksi antara syarikat
- Implikasi cukai penetapan harga pindahan
- Pelaporan cukai disatukan
- Pengiraan cukai berasaskan mata wang

**Manfaat**: Pengurusan cukai antarabangsa yang komprehensif

### Perniagaan E-Dagang
**Senario**: Peruncit dalam talian yang menjual merentas wilayah
- Pengiraan cukai berasaskan destinasi
- Peraturan pungutan cukai pasar
- Pengendalian cukai perkhidmatan digital
- Percukaian berasaskan lokasi pelanggan
- Pematuhan cukai automatik

**Manfaat**: Pematuhan cukai dalam talian yang lancar

### Industri Perkhidmatan
**Senario**: Firma perkhidmatan profesional
- Konfigurasi cukai perkhidmatan
- Mekanisme caj balik
- Pengecualian perkhidmatan profesional
- Percukaian berasaskan lokasi pelanggan
- Kadar sifar eksport perkhidmatan

**Manfaat**: Pengurusan cukai industri perkhidmatan yang tepat

## Aplet Berkaitan

### Aplet Modul Teras
- **[Aplet Carta Akaun](/ms/applets/chart-of-account-applet/)** - Pemetaan akaun cukai
- **[Aplet Penyelenggaraan Pelanggan](/ms/applets/customer-maintenance-applet/)** - Tetapan cukai pelanggan
- **[Aplet Penyelenggaraan Pembekal](/ms/applets/supplier-maintenance-applet/)** - Konfigurasi cukai vendor

### Aplet Kewangan
- **[Aplet Pelaporan Cukai](/ms/applets/tax-reporting-applet/)** - Laporan cukai berkanun
- **[Aplet Pembayaran Cukai](/ms/applets/tax-payment-applet/)** - Pemprosesan pembayaran cukai
- **[Aplet Penyesuaian Cukai](/ms/applets/tax-reconciliation-applet/)** - Penyesuaian akaun cukai

### Aplet Transaksi
- **[Aplet Cukai Jualan](/ms/applets/sales-tax-applet/)** - Percukaian transaksi jualan
- **[Aplet Cukai Pembelian](/ms/applets/purchase-tax-applet/)** - Percukaian transaksi pembelian
- **[Aplet Cukai E-Dagang](/ms/applets/ecommerce-tax-applet/)** - Percukaian transaksi dalam talian

## Panduan Persediaan

### Permulaan Pantas
1. **Akses Konfigurasi Cukai** - Navigasi ke aplet
2. **Persediaan Cukai Syarikat** - Masukkan butiran pendaftaran cukai perniagaan
3. **Kod Cukai Asas** - Cipta kadar cukai standard
4. **Pemetaan Akaun** - Pautkan kod cukai kepada akaun
5. **Uji Pengiraan** - Sahkan ketepatan pengiraan cukai

### Persediaan Lanjutan
1. **Konfigurasi Pelbagai Bidang Kuasa** - Sediakan pelbagai pihak berkuasa cukai
2. **Peraturan Cukai Kompleks** - Konfigurasikan cukai kompaun dan berlata
3. **Integrasi E-Pemfailan** - Sambung dengan sistem pihak berkuasa cukai
4. **Automasi Pelaporan** - Sediakan penjanaan laporan automatik
5. **Pemantauan Pematuhan** - Konfigurasikan makluman dan aliran kerja pematuhan

## Contoh Konfigurasi Cukai

### Persediaan GST/SST Malaysia
```yaml
Tax Authority: Malaysia Royal Customs Department
Business Registration: GST123456789

Standard GST:
  Tax Code: GST-STD
  Rate: 6%
  Account: 2100 - GST Payable
  Type: Output Tax

Zero-Rated GST:
  Tax Code: GST-ZR
  Rate: 0%
  Account: 2100 - GST Payable
  Type: Zero-rated

SST on Services:
  Tax Code: SST-SRV
  Rate: 6%
  Account: 2110 - SST Payable
  Type: Service Tax

Input Tax:
  Tax Code: GST-IN
  Rate: 6%
  Account: 1350 - GST Recoverable
  Type: Input Tax
```

### Persediaan GST Singapura
```yaml
Tax Authority: Inland Revenue Authority of Singapore
Business Registration: GST200123456

Standard GST:
  Tax Code: SG-GST
  Rate: 8%
  Account: 2100 - GST Payable
  Type: Output Tax

Zero-Rated Export:
  Tax Code: SG-ZR
  Rate: 0%
  Account: 2100 - GST Payable
  Type: Zero-rated Export
```

## Amalan Terbaik

### Amalan Terbaik Konfigurasi Cukai
- **Kemas Kini Berkala** - Kekalkan kadar cukai terkini dengan perubahan kawal selia
- **Sandaran Konfigurasi** - Sandaran tetapan cukai secara berkala
- **Persekitaran Ujian** - Uji perubahan cukai sebelum pengeluaran
- **Dokumentasi** - Kekalkan dokumentasi konfigurasi cukai
- **Kawalan Akses** - Hadkan akses konfigurasi cukai

### Amalan Terbaik Pematuhan
- **Kajian Berkala** - Penilaian pematuhan cukai secara berkala
- **Penyediaan Audit** - Kekalkan rekod cukai yang komprehensif
- **Nasihat Profesional** - Perundingan berkala dengan penasihat cukai
- **Kemas Kini Sistem** - Ikuti keperluan pihak berkuasa cukai
- **Program Latihan** - Latihan cukai berkala untuk kakitangan

### Amalan Terbaik Pengiraan Cukai
- **Pengesahan Ketepatan** - Ujian pengiraan cukai secara berkala
- **Peraturan Pembundaran** - Konfigurasi pembundaran yang betul
- **Pengendalian Pengecualian** - Prosedur pengecualian cukai yang jelas
- **Pemantauan Prestasi** - Pantau prestasi pengiraan cukai
- **Penyelesaian Ralat** - Proses penyelesaian ralat cukai yang sistematik

## Penyelesaian Masalah

### Isu Biasa
**Pengiraan cukai tidak tepat**
- Sahkan konfigurasi kod cukai
- Semak tarikh berkuat kuasa kadar cukai
- Kaji tetapan cukai pelanggan/pembekal
- Sahkan ketepatan pemetaan akaun

**Percanggahan laporan cukai**
- Semak pengeposan cukai transaksi
- Sahkan pemotongan akhir tempoh
- Kaji pelarasan cukai manual
- Sahkan keperluan pihak berkuasa cukai

**Ralat penyerahan e-pemfailan**
- Sahkan kelayakan pihak berkuasa cukai
- Semak keperluan format data
- Kaji ketersambungan rangkaian
- Sahkan tarikh akhir penyerahan

### Sumber Sokongan
- Panduan persediaan konfigurasi cukai
- Dokumentasi keperluan pematuhan
- Panduan penyelesaian masalah pengiraan cukai
- Dokumentasi integrasi e-pemfailan

{{< callout type="warning" >}}
**Kritikal untuk Pematuhan**: Konfigurasi cukai memberi kesan langsung kepada pematuhan kawal selia. Sentiasa berunding dengan profesional cukai yang berkelayakan dan uji dengan teliti sebelum melaksanakan perubahan dalam pengeluaran.
{{< /callout >}}
