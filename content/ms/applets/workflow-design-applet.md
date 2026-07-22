---
title: "Aplet Reka Bentuk Aliran Kerja"
description: "Automasi proses perniagaan dan pengurusan aliran kerja untuk operasi BigLedger"
tags:
- core-module
- workflow-automation
- business-process
- approval-workflows
- process-design
weight: 170
---

## Tujuan dan Gambaran Keseluruhan

Aplet Reka Bentuk Aliran Kerja ialah komponen Modul Teras yang berkuasa yang membolehkan automasi proses perniagaan dan pengurusan aliran kerja merentas BigLedger. Aplet ini menyediakan alat komprehensif untuk mereka bentuk, melaksana, dan menguruskan aliran kerja kelulusan, proses perniagaan, dan operasi automatik yang memperkemas kecekapan organisasi.

{{< callout type="info" >}}
**Aplet Modul Teras**: Ini ialah salah satu daripada 13 aplet Modul Teras yang penting, membolehkan automasi proses dan pengurusan aliran kerja merentas semua modul BigLedger.
{{< /callout >}}

### Fungsi Utama
- **Reka Bentuk dan Konfigurasi Aliran Kerja** - Pembina dan pereka aliran kerja visual
- **Pengurusan Proses Kelulusan** - Aliran kerja kelulusan pelbagai peringkat
- **Automasi Proses Perniagaan** - Pelaksanaan tugas dan proses automatik
- **Orkestrasi Integrasi** - Penyelarasan aliran kerja merentas modul
- **Pemantauan Prestasi** - Analisis kecekapan dan halangan aliran kerja

## Ciri Utama

### Pereka Aliran Kerja Visual
- Antara muka reka bentuk aliran kerja seret-dan-lepas
- Visualisasi proses berasaskan carta alir
- Nod keputusan dan logik bersyarat
- Laluan aliran kerja selari dan berjujukan
- Penciptaan aliran kerja berasaskan templat
- Kawalan versi dan sejarah aliran kerja

### Pengurusan Aliran Kerja Kelulusan
- Hierarki kelulusan pelbagai peringkat
- Penghalaan kelulusan berasaskan peranan
- Kelulusan dinamik berdasarkan syarat (jumlah, jenis, dsb.)
- Pengendalian eskalasi dan tamat masa
- Persediaan pelulus wakil dan pengganti
- Jejak audit kelulusan dan pemberitahuan

### Enjin Automasi Proses
- Pelaksanaan aliran kerja dicetuskan peristiwa
- Aliran kerja berjadual dan berulang
- Transformasi dan pemetaan data
- Integrasi dengan sistem luaran
- Mekanisme pengendalian ralat dan cuba semula
- Pemantauan proses masa nyata

### Pemberitahuan dan Komunikasi
- Pemberitahuan e-mel dan SMS
- Pengurusan makluman dalam sistem
- Pemberitahuan permintaan kelulusan
- Kemas kini status proses
- Pemberitahuan eskalasi
- Templat pemberitahuan tersuai

### Analitik dan Pelaporan Aliran Kerja
- Metrik prestasi proses
- Pengenalpastian dan analisis halangan
- Penjejakan masa kelulusan
- Analisis produktiviti pengguna
- Kadar penyiapan aliran kerja
- Laporan aliran kerja tersuai

## Spesifikasi Teknikal

### Keperluan Sistem
- **Tahap Akses Minimum**: Pentadbir Aliran Kerja
- **Kebergantungan Pangkalan Data**: Jadual enjin aliran kerja
- **Titik Integrasi**: Semua modul BigLedger
- **Ketersediaan API**: API orkestrasi aliran kerja
- **Pemprosesan Masa Nyata**: Pelaksanaan aliran kerja dipacu peristiwa

### Pilihan Konfigurasi Aliran Kerja
- **Langkah Aliran Kerja**: Sehingga 50 langkah setiap aliran kerja
- **Peringkat Kelulusan**: Sehingga 10 peringkat kelulusan
- **Logik Bersyarat**: Sokongan peraturan perniagaan kompleks
- **Titik Integrasi**: Sambungan sistem luaran tanpa had
- **Medan Tersuai**: Tangkapan data khusus aliran kerja

### Parameter Prestasi
- **Aliran Kerja Serentak**: 1,000+ pelaksanaan serentak
- **Masa Tindak Balas**: <2 saat untuk permulaan aliran kerja
- **Daya Pemprosesan**: 10,000+ pelaksanaan aliran kerja sejam
- **Pemantauan**: Penjejakan status aliran kerja masa nyata
- **Pengekalan Sejarah**: 5+ tahun sejarah aliran kerja

## Titik Integrasi

### Kebergantungan Modul Teras
- **Aplet Penyelenggaraan Pekerja** - Pengurusan peserta aliran kerja
- **Aplet Organisasi** - Integrasi hierarki organisasi
- **Aplet Tenant Admin** - Integrasi peranan dan kebenaran pengguna
- **Penyelenggaraan Pelanggan/Pembekal** - Penglibatan aliran kerja pihak luar

### Integrasi Modul
| Modul | Tujuan Integrasi |
|--------|-------------------|
| **Perakaunan Kewangan** | Aliran kerja kelulusan kewangan |
| **Pembelian** | Aliran kerja kelulusan pembelian dan perolehan |
| **Jualan & CRM** | Automasi proses jualan dan aliran kerja pelanggan |
| **HR & Gaji** | Proses kelulusan berkaitan pekerja |
| **Pengurusan Inventori** | Kelulusan pergerakan dan pelarasan stok |
| **Pengurusan Projek** | Aliran kerja projek dan automasi pencapaian |
| **Pengurusan Kualiti** | Aliran kerja kawalan kualiti dan pemeriksaan |

### Integrasi Luaran
- **Sistem E-mel** - Penghantaran pemberitahuan
- **Pengurusan Dokumen** - Integrasi aliran kerja dokumen
- **Sistem ERP** - Orkestrasi aliran kerja merentas sistem
- **Aplikasi Mudah Alih** - Penyertaan aliran kerja mudah alih
- **Perisikan Perniagaan** - Integrasi analitik aliran kerja
- **API Pihak Ketiga** - Integrasi aliran kerja perkhidmatan luaran

## Keperluan Konfigurasi

### Keperluan Persediaan Awal
1. **Struktur Organisasi** - Tentukan hierarki kelulusan
2. **Peranan dan Kebenaran Pengguna** - Konfigurasikan peserta aliran kerja
3. **Konfigurasi E-mel/SMS** - Sediakan penghantaran pemberitahuan
4. **Templat Aliran Kerja Asas** - Cipta corak aliran kerja standard
5. **Titik Akhir Integrasi** - Konfigurasikan sambungan sistem luaran

### Konfigurasi Penting
- **Hierarki Kelulusan**: Peringkat kelulusan Pengurus, Pengarah, CEO
- **Aliran Kerja Standard**: Kelulusan Pembelian, Permohonan Cuti, Kelulusan Perbelanjaan
- **Templat Pemberitahuan**: Templat mesej e-mel dan SMS
- **Tetapan Tamat Masa**: Peraturan eskalasi dan tamat masa aliran kerja
- **Tetapan Audit**: Pengelogan dan pengekalan sejarah aliran kerja

### Konfigurasi Lanjutan
- **Peraturan Perniagaan Kompleks** - Logik bersyarat lanjutan
- **Aliran Kerja Integrasi** - Automasi proses merentas sistem
- **Jenis Aliran Kerja Tersuai** - Aliran kerja khusus industri
- **Pemantauan Prestasi** - Analitik dan pelaporan lanjutan
- **Sokongan Aliran Kerja Mudah Alih** - Antara muka aliran kerja dioptimumkan untuk mudah alih

## Kes Penggunaan

### Aliran Kerja Kelulusan Pembelian
**Senario**: Proses kelulusan pesanan pembelian pelbagai peringkat
- Penghalaan automatik berdasarkan jumlah pembelian
- Kelulusan pengurus jabatan untuk <$5,000
- Kelulusan pengarah kewangan untuk $5,000-$25,000
- Kelulusan CEO untuk >$25,000
- Pemberitahuan pembekal automatik selepas kelulusan

**Manfaat**: Perolehan yang diperkemas dengan kawalan yang betul

### Aliran Kerja Permohonan Cuti Pekerja
**Senario**: Kelulusan dan pengurusan cuti HR
- Pekerja menghantar permohonan cuti
- Kelulusan/penolakan pengurus langsung
- Pemberitahuan HR untuk cuti yang diluluskan
- Integrasi kalendar automatik
- Kemas kini baki cuti

**Manfaat**: Pengurusan cuti yang cekap dengan dokumentasi yang betul

### Aliran Kerja Kelulusan Sebut Harga Jualan
**Senario**: Kelulusan diskaun dan penetapan harga jualan
- Wakil jualan mencipta sebut harga
- Kelulusan automatik untuk harga standard
- Kelulusan pengurus diperlukan untuk diskaun 10%+
- Kelulusan pengarah diperlukan untuk diskaun 20%+
- Pemberitahuan pelanggan selepas kelulusan akhir

**Manfaat**: Penetapan harga terkawal dengan kecekapan jualan

### Aliran Kerja Kawalan Kualiti
**Senario**: Proses pemeriksaan kualiti produk
- Pencetus pemeriksaan barang masuk
- Langkah pemeriksaan kawalan kualiti
- Kelulusan bersyarat berdasarkan keputusan ujian
- Pengendalian penolakan dan pemberitahuan pembekal
- Penjanaan sijil untuk item yang diluluskan

**Manfaat**: Jaminan kualiti sistematik dengan dokumentasi

## Aplet Berkaitan

### Aplet Modul Teras
- **[Aplet Penyelenggaraan Pekerja](/ms/applets/employee-maintenance-applet/)** - Persediaan peserta aliran kerja
- **[Aplet Organisasi](/ms/applets/organization-applet/)** - Struktur organisasi
- **[Aplet Tenant Admin](/ms/applets/tenant-admin-applet/)** - Kebenaran pengguna

### Aplet Pengurusan Proses
- **[Aplet Pemantauan Proses](/ms/applets/process-monitoring-applet/)** - Pemantauan prestasi proses
- **[Aplet Pengurusan Dokumen](/ms/applets/document-management-applet/)** - Integrasi aliran kerja dokumen
- **[Aplet Pemberitahuan](/ms/applets/notification-applet/)** - Pengurusan pemberitahuan lanjutan

### Aplet Fungsi Perniagaan
- **[Aplet Kelulusan Pembelian](/ms/applets/purchase-approval-applet/)** - Pengkhususan aliran kerja perolehan
- **[Aplet Aliran Kerja HR](/ms/applets/hr-workflow-applet/)** - Aliran kerja sumber manusia
- **[Aplet Kelulusan Kewangan](/ms/applets/financial-approval-applet/)** - Aliran kerja proses kewangan

## Panduan Persediaan

### Permulaan Pantas
1. **Akses Reka Bentuk Aliran Kerja** - Navigasi ke aplet
2. **Tentukan Hierarki Kelulusan Asas** - Sediakan peringkat kelulusan organisasi
3. **Cipta Aliran Kerja Mudah** - Reka bentuk aliran kerja kelulusan asas
4. **Uji Pelaksanaan Aliran Kerja** - Proses tika aliran kerja ujian
5. **Pantau Prestasi Aliran Kerja** - Kaji analitik aliran kerja

### Persediaan Lanjutan
1. **Reka Bentuk Aliran Kerja Kompleks** - Cipta aliran kerja bersyarat pelbagai laluan
2. **Konfigurasi Integrasi** - Sediakan sambungan sistem luaran
3. **Persediaan Pemberitahuan Tersuai** - Konfigurasikan peraturan pemberitahuan lanjutan
4. **Pengoptimuman Prestasi** - Optimumkan prestasi pelaksanaan aliran kerja
5. **Persediaan Papan Pemuka Analitik** - Konfigurasikan pemantauan prestasi aliran kerja

## Contoh Reka Bentuk Aliran Kerja

### Aliran Kerja Kelulusan Pesanan Pembelian
```yaml
Workflow Name: Purchase Order Approval
Trigger: Purchase Order Creation
Steps:
  1. Initial Review:
     - Condition: Amount < $1,000
     - Action: Auto-approve
     - Next: Send to Supplier
  
  2. Manager Approval:
     - Condition: Amount $1,000 - $5,000
     - Approver: Department Manager
     - Timeout: 2 days
     - Escalation: Director
     - Next: Finance Review
  
  3. Director Approval:
     - Condition: Amount > $5,000
     - Approver: Finance Director
     - Timeout: 3 days
     - Escalation: CEO
     - Next: Final Approval
  
  4. Final Processing:
     - Action: Update PO Status
     - Notification: Supplier and Requester
     - Integration: Accounting System
```

### Aliran Kerja Onboarding Pekerja
```yaml
Workflow Name: Employee Onboarding
Trigger: New Employee Record Creation
Steps:
  1. HR Documentation:
     - Assignee: HR Administrator
     - Tasks: 
       - Collect required documents
       - Create employee file
       - Setup benefits enrollment
     - Timeline: 3 days
  
  2. IT Setup:
     - Assignee: IT Administrator
     - Tasks:
       - Create user accounts
       - Setup equipment
       - Configure system access
     - Timeline: 2 days
  
  3. Department Orientation:
     - Assignee: Department Manager
     - Tasks:
       - Workplace orientation
       - Role-specific training
       - Introduce team members
     - Timeline: 1 week
  
  4. Completion Check:
     - Action: Verify all steps completed
     - Notification: HR, Manager, Employee
     - Integration: HRIS System Update
```

## Amalan Terbaik

### Amalan Terbaik Reka Bentuk Aliran Kerja
- **Pastikan Ia Ringkas** - Reka bentuk aliran kerja dengan kerumitan minimum
- **Penamaan Jelas** - Gunakan nama deskriptif untuk aliran kerja dan langkah
- **Dokumentasi** - Dokumenkan tujuan dan prosedur aliran kerja
- **Kajian Berkala** - Penilaian kecekapan aliran kerja secara berkala
- **Latihan Pengguna** - Latihan pengguna aliran kerja yang komprehensif

### Amalan Terbaik Proses Kelulusan
- **Peringkat Yang Sesuai** - Bilangan peringkat kelulusan yang betul
- **Kriteria Jelas** - Kriteria kelulusan yang jelas
- **Tamat Masa Munasabah** - Keperluan masa tindak balas yang sesuai
- **Pelulus Sandaran** - Persediaan pelulus wakil dan pengganti
- **Pematuhan Audit** - Kekalkan jejak audit kelulusan yang lengkap

### Amalan Terbaik Pengoptimuman Prestasi
- **Pengenalpastian Halangan** - Analisis halangan secara berkala
- **Pemudahan Proses** - Penambahbaikan proses berterusan
- **Peluang Automasi** - Kenal pasti automasi proses manual
- **Peruntukan Sumber** - Perancangan sumber aliran kerja yang betul
- **Pemantauan dan Makluman** - Pemantauan aliran kerja proaktif

## Penyelesaian Masalah

### Isu Biasa
**Aliran kerja tidak dicetuskan**
- Semak syarat dan peristiwa pencetus
- Sahkan status pengaktifan aliran kerja
- Kaji kebenaran dan peranan pengguna
- Sahkan ketersambungan integrasi

**Pemberitahuan kelulusan tidak dihantar**
- Semak konfigurasi e-mel/SMS
- Sahkan tetapan templat pemberitahuan
- Kaji maklumat hubungan pengguna
- Sahkan ketersambungan perkhidmatan pemberitahuan

**Isu prestasi aliran kerja**
- Analisis log pelaksanaan aliran kerja
- Kenal pasti halangan dan kelewatan
- Kaji penggunaan sumber sistem
- Optimumkan reka bentuk dan logik aliran kerja

### Sumber Sokongan
- Panduan reka bentuk dan konfigurasi aliran kerja
- Panduan pelaksanaan proses kelulusan
- Amalan terbaik pengoptimuman prestasi
- Dokumentasi penyelesaian masalah integrasi

{{< callout type="tip" >}}
**Petua Reka Bentuk**: Mulakan dengan aliran kerja yang ringkas dan tambah kerumitan secara beransur-ansur. Aliran kerja yang direka dengan baik sepatutnya meningkatkan kecekapan tanpa mencipta birokrasi yang tidak perlu.
{{< /callout >}}
