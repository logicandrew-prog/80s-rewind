import { Link } from "react-router-dom";
import { Music } from "lucide-react";
interface ArtistCardProps {
  id: string;
  name: string;
  genre: string;
  imageUrl: string;
}
const ArtistCard = ({
  id,
  name,
  genre,
  imageUrl
}: ArtistCardProps) => {
  return <Link to={`/artist/${id}`} className="group relative overflow-hidden rounded-lg bg-card border border-border card-hover block">
      {/* Image */}
      <div className="aspect-square overflow-hidden">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 photo-vintage" />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-vinyl-black via-vinyl-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
      </div>

      {/* Vinyl Record Effect */}
      <div className="absolute top-4 right-4 w-16 h-16 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-180">
        <div className="w-full h-full rounded-full bg-vinyl-black border-2 border-accent/50 flex items-center justify-center vinyl-grooves">
          <div className="w-4 h-4 rounded-full bg-accent" />
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="flex items-center gap-2 mb-2">
          <Music className="w-4 h-4 text-accent" />
          <span className="text-xs text-accent font-medium tracking-wide uppercase">{genre}</span>
        </div>
        <h3 className="font-display text-2xl text-primary-foreground tracking-wide group-hover:text-accent transition-colors">
          {name}
        </h3>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent transition-colors rounded-lg text-[#ff8c00]" />
    </Link>;
};
export default ArtistCard;