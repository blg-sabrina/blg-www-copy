---
title: "Konfigurasi Menu & Halaman CP-Commerce"
description: "Konfigurasikan menu laman web dan halaman statik dalam CP-Commerce untuk kedai e-dagang anda"
weight: 25
---

CP-Commerce menyediakan alat yang fleksibel untuk mengurus menu navigasi dan halaman kandungan statik laman web e-dagang anda. Panduan ini merangkumi konfigurasi Modul Menu dan Modul Halaman.

## Modul Menu

Modul Menu mengawal struktur navigasi laman web CP-Commerce anda, membolehkan anda mencipta menu berhierarki dengan pelbagai jenis pautan.

### Memahami Struktur Menu

Item menu dalam CP-Commerce menyokong:
- **Hierarki berbilang aras** - Cipta item menu induk dan anak
- **Pelbagai jenis pautan** - Pautkan ke halaman, produk, kategori, atau URL luaran
- **Kedudukan yang fleksibel** - Kawal susunan menu dan penyusunan bersarang
- **Paparan bersyarat** - Kawalan status Aktif/Tidak Aktif

### Paparan Senarai Menu

Senarai menu memaparkan:

| Lajur | Penerangan |
|--------|-------------|
| **Tajuk** | Nama item menu yang dipaparkan kepada pengguna |
| **Aras Menu** | Aras hierarki (1 = aras atas, 2 = sub-menu, dsb.) |
| **Dipaut** | Jenis pautan dan destinasi |
| **Status** | Aktif atau Tidak Aktif |
| **Tindakan** | Sunting, Padam, Susun Semula |

### Mencipta Item Menu

#### Langkah 1: Maklumat Asas

1. Navigasi ke **CP-Commerce** > **Modul Menu**
2. Klik **"Cipta Item Menu Baharu"**
3. Isikan medan yang diperlukan:

**Tajuk**: Nama paparan untuk item menu
- Pastikan ia ringkas dan deskriptif
- Gunakan perkataan tindakan untuk UX yang lebih baik (cth., "Beli Sekarang", "Lihat Kategori")

#### Langkah 2: Konfigurasikan Jenis Pautan

**Jenis Pautan** menentukan tingkah laku item menu:

| Jenis | Penerangan | Kes Penggunaan |
|------|-------------|----------|
| **Halaman** | Memaut ke halaman statik yang dicipta dalam Modul Halaman | Tentang Kami, Terma, Privasi |
| **Produk** | Pautan terus ke produk tertentu | Item pilihan, Terlaris |
| **Kategori Produk** | Memaut ke senarai kategori | Beli mengikut Jabatan |
| **Kategori Kandungan** | Memaut ke koleksi kandungan | Blog, Berita, Sumber |
| **Pautan Luaran** | Memaut ke URL luaran atau halaman tersuai | Media sosial, Laman rakan kongsi |

#### Langkah 3: Konfigurasi Pautan

Berdasarkan Jenis Pautan yang dipilih:

- **Untuk Halaman**: Pilih daripada senarai juntai bawah halaman yang dicipta
- **Untuk Produk**: Cari dan pilih produk tertentu
- **Untuk Kategori Produk**: Pilih daripada pepohon kategori
- **Untuk Kategori Kandungan**: Pilih kategori kandungan
- **Untuk Pautan Luaran**: Masukkan URL penuh (https://...)

#### Langkah 4: Tetapan Paparan

**Status**: 
- Aktif - Item menu kelihatan
- Tidak Aktif - Tersembunyi daripada laman web

**Jenis Ubah Hala**:
- Tetingkap Sama - Membuka dalam tab semasa (lalai)
- Tetingkap Baharu - Membuka dalam tab baharu (untuk pautan luaran)

#### Langkah 5: Hierarki Menu

**Sarangkan Item Menu**: Tandakan untuk menjadikan ini item sub-menu

Jika penyusunan bersarang didayakan:
- **Menu Induk**: Pilih item menu induk
- Item akan muncul sebagai juntai bawah di bawah induk

### Contoh Hierarki Menu

```
Home (Level 1)
Shop (Level 1)
├── Electronics (Level 2)
│   ├── Computers (Level 3)
│   ├── Mobile Phones (Level 3)
│   └── Accessories (Level 3)
├── Fashion (Level 2)
│   ├── Men's Clothing (Level 3)
│   └── Women's Clothing (Level 3)
└── Clearance (Level 2)
About Us (Level 1)
Contact (Level 1)
```

## Modul Halaman

Modul Halaman membolehkan penciptaan halaman kandungan statik untuk laman web CP-Commerce anda, sesuai untuk halaman maklumat, dasar, dan kandungan tersuai.

### Mencipta Halaman Statik

#### Langkah 1: Persediaan Halaman

1. Navigasi ke **CP-Commerce** > **Modul Halaman**
2. Klik **"Cipta Halaman Baharu"**

#### Langkah 2: Konfigurasi Halaman

**Tajuk**: Tajuk halaman
- Dipaparkan dalam tab pelayar
- Digunakan dalam pengepala halaman
- Penting untuk SEO

**Kunci URL**: Alamat web halaman
- Mesti unik
- Gunakan huruf kecil dan tanda sempang
- Contoh: `about-us`, `return-policy`, `shipping-info`

**Status**:
- Aktif - Halaman boleh diakses
- Tidak Aktif - Halaman tersembunyi (berguna untuk draf)

**Kategori Kandungan**: (Pilihan)
- Kumpulkan halaman berkaitan
- Membantu dalam penyusunan
- Boleh digunakan untuk menu automatik

#### Langkah 3: Kandungan Halaman

**Penyunting Kandungan**:
- Menyokong HTML dan teks biasa
- Pemformatan teks kaya tersedia
- Boleh merangkumi:
  - Teks dan tajuk
  - Imej dan media
  - Jadual dan senarai
  - HTML/CSS tersuai

### Halaman Statik Lazim

#### Halaman Penting

1. **Tentang Kami**
   - Sejarah syarikat
   - Misi dan nilai
   - Maklumat pasukan

2. **Terma & Syarat**
   - Terma perkhidmatan
   - Perjanjian pengguna
   - Penafian undang-undang

3. **Dasar Privasi**
   - Amalan pengumpulan data
   - Hak pengguna
   - Dasar kuki

4. **Maklumat Penghantaran**
   - Zon penghantaran
   - Kadar penghantaran
   - Anggaran masa

5. **Dasar Pemulangan**
   - Syarat pemulangan
   - Langkah proses
   - Garis masa bayaran balik

#### Halaman Pemasaran

1. **Halaman Pendaratan**
   - Kandungan khusus kempen
   - Pelancaran produk
   - Promosi bermusim

2. **Halaman Soalan Lazim**
   - Soalan lazim
   - Panduan produk
   - Maklumat sokongan

### Amalan Terbaik Kandungan

#### Pengoptimuman SEO

- Gunakan tajuk deskriptif dengan kata kunci
- Cipta kunci URL yang unik
- Sertakan penerangan meta
- Gunakan hierarki tajuk yang betul (H1, H2, H3)

#### Struktur Kandungan

```html
<h1>Page Title</h1>
<p>Introduction paragraph...</p>

<h2>Section Heading</h2>
<p>Section content...</p>

<h3>Subsection</h3>
<ul>
  <li>Point 1</li>
  <li>Point 2</li>
</ul>
```

#### Keresponsifan Mudah Alih

- Uji kandungan pada peranti mudah alih
- Gunakan imej responsif
- Elakkan jadual yang rumit
- Pastikan perenggan pendek

## Petua Integrasi

### Memautkan Menu ke Halaman

1. Cipta halaman terlebih dahulu dalam Modul Halaman
2. Tetapkan status halaman kepada Aktif
3. Cipta item menu dengan Jenis Pautan = Halaman
4. Pilih halaman yang dicipta daripada senarai juntai bawah

### Integrasi Kandungan Dinamik

Walaupun Modul Halaman mencipta kandungan statik, anda boleh mempertingkatkannya dengan:
- Widget produk
- Senarai kategori
- Borang pendaftaran surat berita
- Borang hubungan

### Sokongan Berbilang Bahasa

Untuk laman berbilang bahasa:
1. Cipta halaman berasingan untuk setiap bahasa
2. Gunakan kunci URL khusus bahasa
3. Susun dengan kategori kandungan mengikut bahasa

## Penyelesaian Masalah

### Menu Tidak Muncul

- Semak status menu adalah Aktif
- Sahkan menu induk (jika bersarang) adalah Aktif
- Kosongkan cache laman web
- Semak kebenaran pengguna

### Halaman Tidak Ditemui (404)

- Sahkan kunci URL adalah betul
- Pastikan status halaman adalah Aktif
- Semak kunci URL yang berganda
- Kosongkan cache pelayar

### Kandungan Tidak Dikemas Kini

- Kosongkan cache CP-Commerce
- Semak sama ada perubahan telah disimpan
- Sahkan anda menyunting halaman yang betul
- Cuba muat semula keras (Ctrl+F5)

## Dokumentasi Berkaitan

- [Gambaran Keseluruhan CP-Commerce](/ms/modules/ecommerce/cp-commerce/)
- [Konfigurasi Laman Web](/ms/modules/ecommerce/website-configuration/)
- [Integrasi E-Dagang](/ms/modules/ecommerce/)
- [Amalan Terbaik Pengurusan Kandungan](/ms/user-guide/)
