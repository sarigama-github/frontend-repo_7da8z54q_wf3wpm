import { PlayCircle, Youtube, Link as LinkIcon } from 'lucide-react';

const featured = [
  {
    id: 'yt1',
    title: 'Studio Ghibli Ambience — 4K',
    channel: 'Cozy Scenes',
    url: 'https://www.youtube.com/embed/2Xc9gXyf2G4',
  },
  {
    id: 'yt2',
    title: 'AMV — Neon Samurai',
    channel: 'AMV Lab',
    url: 'https://www.youtube.com/embed/oHg5SJYRHA0',
  },
];

function VideoCard({ v }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-indigo-500/40 transition-colors">
      <div className="aspect-video">
        <iframe
          className="w-full h-full"
          src={v.url}
          title={v.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold leading-tight">{v.title}</h3>
            <p className="text-sm text-white/60">{v.channel}</p>
          </div>
          <Youtube className="w-5 h-5 text-red-400" />
        </div>
      </div>
    </div>
  );
}

export default function WatchHub() {
  return (
    <section className="space-y-8">
      <div className="flex items-center gap-3">
        <PlayCircle className="w-5 h-5 text-indigo-400" />
        <h2 className="text-xl font-semibold">Watch • YouTube</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {featured.map(v => (
          <VideoCard key={v.id} v={v} />
        ))}
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-3">
        <h3 className="font-medium">Add a YouTube video</h3>
        <div className="flex flex-col sm:flex-row gap-3">
          <input className="flex-1 bg-white/5 border border-white/10 rounded-md px-3 py-2 outline-none placeholder:text-white/40" placeholder="Paste a YouTube link" />
          <button className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-indigo-600/80 hover:bg-indigo-600">
            <LinkIcon className="w-4 h-4" /> Add
          </button>
        </div>
        <p className="text-xs text-white/50">This is a demo UI. In a full version, pasted links would be saved and shared.</p>
      </div>
    </section>
  );
}
