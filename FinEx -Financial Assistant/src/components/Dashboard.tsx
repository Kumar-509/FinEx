import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  ArrowUpRight,
  ArrowDownRight,
  CreditCard,
  TrendingDown,
  TrendingUp,
  Wallet,
  DollarSign,
  Download,
  Plus,
  Send,
  QrCode,
  Clock,
} from "lucide-react";

const balance = [
  { month: "Jan", income: 4200, spend: 2800 },
  { month: "Feb", income: 3800, spend: 3100 },
  { month: "Mar", income: 5100, spend: 2600 },
  { month: "Apr", income: 4800, spend: 3300 },
  { month: "May", income: 5400, spend: 3000 },
  { month: "Jun", income: 6200, spend: 3500 },
  { month: "Jul", income: 6450, spend: 3480 },
];

const weekly = [
  { day: "Mon", value: 320 },
  { day: "Tue", value: 480 },
  { day: "Wed", value: 290 },
  { day: "Thu", value: 620 },
  { day: "Fri", value: 510 },
  { day: "Sat", value: 380 },
  { day: "Sun", value: 250 },
];

const categories = [
  { name: "Housing", value: 1600, color: "#8b5cf6", light: "#c4b5fd", dark: "#6d28d9" },
  { name: "Food", value: 920, color: "#10b981", light: "#6ee7b7", dark: "#047857" },
  { name: "Shopping", value: 780, color: "#06b6d4", light: "#67e8f9", dark: "#0e7490" },
  { name: "Transport", value: 420, color: "#f59e0b", light: "#fcd34d", dark: "#b45309" },
  { name: "Other", value: 760, color: "#64748b", light: "#cbd5e1", dark: "#334155" },
];

const recentTxs = [
  {
    name: "Whole Foods Market",
    category: "Groceries",
    amount: -84.23,
    time: "Today · 09:42",
    icon: "🛒",
    brand: "bg-emerald-700",
  },
  {
    name: "Payroll · Acme Inc.",
    category: "Income",
    amount: 4200.0,
    time: "Today · 08:15",
    icon: "💼",
    brand: "bg-blue-600",
  },
  {
    name: "Uber",
    category: "Transport",
    amount: -22.45,
    time: "Yesterday",
    icon: "🚕",
    brand: "bg-slate-800",
  },
  {
    name: "Netflix",
    category: "Entertainment",
    amount: -15.99,
    time: "Yesterday",
    icon: "N",
    brand: "bg-red-700",
  },
];

function KPI({ label, value, sub, up, change, icon: Icon, tint }: any) {
  return (
    <div className="relative bg-[#11151c] border border-slate-800/70 rounded-xl p-5 overflow-hidden group hover:border-slate-700 transition-colors">
      <div className="flex items-start justify-between">
        <div className="min-w-0">
          <p className="text-[11.5px] text-slate-400 tracking-wide">{label}</p>
          <p className="text-[26px] font-semibold text-white mt-1.5 tracking-tight tabular-nums">
            {value}
          </p>
        </div>
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${tint}`}>
          <Icon className="w-4 h-4" />
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4 text-[12px]">
        <span
          className={`inline-flex items-center gap-1 font-medium ${
            up ? "text-emerald-400" : "text-rose-400"
          }`}
        >
          {up ? (
            <ArrowUpRight className="w-3.5 h-3.5" />
          ) : (
            <ArrowDownRight className="w-3.5 h-3.5" />
          )}
          {change}
        </span>
        <span className="text-slate-500">{sub}</span>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="p-8 space-y-6">
      {/* Quick-actions toolbar */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-lg border border-slate-800 bg-slate-900/60 text-[12.5px] overflow-hidden">
            <button className="px-3 py-1.5 text-slate-300">Today</button>
            <button className="px-3 py-1.5 text-slate-500 hover:text-slate-300">7d</button>
            <button className="px-3 py-1.5 bg-white/[0.06] text-white border-l border-r border-slate-800 font-medium">
              30d
            </button>
            <button className="px-3 py-1.5 text-slate-500 hover:text-slate-300">90d</button>
            <button className="px-3 py-1.5 text-slate-500 hover:text-slate-300">YTD</button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-white text-[12.5px] font-medium px-3 py-2 rounded-lg">
            <Download className="w-3.5 h-3.5" /> Export .csv
          </button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPI
          label="Total Balance"
          value="$42,450.80"
          sub="vs last month"
          up
          change="+8.2%"
          icon={Wallet}
          tint="bg-emerald-500/10 text-emerald-400"
        />
        <KPI
          label="Income"
          value="$6,450.00"
          sub="vs last month"
          up
          change="+12.4%"
          icon={TrendingUp}
          tint="bg-cyan-500/10 text-cyan-400"
        />
        <KPI
          label="Expenses"
          value="$3,480.20"
          sub="vs last month"
          up={false}
          change="+4.8%"
          icon={TrendingDown}
          tint="bg-rose-500/10 text-rose-400"
        />
        <KPI
          label="Savings Rate"
          value="46.0%"
          sub="target 40%"
          up
          change="+6.0 pts"
          icon={DollarSign}
          tint="bg-amber-500/10 text-amber-400"
        />
      </div>

      {/* Row 1: cash-flow + category breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-[#11151c] border border-slate-800/70 rounded-xl p-5 lg:col-span-2">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-[14px] font-semibold text-white">Cash Flow</h3>
              <p className="text-[12px] text-slate-500 mt-0.5">Income vs expenses</p>
            </div>
            <div className="flex items-center gap-4 text-[12px] text-slate-400">
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400" /> Income</span>
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-cyan-400" /> Expenses</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={balance} margin={{ top: 4, right: 8, bottom: 0, left: 0 }}>
              <defs>
                <linearGradient id="colInc" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colExp" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.25} />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity={0} />
                </linearGradient>
              </defs>
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
              <Area
                type="monotone"
                dataKey="income"
                stroke="#10b981"
                strokeWidth={2}
                fill="url(#colInc)"
              />
              <Area
                type="monotone"
                dataKey="spend"
                stroke="#06b6d4"
                strokeWidth={2}
                fill="url(#colExp)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-[#11151c] border border-slate-800/70 rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-[14px] font-semibold text-white">By Category</h3>
              <p className="text-[12px] text-slate-500 mt-0.5">This month</p>
            </div>
          </div>
          <div className="relative">
            <ResponsiveContainer width="100%" height={210}>
              <PieChart>
                <defs>
                  {categories.map((c, i) => (
                    <radialGradient
                      key={i}
                      id={`pieGrad-${i}`}
                      cx="50%"
                      cy="50%"
                      r="75%"
                      fx="35%"
                      fy="30%"
                    >
                      <stop offset="0%" stopColor={c.light} />
                      <stop offset="70%" stopColor={c.color} />
                      <stop offset="100%" stopColor={c.dark} />
                    </radialGradient>
                  ))}
                  <filter id="pieShadow" x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#000000" floodOpacity="0.45" />
                  </filter>
                </defs>
                <Pie
                  data={categories}
                  cx="50%"
                  cy="50%"
                  innerRadius={56}
                  outerRadius={92}
                  dataKey="value"
                  paddingAngle={1.5}
                  cornerRadius={4}
                  stroke="#0a0d12"
                  strokeWidth={1.5}
                  startAngle={90}
                  endAngle={-270}
                  filter="url(#pieShadow)"
                  isAnimationActive
                >
                  {categories.map((_, i) => (
                    <Cell key={i} fill={`url(#pieGrad-${i})`} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(v) => [`$${Number(v).toLocaleString()}`, ""]}
                  contentStyle={{
                    background: "#0a0d12",
                    border: "1px solid #27272a",
                    borderRadius: 10,
                    color: "#e5e7eb",
                    fontSize: 12,
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            {/* Center total */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-[10.5px] uppercase tracking-wider text-slate-500">Spent</span>
              <span className="text-[20px] font-semibold text-white tabular-nums leading-tight">
                ${categories.reduce((s, c) => s + c.value, 0).toLocaleString()}
              </span>
              <span className="text-[10.5px] text-slate-500">this month</span>
            </div>
          </div>
          <div className="space-y-2 mt-4">
            {categories.map((c) => {
              const total = categories.reduce((s, x) => s + x.value, 0);
              const pct = Math.round((c.value / total) * 100);
              return (
                <div key={c.name} className="flex items-center text-[12.5px]">
                  <span
                    className="w-2.5 h-2.5 rounded-full mr-2 ring-2 ring-white/10"
                    style={{ background: c.color }}
                  />
                  <span className="text-slate-300">{c.name}</span>
                  <span className="ml-auto text-slate-500 tabular-nums">
                    ${c.value.toLocaleString()}
                  </span>
                  <span className="ml-2 w-9 text-right text-slate-400 tabular-nums">{pct}%</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Row 2: Weekly bars + quick actions + recent transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-[#11151c] border border-slate-800/70 rounded-xl p-5 lg:col-span-2">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-[14px] font-semibold text-white">Spending this week</h3>
              <p className="text-[12px] text-slate-500 mt-0.5">Daily total</p>
            </div>
            <span className="text-[12px] text-slate-400">$2,850 total</span>
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={weekly} margin={{ top: 4, right: 8, bottom: 0, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
              <XAxis dataKey="day" stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  background: "#0a0d12",
                  border: "1px solid #27272a",
                  borderRadius: 10,
                  color: "#e5e7eb",
                  fontSize: 12,
                }}
              />
              <Bar dataKey="value" fill="#06b6d4" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-[#11151c] border border-slate-800/70 rounded-xl p-5">
          <h3 className="text-[14px] font-semibold text-white">Quick actions</h3>
          <p className="text-[12px] text-slate-500 mt-0.5 mb-4">Frequently used</p>
          <div className="grid grid-cols-2 gap-2.5">
            {[
              { label: "Transfer", icon: Send, tint: "from-emerald-400 to-teal-500" },
              { label: "Pay Bills", icon: CreditCard, tint: "from-cyan-400 to-sky-500" },
              { label: "Top Up", icon: Plus, tint: "from-amber-400 to-orange-500" },
              { label: "Deposit", icon: QrCode, tint: "from-rose-400 to-pink-500" },
            ].map((a) => {
              const Icon = a.icon;
              return (
                <button
                  key={a.label}
                  className={`bg-gradient-to-br ${a.tint} rounded-xl p-3 text-[#0b0f14] text-left text-[12.5px] font-semibold hover:brightness-110 transition`}
                >
                  <div className="w-7 h-7 rounded-lg bg-white/30 flex items-center justify-center mb-3">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  {a.label}
                </button>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-800/70">
            <p className="text-[11.5px] text-slate-500 mb-2">Next bill due</p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300">
                <Clock className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[12.5px] text-white font-medium truncate">Rent · Landlord Co.</p>
                <p className="text-[11px] text-slate-500">Due Aug 31</p>
              </div>
              <span className="text-[12.5px] text-white font-semibold tabular-nums">$1,600</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent transactions */}
      <div className="bg-[#11151c] border border-slate-800/70 rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800/70">
          <div>
            <h3 className="text-[14px] font-semibold text-white">Recent transactions</h3>
            <p className="text-[12px] text-slate-500 mt-0.5">Last 48 hours</p>
          </div>
          <button className="text-[12.5px] text-emerald-400 font-medium hover:underline">
            View all
          </button>
        </div>
        <div className="divide-y divide-slate-800/70">
          {recentTxs.map((t, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 py-3.5 hover:bg-slate-900/40"
            >
              <div
                className={`w-9 h-9 rounded-lg ${t.brand} flex items-center justify-center text-white text-[13px] font-semibold shadow-inner`}
              >
                {t.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] text-white font-medium truncate">{t.name}</p>
                <p className="text-[11.5px] text-slate-500">{t.category}</p>
              </div>
              <div className="text-right">
                <p
                  className={`text-[13px] font-semibold tabular-nums ${
                    t.amount > 0 ? "text-emerald-400" : "text-slate-200"
                  }`}
                >
                  {t.amount > 0 ? "+" : "-"}$
                  {Math.abs(t.amount).toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
                </p>
                <p className="text-[11px] text-slate-500">{t.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
