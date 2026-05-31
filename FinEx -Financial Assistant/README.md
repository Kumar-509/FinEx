# FinEx — Streamlined Finance Manager

A modern, production-ready financial dashboard built with React, Vite, Tailwind CSS, and Recharts. Features dark/light mode, realistic UI components, and modular architecture ready for backend integration.

## Features

- **8 Real-world Screens**: Dashboard, My Accounts, Cards, Budgets, Insights, Transactions, Wallet, Profile
- **Light/Dark Mode Toggle**: Persistent theme with system preference detection
- **Realistic UI**: Authentic credit cards, bank data, market tickers, financial charts
- **Modular Components**: Easy to connect to real APIs (Node.js/Python)
- **TypeScript**: Full type safety across the codebase
- **Responsive**: Mobile-friendly layouts

## Tech Stack

- React 19 + Vite 7
- TypeScript 5
- Tailwind CSS 4
- Recharts (charts)
- Lucide React (icons)

## Quick Start

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Backend Integration

Replace the mock API in `src/lib/mockApi.ts` with real endpoints:

```typescript
// Example: Replace mockAccounts with fetch
export const api = {
  getAccounts: async (): Promise<Account[]> => {
    const res = await fetch('/api/accounts');
    return res.json();
  },
  // ...
};
```

## Project Structure

```
src/
├── components/
│   ├── Sidebar.tsx      # Navigation with workspace switcher
│   ├── Topbar.tsx       # Minimal search bar
│   ├── Dashboard.tsx    # KPI cards + cash flow + pie chart + activity
│   ├── Accounts.tsx     # Bank accounts with sparklines
│   ├── Cards.tsx        # 3D credit cards with freeze toggle
│   ├── Budgets.tsx      # Budget tracking with charts
│   ├── Insights.tsx     # AI-powered financial insights
│   ├── Transactions.tsx # Transaction ledger
│   ├── Wallet.tsx       # Multi-currency wallet
│   └── Profile.tsx      # User profile + settings
├── lib/
│   ├── theme.tsx        # Light/dark mode context
│   └── mockApi.ts       # Simulated backend
└── index.css            # Theme-aware styling
```

## License

MIT