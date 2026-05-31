import {
  LayoutDashboard,
  Wallet,
  CreditCard,
  PiggyBank,
  TrendingUp,
  History,
  User,
  Settings,
  LogOut,
  BadgeDollarSign,
  HelpCircle,
  Sparkles,
  Image as ImageIcon,
} from "lucide-react";

interface SidebarProps {
  active: string;
  setActive: (s: string) => void;
}

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "accounts", label: "My Accounts", icon: Wallet },
  { id: "cards", label: "Cards", icon: CreditCard },
  { id: "budgets", label: "Budgets", icon: PiggyBank },
  { id: "insights", label: "Insights", icon: TrendingUp, badge: "AI" },
  { id: "transactions", label: "Transactions", icon: History },
  { id: "wallet", label: "Wallet", icon: BadgeDollarSign },
  { id: "profile", label: "Profile", icon: User },
];

export default function Sidebar({ active, setActive }: SidebarProps) {
  return (
    <aside className="w-64 bg-[#0f1419] border-r border-slate-800/70 flex flex-col min-h-screen">
      {/* Brand */}
      <div className="px-6 pt-6 pb-5 border-b border-slate-800/70">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#0b0f14]" fill="currentColor">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-white text-[15px] font-semibold leading-none tracking-tight">FinEx</p>
            <p className="text-slate-500 text-[11px] mt-1">Financial Assistant</p>
          </div>
        </div>
      </div>

      {/* Workspace switcher */}
      <div className="px-4 pt-4 pb-2">
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-800/70 hover:border-slate-700 cursor-pointer">
          <div className="w-6 h-6 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0">
            <ImageIcon className="w-3.5 h-3.5 text-slate-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[12px] text-white font-medium truncate">Personal</p>
            <p className="text-[10px] text-slate-500 truncate">alex.morgan@finex.app</p>
          </div>
          <svg className="w-3.5 h-3.5 text-slate-500" viewBox="0 0 20 20" fill="currentColor"><path d="M5.5 7.5L10 12l4.5-4.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-3 space-y-0.5 overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.14em] text-slate-500 px-3 pt-3 pb-2 font-medium">Main</p>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] transition-colors group ${
                isActive
                  ? "bg-white/[0.06] text-white ring-1 ring-white/10"
                  : "text-slate-400 hover:bg-white/[0.03] hover:text-white"
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? "text-emerald-400" : "text-slate-500 group-hover:text-slate-300"}`} />
              <span className="font-medium flex-1 text-left">{item.label}</span>
              {item.badge && (
                <span className="text-[9px] tracking-wide bg-gradient-to-r from-emerald-400 to-cyan-500 text-[#0b0f14] font-bold px-1.5 py-0.5 rounded">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}

        <p className="text-[10px] uppercase tracking-[0.14em] text-slate-500 px-3 pt-5 pb-2 font-medium">Support</p>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-slate-400 hover:bg-white/[0.03] hover:text-white">
          <HelpCircle className="w-4 h-4 text-slate-500" />
          <span className="font-medium">Help Center</span>
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-slate-400 hover:bg-white/[0.03] hover:text-white">
          <Settings className="w-4 h-4 text-slate-500" />
          <span className="font-medium">Settings</span>
        </button>
      </nav>

      {/* Promo */}
      <div className="px-3 pt-3 pb-4 border-t border-slate-800/70 space-y-3">
        <div className="relative overflow-hidden rounded-xl p-4 bg-gradient-to-br from-emerald-500/15 via-cyan-500/10 to-transparent border border-emerald-500/20">
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-400/20 rounded-full blur-2xl" />
          <Sparkles className="w-4 h-4 text-emerald-400 relative" />
          <p className="text-white text-[12.5px] font-semibold mt-2 relative leading-snug">
            FinEx Pro
          </p>
          <p className="text-slate-400 text-[11px] mt-0.5 relative leading-snug">
            Unlimited accounts & tax reports
          </p>
          <button className="mt-3 w-full bg-white text-[#0b0f14] text-[11px] font-bold py-1.5 rounded-md relative">
            Upgrade
          </button>
        </div>

        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] text-slate-400 hover:bg-white/[0.03] hover:text-white">
          <LogOut className="w-4 h-4 text-slate-500" />
          <span className="font-medium">Log out</span>
        </button>
      </div>
    </aside>
  );
}
