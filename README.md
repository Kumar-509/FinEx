# 💰 FinEx - Streamlined Finance Manager

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-Kumar--509%2FFinEx-blue?logo=github)](https://github.com/Kumar-509/FinEx)
[![React](https://img.shields.io/badge/React-19.2.6-61DAFB?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7.3.2-646CFF?logo=vite)](https://vitejs.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)](https://github.com/Kumar-509/FinEx)

A **modern, production-ready financial dashboard** built with React, Vite, and Tailwind CSS. Features dark/light mode, realistic UI components, and modular architecture ready for backend integration.

[View Application](#quick-start) • [Documentation](#documentation) • [Contributing](#contributing) • [Deploy](#deployment)

</div>

---

## ✨ Features

### 🎯 8 Real-World Screens
- **Dashboard** - Financial snapshot with KPIs and cash flow visualization
- **My Accounts** - Manage linked bank accounts with balance tracking
- **Cards** - 3D credit cards with freeze/unfreeze functionality
- **Budgets** - Smart budget tracking with visual progress indicators
- **Insights** - AI-powered financial analytics and recommendations
- **Transactions** - Complete transaction history with advanced filtering
- **Wallet** - Multi-currency support with live exchange rates
- **Profile** - User settings and preferences management

### 🎨 Modern UI/UX
- ✅ **Light/Dark Mode** - Persistent theme with system preference detection
- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **Realistic Components** - Authentic financial UI patterns
- ✅ **Smooth Animations** - Modern, polished interactions
- ✅ **Accessibility** - Semantic HTML and keyboard navigation

### 🛠️ Developer-Friendly
- ✅ **TypeScript** - Full type safety and IntelliSense
- ✅ **Component Library** - Modular, reusable components
- ✅ **Mock API** - Ready for real backend integration
- ✅ **Zero Config** - Vite with pre-configured setup
- ✅ **Tailwind CSS** - Utility-first styling with dark mode

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0+ 
- npm 9+ (or yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/Kumar-509/FinEx.git
cd FinEx

# Navigate to project directory
cd "FinEx -Financial Assistant"

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. The application will automatically reload as you make changes.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📚 Documentation

| Document | Description |
|----------|-------------|
| [PROJECT_ANALYSIS.md](PROJECT_ANALYSIS.md) | Comprehensive technical analysis, features, and architecture |
| [GITHUB_SETUP_GUIDE.md](GITHUB_SETUP_GUIDE.md) | GitHub configuration, CI/CD workflows, and deployment guide |
| [CONTRIBUTING.md](CONTRIBUTING.md) | Contributing guidelines, code style, and development workflow |
| [SETUP_SUMMARY.md](SETUP_SUMMARY.md) | Complete project setup summary and next steps |

---

## 🏗️ Project Structure

```
FinEx/
├── .github/
│   ├── workflows/                    # CI/CD Workflows
│   │   ├── build.yml                # Build & Test pipeline
│   │   ├── deploy-vercel.yml        # Vercel deployment
│   │   └── deploy-github-pages.yml  # GitHub Pages deployment
│   ├── ISSUE_TEMPLATE/               # Issue templates
│   └── pull_request_template.md      # PR template
├── .gitignore                        # Git ignore patterns
├── CONTRIBUTING.md                   # Contribution guidelines
├── PROJECT_ANALYSIS.md               # Technical documentation
├── GITHUB_SETUP_GUIDE.md             # Setup & deployment guide
├── SETUP_SUMMARY.md                  # Setup summary
└── FinEx -Financial Assistant/
    ├── src/
    │   ├── components/               # React components (8 screens)
    │   ├── lib/                      # Theme & Mock API
    │   ├── utils/                    # Utility functions
    │   ├── App.tsx                   # Main application
    │   └── index.css                 # Global styles
    ├── package.json                  # Dependencies
    ├── vite.config.ts               # Vite configuration
    └── tsconfig.json                # TypeScript configuration
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **UI Framework** | React 19.2.6 |
| **Build Tool** | Vite 7.3.2 |
| **Language** | TypeScript 5.9.3 |
| **Styling** | Tailwind CSS 4.1.17 |
| **Charts** | Recharts 3.8.1 |
| **Icons** | Lucide React 1.17.0 |
| **Package Manager** | npm/yarn |

---

## 🚀 Available Scripts

### Development
```bash
npm run dev       # Start Vite dev server
```

### Building
```bash
npm run build     # Create production build
npm run preview   # Preview production build locally
```

---

## 🔄 Backend Integration

The application uses mock data in `src/lib/mockApi.ts`. To connect a real backend:

```typescript
// src/lib/mockApi.ts
export const getAccounts = async () => {
  const res = await fetch('/api/accounts');
  return res.json();
};
```

### Recommended Backend Stacks
- **Node.js**: Express.js, NestJS, Fastify
- **Python**: FastAPI, Django REST Framework
- **Java**: Spring Boot
- **Go**: Gin, Echo

---

## 📦 Deployment

### 1. Vercel (Recommended) ⭐
```bash
npm install -g vercel
vercel --prod
```

### 2. GitHub Pages
```bash
npm run build
# Configure in repository settings
```

### 3. Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir dist
```

### 4. Docker
```bash
docker build -t finex .
docker run -p 5173:5173 finex
```

See [GITHUB_SETUP_GUIDE.md](GITHUB_SETUP_GUIDE.md) for detailed deployment instructions.

---

## 🤝 Contributing

We welcome contributions! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, development process, and how to submit pull requests.

### Quick Start for Contributors
```bash
# Create feature branch
git checkout -b feature/your-feature

# Make changes and commit
git commit -m "feat: your feature description"

# Push and create PR
git push origin feature/your-feature
```

---

## 📋 GitHub Workflows

### Build & Test
Automatically runs on every push and PR to verify code quality.

### Deploy to Vercel
Automatically deploys main branch to Vercel production.

### Deploy to GitHub Pages
Alternative deployment option to GitHub Pages.

See [GITHUB_SETUP_GUIDE.md](GITHUB_SETUP_GUIDE.md#github-actions-workflows) for workflow details.

---

## 🐛 Bug Reports & Feature Requests

### Report a Bug
1. Check existing [issues](https://github.com/Kumar-509/FinEx/issues)
2. Click "New Issue" → "Bug Report"
3. Fill out the template with details

### Request a Feature
1. Check [feature requests](https://github.com/Kumar-509/FinEx/issues?q=label%3Aenhancement)
2. Click "New Issue" → "Feature Request"
3. Describe your idea and use cases

---

## 🔐 Security

- ✅ TypeScript for type safety
- ✅ No hardcoded credentials
- ✅ Environment variables for configuration
- ✅ Regular dependency audits

For security concerns, please email: 237r5a0509@cmrtc.ac.in

---

## 📈 Roadmap

### Planned Features
- [ ] Real backend API integration
- [ ] User authentication & authorization
- [ ] Real-time data synchronization
- [ ] Advanced analytics and reporting
- [ ] Mobile application (React Native)
- [ ] Desktop application (Electron)
- [ ] API integrations (Plaid, Stripe, etc.)
- [ ] Enhanced notifications system
- [ ] Unit & E2E test coverage
- [ ] GraphQL API support

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Kumar**
- GitHub: [@Kumar-509](https://github.com/Kumar-509)
- Email: 237r5a0509@cmrtc.ac.in

---

## 🙏 Acknowledgments

- [React](https://react.dev) - UI library
- [Vite](https://vitejs.dev) - Build tool
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Recharts](https://recharts.org) - Charts
- [Lucide](https://lucide.dev) - Icons

---

## 📞 Support

- 📖 [Documentation](PROJECT_ANALYSIS.md)
- 🐛 [Report Issues](https://github.com/Kumar-509/FinEx/issues)
- 💡 [Feature Requests](https://github.com/Kumar-509/FinEx/issues/new?template=feature_request.md)
- 🚀 [Deployment Guide](GITHUB_SETUP_GUIDE.md)

---

<div align="center">

### Made with ❤️ by [Kumar](https://github.com/Kumar-509)

⭐ If you find this project helpful, please star it on GitHub!

[⬆ Back to top](#-finex---streamlined-finance-manager)

</div>
