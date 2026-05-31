import { Plus, ShieldCheck, Wifi, ChevronLeft, ChevronRight, Eye, EyeOff, Lock, Unlock, Volume2 } from "lucide-react";
import { useState } from "react";

const cards = [
  {
    name: "ALEX MORGAN",
    number: "4829  3342  1203  7721",
    exp: "12/27",
    cvv: "384",
    type: "VISA",
    tier: "PLATINUM",
    balance: 8420.5,
    limit: 15000,
    gradient: "from-emerald-500 via-cyan-500 to-blue-600",
    pattern: "pattern-1",
  },
  {
    name: "ALEX MORGAN",
    number: "5412  8833  2201  9944",
    exp: "08/26",
    cvv: "221",
    type: "MASTERCARD",
    tier: "GOLD",
    balance: 3210.8,
    limit: 10000,
    gradient: "from-amber-400 via-orange-500 to-rose-500",
    pattern: "pattern-2",
  },
  {
    name: "ALEX MORGAN",
    number: "3782  1123  4455  6677",
    exp: "04/28",
    cvv: "917",
    type: "AMEX",
    tier: "BLACK",
    balance: 12400.0,
    limit: 50000,
    gradient: "from-slate-700 via-slate-900 to-black",
    pattern: "pattern-3",
  },
];

function CardChip() {
  return (
    <div className="relative w-14 h-11 rounded-md bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-500 shadow-inner overflow-hidden">
      <div className="absolute inset-1 rounded-sm border border-yellow-900/30" />
      <div className="absolute inset-0 grid grid-cols-3 gap-0.5 p-1.5 opacity-70">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="border border-yellow-900/40 rounded-sm" />
        ))}
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-yellow-900/50 rotate-45" />
    </div>
  );
}

function VisaLogo() {
  return (
    <span className="text-white italic font-black text-xl tracking-tighter drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]">
      VISA
    </span>
  );
}

function MastercardLogo() {
  return (
    <div className="flex items-center -space-x-3">
      <div className="w-8 h-8 rounded-full bg-red-500 shadow-lg" />
      <div className="w-8 h-8 rounded-full bg-yellow-400 mix-blend-screen shadow-lg" />
    </div>
  );
}

function AmexLogo() {
  return (
    <div className="bg-white text-slate-900 px-2 py-1 rounded font-black text-xs tracking-widest">
      AMEX
    </div>
  );
}

function NetworkLogo({ type }: { type: string }) {
  if (type === "VISA") return <VisaLogo />;
  if (type === "MASTERCARD") return <MastercardLogo />;
  return <AmexLogo />;
}

export default function Cards() {
  const [idx, setIdx] = useState(0);
  const [frozen, setFrozen] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const card = cards[idx];
  const usage = Math.round((card.balance / card.limit) * 100);

  const perks = [
    { title: "2.1% Cashback", body: "On all purchases" },
    { title: "Travel Insurance", body: "Up to $1M worldwide" },
    { title: "Lounge Access", body: "1,200+ airport lounges" },
    { title: "Concierge", body: "24/7 personal service" },
  ];

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-sm text-slate-400">
          <span className="bg-cyan-500/15 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/30">
            {cards.length} Cards
          </span>
          <span>{card.tier} selected · {card.type}</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setRevealed((v) => !v)}
            className="flex items-center gap-2 bg-slate-900 border border-slate-800 text-slate-300 hover:text-white font-medium text-sm px-4 py-2.5 rounded-xl"
          >
            {revealed ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            {revealed ? "Hide details" : "Show details"}
          </button>
          <button className="flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-cyan-500 text-[#0b0f14] font-semibold text-sm px-4 py-2.5 rounded-xl shadow-lg shadow-emerald-500/20">
            <Plus className="w-4 h-4" /> Request Card
          </button>
        </div>
      </div>

      {/* Card carousel */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-semibold">Physical & Virtual Cards</h2>
            <div className="flex items-center gap-2">
              {cards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === idx ? "bg-emerald-400 w-8" : "bg-slate-700 w-2"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* 3D card */}
          <div className="relative" style={{ perspective: "1400px" }}>
            <div
              className={`relative rounded-[32px] p-8 aspect-[1.6/1] bg-gradient-to-br ${card.gradient} overflow-hidden shadow-2xl ring-1 ring-white/10 transition-all duration-500 ${
                frozen ? "opacity-60 grayscale" : ""
              }`}
              style={{ transformStyle: "preserve-3d", transform: "rotateX(4deg) rotateY(-6deg)" }}
            >
              {/* Texture patterns */}
              <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id={`p-${card.tier}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <circle cx="20" cy="20" r="1.5" fill="white" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#p-${card.tier})`} />
                </svg>
              </div>

              <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/15 rounded-full blur-3xl" />
              <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-black/30 rounded-full blur-3xl" />

              {/* Header */}
              <div className="relative flex items-start justify-between">
                <div>
                  <p className="text-[11px] text-white/75 uppercase tracking-[0.25em] font-semibold">
                    {card.tier}
                  </p>
                  <p className="text-white text-[10px] tracking-[0.2em] uppercase opacity-60 mt-1">
                    FinEx Banking
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Wifi className="w-6 h-6 text-white/90 rotate-90 opacity-90" />
                  <NetworkLogo type={card.type} />
                </div>
              </div>

              {/* Chip + Contactless */}
              <div className="relative mt-8 flex items-center gap-4">
                <CardChip />
                <div className="text-white/80 text-xs">
                  <div className="flex flex-col items-start leading-tight">
                    <span className="opacity-70">CHIP</span>
                    <span className="opacity-70">&amp; PIN</span>
                  </div>
                </div>
              </div>

              {/* Card number */}
              <div className="relative mt-8 select-none">
                <p className="text-white text-[22px] md:text-2xl tracking-[0.2em] font-mono drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                  {revealed
                    ? card.number
                    : "••••  ••••  ••••  " + card.number.slice(-4)}
                </p>
              </div>

              {/* Footer */}
              <div className="relative mt-8 flex items-end justify-between text-white">
                <div>
                  <p className="text-[9px] opacity-70 uppercase tracking-[0.25em]">
                    Card Holder
                  </p>
                  <p className="font-semibold text-sm mt-1 tracking-widest">{card.name}</p>
                </div>
                <div>
                  <p className="text-[9px] opacity-70 uppercase tracking-[0.25em]">
                    Valid Thru
                  </p>
                  <p className="font-semibold text-sm mt-1 font-mono">{card.exp}</p>
                </div>
                <div>
                  <p className="text-[9px] opacity-70 uppercase tracking-[0.25em]">CVV</p>
                  <p className="font-semibold text-sm mt-1 font-mono">
                    {revealed ? card.cvv : "•••"}
                  </p>
                </div>
              </div>

              {/* Magnetic stripe hint */}
              <div className="absolute left-0 right-0 top-[54%] h-10 bg-black/20 hidden" />
            </div>

            {/* Frozen overlay */}
            {frozen && (
              <div className="absolute inset-0 rounded-[32px] flex items-center justify-center bg-black/40 backdrop-blur-sm">
                <div className="text-white text-center">
                  <Lock className="w-10 h-10 mx-auto mb-2" />
                  <p className="font-bold tracking-wider">CARD FROZEN</p>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between mt-6 gap-3">
            <button
              onClick={() => setIdx((idx - 1 + cards.length) % cards.length)}
              className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-300 hover:text-white"
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>
            <span className="text-xs text-slate-500">
              Swipe or use arrow buttons to browse cards
            </span>
            <button
              onClick={() => setIdx((idx + 1) % cards.length)}
              className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-300 hover:text-white"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Card info panel */}
        <div className="lg:col-span-2 space-y-5">
          <div className="bg-[#141a22] border border-slate-800 rounded-2xl p-6 space-y-5">
            <div>
              <p className="text-slate-400 text-sm">Current balance</p>
              <div className="flex items-baseline gap-2 mt-1">
                <p className="text-3xl font-bold text-white">
                  ${card.balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </p>
                <span className="text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                  +4.2%
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                of ${card.limit.toLocaleString()} credit limit
              </p>
              <div className="w-full bg-slate-800 h-2.5 rounded-full mt-3 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${card.gradient}`}
                  style={{ width: `${usage}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>0%</span>
                <span className="text-white font-medium">{usage}% used</span>
                <span>100%</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Card network", value: card.type },
                { label: "Tier", value: card.tier },
                { label: "Rewards", value: "2.1% cashback" },
                { label: "Status", value: frozen ? "Frozen" : "Active" },
              ].map((it) => (
                <div
                  key={it.label}
                  className="bg-slate-900/60 border border-slate-800 rounded-xl p-4"
                >
                  <p className="text-[11px] text-slate-500 uppercase tracking-wider">
                    {it.label}
                  </p>
                  <p className="text-sm text-white font-semibold mt-1">{it.value}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
              <ShieldCheck className="w-4 h-4 flex-shrink-0" />
              This card is protected by 256-bit encryption, biometric unlock and
              real-time fraud monitoring.
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setFrozen((v) => !v)}
                className="bg-slate-900 border border-slate-800 text-white rounded-xl py-3 text-sm font-medium hover:bg-slate-800 flex items-center justify-center gap-2"
              >
                {frozen ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                {frozen ? "Unfreeze" : "Freeze Card"}
              </button>
              <button className="bg-gradient-to-r from-emerald-400 to-cyan-500 text-[#0b0f14] rounded-xl py-3 text-sm font-bold shadow-lg shadow-emerald-500/20">
                Manage Limits
              </button>
            </div>
          </div>

          {/* Perks */}
          <div className="bg-[#141a22] border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold">Card Perks</h3>
              <Volume2 className="w-4 h-4 text-slate-500" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {perks.map((p) => (
                <div
                  key={p.title}
                  className="rounded-xl p-4 bg-gradient-to-br from-slate-900/80 to-slate-900/20 border border-slate-800"
                >
                  <p className="text-white text-sm font-semibold">{p.title}</p>
                  <p className="text-xs text-slate-500 mt-1">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
