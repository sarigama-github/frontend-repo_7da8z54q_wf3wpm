import { Home, BookOpen, PlayCircle, Users, Gamepad2, Search } from 'lucide-react';

const tabs = [
  { key: 'read', label: 'Read', icon: BookOpen },
  { key: 'watch', label: 'Watch', icon: PlayCircle },
  { key: 'social', label: 'Social', icon: Users },
  // Future: games and voice chat
];

export default function NavBar({ active, onSelect }) {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-900/70 bg-slate-900/80 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Home className="w-6 h-6 text-indigo-400" />
            <span className="font-semibold tracking-wide">Otaku Nexus</span>
          </div>

          <nav className="flex items-center gap-2">
            {tabs.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => onSelect(key)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors text-sm hover:bg-white/5 ${
                  active === key ? 'bg-indigo-500/20 text-white' : 'text-white/70'
                }`}
                aria-pressed={active === key}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </button>
            ))}
          </nav>

          <div className="relative hidden sm:block">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />
            <input
              className="bg-white/5 border border-white/10 text-white rounded-md pl-9 pr-3 py-2 outline-none placeholder:text-white/40 focus:ring-2 focus:ring-indigo-500/50"
              placeholder="Search titles, creators, tags..."
            />
          </div>
        </div>
      </div>
    </header>
  );
}
