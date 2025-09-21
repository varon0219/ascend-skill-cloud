import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, Menu, User, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-r from-primary to-primary-glow rounded-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              EduPlatform
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/cursos" className="text-foreground hover:text-primary transition-colors">
              Catálogo
            </Link>
            <Link to="/como-funciona" className="text-foreground hover:text-primary transition-colors">
              Cómo funciona
            </Link>
            <Link to="/instructores" className="text-foreground hover:text-primary transition-colors">
              Para Instructores
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/login">Iniciar Sesión</Link>
            </Button>
            <Button variant="hero" asChild>
              <Link to="/registro">Comenzar Gratis</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/cursos" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Catálogo
              </Link>
              <Link 
                to="/como-funciona" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Cómo funciona
              </Link>
              <Link 
                to="/instructores" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Para Instructores
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" asChild>
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                    Iniciar Sesión
                  </Link>
                </Button>
                <Button variant="hero" asChild>
                  <Link to="/registro" onClick={() => setIsMenuOpen(false)}>
                    Comenzar Gratis
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;