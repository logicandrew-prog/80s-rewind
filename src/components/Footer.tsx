import { Link } from "react-router-dom";
import { Disc, Mail, Music } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent border-t border-retro-blue/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <Disc className="w-8 h-8 text-retro-blue" />
              <span className="font-display text-xl tracking-wider text-retro-blue">
                orangeblue
              </span>
            </Link>
            <p className="text-retro-blue/80 text-sm leading-relaxed">
              Портал, посвящённый легендарной музыке 80-х годов. 
              Откройте для себя эпоху синтезаторов, виниловых пластинок и неповторимого стиля.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display text-lg text-retro-blue tracking-wider">НАВИГАЦИЯ</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-retro-blue/80 hover:text-retro-blue transition-colors text-sm">
                Главная
              </Link>
              <Link to="/artists" className="text-retro-blue/80 hover:text-retro-blue transition-colors text-sm">
                Исполнители
              </Link>
              <Link to="/discography" className="text-retro-blue/80 hover:text-retro-blue transition-colors text-sm">
                Дискография
              </Link>
              <Link to="/gallery" className="text-retro-blue/80 hover:text-retro-blue transition-colors text-sm">
                Галерея
              </Link>
              <Link to="/contact" className="text-retro-blue/80 hover:text-retro-blue transition-colors text-sm">
                Обратная связь
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-display text-lg text-retro-blue tracking-wider">КОНТАКТЫ</h3>
            <div className="flex items-center gap-2 text-retro-blue/80 text-sm">
              <Mail className="w-4 h-4 text-retro-blue" />
              <span>info@orangeblue.music</span>
            </div>
            <div className="flex items-center gap-2 text-retro-blue/80 text-sm">
              <Music className="w-4 h-4 text-retro-blue" />
              <span>Музыка объединяет поколения</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-retro-blue/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-retro-blue/70 text-xs">
            © 2024 orangeblue. Все права защищены.
          </p>
          <p className="text-retro-blue/70 text-xs flex items-center gap-2">
            Создано с <span className="text-retro-blue">♥</span> для любителей музыки 80-х
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
