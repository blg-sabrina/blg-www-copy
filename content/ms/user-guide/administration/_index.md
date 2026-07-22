---
title: Pentadbiran
description: Pentadbiran sistem, pengurusan pengguna, dan konfigurasi lanjutan untuk pentadbir BigLedger
tags: [administration, system-admin, user-management, configuration]
weight: 40
bookCollapseSection: false
---

Alat pentadbiran dan konfigurasi sistem yang menyeluruh untuk pentadbir BigLedger. Bahagian ini merangkumi pengurusan pengguna, tetapan sistem, keselamatan, dan struktur organisasi.

## Pengurusan Pengguna & Pasukan

Uruskan pengguna dan struktur pasukan organisasi anda:

{{< cards >}}
{{< card link="/ms/user-guide/administration/member-listing" title="Pengurusan Pengguna" subtitle="Menambah, menyunting, dan mengurus akaun pengguna serta kebenaran" >}}
{{< card link="/ms/user-guide/administration/team" title="Konfigurasi Pasukan" subtitle="Menyediakan jabatan, peranan, dan struktur organisasi" >}}
{{< card link="/ms/user-guide/administration/member-class" title="Klasifikasi Ahli" subtitle="Peranan pengguna, kebenaran, dan sistem kawalan akses" >}}
{{< /cards >}}

## Organisasi & Struktur

Konfigurasikan organisasi perniagaan dan struktur data anda:

{{< cards >}}
{{< card link="/ms/user-guide/administration/group-listing" title="Pengurusan Kumpulan" subtitle="Mengurus kumpulan, kategori, dan struktur organisasi" >}}
{{< card link="/ms/user-guide/administration/member-label" title="Konfigurasi Label" subtitle="Sistem pelabelan dan penandaan lanjutan untuk organisasi yang lebih baik" >}}
{{< card link="/ms/user-guide/administration/member-label-list" title="Pengurusan Label" subtitle="Mencipta dan mengurus label untuk pengkategorian dan pelaporan" >}}
{{< /cards >}}

## Tanggungjawab Pentadbiran Utama

### Pengurusan Pengguna
- ✅ Cipta dan selenggara akaun pengguna
- ✅ Berikan peranan dan kebenaran yang sesuai
- ✅ Pantau aktiviti pengguna dan keselamatan
- ✅ Kendalikan set semula kata laluan dan isu akses
- ✅ Uruskan struktur pasukan dan hubungan pelaporan

### Konfigurasi Sistem
- ✅ Konfigurasikan peraturan perniagaan dan aliran kerja
- ✅ Sediakan hierarki organisasi
- ✅ Uruskan integrasi sistem
- ✅ Konfigurasikan tetapan dan dasar keselamatan
- ✅ Selenggara prosedur sandaran dan pemulihan data

### Tadbir Urus Data
- ✅ Wujudkan piawaian kualiti data
- ✅ Konfigurasikan peraturan pengesahan
- ✅ Uruskan konsistensi data induk
- ✅ Laksanakan kawalan audit
- ✅ Pastikan keperluan pematuhan

## Senarai Semak Tugas Pentadbiran

### Pentadbiran Harian
- [ ] Pantau prestasi sistem dan aktiviti pengguna
- [ ] Semak amaran dan pemberitahuan keselamatan
- [ ] Kendalikan permintaan akses pengguna dan isu
- [ ] Proses kelulusan tertunda dan aliran kerja
- [ ] Semak sandaran sistem dan integrasi

### Pentadbiran Mingguan
- [ ] Semak kebenaran pengguna dan tahap akses
- [ ] Analisis laporan penggunaan sistem
- [ ] Kemas kini konfigurasi sistem mengikut keperluan
- [ ] Jalankan semakan keselamatan
- [ ] Rancang tetingkap penyelenggaraan yang akan datang

### Pentadbiran Bulanan
- [ ] Audit keselamatan yang menyeluruh
- [ ] Semakan pensijilan akses pengguna
- [ ] Analisis prestasi sistem
- [ ] Penilaian kualiti data
- [ ] Semakan keberkesanan peraturan perniagaan

## Amalan Terbaik Keselamatan

### Kawalan Akses
- **Prinsip Keistimewaan Paling Minimum**: Berikan akses minimum yang diperlukan
- **Keselamatan Berasaskan Peranan**: Gunakan peranan dan bukannya kebenaran individu
- **Semakan Berkala**: Audit akses pengguna setiap suku tahun
- **Pengasingan Tugas**: Cegah konflik kepentingan
- **Pengesahan Kukuh**: Kuatkuasakan kata laluan yang kompleks dan 2FA

### Perlindungan Data
- **Penyulitan**: Pastikan penyulitan data semasa rehat dan semasa dihantar
- **Strategi Sandaran**: Kekalkan sandaran yang kerap dan diuji
- **Pengurusan Perubahan**: Dokumenkan semua perubahan sistem
- **Pematuhan**: Penuhi keperluan kawal selia (PDPA, dsb.)
- **Tindak Balas Insiden**: Sediakan prosedur untuk insiden keselamatan

{{< callout type="warning" >}}
**Amaran Keselamatan**: Pentadbir mempunyai keistimewaan yang berkuasa. Sentiasa patuhi prinsip keistimewaan paling minimum dan kekalkan log audit terperinci bagi tindakan pentadbiran.
{{< /callout >}}

## Pengurusan Integrasi Sistem

**TODO: Add comprehensive system integration guides**

### Bidang Integrasi Biasa
- **Sistem Perbankan** - Import penyata bank dan penyesuaian
- **Platform E-Dagang** - Penyegerakan kedai dalam talian
- **Get Laluan Pembayaran** - Integrasi pemprosesan pembayaran
- **API Pihak Ketiga** - Sambungan perkhidmatan luaran
- **Alat Pelaporan** - Integrasi risikan perniagaan

### Amalan Terbaik Integrasi
- **Pengujian**: Sentiasa uji integrasi dalam persekitaran pementasan
- **Pemantauan**: Sediakan amaran untuk kegagalan integrasi
- **Dokumentasi**: Selenggara dokumentasi integrasi
- **Keselamatan**: Lindungi kelayakan API dan token akses
- **Prestasi**: Pantau kesan prestasi integrasi

## Menyelesaikan Isu Biasa

### Masalah Akses Pengguna
- **Tidak Boleh Log Masuk**: Semak status pengguna, kata laluan, dan kebenaran
- **Ciri Tiada**: Sahkan penetapan peranan dan akses applet
- **Isu Prestasi**: Semak pelayar dan sambungan rangkaian pengguna
- **Data Tidak Kelihatan**: Semak keselamatan peringkat rekod dan penapis

### Isu Prestasi Sistem
- **Respons Perlahan**: Pantau sumber pelayan dan prestasi pangkalan data
- **Kegagalan Integrasi**: Semak kelayakan API dan kesambungan rangkaian
- **Kegagalan Sandaran**: Sahkan storan sandaran dan konfigurasi jadual
- **Ralat Laporan**: Semak parameter laporan dan hak akses data

## Pematuhan & Tadbir Urus

### Pematuhan Kawal Selia
**TODO: Add detailed compliance management procedures**

- **Privasi Data (PDPA)**: Prosedur perlindungan data peribadi
- **Pematuhan Kewangan**: Pematuhan peraturan cukai dan perakaunan
- **Piawaian Industri**: Keperluan pematuhan khusus sektor
- **Keperluan Audit**: Penyelenggaraan dokumentasi dan bukti

### Tadbir Urus Dalaman
- **Kawalan Perubahan**: Proses formal untuk perubahan sistem
- **Piawaian Dokumentasi**: Selenggara dokumentasi sistem terkini
- **Program Latihan**: Pastikan pengguna dilatih tentang perubahan sistem
- **Metrik Prestasi**: Pantau keberkesanan sistem dan pengguna

## Konfigurasi Lanjutan

**TODO: Add advanced system configuration guides**

### Pengurusan Aliran Kerja
- **Rantaian Kelulusan**: Proses kelulusan berbilang peringkat
- **Peraturan Perniagaan**: Penguatkuasaan logik perniagaan automatik
- **Pemberitahuan**: Konfigurasi amaran e-mel dan SMS
- **Prosedur Peningkatan**: Mengendalikan tugas dan pengecualian yang tertunggak

### Pilihan Penyesuaian
- **Medan Tersuai**: Menambah medan data khusus perniagaan
- **Pembinaan Laporan**: Mencipta laporan dan papan pemuka tersuai
- **Antara Muka Pengguna**: Menyesuaikan skrin dan susun atur
- **Pembangunan Integrasi**: Membina integrasi tersuai

## Pemantauan Prestasi

Jejaki metrik pentadbiran utama:

| Metrik | Sasaran | Kaedah Pemantauan |
|--------|---------|------------------|
| **Masa Operasi Sistem** | > 99.5% | Pemantauan automatik |
| **Isu Log Masuk Pengguna** | < 2% percubaan | Analisis log akses |
| **Kejayaan Sandaran Data** | 100% | Pengesahan sandaran |
| **Insiden Keselamatan** | 0 sebulan | Semakan log keselamatan |
| **Kepuasan Pengguna** | > 90% | Tinjauan pengguna berkala |

## Langkah Seterusnya untuk Pentadbir

1. **[Laporan & Analitik](/ms/user-guide/reports-analytics/)** - Belajar mencipta laporan pentadbiran
2. **[Menyelesaikan Masalah](/ms/user-guide/troubleshooting/)** - Kuasai teknik penyelesaian masalah
3. **[Amalan Terbaik](/ms/user-guide/best-practices/)** - Laksanakan strategi pengoptimuman
4. **[Sumber Pembangun](/ms/developers/)** - Pilihan penyesuaian lanjutan

{{< callout type="success" >}}
**Kecemerlangan Pentadbiran**: Pentadbir yang berjaya mengekalkan keseimbangan antara keselamatan, kebolehgunaan, dan keperluan perniagaan sambil memastikan kebolehpercayaan sistem dan pematuhan.
{{< /callout >}}

## Mendapatkan Bantuan Pentadbiran

- **📧 Sokongan Teknikal**: vincent@bigledger.com untuk isu pentadbiran sistem
- **📚 Dokumentasi Pentadbir**: Prosedur dan panduan pentadbiran terperinci  
- **👥 Komuniti Pentadbir**: Berhubung dengan pentadbir BigLedger yang lain
- **🎓 Latihan Pentadbir**: Latihan khusus untuk pentadbir sistem
