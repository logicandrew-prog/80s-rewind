import Layout from "@/components/Layout";
import ArtistCard from "@/components/ArtistCard";
import { artists } from "@/data/artists";
import { Music } from "lucide-react";
const Artists = () => {
  return <Layout className="bg-slate-800">
      {/* Hero */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Music className="w-6 h-6 text-accent" />
            <span className="text-accent text-sm tracking-widest uppercase font-body">
              Каталог
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-primary-foreground">
            ИСПОЛНИТЕЛИ
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Легендарные группы и артисты 80-х годов. Нажмите на карточку исполнителя, 
            чтобы узнать его историю, дискографию и интересные факты.
          </p>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {artists.map(artist => <ArtistCard key={artist.id} id={artist.id} name={artist.name} genre={artist.genre.split(" / ")[0]} imageUrl={artist.photos[0].url} />)}
          </div>
        </div>
      </section>
    </Layout>;
};
export default Artists;