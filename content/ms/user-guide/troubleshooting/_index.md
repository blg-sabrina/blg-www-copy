---
title: Penyelesaian Masalah
description: Isu biasa, penyelesaian, dan teknik menyelesaikan masalah untuk pengguna BigLedger
tags: [troubleshooting, support, problems, solutions]
weight: 60
bookCollapseSection: false
---

Penyelesaian pantas untuk isu BigLedger yang biasa dan panduan menyelesaikan masalah yang menyeluruh. Bahagian ini membantu anda menyelesaikan masalah dengan cepat dan kembali kepada kerja yang produktif.

## Penyelesaian Masalah Pantas

### Isu Paling Biasa

Panduan penyelesaian masalah yang menyeluruh ini menangani isu BigLedger yang paling biasa dengan kod ralat khusus, penyelesaian langkah demi langkah, dan langkah pencegahan.

#### Masalah Log Masuk & Akses
- **Tidak Dapat Log Masuk**: Set semula kata laluan, status akaun, isu pelayar
- **Ciri Hilang**: Masalah kebenaran, ketersediaan applet
- **Prestasi Perlahan**: Pengoptimuman pelayar, isu rangkaian
- **Tamat Masa Sesi**: Tetapan keselamatan, konfigurasi pelayar

#### Isu Kemasukan Data
- **Tidak Dapat Menyimpan Rekod**: Ralat pengesahan, medan wajib
- **Pilihan Menu Juntai Bawah Hilang**: Persediaan data induk, kebenaran
- **Kegagalan Import**: Format data, ralat pemetaan
- **Rekod Pendua**: Pengesahan data, prosedur cantuman

#### Masalah Transaksi
- **Ralat Pemprosesan Pesanan**: Isu aliran kerja, rantaian kelulusan
- **Masalah Penetapan Harga**: Konfigurasi skema harga, tetapan pelanggan
- **Percanggahan Inventori**: Pelarasan stok, isu lokasi
- **Ralat Laporan**: Akses data, tetapan parameter

## Penyelesaian Masalah Langkah demi Langkah

### 1. Kenal Pasti Masalah
- **Dokumentasikan Simptom** - Apakah sebenarnya yang berlaku?
- **Hasilkan Semula Isu** - Bolehkah anda menyebabkannya berlaku sekali lagi?
- **Semak Masa** - Bila ini mula berlaku?
- **Kumpul Konteks** - Apakah yang cuba anda capai?

### 2. Kumpul Maklumat
- **Mesej Ralat** - Salin teks dan kod ralat yang tepat
- **Tangkapan Skrin** - Bukti visual masalah
- **Butiran Akaun Pengguna** - Maklumat kebenaran dan peranan
- **Persekitaran Sistem** - Maklumat pelayar, peranti, rangkaian

### 3. Cuba Penyelesaian Asas
- **Segar Semula/Muat Semula** - Segar semula pelayar yang mudah
- **Kosongkan Cache** - Cache dan kuki pelayar
- **Pelayar Berbeza** - Uji dengan pelayar lain
- **Semak Kebenaran** - Sahkan hak akses

### 4. Diagnostik Lanjutan
- **Semak Status Sistem** - Adakah sistem berjalan seperti biasa?
- **Semak Perubahan Terkini** - Apakah yang berubah baru-baru ini?
- **Uji dengan Data Berbeza** - Adakah ia khusus kepada data?
- **Rujuk Dokumentasi** - Semak panduan pengguna yang berkaitan

## Kod Ralat BigLedger dan Penyelesaian

### Kod Ralat Sistem (ERR-SYS-XXXX)

**ERR-SYS-0001: Akses Dinafikan**
- **Punca**: Pengguna tidak mempunyai kebenaran yang diperlukan untuk operasi yang diminta
- **Butiran Teknikal**: Pengesahan kebenaran gagal pada peringkat modul atau ciri
- **Penyelesaian Segera**:
  1. Hubungi pentadbir sistem
  2. Sahkan penugasan peranan pengguna dalam Pengurusan Pengguna
  3. Semak kebenaran khusus modul
- **Pencegahan Jangka Panjang**:
  - Laksanakan audit kebenaran berkala (suku tahunan)
  - Guna kawalan akses berasaskan peranan (RBAC) secara konsisten
  - Dokumentasikan keperluan kebenaran untuk setiap fungsi perniagaan

**ERR-SYS-0002: Sesi Tamat Tempoh**
- **Punca**: Tamat masa keselamatan akibat ketidakaktifan (lalai: 60 minit)
- **Butiran Teknikal**: Token sesi telah melebihi hayat maksimum
- **Penyelesaian Segera**:
  1. Log keluar sepenuhnya dan log masuk semula
  2. Kosongkan cache dan kuki pelayar
  3. Lumpuhkan simpan-auto pelayar untuk data sensitif
- **Pilihan Konfigurasi**:
  ```
  Session Settings (Admin > Security):
  • Timeout Period: 30-480 minutes
  • Idle Warning: 5 minutes before expiry
  • Concurrent Sessions: Allow/Restrict
  • Remember Me: Enable/Disable
  ```

**ERR-SYS-0003: Sambungan Pangkalan Data Gagal**
- **Punca**: Gangguan rangkaian atau pelayan pangkalan data tidak tersedia
- **Butiran Teknikal**: Kumpulan sambungan kehabisan atau penyelenggaraan pangkalan data
- **Penyelesaian Segera**:
  1. Tunggu 2-3 minit dan cuba semula
  2. Semak status sistem di status.bigledger.com
  3. Hubungi sokongan jika isu berterusan >5 minit
- **Pencegahan**: Pantau kesihatan pangkalan data dan penggunaan kumpulan sambungan

### Ralat Pengesahan Data (ERR-VAL-XXXX)

**ERR-VAL-1001: Medan Wajib Hilang**
- **Punca**: Medan wajib dibiarkan kosong semasa kemasukan data
- **Jenis Medan**: Kod pelanggan, nama produk, jumlah transaksi, dsb.
- **Langkah Penyelesaian**:
  1. Semak borang untuk medan bertanda asterisk merah (*)
  2. Isikan semua maklumat yang diperlukan
  3. Sahkan format data (tarikh, nombor, e-mel)
  4. Simpan rekod semula
- **Medan Hilang yang Biasa**:
  ```
  Customer Records: Name, Tax ID, Contact Info
  Product Records: Code, Name, Unit of Measure
  Transactions: Date, Amount, Account Code
  ```

**ERR-VAL-1002: Format Data Tidak Sah**
- **Punca**: Data tidak sepadan dengan format yang dijangka atau peraturan perniagaan
- **Senario Biasa**:
  - Format e-mel tidak sah (simbol @ hilang)
  - Format tarikh salah (DD/MM/YYYY diperlukan)
  - Format nombor telefon tidak sah (+60-XXX-XXXXXXX)
  - Format ID Cukai tidak sepadan dengan piawaian Malaysia
- **Penyelesaian**:
  1. Semak petunjuk dan contoh format medan
  2. Guna pengesah format jika tersedia
  3. Salin-tampal daripada sumber yang disahkan

### Ralat Transaksi (ERR-TXN-XXXX)

**ERR-TXN-2001: Inventori Tidak Mencukupi**
- **Punca**: Cuba menjual/memperuntukkan lebih banyak stok daripada yang tersedia
- **Butiran Teknikal**: Semakan inventori masa nyata gagal
- **Penyelesaian Terperinci**:
  1. Semak paras stok semasa: **Inventory > Stock Inquiry**
  2. Sahkan lokasi dan ketersediaan stok
  3. Pertimbangkan pilihan berikut:
     - Kurangkan kuantiti kepada stok yang tersedia
     - Pindahkan stok dari lokasi lain
     - Cipta pesanan tertangguh untuk baki kuantiti
     - Kemas kini inventori jika kiraan stok tidak betul
- **Amalan Terbaik Pengurusan Stok**:
  ```
  • Set reorder points for all active items
  • Monitor stock levels daily
  • Implement automatic reorder notifications
  • Regular cycle counting for accuracy
  ```

**ERR-TXN-2002: Harga Tidak Dijumpai**
- **Punca**: Tiada harga sah yang dikonfigurasi untuk gabungan item/pelanggan
- **Semakan Hierarki Harga**:
  1. Penetapan harga khusus pelanggan
  2. Penetapan harga kumpulan pelanggan
  3. Penetapan harga promosi
  4. Senarai harga standard
  5. Harga kos asas
- **Langkah Konfigurasi**:
  1. Navigasi ke **Sales > Price Management**
  2. Sediakan skema harga mengikut jenis pelanggan
  3. Konfigurasikan tempoh penetapan harga promosi
  4. Tetapkan harga lalai untuk produk baharu
  5. Uji penetapan harga dengan transaksi contoh

### Ralat Pematuhan Malaysia (ERR-MYS-XXXX)

**ERR-MYS-4001: Ralat Pengiraan SST**
- **Punca**: Isu pengiraan atau konfigurasi Cukai Jualan dan Perkhidmatan
- **Peraturan SST**:
  - Kadar Standard: 6% (kebanyakan barangan dan perkhidmatan)
  - Kadar Sifar: 0% (eksport, barangan dikecualikan)
  - Dikecualikan: Tiada SST dikenakan
- **Semakan Konfigurasi**:
  1. **Persediaan Produk**: Sahkan penugasan kod SST
  2. **Persediaan Pelanggan**: Semak status pengecualian SST
  3. **Tetapan Cukai**: Semak peraturan pengiraan SST
  4. **Kemas Kini Kadar**: Pastikan kadar SST semasa dimuatkan

**ERR-MYS-4002: Penjanaan e-Invois Gagal**
- **Punca**: Ralat integrasi MyInvois atau kegagalan pengesahan
- **Keperluan e-Invois LHDN**:
  ```
  Mandatory Fields:
  • Supplier TIN (Tax Identification Number)
  • Buyer TIN (for B2B transactions)
  • Invoice date and time
  • Unique invoice number
  • Product/service description
  • SST details
  ```
- **Ralat Pengesahan**:
  1. **Format TIN**: Mesti dalam format TIN Malaysia yang sah
  2. **Tarikh/Masa**: Mesti dalam tempoh penyerahan MyInvois
  3. **Mata Wang**: Hanya MYR dan mata wang asing yang diluluskan
  4. **Jenis Dokumen**: Mesti sepadan dengan jenis yang diluluskan LHDN

### Ralat Integrasi (ERR-INT-XXXX)

**ERR-INT-3001: Penyegerakan Gagal - Perbankan**
- **Punca**: Sambungan integrasi bank gagal atau pengesahan tamat tempoh
- **Bank Khusus yang Disokong**: Maybank, CIMB, Public Bank, RHB, Hong Leong
- **Langkah Penyelesaian Masalah**:
  1. **Semak Kelayakan**: Sahkan butiran log masuk bank dalam **Finance > Bank Integration**
  2. **Uji Sambungan**: Guna butang "Test Connection"
  3. **Segar Semula Token**: Sahkan semula jika menggunakan OAuth
  4. **Semakan Rangkaian**: Pastikan firewall membenarkan sambungan bank
  5. **Status Bank**: Semak jika sistem bank tergendala untuk penyelenggaraan

**ERR-INT-3002: Ralat Penyegerakan E-dagang**
- **Punca**: Isu sambungan dengan platform kedai dalam talian
- **Platform yang Disokong**: Shopee, Lazada, WooCommerce, Magento, Shopify
- **Subjenis Ralat**:
  ```
  3002-A: Authentication failure
  3002-B: Product catalog sync failed
  3002-C: Order download error
  3002-D: Inventory update failed
  3002-E: Pricing sync error
  ```
- **Penyelesaian Khusus Platform**:
  - **Shopee**: Semak kunci API dan rahsia dalam Seller Center
  - **Lazada**: Sahkan kebenaran aplikasi dalam Seller Center
  - **WooCommerce**: Uji kelayakan REST API
  - **Shopify**: Segar semula kebenaran aplikasi peribadi

{{< callout type="warning" >}}
**Keselamatan Dahulu**: Sebelum membuat sebarang perubahan sistem untuk menyelesaikan isu, pastikan anda mempunyai sandaran yang betul dan memahami kesan perubahan anda.
{{< /callout >}}

## Isu Khusus Pelayar

### Isu Chrome
- **Masalah Cache**: Kosongkan data pelayaran, set semula tetapan Chrome
- **Konflik Sambungan**: Lumpuhkan sambungan, uji dalam mod inkognito
- **Isu Memori**: Tutup tab yang tidak digunakan, mulakan semula pelayar

### Isu Firefox
- **Tetapan Keselamatan**: Laraskan pilihan keselamatan untuk BigLedger
- **Konflik Tambah-On**: Uji dengan tambah-on dilumpuhkan
- **Tetapan Kuki**: Pastikan kuki didayakan untuk BigLedger

### Isu Safari
- **Tetapan JavaScript**: Dayakan JavaScript untuk domain BigLedger
- **Tetapan Privasi**: Laraskan tetapan privasi untuk aplikasi perniagaan
- **Isu Cache**: Kosongkan data laman web untuk BigLedger

### Isu Pelayar Mudah Alih
- **Reka Bentuk Responsif**: Guna mod landskap untuk skrin yang kompleks
- **Antara Muka Sentuh**: Guna gerak isyarat yang sesuai untuk navigasi
- **Sambungan Data**: Pastikan sambungan internet yang stabil

## Pengoptimuman Prestasi

### Prestasi Sistem

#### Pengoptimuman Prestasi Terperinci

**Mengenal Pasti Halangan Prestasi**

1. **Papan Pemuka Prestasi Sistem**
   - Navigasi ke **Admin > System Health**
   - Pantau prestasi CPU, memori, dan pangkalan data
   - Semak sesi pengguna aktif dan proses serentak
   - Semak log sistem untuk corak ralat

2. **Pemantauan Pengalaman Pengguna**
   - Jejak masa muat halaman merentas modul yang berbeza
   - Pantau kelajuan penjanaan laporan
   - Analisis tempoh sesi pengguna dan tamat masa
   - Kenal pasti ciri berprestasi perlahan yang kerap diakses

**Pengoptimuman Prestasi Sisi Pelayar**

```
Recommended Browser Settings:
✓ Enable JavaScript and cookies
✓ Disable unnecessary browser extensions
✓ Clear cache weekly
✓ Update to latest browser version
✓ Allow pop-ups for BigLedger domain
✓ Set sufficient memory allocation
```

**Pengoptimuman Rangkaian**
- **Keperluan Lebar Jalur**: Minimum 10 Mbps untuk prestasi optimum
- **Pertimbangan Kependaman**: Kependaman <100ms ke pelayan BigLedger
- **Kestabilan Sambungan**: Sambungan berwayar lebih baik daripada WiFi
- **Kesan VPN**: Uji prestasi dengan/tanpa VPN
- **Konfigurasi Firewall**: Senarai putih domain dan port BigLedger

**Penalaan Prestasi Pangkalan Data**
- **Pengoptimuman Pertanyaan**: Guna penapis dan julat tarikh yang sesuai
- **Pengurusan Indeks**: Pastikan pengindeksan yang betul pada medan yang kerap dipertanyakan
- **Pengarkiban Data**: Arkibkan data lama untuk meningkatkan prestasi pertanyaan
- **Pengguna Serentak**: Pantau had sambungan pangkalan data
- **Tetingkap Penyelenggaraan**: Jadualkan penyelenggaraan pangkalan data secara berkala

#### Pengoptimuman Sisi Klien
- **Penyelenggaraan Pelayar**: Pengosongan cache berkala, kemas kini pelayar
- **Pengoptimuman Rangkaian**: Sambungan internet yang stabil, elakkan waktu puncak
- **Prestasi Peranti**: RAM yang mencukupi, tutup aplikasi yang tidak perlu
- **Resolusi Skrin**: Optimumkan tetapan paparan untuk BigLedger

#### Faktor Sisi Pelayan
- **Waktu Penggunaan Puncak**: Fahami corak beban sistem
- **Isipadu Data**: Laporan dan pertanyaan yang besar memberi kesan kepada prestasi
- **Beban Integrasi**: Berbilang integrasi serentak menjejaskan kelajuan
- **Tetingkap Penyelenggaraan**: Penyelenggaraan berjadual menjejaskan ketersediaan

### Prestasi Data
- **Pengoptimuman Pertanyaan**: Guna penapis dan julat tarikh yang sesuai
- **Kecekapan Laporan**: Hadkan skop data untuk laporan yang besar
- **Pemprosesan Kelompok**: Kumpulkan operasi serupa bersama-sama
- **Strategi Arkib**: Arkibkan data lama untuk meningkatkan prestasi

## Prosedur Peningkatan

### Bila Perlu Meningkatkan
- **Insiden Keselamatan**: Peningkatan segera untuk pelanggaran keselamatan
- **Gangguan Sistem**: Apabila sistem tidak tersedia sepenuhnya
- **Kerosakan Data**: Sebarang isu integriti data yang disyaki
- **Kesan Perniagaan Kritikal**: Isu yang menjejaskan operasi perniagaan teras

### Cara Meningkatkan
1. **Dokumentasikan Isu**: Penerangan masalah yang menyeluruh
2. **Kumpul Bukti**: Tangkapan skrin, mesej ralat, log
3. **Nilai Kesan**: Tahap kesan perniagaan dan kesegeraan
4. **Hubungi Sokongan yang Sesuai**: Guna saluran sokongan yang betul
5. **Susul**: Pantau penyelesaian dan komunikasikan status

## Sumber Layan Diri

### Pangkalan Pengetahuan
- **Bahagian Soalan Lazim** - Jawapan kepada soalan yang kerap ditanya
- **Tutorial Video** - Panduan visual langkah demi langkah
- **Forum Pengguna** - Sokongan didorong komuniti
- **Dokumentasi** - Panduan pengguna yang menyeluruh

### Alat Diagnostik
- **Semakan Kesihatan Sistem** - Diagnostik sistem terbina dalam
- **Ujian Sambungan** - Ujian rangkaian dan integrasi
- **Pemeriksa Kebenaran** - Sahkan hak akses pengguna
- **Pemantau Prestasi** - Metrik prestasi sistem

{{< callout type="tip" >}}
**Petua Kecekapan**: Simpan log penyelesaian masalah untuk menjejaki isu berulang dan penyelesaiannya. Ini membina kepakaran anda dan membantu mengenal pasti peluang penambahbaikan sistem.
{{< /callout >}}

## Strategi Pencegahan

### Penyelenggaraan Proaktif
- **Kemas Kini Berkala**: Pastikan pelayar dan sistem dikemas kini
- **Program Latihan**: Pendidikan dan latihan pengguna yang berterusan
- **Pemantauan Sistem**: Semakan kesihatan dan pemantauan prestasi berkala
- **Sandaran Data**: Kekalkan sandaran semasa dan prosedur pemulihan

### Amalan Terbaik
- **Dokumentasi**: Pastikan prosedur didokumentasikan dan terkini
- **Ujian**: Uji perubahan dalam pementasan sebelum pengeluaran
- **Komunikasi**: Maklumkan pengguna tentang perubahan dan kemas kini sistem
- **Pemantauan**: Sediakan amaran untuk metrik sistem kritikal

## Mendapatkan Bantuan

### Saluran Sokongan
- **📧 Sokongan E-mel**: vincent@bigledger.com untuk isu teknikal
- **💬 Sembang Pantas**: Telegram @leehongfay untuk soalan segera
- **📞 Sokongan Telefon**: Tersedia semasa waktu perniagaan
- **🌐 Portal Sokongan**: Sistem tiket dalam talian dan pangkalan pengetahuan

### Maklumat Sokongan untuk Diberikan
- **Penerangan Masalah**: Penjelasan isu yang jelas
- **Langkah untuk Menghasilkan Semula**: Cara mencipta semula masalah
- **Mesej Ralat**: Teks tepat sebarang mesej ralat
- **Maklumat Pengguna**: Butiran akaun dan kebenaran
- **Butiran Sistem**: Maklumat pelayar, peranti, dan rangkaian
- **Kesan Perniagaan**: Bagaimana isu menjejaskan operasi anda

### Jangkaan Masa Tindak Balas
- **Isu Kritikal**: Masa tindak balas 1-2 jam
- **Keutamaan Tinggi**: Masa tindak balas 4-8 jam
- **Isu Biasa**: Masa tindak balas 1-2 hari perniagaan
- **Permintaan Penambahbaikan**: Disemak dalam kitaran perancangan bulanan

{{< callout type="success" >}}
**Kejayaan Penyelesaian**: Kebanyakan isu pengguna boleh diselesaikan dengan cepat melalui pengenalpastian masalah yang betul dan menggunakan sumber serta saluran sokongan yang sesuai.
{{< /callout >}}
