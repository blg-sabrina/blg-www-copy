---
description: Kuasai catatan jurnal manual dan automatik dalam BigLedger.
tags:
- user-guide
title: Panduan Catatan Jurnal
weight: 20
---

Kuasai catatan jurnal manual dan automatik dalam BigLedger.

## Gambaran Keseluruhan

Catatan jurnal ialah asas perakaunan dalam BigLedger, merekodkan semua transaksi kewangan dalam lejar am.

## Jenis Catatan Jurnal

### Jurnal Manual
- Catatan pelarasan
- Akruan dan tangguhan
- Pembetulan
- Baki pembukaan

### Jurnal Automatik
- Invois jualan
- Bil belian
- Pemposan gaji
- Susut nilai

### Jurnal Berulang
- Akruan bulanan
- Perbelanjaan sewa
- Insurans
- Langganan

## Mencipta Catatan Jurnal

### Langkah 1: Akses Modul Jurnal

Navigasi ke **Finance** → **Ledger and Journal**

### Langkah 2: Cipta Jurnal Baharu

1. Klik **New Journal Entry**
2. Pilih Jenis Jurnal:
   - Jurnal Am
   - Jurnal Bayaran
   - Jurnal Resit
   - Jurnal Belian
   - Jurnal Jualan

### Langkah 3: Masukkan Maklumat Pengepala

- **Nombor Jurnal**: Dijana automatik atau manual
- **Tarikh**: Tarikh transaksi
- **Rujukan**: Rujukan dokumen luaran
- **Penerangan**: Penerangan jurnal
- **Mata Wang**: Mata wang transaksi

### Langkah 4: Tambah Baris Jurnal

Untuk setiap baris:
```
Account | Description | Debit | Credit | Tax | Project
--------|-------------|-------|--------|-----|--------
1111    | Cash receipt| 1000  |        |     | 
4000    | Sales revenue|      | 1000   | SST | Project A
```

### Langkah 5: Sahkan dan Poskan

1. Sahkan debit = kredit
2. Semak pengiraan cukai
3. Semak kod akaun
4. Poskan catatan jurnal

## Catatan Jurnal Biasa

### Transaksi Jualan
```
Dr. Accounts Receivable  1,060
  Cr. Sales Revenue         1,000
  Cr. SST Payable             60
```

### Transaksi Belian
```
Dr. Expense Account       500
Dr. Input Tax              30
  Cr. Accounts Payable      530
```

### Resit Bank
```
Dr. Bank Account        1,000
  Cr. Accounts Receivable  1,000
```

### Susut Nilai
```
Dr. Depreciation Expense  100
  Cr. Accumulated Depreciation 100
```

## Jurnal Berulang

### Persediaan
1. Cipta jurnal templat
2. Tetapkan corak berulang
3. Tentukan tarikh mula/tamat
4. Dayakan pemposan automatik

### Pengurusan
- Semak jurnal tertunggak
- Luluskan sebelum pemposan
- Ubah suai templat
- Jejak sejarah

## Templat Jurnal

Cipta templat untuk:
- Akruan bulanan
- Pemposan gaji
- Susut nilai
- Pemindahan antara syarikat

## Peraturan Pengesahan

BigLedger mengesahkan:
- Catatan seimbang
- Kod akaun yang sah
- Tempoh perakaunan terbuka
- Kebenaran pengguna
- Pengiraan cukai

## Amalan Terbaik

### Dokumentasi
- Gunakan penerangan yang jelas
- Lampirkan dokumen sokongan
- Sertakan nota kelulusan
- Kekalkan jejak audit

### Kawalan
- Pengasingan tugas
- Aliran kerja kelulusan
- Prosedur penutupan tempoh
- Penyesuaian berkala

### Proses Semakan
1. Semakan jurnal harian
2. Pengesahan pemposan mingguan
3. Penyesuaian bulanan
4. Prosedur akhir tempoh

## Integrasi dengan Modul

### Modul Jualan
- Mencipta invois pelanggan secara automatik
- Memposkan pengiktirafan hasil
- Mengemas kini baki AR

### Modul Belian
- Merekodkan bil vendor
- Menguruskan peruntukan perbelanjaan
- Mengemas kini baki AP

### Inventori
- Memposkan catatan COGS
- Merekodkan pelarasan stok
- Mengemas kini nilai inventori

## Laporan

### Laporan Jurnal
- Penyenaraian Catatan Jurnal
- Jurnal Mengikut Akaun
- Jejak Audit Jurnal
- Diposkan lawan Belum Diposkan

### Laporan Analisis
- Aktiviti Akaun
- Butiran Transaksi
- Pergerakan GL
- Analisis Varians

## Penyelesaian Masalah

### Tidak Seimbang
- Semak perbezaan pembundaran
- Sahkan pengiraan cukai
- Semak penukaran mata wang

### Tidak Dapat Poskan
- Semak status tempoh
- Sahkan kebenaran
- Semak ralat pengesahan

### Catatan Hilang
- Semak tarikh pemposan
- Semak kriteria penapis
- Sahkan integrasi modul

---

*Perlukan bantuan? Lawati [Pusat Sokongan](/ms/user-guide/) kami atau hubungi support@bigledger.com*