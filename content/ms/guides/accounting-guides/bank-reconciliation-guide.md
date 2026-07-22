---
description: Kuasai proses penyesuaian bank dengan pemadanan berkuasa AI BigLedger.
tags:
- user-guide
title: Penyesuaian Bank Langkah demi Langkah
weight: 40
---

Kuasai proses penyesuaian bank dengan pemadanan berkuasa AI BigLedger.

## Gambaran Keseluruhan

Penyesuaian bank memastikan baki buku anda sepadan dengan penyata bank, mengenal pasti percanggahan dan mengekalkan rekod tunai yang tepat.

## Prasyarat

- Persediaan akaun bank dalam COA
- Penyata bank (PDF/CSV/Suapan langsung)
- Transaksi yang telah diposkan dalam sistem
- Kebenaran penyesuaian

## Proses Langkah demi Langkah

### Langkah 1: Import Penyata Bank

#### Kaedah 1: Suapan Bank Langsung
1. Pergi ke **Finance** → **Bank Reconciliation**
2. Pilih akaun bank
3. Klik **Sync Bank Feed**
4. Sahkan dengan bank
5. Pilih julat tarikh
6. Import transaksi

#### Kaedah 2: Import Fail
1. Muat turun penyata bank
2. Klik **Import Statement**
3. Pilih format fail:
   - CSV
   - Excel
   - PDF (dengan OCR)
   - MT940
4. Petakan lajur jika perlu
5. Import transaksi

### Langkah 2: Pemadanan Automatik

AI BigLedger memadankan transaksi:

**Kriteria Pemadanan**
- Amaun (tepat atau dalam toleransi)
- Tarikh (tepat atau dalam julat)
- Nombor rujukan
- Kata kunci penerangan
- Nombor cek

**Tahap Keyakinan Padanan**
- 🟢 **Tinggi (95-100%)**: Dipadankan secara automatik
- 🟡 **Sederhana (70-94%)**: Cadangan padanan
- 🔴 **Rendah (<70%)**: Semakan manual diperlukan

### Langkah 3: Semak Padanan

#### Padanan Yang Disahkan
- Sistem menunjukkan tanda semak hijau
- Tiada tindakan diperlukan
- Sudah disesuaikan

#### Cadangan Padanan
1. Semak setiap cadangan
2. Sahkan butiran sepadan
3. Klik **Confirm Match**
4. Atau pilih transaksi berlainan

#### Item Tidak Berpadanan
**Transaksi bank tanpa catatan buku:**
- Caj bank
- Faedah diperoleh
- Deposit langsung
- Bayaran automatik

**Catatan buku tanpa transaksi bank:**
- Cek belum dijelaskan
- Deposit dalam transit
- Kesilapan bank
- Perbezaan masa

### Langkah 4: Cipta Catatan Yang Hilang

Untuk transaksi bank yang belum direkodkan:

1. Klik **Create Entry** pada item tidak berpadanan
2. Pilih jenis transaksi:
   - Caj bank
   - Pendapatan faedah
   - Pemindahan
   - Lain-lain
3. Masukkan butiran:
   - Akaun untuk dipos
   - Penerangan
   - Kod cukai jika berkenaan
4. Simpan dan padankan

### Langkah 5: Tangani Pengecualian

#### Cek Belum Dijelaskan
- Senaraikan cek yang belum dijelaskan
- Pantau penuaan
- Susuli jika bertarikh lama
- Pertimbangkan henti bayaran

#### Deposit Dalam Transit
- Kenal pasti deposit belum dijelaskan
- Sahkan dengan bank
- Semak untuk kelewatan
- Siasat jika luar biasa

#### Kesilapan Bank
1. Dokumenkan kesilapan
2. Hubungi bank
3. Cipta catatan pelarasan
4. Jejak penyelesaian

### Langkah 6: Lengkapkan Penyesuaian

1. Sahkan ringkasan penyesuaian:
   ```
   Book Balance:         10,000.00
   + Deposits in Transit: 2,000.00
   - Outstanding Checks:  (1,500.00)
   + Bank Adjustments:       50.00
   = Bank Balance:       10,550.00
   ```

2. Sahkan baki penyata bank sepadan
3. Semak laporan penyesuaian
4. Luluskan penyesuaian
5. Kunci tempoh jika akhir bulan

## Ciri Lanjutan

### Penyesuaian Berbilang Mata Wang
- Tangani akaun mata wang asing
- Kemas kini kadar pertukaran automatik
- Pengiraan untung/rugi terealisasi
- Catatan penilaian semula

### Operasi Pukal
- Padankan berbilang transaksi
- Cipta catatan secara pukal
- Nyahpadan secara pukal
- Kelulusan berkelompok

### Enjin Peraturan
Cipta peraturan pemadanan:
- Transaksi berulang
- Bayaran vendor
- Resit pelanggan
- Amaun piawai

## Laporan

### Laporan Penyesuaian
- Ringkasan Penyesuaian
- Senarai Item Belum Dijelaskan
- Sejarah Penyesuaian
- Laporan Jejak Audit

### Laporan Analisis
- Dijelaskan lawan Belum Dijelaskan
- Analisis Penuaan
- Garis Masa Penyesuaian
- Laporan Pengecualian

## Amalan Terbaik

### Penyesuaian Harian
- Import transaksi setiap hari
- Semak dan padankan dengan segera
- Siasat percanggahan dengan pantas
- Kekalkan rekod yang bersih

### Prosedur Akhir Bulan
1. Lengkapkan semua catatan
2. Import penyata akhir
3. Jelaskan semua padanan
4. Dokumenkan pengecualian
5. Jana laporan
6. Dapatkan kelulusan
7. Kunci tempoh

### Kawalan
- Asingkan tugas
- Semakan bebas
- Penyelesaian tepat pada masanya
- Dokumenkan pengecualian
- Kekalkan sokongan

## Penyelesaian Masalah

### Tidak Dapat Memadankan Transaksi
- Semak julat tarikh
- Sahkan amaun
- Semak rujukan
- Semak untuk pendua

### Tidak Seimbang
- Sahkan baki pembukaan
- Semak catatan yang belum diposkan
- Semak pelarasan
- Sahkan kadar pertukaran

### Transaksi Hilang
- Segar semula suapan bank
- Semak pemetaan import
- Sahkan julat tarikh
- Semak penapis

## Petua untuk Kadar Padanan Automatik 95%

1. **Rujukan Konsisten**: Gunakan nombor invois dalam rujukan bayaran
2. **Rakaman Tepat Masa**: Masukkan transaksi dengan segera
3. **Data Bersih**: Kekalkan nama vendor/pelanggan yang tepat
4. **Persediaan Peraturan**: Konfigurasikan peraturan transaksi berulang
5. **Penyesuaian Berkala**: Jangan biarkan transaksi terkumpul

---

*Perlukan bantuan? Pasukan sokongan kami boleh membantu mencapai automasi 95%. Hubungi support@bigledger.com*