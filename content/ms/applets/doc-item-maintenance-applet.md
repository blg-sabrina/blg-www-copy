---
title: "Aplet Penyelenggaraan Item Dokumen"
description: "Uruskan item berasaskan dokumen, perkhidmatan, dan item bukan inventori dalam BigLedger"
tags:
- core-module
- item-management
- services
- master-data
- document-items
weight: 190
---

## Tujuan dan Gambaran Keseluruhan

Aplet Penyelenggaraan Item Dokumen ialah komponen Modul Teras yang penting yang menguruskan semua item bukan fizikal dalam BigLedger. Ini termasuk perkhidmatan, yuran perundingan, produk digital, lesen, langganan, dan sebarang item lain berasaskan dokumen atau bukan inventori yang perniagaan anda jual atau beli.

{{< callout type="info" >}}
**Aplet Modul Teras**: Ini ialah salah satu daripada 13 aplet Modul Teras yang penting, terutamanya penting untuk perniagaan berasaskan perkhidmatan dan syarikat yang menjual kedua-dua produk dan perkhidmatan.
{{< /callout >}}

### Fungsi Utama
- **Pengurusan Item Perkhidmatan** - Perkhidmatan profesional, perundingan, buruh
- **Pengurusan Produk Digital** - Perisian, lesen, langganan
- **Templat Dokumen** - Penerangan perkhidmatan yang dipiawaikan
- **Konfigurasi Item Pengebilan** - Item pengebilan bukan inventori
- **Penetapan Harga Perkhidmatan** - Model penetapan harga fleksibel untuk perkhidmatan

## Ciri Utama

### Jenis Item Dokumen
- **Perkhidmatan Profesional** - Perundingan, perkhidmatan guaman, perakaunan
- **Perkhidmatan Buruh** - Perkhidmatan pemasangan, penyelenggaraan, pembaikan
- **Produk Digital** - Lesen perisian, muat turun digital
- **Langganan** - Perjanjian perkhidmatan berulang
- **Yuran dan Caj** - Yuran pemprosesan, caj perkhidmatan
- **Item Pelbagai** - Item bukan inventori lain

### Konfigurasi Item
- Penerangan dan spesifikasi item terperinci
- Klasifikasi kategori perkhidmatan
- Unit ukuran (jam, hari, lesen, dll.)
- Umpukan kategori cukai
- Pemetaan akaun untuk hasil/perbelanjaan
- Konfigurasi struktur penetapan harga

### Spesifikasi Perkhidmatan
- Parameter penyampaian perkhidmatan
- Keperluan kemahiran dan kelayakan
- Anggaran tempoh dan masa
- Keperluan sumber
- Piawaian kualiti dan SLA
- Definisi penyampaian

### Model Penetapan Harga
- **Harga Tetap** - Kadar rata untuk perkhidmatan
- **Berasaskan Masa** - Kadar sejam, sehari, seminggu
- **Penetapan Harga Berperingkat** - Penetapan harga berasaskan volum
- **Langganan** - Model pengebilan berulang
- **Penetapan Harga Tersuai** - Penetapan harga khusus projek

### Integrasi Dokumen
- Templat kontrak perkhidmatan
- Penjanaan penyata kerja (SOW)
- Templat perjanjian tahap perkhidmatan (SLA)
- Penerangan baris item invois
- Templat cadangan dan sebut harga

## Spesifikasi Teknikal

### Keperluan Sistem
- **Tahap Akses Minimum**: Pentadbir Item
- **Kebergantungan Pangkalan Data**: Jadual induk item
- **Titik Integrasi**: Modul jualan, pembelian, kewangan
- **Ketersediaan API**: Operasi CRUD penuh
- **Enjin Templat**: Keupayaan penjanaan dokumen

### Pilihan Konfigurasi Item
- **Panjang Kod Item**: 3-50 aksara
- **Panjang Penerangan**: Sehingga 2,000 aksara
- **Peringkat Kategori**: Sehingga 5 peringkat hierarki
- **Medan Tersuai**: Sehingga 15 medan tersuai
- **Sokongan Lampiran**: Pelbagai jenis fail

### Parameter Prestasi
- **Kapasiti Item**: Sehingga 50,000 item dokumen
- **Prestasi Carian**: <2 saat untuk pertanyaan kompleks
- **Penjanaan Templat**: <5 saat untuk templat standard
- **Pengguna Serentak**: 200+ pengguna serentak
- **Operasi Pukal**: Memproses 1,000+ item setiap kelompok

## Titik Integrasi

### Kebergantungan Modul Teras
- **Aplet Konfigurasi Cukai** - Pemetaan cukai perkhidmatan
- **Aplet Carta Akaun** - Akaun hasil/perbelanjaan
- **Aplet Penyelenggaraan Pelanggan** - Persediaan penyampaian perkhidmatan
- **Aplet Penyelenggaraan Pembekal** - Perolehan perkhidmatan

### Integrasi Modul
| Modul | Tujuan Integrasi |
|--------|-------------------|
| **Jualan & CRM** | Sebut harga perkhidmatan dan pesanan jualan |
| **Pengurusan Projek** | Penyampaian perkhidmatan berasaskan projek |
| **Perakaunan Kewangan** | Penjejakan hasil dan perbelanjaan perkhidmatan |
| **HR & Gaji** | Peruntukan sumber dan pengkosan |
| **Penjejakan Masa** | Perekodan masa perkhidmatan |
| **Pembelian** | Perolehan perkhidmatan dan subkontrak |

### Integrasi Luaran
- **Platform Perkhidmatan Profesional** - Marketplace perkhidmatan
- **Sistem Penjejakan Masa** - Penangkapan masa luaran
- **Pengurusan Dokumen** - Repositori templat
- **Sistem CRM** - Sejarah khidmat pelanggan
- **Perisian Perakaunan** - Integrasi hasil perkhidmatan

## Keperluan Konfigurasi

### Keperluan Persediaan Awal
1. **Kategori Perkhidmatan** - Tentukan klasifikasi perkhidmatan
2. **Unit Ukuran** - Sediakan unit perkhidmatan (jam, hari, dll.)
3. **Pemetaan Akaun** - Pautkan ke carta akaun
4. **Konfigurasi Cukai** - Umpukkan kod cukai yang sesuai
5. **Struktur Penetapan Harga** - Tentukan metodologi penetapan harga

### Konfigurasi Penting
- **Perkhidmatan Standard**: Perkhidmatan biasa yang ditawarkan
- **Pakej Perkhidmatan**: Tawaran perkhidmatan berkumpulan
- **Keperluan Sumber**: Kemahiran dan peralatan diperlukan
- **Kaedah Penyampaian**: Cara perkhidmatan disampaikan
- **Piawaian Kualiti**: Jangkaan tahap perkhidmatan

### Konfigurasi Lanjutan
- **Templat Kontrak** - Perjanjian perkhidmatan yang dipiawaikan
- **Definisi SLA** - Perjanjian tahap perkhidmatan
- **Penjejakan Pencapaian** - Pengurusan pencapaian projek
- **Perancangan Sumber** - Kapasiti dan penjadualan
- **Metrik Prestasi** - Penjejakan KPI perkhidmatan

## Kes Penggunaan

### Firma Perkhidmatan Profesional
**Senario**: Firma guaman atau perundingan
- Perkhidmatan perundingan guaman
- Semakan dan penyediaan dokumen
- Yuran perwakilan mahkamah
- Pengebilan penahan dan sejam
- Perkhidmatan penyelidikan guaman khusus

**Manfaat**: Pengurusan perkhidmatan profesional yang menyeluruh

### Syarikat Perkhidmatan IT
**Senario**: Penyedia perkhidmatan teknologi
- Perkhidmatan pelaksanaan perisian
- Kontrak penyelenggaraan sistem
- Latihan dan perundingan
- Lesen dan langganan perisian
- Perkhidmatan sokongan teknikal

**Manfaat**: Pengurusan portfolio perkhidmatan IT yang lengkap

### Amalan Penjagaan Kesihatan
**Senario**: Klinik perubatan atau amalan pergigian
- Perkhidmatan perundingan dan pemeriksaan
- Prosedur dan rawatan khusus
- Perkhidmatan diagnostik
- Program kesejahteraan
- Penyediaan laporan perubatan

**Manfaat**: Penjejakan perkhidmatan penjagaan kesihatan yang menyeluruh

### Institusi Pendidikan
**Senario**: Pusat latihan atau universiti
- Tawaran kursus dan program
- Perkhidmatan pensijilan
- Langganan pembelajaran dalam talian
- Perundingan pendidikan
- Perkhidmatan penilaian dan pengujian

**Manfaat**: Pengurusan perkhidmatan pendidikan yang lengkap

## Aplet Berkaitan

### Aplet Modul Teras
- **[Aplet Penyelenggaraan Item Inventori](/ms/applets/inv-item-maintenance-applet/)** - Item inventori fizikal
- **[Aplet Konfigurasi Cukai](/ms/applets/tax-configuration-applet/)** - Persediaan cukai perkhidmatan
- **[Aplet Penyelenggaraan Pelanggan](/ms/applets/customer-maintenance-applet/)** - Pelanggan perkhidmatan

### Aplet Berkaitan Perkhidmatan
- **[Aplet Penjejakan Masa](/ms/applets/time-tracking-applet/)** - Perekodan masa perkhidmatan
- **[Aplet Pengurusan Projek](/ms/applets/project-management-applet/)** - Perkhidmatan berasaskan projek
- **[Aplet Perancangan Sumber](/ms/applets/resource-planning-applet/)** - Pengurusan sumber perkhidmatan

### Aplet Kewangan
- **[Aplet Pengurusan Penetapan Harga](/ms/applets/pricing-management-applet/)** - Penetapan harga perkhidmatan
- **[Aplet Penjanaan Invois](/ms/applets/invoice-generation-applet/)** - Pengebilan perkhidmatan
- **[Aplet Pengiktirafan Hasil](/ms/applets/revenue-recognition-applet/)** - Hasil perkhidmatan

## Panduan Persediaan

### Permulaan Pantas
1. **Akses Penyelenggaraan Item Dokumen** - Navigasi ke aplet
2. **Tentukan Kategori Perkhidmatan** - Sediakan klasifikasi perkhidmatan
3. **Cipta Perkhidmatan Standard** - Tambah perkhidmatan biasa
4. **Konfigurasikan Penetapan Harga** - Sediakan model penetapan harga
5. **Uji Penciptaan Perkhidmatan** - Cipta item perkhidmatan sampel

### Persediaan Lanjutan
1. **Konfigurasi Templat** - Sediakan templat perkhidmatan
2. **Persediaan Integrasi** - Sambungkan dengan modul lain
3. **Konfigurasi Aliran Kerja** - Sediakan proses kelulusan
4. **Persediaan Pelaporan** - Konfigurasikan laporan perkhidmatan
5. **Pengoptimuman Prestasi** - Optimumkan untuk volum tinggi

## Templat Item Perkhidmatan

### Templat Perkhidmatan Perundingan
```yaml
Item Code: CONS-001
Description: Management Consulting Services
Category: Professional Services
Unit of Measure: Hours
Default Rate: $150/hour
Tax Category: Professional Services Tax
Account: 4100 - Professional Service Revenue
Skills Required: 
  - Business Analysis
  - Project Management
Deliverables:
  - Analysis Report
  - Recommendations Document
```

### Templat Perkhidmatan Perisian
```yaml
Item Code: SOFT-001
Description: Software Implementation Service
Category: IT Services
Unit of Measure: Project
Default Rate: $5,000/project
Tax Category: IT Services Tax
Account: 4200 - IT Service Revenue
Duration: 30 days
Resources Required:
  - Software Developer
  - Project Manager
Deliverables:
  - Implemented System
  - User Training
  - Documentation
```

## Amalan Terbaik

### Amalan Terbaik Pengurusan Item
- **Pemiawaian** - Gunakan konvensyen penamaan yang konsisten
- **Klasifikasi** - Pengkategorian perkhidmatan yang betul
- **Dokumentasi** - Penerangan perkhidmatan yang terperinci
- **Kemas Kini Berkala** - Pastikan maklumat perkhidmatan terkini
- **Kawalan Versi** - Jejaki perubahan definisi perkhidmatan

### Amalan Terbaik Penetapan Harga
- **Penyelidikan Pasaran** - Analisis penetapan harga berdaya saing
- **Analisis Kos** - Fahami kos penyampaian perkhidmatan
- **Penetapan Harga Nilai** - Tetapkan harga berdasarkan nilai pelanggan
- **Semakan Berkala** - Pelarasan penetapan harga berkala
- **Analisis Keuntungan** - Pantau keuntungan perkhidmatan

### Amalan Terbaik Penyampaian Perkhidmatan
- **Spesifikasi Jelas** - Skop perkhidmatan yang ditakrifkan dengan baik
- **Piawaian Kualiti** - Kualiti perkhidmatan yang konsisten
- **Perancangan Sumber** - Peruntukan sumber yang mencukupi
- **Pemantauan Prestasi** - Jejaki metrik perkhidmatan
- **Maklum Balas Pelanggan** - Penilaian kualiti berkala

## Penyelesaian Masalah

### Isu Biasa
**Tidak boleh mencipta item perkhidmatan**
- Semak kebenaran pengguna untuk penciptaan item
- Sahkan medan yang diperlukan telah dilengkapkan
- Pastikan kategori perkhidmatan ditakrifkan
- Semak konfigurasi pemetaan akaun

**Isu penetapan harga dalam sebut harga/invois**
- Sahkan konfigurasi model penetapan harga
- Semak peraturan penetapan harga khusus pelanggan
- Pastikan pengiraan cukai adalah betul
- Semak tetapan diskaun dan tokokan

**Masalah penyampaian perkhidmatan**
- Semak ketersediaan sumber
- Sahkan keperluan kemahiran
- Semak tetapan garis masa penyampaian
- Sahkan piawaian kualiti

### Sumber Sokongan
- Panduan persediaan item perkhidmatan
- Dokumentasi konfigurasi penetapan harga
- Panduan penyelesaian masalah integrasi
- Dokumentasi amalan terbaik

{{< callout type="tip" >}}
**Petua Pro**: Item dokumen hendaklah seterperinci item inventori. Penerangan dan spesifikasi yang jelas mencegah pertikaian pengebilan dan memastikan penyampaian perkhidmatan yang konsisten.
{{< /callout >}}
