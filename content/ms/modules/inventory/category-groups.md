---
title: "Pengurusan Kumpulan Kategori"
description: "Susun dan urus kategori produk dengan sistem kumpulan kategori BigLedger"
weight: 30
---

Kumpulan Kategori menyediakan struktur berhierarki untuk menyusun kategori inventori anda dalam BigLedger. Sistem ini membantu mengekalkan konsistensi merentasi katalog produk anda dan memudahkan pengurusan inventori.

## Gambaran Keseluruhan

Di bawah kumpulan kategori, pengguna boleh mencipta dan menyunting kategori serta menentukan hubungan antara kumpulan kategori dan kategori individu. Apabila mencipta item dalam menu Item, anda menentukan penetapan kategorinya.

{{< callout type="info" >}}
**Nota**: Kumpulan kategori dan kategori item boleh diurus daripada kedua-dua applet Document Item Maintenance dan Inventory Item Maintenance. Setiap kategori dipautkan ke Kumpulan Kategori untuk penyusunan yang lebih baik.
{{< /callout >}}

## Mencipta Kumpulan Kategori

### Langkah 1: Akses Kumpulan Kategori

1. Navigasi ke **Inventori** > **Kumpulan Kategori**
2. Klik butang **"+"** untuk mencipta kumpulan kategori baharu
3. Bekas ketiga akan terbuka untuk penciptaan kumpulan kategori

### Langkah 2: Isikan Butiran Kumpulan Kategori

Lengkapkan medan yang diperlukan ini dalam tab utama:

| Medan | Penerangan | Contoh |
|-------|-------------|---------|
| **Kod Kumpulan Kategori** | Pengecam unik untuk kumpulan | `ELEC`, `FURN`, `FOOD` |
| **Nama Kumpulan Kategori** | Nama deskriptif untuk kumpulan | `Electronics`, `Furniture`, `Food & Beverage` |
| **Jenis** | Jenis klasifikasi | `Product`, `Service`, `Raw Material` |
| **Kod Param** | Kod parameter untuk integrasi sistem | Pilihan |
| **Nama Param** | Penerangan parameter | Pilihan |
| **Status** | Status Aktif/Tidak Aktif | `Active` |

### Langkah 3: Simpan Kumpulan Kategori

Klik **Simpan** untuk mencipta kumpulan kategori. Sistem akan mengesahkan kod berganda dan medan yang diperlukan.

## Menyunting Kumpulan Kategori

### Mengakses Mod Sunting

1. Klik pada mana-mana kumpulan kategori dalam senarai
2. Bekas kedua terbuka dengan butiran kumpulan kategori
3. Dua tab tersedia untuk penyuntingan

### Tab Utama

Tab Utama memaparkan semua maklumat yang dimasukkan semasa penciptaan kategori:

- Sunting sifat kumpulan kategori
- Kemas kini status (Aktif/Tidak Aktif)
- Padam kumpulan kategori (jika tiada kategori dipautkan)

{{< callout type="warning" >}}
**Awas**: Memadam kumpulan kategori akan menjejaskan semua kategori yang dipautkan. Pastikan tiada item aktif menggunakan kategori ini sebelum pemadaman.
{{< /callout >}}

### Tab Kategori

Tab Kategori menunjukkan semua kategori yang dipautkan dalam kumpulan:

- Lihat semua kategori dalam kumpulan
- Tambah kategori baharu
- Sunting kategori sedia ada
- Buang kaitan kategori

## Mengurus Kategori

### Mencipta Kategori

Untuk menambah kategori ke kumpulan:

1. Buka kumpulan kategori
2. Navigasi ke tab **Kategori**
3. Klik butang **"+"**
4. Isikan butiran kategori:
   - Kod Kategori
   - Nama Kategori
   - Penerangan
   - Susunan Isih
   - Status

### Menyunting/Memadam Kategori

Akses butiran kategori dengan mengklik mana-mana kategori dalam senarai:

1. **Tab Utama**: Sunting sifat kategori
   - Kemas kini maklumat kategori
   - Tukar status
   - Padam kategori

2. **Tab Urus Imej**: Uruskan imej kategori
   - Muat naik imej kategori
   - Gantikan imej sedia ada
   - Sokongan untuk pelbagai format imej (JPG, PNG, GIF)
   - Saiz imej disyorkan: 500x500 piksel

## Amalan Terbaik

### Konvensyen Penamaan

- Gunakan corak pengekodan yang konsisten (cth., `ELEC-001`, `ELEC-002`)
- Pastikan nama deskriptif tetapi ringkas
- Elakkan aksara khas dalam kod

### Hierarki Kategori

Contoh struktur:
```
Electronics (ELEC)
├── Computers (ELEC-COMP)
│   ├── Laptops (ELEC-COMP-LAP)
│   ├── Desktops (ELEC-COMP-DSK)
│   └── Tablets (ELEC-COMP-TAB)
├── Mobile Devices (ELEC-MOB)
│   ├── Smartphones (ELEC-MOB-PHN)
│   └── Accessories (ELEC-MOB-ACC)
└── Audio/Video (ELEC-AV)
    ├── Televisions (ELEC-AV-TV)
    └── Sound Systems (ELEC-AV-SND)
```

### Petua Penyelenggaraan

1. **Semakan Berkala**: Semak struktur kategori secara berkala
2. **Penyatuan**: Cantumkan kategori serupa untuk mengelakkan pertindihan
3. **Dokumentasi**: Kekalkan panduan kategori untuk rujukan kakitangan
4. **Latihan**: Pastikan kakitangan memahami peraturan penetapan kategori

## Integrasi dengan Modul Lain

Kumpulan Kategori berintegrasi dengan:

- **Pengurusan Inventori**: Klasifikasi produk
- **Pembelian**: Keutamaan kategori pembekal
- **Jualan**: Promosi berasaskan kategori
- **Pelaporan**: Analisis prestasi kategori
- **E-Dagang**: Navigasi kedai dalam talian

## Kes Penggunaan Lazim

### Operasi Runcit
- Pengkategorian berasaskan jabatan
- Pengumpulan produk bermusim
- Penyusunan berasaskan jenama

### Pembuatan
- Klasifikasi bahan mentah
- Pengkategorian barangan siap
- Pengumpulan komponen

### Perkhidmatan
- Pengkategorian jenis perkhidmatan
- Pengumpulan berasaskan kemahiran
- Klasifikasi perkhidmatan berasaskan masa

## Penyelesaian Masalah

### Tidak Dapat Memadam Kumpulan Kategori
- Semak kategori yang dipautkan
- Sahkan tiada item aktif menggunakan kategori tersebut
- Semak sebarang transaksi yang belum selesai

### Kategori Tidak Muncul dalam Penciptaan Item
- Sahkan status kategori adalah Aktif
- Semak status kumpulan kategori
- Sahkan kebenaran pengguna

### Isu Muat Naik Imej
- Semak format fail (JPG, PNG, GIF)
- Sahkan saiz fail (< 5MB disyorkan)
- Kosongkan cache pelayar

## Dokumentasi Berkaitan

- [Penyelenggaraan Item](/ms/user-guide/item-maintenance/)
- [Jenis Item Dokumen](/ms/user-guide/document-item-types/)
- [Pengurusan Inventori](/ms/modules/inventory/)
- [Konfigurasi Buku Harga](/ms/user-guide/price-book/)
