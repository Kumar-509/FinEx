import { ArrowDownLeft, ArrowUpRight, Plus, QrCode, Send, Wallet as WalletIcon, Repeat, Smartphone, ChevronRight } from "lucide-react";

const balances = [
  { symbol: "USD", name: "US Dollar", amount: 12840.5, rate: "1.00", gradient: "from-emerald-400 to-teal-500", emoji: "🇺🇸", kind: "fiat", change: "+0.00%" },
  { symbol: "EUR", name: "Euro", amount: 4320.12, rate: "1.09", gradient: "from-indigo-400 to-violet-500", emoji: "🇪🇺", kind: "fiat", change: "+0.41%" },
  { symbol: "GBP", name: "British Pound", amount: 2180.55, rate: "1.28", gradient: "from-rose-400 to-pink-500", emoji: "🇬🇧", kind: "fiat", change: "-0.12%" },
  { symbol: "JPY", name: "Japanese Yen", amount: 420180, rate: "0.0066", gradient: "from-slate-400 to-slate-600", emoji: "🇯🇵", kind: "fiat", change: "+0.08%" },
  { symbol: "BTC", name: "Bitcoin", amount: 0.3421, rate: "67,420", gradient: "from-amber-400 to-orange-500", emoji: "₿", kind: "crypto", change: "+2.41%" },
  { symbol: "ETH", name: "Ethereum", amount: 5.128, rate: "3,280", gradient: "from-indigo-400 to-purple-500", emoji: "Ξ", kind: "crypto", change: "-0.83%" },
];

const activities = [
  { title: "Received from John Doe", subtitle: "ACH transfer · USD", amount: 1500, type: "in", time: "2h ago", id: "TX-88291034", icon: "🏦" },
  { title: "Sent to Emma Wilson", subtitle: "Split dinner · EUR", amount: -84.5, type: "out", time: "Yesterday", id: "TX-88291002", icon: "💸" },
  { title: "BTC purchase", subtitle: "Coinbase · USD", amount: -520, type: "out", time: "2 days ago", id: "TX-88290987", icon: "₿" },
  { title: "Freelance payout", subtitle: "PayPal · USD", amount: 2400, type: "in", time: "3 days ago", id: "TX-88290921", icon: "🧾" },
];

export default function Wallet() {
  const totalUSD = balances
    .map((b) => {
      if (b.symbol === "USD") return b.amount;
      if (b.symbol === "EUR") return b.amount * 1.09;
      if (b.symbol === "GBP") return b.amount * 1.28;
      if (b.symbol === "JPY") return b.amount * 0.0066;
      if (b.symbol === "BTC") return b.amount * 67420;
      if (b.symbol === "ETH") return b.amount * 3280;
      return 0;
    })
    .reduce((a, b) => a + b, 0);

  return (
    <div className="p-8 space-y-5">
      {/* Hero balance */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-500 via-cyan-500 to-blue-600 p-6 md:p-8 text-white">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-24 w-80 h-80 bg-black/25 rounded-full blur-3xl" />

        <div className="relative flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-white/90 text-[12.5px]">
              <WalletIcon className="w-4 h-4" />
              <span>Multi-currency wallet · Total balance</span>
            </div>
            <p className="text-[42px] md:text-[54px] font-semibold mt-2 tracking-tight tabular-nums leading-none">
              ${totalUSD.toLocaleString("en-US", { maximumFractionDigits: 2 })}
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-3 text-[12.5px]">
              <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur px-2.5 py-1 rounded-md font-medium">
                <ArrowUpRight className="w-3.5 h-3.5" /> +$342.12 (1.2%) 24h
              </span>
              <span className="text-white/80">{balances.length} currencies · 12 wallets</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
              <QrCode className="w-5 h-5" />
            </button>
            <button className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick actions */}
        <div className="relative grid grid-cols-2 md:grid-cols-5 gap-2.5 mt-7">
          {[
            { icon: ArrowUpRight, label: "Send", sub: "To any wallet" },
            { icon: ArrowDownLeft, label: "Receive", sub: "Your address" },
            { icon: Plus, label: "Top Up", sub: "Card or bank" },
            { icon: Repeat, label: "Swap", sub: "Instant exchange" },
            { icon: Smartphone, label: "Pay", sub: "Scan & pay" },
          ].map((b, i) => {
            const Icon = b.icon;
            return (
              <button
                key={i}
                className="flex flex-col items-start gap-1 py-3 px-3.5 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur text-[12.5px] font-medium transition-colors text-left"
              >
                <Icon className="w-4 h-4" />
                <span>{b.label}</span>
                <span className="text-[11px] text-white/70 font-normal">{b.sub}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Assets + activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-[#11151c] border border-slate-800/70 rounded-xl p-5 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-[14px] font-semibold text-white">Assets</h3>
              <p className="text-[12px] text-slate-500 mt-0.5">
                Fiat & digital asset balances
              </p>
            </div>
            <div className="flex items-center gap-1 p-1 rounded-lg bg-slate-900/60 border border-slate-800 text-[11.5px]">
              <button className="px-2.5 py-1 rounded-md bg-white/[0.06] text-white font-medium ring-1 ring-inset ring-white/10">All</button>
              <button className="px-2.5 py-1 rounded-md text-slate-400 hover:text-white">Fiat</button>
              <button className="px-2.5 py-1 rounded-md text-slate-400 hover:text-white">Crypto</button>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-slate-800/70">
            <div className="grid grid-cols-12 text-[11px] uppercase tracking-wider text-slate-500 bg-slate-900/40 px-4 py-2.5">
              <span className="col-span-5">Asset</span>
              <span className="col-span-2 text-right">Price</span>
              <span className="col-span-2 text-right">Holdings</span>
              <span className="col-span-1 text-right">24h</span>
              <span className="col-span-2 text-right">Value (USD)</span>
            </div>
            <div className="divide-y divide-slate-800/70">
              {balances.map((c) => {
                const usdValue =
                  c.amount *
                  (c.symbol === "BTC"
                    ? 67420
                    : c.symbol === "ETH"
                    ? 3280
                    : c.symbol === "JPY"
                    ? 0.0066
                    : c.symbol === "EUR"
                    ? 1.09
                    : c.symbol === "GBP"
                    ? 1.28
                    : 1);
                return (
                  <div key={c.symbol} className="grid grid-cols-12 items-center text-[12.5px] px-4 py-3 hover:bg-slate-900/40 cursor-pointer">
                    <div className="col-span-5 flex items-center gap-3 min-w-0">
                      <div
                        className={`w-9 h-9 rounded-lg bg-gradient-to-br ${c.gradient} flex items-center justify-center text-white text-[13px] font-semibold ring-1 ring-white/10`}
                      >
                        {c.emoji}
                      </div>
                      <div className="min-w-0">
                        <p className="text-white font-medium truncate">{c.symbol} · {c.name}</p>
                        <p className="text-[11px] text-slate-500 capitalize">{c.kind}</p>
                      </div>
                    </div>
                    <span className="col-span-2 text-right text-slate-300 tabular-nums">${c.rate}</span>
                    <span className="col-span-2 text-right text-slate-300 tabular-nums">
                      {c.amount.toLocaleString("en-US", { maximumFractionDigits: 4 })}
                    </span>
                    <span
                      className={`col-span-1 text-right tabular-nums ${
                        c.change.startsWith("+") ? "text-emerald-400" : "text-rose-400"
                      }`}
                    >
                      {c.change}
                    </span>
                    <span className="col-span-2 text-right text-white font-semibold tabular-nums">
                      ${usdValue.toLocaleString("en-US", { maximumFractionDigits: 2 })}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-4">
          <div className="bg-[#11151c] border border-slate-800/70 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[14px] font-semibold text-white">Recent activity</h3>
              <button className="text-[11.5px] text-emerald-400 font-medium hover:underline">
                All <ChevronRight className="w-3 h-3 inline" />
              </button>
            </div>
            <div className="space-y-3.5">
              {activities.map((a, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center text-[13px] ${
                      a.type === "in"
                        ? "bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20"
                        : "bg-rose-500/10 text-rose-400 ring-1 ring-rose-500/20"
                    }`}
                  >
                    {a.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[12.5px] text-white font-medium truncate">{a.title}</p>
                    <p className="text-[11px] text-slate-500 font-mono">{a.id}</p>
                  </div>
                  <div className="text-right">
                    <p
                      className={`text-[12.5px] font-semibold tabular-nums ${
                        a.amount > 0 ? "text-emerald-400" : "text-slate-200"
                      }`}
                    >
                      {a.amount > 0 ? "+" : "-"}$
                      {Math.abs(a.amount).toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                      })}
                    </p>
                    <p className="text-[11px] text-slate-500">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden bg-[#11151c] border border-slate-800/70 rounded-xl p-5">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-cyan-400/10 rounded-full blur-2xl" />
            <p className="text-white text-[13.5px] font-semibold relative">Invite & earn</p>
            <p className="text-[12px] text-slate-400 mt-1 relative">
              Earn $20 for every friend who signs up to FinEx wallet.
            </p>
            <div className="mt-4 flex items-center gap-2 relative">
              <button className="flex-1 bg-white text-[#0b0f14] text-[12.5px] font-semibold rounded-lg py-2">
                Invite friends
              </button>
              <button className="w-9 h-9 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white">
                <QrCode className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
