import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";
import Accounts from "./components/Accounts";
import Cards from "./components/Cards";
import Budgets from "./components/Budgets";
import Insights from "./components/Insights";
import Transactions from "./components/Transactions";
import Wallet from "./components/Wallet";
import Profile from "./components/Profile";

const titles: Record<string, { title: string; subtitle: string }> = {
  dashboard: { title: "Dashboard", subtitle: "Your financial snapshot at a glance" },
  accounts: { title: "My Accounts", subtitle: "Manage your linked accounts and balances" },
  cards: { title: "My Accounts with Cards", subtitle: "Physical and virtual cards at your fingertips" },
  budgets: { title: "Monthly Budgets", subtitle: "Stay on track with smart spending limits" },
  insights: { title: "Financial Insights", subtitle: "AI-powered analysis to grow your wealth" },
  transactions: { title: "Transaction History", subtitle: "Review and filter every movement" },
  wallet: { title: "My Wallet", subtitle: "Multi-currency wallet and recent activity" },
  profile: { title: "User Profile", subtitle: "Personal details, security and preferences" },
};

export default function App() {
  const [active, setActive] = useState("dashboard");
  const page = titles[active];

  return (
    <div className="min-h-screen bg-[#0b0f14] text-white flex">
      <Sidebar active={active} setActive={setActive} />
      <main className="flex-1 flex flex-col min-w-0">
        <Topbar title={page.title} subtitle={page.subtitle} />
        <div className="flex-1 overflow-y-auto bg-[#0b0f14]">
          {active === "dashboard" && <Dashboard />}
          {active === "accounts" && <Accounts />}
          {active === "cards" && <Cards />}
          {active === "budgets" && <Budgets />}
          {active === "insights" && <Insights />}
          {active === "transactions" && <Transactions />}
          {active === "wallet" && <Wallet />}
          {active === "profile" && <Profile />}
        </div>
      </main>
    </div>
  );
}
