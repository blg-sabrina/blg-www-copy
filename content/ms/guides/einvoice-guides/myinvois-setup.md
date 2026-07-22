---
description: Panduan lengkap untuk pelaksanaan MyInvois dengan BigLedger.
tags:
- user-guide
title: Panduan Persediaan MyInvois
weight: 10
---

Panduan lengkap untuk pelaksanaan MyInvois dengan BigLedger.

## Gambaran Keseluruhan

MyInvois ialah inisiatif e-penginvoisan kebangsaan Malaysia oleh LHDN. BigLedger menyediakan integrasi yang lancar sebagai penyedia perkhidmatan PEPPOL yang diakreditasi MDEC.

## Garis Masa Pelaksanaan

- **Fasa 1** (Ogos 2024): Perolehan > RM 100 juta
- **Fasa 2** (Jan 2025): Perolehan > RM 25 juta  
- **Fasa 3** (Jul 2025): Semua perniagaan

## Proses Persediaan

### Langkah 1: Pendaftaran LHDN

1. Akses Portal MyInvois
2. Daftar dengan LHDN
3. Peroleh kelayakan:
   - Client ID
   - Client Secret
   - Nombor TIN
4. Jana sijil

### Langkah 2: Konfigurasi BigLedger

1. Navigasi ke **E-Invoice** → **My E-Invoice Admin**
2. Masukkan kelayakan LHDN
3. Konfigurasikan butiran syarikat:
   - Nama sah di sisi undang-undang
   - Nombor pendaftaran
   - Pengenalan cukai
   - Butiran alamat
4. Uji sambungan

### Langkah 3: Persediaan Dokumen

Konfigurasikan format invois:
- Invois Standard
- Nota Kredit
- Nota Debit
- Nota Bayaran Balik
- Invois Bil Sendiri

### Langkah 4: Peraturan Pengesahan

Sediakan pengesahan:
- Medan wajib
- Pengiraan cukai
- Keperluan format
- Peraturan perniagaan

### Langkah 5: Pengujian

1. Cipta invois ujian
2. Sahkan format
3. Hantar ke sandbox
4. Sahkan penerimaan
5. Semak kemas kini status

## Titik Integrasi

### Dengan Modul Jualan
- Auto-jana e-invois
- Penyerahan masa nyata
- Penjejakan status

### Dengan Perakaunan
- Pengeposan GL
- Pelaporan cukai
- Penyesuaian

## Senarai Semak Go-Live

- [ ] Pendaftaran LHDN lengkap
- [ ] Kelayakan dikonfigurasikan
- [ ] Penyerahan ujian berjaya
- [ ] Latihan kakitangan selesai
- [ ] Proses sandaran sedia

---

*Untuk sokongan MyInvois, hubungi einvoice@bigledger.com*
