---
title: "Demo Industri Pembuatan"
description: "Aliran kerja pembuatan komprehensif termasuk pengurusan BOM, perancangan pengeluaran, kawalan kualiti, dan analisis kos"
weight: 20
bookCollapseSection: false
---

Alami keupayaan pembuatan BigLedger melalui senario pengeluaran yang realistik. Demo ini merangkumi kitaran hayat pembuatan lengkap daripada persediaan BOM hingga penghantaran barangan siap.

{{< hextra/hero-badge >}}
  🏭 Senario Berfokuskan Pembuatan
{{< /hextra/hero-badge >}}

{{< hextra/hero-headline >}}
  Kuasai Operasi Pengeluaran dengan BigLedger
{{< /hextra/hero-headline >}}

{{< hextra/hero-subtitle >}}
  Aliran kerja perancangan pengeluaran, pengurusan BOM, kawalan kualiti, dan pengoptimuman kos
{{< /hextra/hero-subtitle >}}

## 🎯 Gambaran Keseluruhan Demo Pembuatan

Demo komprehensif ini membimbing anda melalui proses pembuatan utama menggunakan senario realistik daripada **AcmeMfg Industries**, sebuah pengeluar bersaiz sederhana yang menghasilkan komponen dan pemasangan elektronik.

### Profil Syarikat Demo: AcmeMfg Industries

- **Produk**: Komponen elektronik, papan litar, dan sensor automotif
- **Jenis Pengeluaran**: Buat-mengikut-pesanan dan buat-untuk-stok
- **Lokasi**: Kilang utama, loji sub-pemasangan, dan gudang
- **Cabaran Utama**: Pengoptimuman masa utama, pematuhan kualiti, kawalan kos

{{< hextra/hero-button text="Lancarkan Demo Pembuatan" link="https://demo-v1.bigledger.com" >}}

---

## 🔧 Aliran Kerja Pembuatan yang Diliputi

{{< cards >}}
  {{< card link="#bom-setup" title="Pengurusan BOM" subtitle="BOM berbilang peringkat, kawalan versi, dan perancangan bahan" >}}
  {{< card link="#production-planning" title="Perancangan Pengeluaran" subtitle="Larian MRP, perancangan kapasiti, dan penjadualan pesanan" >}}
  {{< card link="#work-orders" title="Pengurusan Pesanan Kerja" subtitle="Penciptaan kerja, penjejakan, dan aliran kerja penyelesaian" >}}
  {{< card link="#quality-control" title="Kawalan Kualiti" subtitle="Prosedur pemeriksaan, protokol pengujian, dan pematuhan" >}}
  {{< card link="#inventory-valuation" title="Inventori & Pengiraan Kos" subtitle="Penilaian FIFO/LIFO, pengiraan kos standard, dan analisis varians" >}}
  {{< card link="#subcontracting" title="Subkontrak" subtitle="Operasi diluar sumber dan pengurusan vendor" >}}
{{< /cards >}}

---

## 📋 Prasyarat dan Persediaan

### Akses Akaun Demo

{{< tabs items="Butiran Log Masuk,Data Ujian,Produk Sampel" >}}
  {{< tab >}}
  **Akses Persekitaran Demo**

  - **URL**: demo-v1.bigledger.com
  - **Nama Pengguna**: demo-mfg (Pengurus Pembuatan)
  - **Kata Laluan**: Demo2025!
  - **Syarikat**: AcmeMfg Industries

  Akaun ini mempunyai akses penuh ke modul pembuatan dan data sampel yang telah dikonfigurasikan.
  {{< /tab >}}

  {{< tab >}}
  **Data Ujian Pra-muat**

  - **Bahan Mentah**: 50+ komponen (perintang, kapasitor, cip)
  - **Pusat Kerja**: Barisan pemasangan, barisan SMT, Stesen pengujian
  - **BOM**: Struktur berbilang peringkat untuk 5 produk utama
  - **Vendor**: 15 pembekal dengan masa utama dan harga
  - **Pelanggan**: 20 pelanggan dengan pesanan pengeluaran
  {{< /tab >}}

  {{< tab >}}
  **Produk Sampel**

  - **AC-SENSOR-001**: Sensor suhu automotif
  - **PC-BOARD-LCD**: Papan litar paparan LCD
  - **SW-MODULE-RF**: Modul komunikasi RF
  - **CABLE-HARNESS**: Pemasangan tali pinggang wayar
  - **HOUSING-ALU**: Unit perumahan aluminium
  {{< /tab >}}
{{< /tabs >}}

### Rujukan Pantas Navigasi

{{< callout type="info" >}}
**Lokasi Menu Pembuatan**:
- **Production** → Manufacturing → Production Orders
- **BOM** → Manufacturing → Bill of Materials
- **MRP** → Planning → Material Requirements Planning
- **Quality** → Manufacturing → Quality Control
- **Costing** → Accounting → Product Costing
{{< /callout >}}

---

## 🔨 Aliran Kerja 1: Pengurusan BOM {#bom-setup}

Pelajari untuk mencipta dan menguruskan Bil Bahan berbilang peringkat dengan kawalan versi dan pengurusan perubahan kejuruteraan.

### Senario: Mencipta BOM untuk AC-SENSOR-001

**Objektif**: Sediakan struktur BOM lengkap untuk sensor suhu automotif termasuk sub-pemasangan dan operasi penghalaan.

**Hasil Dijangka**: BOM berbilang peringkat yang disahkan sedia untuk perancangan pengeluaran dan pengiraan kos.

### Arahan Langkah demi Langkah

{{< tabs items="Persediaan,Komponen,Penghalaan,Pengesahan" >}}
  {{< tab >}}
  **1. Akses Pengurusan BOM**

  1. Log masuk ke persekitaran demo
  2. Navigasi ke **Manufacturing** → **Bill of Materials**
  3. Klik **+ New BOM**
  4. Pilih **Product**: AC-SENSOR-001
  5. Tetapkan **BOM Type**: Manufacturing
  6. Masukkan **Version**: V1.0
  7. Tetapkan **Effective Date**: Tarikh semasa

  **Keputusan Dijangka**: Pengepala BOM baharu dicipta dengan butiran produk dimuatkan.
  {{< /tab >}}

  {{< tab >}}
  **2. Tambah Komponen BOM**

  **Komponen Pemasangan Utama**:
  1. Klik **Add Component**
  2. Tambah item ini dengan kuantiti:
     - Cip sensor (IC-TEMP-DS18): 1 EA
     - Papan PCB (PCB-SENSOR-01): 1 EA
     - Perintang 10K (R-10K-0805): 2 EA
     - Kapasitor 100nF (C-100N-0805): 1 EA
     - Penyambung 3-pin (CON-3PIN-JST): 1 EA
     - Perumahan plastik (HSG-PLAST-01): 1 EA

  3. Tetapkan **Unit of Measure** untuk setiap komponen
  4. Tentukan **Scrap %** (biasanya 2-5% untuk elektronik)
  5. Tetapkan **Lead Time** untuk setiap komponen

  **Keputusan Dijangka**: Senarai komponen lengkap dengan kuantiti dan spesifikasi.
  {{< /tab >}}

  {{< tab >}}
  **3. Tentukan Operasi Penghalaan**

  1. Klik tab **Routing**
  2. Tambah operasi ini mengikut urutan:
     - **Op 10**: SMT Assembly (Work Center: SMT-LINE-01)
     - **Op 20**: Through-hole insertion (Work Center: ASSEMBLY-01)
     - **Op 30**: Soldering (Work Center: SOLDER-01)
     - **Op 40**: Testing (Work Center: TEST-STATION-01)
     - **Op 50**: Housing assembly (Work Center: ASSEMBLY-02)
     - **Op 60**: Final inspection (Work Center: QC-STATION-01)

  3. Tetapkan **Setup Time** dan **Run Time** untuk setiap operasi
  4. Tentukan kadar **Labor Cost** dan **Machine Cost**

  **Keputusan Dijangka**: Penghalaan lengkap dengan standard masa dan maklumat kos.
  {{< /tab >}}

  {{< tab >}}
  **4. Pengesahan BOM**

  1. Klik **Validate BOM**
  2. Sistem menyemak:
     - Ketersediaan komponen
     - Sumber vendor
     - Kelengkapan kos
     - Konsistensi penghalaan

  3. Semak keputusan pengesahan
  4. Betulkan sebarang amaran atau ralat
  5. Klik **Approve BOM**
  6. Tetapkan status kepada **Active**

  **Keputusan Dijangka**: BOM disahkan dan diluluskan sedia untuk kegunaan pengeluaran.
  {{< /tab >}}
{{< /tabs >}}

### Petua dan Amalan Terbaik

{{< callout type="tip" >}}
**Petua Pengurusan BOM**:
- Gunakan penerangan komponen deskriptif termasuk spesifikasi
- Kekalkan senarai penggantian komponen untuk fleksibiliti
- Sediakan kawalan perubahan kejuruteraan untuk semakan BOM
- Sertakan faktor sisa berdasarkan data sejarah
- Semakan dan kemas kini masa utama secara berkala
{{< /callout >}}

### Isu Biasa dan Penyelesaian

| Isu | Punca | Penyelesaian |
|-------|-------|----------|
| Komponen tidak ditemui | Item master hilang | Cipta item master terlebih dahulu dalam modul Inventory |
| Rujukan BOM berpusar | Komponen merujuk induk | Semak struktur BOM untuk gelung |
| Pengiraan kos tidak lengkap | Data kos hilang | Kemas kini kos standard dalam item master |
| Pengesahan penghalaan gagal | Pusat kerja tidak ditakrifkan | Sediakan pusat kerja dalam persediaan Manufacturing |

---

## 📊 Aliran Kerja 2: Perancangan Pengeluaran dan MRP {#production-planning}

Kuasai Perancangan Keperluan Bahan (MRP) untuk mengoptimumkan jadual pengeluaran dan tahap inventori.

### Senario: Merancang Pengeluaran untuk Pesanan Bulanan

**Objektif**: Jalankan MRP untuk menjana cadangan pembelian dan pesanan pengeluaran untuk permintaan bulan akan datang.

**Hasil Dijangka**: Jadual pengeluaran dioptimumkan dengan pelan perolehan bahan.

### Arahan Langkah demi Langkah

{{< tabs items="Persediaan Permintaan,Larian MRP,Analisis,Tindakan" >}}
  {{< tab >}}
  **1. Sediakan Sumber Permintaan**

  1. Navigasi ke **Planning** → **Demand Management**
  2. Semak **Sales Orders** yang memerlukan pengeluaran:
     - SO-2025-001: 100 unit AC-SENSOR-001 (Tempoh: Minggu 2)
     - SO-2025-002: 50 unit PC-BOARD-LCD (Tempoh: Minggu 3)
     - SO-2025-003: 200 unit SW-MODULE-RF (Tempoh: Minggu 4)

  3. Semak **Forecast Demand**:
     - Klik **Demand Forecast**
     - Semak kuantiti yang diramalkan mengikut produk
     - Laraskan ramalan jika perlu

  4. Sahkan **Safety Stock Levels**:
     - Pergi ke **Inventory** → **Item Master**
     - Semak tetapan stok keselamatan untuk barangan siap

  **Keputusan Dijangka**: Gambaran permintaan lengkap termasuk pesanan tetap dan ramalan.
  {{< /tab >}}

  {{< tab >}}
  **2. Laksanakan Larian MRP**

  1. Navigasi ke **Planning** → **MRP Planning**
  2. Klik **New MRP Run**
  3. Tetapkan **Planning Parameters**:
     - Ufuk Perancangan: 12 minggu
     - Saiz Baldi: Mingguan
     - Sertakan Stok Keselamatan: Ya
     - Pertimbangkan Kalendar Kerja: Ya

  4. Pilih **Products to Plan**:
     - Semua barangan siap
     - Sub-pemasangan utama
     - Bahan mentah kritikal

  5. Klik **Run MRP**
  6. Pantau kemajuan dalam **MRP Run Status**

  **Keputusan Dijangka**: Larian MRP selesai dengan cadangan bekalan dijana.
  {{< /tab >}}

  {{< tab >}}
  **3. Analisis Keputusan MRP**

  1. Buka **MRP Results Dashboard**
  2. Semak **Exception Messages**:
     - Pesanan lewat
     - Kekangan kapasiti
     - Kekurangan bahan
     - Pelanggaran dasar

  3. Semak **Planned Orders**:
     - Pesanan pengeluaran untuk dicipta
     - Pesanan belian diperlukan
     - Pemasaan dan kuantiti

  4. Semak **Capacity Analysis**:
     - Muatan pusat kerja
     - Pengenalpastian halangan
     - Keperluan kerja lebih masa

  **Keputusan Dijangka**: Pemahaman yang jelas tentang keperluan dan kekangan pengeluaran.
  {{< /tab >}}

  {{< tab >}}
  **4. Ambil Tindakan Perancangan**

  **Cipta Pesanan Pengeluaran**:
  1. Pilih pesanan pengeluaran yang dirancang
  2. Klik **Create Production Orders**
  3. Semak dan sahkan butiran pesanan
  4. Tetapkan tahap keutamaan

  **Jana Permintaan Belian**:
  1. Pilih keperluan bahan
  2. Klik **Create Purchase Requisitions**
  3. Tetapkan kepada pembeli yang sesuai
  4. Tetapkan tarikh penghantaran yang diperlukan

  **Kendalikan Pengecualian**:
  1. Semak lebihan kapasiti
  2. Jadualkan semula pesanan bukan kritikal
  3. Pertimbangkan pilihan subkontrak
  4. Laraskan stok keselamatan jika perlu

  **Keputusan Dijangka**: Pelan pengeluaran dan perolehan yang boleh diambil tindakan sedia untuk pelaksanaan.
  {{< /tab >}}
{{< /tabs >}}

### Ciri MRP Lanjutan

{{< callout type="info" >}}
**Pilihan Perancangan MRP**:
- **Net Change MRP**: Hanya kira semula item yang berubah
- **Regenerative MRP**: Pengiraan semula penuh semua item
- **Finite Capacity Planning**: Pertimbangkan kekangan pusat kerja
- **Multi-site Planning**: Rancang merentasi pelbagai lokasi
{{< /callout >}}

---

## 🏗️ Aliran Kerja 3: Pengurusan Pesanan Kerja {#work-orders}

Pelajari untuk mencipta, menjejaki, dan melengkapkan pesanan kerja pengeluaran dengan penjejakan bahan dan buruh.

### Senario: Memproses Pesanan Pengeluaran untuk AC-SENSOR-001

**Objektif**: Laksanakan kitaran hayat pesanan kerja lengkap daripada penciptaan hingga penerimaan barang.

**Hasil Dijangka**: Barangan siap dihasilkan dan dipindahkan ke inventori dengan penjejakan kos yang tepat.

### Arahan Langkah demi Langkah

{{< tabs items="Penciptaan,Pengeluaran Bahan,Pengeluaran,Penyelesaian" >}}
  {{< tab >}}
  **1. Cipta Pesanan Kerja**

  1. Navigasi ke **Manufacturing** → **Production Orders**
  2. Klik **+ New Production Order**
  3. Masukkan butiran pesanan:
     - **Product**: AC-SENSOR-001
     - **Quantity**: 100 unit
     - **Due Date**: Jumaat depan
     - **Priority**: Normal

  4. Sistem mengisi secara automatik:
     - Komponen BOM
     - Operasi penghalaan
     - Kos standard

  5. Semak dan sahkan pesanan
  6. Klik **Release Order**
  7. Status pesanan bertukar kepada **Released**

  **Keputusan Dijangka**: Pesanan kerja dicipta dan sedia untuk perancangan bahan.
  {{< /tab >}}

  {{< tab >}}
  **2. Proses Pengeluaran Bahan**

  **Keluarkan Bahan ke Pengeluaran**:
  1. Klik **Issue Materials** daripada pesanan kerja
  2. Semak keperluan bahan:
     - Kuantiti diperlukan berbanding tersedia
     - Keperluan kelompok/bersiri
     - Semakan tarikh luput

  3. Untuk setiap komponen:
     - Pilih lokasi stok
     - Pilih kelompok tertentu jika diperlukan
     - Sahkan kuantiti

  4. Klik **Issue All Materials**
  5. Sistem mengemas kini:
     - Baki inventori
     - Status pesanan kerja
     - Kos bahan

  **Keputusan Dijangka**: Semua bahan diperuntukkan kepada pesanan pengeluaran.
  {{< /tab >}}

  {{< tab >}}
  **3. Penjejakan Pengeluaran**

  **Pelaporan Operasi**:
  1. Pergi ke **Shop Floor** → **Operation Reporting**
  2. Pilih pesanan kerja dan operasi
  3. Laporkan kemajuan pengeluaran:
     - **Kuantiti selesai**: Masukkan pengeluaran sebenar
     - **Jam buruh**: Rekod masa sebenar yang digunakan
     - **Jam mesin**: Log penggunaan peralatan
     - **Kecacatan**: Rekod sebarang isu kualiti

  4. Untuk setiap operasi (Op 10-60):
     - Mulakan operasi
     - Rekod penyelesaian
     - Beralih ke operasi seterusnya

  5. Sistem menjejaki:
     - Kemajuan masa nyata
     - Kos sebenar berbanding standard
     - Pengiraan kecekapan

  **Keputusan Dijangka**: Penjejakan pengeluaran lengkap dengan pengumpulan kos.
  {{< /tab >}}

  {{< tab >}}
  **4. Penyelesaian Pesanan**

  **Langkah Akhir**:
  1. Lengkapkan operasi akhir (Op 60)
  2. Rekod keputusan pemeriksaan akhir
  3. Klik **Complete Order**
  4. Pilih jenis penyelesaian:
     - **Full completion**: Semua kuantiti dihasilkan
     - **Partial completion**: Sesetengah varians kuantiti

  5. **Penerimaan Barang**:
     - Nyatakan lokasi penyimpanan
     - Jana nombor kelompok/bersiri
     - Kemas kini baki inventori
     - Kira kos produk akhir

  6. **Penutupan Pesanan**:
     - Semak varians kos
     - Tutup pengeluaran bahan yang tinggal
     - Kemas kini statistik pengeluaran
     - Arkibkan dokumen pesanan

  **Keputusan Dijangka**: Barangan siap dalam inventori dengan kos standard yang tepat.
  {{< /tab >}}
{{< /tabs >}}

### Papan Pemuka Pemantauan Pengeluaran

{{< callout type="tip" >}}
**Metrik Pengeluaran Masa Nyata**:
- Peratusan penyelesaian pesanan kerja
- Status operasi semasa
- Kecekapan buruh mengikut pusat kerja
- Penggunaan bahan berbanding dirancang
- Kadar penolakan kualiti
- Prestasi penghantaran tepat masa
{{< /callout >}}

---

## 🔍 Aliran Kerja 4: Pengurusan Kawalan Kualiti {#quality-control}

Laksanakan pengurusan kualiti komprehensif termasuk pemeriksaan masuk, pengujian dalam proses, dan pemeriksaan akhir.

### Senario: Kawalan Kualiti untuk Komponen Elektronik

**Objektif**: Laksanakan aliran kerja kualiti lengkap daripada pemeriksaan bahan masuk hingga pensijilan produk akhir.

**Hasil Dijangka**: Rekod kualiti dikekalkan dengan kebolehkesanan penuh dan dokumentasi pematuhan.

### Arahan Langkah demi Langkah

{{< tabs items="QC Masuk,Dalam Proses,Pemeriksaan Akhir,Sijil" >}}
  {{< tab >}}
  **1. Pemeriksaan Bahan Masuk**

  **Sediakan Pelan Pemeriksaan**:
  1. Navigasi ke **Quality** → **Inspection Plans**
  2. Cipta pelan untuk **IC-TEMP-DS18** (Cip sensor suhu)
  3. Tentukan kriteria pemeriksaan:
     - **Pemeriksaan visual**: Integriti pembungkusan
     - **Ujian elektrik**: Pengukuran rintangan
     - **Ujian fungsi**: Ketepatan suhu
     - **Dokumentasi**: Sijil pematuhan

  **Laksanakan Pemeriksaan Masuk**:
  1. Pergi ke **Quality** → **Inspection Orders**
  2. Pilih penghantaran masuk
  3. Cipta pesanan pemeriksaan
  4. Rekod keputusan ujian:
     - Saiz sampel: 10 keping daripada kelompok
     - Kriteria lulus/gagal untuk setiap ujian
     - Kemasukan data pengukuran

  **Keputusan Dijangka**: Bahan diluluskan sedia untuk kegunaan pengeluaran.
  {{< /tab >}}

  {{< tab >}}
  **2. Kawalan Kualiti Dalam Proses**

  **Sediakan Titik Semak Proses**:
  1. Tentukan titik semak kualiti dalam penghalaan:
     - **Selepas SMT**: Pemeriksaan sambungan pateri
     - **Selepas Pemasangan**: Semakan dimensi
     - **Selepas Pengujian**: Pengesahan fungsi

  **Laksanakan Pemeriksaan Dalam Proses**:
  1. Pada setiap titik semak:
     - Rekod operator yang melakukan pemeriksaan
     - Dokumenkan keputusan pengukuran
     - Catat sebarang kecacatan yang ditemui
     - Guna tindakan pembetulan

  2. **Kawalan Proses Statistik**:
     - Pantau carta kawalan
     - Jejaki keupayaan proses
     - Kenal pasti trend dan corak
     - Cetuskan amaran untuk keadaan luar kawalan

  **Keputusan Dijangka**: Kualiti proses dipantau dan dikawal sepanjang pengeluaran.
  {{< /tab >}}

  {{< tab >}}
  **3. Pemeriksaan Produk Akhir**

  **Pengujian Akhir Komprehensif**:
  1. Navigasi ke **Quality** → **Final Inspection**
  2. Pilih pesanan kerja yang selesai
  3. Laksanakan urutan ujian:
     - **Ujian fungsi**: Semakan operasi penuh
     - **Penentukuran**: Pengesahan ketepatan sensor
     - **Ujian persekitaran**: Kitaran suhu
     - **Ujian ketahanan**: Rintangan getaran

  **Pengumpulan Data Kualiti**:
  1. Rekod pengukuran terperinci
  2. Tangkap peralatan ujian yang digunakan
  3. Dokumenkan keadaan persekitaran
  4. Catat pensijilan pemeriksa
  5. Jana metrik kualiti

  **Keputusan Pelupusan**:
  - **Accept**: Beralih ke barangan siap
  - **Reject**: Pulangkan ke kerja semula
  - **Hold**: Menunggu penilaian lanjut

  **Keputusan Dijangka**: Produk yang dijamin kualiti sedia untuk penghantaran.
  {{< /tab >}}

  {{< tab >}}
  **4. Sijil Kualiti dan Kebolehkesanan**

  **Jana Sijil**:
  1. Pergi ke **Quality** → **Certificates**
  2. Pilih produk untuk pensijilan
  3. Jana **Certificate of Compliance**:
     - Spesifikasi produk dipenuhi
     - Ringkasan keputusan ujian
     - Pematuhan sistem kualiti
     - Tandatangan yang dibenarkan

  **Dokumentasi Kebolehkesanan**:
  1. **Kebolehkesanan Bahan**:
     - Nombor kelompok komponen
     - Maklumat pembekal
     - Tarikh penerimaan

  2. **Kebolehkesanan Proses**:
     - Butiran pesanan pengeluaran
     - Rekod operator
     - Peralatan digunakan
     - Parameter proses

  **Pelaporan Pematuhan**:
  - Metrik kualiti bulanan
  - Laporan kualiti pelanggan
  - Dokumentasi pematuhan kawal selia
  - Penjejakan tindakan pembetulan

  **Keputusan Dijangka**: Pakej dokumentasi kualiti lengkap untuk penghantaran pelanggan.
  {{< /tab >}}
{{< /tabs >}}

### Amalan Terbaik Kawalan Kualiti

{{< callout type="warning" >}}
**Titik Kualiti Kritikal**:
- Jangan sekali-kali langkau pemeriksaan masuk untuk komponen kritikal
- Kekalkan rekod penentukuran untuk semua peralatan ujian
- Dokumenkan semua keputusan kualiti dengan justifikasi
- Laksanakan pelan persampelan statistik untuk kecekapan
- Semakan dan kemas kini pelan pemeriksaan secara berkala
{{< /callout >}}

---

## 💰 Aliran Kerja 5: Penilaian Inventori dan Analisis Kos {#inventory-valuation}

Kuasai kaedah pengiraan kos inventori dan analisis kos pengeluaran untuk pelaporan kewangan yang tepat.

### Senario: Analisis Kos dan Penilaian Akhir Bulan

**Objektif**: Laksanakan prosedur pengiraan kos akhir bulan termasuk penilaian inventori, analisis varians, dan pelaporan kos.

**Hasil Dijangka**: Kos produk dan penilaian inventori yang tepat untuk penyata kewangan.

### Arahan Langkah demi Langkah

{{< tabs items="Kaedah Pengiraan Kos,Analisis Varians,Penilaian Inventori,Laporan Kos" >}}
  {{< tab >}}
  **1. Konfigurasikan Kaedah Pengiraan Kos**

  **Persediaan Pengiraan Kos Standard**:
  1. Navigasi ke **Accounting** → **Product Costing**
  2. Pilih produk **AC-SENSOR-001**
  3. Sediakan **Standard Cost Elements**:
     - **Material Cost**: $12.50 (daripada BOM)
     - **Labor Cost**: $3.20 (daripada penghalaan)
     - **Overhead Cost**: $2.80 (diperuntukkan)
     - **Total Standard**: $18.50

  **Konfigurasi FIFO/LIFO**:
  1. Pergi ke **Inventory** → **Valuation Methods**
  2. Tetapkan bahan mentah kepada **FIFO**
  3. Tetapkan barangan siap kepada **Standard Cost**
  4. Konfigurasikan kerja-dalam-proses kepada **Actual Cost**

  **Proses Penggulungan Kos**:
  1. Jalankan pengiraan **Cost Roll-up**
  2. Kemas kini kos standard setiap suku tahun
  3. Semak dan luluskan perubahan kos

  **Keputusan Dijangka**: Metodologi pengiraan kos yang konsisten merentasi semua produk.
  {{< /tab >}}

  {{< tab >}}
  **2. Analisis Varians Pengeluaran**

  **Kumpulkan Kos Sebenar**:
  1. Navigasi ke **Manufacturing** → **Cost Analysis**
  2. Pilih pesanan kerja yang selesai
  3. Semak kos sebenar berbanding standard:
     - **Penggunaan Bahan**: Sebenar berbanding kuantiti BOM
     - **Kecekapan Buruh**: Sebenar berbanding jam standard
     - **Penyerapan Overhed**: Digunakan berbanding sebenar

  **Kira Varians**:
  1. **Varians Bahan**:
     - Varians harga: (Harga sebenar - Harga standard) × Kuantiti sebenar
     - Varians penggunaan: (Kuantiti sebenar - Kuantiti standard) × Harga standard

  2. **Varians Buruh**:
     - Varians kadar: (Kadar sebenar - Kadar standard) × Jam sebenar
     - Varians kecekapan: (Jam sebenar - Jam standard) × Kadar standard

  3. **Varians Overhed**:
     - Varians perbelanjaan: Overhed sebenar - Overhed dibajetkan
     - Varians volum: Overhed digunakan - Overhed dibajetkan

  **Keputusan Dijangka**: Analisis varians terperinci dengan pengenalpastian punca utama.
  {{< /tab >}}

  {{< tab >}}
  **3. Proses Penilaian Inventori**

  **Kiraan Inventori Fizikal**:
  1. Pergi ke **Inventory** → **Physical Count**
  2. Jana helaian kiraan mengikut lokasi
  3. Laksanakan kiraan fizikal
  4. Masukkan keputusan kiraan
  5. Proses pelarasan kiraan

  **Penilaian Inventori**:
  1. **Bahan Mentah** (kaedah FIFO):
     - Kira kos purata berwajaran
     - Guna lapisan kos FIFO
     - Laraskan untuk keusangan

  2. **Kerja Dalam Proses**:
     - Kos bahan yang dikeluarkan
     - Kos buruh yang digunakan
     - Peruntukan overhed

  3. **Barangan Siap** (Kos standard):
     - Kos standard setiap unit
     - Kuantiti dalam tangan
     - Rizab keusangan

  **Laporan Penilaian**:
  - Analisis penuaan inventori
  - Laporan inventori bergerak perlahan
  - Penilaian keusangan
  - Analisis trend kos

  **Keputusan Dijangka**: Penilaian inventori yang tepat untuk pelaporan kewangan.
  {{< /tab >}}

  {{< tab >}}
  **4. Pelaporan dan Analisis Kos**

  **Analisis Keuntungan Produk**:
  1. Navigasi ke **Reports** → **Cost Analysis**
  2. Jana **Product Profitability Report**:
     - Hasil jualan mengikut produk
     - Kos barangan dijual standard
     - Analisis margin kasar
     - Analisis kesan volum

  **Laporan Kos Pembuatan**:
  1. **Cost of Production Report**:
     - Jumlah kos mengikut tempoh
     - Trend kos setiap unit
     - Metrik kecekapan

  2. **Variance Summary Report**:
     - Varians bahan, buruh, overhed
     - Trend varians dari masa ke masa
     - Analisis pengecualian

  **Papan Pemuka Pengurusan**:
  - Metrik kos masa nyata
  - Petunjuk prestasi utama
  - Perbandingan bajet berbanding sebenar
  - Keuntungan mengikut barisan produk

  **Cadangan Pengoptimuman Kos**:
  - Kenal pasti peluang pengurangan kos
  - Cadangan penambahbaikan proses
  - Rundingan kos pembekal
  - Maklum balas reka bentuk untuk kebolehbuatan

  **Keputusan Dijangka**: Pandangan kos komprehensif untuk pembuatan keputusan pengurusan.
  {{< /tab >}}
{{< /tabs >}}

### Ciri Pengiraan Kos Lanjutan

{{< callout type="info" >}}
**Alat Pengurusan Kos**:
- **Activity-Based Costing**: Peruntukkan overhed berdasarkan aktiviti
- **Target Costing**: Tetapkan sasaran kos untuk produk baharu
- **Life Cycle Costing**: Jejaki kos sepanjang kitaran hayat produk
- **Cost Simulation**: Model kesan kos perubahan
{{< /callout >}}

---

## 🤝 Aliran Kerja 6: Operasi Subkontrak {#subcontracting}

Uruskan operasi pembuatan diluar sumber termasuk bekalan bahan dan perolehan perkhidmatan.

### Senario: Subkontrak Operasi Pemasangan SMT

**Objektif**: Diluar sumber operasi SMT (Surface Mount Technology) kepada vendor luar sambil mengekalkan kawalan kualiti dan kos.

**Hasil Dijangka**: Proses subkontrak yang cekap dengan keterlihatan dan kawalan penuh.

### Arahan Langkah demi Langkah

{{< tabs items="Persediaan,Pesanan Belian,Pemindahan Bahan,Penerimaan" >}}
  {{< tab >}}
  **1. Persediaan Subkontrak**

  **Konfigurasi Vendor**:
  1. Navigasi ke **Purchasing** → **Vendor Master**
  2. Cipta/kemas kini vendor **SMT-Services-Ltd**
  3. Tetapkan jenis vendor kepada **Subcontractor**
  4. Konfigurasikan keupayaan:
     - Perkhidmatan pemasangan SMT
     - Keupayaan pengujian
     - Pensijilan kualiti
     - Maklumat kapasiti

  **Persediaan Item Perkhidmatan**:
  1. Pergi ke **Inventory** → **Item Master**
  2. Cipta item perkhidmatan **SMT-ASSEMBLY-SERVICE**
  3. Tetapkan jenis item kepada **Service**
  4. Tentukan peruntukan pusat kos
  5. Tetapkan kadar perkhidmatan standard

  **Konfigurasi BOM**:
  1. Kemas kini BOM untuk **AC-SENSOR-001**
  2. Ubah suai **Operation 10** (SMT Assembly):
     - Tetapkan jenis operasi kepada **Subcontracted**
     - Tetapkan vendor subkontraktor
     - Tentukan penggunaan bahan di vendor

  **Keputusan Dijangka**: Rangka kerja subkontrak lengkap dikonfigurasikan.
  {{< /tab >}}

  {{< tab >}}
  **2. Cipta Pesanan Belian Subkontrak**

  **Jana PO Subkontrak**:
  1. Navigasi ke **Manufacturing** → **Subcontract Orders**
  2. Klik **Create from Work Order**
  3. Pilih pesanan kerja untuk **AC-SENSOR-001**
  4. Sistem menjana PO dengan:
     - Baris perkhidmatan: Perkhidmatan pemasangan SMT
     - Baris bahan: Komponen untuk dibekalkan
     - Jadual penghantaran
     - Keperluan kualiti

  **Konfigurasi Butiran PO**:
  1. **Baris Perkhidmatan**:
     - Kuantiti: 100 unit
     - Kadar: $2.50 setiap unit
     - Tarikh penghantaran: Rabu depan

  2. **Baris Bahan** (untuk dibekalkan):
     - Papan PCB: 100 keping
     - Komponen SMT: Mengikut keperluan BOM
     - Lokasi penghantaran: Kemudahan vendor

  3. **Terma dan Syarat**:
     - Spesifikasi kualiti
     - Keperluan pemeriksaan
     - Terma pembayaran
     - Prosedur pemulangan bahan

  **Keputusan Dijangka**: Pesanan belian subkontrak komprehensif sedia untuk kelulusan.
  {{< /tab >}}

  {{< tab >}}
  **3. Pemindahan Bahan kepada Subkontraktor**

  **Sediakan Penghantaran Bahan**:
  1. Navigasi ke **Inventory** → **Material Transfer**
  2. Cipta pesanan pemindahan ke lokasi vendor
  3. Sertakan semua bahan mengikut PO:
     - Sahkan kuantiti sepadan dengan keperluan
     - Semak status kualiti bahan
     - Jana senarai pembungkusan

  **Laksanakan Pengeluaran Bahan**:
  1. **Pilih Bahan**:
     - Jana senarai pilihan
     - Simpan inventori
     - Proses pilihan fizikal

  2. **Semakan Kualiti**:
     - Periksa bahan sebelum penghantaran
     - Sahkan nombor bahagian dan kuantiti
     - Semak untuk kerosakan

  3. **Hantar ke Vendor**:
     - Cipta dokumen penghantaran
     - Jejaki status penghantaran
     - Sahkan penerimaan vendor

  **Kesan Inventori**:
  - Bahan dipindahkan ke lokasi "Consignment at Vendor"
  - Kekalkan pemilikan sehingga digunakan
  - Jejaki inventori di kemudahan vendor

  **Keputusan Dijangka**: Bahan dihantar kepada subkontraktor dengan kebolehkesanan penuh.
  {{< /tab >}}

  {{< tab >}}
  **4. Penerimaan dan Kawalan Kualiti**

  **Terima Barang Subkontrak**:
  1. Navigasi ke **Purchasing** → **Goods Receipt**
  2. Pilih PO subkontrak
  3. Rekod butiran penerimaan:
     - Kuantiti diterima
     - Tarikh dan masa penghantaran
     - Rujukan nota penghantaran vendor
     - Pemeriksaan visual awal

  **Pemeriksaan Kualiti**:
  1. **Pemeriksaan Masuk**:
     - Cipta pesanan pemeriksaan
     - Laksanakan ujian kualiti mengikut pelan
     - Rekod keputusan pemeriksaan
     - Buat keputusan terima/tolak

  2. **Pengesahan Perkhidmatan**:
     - Sahkan kerja dilakukan mengikut spesifikasi
     - Semak kualiti pemasangan
     - Sahkan keputusan ujian daripada vendor
     - Dokumenkan sebarang percanggahan

  **Penyelesaian Proses**:
  1. **Terima Barang**:
     - Beralih ke lokasi inventori yang sesuai
     - Kemas kini kemajuan pesanan kerja
     - Cetuskan operasi seterusnya

  2. **Pemprosesan Invois**:
     - Padankan invois dengan PO dan penerimaan
     - Sahkan caj perkhidmatan
     - Proses pembayaran

  3. **Peruntukan Kos**:
     - Peruntukkan kos perkhidmatan kepada pesanan kerja
     - Kemas kini kos standard produk
     - Rekod varians sebenar berbanding bajet

  **Keputusan Dijangka**: Bahagian subkontrak berkualiti diterima dan sedia untuk operasi seterusnya.
  {{< /tab >}}
{{< /tabs >}}

### Amalan Terbaik Subkontrak

{{< callout type="tip" >}}
**Faktor Kejayaan Subkontrak**:
- Spesifikasi dan keperluan kualiti yang jelas
- Semakan prestasi vendor secara berkala
- Perancangan dan penghantaran bahan yang mencukupi
- Perjanjian kualiti dan pemeriksaan yang kukuh
- Komunikasi dan penyelarasan yang berkesan
- Peruntukan kos dan analisis varians yang betul
{{< /callout >}}

---

## 📈 KPI dan Analitik Pembuatan

Pantau petunjuk prestasi utama untuk mengoptimumkan operasi pembuatan.

### Metrik Pembuatan Penting

{{< tabs items="KPI Pengeluaran,Metrik Kualiti,Analisis Kos,Kecekapan" >}}
  {{< tab >}}
  **Prestasi Pengeluaran**

  **Metrik Utama untuk Dijejaki**:
  - **Keberkesanan Peralatan Keseluruhan (OEE)**
    - Ketersediaan × Prestasi × Kualiti
    - Sasaran: >85% untuk peralatan kritikal

  - **Penghantaran Tepat Masa (OTD)**
    - Pesanan dihantar pada tarikh yang dijanjikan
    - Sasaran: >95% untuk kepuasan pelanggan

  - **Truput Pengeluaran**
    - Unit dihasilkan setiap jam/hari
    - Jejaki trend dan penambahbaikan

  - **Penggunaan Kapasiti**
    - Pengeluaran sebenar berbanding kapasiti dirancang
    - Kenal pasti halangan dan kekangan

  **Akses Papan Pemuka**: Manufacturing → Analytics → Production Dashboard
  {{< /tab >}}

  {{< tab >}}
  **Prestasi Kualiti**

  **Metrik Kualiti**:
  - **Hasil Lulus Pertama (FPY)**
    - Unit lulus kali pertama / Jumlah unit
    - Sasaran: >98% untuk kecemerlangan pembuatan

  - **Kadar Kecacatan**
    - Kecacatan setiap sejuta peluang
    - Jejaki mengikut produk dan proses

  - **Pemulangan Pelanggan**
    - Kadar pemulangan dan punca utama
    - Analisis kos kualiti

  - **Kualiti Pembekal**
    - Keputusan pemeriksaan masuk
    - Kad skor prestasi pembekal

  **Akses**: Quality → Analytics → Quality Dashboard
  {{< /tab >}}

  {{< tab >}}
  **Analitik Kos**

  **Prestasi Kos**:
  - **Analisis Varians Kos**
    - Varians bahan, buruh, overhed
    - Trend dan analisis bulanan

  - **Keuntungan Produk**
    - Margin kasar mengikut produk
    - Pengoptimuman campuran produk

  - **Pusing Ganti Inventori**
    - Nisbah pusing ganti inventori
    - Kecekapan modal kerja

  - **Trend Kos setiap Unit**
    - Perubahan kos unit dari masa ke masa
    - Penjejakan inisiatif pengurangan kos

  **Akses**: Accounting → Analytics → Cost Dashboard
  {{< /tab >}}

  {{< tab >}}
  **Kecekapan Operasi**

  **Metrik Kecekapan**:
  - **Kecekapan Buruh**
    - Jam standard berbanding jam sebenar
    - Penambahbaikan produktiviti

  - **Penggunaan Mesin**
    - Masa operasi dan penggunaan peralatan
    - Keberkesanan penyelenggaraan

  - **Penggunaan Bahan**
    - Peratusan hasil bahan
    - Penjejakan pengurangan pembaziran

  - **Prestasi Masa Utama**
    - Masa utama pembuatan
    - Kelajuan pemenuhan pesanan

  **Akses**: Manufacturing → Analytics → Efficiency Dashboard
  {{< /tab >}}
{{< /tabs >}}

---

## 🎓 Ciri Pembuatan Lanjutan

### Alat Penambahbaikan Berterusan

{{< callout type="info" >}}
**Keupayaan Lanjutan**:
- **Lean Manufacturing**: Pengenalpastian dan penghapusan pembaziran
- **Six Sigma Tools**: Kawalan dan analisis proses statistik
- **Kaizen Events**: Penjejakan penambahbaikan berterusan
- **Value Stream Mapping**: Pengoptimuman aliran proses
- **Total Productive Maintenance**: Keberkesanan peralatan
{{< /callout >}}

### Keupayaan Integrasi

**Sambungkan Pembuatan dengan**:
- **Sales & CRM**: Integrasi permintaan pelanggan
- **Financial Accounting**: Perakaunan dan pelaporan kos
- **Purchasing**: Integrasi pembekal dan perolehan
- **Warehouse Management**: Pengoptimuman inventori
- **HR & Payroll**: Penjejakan dan pengiraan kos buruh

---

## 🚀 Langkah Seterusnya dan Pelaksanaan

### Pelan Pelancaran Modul Pembuatan

{{< tabs items="Fasa 1,Fasa 2,Fasa 3,Berterusan" >}}
  {{< tab >}}
  **Fasa 1: Asas (Minggu 1-4)**

  **Persediaan Teras**:
  - Penciptaan data item master
  - Pembangunan dan pengesahan BOM
  - Konfigurasi pusat kerja
  - Persediaan penghalaan asas
  - Latihan pengguna awal

  **Hasil Dijangka**:
  - Pesanan pengeluaran boleh dicipta
  - Perancangan bahan asas berfungsi
  - Penjejakan lantai kilang beroperasi
  {{< /tab >}}

  {{< tab >}}
  **Fasa 2: Peningkatan (Minggu 5-8)**

  **Ciri Lanjutan**:
  - Pelaksanaan MRP
  - Prosedur kawalan kualiti
  - Persediaan perakaunan kos
  - Aliran kerja subkontrak
  - Pelaporan lanjutan

  **Hasil Dijangka**:
  - Perancangan automatik beroperasi
  - Proses kualiti disepadukan
  - Keterlihatan kos lengkap
  {{< /tab >}}

  {{< tab >}}
  **Fasa 3: Pengoptimuman (Minggu 9-12)**

  **Penambahbaikan Prestasi**:
  - Penggunaan papan pemuka KPI
  - Pengoptimuman proses
  - Pelaksanaan automasi
  - Integrasi dengan modul lain
  - Analitik lanjutan

  **Hasil Dijangka**:
  - Operasi pembuatan dioptimumkan
  - Keterlihatan dan kawalan masa nyata
  - Proses penambahbaikan berterusan
  {{< /tab >}}

  {{< tab >}}
  **Operasi Berterusan**

  **Penambahbaikan Berterusan**:
  - Semakan prestasi secara berkala
  - Inisiatif pengoptimuman proses
  - Naik taraf teknologi
  - Latihan dan pembangunan pengguna
  - Perkongsian amalan terbaik

  **Metrik Kejayaan**:
  - Kecekapan operasi yang bertambah baik
  - Kos pembuatan yang dikurangkan
  - Kualiti produk yang dipertingkat
  - Kepuasan pelanggan yang lebih baik
  {{< /tab >}}
{{< /tabs >}}

### Sumber Latihan dan Sokongan

{{< callout type="success" >}}
**Sumber Tersedia**:
- **Tutorial Video**: Aliran kerja pembuatan langkah demi langkah
- **Manual Pengguna**: Dokumentasi komprehensif
- **Sesi Latihan**: Latihan langsung dan dirakam
- **Portal Sokongan**: Sokongan teknikal 24/7
- **Forum Komuniti**: Komuniti pengguna dan amalan terbaik
{{< /callout >}}

---

## 📞 Dapatkan Bimbingan Pembuatan Pakar

Bersedia untuk melaksanakan BigLedger untuk operasi pembuatan anda?

{{< hextra/hero-button text="Jadualkan Perundingan Pembuatan" link="mailto:sales@bigledger.com?subject=Manufacturing Demo Follow-up" >}}

### Sokongan Pelaksanaan Pembuatan

- **Pakar Pembuatan**: Pakar industri tersedia
- **Konfigurasi Tersuai**: Disesuaikan dengan proses pengeluaran anda
- **Garis Masa Pelaksanaan**: Penggunaan tipikal 8-12 minggu
- **Program Latihan**: Latihan pengguna komprehensif disertakan
- **Sokongan Berterusan**: Pasukan kejayaan pelanggan yang berdedikasi

**Maklumat Hubungan**:
- **Jualan**: sales@bigledger.com
- **Teknikal**: vincent@bigledger.com
- **Pakar Pembuatan**: manufacturing@bigledger.com
- **Persekitaran Demo**: demo-v1.bigledger.com

{{< callout type="info" >}}
**Langkah Seterusnya**: Selepas melengkapkan demo ini, jadualkan perundingan diperibadikan untuk membincangkan keperluan pembuatan khusus anda dan garis masa pelaksanaan.
{{< /callout >}}
