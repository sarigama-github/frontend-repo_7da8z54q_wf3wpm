import { Image as ImageIcon, MessageCircle, Heart, Send, Camera, AtSign } from 'lucide-react';

const mockPosts = [
  {
    id: 'p1',
    user: 'Aiko',
    avatar: 'https://i.pravatar.cc/100?img=5',
    image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop',
    text: 'Sketched my favorite scene from Neon Shogun ✨',
    likes: 248,
    comments: 32,
  },
  {
    id: 'p2',
    user: 'Kenji',
    avatar: 'https://i.pravatar.cc/100?img=12',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
    text: 'Chapter 27 of Starlight Chronicles broke me 😭',
    likes: 401,
    comments: 57,
  },
];

function Post({ p }) {
  return (
    <article className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
      <header className="flex items-center gap-3 p-4">
        <img src={p.avatar} alt={p.user} className="w-9 h-9 rounded-full" />
        <div>
          <div className="font-medium">{p.user}</div>
          <div className="text-xs text-white/50">@{p.user.toLowerCase()}</div>
        </div>
      </header>
      <div className="aspect-video bg-black/30">
        <img src={p.image} alt="post" className="w-full h-full object-cover" />
      </div>
      <div className="p-4 space-y-3">
        <p className="text-sm">{p.text}</p>
        <div className="flex items-center gap-6 text-white/70">
          <button className="inline-flex items-center gap-1 hover:text-white"><Heart className="w-5 h-5" /> {p.likes}</button>
          <button className="inline-flex items-center gap-1 hover:text-white"><MessageCircle className="w-5 h-5" /> {p.comments}</button>
          <button className="ml-auto inline-flex items-center gap-1 hover:text-white"><Send className="w-5 h-5" /> Share</button>
        </div>
      </div>
    </article>
  );
}

export default function SocialHub() {
  return (
    <section className="space-y-8">
      <div className="flex items-center gap-3">
        <Camera className="w-5 h-5 text-indigo-400" />
        <h2 className="text-xl font-semibold">Social • Posts & Chats</h2>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-3">
        <div className="flex items-center gap-2">
          <AtSign className="w-4 h-4 text-white/60" />
          <input className="flex-1 bg-white/5 border border-white/10 rounded-md px-3 py-2 outline-none placeholder:text-white/40" placeholder="Share a thought, a clip, or a sketch..." />
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600/80 hover:bg-indigo-600">
            <ImageIcon className="w-4 h-4" /> Post
          </button>
        </div>
        <p className="text-xs text-white/50">Demo only: posts are mocked. A full version would support media uploads, comments, and DMs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockPosts.map(p => (
          <Post key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}
