import { useState } from 'react';
import NavBar from './components/NavBar.jsx';
import DiscoverRead from './components/DiscoverRead.jsx';
import WatchHub from './components/WatchHub.jsx';
import SocialHub from './components/SocialHub.jsx';

function App() {
  const [active, setActive] = useState('read');

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-950 text-white">
      <NavBar active={active} onSelect={setActive} />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {active === 'read' && <DiscoverRead />}
        {active === 'watch' && <WatchHub />}
        {active === 'social' && <SocialHub />}
      </main>

      <footer className="border-t border-white/10 mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-white/60">
          Built for fans of stories, art, and games — have fun and be kind.
        </div>
      </footer>
    </div>
  );
}

export default App;
