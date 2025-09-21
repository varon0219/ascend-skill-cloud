import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users, BookOpen, Play } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  description: string;
  image: string;
  price: number;
  isFree: boolean;
  rating: number;
  students: number;
  duration: string;
  level: "Principiante" | "Intermedio" | "Avanzado";
  categories: string[];
}

const CourseCard = ({ 
  id, 
  title, 
  instructor, 
  description, 
  image, 
  price, 
  isFree, 
  rating, 
  students, 
  duration, 
  level,
  categories 
}: CourseCardProps) => {
  return (
    <Card className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            {isFree ? (
              <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                Gratuito
              </Badge>
            ) : (
              <Badge variant="default" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                Premium
              </Badge>
            )}
          </div>
          <div className="absolute top-4 right-4">
            <Badge variant="outline" className="bg-white/90">
              {level}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="flex flex-wrap gap-1 mb-3">
          {categories.slice(0, 2).map((category) => (
            <Badge key={category} variant="outline" className="text-xs">
              {category}
            </Badge>
          ))}
        </div>

        <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {description}
        </p>
        
        <p className="text-sm font-medium text-primary mb-4">
          {instructor}
        </p>

        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-amber-500 mr-1" />
            <span className="font-medium">{rating}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{students} estudiantes</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <div className="w-full">
          <div className="flex items-center justify-between mb-4">
            {isFree ? (
              <span className="text-2xl font-bold text-secondary">Gratis</span>
            ) : (
              <span className="text-2xl font-bold text-foreground">
                ${price}
                <span className="text-sm font-normal text-muted-foreground ml-1">USD</span>
              </span>
            )}
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1" asChild>
              <Link to={`/curso/${id}`}>
                <BookOpen className="h-4 w-4 mr-2" />
                Ver Detalles
              </Link>
            </Button>
            <Button 
              variant={isFree ? "secondary" : "hero"} 
              size="sm" 
              className="flex-1"
              asChild
            >
              <Link to={isFree ? `/curso/${id}/comenzar` : `/curso/${id}/comprar`}>
                <Play className="h-4 w-4 mr-2" />
                {isFree ? "Comenzar" : "Comprar"}
              </Link>
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;