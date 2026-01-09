import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Disc } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Главная" },
    { path: "/artists", label: "Исполнители" },
    { path: "/discography", label: "Дискография" },
    { path: "/gallery", label: "Галерея" },
    { path: "/contact", label: "Обратная связь" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-vinyl-black/95 backdrop-blur-md border-b border-accent/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Disc className="w-10 h-10 text-accent group-hover:animate-spin-slow transition-all" />
              <div className="absolute inset-0 bg-primary rounded-full scale-50 opacity-50" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl tracking-wider">
                <span className="text-accent">ORANGE</span>
                <span className="text-primary-foreground">BLUE</span>
              </span>
              <span className="text-xs text-muted-foreground tracking-widest">МУЗЫКА 80-х</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body text-sm tracking-wide transition-all duration-300 relative group ${
                  isActive(link.path)
                    ? "text-accent"
                    : "text-primary-foreground/70 hover:text-accent"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                    isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-primary-foreground p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-accent/20">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 font-body text-sm tracking-wide transition-all ${
                  isActive(link.path)
                    ? "text-accent"
                    : "text-primary-foreground/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
