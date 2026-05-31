import { ArrowUpRight, ArrowDownRight, Plus, ChevronRight, Eye, Lock, TrendingUp, Building2, PiggyBank, BarChart3, Plane, Download } from "lucide-react";

const accounts = [
  {
    name: "Main Checking",
    bank: "JPMorgan Chase",
    number: "•••• 4829",
    iban: "US49 CHAS 1240 0048 29",
    balance: 12840.5,
    type: "Checking",
    icon: Building2,
    tint: "from-emerald-400 to-teal-500",
    change: 2.4,
    up: true,
    inflow: 2340,
    outflow: 1150,
    spark: [8, 12, 10, 14, 12, 18, 16, 22],
  },
  {
    name: "Savings Vault",
    bank: "Bank of America",
    number: "•••• 1203",
    iban: "US12 BOFA 0440 0120 03",
    balance: 24560.3,
    type: "High-Yield Savings",
    icon: PiggyBank,
    tint: "from-indigo-400 to-violet-500",
    change: 5.8,
    up: true,
    inflow: 1200,
    outflow: 0,
    spark: [6, 10, 8, 14, 12, 18, 20, 26],
  },
  {
    name: "Investment Account",
    bank: "Fidelity Investments",
    number: "•••• 7721",
    iban: "US88 FIDL 0199 0077 21",
    balance: 38420.0,
    type: "Brokerage",
    icon: BarChart3,
    tint: "from-amber-400 to-orange-500",
    change: 12.3,
    up: true,
    inflow: 800,
    outflow: 0,
    spark: [4, 10, 8, 14, 18, 14, 22, 30],
  },
  {
    name: "Travel Fund",
    bank: "Ally Financial",
    number: "•••• 3398",
    iban: "US37 ALLY 0123 4533 98",
    balance: 4820.65,
    type: "Goal Savings",
    icon: Plane,
    tint: "from-rose-400 to-pink-500",
    change: 1.2,
    up: false,
    inflow: 400,
    outflow: 620,
    spark: [18, 16, 20, 14, 16, 12, 14, 10],
  },
];

function Sparkline({ points, up }: { points: number[]; up: boolean }) {
  const path = points
    .map((y, i) => `${i === 0 ? "M" : "L"} ${i * 8 + 4} ${30 - y}`)
    .join(" ");
  return (
    <svg width={points.length * 8 + 8} height="30" className="overflow-visible">
      <path
        d={path}
        fill="none"
        stroke={up ? "#10b981" : "#f43f5e"}
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Accounts() {
  const totalBalance = accounts.reduce((s, a) => s + a.balance, 0);

  return (
    <div className="p-8 space-y-5">
      {/* Toolbar */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2 text-[12.5px] text-slate-400">
          <span className="bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-md border border-emerald-500/30">
            {accounts.length} accounts
          </span>
          <span>Across {accounts.length} institutions</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-white text-[12.5px] font-medium px-3 py-2 rounded-lg">
            <Download className="w-3.5 h-3.5" /> Statements
          </button>
          <button className="flex items-center gap-2 bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-white text-[12.5px] font-medium px-3 py-2 rounded-lg">
            <Eye className="w-3.5 h-3.5" /> Link bank
          </button>
          <button className="flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-cyan-500 text-[#0b0f14] text-[12.5px] font-semibold px-3 py-2 rounded-lg shadow-lg shadow-emerald-500/20">
            <Plus className="w-3.5 h-3.5" /> New account
          </button>
        </div>
      </div>

      {/* Aggregate summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-transparent border border-emerald-500/30 rounded-xl p-5 md:col-span-2">
          <p className="text-[11.5px] text-emerald-300">Combined balance</p>
          <p className="text-[32px] font-semibold text-white mt-1.5 tracking-tight tabular-nums">
            ${totalBalance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </p>
          <div className="flex items-center gap-3 mt-2.5 text-[12px]">
            <span className="flex items-center gap-1 text-emerald-400 font-medium">
              <TrendingUp className="w-3.5 h-3.5" /> +4.8% this month
            </span>
            <span className="text-slate-400">Across {accounts.length} accounts</span>
          </div>
        </div>
        <div className="bg-[#11151c] border border-slate-800/70 rounded-xl p-5">
          <p className="text-[11.5px] text-slate-400">30-day inflow</p>
          <p className="text-[22px] font-semibold text-emerald-400 mt-1.5 tracking-tight tabular-nums">
            ${accounts.reduce((s, a) => s + a.inflow, 0).toLocaleString()}
          </p>
        </div>
        <div className="bg-[#11151c] border border-slate-800/70 rounded-xl p-5">
          <p className="text-[11.5px] text-slate-400">30-day outflow</p>
          <p className="text-[22px] font-semibold text-rose-400 mt-1.5 tracking-tight tabular-nums">
            ${accounts.reduce((s, a) => s + a.outflow, 0).toLocaleString()}
          </p>
        </div>
      </div>

      {/* Accounts grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {accounts.map((a) => {
          const Icon = a.icon;
          return (
            <div
              key={a.name}
              className="relative bg-[#11151c] border border-slate-800/70 rounded-xl p-5 hover:border-slate-700 transition-colors overflow-hidden"
            >
              <div className={`absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br ${a.tint} opacity-10 rounded-full blur-3xl`} />

              <div className="flex items-start justify-between relative">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${a.tint} flex items-center justify-center text-[#0b0f14] shadow-lg shadow-black/30`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10.5px] uppercase tracking-widest text-slate-500">{a.type}</p>
                    <h3 className="text-[15px] text-white font-semibold leading-tight">
                      {a.name}
                    </h3>
                    <p className="text-[11.5px] text-slate-500 mt-0.5">{a.bank}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <button className="w-8 h-8 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white">
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white">
                    <Lock className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="flex items-end justify-between mt-5 pt-5 border-t border-slate-800/70 relative">
                <div>
                  <p className="text-[10.5px] uppercase tracking-widest text-slate-500">Available balance</p>
                  <p className="text-[24px] font-semibold text-white mt-1 tracking-tight tabular-nums">
                    ${a.balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1 font-mono">{a.iban}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <Sparkline points={a.spark} up={a.up} />
                  <span
                    className={`flex items-center text-[11.5px] font-semibold ${
                      a.up ? "text-emerald-400" : "text-rose-400"
                    }`}
                  >
                    {a.up ? (
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    ) : (
                      <ArrowDownRight className="w-3.5 h-3.5" />
                    )}
                    {a.change}%
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 mt-5 relative">
                <button className="flex-1 text-[11.5px] font-medium text-slate-300 hover:text-white bg-slate-900/60 border border-slate-800 rounded-md py-2">
                  Transfer
                </button>
                <button className="flex-1 text-[11.5px] font-medium text-slate-300 hover:text-white bg-slate-900/60 border border-slate-800 rounded-md py-2">
                  Statements
                </button>
                <button className="flex-1 text-[11.5px] font-semibold text-[#0b0f14] bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-md py-2">
                  Manage
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 30-day activity table */}
      <div className="bg-[#11151c] border border-slate-800/70 rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800/70">
          <div>
            <h3 className="text-[14px] font-semibold text-white">30-day account activity</h3>
            <p className="text-[12px] text-slate-500 mt-0.5">Net movements across all accounts</p>
          </div>
          <button className="text-[12.5px] text-emerald-400 font-medium hover:underline flex items-center gap-1">
            View all <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-[12.5px]">
            <thead>
              <tr className="text-slate-400 bg-slate-900/40 text-[11px] uppercase tracking-wider">
                <th className="text-left font-medium px-5 py-2.5">Account</th>
                <th className="text-left font-medium px-5 py-2.5">Type</th>
                <th className="text-left font-medium px-5 py-2.5">IBAN</th>
                <th className="text-right font-medium px-5 py-2.5">Inflow</th>
                <th className="text-right font-medium px-5 py-2.5">Outflow</th>
                <th className="text-right font-medium px-5 py-2.5">Net</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              {accounts.map((a, i) => {
                const Icon = a.icon;
                return (
                  <tr key={i} className="border-t border-slate-800/70 hover:bg-slate-900/40 cursor-pointer">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-md bg-gradient-to-br ${a.tint} flex items-center justify-center text-[#0b0f14]`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-white font-medium text-[12.5px]">{a.name}</p>
                          <p className="text-[11px] text-slate-500">{a.bank}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-slate-400">{a.type}</td>
                    <td className="px-5 py-3 text-[11.5px] text-slate-500 font-mono">{a.iban}</td>
                    <td className="px-5 py-3 text-right text-emerald-400 tabular-nums font-medium">
                      +${a.inflow.toLocaleString()}
                    </td>
                    <td className="px-5 py-3 text-right text-rose-400 tabular-nums font-medium">
                      -${a.outflow.toLocaleString()}
                    </td>
                    <td className="px-5 py-3 text-right text-white font-semibold tabular-nums">
                      +${(a.inflow - a.outflow).toLocaleString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
