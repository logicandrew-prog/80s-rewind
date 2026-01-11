import { useState } from "react";
import Layout from "@/components/Layout";
import { artists } from "@/data/artists";
import { Camera, X } from "lucide-react";
interface Photo {
  url: string;
  caption: string;
  artist: string;
}
const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  // Collect all photos from all artists
  const allPhotos: Photo[] = artists.flatMap(artist => artist.photos.map(photo => ({
    ...photo,
    artist: artist.name
  })));
  return <Layout>
      {/* Hero */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Camera className="w-6 h-6 text-[#ff8c00]" />
            <span className="text-sm tracking-widest uppercase font-body text-[#ff8c00]">
              Фотоархив
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-primary-foreground">
            ГАЛЕРЕЯ
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Концертные, студийные и редкие фотографии легендарных исполнителей 80-х годов. 
            Нажмите на фото для просмотра в полном размере.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-orange-100">
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {allPhotos.map((photo, index) => <div key={index} onClick={() => setSelectedPhoto(photo)} className="break-inside-avoid group relative overflow-hidden rounded-lg cursor-pointer">
                <img src={photo.url} alt={photo.caption} className="w-full object-cover transition-transform duration-500 group-hover:scale-105 photo-vintage" />
                <div className="absolute inset-0 bg-gradient-to-t from-vinyl-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-xs tracking-wide uppercase text-[#ff8c00]">
                      {photo.artist}
                    </span>
                    <p className="text-primary-foreground text-sm mt-1">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedPhoto && <div className="fixed inset-0 z-50 bg-vinyl-black/95 flex items-center justify-center p-4" onClick={() => setSelectedPhoto(null)}>
          <button onClick={() => setSelectedPhoto(null)} className="absolute top-6 right-6 text-primary-foreground hover:text-accent transition-colors">
            <X className="w-8 h-8" />
          </button>
          
          <div className="max-w-5xl max-h-[90vh] relative" onClick={e => e.stopPropagation()}>
            <img src={selectedPhoto.url} alt={selectedPhoto.caption} className="max-w-full max-h-[80vh] object-contain rounded-lg" />
            <div className="mt-4 text-center">
              <span className="text-accent text-sm tracking-wide uppercase">
                {selectedPhoto.artist}
              </span>
              <p className="text-primary-foreground mt-1">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>}
    </Layout>;
};
export default Gallery;