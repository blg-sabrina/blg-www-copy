---
title: "Applet Penyelenggaraan Item Inventori"
description: "Pengurusan data induk produk dan inventori untuk sistem ERP BigLedger"
tags:
- core-module
- inventory-management
- product-master
- master-data
- stock-control
weight: 4
---

## Tujuan dan Gambaran Keseluruhan

Applet Penyelenggaraan Item Inventori ialah hab pusat untuk mengurus semua data induk produk fizikal dan inventori dalam BigLedger. Applet Modul Teras ini menyediakan pengurusan maklumat produk yang menyeluruh, parameter kawalan stok, dan asas integrasi bagi semua operasi berkaitan inventori merentasi pelbagai modul.

{{< callout type="info" >}}
**Applet Modul Teras**: Ini merupakan salah satu daripada 13 applet Modul Teras yang penting, kritikal bagi mana-mana perniagaan yang mengendalikan produk fizikal atau mengekalkan inventori.
{{< /callout >}}

### Fungsi Utama
- **Data Induk Produk** - Pengurusan maklumat produk yang lengkap
- **Parameter Kawalan Stok** - Tetapan pengurusan inventori
- **Sokongan Berbilang Lokasi** - Inventori berasaskan gudang dan lokasi
- **Pengurusan Harga** - Konfigurasi kos dan harga jualan
- **Pengurusan Kategori** - Klasifikasi dan penyusunan produk

## Ciri-ciri Utama

### Pengurusan Maklumat Produk
- Spesifikasi dan deskripsi produk terperinci
- Imej produk dan lampiran multimedia
- Pelbagai kod produk (SKU, UPC, kod pengeluar)
- Atribut dan varian produk (saiz, warna, model)
- Spesifikasi teknikal dan dokumentasi
- Maklumat pembekal dan masa siap

### Kawalan Inventori
- Aras stok dan titik pesanan semula
- Aras stok minimum dan maksimum
- Pengiraan stok keselamatan
- Klasifikasi analisis ABC
- Keupayaan penjejakan lot/kelompok
- Pengurusan nombor siri
- Penjejakan tarikh luput

### Inventori Berbilang Lokasi
- Penugasan gudang dan lokasi
- Pemindahan stok antara lokasi
- Harga khusus lokasi
- Peruntukan stok mengikut cawangan
- Penjejakan lokasi zon dan bin
- Keupayaan cross-docking

### Harga dan Pengkosan
- Pelbagai kaedah kos (FIFO, LIFO, Purata)
- Kos piawai berbanding kos sebenar
- Pelbagai harga jualan setiap produk
- Harga khusus pelanggan
- Tingkat harga berasaskan volum
- Sokongan harga promosi

### Kategori dan Klasifikasi Produk
- Struktur kategori berhierarki
- Keluarga dan kumpulan produk
- Integrasi katalog vendor
- Klasifikasi khusus industri
- Atribut produk tersuai
- Peraturan pengkategorian automatik

## Spesifikasi Teknikal

### Keperluan Sistem
- **Tahap Akses Minimum**: Pentadbir Inventori
- **Kebergantungan Pangkalan Data**: Jadual induk inventori
- **Titik Integrasi**: Semua modul berkaitan inventori
- **Ketersediaan API**: Operasi CRUD penuh dengan pemprosesan pukal
- **Sokongan Imej**: Pelbagai format imej sehingga 10MB setiap satu

### Pilihan Konfigurasi Produk
- **Panjang Kod Produk**: 3-50 aksara
- **Panjang Deskripsi**: Sehingga 5,000 aksara
- **Atribut Tersuai**: Sehingga 50 medan tersuai
- **Sokongan Varian**: Sehingga 100 varian setiap produk
- **Lampiran Imej**: Sehingga 20 imej setiap produk

### Parameter Prestasi
- **Kapasiti Produk**: Sehingga 1,000,000 produk
- **Prestasi Carian**: <1 saat untuk sebarang carian
- **Operasi Pukal**: Memproses 10,000+ produk setiap kelompok
- **Pengguna Serentak**: 1,000+ pengguna serentak
- **Kemas Kini Stok**: Kemas kini baki inventori masa nyata

## Titik Integrasi

### Kebergantungan Modul Teras
- **Applet Konfigurasi Cukai** - Pemetaan cukai produk
- **Applet Carta Akaun** - Akaun aset inventori
- **Applet Organisasi** - Inventori berbilang lokasi
- **Applet Penyelenggaraan Pembekal** - Maklumat produk vendor

### Integrasi Modul
| Modul | Tujuan Integrasi |
|--------|-------------------|
| **Jualan & CRM** | Katalog produk dan harga |
| **Pembelian** | Perolehan dan pengurusan vendor |
| **Inventori & Gudang** | Pergerakan dan operasi stok |
| **Pembuatan** | Bahan mentah dan barang siap |
| **POS** | Maklumat produk runcit |
| **E-Dagang** | Katalog produk dalam talian |
| **Kawalan Kualiti** | Spesifikasi dan piawaian produk |

### Integrasi Luaran
- **Katalog Pembekal** - Penyegerakan maklumat produk
- **Platform E-Dagang** - Penyenaraian dan kemas kini produk
- **Sistem Kod Bar** - Pengenalan produk automatik
- **Sistem POS** - Maklumat produk masa nyata
- **Sistem EDI** - Pertukaran data elektronik
- **Sistem PLM** - Pengurusan kitaran hayat produk

## Keperluan Konfigurasi

### Keperluan Persediaan Awal
1. **Kategori Produk** - Tentukan struktur klasifikasi
2. **Unit Ukuran** - Sediakan unit pengukuran
3. **Akaun Inventori** - Konfigurasikan akaun aset
4. **Lokasi/Gudang** - Tentukan lokasi penyimpanan
5. **Kaedah Kos** - Pilih pendekatan pengkosan inventori

### Konfigurasi Penting
- **Klasifikasi Produk**: Hierarki dan pengumpulan kategori
- **Parameter Inventori**: Titik pesanan semula, aras stok keselamatan
- **Struktur Harga**: Metodologi kos dan harga jualan
- **Piawaian Kualiti**: Spesifikasi dan keperluan produk
- **Maklumat Vendor**: Pembekal utama dan alternatif

### Konfigurasi Lanjutan
- **Produk Berbilang Varian** - Kombinasi saiz, warna, gaya
- **Penjejakan Lot/Siri** - Keperluan kebolehjejakan
- **Kawalan Kualiti** - Protokol pemeriksaan dan pengujian
- **Produk Kit/Berkumpulan** - Konfigurasi produk terhimpun
- **Produk Ganti** - Pilihan produk alternatif

## Kes Penggunaan

### Pengurusan Rangkaian Runcit
**Senario**: Operasi runcit berbilang kedai
- Katalog produk terpusat merentasi semua kedai
- Harga dan promosi khusus lokasi
- Pesanan semula automatik berdasarkan halaju jualan
- Perancangan inventori bermusim
- Pemindahan stok antara kedai

**Faedah**: Maklumat produk konsisten dengan fleksibiliti tempatan

### Syarikat Pembuatan
**Senario**: Kemudahan pengeluaran dengan bahan mentah
- Spesifikasi bahan mentah dan piawaian kualiti
- Penjejakan kerja dalam proses
- Pengurusan barang siap
- Integrasi bil bahan
- Penjejakan prestasi pembekal

**Faedah**: Kawalan inventori pembuatan yang lengkap

### Pengedaran Borong
**Senario**: Pengedar B2B dengan pelbagai vendor
- Pengurusan katalog produk berskala besar
- Tingkat harga berasaskan volum
- Pengurusan produk drop-shipping
- Maklumat produk khusus vendor
- Keupayaan pemprosesan pesanan pukal

**Faedah**: Operasi inventori berskala besar yang cekap

### Perniagaan E-Dagang
**Senario**: Peruncit dalam talian dengan pemasaran digital
- Kandungan produk yang kaya dengan imej dan deskripsi
- Maklumat produk yang dioptimumkan SEO
- Penyegerakan inventori merentasi saluran
- Harga dinamik berdasarkan aras stok
- Integrasi enjin cadangan produk

**Faedah**: Pengalaman pelanggan dalam talian yang dipertingkatkan

## Applet Berkaitan

### Applet Modul Teras
- **[Applet Penyelenggaraan Item Dokumen](/ms/applets/doc-item-maintenance-applet/)** - Item perkhidmatan dan bukan inventori
- **[Applet Penyelenggaraan Pembekal](/ms/applets/supplier-maintenance-applet/)** - Hubungan produk vendor
- **[Applet Konfigurasi Cukai](/ms/applets/tax-configuration-applet/)** - Tetapan cukai produk

### Applet Pengurusan Inventori
- **[Applet Baki Stok](/ms/applets/stock-balance-applet/)** - Aras inventori masa nyata
- **[Applet Stock Take](/ms/applets/stock-take-applet/)** - Pengiraan inventori fizikal
- **[Applet Pelarasan Stok Dalaman](/ms/applets/internal-stock-adjustment-applet/)** - Pelarasan inventori

### Applet Harga dan Jualan
- **[Applet Pricebook](/ms/applets/pricebook-applet/)** - Pengurusan harga lanjutan
- **[Applet Pesanan Jualan](/ms/applets/sales-order-applet/)** - Pemprosesan pesanan produk
- **[Applet Pesanan Belian](/ms/applets/purchase-order-applet/)** - Perolehan produk

## Panduan Persediaan

### Mula Pantas
1. **Akses Penyelenggaraan Item Inventori** - Navigasi ke applet
2. **Tentukan Kategori Produk** - Sediakan struktur klasifikasi
3. **Konfigurasikan Unit Ukuran** - Sediakan unit pengukuran
4. **Cipta Contoh Produk** - Tambah produk ujian
5. **Uji Integrasi** - Sahkan integrasi dengan modul lain

### Persediaan Lanjutan
1. **Konfigurasi Berbilang Varian** - Sediakan varian produk
2. **Persediaan Kawalan Kualiti** - Konfigurasikan protokol pemeriksaan
3. **Strategi Harga** - Laksanakan peraturan harga lanjutan
4. **Konfigurasi Integrasi** - Sambungkan sistem luaran
5. **Pengoptimuman Prestasi** - Optimumkan untuk operasi volum tinggi

## Struktur Data Induk Produk

### Maklumat Produk Asas
```yaml
Product Code: ELEC-LAP-001
Description: Dell Inspiron 15 Laptop
Category: Electronics > Computers > Laptops
Brand: Dell
Model: Inspiron 15
UPC: 123456789012
Manufacturer Code: INS15-001
Status: Active
```

### Parameter Inventori
```yaml
Unit of Measure: Each
Cost Method: Average Cost
Standard Cost: $750.00
Current Average Cost: $745.50
Selling Price: $999.00
Reorder Point: 10 units
Safety Stock: 5 units
Lead Time: 7 days
ABC Classification: A
```

### Atribut Fizikal
```yaml
Weight: 2.5 kg
Dimensions: 35.8 x 24.7 x 1.99 cm
Color: Silver
Storage: 512GB SSD
Memory: 16GB RAM
Processor: Intel Core i7
Warranty: 1 Year
```

## Amalan Terbaik

### Amalan Terbaik Pengurusan Data Produk
- **Penyeragaman** - Konvensyen penamaan dan kod yang konsisten
- **Kualiti Data** - Maklumat produk yang tepat dan lengkap
- **Kemas Kini Berkala** - Pastikan data produk terkini dan relevan
- **Kualiti Imej** - Imej produk berkualiti tinggi
- **Pengoptimuman SEO** - Deskripsi mesra carian

### Amalan Terbaik Kawalan Inventori
- **Analisis ABC** - Fokus pada item bernilai tinggi
- **Semakan Berkala** - Pelarasan titik pesanan semula secara berkala
- **Perancangan Permintaan** - Analisis data sejarah untuk peramalan
- **Pengurusan Pembekal** - Kekalkan hubungan pembekal yang boleh dipercayai
- **Piawaian Kualiti** - Langkah kawalan kualiti yang konsisten

### Amalan Terbaik Berbilang Lokasi
- **Katalog Terpusat** - Sumber kebenaran produk tunggal
- **Penyesuaian Tempatan** - Harga dan ketersediaan khusus lokasi
- **Pengoptimuman Pemindahan** - Pergerakan antara lokasi yang cekap
- **Pengimbangan Stok** - Pengagihan inventori optimum
- **Pemantauan Prestasi** - Metrik inventori mengikut lokasi

## Penyelesaian Masalah

### Isu Biasa
**Tidak dapat mencipta produk baharu**
- Semak kebenaran pengguna untuk penciptaan produk
- Sahkan medan yang diperlukan telah dilengkapkan
- Pastikan kategori produk ditakrifkan
- Semak sekatan kod produk pendua

**Ketidakkonsistenan aras stok**
- Semak catatan pelarasan stok
- Semak integrasi dengan modul lain
- Sahkan pengiraan kaedah kos
- Semak sejarah transaksi

**Isu prestasi dengan katalog besar**
- Optimumkan pengindeksan pangkalan data
- Semak konfigurasi carian
- Pertimbangkan untuk mengarkib produk tidak aktif
- Laksanakan penapis berasaskan kategori

### Sumber Sokongan
- Panduan persediaan dan konfigurasi produk
- Amalan terbaik kawalan inventori
- Dokumentasi penyelesaian masalah integrasi
- Panduan pengoptimuman prestasi

{{< callout type="warning" >}}
**Penting**: Perubahan data induk produk boleh menjejaskan harga, aras inventori, dan pelaporan kewangan. Sentiasa uji perubahan dalam persekitaran pembangunan terlebih dahulu.
{{< /callout >}}