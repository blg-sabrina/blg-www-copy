---
title: "Applet T2T Admin"
description: "Pentadbiran Tenant-ke-Tenant dan pengurusan berbilang penyewa untuk operasi perusahaan BigLedger"
tags:
- core-module
- tenant-management
- multi-tenant
- enterprise-administration
- t2t-integration
weight: 12
---

## Tujuan dan Gambaran Keseluruhan

Applet T2T (Tenant-to-Tenant) Admin ialah komponen Modul Teras lanjutan yang direka untuk pentadbiran berbilang penyewa pada peringkat perusahaan dalam BigLedger. Applet ini menyediakan alat menyeluruh untuk mengurus hubungan antara penyewa, perkongsian data merentas penyewa, dan pentadbiran seluruh perusahaan merentas pelbagai entiti organisasi.

{{< callout type="info" >}}
**Applet Modul Teras**: Ini ialah salah satu daripada 13 applet Modul Teras yang penting, direka khas untuk persekitaran perusahaan dengan keperluan berbilang penyewa yang kompleks dan operasi antara organisasi.
{{< /callout >}}

### Fungsi Utama
- **Pentadbiran Berbilang Penyewa** - Pengurusan berpusat pelbagai penyewa
- **Hubungan Antara Penyewa** - Konfigurasi hubungan antara organisasi
- **Perkongsian Data Merentas Penyewa** - Perkongsian dan penyegerakan data yang terkawal
- **Penyatuan Perusahaan** - Pelaporan dan penyatuan berbilang entiti
- **Pengurusan Kitaran Hayat Penyewa** - Penyediaan, konfigurasi, dan penyahtauliahan penyewa

## Ciri-ciri Utama

### Pengurusan Berbilang Penyewa
- Konsol pentadbiran penyewa berpusat
- Pemetaan hierarki dan hubungan penyewa
- Pengurusan akses pengguna merentas penyewa
- Konfigurasi dan penyesuaian khusus penyewa
- Peruntukan sumber dan pengurusan kuota
- Pemantauan prestasi dan analitik penyewa

### Operasi Antara Penyewa
- Pemprosesan transaksi merentas penyewa
- Pengebilan dan penyelesaian antara syarikat
- Penyegerakan data induk yang dikongsi
- Pelaporan disatukan merentas penyewa
- Automasi aliran kerja merentas penyewa
- Audit dan pematuhan seluruh perusahaan

### Perkongsian Data dan Keselamatan
- Kebenaran perkongsian data yang terperinci
- Pengasingan dan keselamatan data penyewa
- Pengesahan dan integriti data merentas penyewa
- Jejak audit untuk operasi antara penyewa
- Pelaporan pematuhan dan kawal selia
- Kawalan pemastautin dan kedaulatan data

### Penyatuan Perusahaan
- Penyatuan kewangan berbilang entiti
- Analitik prestasi merentas penyewa
- Papan pemuka pelaporan seluruh perusahaan
- Pengurusan pematuhan disatukan
- Penguatkuasaan dasar peringkat kumpulan
- Pengoptimuman sumber perusahaan

### Pengurusan Kitaran Hayat Penyewa
- Penyediaan penyewa automatik
- Templat konfigurasi penyewa
- Migrasi penyewa dan pemindahan data
- Pengarkiban dan penyahtauliahan penyewa
- Koordinasi sandaran dan pemulihan bencana
- Pemantauan dan penyelenggaraan kesihatan penyewa

## Spesifikasi Teknikal

### Keperluan Sistem
- **Tahap Akses Minimum**: Enterprise Administrator
- **Kebergantungan Pangkalan Data**: Jadual seni bina berbilang penyewa
- **Titik Integrasi**: Semua modul BigLedger merentas penyewa
- **Ketersediaan API**: API pentadbiran peringkat perusahaan
- **Piawaian Keselamatan**: Sedia pematuhan SOC 2, ISO 27001

### Pilihan Konfigurasi Berbilang Penyewa
- **Kapasiti Penyewa**: Sehingga 1,000 penyewa setiap instans
- **Pengguna Merentas Penyewa**: Penetapan akses merentas penyewa tanpa had
- **Peraturan Perkongsian Data**: Pengurusan kebenaran terperinci
- **Entiti Penyatuan**: Sehingga 100 hierarki penyatuan
- **Medan Penyewa Tersuai**: 50+ medan tersuai setiap penyewa

### Parameter Prestasi
- **Pengurusan Penyewa**: Operasi penyewa masa nyata
- **Penyegerakan Data**: Penyegerakan merentas penyewa hampir masa nyata
- **Pemprosesan Penyatuan**: Penyatuan data berskala besar
- **Operasi Serentak**: 100+ operasi merentas penyewa serentak
- **Penjanaan Laporan**: Laporan seluruh perusahaan dalam beberapa minit

## Titik Integrasi

### Kebergantungan Modul Teras
- **Applet Tenant Admin** - Pentadbiran penyewa asas
- **Applet Organization** - Struktur berbilang organisasi
- **Applet Employee Maintenance** - Pengurusan pengguna merentas penyewa
- **Applet Chart of Account** - Carta akaun disatukan

### Integrasi Modul
| Modul | Tujuan Integrasi |
|--------|-------------------|
| **Financial Accounting** | Penyatuan dan pelaporan berbilang entiti |
| **Sales & CRM** | Pengurusan pelanggan dan jualan merentas penyewa |
| **Purchasing** | Pembelian kumpulan dan pengurusan vendor |
| **HR & Payroll** | Pengurusan pekerja berbilang entiti |
| **Manufacturing** | Rantaian bekalan merentas pelbagai entiti |
| **E-Commerce** | Operasi berbilang jenama dan berbilang entiti |
| **Project Management** | Kerjasama projek merentas entiti |

### Integrasi Luaran
- **Sistem Perusahaan** - Integrasi ERP, CRM, dan HCM
- **Penyedia Identiti** - LDAP, Active Directory, SAML SSO
- **Gudang Data** - Integrasi tasik data perusahaan
- **Kecerdasan Perniagaan** - Platform analitik perusahaan
- **Sistem Pematuhan** - Platform pelaporan kawal selia
- **Perkhidmatan Awan** - Sokongan penggunaan berbilang awan

## Keperluan Konfigurasi

### Keperluan Persediaan Awal
1. **Seni Bina Perusahaan** - Takrif hubungan dan hierarki penyewa
2. **Dasar Keselamatan** - Konfigurasi peraturan keselamatan merentas penyewa
3. **Peraturan Perkongsian Data** - Takrif kebenaran perkongsian data antara penyewa
4. **Struktur Penyatuan** - Sediakan hierarki penyatuan perusahaan
5. **Matriks Akses Pengguna** - Konfigurasi kebenaran pengguna merentas penyewa

### Konfigurasi Penting
- **Jenis Penyewa**: Parent, Subsidiary, Division, Branch, Joint Venture
- **Jenis Hubungan**: Ownership, Partnership, Service, Shared Services
- **Klasifikasi Data**: Public, Internal, Confidential, Restricted
- **Tahap Akses**: View, Edit, Full Control, Administrative
- **Peraturan Penyatuan**: Peraturan mata wang, penyingkiran, peruntukan

### Konfigurasi Lanjutan
- **Struktur Pemilikan Kompleks** - Hierarki pemilikan berbilang peringkat
- **Pematuhan Kawal Selia** - Keperluan pematuhan khusus industri
- **Sekatan Geografi** - Peraturan pemastautin dan kedaulatan data
- **Aliran Kerja Tersuai** - Aliran kerja kelulusan dan kerjasama antara penyewa
- **Pengoptimuman Prestasi** - Penalaan prestasi berskala perusahaan

## Kes Penggunaan

### Perbadanan Multinasional
**Senario**: Perbadanan global dengan anak syarikat di pelbagai negara
- Pentadbiran berpusat semua operasi negara
- Penyatuan kewangan merentas sempadan
- Proses berpiawai merentas semua entiti
- Pematuhan dengan pelbagai bidang kuasa kawal selia
- Operasi pusat perkhidmatan yang dikongsi

**Faedah**: Operasi global bersatu dengan pematuhan tempatan

### Struktur Syarikat Induk
**Senario**: Syarikat induk pelaburan dengan portfolio pelbagai
- Pemantauan prestasi syarikat portfolio
- Pelaporan kewangan disatukan
- Perkhidmatan pentadbiran yang dikongsi
- Analitik prestasi pelaburan
- Pemantauan usaha wajar dan pematuhan

**Faedah**: Pengurusan dan pengawasan portfolio yang menyeluruh

### Operasi Francais
**Senario**: Pemberi francais mengurus pelbagai lokasi francais
- Piawaian jenama dan operasi berpusat
- Pemantauan prestasi penerima francais
- Hubungan pembekal dan pembelian yang dikongsi
- Pematuhan jenama dan jaminan kualiti
- Pengurusan pemasaran dan promosi disatukan

**Faedah**: Operasi francais yang konsisten dan pengurusan jenama

### Rangkaian Perkhidmatan Profesional
**Senario**: Firma perkhidmatan profesional berbilang rakan kongsi
- Kerjasama firma rakan kongsi dan perkongsian sumber
- Pengurusan pelanggan dan projek yang dikongsi
- Pengebilan disatukan dan perkongsian hasil
- Pengurusan pengetahuan dan perkongsian amalan terbaik
- Pemasaran bersama dan pembangunan perniagaan

**Faedah**: Kerjasama yang dipertingkat dan pengoptimuman sumber

## Applet Berkaitan

### Applet Modul Teras
- **[Applet Tenant Admin](/ms/applets/tenant-admin-applet/)** - Pentadbiran penyewa asas
- **[Applet Organization](/ms/applets/organization-applet/)** - Struktur organisasi
- **[Applet Employee Maintenance](/ms/applets/employee-maintenance-applet/)** - Pengguna merentas penyewa

### Applet Pengurusan Perusahaan
- **[Applet Consolidation](/ms/applets/consolidation-applet/)** - Penyatuan kewangan
- **[Applet Enterprise Reporting](/ms/applets/enterprise-reporting-applet/)** - Pelaporan merentas penyewa
- **[Applet Compliance Management](/ms/applets/compliance-management-applet/)** - Pematuhan perusahaan

### Applet Integrasi
- **[Applet Data Synchronization](/ms/applets/data-sync-applet/)** - Penyegerakan data merentas penyewa
- **[Applet API Gateway](/ms/applets/api-gateway-applet/)** - Pengurusan API perusahaan
- **[Applet Security Management](/ms/applets/security-management-applet/)** - Keselamatan perusahaan

## Panduan Persediaan

### Permulaan Pantas
1. **Akses Konsol T2T Admin** - Navigasi ke applet
2. **Takrif Hubungan Penyewa** - Konfigurasi struktur organisasi
3. **Sediakan Peraturan Perkongsian Data** - Konfigurasi kebenaran merentas penyewa
4. **Konfigurasi Akses Pengguna** - Sediakan penetapan pengguna merentas penyewa
5. **Uji Operasi Antara Penyewa** - Sahkan fungsi dengan senario ujian

### Persediaan Lanjutan
1. **Konfigurasi Hierarki Kompleks** - Sediakan struktur berbilang peringkat
2. **Persediaan Peraturan Penyatuan** - Konfigurasi penyatuan kewangan
3. **Persediaan Rangka Kerja Pematuhan** - Konfigurasi pematuhan kawal selia
4. **Pengoptimuman Prestasi** - Optimumkan untuk skala perusahaan
5. **Perancangan Pemulihan Bencana** - Konfigurasi sandaran seluruh perusahaan

## Contoh Konfigurasi T2T

### Struktur Syarikat Induk
```yaml
Enterprise: Global Holdings Inc.
Tenant Hierarchy:
  Parent: Global Holdings Inc. (HQ)
  Subsidiaries:
    - Manufacturing Division (US)
    - European Operations (EU)
    - Asia Pacific (APAC)
    - Shared Services Center (SSC)

Relationships:
  - Type: Ownership (100%)
    Parent: Global Holdings Inc.
    Subsidiaries: All divisions
  
  - Type: Shared Services
    Provider: Shared Services Center
    Recipients: All divisions

Data Sharing Rules:
  Financial Data:
    - HQ: Full access to all subsidiary data
    - Subsidiaries: Access to own data + shared services
    - SSC: Access to administrative data only
  
  Operational Data:
    - Manufacturing: Product and inventory data
    - Sales Divisions: Customer and sales data
    - Cross-pollination: Approved master data only
```

### Operasi Runcit Berbilang Jenama
```yaml
Enterprise: Retail Group Corp.
Tenant Structure:
  Brands:
    - Premium Brand A
    - Mid-Market Brand B
    - Budget Brand C
  
  Functions:
    - Central Purchasing
    - Distribution Centers
    - IT Services
    - Finance & Accounting

Cross-Tenant Operations:
  Purchasing:
    - Central negotiation for all brands
    - Brand-specific product selections
    - Shared supplier relationships
  
  Inventory:
    - Brand-specific inventory management
    - Shared distribution infrastructure
    - Cross-brand inventory transfers
  
  Financial:
    - Brand-specific P&L
    - Consolidated group reporting
    - Shared cost allocation
```

## Amalan Terbaik

### Amalan Terbaik Seni Bina Berbilang Penyewa
- **Takrifan Hierarki Jelas** - Hubungan penyewa yang ditakrifkan dengan baik
- **Pengasingan Data** - Pengasingan data penyewa yang betul
- **Keselamatan Melalui Reka Bentuk** - Keselamatan dibina dalam seni bina
- **Perancangan Skalabiliti** - Reka bentuk untuk pertumbuhan perusahaan
- **Dokumentasi** - Dokumentasi seni bina yang menyeluruh

### Amalan Terbaik Operasi Merentas Penyewa
- **Akses Terkawal** - Prinsip keistimewaan paling minimum
- **Audit Segalanya** - Jejak audit antara penyewa yang lengkap
- **Pemantauan Prestasi** - Pengoptimuman prestasi berterusan
- **Pengurusan Perubahan** - Prosedur kawalan perubahan yang betul
- **Pemulihan Bencana** - Sandaran dan pemulihan seluruh perusahaan

### Amalan Terbaik Pematuhan dan Tadbir Urus
- **Penjajaran Kawal Selia** - Pematuhan dengan semua peraturan yang berkenaan
- **Penguatkuasaan Dasar** - Aplikasi dasar yang konsisten
- **Pengurusan Risiko** - Penilaian risiko seluruh perusahaan
- **Audit Berkala** - Audit pematuhan dan keselamatan berkala
- **Tindak Balas Insiden** - Prosedur tindak balas insiden yang diselaraskan

## Penyelesaian Masalah

### Isu Biasa
**Masalah akses merentas penyewa**
- Semak kebenaran pengguna dan penetapan peranan
- Sahkan konfigurasi hubungan penyewa
- Semak semula tetapan peraturan perkongsian data
- Sahkan status dan pengaktifan penyewa

**Kegagalan penyegerakan data**
- Semak sambungan rangkaian antara penyewa
- Sahkan peraturan pemetaan dan transformasi data
- Semak semula jadual dan pencetus penyegerakan
- Sahkan semakan pengesahan dan integriti data

**Isu pelaporan penyatuan**
- Sahkan konfigurasi peraturan penyatuan
- Semak peraturan penukaran mata wang dan penyingkiran
- Semak semula sambungan dan pemetaan sumber data
- Sahkan hierarki dan hubungan pelaporan

### Sumber Sokongan
- Panduan reka bentuk seni bina berbilang penyewa
- Panduan pelaksanaan operasi merentas penyewa
- Dokumentasi pematuhan dan tadbir urus perusahaan
- Panduan pengoptimuman prestasi dan penyelesaian masalah

{{< callout type="warning" >}}
**Kritikal Perusahaan**: Operasi T2T menjejaskan pelbagai entiti organisasi. Perubahan perlu dirancang, diuji, dan dilaksanakan dengan teliti dengan prosedur pengurusan perubahan yang betul.
{{< /callout >}}
