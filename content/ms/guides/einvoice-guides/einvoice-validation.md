---
description: Peraturan pengesahan komprehensif untuk pematuhan MyInvois.
tags:
- user-guide
title: Peraturan Pengesahan E-Invois
weight: 30
---

Peraturan pengesahan komprehensif untuk pematuhan MyInvois.

## Medan Wajib

### Pengepala Invois
- Nombor invois (unik)
- Tarikh invois
- Butiran pembekal
- Butiran pembeli
- Kod mata wang

### Item Baris
- Penerangan
- Kuantiti
- Harga seunit
- Kod cukai
- Jumlah baris

### Maklumat Cukai
- Jenis cukai (SST/GST)
- Kadar cukai
- Amaun cukai
- Termasuk/tidak termasuk cukai

## Semakan Pengesahan

### Pengesahan Format
- Format tarikh: YYYY-MM-DD
- Format amaun: 2 perpuluhan
- Format nombor cukai
- Format nombor telefon

### Peraturan Perniagaan
- Tarikh invois <= tarikh semasa
- Ketepatan pengiraan cukai
- Pengesahan jumlah amaun
- Kesahihan kod mata wang

### Khusus LHDN
- Pengesahan TIN
- Pendaftaran perniagaan
- Pendaftaran SST
- Kod industri

## Ralat Biasa

### Kod Ralat
- E001: Format tidak sah
- E002: Medan wajib tiada
- E003: Pengiraan cukai tidak sah
- E004: Invois pendua
- E005: Pembekal tidak sah

### Langkah Penyelesaian
1. Kenal pasti kod ralat
2. Semak pemetaan medan
3. Sahkan sumber data
4. Betulkan dan hantar semula
5. Pantau status

---

*Sokongan pengesahan: einvoice@bigledger.com*
