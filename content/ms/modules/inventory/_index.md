---
title: "Modul Inventori"
description: "Penyelesaian pengurusan inventori yang komprehensif untuk kawalan stok, penilaian dan pengoptimuman"
weight: 40
---

Modul Inventori menyediakan penyelesaian pengurusan inventori yang komprehensif, direka untuk mengendalikan semua aspek kawalan stok, daripada penjejakan item asas hingga pengoptimuman inventori lanjutan. Modul ini menyokong perniagaan dengan keperluan inventori yang mudah hingga kompleks merentas satu atau berbilang lokasi.

## Gambaran Keseluruhan

Modul Inventori menyampaikan:
- **Pengurusan Stok Lengkap** - Penjejakan dan kawalan inventori masa nyata
- **Sokongan Berbilang Lokasi** - Kawalan berpusat merentas berbilang gudang
- **Kaedah Penilaian Lanjutan** - FIFO, LIFO, Purata Wajaran, Kos Piawai
- **Penjejakan Pergerakan Stok** - Jejak audit lengkap semua transaksi inventori
- **Pengoptimuman Inventori** - Pesanan semula automatik, pengoptimuman tahap stok
- **Sedia Integrasi** - Integrasi lancar dengan modul jualan, pembelian dan perakaunan

{{< callout type="info" >}}
**Fokus Modul**: Modul ini menyediakan keupayaan pengurusan inventori yang canggih, sesuai untuk pengilang, pengedar, peruncit dan syarikat perkhidmatan yang mempunyai keperluan inventori.
{{< /callout >}}

## Ciri-ciri Utama

### Pengurusan Inventori Teras
- **Penjejakan Stok Masa Nyata** - Tahap inventori langsung merentas semua lokasi
- **Pengurusan Berbilang Unit** - Sokongan untuk pelbagai unit ukuran dan penukaran
- **Penjejakan Siri/Kelompok** - Kebolehjejakan lengkap untuk item bersiri dan berkelompok
- **Penilaian Stok** - Pelbagai kaedah pengekosan dan penilaian automatik
- **Kategori Inventori** - Pengkategorian dan pengumpulan produk berhierarki

### Operasi Stok
- **Pelarasan Stok** - Pelarasan kiraan fizikal dan pengurusan varians
- **Pemindahan Stok** - Pemindahan antara lokasi dan antara syarikat
- **Tempahan Stok** - Peruntukan untuk pesanan jualan dan pengeluaran
- **Pemasangan/Pembukaan Pasang** - Pengurusan bil bahan dan kit
- **Kiraan Kitaran** - Pengiraan dan penyesuaian inventori berterusan

### Analitik Inventori
- **Analisis Tahap Stok** - Tahap min/maks, titik pesanan semula, stok keselamatan
- **Analisis Pergerakan** - Item bergerak pantas/perlahan, kadar pusing ganti
- **Laporan Penilaian** - Nilai stok mengikut lokasi, kategori dan kaedah
- **Analisis Penuaan** - Penjejakan penuaan dan keusangan inventori
- **Analisis Keuntungan** - Analisis margin mengikut produk dan kategori

### Integrasi Perolehan
- **Pembelian Automatik** - Pencetus titik pesanan semula dan cadangan pembelian
- **Pengurusan Vendor** - Penjejakan prestasi pembekal dan masa mendulu
- **Integrasi Pesanan Pembelian** - Pemprosesan PO hingga penerimaan yang lancar
- **Pengurusan Kos** - Pengiraan dan peruntukan kos mendarat
- **Kawalan Kualiti** - Pemeriksaan masuk dan aliran kerja kualiti

## Aplet Teras

### Asas Inventori

{{< cards >}}
  {{< card link="/applets/inv-item-maintenance-applet/" title="Aplet Penyelenggaraan Item Inventori" subtitle="Data induk produk lengkap dan pengurusan item inventori" >}}
  {{< card link="/applets/stock-balance-applet/" title="Aplet Baki Stok" subtitle="Penjejakan dan pelaporan baki inventori masa nyata" >}}
  {{< card link="/applets/stock-take-applet/" title="Aplet Pengiraan Stok" subtitle="Pengiraan inventori fizikal dan penyesuaian" >}}
{{< /cards >}}

### Operasi Stok

{{< cards >}}
  {{< card link="/applets/internal-stock-adjustment-applet/" title="Aplet Pelarasan Stok Dalaman" subtitle="Pelarasan inventori dan pengurusan varians" >}}
  {{< card link="/applets/internal-delivery-order-applet/" title="Aplet Pesanan Penghantaran Dalaman" subtitle="Pemindahan stok dan penghantaran antara lokasi" >}}
{{< /cards >}}

### Analitik Inventori

{{< cards >}}
  {{< card link="/applets/pricebook-applet/" title="Aplet Pricebook" subtitle="Pengurusan harga dan kos produk" >}}
{{< /cards >}}

## Kebergantungan Teras Dikongsi

Modul ini menggunakan aplet Modul Teras yang penting:

### Asas Data Induk
- **[Aplet Organisasi](/applets/organization-applet/)** - Struktur lokasi dan gudang
- **[Aplet Carta Akaun](/applets/chart-of-account-applet/)** - Integrasi perakaunan inventori
- **[Aplet Penyelenggaraan Pembekal](/applets/supplier-maintenance-applet/)** - Pengurusan vendor untuk perolehan

### Konfigurasi Sistem
- **[Aplet Pentadbir Tenan](/applets/tenant-admin-applet/)** - Konfigurasi sistem dan pengurusan pengguna
- **[Aplet Konfigurasi Cukai](/applets/tax-configuration-applet/)** - Pengendalian cukai untuk transaksi inventori

## Pendekatan Pelaksanaan

### Fasa 1: Persediaan Asas (Minggu 1-2)
1. **Struktur Inventori**
   - Takrifkan kategori dan hierarki produk
   - Sediakan lokasi inventori dan gudang
   - Konfigurasikan unit ukuran dan penukaran
   - Takrifkan kaedah penilaian inventori

2. **Persediaan Induk Item**
   - Cipta data induk item inventori
   - Sediakan kod dan penerangan produk
   - Konfigurasikan parameter dan polisi stok
   - Takrifkan tahap pesanan semula dan stok keselamatan

### Fasa 2: Operasi Stok (Minggu 3-4)
3. **Konfigurasi Pergerakan Stok**
   - Sediakan proses pelarasan stok
   - Konfigurasikan aliran kerja pemindahan
   - Laksanakan prosedur kiraan kitaran
   - Sediakan proses kawalan kualiti

4. **Persediaan Integrasi**
   - Konfigurasikan integrasi pembelian
   - Sediakan integrasi pesanan jualan
   - Laksanakan integrasi perakaunan
   - Konfigurasikan aliran kerja automatik

### Fasa 3: Analitik & Pengoptimuman (Minggu 5-6)
5. **Pelaporan & Analitik**
   - Konfigurasikan laporan inventori
   - Sediakan analitik papan pemuka
   - Laksanakan analisis ABC
   - Konfigurasikan metrik prestasi

6. **Persediaan Pelancaran**
   - Migrasi dan pengesahan data
   - Latihan dan pengujian pengguna
   - Pengoptimuman prestasi
   - Dokumentasi proses

## Proses Perniagaan

### Proses Penerimaan Inventori
```
Pesanan Pembelian → Penerimaan Barangan → Pemeriksaan Kualiti → Kemas Kini Stok → Pembayaran Vendor
```

### Proses Pengeluaran Stok
```
Pesanan Jualan → Tempahan Stok → Senarai Ambilan → Penghantaran → Kemas Kini Stok
```

### Proses Kiraan Kitaran
```
Jadual Kiraan → Pelaksanaan Kiraan → Analisis Varians → Pelarasan → Penyesuaian
```

## Keupayaan Integrasi

### Integrasi Antara Modul
- **Modul Jualan & CRM** - Pemenuhan pesanan dan peruntukan stok
- **Modul Pembelian** - Perolehan dan pemprosesan penerimaan
- **Modul Pembuatan** - Bil bahan dan perancangan pengeluaran
- **Modul Perakaunan Kewangan** - Penilaian inventori dan perakaunan kos

### Integrasi Sistem Luaran
- **Sistem Pengurusan Gudang** - Operasi gudang lanjutan
- **Sistem Kod Bar/RFID** - Tangkapan dan penjejakan data automatik
- **Portal Pembekal** - Pertukaran data elektronik (EDI)
- **Platform E-Dagang** - Penyegerakan inventori masa nyata

## Kaedah Penilaian Inventori

### Kaedah Pengekosan
- **Masuk Dahulu, Keluar Dahulu (FIFO)** - Item dikeluarkan mengikut urutan penerimaan
- **Masuk Terakhir, Keluar Dahulu (LIFO)** - Item terkini dikeluarkan dahulu
- **Purata Wajaran** - Kos purata semua item dalam stok
- **Kos Piawai** - Kos yang ditetapkan terlebih dahulu dengan analisis varians
- **Purata Bergerak** - Kos purata yang dikemas kini secara berterusan

### Ciri Penilaian
- **Pelbagai Lapisan Kos** - Penjejakan kos terperinci mengikut kelompok penerimaan
- **Pelarasan Kos** - Pembetulan kos manual dan automatik
- **Peruntukan Kos Mendarat** - Peruntukan tambang, duti dan overhed
- **Pemprosesan Penilaian Semula** - Penilaian semula inventori hujung tempoh
- **Pengendalian Mata Wang** - Penjejakan kos berbilang mata wang

## Ciri Lanjutan

### Pengoptimuman Inventori
- **Analisis ABC** - Klasifikasi mengikut nilai dan pergerakan
- **Kuantiti Pesanan Ekonomik** - Pengiraan kuantiti pesanan optimum
- **Pengoptimuman Stok Keselamatan** - Stok keselamatan berasaskan tahap perkhidmatan
- **Ramalan Permintaan** - Model ramalan statistik
- **Prestasi Vendor** - Penjejakan masa mendulu dan kualiti

### Pengurusan Kualiti
- **Aliran Kerja Pemeriksaan** - Kawalan kualiti masuk dan keluar
- **Penjejakan Ketakakuran** - Pengurusan isu kualiti
- **Pengurusan Sijil** - Sijil kualiti dan pematuhan
- **Penjejakan Kelompok** - Salasilah kelompok lengkap dan keupayaan panggilan balik
- **Pengurusan Luput** - Penjejakan hayat simpanan dan tarikh luput

### Penyirian & Kebolehjejakan
- **Penjejakan Nombor Siri** - Penjejakan item individu sepanjang kitaran hayat
- **Pengurusan Kelompok/Lot** - Penjejakan kumpulan untuk pembuatan dan luput
- **Penjejakan Salasilah** - Sejarah lengkap kegunaan dan asal usul
- **Pengurusan Panggilan Balik** - Proses panggilan balik produk yang cekap
- **Pelaporan Pematuhan** - Pelaporan kebolehjejakan kawal selia

## Kes Penggunaan Biasa

### Syarikat Pembuatan
- Pengurusan bahan mentah
- Penjejakan kerja dalam proses
- Kawalan barangan siap
- Pengurusan bil bahan

### Pusat Pengedaran
- Inventori berbilang lokasi
- Operasi dok silang
- Inventori diurus vendor
- Sokongan penghantaran terus

### Operasi Runcit
- Pengurusan inventori kedai
- Perancangan stok bermusim
- Pengurusan promosi
- Rasionalisasi SKU

### Syarikat Perkhidmatan
- Pengurusan alat ganti
- Inventori konsainan
- Penjejakan peralatan
- Inventori penyelenggaraan

## Ciri Prestasi

### Kebolehskalaan
- **Pemprosesan Volum Tinggi** - Mengendalikan berjuta-juta transaksi inventori
- **Sokongan Berbilang Lokasi** - Kawalan berpusat merentas lokasi
- **Pengguna Serentak** - Sokongan untuk berbilang pengguna serentak
- **Pengarkiban Data** - Pengurusan data sejarah yang cekap

### Pemprosesan Masa Nyata
- **Kemas Kini Stok Langsung** - Kemas kini baki segera
- **Tempahan Masa Nyata** - Pemprosesan peruntukan serta-merta
- **Harga Dinamik** - Pengiraan kos dan harga masa nyata
- **Sistem Amaran** - Pemberitahuan automatik untuk peristiwa kritikal

## Panduan Penyelesaian Masalah

### Isu Biasa

**Baki stok tidak tepat**
- Sahkan semua transaksi telah diposkan
- Periksa pelarasan yang belum selesai
- Semak pemindahan antara lokasi
- Sahkan baki pembukaan

**Isu pengekosan**
- Periksa konfigurasi kaedah penilaian
- Semak integriti lapisan kos
- Sahkan peruntukan kos mendarat
- Pastikan pemprosesan hujung tempoh

**Masalah prestasi**
- Optimumkan indeks pangkalan data
- Semak volum transaksi
- Periksa beban pengguna serentak
- Pertimbangkan pengarkiban data

## Sumber Latihan

### Latihan Pengguna Akhir
- **Operasi Inventori Asas** - Transaksi stok harian
- **Prosedur Pengiraan Stok** - Proses kiraan fizikal
- **Pelaporan & Analitik** - Laporan inventori piawai
- **Navigasi Sistem** - Latihan antara muka dan aliran kerja

### Latihan Pentadbir
- **Konfigurasi Sistem** - Persediaan dan penyesuaian modul
- **Pengurusan Data Induk** - Penyelenggaraan item dan kategori
- **Pengoptimuman Proses** - Penalaan aliran kerja dan prestasi
- **Pengurusan Integrasi** - Sambungan sistem luaran

## Dokumentasi Berkaitan

### Panduan Persediaan
- [Panduan Pelaksanaan Modul Inventori](/guides/inventory-guides/)
- [Persediaan Data Induk Item](/guides/inventory-guides/item-setup/)
- [Konfigurasi Berbilang Lokasi](/guides/inventory-guides/multi-location/)

### Panduan Pengguna
- [Operasi Inventori Harian](/user-guide/daily-tasks/inventory-operations/)
- [Prosedur Pengiraan Stok](/user-guide/daily-tasks/stock-taking/)
- [Pelaporan Inventori](/user-guide/reports-analytics/inventory-reports/)

### Topik Lanjutan
- [Pengoptimuman Inventori](/guides/advanced/inventory-optimization/)
- [Integrasi API](/developers/api-reference/inventory/)
- [Kaedah Penilaian Tersuai](/guides/advanced/custom-valuation/)

## Langkah Seterusnya

Selepas melaksanakan Modul Inventori:

1. **Lengkapkan persediaan Modul Teras** sebagai prasyarat
2. **Konfigurasikan struktur inventori** dan kategori item
3. **Sediakan data induk item** dengan pengekodan dan klasifikasi yang betul
4. **Laksanakan operasi stok** (penerimaan, pengeluaran, pelarasan)
5. **Konfigurasikan kaedah penilaian** dan prosedur pengekosan
6. **Sediakan pelaporan dan analitik** untuk pengurusan inventori
7. **Latih pengguna** tentang operasi dan prosedur harian
8. **Optimumkan prestasi** berdasarkan volum dan corak transaksi

{{< callout type="tip" >}}
**Petua Pelaksanaan**: Mulakan dengan penjejakan inventori asas dan tambahkan ciri lanjutan seperti penyirian dan pengurusan kualiti secara beransur-ansur. Pastikan baki pembukaan yang tepat sebelum pelancaran.
{{< /callout >}}

{{< callout type="warning" >}}
**Penting**: Data inventori mempengaruhi pelaporan kewangan dan operasi perniagaan. Pastikan pengesahan, pengujian dan latihan pengguna yang sewajarnya sebelum melaksanakan proses automatik.
{{< /callout >}}
