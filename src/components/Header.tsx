import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Disc } from "lucide-react";
const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [{
    path: "/",
    label: "Главная"
  }, {
    path: "/artists",
    label: "Исполнители"
  }, {
    path: "/discography",
    label: "Дискография"
  }, {
    path: "/gallery",
    label: "Галерея"
  }, {
    path: "/contact",
    label: "Обратная связь"
  }];
  const isActive = (path: string) => location.pathname === path;
  return <header className="fixed top-0 left-0 right-0 z-50 bg-accent backdrop-blur-md border-b border-retro-blue/30">
      <div className="container mx-auto px-4">
        <div className="h-20 text-[#ff8c00] py-0 flex items-end justify-between mt-[10px] mb-[30px] pb-0">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group mb-0">
            <div className="relative">
              <Disc className="w-12 h-12 group-hover:animate-spin-slow transition-all text-primary-foreground pb-0 border-8 border-dashed border-vinyl-groove shadow-none rounded-full" />
              <div className="absolute inset-0 bg-retro-blue rounded-full scale-50 opacity-65 border-solid border-8 border-retro-cream" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold tracking-wider text-retro-blue text-5xl">
                orangeblue
              </span>
              <span className="text-xs tracking-widest font-semibold font-serif text-vinyl-black text-right pt-[2px] py-0"> music of the 80's</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`font-body text-sm tracking-wide transition-all duration-300 relative group ${isActive(link.path) ? "text-retro-blue font-semibold" : "text-retro-blue/80 hover:text-retro-blue"}`}>
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-retro-blue transition-all duration-300 ${isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>)}
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-retro-blue p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="md:hidden py-4 border-t border-retro-blue/20">
            {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsMenuOpen(false)} className={`block py-3 font-body text-sm tracking-wide transition-all ${isActive(link.path) ? "text-retro-blue font-semibold" : "text-retro-blue/70"}`}>
                {link.label}
              </Link>)}
          </nav>}
      </div>
    </header>;
};
export default Header;