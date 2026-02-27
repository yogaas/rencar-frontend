# LuxeDrive - Minimalist Car Rental Landing Page

LuxeDrive adalah website penyewaan mobil dengan desain minimalis dan elegan, dirancang khusus untuk memberikan pengalaman pemesanan yang cepat, mudah, dan premium.

## 🎨 Desain Sistem

### 1. Tipografi (Font)
- **Primary Font (Body & UI):** `Inter` (Sans-serif) - Memberikan kesan modern, bersih, dan sangat mudah dibaca pada ukuran kecil maupun besar.
- **Display Font (Headings):** `Playfair Display` (Serif) - Memberikan sentuhan elegan, mewah, dan klasik pada judul atau elemen penting.

### 2. Palet Warna (Color Palette)
Desain menggunakan pendekatan monokromatik dengan sedikit aksen untuk menjaga kesan minimalis dan *high-end*.
- **Primary (Teks Utama & Tombol):** `Zinc-900` (#18181b) - Hitam pekat yang elegan.
- **Background Utama:** `Zinc-50` (#fafafa) - Putih tulang/abu-abu sangat muda yang lembut di mata.
- **Secondary/Muted Text:** `Zinc-500` (#71717a) - Untuk teks pendukung atau deskripsi.
- **Borders/Dividers:** `Zinc-200` (#e4e4e7) - Garis pemisah yang halus.

### 3. Struktur Layout (Atomic Design)
Aplikasi dibangun menggunakan pendekatan *Atomic Design* dan *Clean Architecture* untuk skalabilitas:
- **Atoms:** Komponen dasar yang tidak bisa dipecah lagi (contoh: `Button`, `Input`, `Typography`).
- **Molecules:** Gabungan beberapa atom (contoh: `FormField`, `CarCard`).
- **Organisms:** Bagian UI yang kompleks dan mandiri (contoh: `Navbar`, `HeroSection`, `CarList`, `BookingModal`).
- **Templates:** Struktur halaman tanpa konten spesifik (contoh: `MainLayout`).
- **Pages:** Halaman utuh yang menggabungkan template dengan data (contoh: `Home`).

## 📂 Struktur Direktori

```text
/src
├── assets/          # Gambar, ikon statis
├── components/      # Komponen UI (Atomic Design)
│   ├── atoms/       # Button, Input, Badge
│   ├── molecules/   # CarCard, DatePicker
│   ├── organisms/   # Navbar, Footer, Hero, BookingForm
│   └── templates/   # MainLayout
├── hooks/           # Custom React Hooks (termasuk React Query hooks)
├── pages/           # Halaman aplikasi (Home)
├── services/        # API calls / Mock Data
├── store/           # Global State Management (Zustand)
├── types/           # TypeScript Interfaces & Types
├── utils/           # Fungsi bantuan (formatting, clsx)
├── App.tsx          # Konfigurasi Routing (React Router DOM)
├── main.tsx         # Entry point & Providers
└── index.css        # Global CSS (Tailwind & Fonts)
```

## 🔄 Alur Pemesanan (Booking Flow)

1. **Eksplorasi (Hero & Car List):**
   - Pengguna mendarat di halaman utama (Hero Section) yang menampilkan *value proposition* elegan.
   - Pengguna menggulir ke bawah untuk melihat daftar mobil premium yang tersedia (Car List).

2. **Pemilihan Mobil:**
   - Pengguna melihat detail singkat mobil (nama, harga per hari, spesifikasi dasar).
   - Pengguna mengklik tombol "Book Now" pada mobil yang diinginkan.

3. **Pengisian Form Pemesanan (Booking Modal):**
   - Sebuah modal/drawer elegan muncul.
   - *Global State* (Zustand) menyimpan data mobil yang dipilih.
   - Pengguna mengisi detail:
     - Tanggal Pengambilan (Pick-up Date)
     - Tanggal Pengembalian (Drop-off Date)
     - Lokasi Pengambilan
     - Informasi Kontak (Nama, Email, Telepon)
   - Sistem akan menghitung total harga secara otomatis berdasarkan durasi sewa.

4. **Konfirmasi:**
   - Pengguna mengklik "Confirm Booking".
   - Sistem (simulasi via React Query mutation) memproses pemesanan.
   - Pesan sukses muncul, dan modal tertutup.

## 🛠️ Tech Stack
- **Framework:** React 19 + TypeScript (Strict Mode)
- **Styling:** Tailwind CSS v4
- **Icons:** `lucide-react`
- **Routing:** `react-router-dom`
- **Data Fetching:** `@tanstack/react-query`
- **State Management:** `zustand`
- **Animations:** `motion`
- **Utilities:** `clsx`, `tailwind-merge`, `date-fns`
