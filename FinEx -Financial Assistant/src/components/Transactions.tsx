import { Download, Filter, Search, ArrowUpRight, ArrowDownLeft, ChevronDown, Calendar } from "lucide-react";
import { useState } from "react";

// Real-world merchant list with brand-style colored tiles
const transactions = [
  {
    date: "Aug 15, 2025",
    merchant: "Whole Foods Market",
    category: "Groceries",
    amount: -84.23,
    tile: "🛒",
    tileBg: "bg-emerald-700",
    status: "Completed",
    account: "Chase ••4829",
    id: "TX-88291034",
  },
  {
    date: "Aug 15, 2025",
    merchant: "Acme Inc. Payroll",
    category: "Income · Salary",
    amount: 4200.0,
    tile: "AC",
    tileBg: "bg-sky-700",
    status: "Completed",
    account: "Chase ••4829",
    id: "TX-88291001",
  },
  {
    date: "Aug 14, 2025",
    merchant: "Uber",
    category: "Transport",
    amount: -22.45,
    tile: "U",
    tileBg: "bg-zinc-900 text-white",
    status: "Completed",
    account: "Visa ••7721",
    id: "TX-88290981",
  },
  {
    date: "Aug 14, 2025",
    merchant: "Netflix",
    category: "Entertainment · Subscription",
    amount: -15.99,
    tile: "N",
    tileBg: "bg-red-700",
    status: "Completed",
    account: "Visa ••7721",
    id: "TX-88290920",
  },
  {
    date: "Aug 14, 2025",
    merchant: "Starbucks",
    category: "Food · Cafe",
    amount: -6.75,
    tile: "★",
    tileBg: "bg-emerald-800",
    status: "Completed",
    account: "Visa ••7721",
    id: "TX-88290870",
  },
  {
    date: "Aug 13, 2025",
    merchant: "Landlord Properties LLC",
    category: "Housing · Rent",
    amount: -1600.0,
    tile: "🏠",
    tileBg: "bg-indigo-800",
    status: "Completed",
    account: "Chase ••4829",
    id: "TX-88290610",
  },
  {
    date: "Aug 12, 2025",
    merchant: "Apple Store",
    category: "Shopping · Electronics",
    amount: -249.0,
    tile: "",
    tileBg: "bg-zinc-800",
    status: "Pending",
    account: "Mastercard ••9944",
    id: "TX-88290402",
  },
  {
    date: "Aug 11, 2025",
    merchant: "Freelance · Contoso Ltd.",
    category: "Income · Contract",
    amount: 1250.0,
    tile: "C",
    tileBg: "bg-amber-700",
    status: "Completed",
    account: "BofA ••1203",
    id: "TX-88290221",
  },
];

const filters = ["All transactions", "Income", "Expenses", "Pending", "Recurring"];

export default function Transactions() {
  const [active, setActive] = useState(0);
  return (
    <div className="p-8 space-y-5">
      {/* Summary KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: "Total transactions", value: "248", sub: "+36 this month", color: "text-slate-200" },
          { label: "Total inflow", value: "$6,450.00", sub: "12 credits", color: "text-emerald-400" },
          { label: "Total outflow", value: "$3,480.20", sub: "86 debits", color: "text-rose-400" },
        ].map((k) => (
          <div
            key={k.label}
            className="bg-[#11151c] border border-slate-800/70 rounded-xl p-5"
          >
            <p className="text-[11.5px] text-slate-400">{k.label}</p>
            <p className={`text-[24px] font-semibold mt-1.5 tracking-tight tabular-nums ${k.color}`}>
              {k.value}
            </p>
            <p className="text-[11.5px] text-slate-500 mt-1">{k.sub}</p>
          </div>
        ))}
      </div>

      {/* Filters toolbar */}
      <div className="bg-[#11151c] border border-slate-800/70 rounded-xl p-3 flex flex-wrap items-center gap-2">
        <div className="relative flex-1 min-w-[240px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
          <input
            type="text"
            placeholder="Search by merchant, amount, or transaction ID..."
            className="w-full pl-9 pr-3 py-2 bg-slate-900/60 border border-slate-800 rounded-lg text-[12.5px] text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-slate-700"
          />
        </div>

        <div className="flex items-center gap-1 p-1 bg-slate-900/60 border border-slate-800 rounded-lg">
          {filters.map((f, i) => (
            <button
              key={f}
              onClick={() => setActive(i)}
              className={`px-3 py-1.5 rounded-md text-[12px] font-medium transition-colors ${
                active === i
                  ? "bg-white/[0.06] text-white ring-1 ring-white/10"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <button className="flex items-center gap-1.5 px-3 py-2 bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-white text-[12.5px] font-medium rounded-lg">
          <Calendar className="w-3.5 h-3.5" /> Last 30 days
          <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
        </button>
        <button className="flex items-center gap-1.5 px-3 py-2 bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-white text-[12.5px] font-medium rounded-lg">
          <Filter className="w-3.5 h-3.5" /> Advanced
        </button>
        <button className="flex items-center gap-1.5 px-3 py-2 bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-white text-[12.5px] font-medium rounded-lg">
          <Download className="w-3.5 h-3.5" /> CSV
        </button>
      </div>

      {/* Table */}
      <div className="bg-[#11151c] border border-slate-800/70 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="text-slate-400 bg-slate-900/40 text-[11px] uppercase tracking-wider">
                <th className="text-left font-medium px-5 py-3">
                  <input type="checkbox" className="accent-emerald-500" />
                </th>
                <th className="text-left font-medium px-5 py-3">Transaction</th>
                <th className="text-left font-medium px-5 py-3">Category</th>
                <th className="text-left font-medium px-5 py-3">Account</th>
                <th className="text-left font-medium px-5 py-3">Date</th>
                <th className="text-left font-medium px-5 py-3">Status</th>
                <th className="text-left font-medium px-5 py-3">ID</th>
                <th className="text-right font-medium px-5 py-3">Amount</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              {transactions.map((t, i) => (
                <tr
                  key={i}
                  className="border-t border-slate-800/70 hover:bg-slate-900/40 cursor-pointer"
                >
                  <td className="px-5 py-3.5">
                    <input type="checkbox" className="accent-emerald-500" />
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-lg ${t.tileBg} flex items-center justify-center text-white text-[12.5px] font-semibold ring-1 ring-white/10`}
                      >
                        {t.tile}
                      </div>
                      <div className="min-w-0">
                        <p className="text-white font-medium truncate">{t.merchant}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="text-[11.5px] text-slate-300 bg-slate-900/60 border border-slate-800/70 px-2 py-1 rounded-md whitespace-nowrap">
                      {t.category}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-slate-400 whitespace-nowrap">{t.account}</td>
                  <td className="px-5 py-3.5 text-slate-400 whitespace-nowrap">{t.date}</td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`text-[11px] px-2 py-0.5 rounded-md border font-medium whitespace-nowrap ${
                        t.status === "Completed"
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                          : "bg-amber-500/10 text-amber-400 border-amber-500/30"
                      }`}
                    >
                      {t.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-[11.5px] text-slate-500 font-mono whitespace-nowrap">
                    {t.id}
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <div
                      className={`inline-flex items-center gap-1 font-semibold tabular-nums ${
                        t.amount > 0 ? "text-emerald-400" : "text-slate-100"
                      }`}
                    >
                      {t.amount > 0 ? (
                        <ArrowDownLeft className="w-3.5 h-3.5" />
                      ) : (
                        <ArrowUpRight className="w-3.5 h-3.5 text-rose-400" />
                      )}
                      {t.amount > 0 ? "+" : "-"}$
                      {Math.abs(t.amount).toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                      })}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between px-5 py-4 border-t border-slate-800/70 text-[12.5px] text-slate-400">
          <p>
            Showing <span className="text-white">1–8</span> of 248 transactions
          </p>
          <div className="flex items-center gap-1">
            <button className="px-2.5 py-1.5 rounded-md bg-slate-900/60 border border-slate-800">Prev</button>
            <button className="px-2.5 py-1.5 rounded-md bg-white/[0.06] text-white ring-1 ring-white/10 font-semibold">1</button>
            <button className="px-2.5 py-1.5 rounded-md bg-slate-900/60 border border-slate-800">2</button>
            <button className="px-2.5 py-1.5 rounded-md bg-slate-900/60 border border-slate-800">3</button>
            <span className="text-slate-600">…</span>
            <button className="px-2.5 py-1.5 rounded-md bg-slate-900/60 border border-slate-800">31</button>
            <button className="px-2.5 py-1.5 rounded-md bg-slate-900/60 border border-slate-800">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
