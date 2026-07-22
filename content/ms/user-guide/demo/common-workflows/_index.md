---
title: "Aliran Kerja Perniagaan Lazim"
description: "Aliran kerja perniagaan langkah demi langkah yang penting dan terpakai kepada semua industri yang menggunakan BigLedger"
weight: 10
layout: workflows
bookCollapseSection: false
---

Panduan ini menyediakan aliran kerja terperinci, langkah demi langkah untuk proses perniagaan yang paling lazim dalam BigLedger. Aliran kerja ini adalah agnostik industri dan terpakai kepada perniagaan pelbagai saiz dan jenis.

{{< callout type="info" >}}
**Sebelum Anda Bermula**: Pastikan anda mempunyai keizinan pengguna yang sesuai dan persediaan syarikat anda telah lengkap. Setiap aliran kerja termasuk prasyarat untuk membantu anda bersedia.
{{< /callout >}}

## Aliran Kerja Kewangan

### Proses Penyesuaian Bank

**Objektif**: Padankan penyata bank anda dengan rekod BigLedger untuk memastikan ketepatan dan mengenal pasti percanggahan.

**Prasyarat**:
- Penyata bank (fizikal atau elektronik)
- Akses kepada modul Perakaunan Kewangan
- Akaun bank dikonfigurasikan dalam Carta Akaun

{{< tabs items="Penyediaan,Penyesuaian,Semakan" >}}

{{< tab >}}
**Langkah 1: Sediakan Data Anda**

1. Navigasi ke **Financial Accounting** → **Banking** → **Bank Reconciliation**
2. Pilih akaun bank anda daripada menu lungsur
3. Tetapkan tempoh penyesuaian (biasanya bulanan)
   - Klik **Date Range** dan pilih tarikh mula/tamat
   - Pastikan ia sepadan dengan tempoh penyata bank anda
4. Klik **Load Transactions** untuk memaparkan semua item yang belum disesuaikan

**Keputusan Dijangka**: Anda akan melihat senarai semua transaksi yang belum disesuaikan lagi.
{{< /tab >}}

{{< tab >}}
**Langkah 2: Padankan Transaksi**

1. **Untuk Setiap Baris Penyata Bank**:
   - Cari transaksi yang sepadan dalam BigLedger
   - Tanda kotak semak **Match** di sebelah kedua-dua item
   - Sahkan jumlah sepadan dengan tepat

2. **Untuk Transaksi yang Hilang**:
   - Klik **Add Bank Transaction** jika item wujud pada penyata tetapi tidak dalam BigLedger
   - Masukkan: Tarikh, Penerangan, Jumlah, Jenis Transaksi
   - Klik **Save**

3. **Untuk Item Belum Dijelaskan**:
   - Biarkan tidak dipadankan jika tiada pada penyata bank (cth., cek belum dijelaskan)
   - Ini akan muncul dalam penyesuaian tempoh seterusnya

**Petua**:
- Gunakan fungsi carian untuk mencari transaksi dengan cepat
- Isih mengikut tarikh atau jumlah untuk memudahkan pemadanan
- Klik dua kali transaksi untuk melihat butiran
{{< /tab >}}

{{< tab >}}
**Langkah 3: Lengkapkan Penyesuaian**

1. Sahkan **Calculated Balance** sepadan dengan baki akhir penyata bank anda
2. Semak **Reconciliation Summary**:
   - Baki permulaan
   - Jumlah deposit
   - Jumlah pengeluaran
   - Baki akhir
3. Klik **Mark as Reconciled** apabila semuanya sepadan
4. Cetak atau simpan laporan penyesuaian untuk rekod

**Penyelesaian Masalah**:
- Jika baki tidak sepadan, semak item yang tidak dipadankan
- Semak entri pendua
- Sahkan semua yuran bank dan faedah direkodkan
{{< /tab >}}

{{< /tabs >}}

---

### Prosedur Penutupan Hujung Bulan

**Objektif**: Pastikan semua data kewangan tepat dan lengkap sebelum menutup tempoh perakaunan.

**Prasyarat**:
- Semua transaksi untuk bulan tersebut telah dimasukkan
- Penyesuaian bank selesai
- Akses kepada modul Perakaunan Kewangan

{{< callout type="warning" >}}
**Penting**: Setelah tempoh ditutup, pengubahsuaian memerlukan keizinan khas dan mungkin menjejaskan pelaporan.
{{< /callout >}}

**Proses Langkah demi Langkah**:

1. **Senarai Semak Pra-Penutupan**
   - Navigasi ke **Financial Accounting** → **Period Management** → **Pre-Close Checklist**
   - Semak setiap item dan tanda sebagai selesai:
     - ✅ Semua invois dimasukkan dan dipos
     - ✅ Semua bayaran direkodkan
     - ✅ Penyesuaian bank selesai
     - ✅ Kiraan inventori dimuktamadkan (jika berkenaan)
     - ✅ Akruan dan prabayaran direkodkan

2. **Jana Imbangan Duga**
   - Pergi ke **Reports** → **Financial Reports** → **Trial Balance**
   - Pilih tarikh hujung bulan
   - Semak baki luar biasa atau akaun yang hilang
   - Eksport ke PDF untuk rekod

3. **Rekod Entri Pelarasan**
   - Navigasi ke **Financial Accounting** → **General Journal**
   - Klik **New Entry** untuk setiap pelarasan yang diperlukan:
     - Entri susut nilai
     - Perbelanjaan terakru
     - Pelarasan perbelanjaan prabayar
     - Peruntukan hutang lapuk
   - Masukkan penerangan, akaun debit/kredit, dan jumlah
   - Klik **Post** untuk setiap entri

4. **Semakan Akhir dan Penutupan**
   - Jana imbangan duga akhir untuk mengesahkan pelarasan
   - Pergi ke **Financial Accounting** → **Period Management** → **Close Period**
   - Pilih bulan untuk ditutup
   - Klik **Close Period** dan sahkan
   - Sistem akan mengunci semua transaksi untuk tempoh tersebut

**Keputusan Dijangka**: Tempoh dikunci, dan anda boleh menjana penyata kewangan hujung bulan yang tepat.

---

### Menjana Penyata Untung & Rugi

**Objektif**: Cipta penyata U&R yang tepat untuk menganalisis prestasi perniagaan.

**Prasyarat**:
- Carta Akaun dikonfigurasikan dengan betul
- Semua transaksi dipos untuk tempoh tersebut
- Tempoh ditutup (disyorkan tetapi tidak diperlukan)

**Langkah Terperinci**:

1. **Akses Penjana Laporan**
   - Navigasi ke **Reports** → **Financial Reports** → **Profit & Loss**
   - Pilih templat **Standard P&L**

2. **Konfigurasikan Parameter Laporan**
   - **Period**: Pilih julat tarikh (bulanan, suku tahunan, atau tahunan)
   - **Comparison**: Pilih untuk membandingkan dengan tempoh sebelumnya atau bajet
   - **Detail Level**: Pilih paparan ringkasan atau terperinci
   - **Currency**: Pilih mata wang pelaporan (jika berbilang mata wang)

3. **Sesuaikan Susun Atur Laporan**
   - Klik **Format Options**
   - Pilih pengumpulan akaun:
     - Akaun hasil
     - Kos Barang Dijual
     - Perbelanjaan Operasi
     - Pendapatan/Perbelanjaan Lain
   - Pilih pengiraan peratusan (% daripada hasil)

4. **Jana dan Semak**
   - Klik **Generate Report**
   - Semak metrik utama:
     - Margin Untung Kasar
     - Untung Operasi
     - Untung Bersih
   - Semak varians atau trend luar biasa

5. **Eksport dan Edarkan**
   - Klik **Export** → **PDF** untuk pembentangan
   - Gunakan format **Excel** untuk analisis lanjut
   - Sediakan **Scheduled Reports** untuk penjanaan automatik

**Amalan Terbaik**:
- Bandingkan dengan bajet dan tempoh sebelumnya
- Analisis varians yang ketara
- Sertakan jadual sokongan untuk kategori perbelanjaan utama

---

## Pengurusan Akaun

### Proses Kutipan Akaun Belum Terima

**Objektif**: Uruskan bayaran pelanggan secara sistematik dan kurangkan akaun belum terima tertunggak.

**Prasyarat**:
- Invois pelanggan dipos
- Terma pembayaran dikonfigurasikan
- Akses kepada modul Sales & CRM

**Aliran Kerja Kutipan**:

1. **Jana Laporan Penuaan**
   - Pergi ke **Sales & CRM** → **Customer Management** → **Aging Report**
   - Jalankan laporan untuk tarikh semasa
   - Semak pelanggan mengikut baldi penuaan:
     - Semasa (0-30 hari)
     - Tertunggak 31-60 hari
     - Tertunggak 61-90 hari
     - Tertunggak Melebihi 90 hari

2. **Hubungan Pertama (Hari 31)**
   - Tapis laporan penuaan untuk menunjukkan baldi 31-60 hari
   - Untuk setiap pelanggan:
     - Klik **Customer Name** untuk melihat butiran
     - Klik butang **Send Statement**
     - Pilih templat **Past Due Notice**
     - Tambah mesej peribadi jika perlu
     - Klik **Send Email**

3. **Tindakan Susulan (Hari 61)**
   - Semak baldi penuaan 61-90 hari
   - Klik **Log Activity** untuk setiap pelanggan
   - Rekod percubaan panggilan telefon:
     - Tarikh dan masa panggilan
     - Orang yang dihubungi
     - Respons/janji untuk membayar
     - Tarikh susulan seterusnya
   - Tetapkan **Payment Plan** jika dipersetujui

4. **Proses Peningkatan (Hari 91+)**
   - Semak baldi 90+ hari
   - Untuk setiap akaun:
     - Klik **Account Actions** → **Place on Hold**
     - Hantar **Final Notice** sebelum kutipan
     - Cipta **Collection Case** jika tiada respons
     - Pertimbangkan **Write-off** untuk akaun yang tidak boleh dikutip

**Petua Automasi**:
- Sediakan e-mel peringatan automatik pada 30, 60, 90 hari
- Gunakan peraturan aliran kerja untuk menetapkan tugas kutipan
- Jana laporan penuaan mingguan untuk semakan pengurusan

---

### Pengurusan Akaun Belum Bayar

**Objektif**: Uruskan bayaran vendor dengan cekap sambil mengoptimumkan aliran tunai dan mengambil kesempatan daripada diskaun.

**Prasyarat**:
- Bil vendor dimasukkan dan diluluskan
- Kaedah pembayaran dikonfigurasikan
- Akses kepada modul Purchasing

**Aliran Kerja Pemprosesan Bayaran**:

1. **Semak Bil Perlu Dibayar**
   - Navigasi ke **Purchasing** → **Bill Management** → **Bills Due**
   - Tapis mengikut tarikh perlu dibayar (7 hari akan datang disyorkan)
   - Isih mengikut vendor untuk mengumpulkan bayaran

2. **Ambil Kesempatan Diskaun Bayaran Awal**
   - Klik penapis **Discount Available**
   - Semak terma (cth., 2/10 net 30)
   - Kira penjimatan bersih vs. kesan aliran tunai
   - Utamakan peluang diskaun bernilai tinggi

3. **Cipta Kelompok Bayaran**
   - Pilih bil untuk dibayar menggunakan kotak semak
   - Klik **Create Payment Batch**
   - Pilih kaedah pembayaran:
     - Pencetakan cek
     - Pindahan elektronik
     - Kad kredit
   - Sahkan jumlah keseluruhan dan bilangan bayaran

4. **Proses Bayaran**
   - Untuk **Check Payments**:
     - Muatkan stok cek dalam pencetak
     - Klik **Print Checks**
     - Rekod nombor cek
   - Untuk **Electronic Payments**:
     - Semak butiran akaun bank
     - Klik **Submit for Processing**
     - Simpan nombor pengesahan

5. **Pos Kelompok Bayaran**
   - Semak ringkasan kelompok bayaran
   - Klik **Post Payments**
   - Jana laporan daftar bayaran
   - Failkan dokumentasi sokongan

**Pengoptimuman Aliran Tunai**:
- Jadualkan bayaran pada tarikh perlu dibayar (bukan awal melainkan diskaun)
- Kumpulkan bayaran mengikut vendor untuk kecekapan
- Pantau ramalan aliran tunai sebelum memproses kelompok besar

---

### Proses Onboarding Pelanggan

**Objektif**: Sediakan pelanggan baharu dengan cekap dengan semua maklumat yang diperlukan dan terma kredit.

**Prasyarat**:
- Maklumat pelanggan dikumpulkan
- Permohonan kredit lengkap (jika berkenaan)
- Akses kepada modul Sales & CRM

**Langkah Onboarding**:

1. **Cipta Rekod Pelanggan**
   - Navigasi ke **Sales & CRM** → **Customer Management** → **New Customer**
   - Masukkan maklumat asas:
     - Nama syarikat dan nama sah
     - Butiran hubungan utama
     - Alamat fizikal dan pengebilan
     - Telefon, e-mel, laman web
   - Tetapkan **Customer Number** (dijana automatik atau manual)

2. **Konfigurasikan Tetapan Kewangan**
   - Tetapkan **Payment Terms** (Net 30, 2/10 Net 30, dsb.)
   - Wujudkan **Credit Limit** berdasarkan permohonan kredit
   - Pilih **Price Level** jika menggunakan penetapan harga berperingkat
   - Tetapkan **Tax Settings** berdasarkan lokasi
   - Pilih **Preferred Currency** untuk pelanggan antarabangsa

3. **Sediakan Keutamaan Komunikasi**
   - Konfigurasikan **Invoice Delivery**:
     - E-mel (diutamakan)
     - Cetak dan mel
     - Akses portal pelanggan
   - Tetapkan **Statement Frequency** (bulanan, suku tahunan)
   - Pilih **Marketing Preferences** (surat berita, promosi)

4. **Cipta Akses Portal Pelanggan**
   - Klik tab **Portal Access**
   - Jana kelayakan log masuk
   - Tetapkan keizinan:
     - Lihat invois dan penyata
     - Buat bayaran dalam talian
     - Muat turun dokumen
   - Hantar e-mel aluan dengan arahan log masuk

5. **Dokumen dan Luluskan**
   - Muat naik permohonan kredit dan dokumen sokongan
   - Halakan untuk **Credit Approval** jika diperlukan
   - Tetapkan **Customer Status** kepada Aktif setelah diluluskan
   - Jadualkan hubungan susulan pertama

**Senarai Semak Pengesahan**:
- ✅ Semua maklumat hubungan disahkan
- ✅ Terma kredit diluluskan dan didokumenkan
- ✅ Tetapan cukai dikonfigurasikan dengan betul
- ✅ Akses portal diuji
- ✅ Pakej aluan dihantar

---

## Aliran Kerja Pentadbiran

### Persediaan Kawalan Akses Pengguna

**Objektif**: Konfigurasikan akses pengguna yang selamat dengan keizinan yang sesuai untuk setiap peranan.

**Prasyarat**:
- Akses admin kepada sistem
- Pemahaman tentang peranan dan tanggungjawab pengguna
- Carta organisasi syarikat

**Proses Persediaan Pengguna**:

1. **Tentukan Peranan Pengguna**
   - Navigasi ke **Administration** → **User Management** → **Roles**
   - Semak peranan standard:
     - Administrator (akses penuh)
     - Accounting Manager (modul kewangan)
     - Bookkeeper (kemasukan data, laporan terhad)
     - Sales Representative (CRM sahaja)
     - Warehouse (modul inventori)
   - Cipta peranan tersuai jika diperlukan

2. **Cipta Akaun Pengguna**
   - Pergi ke **Administration** → **User Management** → **New User**
   - Masukkan butiran pengguna:
     - Nama penuh dan ID pekerja
     - Alamat e-mel (digunakan untuk log masuk)
     - Jabatan dan pengurus
     - Tarikh mula dan status

3. **Tetapkan Keizinan**
   - Pilih **Primary Role** daripada menu lungsur
   - Konfigurasikan **Module Access**:
     - Financial Accounting (lihat/edit/lulus)
     - Sales & CRM (lihat/edit)
     - Purchasing (lihat/edit/lulus)
     - Inventory (lihat/edit)
     - Reports (laporan yang boleh diakses)
   - Tetapkan **Data Restrictions**:
     - Akses syarikat/cawangan
     - Sekatan pelanggan/vendor
     - Had jumlah untuk kelulusan

4. **Konfigurasikan Tetapan Keselamatan**
   - Tetapkan **Password Requirements**:
     - Panjang minimum dan kerumitan
     - Tempoh luput
     - Pengesahan dua faktor
   - Tentukan **Login Restrictions**:
     - Had alamat IP
     - Akses berdasarkan masa
     - Had sesi serentak

5. **Ujian dan Latihan**
   - Cipta kelayakan log masuk ujian
   - Sahkan keizinan akses berfungsi dengan betul
   - Sediakan latihan pengguna tentang fungsi khusus mereka
   - Dokumenkan sebarang prosedur tersuai untuk peranan tersebut

**Amalan Terbaik Keselamatan**:
- Ikut prinsip keistimewaan paling minimum
- Semak dan kemas kini keizinan secara berkala
- Laksanakan aliran kerja kelulusan untuk operasi sensitif
- Pantau aktiviti pengguna melalui log audit

---

### Aliran Kerja Kelulusan Dokumen

**Objektif**: Laksanakan proses kelulusan yang konsisten untuk dokumen kewangan bagi memastikan kawalan yang betul.

**Prasyarat**:
- Hierarki kelulusan ditakrifkan
- Keizinan pengguna dikonfigurasikan
- Jenis dokumen dikenal pasti untuk kelulusan

**Konfigurasi Aliran Kerja**:

1. **Sediakan Peraturan Kelulusan**
   - Navigasi ke **Administration** → **Workflow Management** → **Approval Rules**
   - Cipta peraturan untuk setiap jenis dokumen:
     - Purchase Orders
     - Invoices
     - Expense Reports
     - Journal Entries
     - Budget Modifications

2. **Tentukan Hierarki Kelulusan**
   - Untuk setiap peraturan, tetapkan tahap kelulusan:
     - **Level 1**: Penyelia langsung (jumlah sehingga $1,000)
     - **Level 2**: Pengurus jabatan (jumlah sehingga $10,000)
     - **Level 3**: Kelulusan eksekutif (jumlah melebihi $10,000)
   - Konfigurasikan **Parallel Approval** untuk dokumen yang memerlukan berbilang tandatangan

3. **Konfigurasikan Tetapan Pemberitahuan**
   - Sediakan **Email Notifications** untuk:
     - Kelulusan yang belum selesai
     - Kelulusan diberi/ditolak
     - Amaran peningkatan
   - Konfigurasikan **Dashboard Alerts** untuk pelulus
   - Tetapkan **Escalation Rules** untuk kelulusan yang tertunggak

**Proses Penyerahan Dokumen**:

1. **Serahkan untuk Kelulusan**
   - Pengguna mencipta dokumen (cth., pesanan pembelian)
   - Klik **Submit for Approval**
   - Sistem menghalakan kepada pelulus yang sesuai berdasarkan jumlah dan jenis
   - Pemberitahuan e-mel dihantar kepada pelulus

2. **Proses Kelulusan**
   - Pelulus menerima pemberitahuan
   - Menyemak butiran dokumen dan maklumat sokongan
   - Pilihan yang tersedia:
     - **Approve**: Dokumen bergerak ke tahap seterusnya atau pemprosesan
     - **Reject**: Dikembalikan kepada pemula dengan komen
     - **Request Changes**: Membenarkan pengubahsuaian sebelum penyerahan semula

3. **Pemprosesan Akhir**
   - Setelah semua kelulusan diperoleh, status dokumen bertukar kepada "Approved"
   - Pemprosesan automatik bermula (cth., PO dihantar kepada vendor)
   - Jejak audit dikekalkan untuk semua tindakan kelulusan

**Pemantauan dan Pelaporan**:
- Jana laporan mingguan tentang kelulusan yang belum selesai
- Jejaki masa kelulusan mengikut jabatan
- Semak dokumen yang ditolak untuk penambahbaikan proses

---

### Proses Semakan Jejak Audit

**Objektif**: Semak jejak audit sistem secara berkala untuk memastikan integriti data dan pematuhan.

**Prasyarat**:
- Pengelogan audit didayakan
- Akses admin kepada laporan audit
- Pemahaman tentang proses perniagaan utama

**Semakan Audit Bulanan**:

1. **Akses Laporan Audit**
   - Navigasi ke **Administration** → **Audit Management** → **Audit Reports**
   - Pilih julat tarikh (bulan sebelumnya)
   - Pilih jenis laporan:
     - User Activity Report
     - Data Modification Report
     - Financial Transaction Log
     - System Access Report

2. **Semak Aktiviti Utama**
   - **Corak Log Masuk Pengguna**:
     - Masa atau lokasi log masuk luar biasa
     - Percubaan log masuk gagal
     - Sesi serentak daripada IP berbeza
   - **Pengubahsuaian Data**:
     - Perubahan pada data induk (pelanggan, vendor, item)
     - Pengubahsuaian pada transaksi yang dipos
     - Pemadaman rekod penting
   - **Aktiviti Kewangan**:
     - Transaksi atau pelarasan besar
     - Perubahan pada maklumat akaun bank
     - Pengubahsuaian pada keizinan pengguna

3. **Siasat Anomali**
   - Untuk aktiviti yang mencurigakan:
     - Klik **View Details** untuk melihat sejarah transaksi penuh
     - Semak nilai **Before/After** untuk perubahan data
     - Semak **User Comments** untuk sebab pengubahsuaian
     - Rujuk silang dengan justifikasi perniagaan

4. **Dokumenkan Penemuan**
   - Cipta **Audit Summary Report**
   - Dokumenkan sebarang pelanggaran dasar yang ditemui
   - Rekod tindakan pembetulan yang diambil
   - Kemas kini prosedur jika perlu untuk mengelakkan isu masa depan

**Senarai Semak Pematuhan**:
- ✅ Semua perubahan transaksi kewangan mempunyai sebab perniagaan yang sah
- ✅ Corak akses pengguna sejajar dengan jadual kerja
- ✅ Tiada pengubahsuaian data yang tidak dibenarkan
- ✅ Semua kelulusan yang diperlukan diperoleh untuk transaksi ketara
- ✅ Pengasingan tugas dikekalkan

---

## Operasi Termaju

### Pengurusan Transaksi Berbilang Mata Wang

**Objektif**: Kendalikan transaksi dalam pelbagai mata wang sambil mengekalkan penjejakan kadar pertukaran yang tepat.

**Prasyarat**:
- Pelbagai mata wang didayakan dalam sistem
- Sumber kadar pertukaran dikonfigurasikan
- Pemahaman tentang mata wang berfungsi vs. asing

**Persediaan dan Konfigurasi Mata Wang**:

1. **Dayakan Berbilang Mata Wang**
   - Navigasi ke **Administration** → **Company Setup** → **Currency Settings**
   - Tetapkan **Functional Currency** (mata wang pelaporan utama anda)
   - Klik **Add Currency** untuk setiap mata wang asing yang diperlukan
   - Konfigurasikan **Exchange Rate Sources**:
     - Kemasukan manual
     - Suapan automatik (disyorkan)
     - Kadar bank

2. **Sediakan Jadual Kadar Pertukaran**
   - Pergi ke **Financial Accounting** → **Currency Management** → **Exchange Rates**
   - Semak kadar semasa untuk semua mata wang aktif
   - Sediakan **Rate Types**:
     - Kadar spot (untuk kebanyakan transaksi)
     - Kadar purata (untuk item U&R)
     - Kadar sejarah (untuk item kunci kira-kira)
   - Konfigurasikan **Auto-Update Schedule** (harian disyorkan)

**Pemprosesan Transaksi**:

1. **Jualan Mata Wang Asing**
   - Cipta invois dalam **Sales & CRM** → **Invoice Management**
   - Pilih pelanggan dan **Currency** (lalai kepada mata wang pelanggan)
   - Masukkan jumlah dalam mata wang asing
   - Sistem memaparkan **Functional Currency Equivalent** menggunakan kadar semasa
   - **Post Invoice** - sistem merekod kedua-dua jumlah asing dan berfungsi

2. **Bayaran Mata Wang Asing**
   - Apabila bayaran diterima, pergi ke **Financial Accounting** → **Payments**
   - Masukkan bayaran dalam mata wang transaksi asal
   - Sistem mengira **Exchange Gain/Loss** berdasarkan perbezaan kadar
   - Pos entri jurnal automatik untuk untung/rugi

3. **Penilaian Semula Hujung Tempoh**
   - Navigasi ke **Financial Accounting** → **Currency Management** → **Revaluation**
   - Pilih **Balance Sheet Date**
   - Sistem menilai semula semua baki mata wang asing pada kadar semasa
   - Semak laporan **Unrealized Gain/Loss**
   - Pos entri penilaian semula ke lejar am

**Amalan Terbaik**:
- Kemas kini kadar pertukaran setiap hari
- Gunakan kontrak hadapan untuk pendedahan besar
- Pantau trend untung/rugi pertukaran
- Pertimbangkan peluang lindung nilai semula jadi

---

### Pengurusan Aset Tetap

**Objektif**: Jejaki dan susut nilai aset tetap selaras dengan piawaian perakaunan dan keperluan cukai.

**Prasyarat**:
- Kategori aset tetap ditakrifkan
- Kaedah susut nilai dikonfigurasikan
- Carta akaun termasuk akaun aset dan susut nilai

**Proses Persediaan Aset**:

1. **Konfigurasikan Kategori Aset**
   - Navigasi ke **Financial Accounting** → **Fixed Assets** → **Asset Categories**
   - Sediakan kategori dengan:
     - **Useful Life** (tahun)
     - **Depreciation Method** (garis lurus, dipercepat, dsb.)
     - **Asset Account** (di mana kos direkodkan)
     - **Depreciation Account** (susut nilai terkumpul)
     - **Expense Account** (perbelanjaan susut nilai bulanan)

2. **Tambah Aset Baharu**
   - Pergi ke **Fixed Assets** → **Asset Register** → **New Asset**
   - Masukkan butiran aset:
     - **Asset Name** dan penerangan
     - **Asset Category** (mengisi automatik tetapan susut nilai)
     - **Purchase Date** dan **Cost**
     - Rujukan **Vendor** dan **Purchase Order**
     - **Location** dan **Responsible Employee**

3. **Konfigurasikan Susut Nilai**
   - Semak tetapan susut nilai yang diisi automatik
   - Ubah suai jika perlu:
     - **Salvage Value** (nilai baki di hujung hayat)
     - **Depreciation Start Date**
     - **Method Override** (jika berbeza daripada lalai kategori)
   - Sediakan **Tax Depreciation** jika berbeza daripada susut nilai buku

**Proses Susut Nilai Bulanan**:

1. **Jalankan Pengiraan Susut Nilai**
   - Navigasi ke **Fixed Assets** → **Depreciation** → **Calculate Depreciation**
   - Pilih **Period** (bulan semasa)
   - Klik **Calculate** untuk mengira susut nilai bulanan
   - Semak laporan **Depreciation Schedule**

2. **Pos Entri Susut Nilai**
   - Semak jumlah yang dikira untuk kemunasabahan
   - Klik **Post Depreciation** untuk mencipta entri jurnal
   - Sahkan entri dalam **General Ledger**:
     - Debit: Depreciation Expense
     - Kredit: Accumulated Depreciation

3. **Jana Laporan**
   - **Asset Register**: Nilai buku semasa semua aset
   - **Depreciation Schedule**: Jumlah susut nilai masa depan
   - **Asset Additions/Disposals**: Ringkasan aktiviti bulanan

**Proses Pelupusan Aset**:
- Navigasi ke rekod aset dan klik **Dispose**
- Masukkan tarikh pelupusan dan hasil (jika ada)
- Sistem mengira untung/rugi pelupusan
- Pos entri automatik untuk membuang aset dan susut nilai terkumpul

---

### Konfigurasi dan Pelaporan Cukai

**Objektif**: Konfigurasikan tetapan cukai untuk mengira dan melaporkan pelbagai obligasi cukai secara automatik.

**Prasyarat**:
- Pemahaman tentang bidang kuasa cukai yang berkenaan
- Nombor pendaftaran cukai tersedia
- Carta akaun termasuk akaun liabiliti cukai

**Konfigurasi Persediaan Cukai**:

1. **Konfigurasikan Bidang Kuasa Cukai**
   - Navigasi ke **Administration** → **Tax Management** → **Tax Jurisdictions**
   - Tambah setiap bidang kuasa yang berkenaan:
     - Cukai **Federal/National**
     - Cukai **State/Provincial**
     - Cukai **Local** (bandar, daerah)
   - Untuk setiap bidang kuasa, masukkan:
     - Kadar cukai dan tarikh berkuat kuasa
     - Nombor pendaftaran cukai
     - Kekerapan pemfailan
     - Tarikh akhir

2. **Sediakan Jenis Cukai**
   - Pergi ke **Tax Management** → **Tax Types**
   - Konfigurasikan setiap jenis cukai:
     - **Sales Tax** (dikenakan kepada pelanggan)
     - **Use Tax** (atas pembelian apabila vendor tidak mengenakan cukai)
     - **VAT/GST** (sistem cukai nilai ditambah)
     - **Withholding Tax** (atas bayaran kepada vendor)
   - Pautkan kepada **General Ledger Accounts** yang sesuai

3. **Konfigurasikan Peraturan Cukai**
   - Navigasi ke **Tax Management** → **Tax Rules**
   - Sediakan peraturan untuk pengiraan cukai automatik:
     - **Product-based** (kadar berbeza untuk item berbeza)
     - **Location-based** (alamat ship-to menentukan kadar)
     - **Customer-based** (pelanggan dikecualikan, kadar berbeza)
   - Uji peraturan dengan transaksi contoh

**Proses Pelaporan Cukai Bulanan**:

1. **Jana Laporan Cukai**
   - Pergi ke **Reports** → **Tax Reports**
   - Pilih jenis laporan dan tempoh:
     - **Sales Tax Summary** (mengikut bidang kuasa)
     - **Use Tax Report** (item dibeli tanpa cukai)
     - **VAT Return** (VAT input vs. output)
     - **Tax Liability Detail** (transaksi sokongan)

2. **Semak dan Sesuaikan**
   - Bandingkan jumlah laporan dengan baki **General Ledger**
   - Siasat sebarang percanggahan:
     - Transaksi yang hilang
     - Kadar cukai yang salah
     - Pelarasan manual diperlukan
   - Cipta **Adjusting Entries** jika diperlukan

3. **Failkan Penyata Cukai**
   - Eksport laporan dalam format yang diperlukan (PDF, Excel, XML)
   - Lengkapkan borang cukai khusus bidang kuasa
   - Serahkan penyata mengikut tarikh akhir
   - Rekod **Tax Payments** dalam sistem

**Amalan Terbaik Pematuhan**:
- Kemas kini kadar cukai apabila ia berubah
- Kekalkan dokumentasi sandaran untuk semua pengiraan cukai
- Sediakan peringatan kalendar untuk tarikh akhir pemfailan
- Semakan berkala peraturan dan pengecualian cukai

---

## Aliran Kerja Pengurusan Data

### Prosedur Import/Eksport Data

**Objektif**: Pindahkan data masuk dan keluar dari BigLedger dengan cekap sambil mengekalkan integriti data.

**Prasyarat**:
- Data dalam format serasi (CSV, Excel)
- Pemetaan medan sumber ke medan BigLedger
- Sandaran data semasa

**Proses Import Data**:

1. **Sediakan Fail Import**
   - Muat turun **Import Template** daripada **Administration** → **Data Management** → **Import Templates**
   - Petakan lajur data anda ke lajur templat:
     - Medan diperlukan (ditanda dengan *)
     - Medan pilihan
     - Keperluan format data (tarikh, nombor)
   - Sahkan kualiti data:
     - Buang rekod pendua
     - Sahkan medan diperlukan diisi
     - Semak format dan panjang data

2. **Import Data**
   - Navigasi ke **Data Management** → **Import Data**
   - Pilih **Data Type** (pelanggan, vendor, item, transaksi)
   - Muat naik fail yang disediakan
   - Semak skrin **Field Mapping**:
     - Sahkan lajur sumber dipetakan ke medan BigLedger yang betul
     - Tetapkan **Default Values** untuk medan diperlukan yang tidak dipetakan
     - Konfigurasikan **Duplicate Handling** (langkau, kemas kini, cipta baharu)

3. **Sahkan dan Proses**
   - Klik **Validate Import** untuk menyemak ralat
   - Semak **Validation Report**:
     - Ralat format data
     - Medan diperlukan yang hilang
     - Rekod pendua ditemui
   - Betulkan ralat dalam fail sumber jika perlu
   - Klik **Process Import** apabila pengesahan lulus
   - Pantau **Import Progress** dan semak ringkasan penyelesaian

**Proses Eksport Data**:

1. **Konfigurasikan Eksport**
   - Pergi ke **Data Management** → **Export Data**
   - Pilih **Data Type** dan **Date Range**
   - Pilih **Export Format**:
     - CSV (untuk kegunaan am)
     - Excel (untuk analisis)
     - XML (untuk integrasi sistem)
   - Pilih **Fields to Include** (atau gunakan templat pratakrif)

2. **Jana dan Muat Turun**
   - Klik **Generate Export**
   - Sistem memproses permintaan dan menghantar pemberitahuan apabila selesai
   - Muat turun fail daripada **Export History**
   - Sahkan kelengkapan data yang dieksport

**Amalan Terbaik**:
- Sentiasa uji import dengan set data kecil dahulu
- Simpan salinan sandaran fail import
- Dokumenkan pemetaan medan untuk kegunaan masa depan
- Jadualkan eksport berkala untuk tujuan sandaran

---

## Mendapatkan Bantuan

{{< callout type="tip" >}}
**Petua Pro**: Tanda halaman ini dan gunakan pintasan kategori di bahagian atas untuk terus melompat ke aliran kerja yang anda perlukan.
{{< /callout >}}

Jika anda menghadapi isu dengan mana-mana aliran kerja ini:

1. **Semak Prasyarat**: Pastikan anda telah melengkapkan semua keperluan persediaan
2. **Semak Mesej Ralat**: Kebanyakan mesej ralat menyediakan panduan khusus
3. **Rujuk Keizinan Pengguna**: Sahkan anda mempunyai akses kepada modul dan fungsi yang diperlukan
4. **Hubungi Sokongan**: Gunakan sembang bantuan dalam sistem atau serahkan tiket sokongan

Untuk bahan latihan tambahan dan demonstrasi video aliran kerja ini, lawati bahagian [Sumber Latihan](/ms/user-guide/getting-started/).
