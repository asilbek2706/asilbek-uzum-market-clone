# Uzum Market Clone

Uzum Market Clone — bu Uzum Market uslubidagi internet do'kon interfeysining React, TypeScript va Vite yordamida yaratilgan klon loyihasi. Ilova bosh sahifada bannerlar, promo bloklar va mahsulot kartalarini ko'rsatadi, shuningdek mahsulot sahifasi uchun alohida route ham mavjud.

## Asosiy imkoniyatlar

- bosh sahifada reklama banner slayderi
- promo bo'limlar va kategoriya mahsulotlari ko'rinishi
- mahsulot kartalari va mahsulot detal sahifasi
- `react-router-dom` orqali sahifalararo navigatsiya
- API ishlamagan holatda `fallback` mahsulotlar bilan render qilish
- Tailwind CSS yordamida tezkor UI stillash

## Texnologiyalar

- React 19
- TypeScript
- Vite
- React Router
- Axios
- Tailwind CSS
- Keen Slider

## Loyiha tuzilmasi

```text
src/
├── api/            # API so'rovlari uchun sozlamalar
├── components/     # UI komponentlar
├── data/           # fallback ma'lumotlar
├── layout/         # umumiy layout
├── pages/          # route sahifalari
├── types/          # TypeScript turlari
├── App.tsx         # route konfiguratsiyasi
└── main.tsx        # ilova kirish nuqtasi
```

## Ishga tushirish

### Talablar

- Node.js 20+ tavsiya etiladi
- npm

### O'rnatish

```bash
npm install
```

### Muhit o'zgaruvchilari

Loyiha mahsulotlarni tashqi API orqali oladi. `.env` fayl yarating va quyidagini kiriting:

```env
VITE_API_BASE_URL=https://api.escuelajs.co/api/v1
```

Agar API javob bermasa, ilova `src/data/fallback-products.ts` dagi zaxira ma'lumotlardan foydalanadi.

## Skriptlar

```bash
npm run dev      # development server
npm run build    # production build
npm run lint     # ESLint tekshiruvi
npm run preview  # build natijasini preview qilish
```

## Marshrutlar

- `/` — bosh sahifa
- `/product/:id` — mahsulot sahifasi

## Validatsiya

Quyidagi buyruqlar muvaffaqiyatli ishga tushirildi:

```bash
npm run lint
npm run build
```
