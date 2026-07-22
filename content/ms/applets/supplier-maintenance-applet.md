---
title: "Applet Supplier Maintenance"
description: "Pengurusan data induk vendor dan pembekal yang menyeluruh untuk operasi perolehan BigLedger"
tags:
- core-module
- supplier-management
- procurement
- vendor-management
- master-data
weight: 6
---

## Ringkasan Eksekutif

Applet Supplier Maintenance ialah komponen Modul Teras kritikal yang berfungsi sebagai repositori pusat untuk semua maklumat vendor dan pembekal dalam BigLedger. Sistem pengurusan data induk pembekal yang menyeluruh ini menyokong operasi perolehan, proses akaun belum bayar, dan pengurusan hubungan vendor merentas semua modul perniagaan. Dengan keupayaan untuk mengurus sehingga 500,000 pembekal, penyegerakan masa nyata, dan titik integrasi yang meluas, applet ini membentuk tulang belakang operasi rantaian bekalan yang cekap.

**Faedah Perniagaan Utama:**
- Pengurusan maklumat pembekal berpusat mengurangkan pertindihan data
- Aliran kerja perolehan automatik meningkatkan kecekapan operasi
- Penjejakan prestasi vendor menyeluruh untuk membuat keputusan strategik
- Pemprosesan kewangan bersepadu untuk operasi akaun belum bayar yang lancar
- Seni bina berskala menyokong pertumbuhan daripada perniagaan kecil kepada perusahaan besar

**Kepentingan Strategik:**
Sebagai salah satu daripada 13 applet Modul Teras yang penting, Applet Supplier Maintenance adalah asas untuk mana-mana organisasi yang membeli barangan atau perkhidmatan daripada vendor luar. Ia menyediakan asas data yang membolehkan strategi perolehan yang berkesan, pengoptimuman kos, dan pengurusan risiko rantaian bekalan.

## Tujuan dan Gambaran Keseluruhan

Applet Supplier Maintenance ialah hab pusat untuk mengurus semua maklumat vendor dan pembekal dalam BigLedger. Applet Modul Teras ini menyediakan pengurusan data induk pembekal yang menyeluruh yang menyokong perolehan, akaun belum bayar, dan pengurusan hubungan vendor merentas semua modul.

{{< callout type="info" >}}
**Applet Modul Teras**: Ini ialah salah satu daripada 13 applet Modul Teras yang penting, kritikal untuk mana-mana perniagaan yang membeli barangan atau perkhidmatan daripada vendor luar.
{{< /callout >}}

### Fungsi Utama
- **Pengurusan Profil Vendor** - Repositori maklumat pembekal yang lengkap
- **Pengurusan Terma Perolehan** - Terma dan syarat pembayaran
- **Penjejakan Prestasi Pembekal** - Pemantauan kualiti dan penghantaran
- **Pengkategorian Vendor** - Klasifikasi dan segmentasi
- **Integrasi Kewangan** - Akaun belum bayar dan pemprosesan pembayaran

## Ciri-ciri Utama

### Pengurusan Maklumat Pembekal
- Profil pembekal lengkap dengan maklumat terperinci
- Berbilang orang hubungan setiap pembekal
- Sejarah komunikasi dan interaksi pembekal
- Lampiran dokumen dan pensijilan
- Keupayaan dan pengkhususan pembekal
- Sokongan berbilang bahasa untuk pembekal antarabangsa

### Pengurusan Perolehan dan Pembayaran
- Terma dan syarat pembayaran pembekal
- Perjanjian dan kontrak pembelian
- Struktur harga dan diskaun volum
- Pengendalian mata wang dan pembayaran antarabangsa
- Tetapan automasi pesanan pembelian
- Terma dan had kredit pembekal

### Klasifikasi dan Segmentasi Pembekal
- Kategori dan jenis pembekal
- Lokasi dan liputan geografi
- Klasifikasi pengkhususan industri
- Keutamaan dan kepentingan strategik pembekal
- Penjejakan pematuhan dan pensijilan
- Penilaian dan pemantauan risiko

### Pengurusan Prestasi dan Kualiti
- Metrik prestasi dan KPI pembekal
- Penarafan dan penilaian kualiti
- Penjejakan prestasi penghantaran
- Analisis daya saing kos
- Pemantauan perjanjian tahap perkhidmatan
- Sejarah audit dan penilaian pembekal

### Pengurusan Hubungan dan Komunikasi
- Integrasi portal pembekal
- Sejarah komunikasi dan nota
- Sejarah dan hasil rundingan
- Penjejakan perkongsian dan kerjasama
- Program pembangunan pembekal
- Pelan maklum balas dan penambahbaikan

## Spesifikasi Teknikal

### Keperluan Sistem
- **Tahap Akses Minimum**: Procurement Administrator
- **Kebergantungan Pangkalan Data**: Jadual induk pembekal
- **Titik Integrasi**: Modul perolehan, kewangan
- **Ketersediaan API**: Operasi CRUD penuh dengan pemprosesan pukal
- **Storan Dokumen**: Lampiran pensijilan tanpa had

### Pilihan Konfigurasi Pembekal
- **Panjang Kod Pembekal**: 3-50 aksara
- **Entri Alamat**: Sehingga 15 alamat setiap pembekal
- **Orang Hubungan**: Sehingga 30 hubungan setiap pembekal
- **Medan Tersuai**: Sehingga 25 medan tersuai
- **Lampiran Dokumen**: Pelbagai jenis fail, sehingga 500MB keseluruhan

### Parameter Prestasi
- **Kapasiti Pembekal**: Sehingga 500,000 pembekal
- **Prestasi Carian**: <1 saat untuk carian kompleks
- **Operasi Pukal**: Memproses 2,000+ pembekal setiap kelompok
- **Pengguna Serentak**: 300+ pengguna serentak
- **Kemas Kini Masa Nyata**: Penyegerakan segera merentas modul

## Titik Integrasi

### Kebergantungan Modul Teras
- **Applet Tax Configuration** - Tetapan cukai pembekal
- **Applet Chart of Account** - Pemetaan akaun pembekal
- **Applet Organization** - Perolehan berbilang lokasi
- **Applet Employee Maintenance** - Penetapan pasukan perolehan

### Integrasi Modul
| Modul | Tujuan Integrasi |
|--------|-------------------|
| **Purchasing** | Pesanan pembelian dan operasi perolehan |
| **Financial Accounting** | Akaun belum bayar dan pembayaran |
| **Inventory Management** | Maklumat produk pembekal dan masa lohong |
| **Manufacturing** | Pembekal bahan mentah dan subkontraktor |
| **Quality Management** | Penilaian kualiti pembekal |
| **Project Management** | Penetapan vendor khusus projek |
| **Asset Management** | Pembekal peralatan modal |

### Integrasi Luaran
- **Portal Pembekal** - Platform komunikasi pembekal langsung
- **Sistem EDI** - Pertukaran data elektronik untuk pesanan
- **Sistem Perbankan** - Pemprosesan dan pemindahan pembayaran
- **Agensi Kredit** - Pemantauan kesihatan kewangan pembekal
- **Penyedia Logistik** - Koordinasi penghantaran dan pengedaran
- **Sistem Pematuhan** - Pengesahan kawal selia dan pensijilan

## Keperluan Konfigurasi

### Keperluan Persediaan Awal
1. **Kategori Pembekal** - Takrif struktur klasifikasi pembekal
2. **Terma Pembayaran** - Sediakan syarat pembayaran standard
3. **Perjanjian Pembelian** - Konfigurasi templat kontrak
4. **Wilayah Geografi** - Takrif wilayah pembekal
5. **Sistem Penomboran** - Sediakan struktur pengekodan pembekal

### Konfigurasi Penting
- **Jenis Pembekal**: Bahan, Perkhidmatan, Peralatan, Subkontraktor
- **Kaedah Pembayaran**: Pemindahan Bank, Cek, Kad Kredit, Tunai
- **Terma Pembayaran**: NET 30, NET 60, 2/10 NET 30, COD, Prabayar
- **Piawaian Kualiti**: Keperluan dan piawaian pensijilan
- **Keperluan Pematuhan**: Keperluan kawal selia dan undang-undang

### Konfigurasi Lanjutan
- **Hierarki Pembekal** - Hubungan induk-anak syarikat
- **Sokongan Berbilang Mata Wang** - Pengendalian pembekal antarabangsa
- **Aliran Kerja Kelulusan** - Pendaftaran dan perubahan pembekal
- **Penilaian Risiko** - Penilaian risiko kewangan dan operasi
- **Kad Skor Prestasi** - Penjejakan dan pelaporan KPI

## Kes Penggunaan

### Syarikat Pembuatan
**Senario**: Kemudahan pengeluaran dengan berbilang pembekal bahan
- Pengurusan pembekal bahan mentah
- Penjejakan pensijilan kualiti
- Pemantauan prestasi penghantaran
- Analisis dan rundingan kos
- Pengurusan risiko rantaian bekalan

**Faedah**: Operasi rantaian bekalan yang dioptimumkan dan kawalan kos

### Organisasi Perkhidmatan
**Senario**: Firma perundingan dengan subkontraktor
- Rangkaian penyedia perkhidmatan profesional
- Pengurusan kelayakan kontraktor
- Penetapan pembekal berasaskan projek
- Penilaian kualiti perkhidmatan
- Penjejakan pematuhan dan pensijilan

**Faedah**: Pengurusan rangkaian subkontraktor yang berkesan

### Rangkaian Runcit
**Senario**: Operasi runcit berbilang kedai
- Pengurusan pembekal dan vendor produk
- Perjanjian pembelian volum
- Koordinasi pembekal bermusim
- Pengurusan pembekal label peribadi
- Koordinasi pembekal cross-docking

**Faedah**: Pengurusan rantaian bekalan runcit yang cekap

### Syarikat Pembinaan
**Senario**: Projek bangunan dan infrastruktur
- Pengurusan subkontraktor dan pembekal bahan
- Penetapan pembekal khusus projek
- Penjejakan pematuhan dan pensijilan keselamatan
- Pengurusan pembekal sewaan peralatan
- Penjejakan bon prestasi dan insurans

**Faedah**: Pengurusan pembekal projek yang menyeluruh

## Applet Berkaitan

### Applet Modul Teras
- **[Applet Customer Maintenance](/ms/applets/customer-maintenance-applet/)** - Data induk pelanggan
- **[Applet Inventory Item Maintenance](/ms/applets/inv-item-maintenance-applet/)** - Hubungan produk pembekal
- **[Applet Tax Configuration](/ms/applets/tax-configuration-applet/)** - Tetapan cukai pembekal

### Applet Perolehan
- **[Applet Purchase Order](/ms/applets/purchase-order-applet/)** - Pemprosesan pesanan pembekal
- **[Applet Purchase Requisition](/ms/applets/purchase-requisition-applet/)** - Permintaan perolehan
- **[Applet Supplier Portal](/ms/applets/supplier-portal-applet/)** - Layan diri pembekal

### Applet Kewangan
- **[Applet Accounts Payable](/ms/applets/accounts-payable-applet/)** - Pembayaran pembekal
- **[Applet Payment Processing](/ms/applets/payment-processing-applet/)** - Pembayaran vendor
- **[Applet Expense Management](/ms/applets/expense-management-applet/)** - Perbelanjaan pembekal

## Panduan Persediaan

### Permulaan Pantas
1. **Akses Supplier Maintenance** - Navigasi ke applet
2. **Takrif Kategori Pembekal** - Sediakan struktur klasifikasi
3. **Konfigurasi Terma Pembayaran** - Sediakan terma standard
4. **Cipta Pembekal Contoh** - Tambah rekod pembekal ujian
5. **Uji Integrasi** - Sahkan integrasi dengan modul pembelian

### Persediaan Lanjutan
1. **Persediaan Prestasi Pembekal** - Konfigurasi penjejakan KPI
2. **Persediaan Pengurusan Kualiti** - Konfigurasi penjejakan pensijilan
3. **Konfigurasi Berbilang Alamat** - Sediakan lokasi penghantaran
4. **Persediaan Integrasi** - Sambungkan sistem luaran
5. **Konfigurasi Aliran Kerja** - Sediakan proses kelulusan

## Struktur Data Induk Pembekal

### Maklumat Asas Pembekal
```yaml
Supplier Code: SUP-001
Company Name: Global Materials Supply Co.
Supplier Type: Material Supplier
Industry: Chemical Manufacturing
Status: Active
Registration Date: 2024-01-10
Procurement Manager: Sarah Wilson
```

### Maklumat Hubungan
```yaml
Primary Contact:
  Name: Michael Chen
  Title: Sales Manager
  Email: michael.chen@globalmaterials.com
  Phone: +65-6234-5678
  Mobile: +65-9123-4567

Secondary Contact:
  Name: Lisa Wang
  Title: Customer Service Manager
  Email: lisa.wang@globalmaterials.com
  Phone: +65-6234-5679
```

### Maklumat Kewangan dan Pembayaran
```yaml
Payment Terms: NET 45
Currency: USD
Tax Registration: GST987654321
Bank Account: HSBC Singapore
Payment Method: Bank Transfer
Credit Limit: USD 250,000
Payment History: Excellent
Last Payment: 2024-07-15
```

### Maklumat Operasi
```yaml
Lead Time: 14 days
Minimum Order: USD 5,000
Quality Rating: A+
Delivery Performance: 98.5%
Cost Competitiveness: High
Certifications:
  - ISO 9001:2015
  - ISO 14001:2015
  - OHSAS 18001
```

## Amalan Terbaik

### Amalan Terbaik Pengurusan Data Pembekal
- **Profil Lengkap** - Maklumat pembekal yang menyeluruh
- **Kemas Kini Berkala** - Pastikan data pembekal semasa dan tepat
- **Penyeragaman** - Format kemasukan data yang konsisten
- **Dokumentasi** - Penyimpanan pensijilan dan kontrak yang betul
- **Keselamatan Data** - Pengendalian selamat maklumat pembekal yang sensitif

### Amalan Terbaik Hubungan Pembekal
- **Pemantauan Prestasi** - Semakan prestasi pembekal berkala
- **Komunikasi** - Komunikasi pembekal yang jelas dan konsisten
- **Pendekatan Perkongsian** - Hubungan pembekal secara kolaboratif
- **Pengurusan Risiko** - Penilaian risiko pembekal secara proaktif
- **Program Pembangunan** - Inisiatif penambahbaikan keupayaan pembekal

### Amalan Terbaik Perolehan
- **Sumber Strategik** - Selaraskan pembekal dengan strategi perniagaan
- **Pengurusan Kos** - Analisis dan rundingan kos berkala
- **Jaminan Kualiti** - Piawaian dan pemantauan kualiti yang konsisten
- **Daya Tahan Rantaian Bekalan** - Asas pembekal yang pelbagai
- **Pengurusan Pematuhan** - Pematuhan kawal selia dan etika

## Penyelesaian Masalah

### Isu Biasa
**Tidak boleh mencipta pembekal baharu**
- Semak kebenaran pengguna untuk penciptaan pembekal
- Sahkan medan diperlukan telah dilengkapkan
- Pastikan kategori pembekal dikonfigurasikan
- Semak sekatan kod pembekal pendua

**Isu pemprosesan pembayaran**
- Sahkan maklumat perbankan pembekal
- Semak konfigurasi terma pembayaran
- Semak semula tetapan penukaran mata wang
- Sahkan status aliran kerja kelulusan

**Masalah penjejakan prestasi**
- Semak tetapan konfigurasi KPI
- Sahkan proses pengumpulan data
- Semak semula kaedah pengiraan prestasi
- Sahkan kebenaran akses pelaporan

### Sumber Sokongan
- Panduan persediaan dan konfigurasi pembekal
- Dokumentasi amalan terbaik perolehan
- Panduan pelaksanaan pengurusan prestasi
- Dokumentasi penyelesaian masalah integrasi

## Pengguna dan Peranan Sasaran

### Pengguna Utama

**Procurement Managers**
- Pengurusan kitaran hayat pembekal sepenuhnya
- Pengawasan hubungan vendor strategik
- Pemantauan dan penilaian prestasi
- Pengurusan kontrak dan perjanjian

**Purchasing Coordinators**
- Interaksi pembekal harian
- Pemprosesan pesanan pembelian
- Pengurusan komunikasi pembekal
- Kemasukan data prestasi vendor

**Accounts Payable Staff**
- Pemprosesan pembayaran pembekal
- Pengurusan invois vendor
- Penyelenggaraan data kewangan
- Pentadbiran terma pembayaran

**System Administrators**
- Keselamatan data pembekal dan kawalan akses
- Konfigurasi dan penyelenggaraan sistem
- Pengurusan integrasi
- Pengawasan jejak audit

### Pengguna Sekunder

**Quality Managers**
- Penilaian kualiti pembekal
- Penjejakan pensijilan
- Pemantauan pematuhan
- Penilaian risiko

**Finance Controllers**
- Analisis dan pelaporan kos
- Pengurusan belanjawan
- Penilaian risiko kewangan
- Analitik perbelanjaan vendor

**Operations Managers**
- Semakan prestasi pembekal
- Koordinasi penghantaran
- Pemantauan kecekapan operasi
- Pengoptimuman rantaian bekalan

## Konfigurasi Lanjutan

### Seni Bina Data Pembekal

#### Struktur Data Induk
Data induk pembekal mengikut struktur hierarki yang direka untuk fleksibiliti dan skalabiliti:

```yaml
Supplier Master Record:
  Basic Information:
    - Supplier Code (Unique Identifier)
    - Company Name and Legal Name
    - Business Registration Details
    - Industry Classification
    - Supplier Type and Category

  Contact Management:
    - Multiple Contact Persons (up to 30)
    - Communication Preferences
    - Language Settings
    - Time Zone Configuration

  Address Management:
    - Multiple Addresses (up to 15)
    - Address Types (Billing, Shipping, Office)
    - Geographic Territories
    - Regional Classifications

  Financial Configuration:
    - Payment Terms and Conditions
    - Currency Settings
    - Credit Limits and Terms
    - Banking Information
    - Tax Registration Details

  Operational Settings:
    - Lead Times and Delivery Terms
    - Minimum Order Quantities
    - Quality Standards
    - Certifications and Compliance
    - Performance Metrics
```

#### Konfigurasi Medan Tersuai
Applet menyokong sehingga 25 medan tersuai setiap rekod pembekal, membolehkan organisasi menangkap maklumat khusus industri atau unik perniagaan:

- **Jenis Medan**: Text, Number, Date, Boolean, Dropdown, Multi-select
- **Peraturan Pengesahan**: Medan diperlukan, pengesahan format, semakan julat
- **Logik Bersyarat**: Keterlihatan medan dinamik berdasarkan jenis pembekal
- **Pemetaan Integrasi**: Medan tersuai boleh dipetakan ke sistem luaran

### Sistem Pengurusan Prestasi

#### Petunjuk Prestasi Utama (KPI)
Applet menjejak metrik prestasi pembekal yang menyeluruh:

**Metrik Kualiti:**
- Kadar kecacatan dan skor kualiti
- Status pematuhan pensijilan
- Nisbah aduan pelanggan
- Kadar barangan dipulangkan

**Prestasi Penghantaran:**
- Peratusan penghantaran tepat pada masa
- Ketepatan masa lohong
- Kadar pemenuhan pesanan
- Insiden kerosakan penghantaran

**Prestasi Kewangan:**
- Kedudukan daya saing kos
- Sejarah pematuhan pembayaran
- Kadar ketepatan invois
- Analisis jumlah kos pemilikan

**Kualiti Perkhidmatan:**
- Masa respons kepada pertanyaan
- Kecekapan penyelesaian masalah
- Keberkesanan komunikasi
- Penarafan kualiti sokongan

#### Sistem Pemarkahan Automatik
Sistem secara automatik mengira skor pembekal berdasarkan pemberat yang boleh dikonfigurasikan:

```yaml
Supplier Score Calculation:
  Quality Weight: 30%
  Delivery Weight: 25%
  Cost Weight: 20%
  Service Weight: 15%
  Compliance Weight: 10%

Score Ranges:
  A+ Tier: 90-100 (Strategic Partners)
  A Tier: 80-89 (Preferred Suppliers)
  B Tier: 70-79 (Approved Suppliers)
  C Tier: 60-69 (Conditional Suppliers)
  D Tier: Below 60 (Under Review)
```

### Konfigurasi Aliran Kerja Lanjutan

#### Aliran Kerja Kelulusan Pembekal
Proses kelulusan berbilang peringkat yang boleh dikonfigurasikan memastikan kualiti data dan pematuhan:

**Pendaftaran Pembekal Baharu:**
1. Kemasukan dan pengesahan data awal
2. Pengesahan dokumentasi
3. Semakan kredit kewangan
4. Penilaian pematuhan dan risiko
5. Kelulusan pengurusan
6. Pengaktifan sistem

**Pengurusan Perubahan Pembekal:**
1. Permulaan permintaan perubahan
2. Penilaian impak
3. Semakan pihak berkepentingan
4. Kelulusan berdasarkan jenis perubahan
5. Pelaksanaan dan pemberitahuan

**Semakan Prestasi Pembekal:**
1. Pengumpulan data prestasi automatik
2. Penjanaan penilaian suku tahunan
3. Pengumpulan input pihak berkepentingan
4. Penetapan penarafan prestasi
5. Pembangunan pelan tindakan
6. Penjadualan susulan

### Seni Bina Integrasi

#### Keupayaan API
Applet menyediakan akses API menyeluruh untuk integrasi luaran:

**Titik Akhir REST API:**
- Operasi CRUD penuh untuk rekod pembekal
- Operasi data pukal untuk set data besar
- Keupayaan penyegerakan masa nyata
- Pemberitahuan dipacu peristiwa
- Sokongan pertanyaan tersuai

**Format Pertukaran Data:**
- JSON untuk aplikasi web
- XML untuk sistem perusahaan
- CSV untuk import/eksport data
- EDI untuk integrasi rantaian bekalan

#### Corak Integrasi

**Integrasi Masa Nyata:**
- Penyegerakan data segera
- Kemas kini dipacu peristiwa
- Pemberitahuan webhook
- Pengesahan data langsung

**Integrasi Kelompok:**
- Pemindahan data berjadual
- Pemprosesan kemas kini pukal
- Aliran kerja transformasi data
- Logik pengendalian ralat dan cuba semula

**Integrasi Hibrid:**
- Penyegerakan masa nyata data kritikal
- Pemprosesan kelompok data bukan kritikal
- Keutamaan penyegerakan boleh dikonfigurasikan
- Pengoptimuman prestasi

## Keselamatan dan Pematuhan

### Langkah Keselamatan Data

**Kawalan Akses:**
- Kebenaran berasaskan peranan pada tahap medan
- Pengasingan data pembekal mengikut organisasi
- Sekatan akses berasaskan IP
- Sokongan pengesahan berbilang faktor

**Perlindungan Data:**
- Penyulitan semasa rehat dan dalam transit
- Audit keselamatan berkala
- Penyamaran data untuk persekitaran bukan pengeluaran
- Pengurusan token API yang selamat

**Audit dan Pematuhan:**
- Jejak audit lengkap untuk semua perubahan
- Pelaporan pematuhan kawal selia
- Penguatkuasaan dasar pengekalan data
- Pematuhan peraturan privasi (GDPR, CCPA)

### Pengurusan Risiko

#### Penilaian Risiko Pembekal
Penilaian risiko automatik berdasarkan pelbagai faktor:

**Petunjuk Risiko Kewangan:**
- Perubahan penarafan kredit
- Analisis sejarah pembayaran
- Metrik kestabilan kewangan
- Impak volatiliti pasaran

**Faktor Risiko Operasi:**
- Risiko lokasi geografi
- Kebergantungan sumber tunggal
- Kekangan kapasiti
- Insiden kualiti

**Pemantauan Risiko Pematuhan:**
- Penjejakan tamat tempoh pensijilan
- Amaran pelanggaran kawal selia
- Pengurusan penemuan audit
- Pemantauan tindakan pembetulan

## Latihan dan Penerimagunaan

### Program Latihan Pengguna

**Latihan Pentadbir:**
- Konfigurasi dan persediaan sistem
- Pengurusan keselamatan dan kebenaran
- Konfigurasi integrasi
- Penyelesaian masalah dan penyelenggaraan

**Latihan Pengguna Akhir:**
- Pengurusan data pembekal asas
- Penyertaan aliran kerja
- Pelaporan dan analitik
- Pelaksanaan amalan terbaik

**Latihan Pengguna Lanjutan:**
- Pengurusan prestasi
- Prosedur penilaian risiko
- Konfigurasi aliran kerja kompleks
- Teknik pelaporan lanjutan

### Pengurusan Perubahan

**Strategi Pelaksanaan:**
1. Penjajaran pihak berkepentingan eksekutif
2. Pembentukan pasukan merentas fungsi
3. Perancangan pelancaran berperingkat
4. Pelaksanaan program latihan
5. Pemantauan dan pengoptimuman prestasi

**Metrik Kejayaan:**
- Kadar penerimagunaan pengguna
- Penambahbaikan kualiti data
- Peningkatan kecekapan proses
- Pencapaian pengurangan kos
- Skor kepuasan pembekal

{{< callout type="warning" >}}
**Penting**: Data induk pembekal secara langsung mempengaruhi kos perolehan dan kecekapan rantaian bekalan. Pastikan ketepatan data dan laksanakan aliran kerja kelulusan yang betul untuk perubahan pembekal.
{{< /callout >}}
