---
description: Cipta dan uruskan skema harga fleksibel untuk segmen pelanggan, saluran pasaran, dan senario perniagaan yang berbeza dengan sistem harga komprehensif BigLedger.
tags:
- user-guide
- tutorial
- pricing
- financial-management
title: Skema Harga & Pengurusan Strategi
weight: 50
---

Kuasai sistem harga fleksibel BigLedger untuk mencipta strategi harga canggih yang menyesuaikan diri dengan pelanggan, pasaran, dan senario perniagaan yang berbeza sambil mengekalkan keuntungan dan kedudukan bersaing.

## Gambaran Keseluruhan

Skema harga dalam BigLedger ialah templat berkuasa yang menentukan struktur harga untuk produk dan perkhidmatan anda. Skema ini boleh diterapkan merentasi berbilang modul perniagaan termasuk POS, pesanan jualan, sebut harga, dan platform e-dagang, menyediakan harga yang konsisten sambil membenarkan fleksibiliti khusus pelanggan dan berasaskan senario.

{{< callout type="info" >}}
**Konsep Utama**: Skema harga mencipta rangka kerja, manakala harga item sebenar ditetapkan dalam modul [Penyelenggaraan Item](/ms/user-guide/item-maintenance/). Pemisahan ini membenarkan strategi harga yang fleksibel merentasi segmen pelanggan dan saluran jualan yang berbeza.
{{< /callout >}}

---

## Memahami Skema Harga

### Apakah Skema Harga?

Skema harga ialah templat yang menentukan cara pelbagai jenis harga dikira dan diterapkan:

- **Jenis Harga**: Harga runcit, borong, ahli, promosi, minimum, maksimum
- **Segmen Pelanggan**: Harga berbeza untuk kategori pelanggan yang berbeza
- **Khusus Saluran**: Harga unik untuk POS, e-dagang, portal B2B
- **Sensitif Masa**: Harga bermusim, promosi, atau berasaskan masa
- **Berasaskan Isipadu**: Pemecahan kuantiti dan struktur harga pukal

### Integrasi Merentasi Modul

Skema harga bersepadu dengan lancar dengan:
- **Sistem POS**: Pemilihan harga automatik berdasarkan jenis pelanggan
- **Platform E-dagang**: Harga dinamik untuk saluran dalam talian
- **Pesanan Jualan**: Penerapan harga khusus pelanggan
- **Sistem Sebut Harga**: Persembahan harga profesional
- **Perolehan**: Pengiraan harga kos-tambah

---

## Mengakses Pengurusan Skema Harga

### Navigasi dan Antara Muka

1. Navigasi ke **Skema Harga** daripada menu utama anda
2. Akses halaman penyenaraian komprehensif dengan keupayaan carian lanjutan
3. Gunakan antara muka AG-Grid untuk pengurusan skema yang cekap
4. Manfaatkan carian kabur untuk lokasi skema yang pantas

### Ciri Halaman Penyenaraian

**Keupayaan Carian dan Penapisan**
- **Carian Umum**: Carian berasaskan teks pantas merentasi semua medan skema
- **Carian Lanjutan**: Penapisan terperinci mengikut status, jenis, julat tarikh
- **Carian Kabur**: Cari skema walaupun dengan terma separa atau anggaran
- **Pilihan Isih**: Atur mengikut nama, tarikh dicipta, kali terakhir diubah suai, kekerapan penggunaan

**Penunjuk Visual**
- **Ikon Status**: Penunjuk skema aktif, tidak aktif, draf
- **Statistik Penggunaan**: Tunjukkan skema mana yang paling kerap digunakan
- **Status Integrasi**: Nyatakan modul mana yang menggunakan setiap skema
- **Kali Terakhir Diubah Suai**: Jejaki perubahan dan kemas kini terkini

---

## Mencipta Skema Harga

### Proses Penciptaan Skema

#### 1. Mulakan Penciptaan Skema Baharu

1. Klik **butang "+"** pada halaman penyenaraian skema harga
2. Dialog penciptaan terbuka dalam bekas sekunder
3. Lengkapkan maklumat yang diperlukan dan pilihan
4. Simpan untuk mencipta templat skema harga baharu anda

#### 2. Maklumat Skema Penting

**Kod Dijana Sistem**
- Dicipta secara automatik oleh BigLedger
- Pengecam unik untuk penjejakan dalaman
- Digunakan dalam panggilan API dan eksport data
- Tidak boleh diubah suai selepas penciptaan

**Nama Skema** *(Diperlukan)*
- Nama deskriptif untuk pengenalan mudah
- Amalan terbaik: Sertakan tujuan dan pasaran sasaran
- Contoh: "Runcit Standard", "Borong Pukal", "Diskaun Ahli"
- Kekalkan nama yang konsisten dan profesional

**Penerangan** *(Pilihan)*
- Penjelasan terperinci tentang tujuan dan penggunaan skema
- Sertakan segmen pelanggan sasaran
- Nyatakan sebarang keadaan atau sekatan istimewa
- Berguna untuk pemahaman dan latihan pasukan

### Contoh Konfigurasi Skema

**Skema Harga Runcit**
- Nama: "Harga Runcit Standard"
- Penerangan: "Harga runcit standard untuk pelanggan datang sendiri dan jualan dalam talian"
- Penggunaan: Sistem POS, platform e-dagang, sebut harga umum

**Skema Harga Borong**  
- Nama: "Harga B2B Borong"
- Penerangan: "Harga pukal untuk pelanggan perniagaan dengan diskaun isipadu"
- Penggunaan: Portal B2B, pemprosesan pesanan besar, jualan pengedar

**Skema Harga Ahli**
- Nama: "Eksklusif Ahli VIP"
- Penerangan: "Harga istimewa untuk ahli program kesetiaan dengan diskaun tambahan"
- Penggunaan: Portal ahli, POS dengan pengenalan pelanggan, promosi istimewa

---

## Menyunting dan Menguruskan Skema Harga

### Mengakses Penyuntingan Skema

1. Klik pada mana-mana skema harga daripada penyenaraian utama
2. Akses antara muka penyuntingan yang komprehensif
3. Navigasi antara tab konfigurasi yang berbeza
4. Buat perubahan dan simpan kemas kini

### Konfigurasi Tab Utama

**Pengurusan Maklumat Teras**
- **Kod Harga**: Lihat kod sistem (baca sahaja untuk rujukan)
- **Nama Skema**: Kemas kini penamaan untuk kejelasan dan ketekalan
- **Penerangan**: Ubah suai penjelasan terperinci dan nota penggunaan
- **Pengurusan Status**: Kawal status aktif/tidak aktif untuk ketersediaan skema

**Pilihan Kawalan Status**
- **Aktif**: Skema tersedia untuk digunakan dalam semua modul bersepadu
- **Tidak Aktif**: Skema disembunyikan daripada pemilihan tetapi penggunaan sedia ada dikekalkan
- **Draf**: Skema dalam pembangunan, tidak tersedia untuk kegunaan operasi

**Tindakan Pengurusan Skema**
- **Simpan Perubahan**: Kemas kini maklumat skema
- **Duplikasi Skema**: Cipta salinan untuk strategi harga yang serupa  
- **Padam Skema**: Buang skema yang tidak digunakan (dengan pemeriksaan keselamatan)
- **Eksport Tetapan**: Jana konfigurasi skema untuk sandaran atau pemindahan

### Fungsi Tab Salin

**Duplikasi dan Templat Skema**
- **Pemilihan Skema Sumber**: Pilih skema sedia ada sebagai titik permulaan
- **Pilihan Pengubahsuaian**: Laraskan peratusan harga, tambah/buang jenis harga
- **Kemas Kini Pukal**: Terapkan perubahan merentasi berbilang titik harga
- **Penciptaan Templat**: Simpan sebagai templat boleh guna semula untuk skema masa hadapan

**Ciri Salin Lanjutan**
- **Penyalinan Terpilih**: Pilih elemen tertentu untuk diduplikasi
- **Pelarasan Harga**: Terapkan kenaikan atau penurunan peratusan semasa penyalinan
- **Pemetaan Segmen Pelanggan**: Sesuaikan skema untuk segmen pasaran yang berbeza
- **Sokongan Berbilang Mata Wang**: Tukar harga untuk pasaran antarabangsa

---

## Penerapan Skema Harga

### Integrasi POS

**Persediaan Konfigurasi POS**
1. Akses tetapan POS daripada navigasi utama anda
2. Navigasi ke bahagian konfigurasi harga
3. Pilih skema harga yang sesuai untuk senario yang berbeza:
   - **Harga Minimum**: Harga jualan terendah yang dibenarkan
   - **Harga Maksimum**: Harga jualan tertinggi yang dicadangkan  
   - **Harga Runcit**: Harga pelanggan standard
   - **Harga Ahli**: Harga istimewa untuk ahli kesetiaan

**Pemilihan Harga Dinamik**
- **Pengecaman Jenis Pelanggan**: Pemilihan skema automatik berdasarkan profil pelanggan
- **Pengatasan Manual**: Keupayaan kakitangan untuk memilih skema yang sesuai apabila diperlukan
- **Integrasi Promosi**: Terapkan skema promosi semasa acara istimewa
- **Pematuhan Cukai**: Pastikan pematuhan GST/SST Malaysia dalam semua harga

### Integrasi Platform E-dagang

**Harga Berbilang Saluran**
- **Skema Khusus Platform**: Harga berbeza untuk Shopify, Lazada, Shopee
- **Penyesuaian Mata Wang**: Penukaran automatik untuk jualan antarabangsa
- **Harga Promosi**: Harga sensitif masa untuk kempen pemasaran
- **Harga Berasaskan Inventori**: Pelarasan harga berdasarkan tahap stok

### Integrasi Pesanan Jualan dan Sebut Harga

**Persembahan Harga Profesional**
- **Harga Khusus Pelanggan**: Penerapan automatik berdasarkan pengelasan pelanggan
- **Diskaun Isipadu**: Pengiraan harga berasaskan kuantiti
- **Harga Projek**: Skema istimewa untuk projek atau kontrak besar
- **Aliran Kerja Kelulusan**: Kelulusan pengurusan untuk permintaan harga istimewa

---

## Strategi Harga Lanjutan

### Sistem Harga Berbilang Peringkat

**Segmentasi Pelanggan**
- **Pelanggan Runcit**: Harga standard dengan margin penuh
- **Pelanggan Borong**: Harga berasaskan isipadu dengan margin dikurangkan
- **Ahli VIP**: Harga istimewa dengan diskaun kesetiaan
- **Kakitangan/Pekerja**: Harga dalaman untuk pembelian pekerja

**Harga Geografi**
- **Pasaran Tempatan**: Harga serantau standard
- **Pasaran Eksport**: Harga antarabangsa dengan pertimbangan mata wang  
- **Kawasan Terpencil**: Harga terlaras untuk kos penghantaran
- **Bandar vs Luar Bandar**: Strategi harga khusus pasaran

### Harga Berasaskan Masa

**Pelarasan Bermusim**
- **Musim Puncak**: Harga lebih tinggi semasa tempoh permintaan tinggi
- **Luar Musim**: Harga promosi untuk mengekalkan isipadu jualan
- **Istimewa Cuti**: Skema harga khusus acara
- **Hujung Musim**: Harga pelupusan untuk pengurusan inventori

**Harga Dinamik**
- **Pelarasan Masa Nyata**: Perubahan harga responsif pasaran
- **Harga Bersaing**: Laraskan berdasarkan keadaan pasaran
- **Dipacu Inventori**: Pelarasan harga berdasarkan tahap stok
- **Berasaskan Permintaan**: Harga lebih tinggi untuk item permintaan tinggi

---

## Amalan Terbaik untuk Pengurusan Skema Harga

### Perancangan Strategik

**Analisis Pasaran**
- Selidik strategi harga pesaing
- Fahami kepekaan harga pelanggan
- Analisis struktur kos dan keperluan margin  
- Pertimbangkan kedudukan pasaran dan imej jenama

**Fokus Keuntungan**
- Pastikan semua skema mengekalkan margin keuntungan yang boleh diterima
- Ambil kira semua kos termasuk overhed, penghantaran, cukai
- Semakan dan pelarasan strategi harga secara berkala
- Pantau metrik prestasi dan laraskan sewajarnya

### Kecemerlangan Pelaksanaan

**Penerapan Konsisten**
- Latih semua kakitangan tentang penggunaan skema yang betul
- Dokumentasikan dasar dan prosedur harga
- Audit berkala untuk memastikan pelaksanaan yang betul
- Komunikasi pelanggan tentang struktur harga

**Integrasi Sistem**
- Uji skema harga merentasi semua platform sebelum penggunaan
- Sahkan pengiraan cukai dan keperluan pematuhan
- Pastikan penyegerakan data antara modul
- Sandaran berkala konfigurasi skema harga

### Pemantauan dan Pengoptimuman

**Penjejakan Prestasi**
- Pantau prestasi jualan mengikut skema harga
- Analisis tindak balas pelanggan terhadap titik harga yang berbeza
- Jejaki keuntungan mengikut segmen pelanggan dan produk
- Semak kedudukan bersaing secara berkala

**Penambahbaikan Berterusan**
- Semakan dan pengoptimuman skema secara berkala
- Integrasi maklum balas pelanggan
- Penyesuaian trend pasaran
- Penggunaan peningkatan teknologi

---

## Menyelesaikan Isu Biasa

### Ketidaktekalan Harga

**Penyegerakan Berbilang Platform**
- **Isu**: Harga tidak dikemas kini merentasi semua platform
- **Penyelesaian**: Semak konfigurasi EcomSync dan sambungan API
- **Pencegahan**: Pengujian dan pemantauan penyegerakan berkala

**Ralat Pengiraan Cukai**
- **Isu**: Amaun cukai yang salah dalam harga
- **Penyelesaian**: Sahkan penetapan kod cukai dan konfigurasi kadar
- **Pencegahan**: Semakan dan kemas kini pematuhan berkala

### Isu Prestasi

**Pengurusan Katalog Besar**
- **Isu**: Kemas kini harga perlahan dengan banyak item
- **Penyelesaian**: Laksanakan pemprosesan kelompok dan kemas kini berjadual
- **Pencegahan**: Optimumkan indeks pangkalan data dan penyelenggaraan berkala

**Masalah Pengalaman Pengguna**
- **Isu**: Kekeliruan kakitangan tentang pemilihan skema
- **Penyelesaian**: Sediakan latihan menyeluruh dan dokumentasi yang jelas
- **Pencegahan**: Permudahkan nama skema dan sediakan garis panduan penggunaan

---

## Integrasi dengan Ciri BigLedger Lain

### Integrasi Perakaunan Kewangan

**Pengiktirafan Hasil**
- Pengeposan automatik ke akaun hasil yang sesuai
- Analisis margin dan pelaporan keuntungan
- Integrasi perakaunan kos untuk pengiraan untung yang tepat
- Perancangan bajet dengan pemodelan senario harga

### Integrasi Pengurusan Inventori

**Penilaian Stok**
- Pengiraan harga kos-tambah
- Analisis margin mengikut item dan pelanggan
- Strategi harga inventori bergerak perlahan
- Pelarasan tahap pesanan semula automatik berdasarkan harga

### Pengurusan Perhubungan Pelanggan

**Segmentasi Pelanggan**
- Harga automatik berdasarkan pengelasan pelanggan
- Analisis sejarah pembelian untuk pengoptimuman harga
- Pengiraan nilai sepanjang hayat pelanggan
- Integrasi program kesetiaan dengan harga istimewa

---

## Langkah Seterusnya dan Ciri Lanjutan

Selepas menguasai skema harga asas, terokai:

1. **[Pengurusan Buku Harga](/ms/user-guide/price-book/)** - Senarai harga terperinci dan pengurusan
2. **[Penyelenggaraan Item](/ms/user-guide/item-maintenance/)** - Terapkan harga pada item tertentu
3. **[Konfigurasi POS](/ms/modules/pos/)** - Laksanakan harga dalam operasi runcit
4. **[Integrasi E-dagang](/ms/modules/ecommerce/)** - Strategi harga berbilang saluran

{{< callout type="success" >}}
**Kejayaan Harga**: Perniagaan yang menggunakan skema harga berstruktur biasanya melihat peningkatan 15-25% dalam margin keuntungan dan pengurangan 30% dalam ralat harga.
{{< /callout >}}

---

## Sumber Berkaitan

- [Gambaran Keseluruhan Pengurusan Kewangan](/ms/modules/financial-accounting/) - Integrasi kewangan lengkap
- [Operasi Jualan](/ms/modules/crm/) - Pengurusan perhubungan dan harga pelanggan
- [Platform E-dagang](/ms/modules/ecommerce/) - Harga dalam talian dan penyegerakan
- [Analitik Perniagaan](/ms/business-operations/dashboard/) - Analisis prestasi harga

---

## Mendapatkan Bantuan

### Sumber Sokongan

Untuk soalan dan sokongan skema harga:
- **Sokongan Teknikal**: vincent@bigledger.com
- **Perundingan Perniagaan**: sales@bigledger.com  
- **Dokumentasi**: Panduan pengguna lengkap dan tutorial video
- **Latihan**: Program latihan strategi harga yang menyeluruh

### Perkhidmatan Profesional

Pertimbangkan perkhidmatan profesional untuk:
- Pembangunan strategi harga kompleks
- Analisis pasaran dan kedudukan bersaing
- Pembangunan skema harga tersuai
- Persediaan integrasi dan automasi lanjutan
