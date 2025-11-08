import { Sparkles, BookMarked, BookOpen, Tag } from 'lucide-react';

const mockNovels = [
  {
    id: 'n1',
    title: 'Starlight Chronicles',
    type: 'Novel',
    cover: 'https://images.unsplash.com/photo-1526312426976-593c2b999fb4?q=80&w=1200&auto=format&fit=crop',
    tags: ['fantasy', 'adventure'],
    desc: 'A guild of misfits chases falling stars to rewrite fate.'
  },
  {
    id: 'm1',
    title: 'Neon Shogun',
    type: 'Manga',
    cover: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop',
    tags: ['cyberpunk', 'samurai'],
    desc: 'He slices through code and steel in a city of neon.'
  },
  {
    id: 'm2',
    title: 'Bloom Academy',
    type: 'Manga',
    cover: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200&auto=format&fit=crop',
    tags: ['slice of life', 'romance'],
    desc: 'Friendship, clubs, and confessions in springtime.'
  },
];

function Card({ item }) {
  return (
    <div className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-indigo-500/40 transition-colors">
      <div className="aspect-[3/4] overflow-hidden">
        <img src={item.cover} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs px-2 py-1 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-400/20">{item.type}</span>
          <div className="flex gap-2 text-white/60 text-xs">
            {item.tags.slice(0,2).map(t => (
              <span key={t} className="inline-flex items-center gap-1"><Tag className="w-3 h-3" /> {t}</span>
            ))}
          </div>
        </div>
        <h3 className="font-semibold">{item.title}</h3>
        <p className="text-sm text-white/70 line-clamp-2">{item.desc}</p>
        <div className="pt-2">
          <button className="w-full text-center bg-indigo-600/80 hover:bg-indigo-600 text-white rounded-md px-3 py-2 text-sm">Open</button>
        </div>
      </div>
    </div>
  );
}

export default function DiscoverRead() {
  return (
    <section className="space-y-8">
      <div className="flex items-center gap-3">
        <Sparkles className="w-5 h-5 text-indigo-400" />
        <h2 className="text-xl font-semibold">Discover • Read</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockNovels.map(item => (
          <Card key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-2 text-sm text-white/60">
        Looking for something new? Try our curated lists in fantasy, romance, and sci‑fi.
      </div>
    </section>
  );
}
