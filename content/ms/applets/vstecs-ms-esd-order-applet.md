---
title: "Aplet Pesanan VSTECS MS ESD"
description: "Pengurusan pesanan Microsoft ESD dengan integrasi API untuk semakan harga dan pemprosesan pesanan"
weight: 180
tags:
- applets
- microsoft
- esd-orders
- api-integration
---

## Gambaran Keseluruhan

Aplet Pesanan VSTECS MS ESD menyambungkan BigLedger kepada VSTECS untuk pesanan Microsoft Electronic Software Delivery (ESD). Ia membolehkan pasukan anda menyemak harga produk Microsoft yang terkini dan membuat pesanan ESD dengan pengedar terus daripada BigLedger, tanpa perlu memasukkan semula butiran pesanan ke dalam portal berasingan.

{{< callout type="info" >}}
**Integrasi diperlukan**: Aplet ini memerlukan integrasi aktif daripada BigLedger ke EMP, dan daripada BigLedger ke sistem pengedar, sebelum ia boleh berfungsi.
{{< /callout >}}

## Keupayaan API

Aplet ini menggunakan dua API pengedar:

- **Semakan harga** - Mendapatkan harga terkini untuk mana-mana SKU produk Microsoft ESD, supaya sebut harga dan pesanan sentiasa menggunakan harga pengedar semasa
- **Penciptaan pesanan** - Mencipta pesanan dengan pengedar untuk mendapatkan produk Microsoft ESD, mengembalikan butiran pemenuhan kepada BigLedger

## Aliran Kerja Integrasi

Pada masa ini terdapat dua cara untuk menyediakan integrasi ini. Pilih yang sepadan dengan penggunaan anda.

### Kaedah Pintasan

Integrasi EMP terus ke BigLedger, tanpa Aplet T2T Admin.

- Cara terpantas untuk disambungkan
- Sesuai apabila ketersambungan penyewa-ke-penyewa tidak diperlukan

### Kaedah Standard

Persediaan penyewa-ke-penyewa penuh menggunakan aplet sokongan:

1. **[Aplet T2T Admin](/ms/applets/t2t-admin-applet/)** - Membolehkan ketersambungan penyewa tetamu dan hos
2. **[Aplet Penyelenggaraan Item Dok](/ms/applets/doc-item-maintenance-applet/)** - Memetakan kod item antara sistem yang disambungkan

Gunakan kaedah ini apabila penggunaan anda mengikut model integrasi penyewa-ke-penyewa standard BigLedger.

## Nota Pelaksanaan

- Panduan pengguna untuk pesanan MS ESD dan pecahan kerja untuk pelaksanaan tersedia daripada pasukan BigLedger - hubungi [support@bigledger.com](mailto:support@bigledger.com) untuk memohonnya
- Sahkan dengan pengurus akaun pengedar anda bahawa akses API telah didayakan sebelum memulakan persediaan

## Aplet Berkaitan

{{< cards >}}
  {{< card link="/ms/applets/ingram-micro-ms-esd-applet/" title="Aplet Ingram Micro MS ESD" subtitle="Integrasi Microsoft ESD yang setara untuk Ingram Micro" >}}
  {{< card link="/ms/applets/t2t-admin-applet/" title="Aplet T2T Admin" subtitle="Ketersambungan penyewa-ke-penyewa yang digunakan oleh kaedah standard" >}}
  {{< card link="/ms/applets/doc-item-maintenance-applet/" title="Aplet Penyelenggaraan Item Dok" subtitle="Pemetaan kod item antara sistem yang disambungkan" >}}
{{< /cards >}}
