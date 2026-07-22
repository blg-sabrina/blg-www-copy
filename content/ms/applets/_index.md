---
title: Aplet dan Aliran Kerja
description: Panduan menyeluruh tentang aplet BigLedger dan automasi aliran kerja
weight: 1
bookCollapseSection: false
cascade:
  applet_tabs: true
tags:
- applets
- workflows
- automation
---


Seni bina modular BigLedger dibina di atas aplet - komponen boleh guna semula yang menyediakan fungsi perniagaan tertentu. Setiap aplet boleh digunakan oleh berbilang modul, memastikan ketekalan merentas keseluruhan sistem anda.

## Memahami Aplet

{{< callout type="info" >}}
**Penting**: Aplet mempunyai hubungan banyak-ke-banyak dengan modul. Sebagai contoh, Aplet Konfigurasi Cukai digunakan oleh modul Perakaunan Kewangan, Jualan, Pembelian, dan E-Dagang. Reka bentuk ini menghapuskan pertindihan dan memastikan gelagat yang konsisten merentas sistem.
{{< /callout >}}

### Ciri Utama
- **Boleh Guna Semula** - Satu aplet menyokong berbilang modul
- **Boleh Dikonfigurasi** - Sesuaikan mengikut keperluan perniagaan anda
- **Bersepadu** - Berfungsi bersama dengan lancar
- **Bebas** - Boleh dikemas kini tanpa menjejaskan yang lain

## Sumber Aplet

### Rujukan Aplet Lengkap
- **[Katalog Aplet Lengkap](/ms/applets/applet-catalog/)** - Direktori menyeluruh semua aplet BigLedger yang disusun mengikut modul
- **[Direktori Aplet](/ms/applets/applet-directory/)** - Marketplace aplet yang boleh dicari dan panduan pemasangan
- **[Applet Store](/ms/applets/applet-store/)** - Marketplace untuk aplet dan sambungan tambahan

### Kategori Aplet Pilihan

#### Modul Teras (13 Aplet Penting)
Aplet asas yang diperlukan oleh semua modul lain:
- **[Aplet Tenant Admin](/ms/applets/tenant-admin-applet/)** - Pentadbiran dan konfigurasi sistem
- **[Aplet Carta Akaun](/ms/applets/chart-of-account-applet/)** - Struktur akaun kewangan
- **[Aplet Organisasi](/ms/applets/organization-applet/)** - Struktur syarikat dan organisasi
- **[Aplet Penyelenggaraan Pelanggan](/ms/applets/customer-maintenance-applet/)** - Data induk pelanggan
- **[Aplet Penyelenggaraan Pembekal](/ms/applets/supplier-maintenance-applet/)** - Data induk vendor
- **[Aplet Penyelenggaraan Pekerja](/ms/applets/employee-maintenance-applet/)** - Rekod pekerja
- **[Aplet Konfigurasi Cukai](/ms/applets/tax-configuration-applet/)** - Persediaan dan pematuhan cukai
- **[Lihat Semua Aplet Teras →](/ms/applets/applet-catalog/#core-module-applets-13-applets)**

#### Inventori & Operasi
- **[Aplet Pengiraan Stok](/ms/applets/stock-take-applet/)** - Pengiraan dan pengurusan inventori digital
- **[Aplet Baki Stok](/ms/applets/stock-balance-applet/)** - Penjejakan inventori masa nyata
- **[Aplet Pelarasan Stok Dalaman](/ms/applets/internal-stock-adjustment-applet/)** - Pembetulan inventori
- **[Aplet Pemantauan Proses](/ms/applets/process-monitoring-applet/)** - Penjejakan proses perniagaan

#### Penglibatan Pelanggan
- **[Aplet Penyelenggaraan Pasukan](/ms/applets/team-maintenance-applet/)** - Struktur dan pengurusan pasukan
- **[Aplet Membership Admin Console](/ms/applets/membership-admin-console-applet/)** - Program kesetiaan pelanggan
- **[Aplet Unified Contact Center](/ms/applets/unified-contact-center-ucc-applet/)** - Platform khidmat pelanggan

#### Penetapan Harga & Perdagangan
- **[Aplet Pricebook](/ms/applets/pricebook-applet/)** - Pengurusan penetapan harga lanjutan
- **[Aplet Berkaitan EcomSync](/ms/applets/90-ecomsync-related-applets/)** - Penyegerakan e-dagang

## Integrasi Modul

Aplet direka dengan hubungan banyak-ke-banyak dengan modul:
