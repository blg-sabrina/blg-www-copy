---
title: "Modul E-Dagang"
description: "Operasi e-dagang menyeluruh dengan integrasi pasaran dan pengurusan jualan dalam talian"
weight: 70
---


Modul E-Dagang membolehkan perniagaan menjual dalam talian melalui pelbagai saluran, termasuk laman web sendiri, pasaran dalam talian dan portal B2B. Ia menyediakan integrasi lancar antara operasi dalam talian dan luar talian.

## Gambaran Keseluruhan Modul

Modul E-Dagang terdiri daripada aplet khusus yang bekerjasama untuk menyediakan:
- **Jualan pelbagai saluran** merentas pasaran dan laman web
- **Penyegerakan inventori** antara dalam talian dan luar talian
- **Pengurusan pesanan** daripada pelbagai sumber
- **Pengurusan laman web** dengan CP-Commerce
- **Operasi B2B** untuk pelanggan borong

## Kebergantungan Teras

Modul ini memerlukan aplet Modul Teras berikut:
- **Penyelenggaraan Pelanggan** - Data dan akaun pelanggan
- **Penyelenggaraan Item Inventori** - Data induk produk
- **Konfigurasi Cukai** - Pengiraan cukai untuk jualan dalam talian
- **Organisasi** - Inventori pelbagai lokasi
- **Buku Tunai** - Pemprosesan pembayaran

## Aplet E-Dagang

### 1. Aplet EcomSync
**Tujuan**: Hab pusat untuk integrasi pasaran dalam talian
- Menyambung ke Lazada, Shopee, Shopify
- Penyegerakan inventori masa nyata
- Penyatuan pesanan
- Pengurusan harga merentas saluran

[Ketahui lebih lanjut tentang EcomSync →](/modules/ecommerce/ecomsync-applet/)

### 2. Aplet CP-Commerce
**Tujuan**: Pengurusan laman web dan kandungan
- Bina dan urus laman web e-dagang
- Pengurusan katalog produk
- Halaman kandungan dan blog
- Pengoptimuman SEO

[Konfigurasikan CP-Commerce →](/modules/ecommerce/cp-commerce/)

### 3. Aplet Portal B2B
**Tujuan**: Operasi borong dan B2B
- Harga khusus mengikut pelanggan
- Pemprosesan pesanan pukal
- Pengurusan had kredit
- Katalog tersuai

[Sediakan Portal B2B →](/modules/ecommerce/b2b/)

### 4. Aplet Integrasi Pasaran
Penyambung individu untuk setiap pasaran dalam talian:
- **Penyambung Shopify**
- **Integrasi Lazada**
- **Integrasi Shopee**
- **Jambatan WooCommerce**

[Lihat Panduan Integrasi →](/modules/ecommerce/integration-with-shopify/)

## Ciri-ciri Utama

### Pengurusan Pelbagai Saluran
- **Inventori berpusat** merentas semua saluran
- **Pemprosesan pesanan bersatu** tanpa mengira sumber
- **Harga konsisten** dengan pelarasan mengikut saluran
- **Peruntukan stok** mengikut keutamaan saluran

### Pengurusan Laman Web
- **Konfigurasi menu** untuk navigasi laman
- **Pembina halaman** untuk penciptaan kandungan
- Penyesuaian **paparan produk**
- Templat **responsif mudah alih**

[Panduan Konfigurasi Laman Web →](/modules/ecommerce/20-website-configuration/)

### Pemprosesan Pesanan
- **Import pesanan automatik** daripada semua saluran
- **Penyegerakan status pesanan**
- Keupayaan **pemprosesan kelompok**
- **Integrasi penghantaran**

### Penyegerakan Inventori
- **Kemas kini stok masa nyata**
- **Pengurusan stok penampan**
- **Sokongan pelbagai lokasi**
- **Pengendalian prapesanan**

## Integrasi dengan Modul Lain

### Perakaunan Kewangan
- Penjanaan invois automatik
- Penyesuaian pembayaran
- Pengiraan dan pelaporan cukai
- Pelaporan kewangan

### Modul Inventori
- Pengurusan tahap stok
- Peruntukan pelbagai gudang
- Pesanan pemindahan
- Tempahan stok

### Modul POS
- Inventori bersatu merentas dalam talian/luar talian
- Pesanan klik-dan-ambil
- Data pelanggan omnisaluran
- Integrasi mata kesetiaan

### Jualan & CRM
- Penyegerakan data pelanggan
- Analitik jualan
- Automasi pemasaran
- Integrasi khidmat pelanggan

## Konfigurasi Aplet

### Urutan Persediaan

1. **Persediaan Modul Teras**
   - Konfigurasikan produk dalam Penyelenggaraan Item Inventori
   - Sediakan pelanggan dalam Penyelenggaraan Pelanggan
   - Konfigurasikan kod cukai

2. **Konfigurasi EcomSync**
   - Sambungkan akaun pasaran dalam talian
   - Petakan katalog produk
   - Tetapkan peraturan penyegerakan

3. **Persediaan CP-Commerce** (jika menggunakan laman web sendiri)
   - Konfigurasikan tetapan laman web
   - Reka struktur laman
   - Sediakan gerbang pembayaran

4. **Pengaktifan Saluran**
   - Aktifkan pasaran individu
   - Konfigurasikan tetapan khusus saluran
   - Uji aliran pesanan

## Aliran Kerja Biasa

### Penyenaraian Produk
1. Cipta produk dalam Penyelenggaraan Item Inventori
2. Konfigurasikan dalam EcomSync
3. Tolak ke saluran yang dipilih
4. Pantau status penyenaraian

### Pemenuhan Pesanan
1. Pesanan diimport secara automatik daripada saluran
2. Inventori ditempah secara automatik
3. Proses pengambilan dan pembungkusan
4. Kemas kini status penghantaran
5. Segerakkan penjejakan ke pasaran

### Kemas Kini Inventori
1. Perubahan stok dalam BigLedger
2. EcomSync mengira kuantiti yang tersedia
3. Kemas kini ditolak ke semua saluran
4. Mengelakkan jualan berlebihan

## Amalan Terbaik

### Pengurusan Produk
- Gunakan SKU yang konsisten merentas saluran
- Kekalkan penerangan produk yang terperinci
- Optimumkan imej untuk setiap platform
- Semakan harga secara berkala

### Kawalan Inventori
- Tetapkan stok penampan yang sesuai
- Konfigurasikan keutamaan saluran
- Penyesuaian stok secara berkala
- Pantau laporan kehabisan stok

### Pemprosesan Pesanan
- Takrifkan SLA yang jelas mengikut saluran
- Automasikan penghalaan pesanan
- Sediakan pengendalian pengecualian
- Pantau metrik pemenuhan

## Pelaporan & Analitik

### Laporan Utama
- Analisis jualan pelbagai saluran
- Keuntungan mengikut saluran
- Pusing ganti inventori mengikut saluran
- Kos pemerolehan pelanggan
- Metrik prestasi produk

### Papan Pemuka
- Pemantauan jualan masa nyata
- Penjejakan status pesanan
- Tahap inventori
- Perbandingan prestasi saluran

## Penyelesaian Masalah

### Isu Biasa

**Produk tidak disegerakkan**
- Sahkan pengesahan pasaran dalam talian
- Periksa pemetaan produk
- Semak log penyegerakan
- Sahkan medan yang diperlukan

**Kegagalan import pesanan**
- Periksa sambungan API
- Sahkan data pelanggan
- Semak konfigurasi cukai
- Periksa ketersediaan inventori

**Percanggahan inventori**
- Jalankan penyesuaian stok
- Periksa kekerapan penyegerakan
- Semak tetapan stok penampan
- Sahkan persediaan pelbagai lokasi

## Dokumentasi Berkaitan

### Panduan Aplet
- [Ciri-ciri EcomSync](/modules/ecommerce/ecomsync-features/)
- [Menu & Halaman CP-Commerce](/modules/ecommerce/cp-commerce-menu-pages/)
- [Konfigurasi Tab Pasaran](/modules/ecommerce/marketplace-tab/)

### Panduan Integrasi
- [Integrasi Shopify](/modules/ecommerce/integration-with-shopify/)
- [Pengenalan kepada EcomSync](/modules/ecommerce/introduction-to-ecomsync/)

### Operasi
- [Mencipta Penyenaraian Produk](/modules/ecommerce/create-single-tab/)
- [Mengurus Penyenaraian](/modules/ecommerce/listing/)
- [Kemas Kini dan Padam Item](/modules/ecommerce/update-and-delete-item/)

## Langkah Seterusnya

1. **Semak kebergantungan Modul Teras**
2. **Rancang strategi saluran** untuk perniagaan anda
3. **Konfigurasikan EcomSync** untuk saluran yang dipilih
4. **Uji aliran pesanan** sebelum mula beroperasi
5. **Latih pasukan** tentang operasi pelbagai saluran

{{< callout type="tip" >}}
**Petua Kejayaan**: Mulakan dengan satu saluran, sempurnakan prosesnya, kemudian kembangkan ke saluran tambahan secara beransur-ansur.
{{< /callout >}}
