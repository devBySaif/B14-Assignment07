# বাজার দর — BazarDor

**BazarDor** is a Bengali-first market price guide for everyday groceries in Bangladesh. It helps shoppers check current prices, follow market trends, and compare product prices across local markets.

## Technologies

- **Next.js 16** with the App Router
- **React 19** and **TypeScript**
- **Tailwind CSS 4**
- **Better Auth** for email/password and optional Google and GitHub sign-in
- **MongoDB** for authentication data and persistent deployment storage.
- **Lucide React** icons and **React Hot Toast** notifications

## Key Features

1. **Bengali-first shopping experience** with Bengali dates, numerals, and responsive navigation.
2. **Market price trends** highlighting products whose prices have risen or fallen.
3. **Product and category browsing** with responsive cards and price sorting.
4. **Market-by-market product details** showing minimum, maximum, and average prices.
5. **Accounts and resilient catalog access** with email or social sign-in, profile management, and a saved catalog snapshot when live sources are unavailable.

## Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env.local` and set `BETTER_AUTH_SECRET`. Local development creates a SQLite database automatically. Google and GitHub sign-in are optional; configure their client ID and secret in `.env.local` to enable them.
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000).

For Vercel deployments, configure `MONGODB_URI` and `BETTER_AUTH_SECRET` in the project environment. Set `BETTER_AUTH_URL` and `NEXT_PUBLIC_APP_URL` to the deployed app URL. Configure each OAuth provider's callback URL for that deployment as well.
