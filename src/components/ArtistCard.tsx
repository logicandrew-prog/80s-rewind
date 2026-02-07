import { Link } from "react-router-dom";
import { Music } from "lucide-react";

interface ArtistCardProps {
  id: string;
  name: string;
  genre: string;
  imageUrl: string;
  logoUrl?: string;
}

const ArtistCard = ({
  id,
  name,
  genre,
  imageUrl,
  logoUrl
}: ArtistCardProps) => {
  return (
    <Link to={`/artist/${id}`} className="group relative overflow-hidden rounded-lg bg-card border border-border card-hover block">
      {/* Background Image */}
      <div className="aspect-square overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 photo-vintage"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-vinyl-black via-vinyl-black/60 to-vinyl-black/20 opacity-70 group-hover:opacity-85 transition-opacity" />
      </div>

      {/* Logo */}
      {logoUrl && (
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <img
            src={logoUrl}
            alt={`${name} logo`}
            className="max-w-[70%] max-h-[40%] object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      )}

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
        <div className="flex items-center gap-2 mb-2">
          <Music className="w-4 h-4 text-accent" />
          <span className="text-xs text-accent font-medium tracking-wide uppercase">{genre}</span>
        </div>
        <h3 className="font-display text-2xl text-primary-foreground tracking-wide group-hover:text-accent transition-colors">
          {name}
        </h3>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent transition-colors rounded-lg" />
    </Link>
  );
};

export default ArtistCard;
