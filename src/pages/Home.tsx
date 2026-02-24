/* Design: Cosmic Education - Futurismo Educativo Espacial
   Colors: Space Navy (#0a1628), Cyan (#00d4ff), Gold (#ffd700), Green (#00ff88)
   Typography: Space Grotesk (display), Inter (body)
   Layout: Asymmetric, floating cards, diagonal sections
*/

import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Book, Brain, GraduationCap, Sparkles } from "lucide-react";
import { useEffect } from "react";
import { getLoginUrl } from "@/const";

export default function Home() {
  useEffect(() => {
    document.title = "ElProfeTino - Tu Plataforma Educativa Online";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gold-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center p-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 font-display leading-tight">
          <span className="block text-cyan-400">El Futuro de tu</span>
          <span className="block text-gold-400">Educación</span>
          <span className="block text-green-400">Comienza Aquí</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-10">
          Plataforma educativa con IA para estudiantes de secundaria y bachillerato.
          Clases en vivo, ejercicios personalizados, seguimiento de progreso y mucho más.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            asChild
            className="px-8 py-3 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            style={{ backgroundColor: "#00d4ff", color: "#0a1628" }}
          >
            <a href={getLoginUrl()}>Comenzar Ahora <ArrowRight className="ml-2 w-5 h-5" /></a>
          </Button>
          <Link href="/dashboard">
            <Button
              variant="outline"
              className="px-8 py-3 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-background"
            >
              Explorar Dashboard
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-background to-space-navy-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 font-display text-gold-400">
            ¿Por qué elegir ElProfeTino?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <FeatureCard
              icon={<Brain className="w-10 h-10 text-cyan-400" />}
              title="Aprendizaje Adaptativo con IA"
              description="Nuestra IA personaliza tu ruta de aprendizaje, generando ejercicios a tu medida y adaptándose a tu progreso."
            />
            <FeatureCard
              icon={<GraduationCap className="w-10 h-10 text-green-400" />}
              title="Clases en Vivo y Grabadas"
              description="Accede a clases interactivas en tiempo real y a una biblioteca de contenido grabado para repasar a tu ritmo."
            />
            <FeatureCard
              icon={<Book className="w-10 h-10 text-gold-400" />}
              title="Contenido de Calidad"
              description="Material de estudio diseñado por expertos, cubriendo todos los temas de Matemática y Física de secundaria."
            />
            <FeatureCard
              icon={<Sparkles className="w-10 h-10 text-cyan-400" />}
              title="Gamificación y Recompensas"
              description="Mantente motivado con un sistema de puntos, insignias y desafíos que hacen el estudio divertido."
            />
            <FeatureCard
              icon={<ArrowRight className="w-10 h-10 text-green-400" />}
              title="Seguimiento Detallado de Progreso"
              description="Visualiza tu avance con métricas claras y recibe recomendaciones para mejorar en tus puntos débiles."
            />
            <FeatureCard
              icon={<Brain className="w-10 h-10 text-gold-400" />}
              title="Soporte Personalizado"
              description="Accede a tutores y a nuestra comunidad para resolver dudas y obtener ayuda cuando la necesites."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-20 bg-space-navy-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 font-display text-cyan-400">
            Lo que dicen nuestros estudiantes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sofía Rodríguez"
              role="Estudiante de 6º de Bachillerato"
              quote="Gracias a ElProfeTino logré exonerar Matemática. Las clases son súper claras y la IA me ayudó a practicar justo lo que no entendía."
              photo="https://picsum.photos/seed/sofia/100/100"
            />
            <TestimonialCard
              name="Mateo García"
              role="Estudiante de 4º de Liceo"
              quote="La plataforma es increíble. El sistema de puntos me motiva a seguir estudiando y los exámenes personalizados son geniales para prepararse."
              photo="https://picsum.photos/seed/mateo/100/100"
            />
            <TestimonialCard
              name="Valentina Silva"
              role="Estudiante de 5º de Bachillerato"
              quote="Lo que más me gusta es TizaIA, siempre está disponible para sacarme las dudas a cualquier hora. ¡Recomendado 100%!"
              photo="https://picsum.photos/seed/valentina/100/100"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative z-10 py-20 text-center bg-space-navy-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 font-display text-cyan-400">
            Transforma tu Experiencia Educativa
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Únete a la comunidad de estudiantes que están alcanzando sus metas con ElProfeTino.
          </p>
          <Button
            asChild
            className="px-10 py-4 text-xl font-semibold rounded-full shadow-xl transition-all duration-300 transform hover:scale-105"
            style={{ backgroundColor: "#ffd700", color: "#0a1628" }}
          >
            <a href={getLoginUrl()}>Empezar Mi Prueba Gratuita <ArrowRight className="ml-2 w-5 h-5" /></a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-space-navy-900 py-8 border-t border-space-navy-700 text-center text-muted-foreground text-sm">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} ElProfeTino. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="/privacy" className="hover:text-cyan-400 transition-colors">Política de Privacidad</Link>
            <Link href="/terms" className="hover:text-cyan-400 transition-colors">Términos y Condiciones</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-space-navy-700 p-8 rounded-2xl shadow-lg border border-space-navy-600 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-2 space-y-4">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-space-navy-600 mb-4 mx-auto">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gold-400 text-center font-display">{title}</h3>
      <p className="text-muted-foreground text-center">{description}</p>
    </div>
  );
}

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  photo: string;
}

function TestimonialCard({ name, role, quote, photo }: TestimonialCardProps) {
  return (
    <div className="bg-space-navy-800 p-8 rounded-2xl shadow-xl border border-space-navy-700 hover:border-green-500 transition-all duration-300 flex flex-col h-full">
      <div className="flex-1">
        <p className="text-lg italic text-muted-foreground mb-6 leading-relaxed">
          "{quote}"
        </p>
      </div>
      <div className="flex items-center gap-4 pt-6 border-t border-space-navy-700">
        <img
          src={photo}
          alt={name}
          className="w-12 h-12 rounded-full border-2 border-cyan-400 object-cover"
          referrerPolicy="no-referrer"
        />
        <div>
          <h4 className="font-bold text-foreground">{name}</h4>
          <p className="text-xs text-cyan-400">{role}</p>
        </div>
      </div>
    </div>
  );
}
