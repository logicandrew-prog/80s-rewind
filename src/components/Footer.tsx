import { Link } from "react-router-dom";
import { Disc, Mail, Music } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-vinyl-black border-t border-accent/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <Disc className="w-8 h-8 text-accent" />
              <span className="font-display text-xl tracking-wider">
                <span className="text-accent">ORANGE</span>
                <span className="text-primary-foreground">BLUE</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Портал, посвящённый легендарной музыке 80-х годов. 
              Откройте для себя эпоху синтезаторов, виниловых пластинок и неповторимого стиля.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display text-lg text-accent tracking-wider">НАВИГАЦИЯ</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                Главная
              </Link>
              <Link to="/artists" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                Исполнители
              </Link>
              <Link to="/discography" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                Дискография
              </Link>
              <Link to="/gallery" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                Галерея
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                Обратная связь
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-display text-lg text-accent tracking-wider">КОНТАКТЫ</h3>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Mail className="w-4 h-4 text-accent" />
              <span>info@orangeblue.music</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Music className="w-4 h-4 text-accent" />
              <span>Музыка объединяет поколения</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-accent/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            © 2024 OrangeBlue. Все права защищены.
          </p>
          <p className="text-muted-foreground text-xs flex items-center gap-2">
            Создано с <span className="text-accent">♥</span> для любителей музыки 80-х
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
