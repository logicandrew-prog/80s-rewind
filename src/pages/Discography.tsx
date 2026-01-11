import { useState } from "react";
import Layout from "@/components/Layout";
import { artists } from "@/data/artists";
import { Disc, Music, ChevronDown, ChevronUp } from "lucide-react";
const Discography = () => {
  const [expandedAlbums, setExpandedAlbums] = useState<string[]>([]);
  const toggleAlbum = (albumKey: string) => {
    setExpandedAlbums(prev => prev.includes(albumKey) ? prev.filter(k => k !== albumKey) : [...prev, albumKey]);
  };
  return <Layout>
      {/* Hero */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Disc className="w-6 h-6 text-[#ff8c00]" />
            <span className="text-sm tracking-widest uppercase font-body text-[#ff8c00]">
              Коллекция
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-primary-foreground">
            ДИСКОГРАФИЯ
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Полная коллекция альбомов легендарных исполнителей 80-х годов. 
            Нажмите на альбом, чтобы увидеть список треков.
          </p>
        </div>
      </section>

      {/* Discography Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {artists.map(artist => <div key={artist.id} className="mb-16">
              {/* Artist Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Music className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="font-display text-3xl text-foreground">{artist.name}</h2>
                  <span className="text-muted-foreground text-sm">{artist.albums.length} альбомов</span>
                </div>
              </div>

              {/* Albums Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {artist.albums.map(album => {
              const albumKey = `${artist.id}-${album.title}`;
              const isExpanded = expandedAlbums.includes(albumKey);
              return <div key={albumKey} className="bg-card border border-border rounded-lg overflow-hidden card-hover">
                      {/* Album Cover */}
                      <div className="relative aspect-square overflow-hidden">
                        <img src={album.cover} alt={album.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-vinyl-black/80 to-transparent" />
                        
                        {/* Vinyl Overlay */}
                        <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-vinyl-black border-2 border-accent/30 vinyl-grooves opacity-80">
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-accent" />
                        </div>

                        {/* Album Info Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <span className="text-accent text-sm font-display">{album.year}</span>
                          <h3 className="font-display text-xl text-primary-foreground">{album.title}</h3>
                        </div>
                      </div>

                      {/* Tracks Toggle */}
                      <button onClick={() => toggleAlbum(albumKey)} className="w-full p-4 flex items-center justify-between bg-secondary hover:bg-accent/10 transition-colors">
                        <span className="text-sm text-muted-foreground">
                          {album.tracks.length} треков
                        </span>
                        {isExpanded ? <ChevronUp className="w-4 h-4 text-accent" /> : <ChevronDown className="w-4 h-4 text-accent" />}
                      </button>

                      {/* Tracks List */}
                      {isExpanded && <div className="p-4 border-t border-border">
                          <ol className="space-y-2">
                            {album.tracks.map((track, index) => <li key={index} className="flex items-center gap-3 text-sm">
                                <span className="text-accent font-display w-6">
                                  {String(index + 1).padStart(2, '0')}
                                </span>
                                <span className="text-muted-foreground">{track}</span>
                              </li>)}
                          </ol>
                        </div>}
                    </div>;
            })}
              </div>
            </div>)}
        </div>
      </section>
    </Layout>;
};
export default Discography;