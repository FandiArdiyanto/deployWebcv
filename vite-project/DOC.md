# 📄 Dokumentasi - Single Page Application (SPA) Menggunakan ReactJS untuk Menampilkan CV Mahasiswa

---

**Nama**: Fandi Ardiyanto  
**NIM**: L200230204  
**Program Studi**: Teknik Informatika  
**Angkatan**: 2023

---

## 📱 Deskripsi Aplikasi

Aplikasi ini adalah *Single Page Application* (SPA) yang dibangun menggunakan **ReactJS (Vite)** untuk menampilkan Curriculum Vitae (CV) mahasiswa secara digital. Aplikasi ini menyajikan informasi pribadi, keahlian, dan pengalaman dalam antarmuka yang modern, responsif, dan interaktif.

### Fitur Utama

- **Bagian Profil**: Menampilkan informasi mahasiswa meliputi:
  - Nama Lengkap, NIM, Prodi, dan Angkatan
  - Foto Profil dengan **Fitur Zoom/Lightbox** (Klik untuk memperbesar)
  - *Headline* dan biografi singkat
  - Informasi kontak (lokasi, tautan portofolio)

- **Bagian Skills (Keahlian)**: Menampilkan kemampuan teknis dengan:
  - **Badge "Main Skill"**: Penanda khusus untuk keahlian utama
  - Kategorisasi visual untuk keahlian teknis
  - Indikator tingkat keahlian (*Intermediate*, *Advanced*)
  - Ikon visual dari pustaka DevIcons

- **Bagian Experiences (Pengalaman)**: Menampilkan riwayat pengalaman organisasi dan pelatihan dengan:
  - Tata letak vertikal yang kronologis
  - Logo organisasi/institusi
  - Rentang tanggal dengan format yang rapi
  - *Tech stack* yang digunakan dalam setiap pengalaman
  - Deskripsi detail kegiatan

### Detail Teknis

- **Framework**: Menggunakan **ReactJS (Vite)** untuk performa pengembangan dan *build* yang lebih cepat.
- **Manajemen Data**: Seluruh data mahasiswa disimpan dalam file terpisah `src/data/dataMahasiswa.json` dan diimpor secara otomatis, sehingga mudah diperbarui tanpa mengubah kode.
- **Komponen**: Dibangun dengan struktur komponen yang modular dan *reusable*:
  - `App.jsx` - Tata letak utama aplikasi dengan animasi masuk (*Fade In Up*)
  - `Profile.jsx` - Bagian profil yang dilengkapi modal interaktif (*Zoom*)
  - `Skills.jsx` - Bagian *skills* dengan logika kondisional untuk *badge*
  - `Experiences.jsx` - Bagian pengalaman
- **Styling**: Menggunakan **Tailwind CSS** untuk desain berbasis utilitas yang cepat dan responsif.
- **Animasi**: Menggunakan animasi kustom Tailwind (*fade-in-up*, *pulse*).

### Teknologi (Tech Stack)

- **Vite** - *Frontend Tooling*
- **React** - Pustaka JavaScript untuk membangun antarmuka pengguna
- **Tailwind CSS** - Kerangka kerja CSS
- **PostCSS** - Alat transformasi CSS
- **JSON** - Format data untuk menyimpan informasi mahasiswa

---

## 🚀 Cara Menjalankan Project (Lokal)

Ikuti langkah-langkah berikut untuk menjalankan aplikasi ini di komputer Anda:

### Prasyarat

- Node.js
- npm (Node Package Manager)

### Instalasi & Menjalankan
1.  **Clone atau Download Repository**
    Ekstrak file project, lalu buka terminal dan masuk ke folder project:
    ```bash
    cd vite-project
    ```

2.  **Install Dependencies**
    Install semua library yang dibutuhkan (React, Tailwind, dll):
    ```bash
    npm install
    ```

3.  **Jalankan Mode Development**
    Jalankan server lokal:
    ```bash
    npm run dev
    ```

4.  **Buka di Browser**
    Buka link yang muncul di terminal (biasanya `http://localhost:5173/`).

---

## 3. Link Deployment

Aplikasi ini telah di-deploy dan dapat diakses secara online melalui tautan berikut:

🔗 **[https://deploy-webcv-sq47.vercel.app/]**

---

## 4. Screenshot Tampilan

Berikut adalah tangkapan layar dari aplikasi:

### A. Tampilan Desktop
![Tampilan Desktop](.public/images/tampilanDekstop.png)
*Tampilan penuh dengan layout vertikal yang lebar dan nyaman dibaca.*

### B. Tampilan Mobile
![Tampilan Mobile](.public/images/tampilanMobile.png)
*Layout responsif yang menyesuaikan layar HP, foto rata tengah.*

### C. Fitur Zoom Foto (Modal)
![Fitur Zoom](.public/images/fotozoom1.JPG)
![Fitur Zoom](.public/images/fotozoom2.JPG)
*Fitur lightbox saat foto profil diklik, lengkap dengan instruksi overlay.*

## 5. Struktur Folder
deploywebcv/
├── vite-project/
│   ├── node_modules/
│   ├── public/
│   │   ├── images/
│   │   │   ├── dicodinglogo.jpeg
│   │   │   ├── dqlablogo.jpeg
│   │   │   ├── fotokuu.jpeg
│   │   │   ├── psmkindilogo.jpeg
│   │   │   └── ... (screenshots)
│   │   └── vite.svg
│   ├── src/
│   │   ├── components/
│   │   │   ├── Experiences.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── Skills.jsx
│   │   ├── data/
│   │   │   └── dataMahasiswa.json
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
├── DOC.md
└── README.md

## 6. Implementasi Fitur Utama

- **Pemisahan Data JSON**: Konten dipisahkan dari logika kode menggunakan `dataMahasiswa.json` agar kode lebih bersih.
- **Responsif & Adaptif**: Tata letak berubah dari vertikal (di HP) menjadi lebar/grid (di Desktop) menggunakan kelas utilitas Tailwind.
- **Elemen Interaktif**: Menggunakan *State Management* (`useState`) pada React untuk menangani modal zoom gambar.
- **Animasi Kustom**: Menambahkan animasi `fade-in-up` pada `tailwind.config.js` agar halaman muncul dengan halus.