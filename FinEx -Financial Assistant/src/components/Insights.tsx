import {
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import {
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  Target,
  AlertTriangle,
  Lightbulb,
  BrainCircuit,
  Coins,
  Building2,
  Globe2,
  RefreshCw,
  ExternalLink,
} from "lucide-react";

const trend = [
  { month: "Jan", income: 4200, expense: 2800, savings: 1400 },
  { month: "Feb", income: 3800, expense: 3100, savings: 700 },
  { month: "Mar", income: 5100, expense: 2600, savings: 2500 },
  { month: "Apr", income: 4800, expense: 3300, savings: 1500 },
  { month: "May", income: 5400, expense: 3000, savings: 2400 },
  { month: "Jun", income: 6200, expense: 3500, savings: 2700 },
  { month: "Jul", income: 6450, expense: 3480, savings: 2970 },
];

const radar = [
  { subject: "Savings", A: 82, full: 100 },
  { subject: "Spending", A: 65, full: 100 },
  { subject: "Investing", A: 74, full: 100 },
  { subject: "Planning", A: 90, full: 100 },
  { subject: "Diversify", A: 58, full: 100 },
  { subject: "Debt", A: 88, full: 100 },
];

const insights = [
  {
    icon: TrendingUp,
    title: "Primary income up 18.3%",
    body: "Your salary stream grew QoQ; consider bumping auto-investments by 5%.",
    accent: "text-emerald-400",
    ring: "ring-emerald-500/30 bg-emerald-500/10",
    source: "Payroll analysis",
    cta: "Set auto-invest",
  },
  {
    icon: Target,
    title: "Emergency fund: 92%",
    body: "You're $420 away from your $5,000 emergency-fund goal.",
    accent: "text-cyan-400",
    ring: "ring-cyan-500/30 bg-cyan-500/10",
    source: "Goal tracking",
    cta: "View goal",
  },
  {
    icon: AlertTriangle,
    title: "Cafe visits rising 23.1%",
    body: "Discretionary food spending is trending above your 3-month average.",
    accent: "text-amber-400",
    ring: "ring-amber-500/30 bg-amber-500/10",
    source: "Category anomaly",
    cta: "Set soft limit",
  },
  {
    icon: Lightbulb,
    title: "Optimize: rebalance 401(k)",
    body: "Equity allocation drifted 7.4% above target. Rebalance to reduce risk.",
    accent: "text-violet-400",
    ring: "ring-violet-500/30 bg-violet-500/10",
    source: "Portfolio review",
    cta: "Open advisor",
  },
];

// Simulated market ticker (realistic-looking finance data)
const ticker = [
  { sym: "S&P 500", val: "5,428.12", chg: "+0.82%", up: true },
  { sym: "NASDAQ", val: "17,884.60", chg: "+1.24%", up: true },
  { sym: "DOW", val: "41,932.77", chg: "-0.15%", up: false },
  { sym: "BTC", val: "$67,420.00", chg: "+2.41%", up: true },
  { sym: "ETH", val: "$3,280.40", chg: "-0.83%", up: false },
  { sym: "GOLD", val: "$2,641.10", chg: "+0.32%", up: true },
  { sym: "10Y UST", val: "4.21%", chg: "-0.03", up: false },
];

export default function Insights() {
  return (
    <div className="p-8 space-y-5">
      {/* Ticker */}
      <div className="flex items-center gap-2 text-[11.5px] text-slate-400">
        <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded-md border border-emerald-500/30">
          <BrainCircuit className="w-3 h-3" /> AI-Powered
        </span>
        <span>Generated 2h ago · 12 insights</span>
        <span className="ml-auto hidden md:flex items-center gap-4 overflow-hidden">
          {ticker.map((t, i) => (
            <span key={i} className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="text-slate-400 font-medium">{t.sym}</span>
              <span className="text-white tabular-nums">{t.val}</span>
              <span className={`tabular-nums ${t.up ? "text-emerald-400" : "text-rose-400"}`}>
                {t.chg}
              </span>
            </span>
          ))}
        </span>
      </div>

      {/* AI hero */}
      <div className="relative overflow-hidden rounded-xl bg-[#11151c] border border-slate-800/70 p-6 md:p-8">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-24 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />

        <div className="relative flex items-start gap-5">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-[#0b0f14] shadow-lg shadow-emerald-500/20">
            <BrainCircuit className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <p className="text-[11.5px] text-emerald-400 uppercase tracking-wider mb-1">
              Monthly snapshot · August 2025
            </p>
            <h2 className="text-[22px] md:text-[26px] font-semibold text-white leading-snug tracking-tight">
              Your finances are trending positively. Increase index-fund
              contributions by{" "}
              <span className="text-emerald-400">$300/mo</span> to hit your
              retirement target 3 years earlier.
            </h2>
            <div className="flex flex-wrap items-center gap-5 mt-5 text-[12.5px]">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <ArrowUpRight className="w-3.5 h-3.5" /> Net worth +4.8%
              </span>
              <span className="flex items-center gap-1.5 text-cyan-400">
                <Target className="w-3.5 h-3.5" /> Savings rate 46%
              </span>
              <span className="flex items-center gap-1.5 text-rose-400">
                <ArrowDownRight className="w-3.5 h-3.5" /> Debt down 12.1%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Insight cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {insights.map((ins, i) => {
          const Icon = ins.icon;
          return (
            <div
              key={i}
              className="relative bg-[#11151c] border border-slate-800/70 rounded-xl p-5 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className={`w-9 h-9 rounded-lg ring-1 flex items-center justify-center ${ins.ring} ${ins.accent}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10.5px] uppercase tracking-wider text-slate-500">
                  {ins.source}
                </span>
              </div>
              <h4 className="text-[13.5px] text-white font-semibold mt-4 leading-snug">
                {ins.title}
              </h4>
              <p className="text-[12.5px] text-slate-400 mt-1.5 leading-relaxed">
                {ins.body}
              </p>
              <button className={`mt-4 text-[12px] font-medium flex items-center gap-1 ${ins.accent} hover:underline`}>
                {ins.cta} <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          );
        })}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-[#11151c] border border-slate-800/70 rounded-xl p-5 lg:col-span-2">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-[14px] font-semibold text-white">Cash Flow Trend</h3>
              <p className="text-[12px] text-slate-500 mt-0.5">Income, expenses & savings</p>
            </div>
            <div className="flex items-center gap-4 text-[11.5px] text-slate-400">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400" /> Income</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-400" /> Expenses</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-cyan-400" /> Savings</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trend} margin={{ top: 4, right: 8, bottom: 0, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
              <XAxis dataKey="month" stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  background: "#0a0d12",
                  border: "1px solid #27272a",
                  borderRadius: 10,
                  color: "#e5e7eb",
                  fontSize: 12,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                }}
              />
              <Line type="monotone" dataKey="income" stroke="#10b981" strokeWidth={2.2} dot={{ r: 3, strokeWidth: 0, fill: "#10b981" }} />
              <Line type="monotone" dataKey="expense" stroke="#f59e0b" strokeWidth={2.2} dot={{ r: 3, strokeWidth: 0, fill: "#f59e0b" }} />
              <Line type="monotone" dataKey="savings" stroke="#06b6d4" strokeWidth={2.2} dot={{ r: 3, strokeWidth: 0, fill: "#06b6d4" }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-[#11151c] border border-slate-800/70 rounded-xl p-5">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-[14px] font-semibold text-white">Financial Health</h3>
              <p className="text-[12px] text-slate-500 mt-0.5">Category score / 100</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={radar} outerRadius={95}>
              <PolarGrid stroke="#1f2937" />
              <PolarAngleAxis dataKey="subject" stroke="#64748b" fontSize={11} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} axisLine={false} />
              <Radar name="You" dataKey="A" stroke="#10b981" fill="#10b981" fillOpacity={0.25} strokeWidth={2}>
                {radar.map((_, i) => (
                  <Cell key={i} />
                ))}
              </Radar>
              <Tooltip
                contentStyle={{
                  background: "#0a0d12",
                  border: "1px solid #27272a",
                  borderRadius: 10,
                  color: "#e5e7eb",
                  fontSize: 12,
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom: accounts + real-world recs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-[#11151c] border border-slate-800/70 rounded-xl p-5 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[14px] font-semibold text-white">Optimized accounts</h3>
            <span className="text-[11.5px] text-slate-500">Last synced today</span>
          </div>
          <div className="divide-y divide-slate-800/70">
            {[
              { icon: Building2, name: "Chase Checking", bal: "$12,840.50", rec: "Move $500/mo to HY Savings", tone: "text-emerald-400" },
              { icon: Coins, name: "Fidelity Brokerage", bal: "$38,420.00", rec: "Rebalance: drift 7.4%", tone: "text-amber-400" },
              { icon: Globe2, name: "Ally Travel Fund", bal: "$4,820.65", rec: "Convert 20% to EUR for trip", tone: "text-cyan-400" },
              { icon: RefreshCw, name: "BofA HY Savings", bal: "$24,560.30", rec: "Rate 4.5% APY · top performer", tone: "text-emerald-400" },
            ].map((a, i) => {
              const Icon = a.icon;
              return (
                <div key={i} className="flex items-center gap-3 py-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] text-white font-medium truncate">{a.name}</p>
                    <p className={`text-[11.5px] ${a.tone}`}>{a.rec}</p>
                  </div>
                  <p className="text-[13px] text-white font-semibold tabular-nums">{a.bal}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-[#11151c] border border-slate-800/70 rounded-xl p-5">
          <h3 className="text-[14px] font-semibold text-white">This month</h3>
          <div className="space-y-3 mt-4">
            {[
              { label: "Recurring bills paid", value: "8 / 8", ok: true },
              { label: "Budgets on track", value: "5 / 6", ok: true },
              { label: "Over-limit categories", value: "1", ok: false },
              { label: "Subscriptions reviewed", value: "12 / 18", ok: true },
              { label: "Tax-advantaged used", value: "$18,500", ok: true },
            ].map((m) => (
              <div key={m.label} className="flex items-center justify-between text-[12.5px]">
                <span className="text-slate-400">{m.label}</span>
                <span className={`font-semibold tabular-nums ${m.ok ? "text-emerald-400" : "text-amber-400"}`}>
                  {m.value}
                </span>
              </div>
            ))}
          </div>
          <button className="mt-5 w-full text-[12.5px] font-medium text-emerald-400 hover:underline">
            Generate full financial report →
          </button>
        </div>
      </div>
    </div>
  );
}
