import { Search } from "lucide-react";

interface TopbarProps {
  title: string;
  subtitle?: string;
}

export default function Topbar({}: TopbarProps) {
  return (
    <header className="flex items-center px-8 py-5">
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-3 py-2.5 bg-slate-900/60 rounded-lg text-[13px] text-slate-200 placeholder:text-slate-500 focus:outline-none"
        />
      </div>
    </header>
  );
}
