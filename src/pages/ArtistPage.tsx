import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Users, Disc, Star } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { getArtistById } from "@/data/artists";

const ArtistPage = () => {
  const { id } = useParams<{ id: string }>();
  const artist = getArtistById(id || "");

  if (!artist) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-4xl text-foreground mb-4">
              Исполнитель не найден
            </h1>
            <Link to="/artists">
              <Button variant="retro">
                <ArrowLeft className="w-4 h-4" />
                Вернуться к списку
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${artist.photos[0].url})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-vinyl-black via-vinyl-black/70 to-transparent" />
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          <Link 
            to="/artists" 
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-body">Все исполнители</span>
          </Link>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-4">
            {artist.name}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Disc className="w-4 h-4 text-accent" />
              <span className="text-sm">{artist.genre}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-sm">{artist.country}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-accent" />
              <span className="text-sm">{artist.yearsActive}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Info */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="font-display text-3xl text-foreground mb-4">О ГРУППЕ</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {artist.description}
                </p>
              </div>

              {/* Members */}
              {artist.members && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="w-5 h-5 text-accent" />
                    <h2 className="font-display text-3xl text-foreground">СОСТАВ</h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {artist.members.map((member) => (
                      <span 
                        key={member}
                        className="px-4 py-2 bg-secondary rounded-lg text-foreground text-sm border border-border"
                      >
                        {member}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Fun Facts */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Star className="w-5 h-5 text-accent" />
                  <h2 className="font-display text-3xl text-foreground">ИНТЕРЕСНЫЕ ФАКТЫ</h2>
                </div>
                <ul className="space-y-4">
                  {artist.funFacts.map((fact, index) => (
                    <li 
                      key={index}
                      className="flex gap-4 p-4 bg-secondary rounded-lg border border-border"
                    >
                      <span className="font-display text-2xl text-accent">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-muted-foreground">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Photos */}
              <div>
                <h2 className="font-display text-3xl text-foreground mb-6">ФОТОГРАФИИ</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {artist.photos.map((photo, index) => (
                    <div 
                      key={index}
                      className="relative group overflow-hidden rounded-lg aspect-square"
                    >
                      <img 
                        src={photo.url} 
                        alt={photo.caption}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 photo-vintage"
                      />
                      <div className="absolute inset-0 bg-vinyl-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="text-primary-foreground text-sm">{photo.caption}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Discography Sidebar */}
            <div>
              <div className="sticky top-24">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-display text-2xl text-foreground mb-6">ДИСКОГРАФИЯ</h3>
                  <div className="space-y-4">
                    {artist.albums.slice(0, 4).map((album) => (
                      <div 
                        key={album.title}
                        className="flex gap-4 p-3 bg-secondary rounded-lg group hover:bg-accent/10 transition-colors cursor-pointer"
                      >
                        <img 
                          src={album.cover} 
                          alt={album.title}
                          className="w-16 h-16 rounded object-cover"
                        />
                        <div>
                          <h4 className="font-body font-medium text-foreground group-hover:text-accent transition-colors">
                            {album.title}
                          </h4>
                          <span className="text-muted-foreground text-sm">{album.year}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/discography" className="block mt-6">
                    <Button variant="neon" className="w-full">
                      Полная дискография
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ArtistPage;
