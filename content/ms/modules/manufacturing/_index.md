---
title: "Modul Pembuatan"
description: "Sistem pelaksanaan pembuatan lengkap untuk perancangan, kawalan dan pengoptimuman pengeluaran"
weight: 50
---

Modul Pembuatan menyediakan sistem pelaksanaan pembuatan (MES) yang komprehensif, merangkumi kitaran hayat pengeluaran sepenuhnya daripada perancangan hingga pelaksanaan. Modul ini direka untuk pengilang diskret dan pengilang proses yang memerlukan kawalan pengeluaran, pengurusan kualiti dan keupayaan pengoptimuman pembuatan yang canggih.

## Gambaran Keseluruhan

Modul Pembuatan menyampaikan:
- **Perancangan & Penjadualan Pengeluaran** - Perancangan kapasiti dan sumber yang komprehensif
- **Pelaksanaan Pembuatan** - Kawalan dan pemantauan pengeluaran masa nyata
- **Pengurusan Bil Bahan** - Struktur BOM kompleks dan kawalan versi
- **Pengurusan Kualiti** - Kawalan kualiti dalam proses dan pematuhan
- **Kawalan Lantai Kilang** - Pengurusan arahan kerja dan penjejakan buruh
- **Analitik Pembuatan** - Cerapan prestasi dan pengoptimuman pengeluaran

{{< callout type="info" >}}
**Fokus Modul**: Modul ini menyediakan keupayaan pelaksanaan pembuatan lengkap untuk pengilang diskret, industri proses dan persekitaran pengeluaran mod campuran.
{{< /callout >}}

## Ciri-ciri Utama

### Perancangan & Kawalan Pengeluaran
- **Jadual Pengeluaran Induk** - Perancangan pengeluaran dipacu permintaan
- **Perancangan Keperluan Bahan (MRP)** - Perancangan bahan automatik
- **Perancangan Keperluan Kapasiti (CRP)** - Perancangan sumber dan kekangan
- **Penjadualan Pengeluaran** - Penjadualan kapasiti terhingga dan tak terhingga
- **Penjadualan Lantai Kilang** - Penjadualan pusat kerja masa nyata

### Pelaksanaan Pembuatan
- **Pengurusan Arahan Kerja** - Kitaran hayat pesanan pengeluaran yang lengkap
- **Kawalan Lantai Kilang** - Pemantauan dan kawalan pengeluaran masa nyata
- **Penjejakan Buruh** - Masa dan kehadiran pekerja pada pesanan pengeluaran
- **Penggunaan Bahan** - Penggunaan bahan masa nyata dan backflushing
- **Pelaporan Pengeluaran** - Status dan penyiapan pengeluaran masa nyata

### Bil Bahan (BOM)
- **BOM Berbilang Peringkat** - Struktur produk hierarki yang kompleks
- **Kawalan Versi BOM** - Pengurusan perubahan kejuruteraan dan kawalan versi
- **BOM Fantom** - Pemasangan lintas terus dan BOM perancangan
- **BOM Alternatif** - Pelbagai kaedah pengeluaran dan penghalaan
- **Pengekosan BOM** - Pengiraan kumpulan naik kos piawai dan sebenar

### Pengurusan Kualiti
- **Pelan Kawalan Kualiti** - Prosedur kualiti khusus operasi
- **Pemeriksaan Dalam Proses** - Titik semakan kualiti masa nyata
- **Kawalan Proses Statistik (SPC)** - Pemantauan kualiti secara statistik
- **Pengurusan Ketidakakuran** - Penjejakan dan penyelesaian isu kualiti
- **Sijil Analisis** - Dokumentasi kualiti dan pematuhan

## Aplet Teras

### Asas Pengeluaran

{{< cards >}}
  {{< card link="/applets/related-applets-internal-job-order/" title="Pengurusan Arahan Kerja Dalaman" subtitle="Penciptaan, penjadualan dan kawalan pelaksanaan arahan kerja" >}}
  {{< card link="/applets/process-monitoring-applet/" title="Aplet Pemantauan Proses" subtitle="Pemantauan dan kawalan proses pengeluaran masa nyata" >}}
{{< /cards >}}

### Sokongan Pembuatan

{{< cards >}}
  {{< card link="/applets/internal-stock-adjustment-applet/" title="Aplet Pelarasan Stok Dalaman" subtitle="Pelarasan inventori berkaitan pengeluaran dan pengurusan sekerap" >}}
  {{< card link="/applets/stock-balance-applet/" title="Aplet Baki Stok" subtitle="Penjejakan kerja dalam proses dan barang siap masa nyata" >}}
{{< /cards >}}

## Kebergantungan Teras Dikongsi

Modul ini menggunakan aplet Modul Teras dan aplet modul lain yang penting:

### Modul Asas
- **[Modul Inventori](/modules/inventory/)** - Pengurusan bahan mentah dan barang siap
- **[Aplet Penyelenggaraan Item Inventori](/applets/inv-item-maintenance-applet/)** - Data induk produk dan komponen
- **[Aplet Organisasi](/applets/organization-applet/)** - Struktur kilang dan pusat kerja

### Perancangan & Pengekosan
- **[Aplet Carta Akaun](/applets/chart-of-account-applet/)** - Perakaunan kos pembuatan
- **[Aplet Penyelenggaraan Pekerja](/applets/employee-maintenance-applet/)** - Pengurusan sumber buruh
- **[Aplet Penyelenggaraan Pembekal](/applets/supplier-maintenance-applet/)** - Pengurusan pembekal bahan mentah

## Pendekatan Pelaksanaan

### Fasa 1: Persediaan Asas (Minggu 1-3)
1. **Struktur Pembuatan**
   - Takrifkan hierarki kilang dan pusat kerja
   - Konfigurasikan sumber dan kapasiti pengeluaran
   - Sediakan takrifan penghalaan dan operasi
   - Takrifkan titik kawalan kualiti

2. **Kejuruteraan Produk**
   - Cipta struktur bil bahan
   - Takrifkan penghalaan dan arahan kerja
   - Sediakan parameter pengekosan piawai
   - Konfigurasikan spesifikasi kualiti

### Fasa 2: Perancangan & Penjadualan (Minggu 4-6)
3. **Perancangan Pengeluaran**
   - Konfigurasikan parameter dan perancangan MRP
   - Sediakan penjadualan pengeluaran induk
   - Laksanakan perancangan keperluan kapasiti
   - Konfigurasikan algoritma penjadualan

4. **Persediaan Lantai Kilang**
   - Sediakan templat arahan kerja
   - Konfigurasikan sistem penjejakan buruh
   - Laksanakan prosedur pengeluaran bahan
   - Sediakan pelaporan pengeluaran

### Fasa 3: Pelaksanaan & Pengoptimuman (Minggu 7-8)
5. **Pelaksanaan Pembuatan**
   - Laksanakan sistem kawalan lantai kilang
   - Konfigurasikan pengumpulan data masa nyata
   - Sediakan prosedur kawalan kualiti
   - Laksanakan pemantauan prestasi

6. **Go-Live & Pengoptimuman**
   - Larian pengeluaran perintis dan pengesahan
   - Penalaan dan pengoptimuman prestasi
   - Latihan dan pensijilan pengguna
   - Pelaksanaan penambahbaikan berterusan

## Proses Perniagaan

### Proses Perancangan Pengeluaran
```
Ramalan Jualan → Jadual Induk → Larian MRP → Perancangan Kapasiti → Jadual Pengeluaran
```

### Proses Pelaksanaan Pembuatan
```
Pelepasan Arahan Kerja → Pengeluaran Bahan → Pemprosesan → Kawalan Kualiti → Penyiapan Pesanan
```

### Proses Kawalan Kualiti
```
Pelan QC → Pemeriksaan Dalam Proses → Ketidakakuran → Tindakan Pembetulan → Sijil
```

## Keupayaan Integrasi

### Integrasi Modul Dalaman
- **Modul Jualan & CRM** - Daripada pesanan pelanggan kepada perancangan pengeluaran
- **Modul Pembelian** - Daripada keperluan bahan kepada pesanan belian
- **Modul Inventori** - Pengurusan bahan mentah dan barang siap
- **Modul Perakaunan Kewangan** - Perakaunan kos pembuatan

### Integrasi Sistem Luaran
- **Pengurusan Kitaran Hayat Produk (PLM)** - Data kejuruteraan dan kawalan perubahan
- **Perancangan Sumber Perusahaan (ERP)** - Perancangan dan pelaporan korporat
- **Pengurusan Penyelenggaraan** - Penyelenggaraan dan kebolehpercayaan peralatan
- **Pengurusan Rantaian Bekalan** - Kerjasama dan perancangan pembekal

## Ciri Pembuatan Lanjutan

### Pengoptimuman Pengeluaran
- **Pembuatan Lean** - Pengurangan pembaziran dan pengoptimuman aliran
- **Just-in-Time (JIT)** - Sistem pengeluaran berasaskan tarikan
- **Teori Kekangan** - Pengenalpastian dan pengurusan kesesakan
- **Keberkesanan Peralatan Keseluruhan (OEE)** - Pengoptimuman prestasi peralatan
- **Penambahbaikan Berterusan** - Kaizen dan peningkatan prestasi

### Perancangan Lanjutan
- **Perancangan dan Penjadualan Lanjutan (APS)** - Pengoptimuman berasaskan kekangan
- **MRP Dipacu Permintaan** - Metodologi perancangan berasaskan aliran
- **Perancangan Kolaboratif** - Integrasi pembekal dan pelanggan
- **Perancangan Senario** - Analisis bagaimana-jika dan alternatif perancangan
- **Analitik Ramalan** - Ramalan permintaan dan perancangan kapasiti

### Kecemerlangan Kualiti
- **Integrasi Six Sigma** - Penambahbaikan kualiti secara statistik
- **Pengurusan Kualiti Menyeluruh (TQM)** - Sistem kualiti yang komprehensif
- **Pematuhan ISO** - Piawaian sistem pengurusan kualiti
- **Pematuhan Kawal Selia** - Keperluan kualiti khusus industri
- **Pemantauan Berterusan** - Pengawasan kualiti masa nyata

## Jenis Pembuatan Khusus

### Pembuatan Diskret
- **Operasi Pemasangan** - Pemasangan produk yang kompleks
- **Operasi Pemesinan** - Pemesinan CNC dan automatik
- **Fabrikasi** - Pembentukan logam dan kimpalan
- **Pemasangan Elektronik** - Pemasangan PCB dan komponen
- **Pembuatan Automotif** - Sistem pengeluaran automotif

### Pembuatan Proses
- **Pemprosesan Kelompok** - Pengeluaran berasaskan resipi
- **Pemprosesan Berterusan** - Pembuatan berasaskan aliran
- **Pemprosesan Kimia** - Pengeluaran kimia dan farmaseutikal
- **Makanan & Minuman** - Pemprosesan dan pembungkusan makanan
- **Farmaseutikal** - Pembuatan farmaseutikal yang dikawal selia

### Pembuatan Mod Campuran
- **Konfigurasi mengikut Pesanan** - Konfigurasi khusus pelanggan
- **Kejuruteraan mengikut Pesanan** - Kejuruteraan dan pengeluaran tersuai
- **Buat untuk Stok** - Pengeluaran dipacu ramalan
- **Buat mengikut Pesanan** - Pengeluaran dipacu pesanan pelanggan
- **Pasang mengikut Pesanan** - Penyesuaian pemasangan akhir

## Pengurusan Prestasi

### Penunjuk Prestasi Utama (KPI)
- **Keberkesanan Peralatan Keseluruhan (OEE)** - Pengukuran prestasi peralatan
- **Hasil Lulus Kali Pertama** - Penunjuk prestasi kualiti
- **Penghantaran Tepat Masa** - Pengukuran prestasi jadual
- **Pusingan Inventori** - Penunjuk kecekapan inventori
- **Produktiviti Buruh** - Pengukuran prestasi buruh

### Analitik Pembuatan
- **Papan Pemuka Pengeluaran** - Pemantauan pengeluaran masa nyata
- **Analisis Trend** - Analisis prestasi sejarah
- **Analisis Varians** - Prestasi sebenar berbanding dirancang
- **Analisis Punca** - Pengenalpastian dan penyelesaian masalah
- **Penyelenggaraan Ramalan** - Pengoptimuman kebolehpercayaan peralatan

### Pengurusan Kos
- **Pengekosan Piawai** - Piawaian kos pratentu
- **Pengekosan Sebenar** - Pengumpulan kos masa nyata
- **Pengekosan Berasaskan Aktiviti** - Peruntukan overhed yang tepat
- **Analisis Varians** - Analisis prestasi kos
- **Analisis Keberuntungan** - Keberuntungan produk dan pesanan

## Pematuhan & Piawaian

### Piawaian Pembuatan
- **ISO 9001** - Sistem pengurusan kualiti
- **ISO 14001** - Sistem pengurusan alam sekitar
- **OHSAS 18001** - Kesihatan dan keselamatan pekerjaan
- **AS9100** - Pengurusan kualiti aeroangkasa
- **TS 16949** - Pengurusan kualiti automotif

### Pematuhan Kawal Selia
- **Peraturan FDA** - Pematuhan pembuatan makanan dan ubat-ubatan
- **GMP (Amalan Pembuatan Baik)** - Pematuhan farmaseutikal
- **Peraturan Alam Sekitar** - Pematuhan sisa dan pelepasan
- **Peraturan Keselamatan** - Pematuhan keselamatan tempat kerja
- **Kawalan Eksport** - Pematuhan perdagangan antarabangsa

## Kes Penggunaan Biasa

### Pembuatan Automotif
- Bil bahan yang kompleks
- Pengeluaran just-in-time
- Integrasi pembekal
- Kebolehkesanan kualiti

### Pembuatan Elektronik
- Pemasangan volum tinggi
- Penjejakan komponen
- Kawalan kualiti
- Pengurusan data ujian

### Pembuatan Farmaseutikal
- Salasilah kelompok
- Pematuhan kawal selia
- Dokumentasi kualiti
- Penjejakan pensirian

### Makanan & Minuman
- Pengurusan resipi
- Penjejakan jangka hayat
- Kebolehkesanan lot
- Pematuhan kawal selia

## Integrasi Teknologi

### Integrasi Automasi
- **IoT Industri** - Pengumpulan dan analisis data penderia
- **Integrasi Mesin** - Sistem CNC, PLC dan SCADA
- **Robotik** - Pengeluaran dan pengendalian bahan automatik
- **Sistem Penglihatan** - Pemeriksaan dan kawalan kualiti automatik
- **RFID/Kod Bar** - Pengenalpastian dan penjejakan automatik

### Pembuatan Digital
- **Kembar Digital** - Pemodelan pengeluaran maya
- **Kecerdasan Buatan** - Analitik ramalan dan pengoptimuman
- **Pembelajaran Mesin** - Pengecaman corak dan penambahbaikan proses
- **Realiti Terimbuh** - Sistem arahan kerja dan latihan
- **Pengkomputeran Awan** - Pengkomputeran boleh skala dan analitik data

## Panduan Penyelesaian Masalah

### Isu Biasa

**Konflik penjadualan pengeluaran**
- Semak kekangan kapasiti
- Periksa ketersediaan sumber
- Sahkan tetapan keutamaan
- Analisis operasi kesesakan

**Kekurangan bahan**
- Periksa parameter MRP
- Semak tahap stok keselamatan
- Sahkan prestasi pembekal
- Analisis kebolehubahan permintaan

**Isu kualiti**
- Semak pelan kawalan
- Periksa prosedur pemeriksaan
- Analisis keupayaan proses
- Sahkan pematuhan latihan

## Sumber Latihan

### Latihan Operasi
- **Perancangan Pengeluaran** - Prosedur MRP dan penjadualan
- **Operasi Lantai Kilang** - Pelaksanaan dan pelaporan arahan kerja
- **Prosedur Kualiti** - Kawalan kualiti dan pemeriksaan
- **Latihan Keselamatan** - Keselamatan dan pematuhan pembuatan

### Latihan Teknikal
- **Konfigurasi Sistem** - Persediaan dan penyesuaian modul
- **Pengurusan Integrasi** - Integrasi peralatan dan sistem
- **Analisis Prestasi** - Pemantauan dan penambahbaikan KPI
- **Penambahbaikan Berterusan** - Metodologi lean dan kualiti

## Dokumentasi Berkaitan

### Panduan Persediaan
- [Panduan Pelaksanaan Modul Pembuatan](/guides/manufacturing-guides/)
- [Panduan Persediaan BOM dan Penghalaan](/guides/manufacturing-guides/bom-routing/)
- [Konfigurasi Perancangan Pengeluaran](/guides/manufacturing-guides/planning/)

### Panduan Operasi
- [Pengurusan Arahan Kerja](/user-guide/daily-tasks/work-orders/)
- [Penjadualan Pengeluaran](/user-guide/daily-tasks/production-scheduling/)
- [Prosedur Kawalan Kualiti](/user-guide/daily-tasks/quality-control/)

### Topik Lanjutan
- [Pelaksanaan Pembuatan Lean](/guides/advanced/lean-manufacturing/)
- [Integrasi dengan Sistem Automasi](/guides/advanced/automation-integration/)
- [Integrasi API](/developers/api-reference/manufacturing/)

## Langkah Seterusnya

Selepas melaksanakan Modul Pembuatan:

1. **Lengkapkan persediaan modul prasyarat** (Teras, Inventori)
2. **Konfigurasikan struktur pembuatan** dan pusat kerja
3. **Sediakan bil bahan** dan takrifan penghalaan
4. **Laksanakan perancangan pengeluaran** dan proses MRP
5. **Konfigurasikan kawalan lantai kilang** dan pengumpulan data
6. **Sediakan prosedur dan kawalan** pengurusan kualiti
7. **Latih pasukan operasi** tentang prosedur dan sistem pengeluaran
8. **Optimumkan prestasi** melalui inisiatif penambahbaikan berterusan

{{< callout type="tip" >}}
**Petua Pelaksanaan**: Pelaksanaan pembuatan memerlukan reka bentuk proses dan pengurusan perubahan yang meluas. Mulakan dengan barisan pengeluaran perintis dan kembangkan secara beransur-ansur kepada pengeluaran penuh. Fokus pada ketepatan data dan penggunaan oleh pengguna untuk memastikan pelaksanaan yang berjaya.
{{< /callout >}}

{{< callout type="warning" >}}
**Penting**: Operasi pembuatan melibatkan keperluan keselamatan, kualiti dan pematuhan. Pastikan latihan, pengesahan dan prosedur pematuhan yang sewajarnya tersedia sebelum melaksanakan sistem dan proses pengeluaran.
{{< /callout >}}
