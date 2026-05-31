import { Plus, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const budgets = [
  {
    category: "Housing",
    subcategory: "Rent & Utilities",
    spent: 1600,
    limit: 1800,
    color: "bg-violet-500",
    tint: "from-violet-500/20 to-violet-500/0",
    tile: "🏠",
    tileBg: "bg-indigo-800",
  },
  {
    category: "Food & Dining",
    subcategory: "Groceries, Restaurants",
    spent: 920,
    limit: 1200,
    color: "bg-emerald-500",
    tint: "from-emerald-500/20 to-emerald-500/0",
    tile: "🍽️",
    tileBg: "bg-emerald-800",
  },
  {
    category: "Transportation",
    subcategory: "Fuel, Rideshare, Transit",
    spent: 420,
    limit: 600,
    color: "bg-cyan-500",
    tint: "from-cyan-500/20 to-cyan-500/0",
    tile: "🚗",
    tileBg: "bg-sky-800",
  },
  {
    category: "Shopping",
    subcategory: "Apparel, Electronics",
    spent: 780,
    limit: 800,
    color: "bg-amber-500",
    tint: "from-amber-500/20 to-amber-500/0",
    tile: "🛍️",
    tileBg: "bg-amber-800",
  },
  {
    category: "Entertainment",
    subcategory: "Streaming, Events",
    spent: 310,
    limit: 500,
    color: "bg-rose-500",
    tint: "from-rose-500/20 to-rose-500/0",
    tile: "🎬",
    tileBg: "bg-rose-800",
  },
  {
    category: "Savings",
    subcategory: "Emergency fund",
    spent: 2500,
    limit: 3000,
    color: "bg-sky-500",
    tint: "from-sky-500/20 to-sky-500/0",
    tile: "💰",
    tileBg: "bg-teal-800",
  },
];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
const spendByMonth = [2800, 3100, 2600, 3300, 3000, 3500, 3200, 3480];
const budgetByMonth = [3500, 3500, 3500, 3800, 3800, 4000, 4000, 4000];

export default function Budgets() {
  const [view, setView] = useState("Monthly");
  const totalBudget = budgets.reduce((s, b) => s + b.limit, 0);
  const totalSpent = budgets.reduce((s, b) => s + b.spent, 0);
  const overall = Math.round((totalSpent / totalBudget) * 100);

  return (
    <div className="p-8 space-y-5">
      {/* Toolbar */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-lg border border-slate-800 bg-slate-900/60 text-[12.5px] overflow-hidden">
            {["Monthly", "Quarterly", "Yearly"].map((v, i) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-3 py-1.5 ${
                  view === v
                    ? "bg-white/[0.06] text-white ring-1 ring-inset ring-white/10 font-medium"
                    : "text-slate-400 hover:text-white"
                } ${i > 0 ? "border-l border-slate-800" : ""}`}
              >
                {v}
              </button>
            ))}
          </div>
          <div className="h-6 w-px bg-slate-800" />
          <span className="text-[12.5px] text-slate-400">
            August 2025 · {budgets.length} active budgets
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-white text-[12.5px] font-medium px-3 py-2 rounded-lg">
            Export report
          </button>
          <button className="flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-cyan-500 text-[#0b0f14] text-[12.5px] font-semibold px-3 py-2 rounded-lg">
            <Plus className="w-3.5 h-3.5" /> New budget
          </button>
        </div>
      </div>

      {/* Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#11151c] border border-slate-800/70 rounded-xl p-5">
          <p className="text-[11.5px] text-slate-400">Total budget</p>
          <p className="text-[26px] font-semibold text-white mt-1.5 tracking-tight tabular-nums">
            ${totalBudget.toLocaleString()}
          </p>
          <div className="mt-3 flex items-center gap-2 text-[12px] text-emerald-400">
            <TrendingUp className="w-3.5 h-3.5" /> Planned vs actual
          </div>
        </div>
        <div className="bg-[#11151c] border border-slate-800/70 rounded-xl p-5">
          <p className="text-[11.5px] text-slate-400">Spent this month</p>
          <p className="text-[26px] font-semibold text-white mt-1.5 tracking-tight tabular-nums">
            ${totalSpent.toLocaleString()}
          </p>
          <p className="text-[11.5px] text-slate-500 mt-3">{overall}% of budget used</p>
        </div>
        <div className="bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-transparent border border-emerald-500/30 rounded-xl p-5">
          <p className="text-[11.5px] text-emerald-300">Remaining</p>
          <p className="text-[26px] font-semibold text-white mt-1.5 tracking-tight tabular-nums">
            ${(totalBudget - totalSpent).toLocaleString()}
          </p>
          <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400"
              style={{ width: `${100 - overall}%` }}
            />
          </div>
        </div>
      </div>

      {/* Bar chart */}
      <div className="bg-[#11151c] border border-slate-800/70 rounded-xl p-5">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="text-[14px] font-semibold text-white">Spending vs. Budget</h3>
            <p className="text-[12px] text-slate-500 mt-0.5">Last 8 months</p>
          </div>
          <div className="flex items-center gap-4 text-[11.5px] text-slate-400">
            <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-sm bg-slate-700" /> Budget</span>
            <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-sm bg-gradient-to-b from-emerald-400 to-cyan-400" /> Spent</span>
          </div>
        </div>
        <div className="flex items-end gap-2 md:gap-3 h-52">
          {months.map((m, i) => {
            const max = Math.max(...budgetByMonth);
            const spendH = (spendByMonth[i] / max) * 100;
            const budgetH = (budgetByMonth[i] / max) * 100;
            return (
              <div key={m} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex items-end justify-center gap-1 h-44">
                  <div className="w-3.5 md:w-4 bg-slate-700 rounded-t-md relative group" style={{ height: `${budgetH}%` }}>
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-slate-500 opacity-0 group-hover:opacity-100 whitespace-nowrap">
                      ${budgetByMonth[i]}
                    </span>
                  </div>
                  <div
                    className="w-3.5 md:w-4 bg-gradient-to-t from-emerald-500 to-cyan-400 rounded-t-md"
                    style={{ height: `${spendH}%` }}
                  />
                </div>
                <span className="text-[11.5px] text-slate-400">{m}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Budgets grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {budgets.map((b) => {
          const pct = Math.round((b.spent / b.limit) * 100);
          const warn = pct >= 90 && pct < 100;
          const over = pct >= 100;
          return (
            <div
              key={b.category}
              className="bg-[#11151c] border border-slate-800/70 rounded-xl p-5 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-lg ${b.tileBg} flex items-center justify-center text-white text-lg ring-1 ring-white/10`}
                >
                  {b.tile}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-[13.5px] text-white font-semibold truncate">
                      {b.category}
                    </p>
                    {over && (
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                    )}
                    {!over && pct >= 85 && (
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                    )}
                    {!over && pct < 85 && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    )}
                  </div>
                  <p className="text-[11.5px] text-slate-500 truncate">{b.subcategory}</p>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[20px] font-semibold text-white tabular-nums">
                    ${b.spent.toLocaleString()}
                  </span>
                  <span className="text-[12px] text-slate-500 tabular-nums">
                    / ${b.limit.toLocaleString()}
                  </span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-800 mt-3 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      over ? "bg-rose-500" : warn ? "bg-amber-500" : b.color
                    }`}
                    style={{ width: `${Math.min(pct, 100)}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[11.5px] mt-2">
                  <span className="text-slate-500">
                    ${(b.limit - b.spent).toLocaleString()} remaining
                  </span>
                  <span
                    className={`font-semibold tabular-nums ${
                      over ? "text-rose-400" : warn ? "text-amber-400" : "text-emerald-400"
                    }`}
                  >
                    {pct}%
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
