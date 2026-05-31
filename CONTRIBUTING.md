# Contributing to FinEx

Thank you for considering contributing to FinEx! We appreciate your interest in helping us build a better financial dashboard application.

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)
- [Questions](#questions)

## Code of Conduct

### Our Pledge
We are committed to providing a welcoming and inspiring community for all. Please read and respect our [Code of Conduct](CODE_OF_CONDUCT.md).

## Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm 9 or higher (or yarn)
- Git
- GitHub account

### Fork & Clone
```bash
# Fork the repository on GitHub
# Clone your fork
git clone https://github.com/YOUR-USERNAME/FinEx.git
cd FinEx

# Add upstream remote
git remote add upstream https://github.com/Kumar-509/FinEx.git
```

## Development Setup

### Initial Setup
```bash
# Install dependencies
cd "FinEx -Financial Assistant"
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173/
```

### Project Structure
```
FinEx -Financial Assistant/
├── src/
│   ├── components/     # React components
│   ├── lib/           # Utilities and themes
│   ├── utils/         # Helper functions
│   ├── App.tsx        # Main app component
│   ├── main.tsx       # Entry point
│   └── index.css      # Global styles
├── package.json       # Dependencies
├── vite.config.ts    # Vite configuration
└── tsconfig.json     # TypeScript configuration
```

## Making Changes

### Create Feature Branch
```bash
# Update main branch
git fetch upstream
git checkout main
git merge upstream/main

# Create feature branch
git checkout -b feature/your-feature-name
```

### Code Style Guidelines

#### TypeScript
- Use TypeScript strictly (no `any` types)
- Use interfaces for type definitions
- Use meaningful variable names
- Add type annotations to function parameters and returns

```typescript
// Good
interface Account {
  id: number;
  name: string;
  balance: number;
}

const getBalance = (account: Account): number => {
  return account.balance;
};

// Avoid
const getBalance = (account: any) => {
  return account.balance;
};
```

#### React Components
- Use functional components with hooks
- Props should be typed with interfaces
- Use meaningful component names
- Keep components focused and reusable

```typescript
interface CardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, value, icon }) => {
  return (
    <div className="card">
      {icon}
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};
```

#### CSS/Tailwind
- Use Tailwind CSS utility classes
- Avoid writing custom CSS when possible
- Use responsive design patterns (mobile-first)
- Follow dark mode conventions

```tsx
// Good
<div className="p-4 md:p-6 lg:p-8 bg-white dark:bg-gray-900">
  <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Title</h1>
</div>

// Avoid inline styles
<div style={{ padding: '16px' }}>...</div>
```

### Running Tests
```bash
# Currently: No tests configured
# Testing setup coming soon
# npm run test
```

### Code Review Checklist
Before submitting, ensure:
- ✅ Code follows project style guidelines
- ✅ No console warnings or errors
- ✅ TypeScript types are correct
- ✅ Component is responsive (mobile/tablet/desktop)
- ✅ Dark mode styling works
- ✅ No unused imports or variables
- ✅ Comments added for complex logic
- ✅ Commit messages are clear and descriptive

## Commit Guidelines

### Commit Message Format
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, semicolons, etc.)
- `refactor`: Code refactoring without changing functionality
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Build/dependency updates, CI/CD changes
- `ci`: CI/CD configuration changes

### Scope
The scope specifies what part of the codebase is affected:
- `dashboard`, `accounts`, `cards`, `budgets`, `insights`, `transactions`, `wallet`, `profile`
- `theme`, `api`, `types`, `styles`, `build`, `ci`

### Subject
- Use imperative mood ("add feature" not "added feature")
- Don't capitalize first letter
- No period at the end
- Limit to 50 characters

### Body
- Explain what and why, not how
- Wrap at 72 characters
- Separate from subject with blank line
- Use bullet points for multiple changes

### Footer
- Reference issues: `Closes #123`
- Reference related PRs: `Related-to #456`
- Breaking changes: `BREAKING CHANGE: description`

### Examples

**Good**:
```
feat(dashboard): add real-time balance updates

- Integrated WebSocket for live account balance updates
- Added loading indicator during balance refresh
- Improved UX with smooth transitions

Closes #123
```

**Good**:
```
fix(cards): resolve card freeze toggle bug

Fixed issue where card freeze state wasn't persisting
after page refresh.

Closes #456
```

## Pull Request Process

### Before Submitting
1. Update your branch with latest main:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. Run your code locally:
   ```bash
   npm run dev
   npm run build
   ```

3. Make sure everything works

### Submitting PR
1. Push your branch to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

2. Create PR on GitHub with:
   - Clear title describing changes
   - Description using PR template
   - Link to related issues
   - Screenshots if UI changes

3. Respond to review comments:
   - Don't force push after PR creation (makes review history confusing)
   - Make new commits addressing feedback
   - Request re-review once changes are complete

### PR Approval Process
- ✅ Code review by maintainers
- ✅ All checks passing (build, type checking)
- ✅ Approval from at least one maintainer
- ✅ Rebased on main branch before merge
- ✅ Merge with "Squash and merge" or "Create a merge commit"

## Reporting Bugs

### Before Submitting
- Search existing issues to avoid duplicates
- Try to reproduce the bug locally
- Gather environment information

### Bug Report Includes
- Clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Environment details (browser, OS, Node version)
- Console errors if any

**Use the bug report template**: Click "New Issue" → "Bug Report"

## Suggesting Features

### Before Submitting
- Search existing feature requests
- Check project roadmap
- Consider if it aligns with project goals

### Feature Request Includes
- Clear description of the feature
- Why it's needed
- How it should work
- Real-world use cases
- Alternative approaches considered

**Use the feature request template**: Click "New Issue" → "Feature Request"

## Development Workflow

### Workflow Example

```bash
# 1. Fork and clone
git clone https://github.com/YOUR-USERNAME/FinEx.git
cd FinEx

# 2. Add upstream
git remote add upstream https://github.com/Kumar-509/FinEx.git

# 3. Create feature branch
git checkout -b feature/awesome-feature

# 4. Install and start dev
cd "FinEx -Financial Assistant"
npm install
npm run dev

# 5. Make changes, test locally
# ... edit files ...

# 6. Commit changes
git add .
git commit -m "feat(dashboard): add awesome feature"

# 7. Push to your fork
git push origin feature/awesome-feature

# 8. Create PR on GitHub

# 9. Address review feedback
git add .
git commit -m "refactor: address review feedback"
git push origin feature/awesome-feature

# 10. Merge (handled by maintainer)
```

## Questions & Support

### Getting Help
- **GitHub Issues**: Bug reports and feature requests
- **Discussions**: Questions and general discussion
- **Email**: 237r5a0509@cmrtc.ac.in

### Documentation
- [Project Analysis](PROJECT_ANALYSIS.md)
- [GitHub Setup Guide](GITHUB_SETUP_GUIDE.md)
- [README](FinEx%20-Financial%20Assistant/README.md)

## Recognition

Contributors will be recognized in:
- GitHub contributors section
- Release notes
- Project documentation

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to FinEx! 🎉**

We're excited to have you as part of the community.
