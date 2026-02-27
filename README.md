# LuxeDrive - Premium Car Rental Landing Page

LuxeDrive adalah website penyewaan mobil dengan desain elegan, modern, dan estetik. Dirancang khusus untuk memberikan pengalaman pemesanan yang cepat, mudah, dan premium dengan tampilan yang padat informasi namun tetap rapi.

## 🎨 Desain Sistem

### 1. Tipografi (Font)
- **Display Font (Headings):** `Poppins` (Serif-like usage) - Memberikan sentuhan elegan, mewah, dan modern pada judul atau elemen penting.
- **Primary Font (Body & UI):** `Roboto` (Sans-serif) - Memberikan kesan bersih, profesional, dan sangat mudah dibaca pada ukuran kecil maupun besar untuk detail spesifikasi.

### 2. Palet Warna (Color Palette)
Desain menggunakan pendekatan monokromatik dengan sedikit aksen untuk menjaga kesan minimalis dan *high-end*.
- **Primary (Teks Utama & Tombol):** `Zinc-900` (#18181b) - Hitam pekat yang elegan.
- **Background Utama:** `Zinc-50` (#fafafa) - Putih tulang/abu-abu sangat muda yang lembut di mata.
- **Secondary/Muted Text:** `Zinc-500` (#71717a) - Untuk teks pendukung atau deskripsi.
- **Borders/Dividers:** `Zinc-200` (#e4e4e7) - Garis pemisah yang halus.
- **Aksen:** Warna-warna lembut (merah, biru, ungu, zamrud) digunakan secara selektif pada ikon, *badge*, dan bagian promo untuk menarik perhatian tanpa merusak estetika.

### 3. Struktur Layout (Atomic Design)
Aplikasi dibangun menggunakan pendekatan *Atomic Design* dan *Clean Architecture* untuk skalabilitas:
- **Atoms:** Komponen dasar yang tidak bisa dipecah lagi (`Button`, `Input`).
- **Molecules:** Gabungan beberapa atom (`CarCard`).
- **Organisms:** Bagian UI yang kompleks dan mandiri (`Navbar`, `HeroSection`, `PromoSection`, `CarList`, `FeaturesSection`, `BookingModal`, `Footer`).
- **Templates:** Struktur halaman tanpa konten spesifik (`MainLayout`).
- **Pages:** Halaman utuh yang menggabungkan template dengan data (`Home`).

## 🌟 Fitur & Seksi Halaman

1. **Navbar Elegan:** Dilengkapi dengan ikon menu, tombol aksi (Sign In/Register), indikator promo berkedip (ping), dan animasi *slide-down* saat dimuat. Tersedia juga menu responsif untuk mobile.
2. **Hero Section Dinamis:** Menggunakan *split layout* pada desktop. Menampilkan *value proposition* dengan tipografi besar, tombol *Call to Action*, dan *glassmorphism card* yang menonjolkan 4 keunggulan utama layanan.
3. **Promo & Events:** Menampilkan penawaran eksklusif dalam bentuk kartu beraksen warna-warni yang estetik, lengkap dengan kode promo dan masa berlaku.
4. **Our Exclusive Fleet (Car List):** 
   - Menampilkan daftar mobil mewah dalam grid 4 kolom yang padat (*dense*) pada layar besar.
   - Kartu mobil (`CarCard`) didesain sangat detail dan *compact*, menampilkan: Brand, Tahun, Nama Mobil, Harga per Hari, Jumlah Kursi, Transmisi, Horsepower (HP), dan Tipe Bahan Bakar.
   - Dilengkapi *badge* status ketersediaan dan animasi *hover* yang interaktif.
5. **Why Choose Us (Features):** Seksi dengan latar belakang gelap yang elegan, menonjolkan standar kualitas layanan (Premium Quality, Anywhere Delivery, 24/7 Support, Secure Booking).
6. **Booking Modal:** Drawer/Modal pemesanan yang komprehensif. Menghitung total harga secara otomatis berdasarkan tanggal pengambilan dan pengembalian.

## 📂 Struktur Direktori

```text
/src
├── components/      # Komponen UI (Atomic Design)
│   ├── atoms/       # Button.tsx, Input.tsx
│   ├── molecules/   # CarCard.tsx
│   ├── organisms/   # Navbar.tsx, HeroSection.tsx, PromoSection.tsx, CarList.tsx, FeaturesSection.tsx, BookingModal.tsx, Footer.tsx
│   └── templates/   # MainLayout.tsx
├── pages/           # Halaman aplikasi (Home.tsx)
├── services/        # API calls / Mock Data (api.ts)
├── store/           # Global State Management (useBookingStore.ts)
├── types/           # TypeScript Interfaces & Types (index.ts)
├── utils/           # Fungsi bantuan (cn.ts)
├── App.tsx          # Konfigurasi Routing (React Router DOM)
├── main.tsx         # Entry point & Providers (QueryClientProvider)
└── index.css        # Global CSS (Tailwind & Fonts)
```

## 🔄 Alur Pemesanan (Booking Flow)

1. **Eksplorasi:** Pengguna mendarat di halaman utama, melihat penawaran promo, dan menggulir ke bagian "Our Exclusive Fleet".
2. **Pemilihan Mobil:** Pengguna melihat spesifikasi detail mobil (termasuk HP dan Tahun) pada grid yang padat. Pengguna mengklik tombol "Book Now" pada mobil yang diinginkan.
3. **Pengisian Form Pemesanan:**
   - Modal elegan muncul menampilkan detail mobil di sisi kiri dan form di sisi kanan.
   - Pengguna mengisi: Tanggal Pengambilan, Tanggal Pengembalian, Lokasi, Nama, Email, dan Telepon.
   - Sistem secara otomatis memvalidasi tanggal dan menghitung total harga sewa.
4. **Konfirmasi:**
   - Pengguna mengklik "Confirm Booking".
   - Sistem memproses pemesanan (simulasi via React Query mutation).
   - Pesan sukses dengan ikon centang hijau muncul, menggantikan form pemesanan.

## 🛠️ Tech Stack
- **Framework:** React 19 + TypeScript (Strict Mode)
- **Styling:** Tailwind CSS v4
- **Icons:** `lucide-react`
- **Routing:** `react-router-dom`
- **Data Fetching:** `@tanstack/react-query`
- **State Management:** `zustand`
- **Animations:** `motion/react`
- **Utilities:** `clsx`, `tailwind-merge`, `date-fns`

