# Modul Pembelajaran Interaktif K3

Website pembelajaran mandiri untuk empat materi:
- Dasar-Dasar Keselamatan dan Kesehatan Kerja (K3)
- Manajemen Risiko K3
- Manajemen Alat Pelindung Diri (APD)
- Basic First Aid (BFA)

## Fitur
- Navigasi materi
- Penjelasan konsep dan contoh
- Simulasi penilaian risiko (kemungkinan × keparahan)
- Pemilihan APD berdasarkan jenis bahaya
- Alur respons awal pada situasi pertolongan pertama
- Kuis interaktif dengan penilaian otomatis

## Struktur proyek

```text
k3-github/
├── index.html
├── README.md
├── .gitignore
├── css/
│   └── style.css
└── js/
    └── app.js
```

## Menjalankan secara lokal
1. Unduh atau clone repository.
2. Buka `index.html` menggunakan browser modern.
3. Tidak memerlukan instalasi dependency atau server backend.

## Publikasi menggunakan GitHub Pages
1. Buat repository baru di GitHub.
2. Unggah seluruh isi folder proyek ini ke root repository.
3. Buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/ (root)`, lalu klik **Save**.
6. Tunggu proses publikasi selesai. GitHub akan menampilkan alamat website pada bagian Pages.

## Catatan penggunaan
Materi disusun berdasarkan empat dokumen PDF yang diberikan pengguna. Website ini merupakan media pembelajaran pengantar, bukan pengganti SOP perusahaan, pelatihan K3, pelatihan pertolongan pertama, atau arahan tenaga medis. Untuk penerapan di tempat kerja, ikuti regulasi dan prosedur resmi yang berlaku serta panduan pertolongan pertama terkini.

## Teknologi
- HTML
- CSS
- JavaScript (tanpa framework dan tanpa dependency eksternal)
