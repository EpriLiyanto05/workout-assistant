# Workout Assistant — Dashboard Theme Rev3

## Perubahan desain
- Tampilan dirombak menjadi dashboard fitness modern yang terinspirasi referensi.
- Sidebar gelap dengan accent lime.
- Logo CG diganti menjadi ikon dumbbell.
- Mode terang dan gelap.
- Tema tersimpan otomatis di browser.
- Ringkasan dashboard: workout mingguan, konsistensi, fase aktif, durasi target.
- Semua fungsi Guided Workout dari versi sebelumnya tetap dipertahankan.
- Responsive untuk desktop, tablet, dan HP.

## Deploy
Static site, siap deploy ke Vercel/Netlify/Hostinger.

## Rev 3.1

- Tombol tema di topbar sekarang hanya menampilkan ikon:
  - bulan untuk mode gelap;
  - matahari untuk mode terang.
- Teks `Mode Gelap` / `Mode Terang` dihapus.
- Tombol `Reset Progress` diganti menjadi ikon reset saja.
- Tooltip dan aria-label tetap tersedia agar tombol tetap jelas dan accessible.

## Rev 3.2 — Pilihan Warna Tema

Warna aksen dashboard sekarang dapat dipilih dan disimpan otomatis:

- Hijau Neon
- Biru
- Merah
- Pink
- Kuning

Pilihan warna bekerja di **mode terang maupun gelap** dan memengaruhi tombol utama, menu aktif, progress bar, indikator hari, checklist, rest timer, dan elemen aksen lainnya.

Pilihan warna tema tidak ikut terhapus saat `Reset Progress`.

## Rev 3.3 — Palette di Topbar

- Pemilih warna dipindahkan dari panel Pengaturan Program ke pojok kanan atas.
- Posisi tombol: **Mode Gelap/Terang → Kuas Warna → Reset**.
- Tombol warna menggunakan ikon kuas.
- Klik ikon kuas membuka pilihan 5 warna.
- Warna default diubah menjadi **Biru Persib**.
- Biru Persib menggunakan:
  - Primary: `#005BAC`
  - Secondary: `#004A8F`
- Pilihan lain tetap tersedia: Hijau Neon, Merah, Pink, Kuning.

## Rev 3.4

- Ikon pemilih warna tema diganti memakai gambar palette + brush yang diberikan.
- Ikon otomatis menyesuaikan agar tetap terlihat di mode gelap.
- Warna default tetap **biru**, tetapi dikembalikan ke biru versi sebelumnya:
  - Primary: `#4DB8FF`
  - Secondary: `#229CFF`
- Label `Biru Persib` dikembalikan menjadi `Biru`.

## Rev 3.5 — Menu Mobile

- Pada tampilan HP, ikon gelap/terang di bar hitam atas disembunyikan.
- Navigasi ikon tengah tidak lagi tampil berjajar di mobile.
- Sebagai gantinya, di pojok kanan atas muncul tombol **hamburger / garis tiga**.
- Klik tombol tersebut untuk membuka menu:
  - Dashboard
  - Program Workout
  - Roadmap
  - Pengaturan
- Tampilan desktop tetap sama.

## Rev 3.6 — Mobile Header Title

- Bagian kosong di tengah header mobile diisi tulisan **Workout Assistant**.
- Posisi judul dibuat tepat di tengah antara ikon dumbbell dan tombol hamburger.
- Font dibuat tebal agar terasa seperti header aplikasi.
- Perubahan hanya berlaku pada tampilan HP.

## Rev 3.7 — Active Navigation Desktop

- Ikon sidebar desktop sekarang benar-benar berfungsi sebagai navigasi.
- Warna aktif berpindah mengikuti menu yang diklik.
- Menu yang tersedia:
  - Dashboard / Home
  - Program Workout
  - Roadmap
  - Pengaturan
- Ketika sebuah menu dipilih, panel/kotak yang sesuai ikut mendapatkan warna aksen dari tema aktif.
- Contoh: memilih **Program Workout** akan memindahkan highlight biru ke ikon workout dan memberi aksen biru pada kotak Program Harian.
- Perilaku ini juga disinkronkan dengan menu hamburger pada tampilan mobile.

## Rev 3.8

- Ikon mode gelap/terang di bagian bawah sidebar desktop dihapus.
- Kontrol mode gelap/terang tetap tersedia di bagian atas dashboard.
- Tampilan sidebar sekarang lebih bersih.

## Rev 3.9 — Favicon
Logo baru dipasang sebagai favicon dan apple touch icon aplikasi.

## Rev 4.0 — PWA / Icon Install Lebih Tajam

Aplikasi sekarang dilengkapi Web App Manifest dan icon khusus untuk instalasi ke home screen.

### Icon
- `assets/icon-192.png`
- `assets/icon-512.png`
- `assets/icon-maskable-512.png`
- `assets/icon-1024.png`
- `assets/apple-touch-icon.png`

### PWA
- `manifest.webmanifest`
- `sw.js`
- Mode `standalone`
- Icon `maskable` untuk launcher Android
- Service worker untuk cache/offline dasar

Setelah deploy versi ini ke Vercel, hapus shortcut/app lama dari HP lalu install ulang agar launcher mengambil icon 512px terbaru.

## Rev 4.1 — Favicon Disamakan dengan Icon Dumbbell

Favicon dan icon install aplikasi sekarang disamakan dengan icon dumbbell yang tampil di dashboard.

Asset yang diperbarui:
- `assets/favicon.ico`
- `assets/favicon.svg`
- `assets/favicon-16x16.png`
- `assets/favicon-32x32.png`
- `assets/favicon-48x48.png`
- `assets/apple-touch-icon.png`
- `assets/icon-192.png`
- `assets/icon-512.png`
- `assets/icon-maskable-512.png`
- `assets/icon-1024.png`

Manifest PWA juga sudah diarahkan ke icon dumbbell tersebut.

## Rev 4.2 — Fix Favicon Desktop & Icon Tema

- Favicon desktop memakai nama file baru (`v42`) agar tidak tertahan cache favicon lama.
- Service worker cache dibump ke `workout-assistant-v4.2`.
- Asset `theme-palette.png` yang sebelumnya hilang dikembalikan.
- Icon palette/tema di topbar sekarang tampil kembali.
- Manifest PWA juga diarahkan ke icon dumbbell versi terbaru.

## Rev 4.3 — Root Favicon untuk Vercel

Favicon dipindahkan langsung ke root project supaya Vercel/browser bisa membacanya melalui `/favicon.ico`.

Root files:
- `favicon.ico`
- `favicon.svg`
- `favicon-16.png`
- `favicon-32.png`
- `favicon-48.png`
- `apple-touch-icon.png`
- `icon-192.png`
- `icon-512.png`
- `icon-maskable-512.png`

Link favicon memakai cache-busting `?v=4.3`.
Service worker diperbarui ke cache `workout-assistant-v4.3`.
