---
title: "Aplet Webhook"
description: "Pemberitahuan peristiwa masa nyata dan integrasi sistem luaran untuk BigLedger"
tags:
- core-module
- integration
- webhooks
- notifications
- api-integration
- real-time
weight: 11
---

## Tujuan dan Gambaran Keseluruhan

Aplet Webhook ialah komponen integrasi Modul Teras yang kritikal yang membolehkan pemberitahuan peristiwa masa nyata dan komunikasi lancar antara BigLedger dan sistem luaran. Aplet ini menyediakan pengurusan webhook yang komprehensif, pemberitahuan dipacu peristiwa, dan keupayaan integrasi API yang menyokong aliran kerja automatik dan penyegerakan sistem.

{{< callout type="info" >}}
**Aplet Modul Teras**: Ini ialah salah satu daripada 13 aplet Modul Teras yang penting, membolehkan integrasi dan komunikasi masa nyata dengan sistem dan perkhidmatan luaran.
{{< /callout >}}

### Fungsi Utama
- **Konfigurasi dan Pengurusan Webhook** - Sediakan dan urus titik akhir webhook
- **Pemberitahuan Peristiwa Masa Nyata** - Penyiaran peristiwa serta-merta kepada sistem luaran
- **Sokongan Integrasi API** - Memudahkan integrasi sistem pihak ketiga
- **Penapisan dan Penghalaan Peristiwa** - Penghantaran dan penghalaan peristiwa terpilih
- **Keselamatan dan Pengesahan** - Komunikasi webhook yang selamat

## Ciri Utama

### Pengurusan Titik Akhir Webhook
- Konfigurasi pelbagai titik akhir webhook
- Sokongan protokol HTTP/HTTPS
- Persediaan pengepala tersuai dan pengesahan
- Pengesahan sijil SSL
- Pemantauan kesihatan titik akhir dan penjejakan status
- Pengendalian cuba semula dan kegagalan automatik

### Sistem Penyiaran Peristiwa
- Tangkapan peristiwa masa nyata merentas semua modul
- Jenis peristiwa dan penapis boleh dikonfigurasi
- Penyesuaian dan pemformatan muatan JSON
- Penghantaran peristiwa berkelompok dan individu
- Pengantrian peristiwa dan penghantaran yang boleh dipercayai
- Pengelogan dan penjejakan peristiwa sejarah

### Keselamatan dan Pengesahan
- Pelbagai kaedah pengesahan (Kunci API, OAuth, JWT)
- Penandatanganan dan pengesahan permintaan
- Penyenaraian putih IP dan kawalan akses
- Penguatkuasaan penyulitan SSL/TLS
- Pengehadan kadar dan pendikitan
- Pengelogan audit keselamatan

### Pengurusan Integrasi
- Templat integrasi sistem pihak ketiga
- Integrasi perkhidmatan popular (Zapier, IFTTT, dsb.)
- Sokongan pembangunan integrasi tersuai
- Alat pengujian dan pengesahan integrasi
- Pemantauan prestasi dan analitik
- Alat pengendalian ralat dan penyahpepijatan

### Penapisan dan Penghalaan Peristiwa
- Kriteria penapisan peristiwa lanjutan
- Penghalaan bersyarat berdasarkan nilai data
- Penyiaran peristiwa pelbagai destinasi
- Transformasi dan pemetaan tersuai
- Pemprosesan peristiwa berasaskan peraturan perniagaan
- Pratonton dan pengujian peristiwa masa nyata

## Spesifikasi Teknikal

### Keperluan Sistem
- **Tahap Akses Minimum**: Pentadbir Integrasi
- **Kebergantungan Pangkalan Data**: Jadual peristiwa dan webhook
- **Titik Integrasi**: Semua modul BigLedger
- **Piawaian API**: API RESTful, format JSON
- **Protokol Keselamatan**: HTTPS, OAuth 2.0, JWT

### Pilihan Konfigurasi Webhook
- **URL Titik Akhir**: Titik akhir webhook tanpa had
- **Jenis Peristiwa**: 200+ jenis peristiwa disokong
- **Saiz Muatan**: Sehingga 10MB setiap webhook
- **Percubaan Cuba Semula**: Dasar cuba semula boleh dikonfigurasi
- **Kaedah Pengesahan**: Pelbagai pilihan keselamatan

### Parameter Prestasi
- **Daya Pemprosesan Peristiwa**: 10,000+ peristiwa sesaat
- **Masa Tindak Balas**: <100ms untuk tangkapan peristiwa
- **Kejayaan Penghantaran**: Jaminan penghantaran 99.9%
- **Webhook Serentak**: 1,000+ penghantaran serentak
- **Pengekalan Sejarah**: 90 hari sejarah peristiwa

## Titik Integrasi

### Kebergantungan Modul Teras
- **Aplet Tenant Admin** - Pengesahan dan kebenaran pengguna
- **Aplet Organisasi** - Penghalaan peristiwa pelbagai penyewa
- **Aplet Penyelenggaraan Pekerja** - Penapisan peristiwa berasaskan pengguna
- **Aplet Reka Bentuk Aliran Kerja** - Peristiwa dicetuskan aliran kerja

### Integrasi Modul
| Modul | Tujuan Integrasi |
|--------|-------------------|
| **Jualan & CRM** | Pemberitahuan peristiwa pelanggan dan jualan |
| **Pembelian** | Makluman peristiwa pesanan pembelian dan pembekal |
| **Perakaunan Kewangan** | Penyiaran peristiwa transaksi kewangan |
| **Pengurusan Inventori** | Pemberitahuan tahap dan pergerakan stok |
| **E-Dagang** | Peristiwa transaksi dan pelanggan dalam talian |
| **Pembuatan** | Peristiwa pengeluaran dan kawalan kualiti |
| **HR & Gaji** | Pemberitahuan peristiwa pekerja dan gaji |

### Integrasi Luaran
- **Sistem CRM** - Integrasi Salesforce, HubSpot, Pipedrive
- **Platform Pemasaran** - Pemberitahuan Mailchimp, Constant Contact
- **Alat Komunikasi** - Makluman Slack, Microsoft Teams
- **Perisikan Perniagaan** - Suapan data Power BI, Tableau
- **Perisian Perakaunan** - Penyegerakan QuickBooks, Xero
- **Platform E-Dagang** - Integrasi Shopify, WooCommerce

## Keperluan Konfigurasi

### Keperluan Persediaan Awal
1. **Titik Akhir Webhook** - Konfigurasikan URL sistem luaran
2. **Persediaan Pengesahan** - Sediakan kelayakan keselamatan
3. **Pemilihan Peristiwa** - Pilih jenis peristiwa yang berkaitan
4. **Peraturan Penapisan** - Tentukan kriteria penapisan peristiwa
5. **Konfigurasi Pengujian** - Sahkan kefungsian webhook

### Konfigurasi Penting
- **Jenis Peristiwa**: Pesanan Dicipta, Pembayaran Diterima, Stok Dikemas Kini
- **Pengesahan**: Kunci API, token OAuth, kelayakan JWT
- **Dasar Cuba Semula**: Backoff eksponen, percubaan maksimum
- **Peraturan Penapisan**: Khusus pelanggan, ambang jumlah
- **Tetapan Keselamatan**: Pengesahan SSL, penyenaraian putih IP

### Konfigurasi Lanjutan
- **Transformasi Tersuai** - Pemetaan dan pemformatan data
- **Penghalaan Bersyarat** - Penghalaan peristiwa berasaskan peraturan perniagaan
- **Pemprosesan Berkelompok** - Penghantaran peristiwa berkumpulan
- **Pengendalian Ralat** - Pemprosesan tindak balas ralat tersuai
- **Integrasi Analitik** - Pemantauan prestasi peristiwa

## Kes Penggunaan

### Integrasi E-Dagang
**Senario**: Kedai dalam talian dengan penyegerakan inventori
- Webhook pesanan baharu ke sistem inventori
- Kemas kini tahap stok ke platform e-dagang
- Pemberitahuan pendaftaran pelanggan ke CRM
- Pengesahan pembayaran ke sistem perakaunan
- Kemas kini penghantaran ke khidmat pelanggan

**Manfaat**: Penyegerakan ekosistem e-dagang masa nyata

### Integrasi Sistem CRM
**Senario**: Pasukan jualan menggunakan sistem CRM luaran
- Pemberitahuan penciptaan pelanggan baharu
- Kemas kini pesanan jualan dan perubahan status
- Pengesahan resit pembayaran
- Makluman permintaan perkhidmatan
- Penyiaran peristiwa kelayakan prospek

**Manfaat**: Pengurusan hubungan pelanggan yang bersatu

### Integrasi Sistem Kewangan
**Senario**: Operasi kewangan pelbagai sistem
- Pemberitahuan penciptaan invois ke sistem perakaunan
- Kemas kini pemprosesan pembayaran ke platform perbankan
- Makluman kelulusan perbelanjaan ke pasukan kewangan
- Pemberitahuan varians belanjawan
- Pengelogan peristiwa jejak audit

**Manfaat**: Pengurusan ekosistem kewangan yang bersepadu

### Integrasi Pembuatan
**Senario**: Kemudahan pengeluaran dengan integrasi MES
- Pemberitahuan penciptaan pesanan kerja
- Penyiaran keputusan kawalan kualiti
- Kemas kini penggunaan inventori
- Makluman penyiapan pengeluaran
- Pemberitahuan penyelenggaraan peralatan

**Manfaat**: Operasi pembuatan yang bersambung

## Aplet Berkaitan

### Aplet Modul Teras
- **[Aplet Reka Bentuk Aliran Kerja](/ms/applets/workflow-design-applet/)** - Webhook dicetuskan aliran kerja
- **[Aplet Tenant Admin](/ms/applets/tenant-admin-applet/)** - Pengurusan keselamatan dan akses
- **[Aplet Pemantauan Proses](/ms/applets/process-monitoring-applet/)** - Pemantauan integrasi

### Aplet Integrasi
- **[Aplet Pengurusan API](/ms/applets/api-management-applet/)** - Pengurusan titik akhir API
- **[Aplet Penyegerakan Data](/ms/applets/data-sync-applet/)** - Penyegerakan data
- **[Aplet Sistem Luaran](/ms/applets/external-system-applet/)** - Pengurusan sistem pihak ketiga

### Aplet Komunikasi
- **[Aplet Pemberitahuan](/ms/applets/notification-applet/)** - Pemberitahuan dalaman
- **[Aplet Integrasi E-mel](/ms/applets/email-integration-applet/)** - Integrasi sistem e-mel
- **[Aplet Get Laluan SMS](/ms/applets/sms-gateway-applet/)** - Pemberitahuan SMS

## Panduan Persediaan

### Permulaan Pantas
1. **Akses Konfigurasi Webhook** - Navigasi ke aplet
2. **Tambah Titik Akhir Webhook** - Konfigurasikan URL sistem luaran
3. **Pilih Jenis Peristiwa** - Pilih peristiwa perniagaan yang berkaitan
4. **Konfigurasikan Pengesahan** - Sediakan kelayakan keselamatan
5. **Uji Penghantaran Webhook** - Sahkan kefungsian dengan peristiwa ujian

### Persediaan Lanjutan
1. **Konfigurasi Muatan Tersuai** - Reka bentuk muatan peristiwa tersuai
2. **Persediaan Penapisan Lanjutan** - Konfigurasikan peraturan penapisan kompleks
3. **Penghalaan Pelbagai Destinasi** - Sediakan penyiaran peristiwa
4. **Konfigurasi Pengendalian Ralat** - Konfigurasikan dasar cuba semula dan ralat
5. **Persediaan Pemantauan Prestasi** - Konfigurasikan analitik dan pemantauan

## Contoh Konfigurasi Webhook

### Webhook Pesanan E-Dagang
```yaml
Webhook Name: E-Commerce Order Integration
Endpoint URL: https://api.ecommerce.com/webhooks/bigledger
Method: POST
Authentication: 
  Type: API Key
  Header: X-API-Key
  Value: [ENCRYPTED_API_KEY]

Event Triggers:
  - sales_order.created
  - sales_order.updated
  - sales_order.cancelled
  - payment.received

Payload Format:
  order_id: "{{ order.id }}"
  customer_id: "{{ order.customer_id }}"
  total_amount: "{{ order.total }}"
  status: "{{ order.status }}"
  items: "{{ order.items }}"
  timestamp: "{{ event.timestamp }}"

Filters:
  - order.total > 100
  - order.status != "draft"

Retry Policy:
  Max Attempts: 3
  Backoff: Exponential
  Timeout: 30 seconds
```

### Webhook Penyegerakan Pelanggan CRM
```yaml
Webhook Name: CRM Customer Synchronization
Endpoint URL: https://api.crm.com/webhooks/customers
Method: POST
Authentication:
  Type: OAuth 2.0
  Token: [OAUTH_TOKEN]

Event Triggers:
  - customer.created
  - customer.updated
  - customer.deleted

Payload Format:
  customer_id: "{{ customer.id }}"
  name: "{{ customer.name }}"
  email: "{{ customer.email }}"
  phone: "{{ customer.phone }}"
  address: "{{ customer.address }}"
  created_date: "{{ customer.created_date }}"

Security Settings:
  SSL Verification: Required
  IP Whitelist: [CRM_SERVER_IPS]
  Rate Limit: 100 requests/minute
```

## Amalan Terbaik

### Amalan Terbaik Reka Bentuk Webhook
- **Operasi Idempoten** - Reka bentuk untuk penghantaran webhook berulang
- **Muatan Minimum** - Sertakan hanya data yang perlu
- **Nama Peristiwa Jelas** - Gunakan konvensyen penamaan peristiwa yang deskriptif
- **Strategi Pemversian** - Rancang untuk evolusi muatan webhook
- **Dokumentasi** - Dokumentasi webhook yang komprehensif

### Amalan Terbaik Keselamatan
- **Pengesahan Diperlukan** - Jangan sesekali gunakan webhook tidak selamat
- **Penyulitan SSL/TLS** - Sentiasa gunakan titik akhir HTTPS
- **Pengesahan Permintaan** - Sahkan ketulenan sumber webhook
- **Penyenaraian Putih IP** - Hadkan akses kepada sumber yang diketahui
- **Pengehadan Kadar** - Cegah penyalahgunaan dan banjir webhook

### Amalan Terbaik Prestasi
- **Pemprosesan Tak Segerak** - Kendalikan webhook secara tak segerak
- **Pemprosesan Berkelompok** - Kumpulkan peristiwa berkaitan apabila mungkin
- **Logik Cuba Semula** - Laksanakan mekanisme cuba semula yang bijak
- **Pemantauan** - Pemantauan prestasi webhook berterusan
- **Pengendalian Ralat** - Pengendalian ralat dan pengelogan yang anggun

## Penyelesaian Masalah

### Isu Biasa
**Kegagalan penghantaran webhook**
- Semak kebolehcapaian URL titik akhir
- Sahkan kelayakan pengesahan
- Kaji kesahihan sijil SSL
- Semak keperluan format muatan

**Peristiwa webhook hilang**
- Sahkan konfigurasi jenis peristiwa
- Semak peraturan dan syarat penapisan
- Kaji status pengaktifan webhook
- Sahkan tetapan integrasi modul

**Isu prestasi**
- Pantau masa penghantaran webhook
- Semak masa tindak balas sistem luaran
- Kaji konfigurasi dasar cuba semula
- Analisis tunggakan antrian peristiwa

### Sumber Sokongan
- Panduan konfigurasi dan persediaan webhook
- Dokumentasi amalan terbaik integrasi
- Panduan pelaksanaan keselamatan
- Cadangan pengoptimuman prestasi

{{< callout type="warning" >}}
**Notis Keselamatan**: Webhook menghantar data perniagaan sensitif kepada sistem luaran. Sentiasa laksanakan pengesahan, penyulitan, dan kawalan akses yang betul untuk melindungi data anda.
{{< /callout >}}
