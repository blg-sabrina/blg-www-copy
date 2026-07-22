---
description: Master BigLedger's document item types including Basic Items, Kits, Grouped Items, Packages, and Bundles for comprehensive inventory and sales management.
tags:
- user-guide
- tutorial
- inventory-management
- item-types
- business-operations
title: Jenis & Klasifikasi Item Dokumen
weight: 10
---

Memahami jenis item dokumen BigLedger adalah asas kepada pengurusan inventori, pemprosesan jualan, dan operasi perniagaan yang berkesan. Setiap jenis item berfungsi untuk senario perniagaan tertentu dan menawarkan kefungsian unik untuk mengurus hubungan inventori yang kompleks.

## Gambaran Keseluruhan

BigLedger menyokong lima jenis item dokumen yang berbeza, setiap satu direka untuk senario perniagaan dan hubungan inventori tertentu. Jenis-jenis ini menentukan cara item berkelakuan dalam transaksi, penjejakan inventori, dan pelaporan kewangan.

{{< callout type="info" >}}
**Konsep Asas**: Item dokumen dalam BigLedger mewakili entiti perniagaan yang boleh dijual, dibeli, atau diurus. Jenis item menentukan hubungan antara item dokumen (item FI) dan item inventori fizikal (item INV).
{{< /callout >}}

---

## Lima Jenis Item Dokumen

### 1. Item Asas (Item FI)

**Definisi**: Item asas mengekalkan hubungan satu-dengan-satu dengan item inventori fizikal (item INV), mewakili jenis item yang paling mudah dan paling biasa dalam BigLedger.

#### Ciri Utama

- **Pemetaan Langsung**: Satu item FI bersamaan dengan satu item INV
- **Penjejakan Inventori**: Kemas kini tahap stok masa nyata
- **Pemprosesan Mudah**: Transaksi jualan dan pembelian yang langsung
- **Integrasi Kewangan**: Pengeposan kos dan hasil secara langsung
- **Sokongan Kod Bar**: Pengimbasan dan pengenalpastian kod bar standard

#### Kes Penggunaan Perniagaan

{{< cards >}}
  {{< card title="Produk Runcit" subtitle="Produk individu yang dijual sebagai unit tunggal" >}}
  {{< card title="Bahan Mentah" subtitle="Input pembuatan yang dijejaki secara individu" >}}
  {{< card title="Bekalan Pejabat" subtitle="Bekalan perniagaan standard dan barangan guna habis" >}}
  {{< card title="Item Peralatan" subtitle="Alat, jentera, dan peralatan modal" >}}
{{< /cards >}}

#### Kelakuan Inventori

- **Pemotongan Stok**: Pengurangan inventori segera semasa jualan
- **Penerimaan**: Peningkatan stok langsung semasa pembelian atau penerimaan
- **Penilaian**: Kos item tunggal dan harga jualan
- **Pelaporan**: Penjejakan dan analisis item individu

---

### 2. Item Kit

**Definisi**: Kit menggabungkan beberapa item asas ke dalam satu unit boleh dijual sambil mengekalkan penjejakan inventori untuk komponen individu melalui proses kitting dan kitting terbalik automatik.

#### Ciri Utama

- **Struktur Komponen**: Kit induk dengan beberapa komponen anak
- **Pemprosesan Automatik**: Kitting dan kitting terbalik yang diurus sistem
- **Kesan Inventori Dwiguna**: Komponen berkurang, kit terpasang bertambah
- **Integrasi Pembuatan**: Aliran kerja pengeluaran dan pemasangan
- **Kawalan Kualiti**: Pengesahan dan pengesahihan komponen

#### Pengurusan Komponen

**Proses Kitting**:
1. Pilih komponen kit daripada inventori
2. Sistem mengesahkan ketersediaan komponen
3. Tahap stok komponen berkurang
4. Stok kit terpasang bertambah sebanyak satu unit
5. Pengiraan kos merangkumi semua kos komponen

**Proses Kitting Terbalik**:
1. Kit dileraikan semula kepada komponen
2. Tahap stok kit berkurang
3. Tahap stok komponen individu bertambah
4. Perakaunan kos berbalik kepada nilai komponen

#### Aplikasi Perniagaan

{{< cards >}}
  {{< card title="Sistem Komputer" subtitle="CPU, memori, storan dipasang menjadi komputer lengkap" >}}
  {{< card title="Set Hadiah" subtitle="Berbilang produk dibungkus bersama untuk promosi" >}}
  {{< card title="Kit Alat" subtitle="Set alat lengkap untuk aplikasi tertentu" >}}
  {{< card title="Pakej Hidangan" subtitle="Hidangan gabungan restoran dengan berbilang komponen" >}}
{{< /cards >}}

#### Contoh: Kit Komputer

**Komponen Kit**:
- **A1**: Pemproses Intel i7 ($300)
- **A2**: Memori DDR4 16GB ($120)
- **A3**: Storan SSD 512GB ($100)
- **A4**: Kad Grafik Permainan ($400)

**Pemasangan Kit**:
- **Kit-A**: Komputer Permainan Lengkap ($920 + kos pemasangan)
- Apabila satu Kit-A dipasang, komponen A1, A2, A3, A4 setiap satu berkurang sebanyak 1
- Inventori Kit-A bertambah sebanyak 1

---

### 3. Item Berkumpulan

**Definisi**: Item berkumpulan mengurus produk dengan dimensi atau variasi (saiz, warna, gaya) sambil mengekalkan identiti produk tunggal dengan berbilang pilihan pemilihan untuk pelanggan.

#### Ciri Utama

- **Pengurusan Dimensi**: Variasi saiz, warna, gaya, dan atribut lain
- **Pemilihan Pelanggan**: Persembahan pilihan interaktif
- **Kekangan Nisbah**: Hanya satu item asas dipilih setiap transaksi
- **Persembahan Bersatu**: Produk tunggal dengan berbilang pilihan
- **Penjejakan Inventori**: Penjejakan individu untuk setiap variasi

#### Struktur Pengumpulan

**Kumpulan Induk**: Barisan Produk Baju-T
- **Variasi Warna**: Kuning, Biru, Merah
- **Variasi Saiz**: Kecil (3), Sederhana (4), Besar (5)
- **Pemilihan Pelanggan**: Satu warna + satu saiz = satu item FI asas

#### Aliran Pengalaman Pelanggan

1. **Pemilihan Produk**: Pelanggan memilih "Baju-T" daripada katalog
2. **Persembahan Pilihan**: Sistem memaparkan pilihan warna dan saiz
3. **Pilihan Pelanggan**: Pilih warna "Biru" dan saiz "Sederhana"
4. **Resolusi Item**: Sistem mengenal pasti item FI asas tertentu
5. **Pemprosesan Transaksi**: Jualan diproses untuk variasi yang dipilih

#### Aplikasi Perniagaan

{{< cards >}}
  {{< card title="Pakaian & Fesyen" subtitle="Pakaian dengan variasi saiz, warna, dan gaya" >}}
  {{< card title="Elektronik" subtitle="Produk dengan variasi kapasiti, warna, atau ciri" >}}
  {{< card title="Alat Ganti Automotif" subtitle="Alat ganti dengan variasi keserasian" >}}
  {{< card title="Produk Makanan" subtitle="Item dengan variasi saiz, perisa, atau pembungkusan" >}}
{{< /cards >}}

#### Faedah Pengurusan Inventori

- **Katalog Bersatu**: Penyenaraian produk tunggal dengan berbilang variasi
- **Penjejakan Individu**: Tahap stok berasingan untuk setiap variasi
- **Kemudahan Pelanggan**: Proses pemilihan yang mudah
- **Fleksibiliti Pelaporan**: Analisis mengikut barisan produk atau variasi individu

---

### 4. Item Pakej

**Definisi**: Item pakej mewujudkan hubungan satu-dengan-banyak di mana satu item FI dipetakan kepada berbilang item INV, membolehkan pembungkusan produk kompleks dengan pengurusan inventori yang fleksibel.

#### Ciri Utama

- **Pemetaan Berbilang**: Satu item FI mengandungi berbilang item INV
- **Pemotongan Tertunda**: Inventori berkurang hanya semasa jualan pakej
- **Komposisi Fleksibel**: Kuantiti berbeza pelbagai item
- **Penetapan Harga Pakej**: Harga tunggal untuk keseluruhan pakej
- **Penggunaan Promosi**: Tawaran istimewa dan tawaran berbungkus

#### Kelakuan Pakej

**Inventori Pra-Jualan**:
- Item komponen kekal dalam kumpulan inventori individu
- Tiada pergerakan inventori semasa penciptaan pakej
- Komponen tersedia untuk jualan individu sehingga pakej dijual

**Semasa Jualan Pakej**:
- Semua item INV komponen berkurang mengikut spesifikasi pakej
- Satu transaksi memproses berbilang pergerakan inventori
- Pengeposan kewangan mencerminkan peruntukan harga pakej

#### Contoh Komposisi Pakej

**Pakej Permulaan Pejabat**:
- 5x Pen (INV-001)
- 3x Buku Nota (INV-002)
- 1x Pengokot (INV-003)
- 1x Dispenser Pita (INV-004)
- **Harga Pakej**: $25.00 (berbanding $32.00 jumlah individu)

**Pakej Bungkusan Perisian**:
- 1x Lesen Sistem Pengendalian (INV-501)
- 1x Lesen Suite Pejabat (INV-502)
- 1x Lesen Antivirus (INV-503)
- **Harga Pakej**: $199.00 (berbanding $300.00 jumlah individu)

#### Aplikasi Perniagaan

{{< cards >}}
  {{< card title="Bungkusan Promosi" subtitle="Pakej pemasaran dengan harga istimewa" >}}
  {{< card title="Kit Permulaan" subtitle="Penyelesaian lengkap untuk pelanggan baharu" >}}
  {{< card title="Pakej Bermusim" subtitle="Gabungan produk perayaan dan bermusim" >}}
  {{< card title="Pakej Perkhidmatan" subtitle="Tawaran produk dan perkhidmatan gabungan" >}}
{{< /cards >}}

---

### 5. Item Bundle

**Definisi**: Item bundle mewakili jenis item yang paling kompleks, mampu mengandungi sebarang gabungan item asas, kit, item berkumpulan, atau pakej dalam struktur berhierarki yang menyokong sehingga dua tahap kerumitan.

#### Ciri Utama

- **Bekas Universal**: Boleh merangkumi sebarang jenis item lain
- **Berbilang GenDocLines**: Penjanaan baris transaksi kompleks
- **Sokongan Dua Tahap**: Bundle utama dengan keupayaan sub-bundle
- **Penetapan Harga Fleksibel**: Strategi penetapan harga individu atau bundle
- **Senario Lanjutan**: Gabungan produk peringkat perusahaan

#### Tahap Kerumitan Bundle

**Bundle Tahap 1**: Gabungan langsung pelbagai jenis item
- Item asas + Kit + Item berkumpulan + Pakej
- Struktur satu tahap dengan pemprosesan langsung
- Sesuai untuk kebanyakan senario perniagaan

**Bundle Tahap 2**: Struktur bundle bersarang
- Bundle utama mengandungi sub-bundle
- Hierarki kompleks dengan berbilang lapisan pemprosesan
- Senario perusahaan lanjutan

#### Contoh Komposisi Bundle

**Bundle Penyelesaian IT Perusahaan**:

**Bundle Utama**: Persediaan Pejabat Lengkap
- **Kit Perkakasan**: Komputer, monitor, papan kekunci (Item kit)
- **Pakej Perisian**: Sistem pengendalian dan aplikasi (Item pakej)
- **Item Asas**: Kabel, penyesuai, pelindung lonjakan (Item asas)
- **Kumpulan Perkhidmatan**: Pilihan pemasangan (Item berkumpulan - di tapak/jauh/standard/premium)

**Sub-Bundle Bersarang**: Infrastruktur Rangkaian
- **Kit Rangkaian**: Penghala, suis, kabel (Item kit)
- **Pakej Keselamatan**: Perisian dan lesen tembok api (Item pakej)
- **Item Asas**: Aksesori rangkaian (Item asas)

#### Kerumitan Pemprosesan Transaksi

**Penjanaan Berbilang GenDocLines**:
- Setiap komponen bundle menjana baris dokumen berasingan
- Peruntukan kos dan pengiraan harga yang kompleks
- Penjejakan komponen individu dalam konteks bundle
- Pelaporan terperinci untuk analisis bundle

#### Aplikasi Perniagaan

{{< cards >}}
  {{< card title="Penyelesaian Perusahaan" subtitle="Pelaksanaan sistem perniagaan lengkap" >}}
  {{< card title="Jualan Berasaskan Projek" subtitle="Projek besar dengan berbilang jenis komponen" >}}
  {{< card title="Perkhidmatan Langganan" subtitle="Tawaran perkhidmatan kompleks dengan berbilang elemen" >}}
  {{< card title="Konfigurasi Tersuai" subtitle="Penyelesaian disesuaikan untuk keperluan pelanggan tertentu" >}}
{{< /cards >}}

---

## Memilih Jenis Item yang Betul

### Rangka Kerja Keputusan

Gunakan rangka kerja ini untuk menentukan jenis item yang sesuai untuk senario perniagaan anda:

#### Mulakan dengan Soalan Asas

1. **Item Tunggal atau Berbilang?**
   - Tunggal → Pertimbangkan Item Asas
   - Berbilang → Nilai jenis lain

2. **Hubungan Inventori?**
   - Satu-dengan-satu → Item Asas
   - Satu-dengan-banyak → Pakej, Kit, atau Bundle
   - Banyak-dengan-satu → Item Berkumpulan

3. **Pemprosesan Komponen?**
   - Tiada pemprosesan → Pakej
   - Pemasangan diperlukan → Kit
   - Gabungan kompleks → Bundle

4. **Pengalaman Pelanggan?**
   - Pemilihan mudah → Item Asas
   - Pemilihan pilihan → Item Berkumpulan
   - Pilihan bundle → Pakej atau Bundle

### Pemetaan Senario Perniagaan

{{< cards >}}
  {{< card title="Runcit Mudah" subtitle="Gunakan Item Asas untuk jualan produk yang langsung" >}}
  {{< card title="Pembuatan" subtitle="Gunakan Kit untuk produk terpasang dengan penjejakan komponen" >}}
  {{< card title="Variasi" subtitle="Gunakan Item Berkumpulan untuk produk dengan pilihan saiz/warna" >}}
  {{< card title="Promosi" subtitle="Gunakan Pakej untuk bungkusan pemasaran dan tawaran istimewa" >}}
  {{< card title="Perusahaan" subtitle="Gunakan Bundle untuk penyelesaian kompleks berbilang komponen" >}}
{{< /cards >}}

---

## Amalan Terbaik Pelaksanaan

### Merancang Struktur Item Anda

**Penilaian Inventori**:
1. Katalogkan semua produk dan hubungannya
2. Kenal pasti keperluan pemasangan atau pembungkusan
3. Tentukan keperluan pemilihan pelanggan
4. Nilai strategi penetapan harga dan promosi

**Konfigurasi Sistem**:
1. Mulakan dengan Item Asas untuk produk mudah
2. Laksanakan Item Berkumpulan untuk pengurusan variasi
3. Tambah Kit untuk operasi pemasangan
4. Gunakan Pakej untuk strategi promosi
5. Simpan Bundle untuk senario perusahaan kompleks

### Pengurusan Data

**Penamaan Konsisten**:
- Gunakan nama item yang jelas dan deskriptif
- Laksanakan konvensyen penamaan yang seragam
- Sertakan pengecam dan kod yang relevan
- Kekalkan konsistensi merentasi jenis item

**Hubungan Tepat**:
- Sahkan pemetaan komponen dalam Kit
- Sahkan struktur pengumpulan untuk Item Berkumpulan
- Sahkan komposisi pakej
- Uji hierarki bundle dengan teliti

### Pengoptimuman Prestasi

**Kecekapan Pangkalan Data**:
- Penyelenggaraan berkala hubungan item
- Pembersihan item yang tidak digunakan atau usang
- Pengoptimuman struktur bundle kompleks
- Pemantauan masa pemprosesan transaksi

**Pengalaman Pengguna**:
- Latih kakitangan tentang perbezaan jenis item
- Sediakan antara muka pemilihan pelanggan yang jelas
- Laksanakan carian dan penapisan yang cekap
- Semakan berkala keberkesanan jenis item

---

## Integrasi dengan Modul Lain

### Integrasi Perakaunan Kewangan

**Perakaunan Kos**:
- Item Asas: Penetapan kos langsung
- Kit: Pengumpulan kos komponen
- Item Berkumpulan: Penetapan kos khusus variasi
- Pakej: Pengagihan kos yang diperuntukkan
- Bundle: Pengurusan hierarki kos kompleks

**Pengiktirafan Hasil**:
- Jenis item menentukan kaedah pengeposan hasil
- Komponen bundle mungkin memerlukan aliran hasil berasingan
- Jualan pakej menggunakan pendekatan hasil disatukan
- Jualan kit termasuk pengiktirafan nilai tambah pemasangan

### Integrasi Pengurusan Inventori

**Penjejakan Stok**:
- Kemas kini masa nyata untuk semua jenis item
- Penjejakan peringkat komponen untuk Kit dan Bundle
- Tahap khusus variasi untuk Item Berkumpulan
- Tempahan komponen pakej

**Integrasi Perolehan**:
- Pemesanan semula automatik berdasarkan keperluan jenis item
- Semakan ketersediaan komponen untuk Kit
- Perancangan perolehan komponen pakej
- Penjanaan pesanan pembelian peringkat bundle

### Integrasi Jualan dan CRM

**Pengalaman Pelanggan**:
- Persembahan katalog produk berdasarkan jenis item
- Pemilihan pilihan dinamik untuk Item Berkumpulan
- Alat konfigurasi bundle untuk jualan kompleks
- Integrasi promosi dan pemasaran pakej

**Pengurusan Harga**:
- Strategi penetapan harga khusus jenis item
- Hubungan penetapan harga komponen dan bundle
- Penetapan harga promosi untuk Pakej
- Penetapan harga khusus pelanggan untuk semua jenis

---

## Menyelesaikan Isu Biasa

### Penukaran Jenis Item

**Menukar Jenis Item**:
{{< callout type="warning" >}}
**Penting**: Penukaran antara jenis item mungkin menjejaskan transaksi sedia ada dan baki inventori. Sentiasa sandarkan data dan uji dalam persekitaran pembangunan sebelum membuat perubahan.
{{< /callout >}}

**Amalan Penukaran Selamat**:
1. Lengkapkan semua transaksi tertunda
2. Sesuaikan baki inventori
3. Sandarkan data yang relevan
4. Uji penukaran dalam persekitaran pembangunan
5. Rancang untuk pemeliharaan sejarah transaksi

### Isu Prestasi

**Prestasi Bundle Kompleks**:
- Hadkan penyarangan bundle kepada dua tahap
- Pembersihan berkala komponen yang tidak digunakan
- Pantau masa pemprosesan transaksi
- Optimumkan indeks pangkalan data untuk hubungan item

**Penyegerakan Inventori**:
- Penyesuaian berkala hubungan komponen
- Pengesahan automatik komposisi Kit dan Pakej
- Pemantauan integriti variasi Item Berkumpulan
- Pengujian prestasi dengan katalog besar

### Integriti Data

**Pengesahan Hubungan**:
- Audit berkala pemetaan komponen
- Pengesahan pengiraan tahap inventori
- Pengesahan konsistensi hubungan penetapan harga
- Pemantauan ketepatan pengeposan kewangan

---

## Ciri Lanjutan dan Penambahbaikan Masa Depan

### Keupayaan Automasi

**Klasifikasi Item Pintar**:
- Cadangan jenis item berkuasa AI
- Pengesanan hubungan komponen automatik
- Pengumpulan dinamik berdasarkan atribut produk
- Cadangan komposisi bundle pintar

**Penambahbaikan Integrasi**:
- Penyegerakan platform e-dagang yang dipertingkat
- Integrasi pembuatan lanjutan
- Pengurusan hubungan pembekal yang lebih baik
- Keupayaan pelaporan kewangan yang diperluaskan

### Pertimbangan Kebolehskalaan

**Penskalaan Perusahaan**:
- Pemprosesan transaksi bervolum tinggi
- Pengurusan inventori berbilang lokasi
- Pengembangan sokongan hierarki kompleks
- Pelaporan dan analitik lanjutan

---

## Sumber Berkaitan

Kembangkan pemahaman anda tentang pengurusan item BigLedger:

- [Prosedur Penyelenggaraan Item](/ms/user-guide/basic-operations/item-maintenance/) - Mencipta dan mengurus item individu
- [Pengurusan Inventori](/ms/modules/inventory/) - Sistem kawalan inventori lengkap
- [Skema Harga](/ms/user-guide/daily-tasks/pricing-scheme/) - Strategi penetapan harga lanjutan
- [Operasi Jualan](/ms/modules/crm/) - Pengurusan hubungan pelanggan dan jualan
- [Integrasi Pembuatan](/ms/modules/manufacturing/) - Aliran kerja pengeluaran dan pemasangan

---

## Mendapatkan Bantuan dan Sokongan

### Sokongan Teknikal

Untuk bantuan dengan jenis item dokumen:
- **Sokongan Teknikal**: vincent@bigledger.com
- **Perundingan Pelaksanaan**: sales@bigledger.com
- **Sumber Latihan**: Tutorial video dan dokumentasi yang menyeluruh
- **Sokongan Komuniti**: Forum pengguna dan pangkalan pengetahuan

### Perkhidmatan Profesional

Pertimbangkan perkhidmatan profesional untuk:
- Perancangan pelaksanaan jenis item yang kompleks
- Konfigurasi senario perniagaan tersuai
- Persediaan integrasi lanjutan
- Pengoptimuman prestasi dan perancangan kebolehskalaan

{{< callout type="success" >}}
**Kejayaan Pelaksanaan**: Perniagaan yang melaksanakan sistem jenis item BigLedger dengan betul melihat peningkatan 40% dalam ketepatan inventori dan pengurangan 25% dalam masa pemprosesan transaksi.
{{< /callout >}}
