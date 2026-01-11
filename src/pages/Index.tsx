import { Link } from "react-router-dom";
import { ChevronRight, Music, Disc, Radio } from "lucide-react";
import Layout from "@/components/Layout";
import ArtistCard from "@/components/ArtistCard";
import { Button } from "@/components/ui/button";
import { artists, genres } from "@/data/artists";
import heroImage from "@/assets/hero-vinyl.jpg";
import vinylRecord from "@/assets/vinyl-record.jpg";
const Index = () => {
  const featuredArtists = artists.slice(0, 4);
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${heroImage})`
      }} />
        <div className="absolute inset-0 bg-gradient-to-b from-retro-blue/90 via-vinyl-black/70 to-vinyl-black" />
        
        {/* Floating Vinyl */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="relative w-64 h-64 animate-spin-slow">
            <img src={vinylRecord} alt="Vinyl" className="w-full h-full rounded-full object-cover border-4 border-retro-blue/30" />
            <div className="absolute inset-0 rounded-full vinyl-grooves" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-retro-blue flex items-center justify-center">
              <Disc className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Radio className="w-6 h-6 text-retro-blue animate-pulse" />
              <span className="text-retro-blue font-body text-sm tracking-widest uppercase">
                Музыкальный портал
              </span>
            </div>
            
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-none mb-6">
              <span className="text-primary-foreground">МУЗЫКА</span>
              <br />
              <span className="text-gradient-orange">80-х ГОДОВ</span>
            </h1>
            
            <p className="text-lg md:text-xl max-w-xl mb-8 leading-relaxed text-muted">
              Погрузитесь в золотую эру синтезаторов, виниловых пластинок и неповторимого стиля. 
              Откройте для себя легендарных исполнителей, изменивших мир музыки навсегда.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/artists">
                <Button variant="retro" size="xl">
                  Исполнители
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/discography">
                <Button variant="vinyl" size="xl" className="border-retro-blue text-retro-blue hover:bg-retro-blue hover:text-primary-foreground">
                  Дискография
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-accent rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Music Styles Section */}
      <section className="py-20 bg-secondary text-retro-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 bg-retro-cream">
            <span className="text-sm tracking-widest uppercase font-body text-vinyl-black">Жанры эпохи</span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mt-2">
              СТИЛИ И НАПРАВЛЕНИЯ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {genres.map((genre, index) => <div key={genre.name} className="bg-card border border-border rounded-lg p-8 card-hover relative overflow-hidden group">
                {/* Index Number */}
                <span className="absolute top-4 right-4 font-display text-6xl text-accent/10 group-hover:text-accent/20 transition-colors">
                  0{index + 1}
                </span>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Music className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-foreground mb-3">{genre.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {genre.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {genre.artists.map(artist => <span key={artist} className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full border border-accent/20">
                          {artist}
                        </span>)}
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Featured Artists Section */}
      <section className="py-20 bg-background text-retro-cream">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <span className="text-accent text-sm tracking-widest uppercase font-body">Легенды эпохи</span>
              <h2 className="font-display text-5xl md:text-6xl text-foreground mt-2">
                ИСПОЛНИТЕЛИ
              </h2>
            </div>
            <Link to="/artists" className="text-accent hover:text-accent/80 transition-colors flex items-center gap-2 mt-4 md:mt-0">
              <span className="font-body text-sm">Смотреть всех</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredArtists.map(artist => <ArtistCard key={artist.id} id={artist.id} name={artist.name} genre={artist.genre.split(" / ")[0]} imageUrl={artist.photos[0].url} />)}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <span className="font-display text-5xl text-[#ff8c00]">10+</span>
              <p className="text-sm mt-2 text-retro-cream">Исполнителей</p>
            </div>
            <div>
              <span className="font-display text-5xl text-[#ff8c00]">50+</span>
              <p className="text-sm mt-2 text-retro-cream">Альбомов</p>
            </div>
            <div>
              <span className="font-display text-5xl text-[#ff8c00]">200+</span>
              <p className="text-sm mt-2 text-retro-cream">Треков</p>
            </div>
            <div>
              <span className="font-display text-5xl text-[#ff8c00]">80-е</span>
              <p className="text-sm mt-2 text-retro-cream">Золотая эра</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-retro-blue to-retro-blue/80 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-4 border-accent animate-pulse" />
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full border-4 border-accent animate-spin-slow" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mb-6">
            ОКУНИТЕСЬ В АТМОСФЕРУ 80-х
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8">
            Исследуйте галерею редких фотографий, узнайте интересные факты о любимых группах 
            и погрузитесь в эпоху, которая изменила музыку навсегда.
          </p>
          <Link to="/gallery">
            <Button variant="retro" size="xl">
              Открыть галерею
              <ChevronRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>;
};
export default Index;