---
title: "Modul Tempat Jualan (POS)"
description: "Operasi kedai runcit lengkap dengan keupayaan penyegerakan luar talian/dalam talian"
weight: 20
---


Modul Tempat Jualan (POS) menyediakan keupayaan operasi kedai runcit yang komprehensif, membolehkan operasi juruwang yang lancar, pengurusan pelbagai cawangan dan penyegerakan luar talian/dalam talian yang mantap.

## Gambaran Keseluruhan

Modul POS direka untuk perniagaan runcit yang memerlukan:
- **Pemprosesan jualan dalam kedai** - Transaksi tempat jualan yang pantas dan boleh dipercayai
- **Pengurusan pelbagai cawangan** - Kawalan berpusat untuk pelbagai lokasi runcit
- **Keupayaan luar talian** - Teruskan operasi walaupun internet tidak tersedia
- **Penyegerakan masa nyata** - Penyegerakan data automatik apabila bersambung
- **Pelaporan menyeluruh** - Analitik jualan dan cerapan prestasi kedai

{{< callout type="info" >}}
**Kebergantungan Modul**: Memerlukan aplet Modul Teras (Penyelenggaraan Pelanggan, Penyelenggaraan Item Inventori, Konfigurasi Cukai, Buku Tunai, Organisasi) dikonfigurasikan terlebih dahulu.
{{< /callout >}}

## Aplet POS Teras

### 1. Aplet Terminal POS
**Tujuan**: Antara muka tempat jualan utama untuk juruwang
- Antara muka jualan mesra sentuhan
- Integrasi pengimbasan kod bar
- Carian produk pantas
- Pemprosesan pembayaran
- Pencetakan resit

**Digunakan oleh**: Juruwang barisan hadapan dan kakitangan jualan
**Dokumentasi**: [TODO: Aplet Terminal POS](/applets/pos-terminal-applet/) - *Dokumentasi belum tersedia*

### 2. Aplet Pengurusan Tunai
**Tujuan**: Pengurusan laci tunai dan daftar tunai
- Kiraan tunai pembukaan
- Operasi laci tunai
- Penyesuaian hujung hari
- Penjejakan deposit tunai
- Pelaporan varians

**Digunakan oleh**: Juruwang dan penyelia kedai
**Dokumentasi**: [TODO: Aplet Pengurusan Tunai](/applets/cash-management-applet/) - *Dokumentasi belum tersedia*

### 3. Aplet Konfigurasi Kedai
**Tujuan**: Tetapan dan konfigurasi khusus kedai
- Profil dan tetapan kedai
- Penetapan terminal
- Peraturan harga tempatan
- Promosi khusus kedai
- Konfigurasi waktu operasi

**Digunakan oleh**: Pengurus kedai dan pentadbir IT
**Dokumentasi**: [TODO: Aplet Konfigurasi Kedai](/applets/store-configuration-applet/) - *Dokumentasi belum tersedia*

### 4. Aplet Penyegerakan Luar Talian POS
**Tujuan**: Operasi luar talian dan penyegerakan data
- Penyimpanan transaksi luar talian
- Penyegerakan automatik apabila dalam talian
- Penyelesaian konflik
- Semakan integriti data
- Pemantauan sambungan

**Digunakan oleh**: Pentadbir sistem dan sokongan IT
**Dokumentasi**: [TODO: Aplet Penyegerakan Luar Talian POS](/applets/pos-offline-sync-applet/) - *Dokumentasi belum tersedia*

### 5. Aplet Pengurusan Resit
**Tujuan**: Pengurusan templat resit dan pencetakan
- Reka bentuk templat resit
- Persediaan logo dan penjenamaan
- Konfigurasi pencetak
- Pilihan resit e-mel
- Penjejakan sejarah resit

**Digunakan oleh**: Pengurus kedai dan pasukan pemasaran
**Dokumentasi**: [TODO: Aplet Pengurusan Resit](/applets/receipt-management-applet/) - *Dokumentasi belum tersedia*

### 6. Aplet Laporan POS
**Tujuan**: Pelaporan jualan dan analitik untuk operasi POS
- Laporan jualan harian
- Laporan prestasi juruwang
- Analisis jualan produk
- Pecahan kaedah pembayaran
- Laporan perbandingan kedai

**Digunakan oleh**: Pengurus kedai dan penganalisis perniagaan
**Dokumentasi**: [TODO: Aplet Laporan POS](/applets/pos-reports-applet/) - *Dokumentasi belum tersedia*

## Aplet Modul Teras Dikongsi

Modul POS menggunakan aplet Modul Teras yang penting ini:

### Daripada Modul Teras
- **[Aplet Penyelenggaraan Pelanggan](/applets/organization-applet/)** - Profil pelanggan dan program kesetiaan
- **[Aplet Penyelenggaraan Item Inventori](/applets/organization-applet/)** - Data induk produk dan harga
- **[Aplet Konfigurasi Cukai](/applets/organization-applet/)** - Kadar GST/SST dan pematuhan
- **[Aplet Buku Tunai](/applets/organization-applet/)** - Kaedah pembayaran dan akaun tunai
- **[Aplet Organisasi](/applets/organization-applet/)** - Hierarki dan struktur kedai

## Aliran Proses Perniagaan

### Transaksi Jualan Standard
```
Pelanggan membawa barangan ke kaunter → Juruwang mengimbas barangan (Terminal POS) → Sistem mengira jumlah dengan cukai → Pelanggan membayar (Pengurusan Tunai) → Resit dicetak (Pengurusan Resit) → Transaksi disegerakkan ke ibu pejabat
```

### Proses Hujung Hari
```
Lengkapkan semua transaksi tertunggak → Kira laci tunai (Pengurusan Tunai) → Jana laporan harian (Laporan POS) → Sesuaikan pembayaran dan deposit → Segerakkan data ke sistem pusat
```

### Operasi Luar Talian
```
Sistem mengesan sambungan rangkaian terputus → Beralih ke mod luar talian (Penyegerakan Luar Talian POS) → Simpan transaksi secara tempatan → Teruskan operasi biasa → Segerak automatik apabila sambungan pulih
```

## Senario Pelaksanaan

### Persediaan Kedai Tunggal
Sesuai untuk:
- Perniagaan runcit kecil
- Kedai butik
- Kedai khusus
- Kaunter perkhidmatan

**Ciri Utama**:
- Proses persediaan yang ringkas
- Pelaporan asas
- Fungsi POS yang penting
- Pangkalan data pelanggan tempatan

### Rangkaian Pelbagai Kedai
Sempurna untuk:
- Rangkaian runcit
- Operasi francais
- Gedung serbaneka
- Cawangan pusat beli-belah

**Ciri Utama**:
- Pengurusan inventori berpusat
- Pemindahan antara kedai
- Pelaporan disatukan
- Promosi seluruh rangkaian

### Runcit Mengutamakan Luar Talian
Direka untuk:
- Lokasi terpencil
- Pasar dan pesta
- Unit jualan bergerak
- Kawasan dengan sambungan lemah

**Ciri Utama**:
- Keupayaan luar talian yang mantap
- Penyegerakan berkelompok
- Penyelesaian konflik
- Perlindungan integriti data

## Integrasi dengan Modul Lain

### Dengan Modul Inventori
- Kemas kini stok masa nyata
- Pengurangan stok automatik
- Amaran stok rendah
- Pemindahan antara kedai

### Dengan Modul Perakaunan Kewangan
- Catatan jurnal jualan automatik
- Penyesuaian tunai
- Pengiktirafan hasil
- Pelaporan cukai

### Dengan Modul E-Dagang
- Inventori bersatu merentas saluran
- Beli dalam talian, ambil di kedai
- Pemprosesan pemulangan
- Mata kesetiaan pelanggan

### Dengan Modul CRM
- Sejarah pembelian pelanggan
- Integrasi program kesetiaan
- Pengumpulan maklum balas pelanggan
- Penjejakan kempen pemasaran

## Keperluan Persediaan

### Keperluan Perkakasan
1. **Terminal/Komputer POS**
   - Keupayaan skrin sentuh
   - RAM minimum 4GB
   - Storan tempatan untuk operasi luar talian

2. **Peranti Persisian**
   - Pengimbas kod bar
   - Pencetak resit
   - Laci tunai
   - Paparan pelanggan (pilihan)

3. **Persediaan Rangkaian**
   - Sambungan internet yang boleh dipercayai
   - Rangkaian tempatan untuk pelbagai terminal
   - Sambungan sandaran (4G/mudah alih)

### Prasyarat Perisian
1. **Konfigurasi Modul Teras**
   - Struktur organisasi
   - Carta akaun
   - Konfigurasi cukai
   - Data induk pelanggan dan item

2. **Persediaan Khusus POS**
   - Konfigurasi kedai
   - Penetapan terminal
   - Templat resit
   - Kaedah pembayaran

## Amalan Terbaik

### Pengoptimuman Prestasi
- **Cache tempatan** untuk data yang kerap diakses
- **Pemprosesan berkelompok** untuk transaksi
- **Penyelenggaraan berkala** pangkalan data tempatan
- **Pengoptimuman rangkaian** untuk operasi penyegerakan

### Langkah Keselamatan
- **Pengesahan pengguna** untuk setiap terminal
- **Pengelogan transaksi** untuk jejak audit
- **Pematuhan pemprosesan pembayaran selamat**
- **Prosedur sandaran** berkala

### Latihan Kakitangan
- Latihan **operasi sistem** untuk juruwang
- Prosedur **penyelesaian masalah**
- Latihan **proses hujung hari**
- Amalan terbaik **khidmat pelanggan**

## Penyelesaian Masalah

### Isu Biasa

**Terminal POS Tidak Bertindak Balas**
- Periksa sambungan rangkaian
- Mulakan semula aplikasi POS
- Sahkan sambungan perkakasan
- Periksa sumber sistem

**Masalah Penyegerakan Luar Talian**
- Sahkan sambungan internet
- Periksa status perkhidmatan penyegerakan
- Semak log ralat
- Hubungi sokongan IT

**Isu Pencetak**
- Periksa sambungan pencetak
- Sahkan paras kertas dan dakwat
- Kemas kini pemacu pencetak
- Uji dengan templat resit yang berbeza

## Dokumentasi Berkaitan

### Panduan Persediaan
- [Panduan Persediaan Perkakasan POS](/guides/) - *TODO: Cipta panduan*
- [Panduan Konfigurasi Kedai](/guides/) - *TODO: Cipta panduan*
- [Reka Bentuk Templat Resit](/guides/) - *TODO: Cipta panduan*

### Bahan Latihan
- [Manual Latihan Juruwang](/guides/) - *TODO: Cipta manual*
- [Panduan Pengurus Kedai](/guides/) - *TODO: Cipta panduan*
- [Prosedur Penyelesaian Masalah](/guides/) - *TODO: Cipta prosedur*

### Panduan Integrasi
- [Integrasi POS-Inventori](/guides/advanced/integration-best-practices/)
- [Persediaan Pelbagai Kedai](/guides/) - *TODO: Cipta panduan*
- [Panduan Operasi Luar Talian](/guides/) - *TODO: Cipta panduan*

## Langkah Seterusnya

Selepas melaksanakan Modul POS:

1. **Konfigurasikan tetapan kedai** menggunakan Aplet Konfigurasi Kedai
2. **Sediakan terminal** dan tetapkan kepada kakitangan
3. **Latih juruwang** tentang operasi sistem
4. **Uji keupayaan luar talian** dengan teliti
5. **Pantau prestasi** dan optimumkan mengikut keperluan

{{< callout type="tip" >}}
**Petua Pro**: Mulakan dengan kedai perintis untuk menguji semua operasi POS sebelum melaksanakannya ke pelbagai lokasi. Ini membantu mengenal pasti sebarang isu konfigurasi lebih awal.
{{< /callout >}}
