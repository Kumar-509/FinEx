import {
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Bell,
  Moon,
  Fingerprint,
  Lock,
  ChevronRight,
  Crown,
  Calendar,
  Globe2,
  Shield,
  ShieldHalf,
  KeyRound,
  FileText,
  Link2,
  HelpCircle,
  LogOut,
  Sun,
  Image as ImageIcon,
} from "lucide-react";
import { useTheme } from "../lib/theme";

export default function Profile() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="p-8 space-y-5">
      {/* Profile banner */}
      <div className="relative overflow-hidden rounded-xl bg-[#11151c] border border-slate-800/70">
        <div className="h-28 bg-gradient-to-br from-violet-600/60 via-indigo-600/50 to-cyan-500/40">
          <div className="absolute inset-0 opacity-30">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="profile-pat" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="1.2" fill="white" opacity="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#profile-pat)" />
            </svg>
          </div>
        </div>

        <div className="px-6 pb-6 -mt-10 relative">
          <div className="flex flex-col md:flex-row md:items-end gap-5">
            <div className="relative">
              <div className="w-24 h-24 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center ring-4 ring-[#11151c] shadow-xl shadow-black/40">
                <ImageIcon className="w-10 h-10 text-slate-400" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-[22px] font-semibold text-white tracking-tight">Alex Morgan</h1>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30 px-2 py-0.5 rounded-md">
                  <Crown className="w-3 h-3" /> Premium
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 bg-slate-900/80 border border-slate-800 px-2 py-0.5 rounded-md">
                  Member since May 2022
                </span>
              </div>
              <p className="text-[13px] text-slate-400 mt-1">
                Senior Financial Analyst · Verified · 2FA active
              </p>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-3 text-[12.5px] text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  alex.morgan@finex.app
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-slate-500" />
                  +1 (415) 555-0132
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  San Francisco, CA
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-[12.5px] text-slate-300 hover:text-white bg-slate-900/60 border border-slate-800 px-3 py-2 rounded-lg font-medium">
                Share profile
              </button>
              <button className="text-[12.5px] font-semibold text-[#0b0f14] bg-white px-3 py-2 rounded-lg">
                Edit profile
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
            {[
              { label: "Accounts", value: "4", sub: "linked" },
              { label: "Transactions", value: "2,486", sub: "all-time" },
              { label: "Budgets", value: "8", sub: "active" },
              { label: "Goals hit", value: "12", sub: "lifetime" },
            ].map((s) => (
              <div key={s.label} className="bg-slate-900/60 border border-slate-800 rounded-lg p-4 text-center">
                <p className="text-[20px] font-semibold text-white tabular-nums">{s.value}</p>
                <p className="text-[11.5px] text-slate-400 mt-0.5">{s.label} <span className="text-slate-600">· {s.sub}</span></p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Settings list */}
        <div className="bg-[#11151c] border border-slate-800/70 rounded-xl p-5 lg:col-span-2">
          <h3 className="text-[14px] font-semibold text-white mb-1">Account settings</h3>
          <p className="text-[12px] text-slate-500 mb-4">Preferences, security & connected apps</p>

          <div className="rounded-lg border border-slate-800/70 overflow-hidden divide-y divide-slate-800/70">
            {[
              { icon: Mail, title: "Email address", value: "alex.morgan@finex.app" },
              { icon: Phone, title: "Phone number", value: "+1 (415) 555-0132 · verified" },
              { icon: MapPin, title: "Residential address", value: "221B Baker St, San Francisco, CA" },
              { icon: Calendar, title: "Date of birth", value: "Jun 14, 1992" },
              { icon: Globe2, title: "Language & region", value: "English (US) · PDT" },
              { icon: Lock, title: "Password", value: "Last changed 3 months ago" },
              { icon: Fingerprint, title: "Biometric login", value: "Enabled · Face ID" },
              { icon: KeyRound, title: "Two-factor authentication", value: "Authenticator app · active" },
              { icon: Shield, title: "Login alerts", value: "Email + push notifications" },
              { icon: Bell, title: "Notifications", value: "Enabled for transactions & security" },
              { icon: Moon, title: "Appearance", value: `Theme: ${theme === 'dark' ? 'Dark' : 'Light'}`, isToggle: true },
              { icon: ShieldHalf, title: "Active sessions", value: "3 devices · San Francisco" },
              { icon: Link2, title: "Connected banks", value: "Chase · BofA · Fidelity · Ally" },
              { icon: FileText, title: "Documents & tax", value: "12 files · last updated today" },
            ].map((row, idx) => {
              const Icon = row.icon;
              const isThemeToggle = row.isToggle;
              return (
                <button
                  key={idx}
                  onClick={isThemeToggle ? toggleTheme : undefined}
                  className="w-full flex items-center gap-4 px-4 py-3.5 hover:bg-slate-900/60 text-left transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-300">
                    {isThemeToggle ? (theme === 'dark' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />) : <Icon className="w-4 h-4" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] text-white font-medium">{row.title}</p>
                    <p className="text-[11.5px] text-slate-500 truncate">{row.value}</p>
                  </div>
                  {!isThemeToggle && <ChevronRight className="w-4 h-4 text-slate-500 flex-shrink-0" />}
                  {isThemeToggle && <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">Toggle</span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-4">
          {/* Billing */}
          <div className="bg-[#11151c] border border-slate-800/70 rounded-xl p-5">
            <h3 className="text-[14px] font-semibold text-white mb-1">Plan & billing</h3>
            <p className="text-[12px] text-slate-500 mb-4">Subscription & usage</p>

            <div className="rounded-lg p-4 bg-gradient-to-br from-emerald-500/15 via-cyan-500/10 to-transparent border border-emerald-500/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-emerald-400 text-[12px] font-semibold">
                  <Crown className="w-3.5 h-3.5" /> FinEx Premium
                </div>
                <span className="text-[10.5px] uppercase tracking-wider text-slate-500">
                  Current plan
                </span>
              </div>
              <p className="text-[26px] font-semibold text-white mt-2 tabular-nums">$12.00<span className="text-[12px] font-normal text-slate-400">/month</span></p>
              <p className="text-[11.5px] text-slate-400 mt-1">Renews on Sep 15, 2025</p>
              <button className="mt-4 w-full bg-white text-[#0b0f14] text-[12.5px] font-semibold rounded-lg py-2">
                Upgrade to FinEx Business
              </button>
            </div>

            <div className="mt-4 space-y-2.5">
              {[
                { label: "Connected banks", value: "4 of 10" },
                { label: "Storage used", value: "2.3 GB of 10 GB" },
                { label: "API calls", value: "12,480 / 50,000" },
                { label: "Monthly reports", value: "3 generated" },
              ].map((m) => (
                <div key={m.label} className="flex items-center justify-between text-[12px]">
                  <span className="text-slate-400">{m.label}</span>
                  <span className="text-white font-medium tabular-nums">{m.value}</span>
                </div>
              ))}
            </div>

            <button className="mt-4 w-full text-[12px] text-emerald-400 font-medium hover:underline text-left">
              Manage billing →
            </button>
          </div>

          {/* Security score */}
          <div className="bg-[#11151c] border border-slate-800/70 rounded-xl p-5">
            <h3 className="text-[14px] font-semibold text-white mb-1">Security score</h3>
            <p className="text-[12px] text-slate-500 mb-4">Account protection</p>
            <div className="flex items-center gap-5">
              <div className="relative w-24 h-24 flex-shrink-0">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                  <path d="M18 2 a 16 16 0 1 1 0 32 a 16 16 0 1 1 0 -32" fill="none" stroke="#1f2937" strokeWidth="3" />
                  <path
                    d="M18 2 a 16 16 0 1 1 0 32 a 16 16 0 1 1 0 -32"
                    fill="none"
                    stroke="url(#secGrad)"
                    strokeWidth="3"
                    strokeDasharray="94, 100"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="secGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[22px] font-semibold text-white tabular-nums leading-none">94</span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5">Score</span>
                </div>
              </div>
              <div>
                <p className="text-white text-[13px] font-semibold">Excellent</p>
                <p className="text-[12px] text-slate-400 mt-0.5 leading-snug">
                  Add a hardware security key to reach a perfect 100.
                </p>
                <div className="flex items-center gap-1 mt-3 text-[11.5px] text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" /> 2FA · Strong password · Verified email
                </div>
              </div>
            </div>
          </div>

          {/* Help & logout */}
          <div className="bg-[#11151c] border border-slate-800/70 rounded-xl p-5 space-y-1">
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-[12.5px] text-slate-300 hover:bg-slate-900/60 hover:text-white">
              <HelpCircle className="w-4 h-4 text-slate-500" /> Help Center
              <ChevronRight className="w-3.5 h-3.5 text-slate-500 ml-auto" />
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-[12.5px] text-rose-400 hover:bg-rose-500/10">
              <LogOut className="w-4 h-4" /> Log out of all devices
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
