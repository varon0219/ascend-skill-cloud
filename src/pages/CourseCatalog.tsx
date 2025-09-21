import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { Search, Filter, Grid, List } from "lucide-react";

const CourseCatalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = [
    "Programación", "Marketing", "Diseño", "Negocios", "Idiomas", "Fotografía", "Música", "Salud"
  ];

  const mockCourses = [
    {
      id: "1",
      title: "Desarrollo Web Completo con React",
      instructor: "María González",
      description: "Aprende React desde cero hasta nivel avanzado con proyectos reales y las mejores prácticas de la industria",
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
      description: "Curso gratuito para aprender los fundamentos de Python y la programación desde cero",
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
      description: "Estrategias avanzadas de marketing digital, SEO, SEM y growth hacking para hacer crecer tu negocio",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      price: 149,
      isFree: false,
      rating: 4.9,
      students: 756,
      duration: "35 horas",
      level: "Avanzado" as const,
      categories: ["Marketing", "Negocios"]
    },
    {
      id: "4",
      title: "Diseño UX/UI con Figma",
      instructor: "Laura Martínez",
      description: "Aprende a diseñar interfaces de usuario atractivas y experiencias de usuario excepcionales",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
      price: 79,
      isFree: false,
      rating: 4.7,
      students: 892,
      duration: "25 horas",
      level: "Intermedio" as const,
      categories: ["Diseño", "UX/UI"]
    },
    {
      id: "5",
      title: "Fotografía Digital Básica",
      instructor: "Roberto Silva",
      description: "Domina los fundamentos de la fotografía digital y aprende a capturar momentos únicos",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=300&fit=crop",
      price: 0,
      isFree: true,
      rating: 4.5,
      students: 1567,
      duration: "15 horas",
      level: "Principiante" as const,
      categories: ["Fotografía", "Arte"]
    },
    {
      id: "6",
      title: "Inglés Conversacional",
      instructor: "Jennifer Thompson",
      description: "Mejora tu inglés conversacional con ejercicios prácticos y situaciones de la vida real",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop",
      price: 120,
      isFree: false,
      rating: 4.8,
      students: 2134,
      duration: "30 horas",
      level: "Intermedio" as const,
      categories: ["Idiomas", "Inglés"]
    }
  ];

  const filteredCourses = mockCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || 
                           course.categories.some(cat => cat.toLowerCase().includes(selectedCategory.toLowerCase()));
    
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel;
    
    const matchesPrice = selectedPrice === "all" || 
                        (selectedPrice === "free" && course.isFree) ||
                        (selectedPrice === "paid" && !course.isFree);
    
    return matchesSearch && matchesCategory && matchesLevel && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 via-primary-glow/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Catálogo de Cursos
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Descubre más de 1,200 cursos diseñados por expertos para impulsar tu carrera
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Buscar cursos, instructores, temas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-14 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Results */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-4 items-center justify-between">
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="flex items-center gap-2">
                    <Filter className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium">Filtros:</span>
                  </div>
                  
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas las categorías</SelectItem>
                      {categories.map(category => (
                        <SelectItem key={category} value={category.toLowerCase()}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Nivel" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos los niveles</SelectItem>
                      <SelectItem value="Principiante">Principiante</SelectItem>
                      <SelectItem value="Intermedio">Intermedio</SelectItem>
                      <SelectItem value="Avanzado">Avanzado</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={selectedPrice} onValueChange={setSelectedPrice}>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Precio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="free">Gratuitos</SelectItem>
                      <SelectItem value="paid">De pago</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Active Filters */}
              <div className="flex flex-wrap gap-2 mt-4">
                {selectedCategory !== "all" && (
                  <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedCategory("all")}>
                    {selectedCategory} ✕
                  </Badge>
                )}
                {selectedLevel !== "all" && (
                  <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedLevel("all")}>
                    {selectedLevel} ✕
                  </Badge>
                )}
                {selectedPrice !== "all" && (
                  <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedPrice("all")}>
                    {selectedPrice === "free" ? "Gratuitos" : "De pago"} ✕
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Results Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">
              {filteredCourses.length} curso{filteredCourses.length !== 1 ? 's' : ''} encontrado{filteredCourses.length !== 1 ? 's' : ''}
            </h2>
          </div>

          {/* Course Grid */}
          {filteredCourses.length > 0 ? (
            <div className={`grid gap-8 ${
              viewMode === "grid" 
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
                : "grid-cols-1"
            }`}>
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          ) : (
            <Card className="text-center py-16">
              <CardContent>
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold mb-2">No se encontraron cursos</h3>
                <p className="text-muted-foreground mb-6">
                  Prueba ajustando tus filtros o términos de búsqueda
                </p>
                <Button 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                    setSelectedLevel("all");
                    setSelectedPrice("all");
                  }}
                >
                  Limpiar Filtros
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseCatalog;