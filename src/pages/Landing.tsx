import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { 
  BookOpen, 
  Users, 
  Award, 
  Play, 
  Star, 
  CheckCircle, 
  TrendingUp,
  Clock,
  Globe,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-education.jpg";

const Landing = () => {
  const mockCourses = [
    {
      id: "1",
      title: "Desarrollo Web Completo con React",
      instructor: "María González",
      description: "Aprende React desde cero hasta nivel avanzado con proyectos reales",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop",
      price: 99,
      isFree: false,
      rating: 4.8,
      students: 1234,
      duration: "40 horas",
      level: "Intermedio" as const,
      categories: ["Programación", "React"]
    },
    {
      id: "2",
      title: "Introducción a Python",
      instructor: "Carlos Rodríguez",
      description: "Curso gratuito para aprender los fundamentos de Python",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=500&h=300&fit=crop",
      price: 0,
      isFree: true,
      rating: 4.6,
      students: 2891,
      duration: "20 horas",
      level: "Principiante" as const,
      categories: ["Programación", "Python"]
    },
    {
      id: "3",
      title: "Marketing Digital Avanzado",
      instructor: "Ana López",
      description: "Estrategias avanzadas de marketing digital y growth hacking",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      price: 149,
      isFree: false,
      rating: 4.9,
      students: 756,
      duration: "35 horas",
      level: "Avanzado" as const,
      categories: ["Marketing", "Negocios"]
    }
  ];

  const stats = [
    { icon: Users, label: "Estudiantes Activos", value: "50,000+" },
    { icon: BookOpen, label: "Cursos Disponibles", value: "1,200+" },
    { icon: Award, label: "Certificados Emitidos", value: "25,000+" },
    { icon: Star, label: "Calificación Promedio", value: "4.8/5" }
  ];

  const features = [
    {
      icon: Play,
      title: "Aprende a tu ritmo",
      description: "Accede al contenido 24/7 desde cualquier dispositivo"
    },
    {
      icon: Award,
      title: "Certificados reconocidos",
      description: "Obtén certificados verificables al completar los cursos"
    },
    {
      icon: Users,
      title: "Comunidad activa",
      description: "Conecta con estudiantes e instructores de todo el mundo"
    },
    {
      icon: Shield,
      title: "Garantía de calidad",
      description: "Todos nuestros cursos pasan por un riguroso proceso de revisión"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-primary-glow/5 to-secondary/5">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-gradient-to-r from-primary to-primary-glow text-white">
                  🎓 Plataforma Educativa #1
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Transforma tu
                  <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                    Futuro Profesional
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground mt-6 max-w-lg">
                  Aprende nuevas habilidades con cursos diseñados por expertos. 
                  Obtén certificados reconocidos y avanza en tu carrera.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="text-lg px-8" asChild>
                  <Link to="/cursos">
                    <Play className="mr-2 h-5 w-5" />
                    Explorar Cursos
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8" asChild>
                  <Link to="/instructores">
                    <TrendingUp className="mr-2 h-5 w-5" />
                    Enseña con Nosotros
                  </Link>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src={heroImage} 
                  alt="Estudiantes aprendiendo online" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-card">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108755-2616b612b1c6?w=50&h=50&fit=crop&crop=face" alt="" />
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face" alt="" />
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face" alt="" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">+1,000 estudiantes</p>
                    <p className="text-xs text-muted-foreground">se unieron hoy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Por qué elegir EduPlatform?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nuestra plataforma está diseñada para ofrecerte la mejor experiencia de aprendizaje
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-card transition-shadow bg-gradient-card border-0">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cursos Destacados
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubre nuestros cursos más populares y comienza tu transformación profesional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {mockCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/cursos">
                Ver Todos los Cursos
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para comenzar tu viaje de aprendizaje?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Únete a miles de estudiantes que ya están transformando sus carreras
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="text-lg px-8" asChild>
                <Link to="/registro">
                  Comenzar Gratis
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                <Link to="/cursos">
                  Explorar Cursos
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;