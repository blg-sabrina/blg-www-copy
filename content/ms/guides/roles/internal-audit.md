---
title: "Panduan Juruaudit Dalaman"
description: "Panduan prosedur audit dan pematuhan untuk juruaudit dalaman"
weight: 50
---

# Juruaudit Dalaman - Soalan Penilaian Sistem BigLedger

## Profil Peranan
Sebagai Juruaudit Dalaman (bertauliah CIA, ACCA, CISA), saya bertanggungjawab menilai kawalan dalaman, pematuhan, dan pengurusan risiko menggunakan ciri jejak audit dan kawalan BigLedger. Saya menjalankan semakan operasi, kewangan, dan pematuhan merentas semua proses perniagaan untuk memastikan pematuhan kawal selia dan kecekapan operasi.

## 1. Jejak Audit dan Dokumentasi

### Akses Sistem dan Aktiviti Pengguna
- Bolehkah BigLedger menyediakan jejak audit menyeluruh yang menunjukkan siapa yang mengakses data apa, bila, dan dari lokasi/peranti mana?
- Sejauh mana terperincinya log aktiviti pengguna - adakah ia menangkap akses lihat-sahaja, pengubahsuaian data, dan aktiviti pentadbiran sistem?
- Bolehkah saya menjejaki sesi pengguna termasuk masa log masuk/log keluar, sesi serentak, dan peristiwa tamat masa sesi?
- Adakah terdapat laporan yang menunjukkan corak akses luar biasa, seperti aktiviti selepas waktu bekerja atau akses dari lokasi yang tidak biasa?

### Dokumentasi Transaksi dan Penjejakan Aliran Kerja
- Bagaimanakah saya boleh menjejaki kitaran hayat lengkap sesuatu transaksi kewangan dari permulaan hingga catatan akhir?
- Adakah sistem mengekalkan sejarah versi bagi dokumen yang telah diubah suai, menunjukkan semua perubahan dan pelulus?
- Bolehkah saya menjejaki aliran kerja dokumen untuk mengesahkan bahawa semua kelulusan yang diperlukan telah diperoleh sebelum pemprosesan?
- Adakah terdapat kawalan untuk mencegah pentarikhan mundur transaksi, dan bolehkah saya mengenal pasti sebarang pengecualian di mana perkara ini berlaku?

### Penjejakan Perubahan Data Induk
- Sejauh manakah menyeluruhnya jejak audit bagi perubahan pada data induk (pelanggan, pembekal, item, carta akaun)?
- Bolehkah saya mengenal pasti siapa yang membuat perubahan tertentu pada penetapan harga, had kredit, terma pembayaran, atau butiran perbankan vendor?
- Adakah terdapat laporan yang menunjukkan perubahan pukal pada data induk yang mungkin menandakan potensi manipulasi data?
- Bagaimanakah sistem mengendali dan menjejaki perubahan kecemasan yang dibuat di luar proses kelulusan biasa?

### Integriti dan Penyimpanan Dokumen
- Kawalan apakah yang memastikan dokumen sokongan tidak boleh diubah atau dipadam selepas transaksi dicatatkan?
- Bolehkah saya mengesahkan bahawa semua dokumentasi sokongan yang diperlukan dilampirkan pada transaksi sebelum kelulusan?
- Bagaimanakah sistem mengendali keperluan pengekalan dokumen dan mencegah pemadaman tanpa kebenaran?
- Adakah terdapat checksum atau tandatangan digital untuk mengesahkan integriti dokumen dari semasa ke semasa?

## 2. Kawalan Kewangan dan Pengasingan Tugas

### Kawalan Akses Berasaskan Peranan
- Bagaimanakah saya boleh mengesahkan bahawa pengasingan tugas dilaksanakan dengan betul merentas proses kewangan utama?
- Bolehkah saya menjana laporan yang menunjukkan pengguna yang mempunyai kebenaran bercanggah (cth., keupayaan untuk mencipta dan meluluskan pesanan belian sekali gus)?
- Bagaimanakah sistem mencegah peningkatan keistimewaan atau pengubahsuaian peranan tanpa kebenaran?
- Adakah terdapat kawalan untuk memastikan pemberian kebenaran sementara ditarik balik dengan betul apabila tidak diperlukan lagi?

### Kawalan Aliran Kerja Kelulusan
- Mekanisme apakah yang mencegah pengguna daripada memintas aliran kerja kelulusan yang diperlukan atau meluluskan transaksi mereka sendiri?
- Bolehkah saya menguji bahawa had kelulusan dikuatkuasakan dengan betul dan bahawa transaksi melebihi had memerlukan kebenaran tambahan?
- Bagaimanakah sistem mengendali situasi di mana pelulus tidak tersedia - adakah terdapat kawalan pewakilan yang betul?
- Adakah terdapat laporan yang menunjukkan pengecualian di mana proses kelulusan biasa ditolak, dan siapa yang membenarkan pengecualian ini?

### Kawalan Catatan Jurnal
- Kawalan apakah yang wujud untuk mencegah catatan jurnal tanpa kebenaran atau memastikan dokumentasi yang betul bagi semua catatan manual?
- Bolehkah saya mengesahkan bahawa semua catatan jurnal melebihi ambang tertentu memerlukan kelulusan penyelia?
- Bagaimanakah sistem mencegah pencatatan catatan ke tempoh yang telah ditutup, dan siapa yang mempunyai kuasa untuk membuka semula tempoh?
- Adakah terdapat kawalan automatik untuk mengesan catatan jurnal luar biasa (cth., nombor bulat, jumlah besar, gabungan akaun yang tidak biasa)?

### Kawalan Padanan Tiga Hala
- Bagaimanakah saya boleh menguji keberkesanan padanan tiga hala antara pesanan belian, penerimaan, dan invois?
- Tahap toleransi apakah yang dikonfigurasikan untuk varians harga dan kuantiti, dan siapa yang boleh meluluskan pengecualian?
- Bolehkah saya mengenal pasti kejadian di mana padanan dipintas atau ditolak, dan mengesahkan kebenaran yang betul?
- Adakah terdapat laporan yang menunjukkan penuaan dokumen tidak sepadan yang mungkin menandakan kelemahan kawalan?

## 3. Kawalan Kitaran Hasil

### Pemprosesan Pesanan Jualan dan Pengurusan Kredit
- Bagaimanakah saya boleh mengesahkan bahawa semua pesanan jualan melalui proses kelulusan kredit yang betul sebelum pemenuhan?
- Kawalan apakah yang mencegah jualan kepada pelanggan yang telah melebihi had kredit atau mempunyai baki tertunggak?
- Bolehkah saya menguji bahawa penetapan harga digunakan dengan betul mengikut senarai harga dan matriks diskaun yang diluluskan?
- Bagaimanakah sistem mengendali pengaturan harga khas, dan adakah ini dibenarkan dan didokumentasikan dengan betul?

### Kawalan Pengiktirafan Hasil dan Pengebilan
- Kawalan apakah yang memastikan hasil diiktiraf dalam tempoh yang betul mengikut terma penghantaran?
- Bolehkah saya mengesahkan bahawa semua penghantaran diinvoiskan dengan betul dan tiada barang yang keluar tanpa dokumentasi yang betul?
- Bagaimanakah sistem mencegah pengebilan berganda atau pengebilan bagi barang yang belum dihantar?
- Adakah terdapat kawalan automatik untuk mengesan corak hasil luar biasa yang mungkin menandakan manipulasi?

### Integriti Data Induk Pelanggan
- Kawalan apakah yang mencegah perubahan tanpa kebenaran pada had kredit pelanggan, terma pembayaran, atau perjanjian penetapan harga?
- Bolehkah saya mengenal pasti siapa yang mempunyai kuasa untuk mencipta pelanggan baharu dan mengesahkan bahawa semakan kredit yang betul telah dijalankan?
- Bagaimanakah sistem mengesan dan mencegah rekod pelanggan berganda yang mungkin membolehkan penipuan?
- Adakah terdapat semakan berkala data induk pelanggan untuk mengenal pasti akaun tidak aktif atau mencurigakan?

### Pemprosesan Pemulangan dan Kredit
- Proses kelulusan apakah yang diperlukan untuk pemulangan pelanggan, bayaran balik, dan nota kredit?
- Bolehkah saya mengesahkan bahawa semua pemulangan dibenarkan dengan betul dan bahawa barang yang dipulangkan diterima sebelum kredit dikeluarkan?
- Bagaimanakah sistem mencegah kredit tanpa kebenaran atau memastikan nota kredit disokong oleh dokumentasi yang betul?
- Adakah terdapat kawalan untuk mengesan corak pemulangan berlebihan yang mungkin menandakan isu kualiti atau penipuan?

## 4. Kawalan Perolehan dan Perbelanjaan

### Kebenaran dan Kelulusan Belian
- Bagaimanakah saya boleh mengesahkan bahawa semua belian dibenarkan dengan betul mengikut had kelulusan yang ditetapkan?
- Kawalan apakah yang mencegah pemecahan pesanan belian untuk memintas keperluan kelulusan?
- Bolehkah saya menguji bahawa belian kecemasan menerima semakan dan dokumentasi pasca-kelulusan yang betul?
- Bagaimanakah sistem memastikan perbelanjaan modal mengikut proses kelulusan yang berbeza daripada perbelanjaan operasi?

### Data Induk Vendor dan Kawalan Pembayaran
- Kawalan apakah yang mencegah penciptaan vendor tanpa kebenaran atau perubahan pada maklumat perbankan vendor?
- Bolehkah saya mengenal pasti potensi vendor berganda yang mungkin digunakan untuk pembayaran penipuan?
- Bagaimanakah sistem mengesan dan mencegah pembayaran berganda kepada vendor yang sama bagi invois yang sama?
- Adakah terdapat kawalan automatik untuk menandakan pembayaran kepada vendor baharu atau perubahan dalam kaedah pembayaran?

### Pematuhan Kontrak dan Pemantauan Harga
- Bagaimanakah saya boleh mengesahkan bahawa belian mematuhi terma kontrak dan perjanjian penetapan harga yang dirundingkan?
- Alat apakah yang membantu mengenal pasti belian yang dibuat di luar kontrak vendor yang diluluskan?
- Bolehkah saya memantau varians harga untuk mengesan potensi penipuan vendor atau pelanggaran kontrak?
- Bagaimanakah sistem menjejaki tarikh tamat tempoh kontrak dan memastikan pembaharuan atau tender semula yang tepat pada masanya?

### Kawalan Pengurusan Perbelanjaan
- Aliran kerja kelulusan apakah yang diperlukan untuk laporan perbelanjaan pekerja, dan bagaimana ini dikuatkuasakan?
- Bolehkah saya mengesahkan bahawa laporan perbelanjaan menyertakan dokumentasi sokongan yang diperlukan sebelum bayaran balik?
- Bagaimanakah sistem mengesan tuntutan perbelanjaan berganda atau perbelanjaan yang berpotensi penipuan?
- Adakah terdapat kawalan automatik untuk menandakan perbelanjaan yang melebihi had polisi atau kelihatan luar biasa?

## 5. Kawalan Inventori dan Pengurusan Aset

### Inventori Fizikal dan Pengiraan Kitaran
- Bagaimanakah saya boleh mengesahkan bahawa pengiraan inventori fizikal didokumentasikan dan disesuaikan dengan betul terhadap rekod sistem?
- Kawalan apakah yang memastikan pelarasan inventori dibenarkan dengan betul dan disokong oleh dokumentasi?
- Bolehkah saya menjejaki kekerapan dan ketepatan pengiraan kitaran untuk menilai keberkesanan kawalan inventori?
- Bagaimanakah sistem mengendali dan menjejaki inventori dalam transit atau yang dipegang oleh pihak ketiga?

### Kawalan Penilaian dan Pergerakan Inventori
- Kawalan apakah yang mencegah pergerakan inventori tanpa kebenaran atau memastikan dokumentasi pemindahan yang betul?
- Bolehkah saya mengesahkan bahawa kaedah pengekosan inventori digunakan secara konsisten dan dikonfigurasikan dengan betul?
- Bagaimanakah sistem mengenal pasti dan menjejaki inventori bergerak perlahan, usang, atau rosak?
- Adakah terdapat kawalan untuk memastikan prosedur pemotongan yang betul bagi transaksi inventori pada penghujung tempoh?

### Pengurusan Aset dan Susut Nilai
- Bagaimanakah saya boleh mengesahkan bahawa penambahan aset tetap dibenarkan dan dikelaskan dengan betul?
- Kawalan apakah yang mencegah pelupusan aset tanpa kebenaran atau memastikan kelulusan dan dokumentasi yang betul?
- Bolehkah saya menguji bahawa pengiraan susut nilai adalah tepat dan digunakan secara konsisten?
- Bagaimanakah sistem menjejaki lokasi aset dan memastikan akauntabiliti untuk item bernilai tinggi?

### Kawalan Gudang dan Keselamatan
- Kawalan apakah yang menyekat akses fizikal ke kawasan penyimpanan inventori dan menjejaki kemasukan kakitangan?
- Bolehkah saya mengesahkan bahawa penerimaan dan penghantaran inventori didokumentasikan dan dibenarkan dengan betul?
- Bagaimanakah sistem mengendali dan menjejaki inventori konsainan atau barang yang dipegang untuk pihak ketiga?
- Adakah terdapat kawalan untuk mencegah pengeluaran inventori tanpa kebenaran atau mengesan kecurian?

## 6. Pengurusan Tunai dan Kawalan Perbankan

### Penyesuaian Bank dan Kawalan Tunai
- Bagaimanakah saya boleh mengesahkan bahawa penyesuaian bank dilakukan tepat pada masanya dan disemak oleh kakitangan bebas?
- Kawalan apakah yang memastikan semua akaun bank direkodkan dan disesuaikan dengan betul dalam sistem?
- Bolehkah saya mengenal pasti dan menyiasat item penyesuaian tertunggak yang tidak diselesaikan untuk tempoh yang lama?
- Bagaimanakah sistem mengesan dan mencegah pemindahan dana elektronik atau pengeluaran cek tanpa kebenaran?

### Kawalan Penerimaan Tunai dan Deposit
- Kawalan apakah yang memastikan semua penerimaan tunai direkodkan dengan betul dan didepositkan secara utuh dan tepat pada masanya?
- Bolehkah saya mengesahkan pengasingan tugas antara fungsi kutipan tunai, perekodan, dan penyesuaian?
- Bagaimanakah sistem menjejaki dan mengambil kira penerimaan tunai daripada pelbagai sumber (mel, elektronik, kaunter)?
- Adakah terdapat kawalan untuk mencegah lapping atau skim manipulasi tunai lain?

### Kebenaran dan Pemprosesan Pembayaran
- Tahap kelulusan apakah yang diperlukan untuk pelbagai jenis dan jumlah pengeluaran tunai?
- Bolehkah saya mengesahkan bahawa semua pembayaran disokong oleh dokumentasi dan kebenaran yang betul?
- Bagaimanakah sistem mencegah pembayaran tanpa kebenaran atau memastikan pembayaran dibuat kepada vendor yang sah?
- Adakah terdapat kawalan untuk mengesan dan mencegah penipuan cek atau pemindahan elektronik tanpa kebenaran?

### Tunai Runcit dan Pengendalian Tunai
- Kawalan apakah yang mengawal dana tunai runcit, termasuk kebenaran, dokumentasi, dan penyesuaian?
- Bolehkah saya mengesahkan bahawa prosedur pengendalian tunai didokumentasikan dan dipatuhi dengan betul?
- Bagaimanakah sistem menjejaki dan mengehadkan transaksi tunai runcit untuk mencegah penyalahgunaan?
- Adakah terdapat pengiraan kejutan berkala dan penyesuaian semua dana tunai?

## 7. Keselamatan Data dan Kawalan Akses

### Pengurusan Akses Pengguna
- Bagaimanakah saya boleh mengaudit hak akses pengguna untuk memastikan ia selaras dengan tanggungjawab kerja dan keperluan pengasingan tugas?
- Kawalan apakah yang mengawal peruntukan dan pembatalan akaun pengguna apabila pekerja menyertai, bertukar peranan, atau meninggalkan syarikat?
- Bolehkah saya mengenal pasti akaun tidak aktif atau pengguna dengan kebenaran berlebihan yang menimbulkan risiko keselamatan?
- Bagaimanakah sistem mengendali dan menjejaki akaun kongsi atau akaun perkhidmatan yang digunakan oleh pelbagai pengguna?

### Pengesahan dan Kawalan Kata Laluan
- Polisi kata laluan apakah yang dikuatkuasakan, dan bagaimana saya boleh mengesahkan keberkesanannya?
- Bolehkah saya menguji keperluan pengesahan berbilang faktor untuk pengguna berkeistimewaan atau transaksi sensitif?
- Bagaimanakah sistem mengendali kunci akaun selepas percubaan log masuk yang gagal, dan siapa yang boleh membuka kunci akaun?
- Adakah terdapat kawalan untuk mencegah perkongsian kata laluan atau mengesan kelayakan yang terjejas?

### Kawalan Perlindungan Data dan Privasi
- Kawalan apakah yang mencegah eksport atau muat turun data kewangan sensitif tanpa kebenaran?
- Bolehkah saya mengesahkan bahawa penyulitan data dilaksanakan dengan betul untuk data pada rehat dan dalam transit?
- Bagaimanakah sistem mengendali dan menjejaki akses ke maklumat pengenalan peribadi (PII)?
- Adakah terdapat kawalan untuk memastikan pematuhan dengan peraturan perlindungan data seperti PDPA?

### Pemantauan Sistem dan Tindak Balas Insiden
- Alat pemantauan apakah yang mengesan dan memberi amaran tentang insiden keselamatan atau aktiviti mencurigakan?
- Bolehkah saya menyemak log percubaan akses yang gagal, peningkatan keistimewaan, atau tingkah laku sistem luar biasa?
- Bagaimanakah sistem mengendali dan menjejaki insiden keselamatan, termasuk penyiasatan dan pemulihan?
- Adakah terdapat kawalan automatik untuk mengesan dan bertindak balas terhadap potensi pelanggaran data?

## 8. Pematuhan dan Pematuhan Kawal Selia

### Pematuhan Cukai dan Pelaporan
- Bagaimanakah saya boleh mengesahkan bahawa pengiraan SST adalah tepat dan mematuhi peraturan cukai Malaysia?
- Kawalan apakah yang memastikan penyata cukai difailkan tepat pada masanya dan menyertakan semua maklumat yang diperlukan?
- Bolehkah saya menguji pematuhan dengan keperluan e-invois di bawah sistem MyInvois?
- Bagaimanakah sistem mengendali dan menjejaki pengecualian cukai atau layanan cukai khas?

### Pelaporan Kewangan dan Pematuhan Piawaian
- Kawalan apakah yang memastikan pematuhan dengan Piawaian Pelaporan Kewangan Malaysia (MFRS)?
- Bolehkah saya mengesahkan bahawa penyata kewangan disediakan dengan tepat dan menyertakan semua pendedahan yang diperlukan?
- Bagaimanakah sistem mengendali dan menjejaki transaksi pihak berkaitan dan pendedahan khas lain?
- Adakah terdapat kawalan untuk memastikan konsistensi dalam polisi dan anggaran perakaunan merentas tempoh?

### Pelaporan Kawal Selia dan Dokumentasi
- Alat apakah yang membantu menyediakan laporan kawal selia yang diperlukan oleh pelbagai pihak berkuasa?
- Bolehkah saya mengesahkan bahawa semua pemfailan kawal selia yang diperlukan diserahkan tepat pada masanya dan dengan tepat?
- Bagaimanakah sistem mengekalkan dokumentasi untuk menyokong pematuhan kawal selia?
- Adakah terdapat kawalan untuk memastikan pengekalan rekod yang betul mengikut keperluan kawal selia?

### Pematuhan Polisi dan Etika
- Bagaimanakah saya boleh memantau pematuhan dengan polisi dan prosedur syarikat?
- Alat apakah yang membantu mengesan dan menyiasat potensi pelanggaran polisi etika?
- Bolehkah saya mengesahkan bahawa pekerja menerima latihan yang diperlukan dan mengakui kemas kini polisi?
- Bagaimanakah sistem mengendali dan menjejaki laporan pemberi maklumat dan penyiasatannya?

## 9. Konfigurasi Sistem dan Pengurusan Perubahan

### Kawalan Parameter dan Konfigurasi Sistem
- Kawalan apakah yang mengawal perubahan pada parameter sistem, tetapan konfigurasi, dan peranan pengguna?
- Bolehkah saya menjejaki siapa yang membuat perubahan konfigurasi dan mengesahkan bahawa ini dibenarkan dengan betul?
- Bagaimanakah sistem mengendali perubahan kecemasan, dan adakah ini tertakluk kepada semakan pasca-pelaksanaan?
- Adakah terdapat kawalan untuk memastikan perubahan konfigurasi diuji sebelum pelaksanaan?

### Kemas Kini Perisian dan Pengurusan Tampalan
- Proses apakah yang mengawal pemasangan kemas kini perisian, tampalan, dan ciri baharu?
- Bolehkah saya mengesahkan bahawa semua perubahan diuji dan diluluskan dengan betul sebelum penggunaan ke pengeluaran?
- Bagaimanakah sistem mengendali prosedur balik semula jika perubahan menyebabkan masalah?
- Adakah terdapat kawalan untuk memastikan tampalan keselamatan dipasang tepat pada masanya?

### Kawalan Migrasi dan Integrasi Data
- Kawalan apakah yang mengawal migrasi data semasa naik taraf atau integrasi sistem?
- Bolehkah saya mengesahkan ketepatan dan kelengkapan data yang dipindahkan?
- Bagaimanakah sistem mengendali dan menjejaki integrasi data dengan sistem pihak ketiga?
- Adakah terdapat kawalan untuk memastikan integriti data semasa proses eksport dan import?

### Sandaran dan Pemulihan Bencana
- Kawalan apakah yang memastikan sandaran biasa dilakukan dan boleh dipulihkan dengan jayanya?
- Bolehkah saya mengesahkan bahawa prosedur pemulihan bencana diuji secara berkala dan didokumentasikan?
- Bagaimanakah sistem mengendali kesinambungan perniagaan semasa gangguan sistem atau bencana?
- Adakah terdapat kawalan untuk memastikan data sandaran dilindungi dan disimpan dengan selamat?

## 10. Pelaporan Pengurusan dan Sokongan Keputusan

### Ketepatan dan Kelengkapan Laporan
- Bagaimanakah saya boleh mengesahkan bahawa laporan pengurusan mencerminkan data transaksi asas dengan tepat?
- Kawalan apakah yang memastikan pengiraan automatik dalam laporan adalah betul dan digunakan secara konsisten?
- Bolehkah saya menguji bahawa semua data yang berkaitan disertakan dalam laporan dan tiada yang ditinggalkan?
- Bagaimanakah sistem mengendali dan menjejaki pelarasan manual pada data laporan?

### Petunjuk Prestasi Utama dan Papan Pemuka
- Kawalan apakah yang memastikan KPI dikira dengan betul dan berdasarkan data yang boleh dipercayai?
- Bolehkah saya mengesahkan bahawa metrik papan pemuka dikemas kini tepat pada masanya dan mencerminkan prestasi semasa dengan tepat?
- Bagaimanakah sistem mengendali dan menjejaki amaran ambang dan pelaporan pengecualian?
- Adakah terdapat kawalan untuk mencegah manipulasi metrik prestasi?

### Analisis Belanjawan dan Varians
- Kawalan apakah yang mengawal proses penyediaan belanjawan dan memastikan ketepatan data belanjawan?
- Bolehkah saya mengesahkan bahawa analisis varians dilakukan dengan betul dan menyiasat perbezaan yang ketara?
- Bagaimanakah sistem mengendali semakan belanjawan dan memastikan kebenaran yang betul?
- Adakah terdapat kawalan untuk memastikan perbandingan belanjawan berbanding sebenar adalah bermakna dan tepat?

### Penyediaan Penyata Kewangan
- Kawalan automatik apakah yang menyokong proses penyediaan penyata kewangan?
- Bolehkah saya mengesahkan bahawa semua catatan pelarasan yang diperlukan dibuat sebelum penjanaan penyata kewangan?
- Bagaimanakah sistem memastikan penyata kewangan adalah tepat dari segi matematik dan seimbang?
- Adakah terdapat kawalan untuk memastikan semakan dan kelulusan penyata kewangan yang betul sebelum pengeluaran?

## 11. Pengesanan dan Pencegahan Penipuan

### Pengesanan Penipuan Automatik
- Kawalan automatik apakah yang membantu mengenal pasti transaksi atau corak yang berpotensi penipuan?
- Bolehkah sistem mengesan hubungan vendor luar biasa, pembayaran berganda, atau transaksi mencurigakan?
- Bagaimanakah sistem mengenal pasti transaksi yang memintas kawalan atau proses kelulusan biasa?
- Adakah terdapat algoritma untuk mengesan anomali dalam data kewangan yang mungkin menandakan penipuan?

### Pencegahan Penipuan Vendor dan Pelanggan
- Kawalan apakah yang mencegah penciptaan vendor atau pelanggan rekaan untuk tujuan penipuan?
- Bolehkah saya mengenal pasti potensi konflik kepentingan antara pekerja dan vendor/pelanggan?
- Bagaimanakah sistem mengesan dan mencegah manipulasi data induk vendor?
- Adakah terdapat kawalan untuk mengenal pasti corak luar biasa dalam pembayaran vendor atau penerimaan pelanggan?

### Pengesanan Penipuan Pekerja
- Alat apakah yang membantu mengenal pasti potensi penipuan pekerja, seperti penyalahgunaan akaun perbelanjaan atau manipulasi gaji?
- Bolehkah saya memantau corak akses atau transaksi luar biasa yang dilakukan oleh pekerja?
- Bagaimanakah sistem mengesan potensi konflik kepentingan atau transaksi pihak berkaitan?
- Adakah terdapat kawalan untuk mengenal pasti pekerja yang secara konsisten menolak kawalan sistem?

### Penyiasatan dan Pelaporan
- Alat apakah yang menyokong penyiasatan penipuan dan pengumpulan bukti?
- Bolehkah saya memelihara jejak audit dan data sistem untuk analisis forensik?
- Bagaimanakah sistem mengendali dan menjejaki laporan pemberi maklumat dan penyiasatannya?
- Adakah terdapat kawalan untuk memastikan peningkatan dan pelaporan penipuan yang disyaki dengan betul?

## 12. Pemantauan Berterusan dan Analitik Data

### Pemantauan Berterusan Berasaskan Risiko
- Alat apakah yang menyokong pemantauan berterusan bagi kawasan risiko utama dan proses kawalan?
- Bolehkah saya menyediakan peraturan pemantauan automatik untuk mengesan kegagalan kawalan atau pengecualian?
- Bagaimanakah sistem mengutamakan aktiviti pemantauan berdasarkan penilaian risiko?
- Adakah terdapat papan pemuka yang menyediakan keterlihatan masa nyata ke atas keberkesanan kawalan?

### Analitik Data dan Pengesanan Anomali
- Keupayaan analitik data apakah yang membantu mengenal pasti corak luar biasa atau outlier dalam data kewangan?
- Bolehkah saya melakukan analisis trend untuk mengenal pasti perubahan dalam corak perniagaan yang mungkin menandakan isu?
- Bagaimanakah sistem menyokong pensampelan statistik dan pengujian populasi yang besar?
- Adakah terdapat keupayaan pembelajaran mesin untuk menambah baik pengesanan penipuan dari semasa ke semasa?

### Pelaporan Pengecualian dan Pemberitahuan Amaran
- Laporan pengecualian apakah yang tersedia untuk mengenal pasti transaksi yang memerlukan penyiasatan lanjut?
- Bolehkah saya mengkonfigurasi amaran automatik untuk senario risiko tertentu atau kegagalan kawalan?
- Bagaimanakah sistem mengendali dan menjejaki penyelesaian pengecualian dan amaran?
- Adakah terdapat prosedur peningkatan untuk pengecualian yang tidak diselesaikan atau kegagalan kawalan berulang?

### Sokongan Perancangan dan Pelaksanaan Audit
- Alat apakah yang membantu merancang aktiviti audit berdasarkan penilaian risiko dan keputusan audit terdahulu?
- Bolehkah saya menjejaki penemuan audit dan status penyelesaiannya dari semasa ke semasa?
- Bagaimanakah sistem menyokong prosedur pensampelan dan pengujian audit?
- Adakah terdapat templat dan aliran kerja untuk menyeragamkan prosedur dan dokumentasi audit?

## Kriteria Penilaian Utama

Semasa menilai keupayaan audit dan kawalan BigLedger, saya akan memberi tumpuan kepada:

### Bukti Yang Dijana Sistem
- Kelengkapan dan kebolehpercayaan jejak audit
- Dokumentasi automatik proses kawalan
- Keupayaan pemantauan dan pemberitahuan amaran masa nyata
- Integrasi antara modul sistem yang berbeza

### Keberkesanan Kawalan
- Mekanisme kawalan pencegahan berbanding pengesanan
- Pengendalian pengecualian dan prosedur penolakan
- Penguatkuasaan pengasingan tugas
- Aliran kerja kebenaran dan kelulusan

### Pengurusan Risiko
- Alat penilaian dan pemantauan risiko
- Keupayaan pengesanan dan pencegahan penipuan
- Pemantauan dan pelaporan pematuhan
- Kesinambungan perniagaan dan pemulihan bencana

### Pematuhan Kawal Selia
- Pematuhan keperluan kawal selia Malaysia
- Pematuhan piawaian pelaporan kewangan
- Pematuhan cukai dan e-invois
- Kawalan perlindungan data dan privasi

### Kecekapan Audit
- Analitik data dan pemantauan berterusan
- Keupayaan pengujian dan pensampelan automatik
- Prosedur dan dokumentasi audit yang diseragamkan
- Keupayaan pelaporan pengurusan dan papan pemuka

Penilaian menyeluruh ini akan membantu menentukan kesesuaian BigLedger untuk menyokong fungsi audit dalaman moden dalam perniagaan Malaysia, memastikan persekitaran kawalan yang teguh dan pematuhan kawal selia.
