---
description: Konfigurasikan PEPPOL untuk e-penginvoisan antarabangsa.
tags:
- user-guide
title: Panduan Konfigurasi PEPPOL
weight: 20
---

Konfigurasikan PEPPOL untuk e-penginvoisan antarabangsa.

## Apakah PEPPOL?

Pan-European Public Procurement On-Line (PEPPOL) membolehkan pertukaran dokumen elektronik merentas sempadan.

## Persediaan ID PEPPOL

### Langkah 1: Peroleh ID PEPPOL

Format ID PEPPOL anda:
```
0195:MYREGISTRATIONNUMBER
```
- 0195 = kod negara Malaysia
- Diikuti dengan pendaftaran perniagaan anda

### Langkah 2: Konfigurasi dalam BigLedger

1. Pergi ke **E-Invoice** → **PEPPOL Settings**
2. Masukkan ID PEPPOL
3. Pilih jenis dokumen:
   - Invois
   - Nota Kredit
   - Pesanan
   - Respons Pesanan
4. Konfigurasikan titik akhir

### Langkah 3: Persediaan Rakan Dagang

Tambah rakan dagang:
- ID PEPPOL rakan
- Jenis dokumen
- Peraturan pengesahan
- Keutamaan penghalaan

## Piawaian Dokumen

### Format UBL 2.1
- Piawaian berasaskan XML
- Data berstruktur
- Boleh dibaca mesin
- Format disahkan

### Keperluan Pematuhan
- Tandatangan digital
- Cap masa
- Jejak audit
- Pengarkiban (7 tahun)

## Proses Pengujian

1. Sambung ke rangkaian ujian PEPPOL
2. Tukar dokumen ujian
3. Sahkan resit
4. Sahkan penghantaran
5. Semak pematuhan

---

*Sokongan PEPPOL: peppol@bigledger.com*
