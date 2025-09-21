import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BookOpen, User, GraduationCap, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<"student" | "instructor" | null>(null);
  const [activeTab, setActiveTab] = useState("login");

  const handleRoleSelect = (role: "student" | "instructor") => {
    setSelectedRole(role);
    setActiveTab("register");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-primary-glow/5 to-secondary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2">
            <div className="p-3 bg-gradient-to-r from-primary to-primary-glow rounded-xl">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              EduPlatform
            </span>
          </Link>
        </div>

        <Card className="shadow-elegant border-0 bg-gradient-card">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">
              {activeTab === "login" ? "Iniciar Sesión" : "Crear Cuenta"}
            </CardTitle>
            <CardDescription>
              {activeTab === "login" 
                ? "Accede a tu cuenta para continuar aprendiendo" 
                : "Únete a nuestra comunidad educativa"
              }
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Iniciar Sesión</TabsTrigger>
                <TabsTrigger value="register">Registrarse</TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Contraseña</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="pl-10 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span>Recordarme</span>
                  </label>
                  <Link to="/recuperar-password" className="text-primary hover:underline">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>

                <Button variant="hero" className="w-full" size="lg">
                  Iniciar Sesión
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  ¿No tienes cuenta?{" "}
                  <button 
                    onClick={() => setActiveTab("register")}
                    className="text-primary hover:underline font-medium"
                  >
                    Regístrate aquí
                  </button>
                </div>
              </TabsContent>

              <TabsContent value="register" className="space-y-4">
                {!selectedRole ? (
                  <div className="space-y-4">
                    <div className="text-center mb-6">
                      <h3 className="text-lg font-semibold mb-2">¿Cómo quieres usar EduPlatform?</h3>
                      <p className="text-sm text-muted-foreground">Selecciona tu rol para personalizar tu experiencia</p>
                    </div>

                    <div className="grid gap-4">
                      <button
                        onClick={() => handleRoleSelect("student")}
                        className="p-6 border rounded-lg hover:border-primary transition-colors text-left group hover:shadow-card"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-gradient-to-r from-primary to-primary-glow rounded-lg group-hover:scale-110 transition-transform">
                            <User className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold group-hover:text-primary transition-colors">
                              Soy Estudiante
                            </h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              Quiero aprender nuevas habilidades y obtener certificados
                            </p>
                            <Badge variant="secondary" className="mt-2">
                              Acceso a todos los cursos
                            </Badge>
                          </div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleRoleSelect("instructor")}
                        className="p-6 border rounded-lg hover:border-primary transition-colors text-left group hover:shadow-card"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-gradient-to-r from-secondary to-secondary/80 rounded-lg group-hover:scale-110 transition-transform">
                            <GraduationCap className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold group-hover:text-primary transition-colors">
                              Soy Instructor
                            </h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              Quiero crear cursos y enseñar a otros
                            </p>
                            <Badge variant="secondary" className="mt-2">
                              Herramientas de creación
                            </Badge>
                          </div>
                        </div>
                      </button>
                    </div>

                    <div className="text-center text-sm text-muted-foreground">
                      ¿Ya tienes cuenta?{" "}
                      <button 
                        onClick={() => setActiveTab("login")}
                        className="text-primary hover:underline font-medium"
                      >
                        Inicia sesión aquí
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="text-center mb-4">
                      <Badge variant={selectedRole === "student" ? "default" : "secondary"} className="mb-2">
                        {selectedRole === "student" ? "Cuenta de Estudiante" : "Cuenta de Instructor"}
                      </Badge>
                      <button
                        onClick={() => setSelectedRole(null)}
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        ← Cambiar rol
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Nombre</Label>
                        <Input id="firstName" placeholder="Juan" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Apellido</Label>
                        <Input id="lastName" placeholder="Pérez" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email-register">Correo electrónico</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                          id="email-register"
                          type="email"
                          placeholder="tu@email.com"
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password-register">Contraseña</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                          id="password-register"
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className="pl-10 pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Mínimo 8 caracteres, incluye mayúsculas y números
                      </p>
                    </div>

                    <div className="flex items-start space-x-2">
                      <input type="checkbox" id="terms" className="mt-1" />
                      <label htmlFor="terms" className="text-sm text-muted-foreground">
                        Acepto los{" "}
                        <Link to="/terminos" className="text-primary hover:underline">
                          términos de servicio
                        </Link>
                        {" "}y la{" "}
                        <Link to="/privacidad" className="text-primary hover:underline">
                          política de privacidad
                        </Link>
                      </label>
                    </div>

                    <Button 
                      variant={selectedRole === "student" ? "hero" : "secondary"} 
                      className="w-full" 
                      size="lg"
                    >
                      Crear Cuenta {selectedRole === "student" ? "de Estudiante" : "de Instructor"}
                    </Button>

                    <div className="text-center text-sm text-muted-foreground">
                      ¿Ya tienes cuenta?{" "}
                      <button 
                        onClick={() => setActiveTab("login")}
                        className="text-primary hover:underline font-medium"
                      >
                        Inicia sesión aquí
                      </button>
                    </div>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="text-center mt-8 text-sm text-muted-foreground">
          Al continuar, aceptas nuestros{" "}
          <Link to="/terminos" className="text-primary hover:underline">
            términos de servicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;