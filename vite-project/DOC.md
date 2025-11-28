# 📄 Dokumentasi Aplikasi: Single Page Application (SPA) menggunakan ReactJS untuk menampilkan CV Mahasiswa

## 1. Deskripsi Aplikasi
Aplikasi ini adalah **Single Page Application (SPA)** yang menampilkan Curriculum Vitae (CV) digital milik **Fandi Ardiyanto** (NIM: L200230204).

Aplikasi ini dibangun menggunakan teknologi web modern untuk memberikan pengalaman pengguna yang cepat, responsif, dan interaktif. Data mahasiswa dipisahkan dalam file JSON untuk mempermudah pembaruan data tanpa mengubah kode program.

**Fitur Utama:**
* **Responsive Layout:** Tampilan optimal di Desktop (Lebar) dan Mobile (Vertikal).
* **Interactive Profile:** Foto profil dapat diklik untuk memperbesar (Zoom/Lightbox) dengan animasi halus.
* **Skill Badges:** Penanda khusus (badge) untuk *Main Skills*.
* **Smooth Animations:** Efek animasi *fade-in-up* saat halaman dimuat.
* **Modern Styling:** Menggunakan Tailwind CSS untuk desain yang bersih dan elegan.

**Teknologi yang Digunakan:**
* ReactJS (Vite)
* Tailwind CSS
* JavaScript (ES6+)

---

## 2. Cara Menjalankan Project (Local)

Ikuti langkah-langkah berikut untuk menjalankan aplikasi ini di komputer lokal Anda:

**Prasyarat:** Pastikan sudah menginstall [Node.js](https://nodejs.org/) di komputer Anda.

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

🔗 **[MASUKKAN_LINK_VERCEL_ATAU_NETLIFY_ANDA_DISINI]**

*(Contoh: https://cv-fandi-ardiyanto.vercel.app)*

---

## 4. Screenshot Tampilan

Berikut adalah tangkapan layar dari aplikasi:

### A. Tampilan Desktop
![Tampilan Desktop](./images/tampilanDekstop.png)
*Tampilan penuh dengan layout vertikal yang lebar dan nyaman dibaca.*

### B. Tampilan Mobile
![Tampilan Mobile](./images/tampilanMobile.png)
*Layout responsif yang menyesuaikan layar HP, foto rata tengah.*

### C. Fitur Zoom Foto (Modal)
![Fitur Zoom](./images/fotozoom1.JPG, ./images/fotozoom2.JPG)
*Fitur lightbox saat foto profil diklik, lengkap dengan instruksi overlay.*