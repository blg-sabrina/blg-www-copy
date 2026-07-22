---
title: "Konfigurasi Mata Wang Mata Keahlian"
description: "Sediakan dan urus mata wang mata kesetiaan untuk program keahlian"
weight: 160
---

# Panduan Konfigurasi Mata Wang Mata

Modul PTS CCY (Mata Wang Mata) membolehkan anda mencipta dan mengurus mata wang mata tersuai untuk program keahlian dan kesetiaan anda.

## Gambaran Keseluruhan

Mata wang mata membolehkan program kesetiaan yang fleksibel di mana pelanggan memperoleh dan menebus mata berdasarkan pelbagai peraturan perniagaan. Anda boleh mencipta pelbagai mata wang mata untuk program atau peringkat yang berbeza.

## Mencipta Mata Wang Mata

### Langkah 1: Akses Modul

1. Navigasi ke **Applets** > **Modul PTS CCY**
2. Klik butang **"+"** untuk mencipta mata wang mata keahlian baharu

### Langkah 2: Isi Maklumat Diperlukan

Lengkapkan medan wajib berikut:

| Medan | Penerangan | Contoh |
|-------|-------------|---------|
| **Kod Mata Wang** | Pengecam unik untuk mata wang mata | `LOYPTS`, `GOLDPTS`, `VIPPTS` |
| **Nama Mata Wang** | Nama paparan untuk mata wang | `Loyalty Points`, `Gold Points` |

### Langkah 3: Cipta Mata Wang

Klik **"Create"** untuk menambah mata wang mata keahlian baharu ke sistem anda.

## Mengurus Mata Wang Mata

### Melihat Mata Wang

Selepas penciptaan, semua mata wang mata disenaraikan di halaman utama yang menunjukkan:
- Kod mata wang
- Nama mata wang
- Status (Aktif/Tidak Aktif)
- Tindakan (Edit/Padam)

### Menyunting Butiran Mata Wang

Untuk mengubah suai mata wang mata sedia ada:

1. Klik pada mata wang dalam senarai
2. Sunting medan yang tersedia:
   - **Nama Mata Wang** - Kemas kini nama paparan
   - **Status** - Aktifkan atau nyahaktifkan mata wang

3. Klik **"Save"** untuk menggunakan perubahan

### Memadam Mata Wang

Untuk mengalih keluar mata wang mata:
1. Klik pada mata wang dalam senarai
2. Klik butang **"Delete"**
3. Sahkan pemadaman

{{< callout type="warning" >}}
**Awas**: Memadam mata wang mata akan menjejaskan semua ahli dengan baki mata sedia ada. Pastikan semua mata dikosongkan atau dipindahkan sebelum pemadaman.
{{< /callout >}}

## Kes Penggunaan

### Program Kesetiaan Berbilang Peringkat

Cipta mata wang mata yang berbeza untuk pelbagai peringkat keahlian:
- **Mata Asas** - Kadar perolehan standard
- **Mata Perak** - Kadar perolehan 1.5x
- **Mata Emas** - Kadar perolehan 2x
- **Mata Platinum** - Kadar perolehan 3x

### Mata Khusus Kempen

Sediakan mata wang mata sementara untuk promosi:
- **Mata Cuti** - Mata berganda semasa musim perayaan
- **Mata Hari Jadi** - Ganjaran istimewa bulan hari jadi
- **Mata Rujukan** - Mata yang diperoleh daripada rujukan

### Program Rakan Kongsi

Urus mata daripada kerjasama rakan kongsi:
- **Batu Penerbangan** - Tukar kepada ganjaran penerbangan
- **Mata Hotel** - Tebus untuk penginapan
- **Mata Makan** - Perkongsian restoran

## Amalan Terbaik Konfigurasi

### Konvensyen Penamaan

- Gunakan nama yang jelas dan deskriptif
- Sertakan pengecam peringkat atau program
- Elakkan aksara khas dalam kod

### Nilai Mata

Pertimbangkan faktor-faktor ini semasa menetapkan nilai mata:
- Kekerapan pembelian
- Nilai transaksi purata
- Ambang penebusan
- Program pesaing

### Dasar Tamat Tempoh

Laksanakan peraturan tamat tempoh mata:
- Tamat tempoh tahunan
- Tamat tempoh bergolek
- Tiada tamat tempoh untuk peringkat premium

## Integrasi dengan Modul Lain

### Modul Jualan
- Perolehan mata automatik semasa pembelian
- Penebusan mata semasa pembayaran
- Paparan baki mata

### Pengurusan Ahli
- Jejaki baki mata individu
- Sejarah transaksi mata
- Penjejakan perkembangan peringkat

### Pelaporan
- Laporan liabiliti mata
- Analitik penebusan
- Metrik prestasi program

## Konfigurasi Biasa

### Program Kesetiaan Standard

```
Currency Code: LOYPTS
Currency Name: Loyalty Points
Earning Rate: $1 = 1 point
Redemption Rate: 100 points = $1
```

### Program Ahli Premium

```
Currency Code: PREMPTS
Currency Name: Premium Points
Earning Rate: $1 = 2 points
Redemption Rate: 50 points = $1
```

### Ganjaran Rujukan

```
Currency Code: REFPTS
Currency Name: Referral Points
Earning: 500 points per referral
Redemption: Special rewards catalog
```

## Penyelesaian Masalah

### Mata Tidak Terkumpul
- Sahkan status mata wang adalah Aktif
- Semak status pendaftaran ahli
- Semak semula konfigurasi peraturan perolehan

### Tidak Boleh Memadam Mata Wang
- Pastikan tiada baki mata aktif
- Semak transaksi yang belum selesai
- Alih keluar daripada promosi aktif

### Mata Wang Tidak Muncul
- Sahkan penciptaan berjaya
- Semak kebenaran pengguna
- Muat semula halaman modul

## Dokumentasi Berkaitan

- [Konsol Pentadbir Keahlian](/ms/applets/membership-admin-console-applet/)
- [Persediaan Program Keahlian](/ms/applets/membership-program/)
- [Konfigurasi Kelas Ahli](/ms/user-guide/member-class/)
- [Peraturan Penebusan Mata](/ms/guides/)
