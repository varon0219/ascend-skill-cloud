import { BookOpen, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-primary to-primary-glow rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                EduPlatform
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              La plataforma educativa más completa para aprender y enseñar. 
              Únete a miles de estudiantes e instructores que ya están transformando su futuro.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mr-2" />
                contacto@eduplatform.com
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/cursos" className="text-muted-foreground hover:text-primary transition-colors">
                  Catálogo de Cursos
                </Link>
              </li>
              <li>
                <Link to="/como-funciona" className="text-muted-foreground hover:text-primary transition-colors">
                  Cómo Funciona
                </Link>
              </li>
              <li>
                <Link to="/instructores" className="text-muted-foreground hover:text-primary transition-colors">
                  Para Instructores
                </Link>
              </li>
              <li>
                <Link to="/certificados" className="text-muted-foreground hover:text-primary transition-colors">
                  Certificados
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Soporte</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/ayuda" className="text-muted-foreground hover:text-primary transition-colors">
                  Centro de Ayuda
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/terminos" className="text-muted-foreground hover:text-primary transition-colors">
                  Términos de Uso
                </Link>
              </li>
              <li>
                <Link to="/privacidad" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 EduPlatform. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;