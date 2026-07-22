---
title: "Applet Penyelenggaraan Pekerja"
description: "Pengurusan rekod induk pekerja yang menyeluruh untuk operasi HR dan organisasi BigLedger"
tags:
- core-module
- employee-management
- hr
- master-data
- organizational-structure
weight: 7
---

## Tujuan dan Gambaran Keseluruhan

Applet Penyelenggaraan Pekerja ialah komponen HR asas dalam Modul Teras BigLedger, menyediakan pengurusan rekod induk pekerja yang menyeluruh yang menyokong sumber manusia, gaji, struktur organisasi dan operasi berkaitan pekerja merentasi semua modul.

{{< callout type="info" >}}
**Applet Modul Teras**: Ini merupakan salah satu daripada 13 applet Modul Teras yang penting, asas bagi mana-mana perniagaan yang mempunyai keperluan pekerja dan struktur organisasi.
{{< /callout >}}

### Fungsi Utama
- **Pengurusan Profil Pekerja** - Repositori maklumat pekerja yang lengkap
- **Struktur Organisasi** - Jabatan dan hubungan pelaporan
- **Pengurusan Peranan dan Kebenaran** - Akses dan kebenaran sistem
- **Pengurusan Pampasan** - Gaji, faedah dan data pampasan
- **Integrasi HR** - Asas bagi semua operasi HR dan gaji

## Ciri-ciri Utama

### Pengurusan Maklumat Pekerja
- Profil pekerja yang lengkap dengan maklumat peribadi
- Sejarah pekerjaan dan perkembangan kerjaya
- Maklumat hubungan kecemasan dan waris terdekat
- Latar belakang pendidikan dan kelayakan
- Kemahiran, pensijilan dan kompetensi
- Sejarah penilaian prestasi

### Pengurusan Struktur Organisasi
- Penugasan jabatan dan bahagian
- Hubungan pelaporan dan hierarki
- Penugasan pasukan dan projek
- Peruntukan lokasi dan ruang kerja
- Peruntukan pusat kos dan bajet
- Sokongan organisasi matriks

### Pekerjaan dan Pampasan
- Kontrak dan terma pekerjaan
- Struktur gaji dan pampasan
- Pendaftaran dan pengurusan faedah
- Kelayakan dan baki cuti
- Dasar kerja lebih masa dan elaun
- Pampasan berdasarkan prestasi

### Akses Sistem dan Keselamatan
- Penciptaan dan pengurusan akaun pengguna
- Penugasan kawalan akses berasaskan peranan
- Kebenaran modul dan ciri
- Sekatan akses data
- Definisi hierarki kelulusan
- Pihak berkuasa tandatangan digital

### Sokongan HR dan Pentadbiran
- Penyimpanan dan pengurusan dokumen
- Rekod latihan dan pembangunan
- Tindakan tatatertib dan amaran
- Penjejakan pengiktirafan dan anugerah
- Pemprosesan temu duga keluar dan penamatan
- Dokumentasi pematuhan kawal selia

## Spesifikasi Teknikal

### Keperluan Sistem
- **Tahap Akses Minimum**: Pentadbir HR
- **Kebergantungan Pangkalan Data**: Jadual induk pekerja
- **Titik Integrasi**: HR, gaji dan semua modul operasi
- **Ketersediaan API**: Operasi CRUD penuh dengan kawalan privasi
- **Penyimpanan Dokumen**: Pengurusan dokumen pekerja yang selamat

### Pilihan Konfigurasi Pekerja
- **Panjang ID Pekerja**: 3-20 aksara
- **Maklumat Peribadi**: Data demografi yang menyeluruh
- **Sejarah Pekerjaan**: Rekod jawatan tanpa had
- **Medan Tersuai**: Sehingga 40 medan tersuai
- **Lampiran Dokumen**: Penyimpanan dokumen selamat sehingga 1GB setiap pekerja

### Parameter Prestasi
- **Kapasiti Pekerja**: Sehingga 100,000 pekerja
- **Prestasi Carian**: <1 saat untuk carian kompleks
- **Operasi Pukal**: Memproses 1,000+ pekerja setiap kelompok
- **Pengguna Serentak**: 200+ pengguna serentak
- **Pematuhan Keselamatan**: Pematuhan GDPR, CCPA dan undang-undang privasi tempatan

## Titik Integrasi

### Kebergantungan Modul Teras
- **Applet Organisasi** - Struktur syarikat dan jabatan
- **Applet Tenant Admin** - Akaun pengguna dan akses sistem
- **Applet Carta Akaun** - Akaun gaji dan perbelanjaan
- **Applet Konfigurasi Cukai** - Tetapan cukai pekerja

### Integrasi Modul
| Modul | Tujuan Integrasi |
|--------|-------------------|
| **HR & Gaji** | Pengurusan sumber manusia yang lengkap |
| **Penjejakan Masa** | Masa dan kehadiran pekerja |
| **Pengurusan Projek** | Penugasan pasukan projek |
| **Jualan & CRM** | Penugasan wakil jualan |
| **Pembuatan** | Pengurusan pasukan pengeluaran |
| **Pengurusan Kualiti** | Penugasan pemeriksa kualiti |
| **Pengurusan Aset** | Jagaan dan tanggungjawab aset |

### Integrasi Luaran
- **Sistem HRIS** - Sistem maklumat sumber manusia
- **Perkhidmatan Gaji** - Pemprosesan gaji luaran
- **Sistem Penjejakan Masa** - Penangkapan kehadiran dan masa
- **Pengurusan Pembelajaran** - Platform latihan dan pembangunan
- **Perkhidmatan Semakan Latar Belakang** - Pengesahan pekerjaan
- **Penyedia Faedah** - Pentadbiran insurans dan faedah

## Keperluan Konfigurasi

### Keperluan Persediaan Awal
1. **Struktur Organisasi** - Tentukan jabatan dan bahagian
2. **Kategori Pekerja** - Sediakan klasifikasi pekerja
3. **Jenis Jawatan** - Konfigurasikan jawatan dan peranan pekerjaan
4. **Struktur Pampasan** - Sediakan skala dan gred gaji
5. **Pelan Faedah** - Konfigurasikan faedah pekerja

### Konfigurasi Penting
- **Jenis Pekerja**: Sepenuh masa, Separuh masa, Kontrak, Pelatih, Perunding
- **Struktur Jabatan**: Jualan, Operasi, Kewangan, HR, IT
- **Tahap Jawatan**: Permulaan, Junior, Senior, Pengurus, Pengarah, Eksekutif
- **Status Pekerjaan**: Aktif, Tidak Aktif, Bercuti, Ditamatkan
- **Peranan Akses**: Pentadbir, Pengguna, Pengurus, Lihat sahaja

### Konfigurasi Lanjutan
- **Organisasi Matriks** - Pelbagai hubungan pelaporan
- **Sokongan Berbilang Lokasi** - Pekerja merentasi lokasi berbeza
- **Perancangan Penggantian** - Pembangunan kerjaya dan penggantian
- **Pengurusan Kompetensi** - Penjejakan kemahiran dan keupayaan
- **Pengurusan Prestasi** - Penetapan matlamat dan penilaian

## Kes Penggunaan

### Operasi Perniagaan Kecil
**Senario**: Perniagaan runcit tempatan dengan 20 pekerja
- Pengurusan maklumat pekerja asas
- Struktur organisasi ringkas
- Akses sistem berasaskan peranan
- Integrasi gaji asas
- Pengurusan cuti

**Faedah**: Pentadbiran pekerja yang diperkemas

### Syarikat Pembuatan Bersaiz Sederhana
**Senario**: Kemudahan pembuatan dengan 200 pekerja
- Hierarki organisasi yang kompleks
- Pengurusan tenaga kerja berasaskan syif
- Penjejakan kemahiran dan pensijilan
- Pemantauan pematuhan keselamatan
- Penugasan pasukan pengeluaran

**Faedah**: Pengurusan tenaga kerja yang menyeluruh

### Firma Perkhidmatan Profesional
**Senario**: Syarikat perundingan dengan kerja berasaskan projek
- Penugasan pasukan projek
- Penjejakan jam boleh bil
- Pengurusan penglibatan pelanggan
- Penjejakan pembangunan profesional
- Integrasi penilaian prestasi

**Faedah**: Penyampaian perkhidmatan profesional yang dioptimumkan

### Perusahaan Berbilang Lokasi
**Senario**: Rangkaian runcit dengan 500+ pekerja merentasi lokasi
- Pangkalan data pekerja terpusat
- Pengurusan khusus lokasi
- Penjejakan pemindahan dan mobiliti
- Proses HR yang diseragamkan
- Pelaporan seluruh korporat

**Faedah**: Pengurusan HR berbilang lokasi yang boleh skala

## Applet Berkaitan

### Applet Modul Teras
- **[Applet Organisasi](/ms/applets/organization-applet/)** - Struktur syarikat dan jabatan
- **[Applet Tenant Admin](/ms/applets/tenant-admin-applet/)** - Pengurusan akses pengguna
- **[Applet Penyelenggaraan Pelanggan](/ms/applets/customer-maintenance-applet/)** - Penugasan wakil jualan

### Applet HR dan Gaji
- **[Applet Pemprosesan Gaji](/ms/applets/payroll-processing-applet/)** - Pampasan pekerja
- **[Applet Masa dan Kehadiran](/ms/applets/time-attendance-applet/)** - Penjejakan masa kerja
- **[Applet Pengurusan Cuti](/ms/applets/leave-management-applet/)** - Penjejakan cuti pekerja

### Applet Operasi
- **[Applet Pasukan Projek](/ms/applets/project-team-applet/)** - Penugasan projek
- **[Applet Pasukan Jualan](/ms/applets/sales-team-applet/)** - Pengurusan tenaga jualan
- **[Applet Jagaan Aset](/ms/applets/asset-custody-applet/)** - Tanggungjawab aset

## Panduan Persediaan

### Mula Pantas
1. **Akses Penyelenggaraan Pekerja** - Navigasi ke applet
2. **Tentukan Struktur Organisasi** - Sediakan jabatan
3. **Konfigurasikan Kategori Pekerja** - Sediakan klasifikasi
4. **Cipta Contoh Pekerja** - Tambah rekod pekerja ujian
5. **Uji Integrasi** - Sahkan integrasi dengan modul lain

### Persediaan Lanjutan
1. **Konfigurasi Berbilang Lokasi** - Sediakan pengurusan berasaskan lokasi
2. **Persediaan Perancangan Penggantian** - Konfigurasikan pembangunan kerjaya
3. **Pengurusan Kompetensi** - Sediakan penjejakan kemahiran
4. **Konfigurasi Integrasi** - Sambungkan sistem HR luaran
5. **Persediaan Pematuhan** - Konfigurasikan pematuhan kawal selia

## Struktur Data Induk Pekerja

### Maklumat Peribadi
```yaml
Employee ID: EMP-001
Full Name: John Michael Smith
Preferred Name: John
Date of Birth: 1985-05-15
Gender: Male
Nationality: Malaysian
NRIC/Passport: 850515-10-1234
Marital Status: Married
Contact Number: +60-12-345-6789
Email: john.smith@company.com
```

### Maklumat Pekerjaan
```yaml
Employee Type: Full-time
Employment Date: 2020-03-01
Position: Senior Sales Manager
Department: Sales & Marketing
Reporting Manager: Jane Wilson (EMP-050)
Location: Kuala Lumpur Office
Employment Status: Active
Probation End Date: 2020-05-31
Contract Type: Permanent
```

### Maklumat Pampasan
```yaml
Basic Salary: RM 8,500
Allowances: RM 1,500
Commission Structure: 3% of sales
Benefits Package: Medical, Dental, Insurance
EPF Number: 12345678
SOCSO Number: 87654321
Tax File Number: TA12345678
Bank Account: Maybank 123456789012
```

### Penugasan Organisasi
```yaml
Department: Sales & Marketing
Division: Commercial Operations
Cost Center: CC-SALES-001
Supervisor: Jane Wilson
Direct Reports: 
  - Mike Johnson (EMP-025)
  - Sarah Lee (EMP-030)
Project Assignments:
  - Digital Transformation Project
  - Customer Acquisition Campaign
```

## Amalan Terbaik

### Amalan Terbaik Pengurusan Data Pekerja
- **Privasi Data** - Pengendalian selamat maklumat peribadi
- **Ketepatan Data** - Pengesahan dan kemas kini berkala
- **Kawalan Akses** - Sekatan akses yang sesuai
- **Jejak Audit** - Penjejakan sejarah perubahan yang lengkap
- **Strategi Sandaran** - Sandaran data selamat secara berkala

### Amalan Terbaik Struktur Organisasi
- **Hierarki Jelas** - Hubungan pelaporan yang jelas
- **Kejelasan Peranan** - Deskripsi kerja dan tanggungjawab yang jelas
- **Semakan Berkala** - Penilaian struktur organisasi secara berkala
- **Pengurusan Perubahan** - Pengendalian perubahan struktur yang betul
- **Dokumentasi** - Carta organisasi yang menyeluruh

### Amalan Terbaik Keselamatan dan Pematuhan
- **Pematuhan Privasi** - Pematuhan GDPR dan undang-undang privasi tempatan
- **Pengekalan Data** - Dasar pengekalan data yang sesuai
- **Pengelogan Akses** - Pantau akses data pekerja
- **Audit Berkala** - Audit pematuhan secara berkala
- **Tindak Balas Insiden** - Prosedur tindak balas pelanggaran data

## Penyelesaian Masalah

### Isu Biasa
**Tidak dapat mencipta pekerja baharu**
- Semak kebenaran pengguna untuk penciptaan pekerja
- Sahkan medan yang diperlukan telah dilengkapkan
- Pastikan struktur organisasi ditakrifkan
- Semak sistem penomboran ID pekerja

**Isu akses sistem untuk pekerja**
- Sahkan status pekerja adalah aktif
- Semak penugasan peranan dan kebenaran
- Pastikan akaun pengguna dicipta dengan betul
- Semak kebenaran akses modul

**Masalah hierarki organisasi**
- Semak konfigurasi hubungan pelaporan
- Sahkan penugasan jabatan
- Semak hubungan pengurus-subordinat
- Sahkan ketepatan carta organisasi

### Sumber Sokongan
- Panduan persediaan dan konfigurasi pekerja
- Panduan reka bentuk struktur organisasi
- Dokumentasi privasi dan pematuhan
- Panduan pengurusan akses sistem

{{< callout type="warning" >}}
**Notis Privasi**: Data pekerja mengandungi maklumat peribadi yang sensitif. Pastikan pematuhan dengan undang-undang privasi tempatan dan laksanakan langkah keselamatan yang sesuai untuk melindungi data pekerja.
{{< /callout >}}