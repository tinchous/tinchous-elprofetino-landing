/* Design: Cosmic Education - Futurismo Educativo Espacial
   Colors: Space Navy (#0a1628), Cyan (#00d4ff), Gold (#ffd700), Green (#00ff88)
   Typography: Space Grotesk (display), Inter (body)
   Layout: Asymmetric, floating cards, diagonal sections
*/

import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Book, Brain, GraduationCap, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { getLoginUrl } from "@/const";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-8 font-display leading-tight">
            <span className="block text-cyan-400 drop-shadow-[0_0_15px_rgba(0,212,255,0.5)]">Domina Matemática</span>
            <span className="block text-gold-400 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]">y Física</span>
            <span className="block text-green-400 drop-shadow-[0_0_15px_rgba(0,255,136,0.5)]">con IA</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            La plataforma educativa definitiva para secundaria y bachillerato. 
            Personalizada, interactiva y diseñada para que alcances tu máximo potencial.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              className="px-10 py-4 text-xl font-bold rounded-full shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all duration-500 transform hover:scale-110 hover:rotate-1 active:scale-95"
              style={{ backgroundColor: "#00d4ff", color: "#0a1628" }}
            >
              <a href={getLoginUrl()}>¡Empieza a aprender gratis! <ArrowRight className="ml-2 w-6 h-6" /></a>
            </Button>
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="px-10 py-4 text-xl font-bold rounded-full shadow-lg transition-all duration-500 transform hover:scale-110 hover:-rotate-1 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-background active:scale-95"
              >
                Explorar Dashboard
              </Button>
            </Link>
          </div>
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

      {/* Contact Form Section */}
      <section id="contact" className="relative z-10 py-20 bg-gradient-to-tr from-space-navy-900 to-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-space-navy-800/50 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-space-navy-700 shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-display text-green-400 mb-4">Contáctanos</h2>
              <p className="text-muted-foreground">¿Tienes dudas o sugerencias? Envíanos un mensaje y te responderemos a la brevedad.</p>
            </div>
            <ContactForm />
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
      <footer className="relative z-10 bg-space-navy-900 py-12 border-t border-space-navy-700 text-center text-muted-foreground">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h3 className="text-2xl font-display font-bold text-cyan-400 mb-2">ElProfeTino</h3>
            <p className="text-sm">Potenciando el aprendizaje con inteligencia artificial.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
            <Link href="/privacy" className="hover:text-cyan-400 transition-colors">Política de Privacidad</Link>
            <Link href="/terms" className="hover:text-cyan-400 transition-colors">Términos y Condiciones</Link>
            <a href="/sitemap.xml" className="hover:text-cyan-400 transition-colors" target="_blank">Mapa del Sitio</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contacto</a>
          </div>
          <p className="text-xs">&copy; {new Date().getFullYear()} ElProfeTino. Todos los derechos reservados. Hecho con ❤️ para estudiantes de Uruguay.</p>
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

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const contactMutation = trpc.auth.contact.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await contactMutation.mutateAsync(formData);
      toast.success("¡Mensaje enviado! Nos pondremos en contacto pronto.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      toast.error(error.message || "Error al enviar el mensaje.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground ml-1">Nombre</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-space-navy-900/50 border border-space-navy-700 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
            placeholder="Tu nombre"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground ml-1">Email</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-space-navy-900/50 border border-space-navy-700 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
            placeholder="tu@email.com"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-muted-foreground ml-1">Mensaje</label>
        <textarea
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-space-navy-900/50 border border-space-navy-700 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
          placeholder="¿En qué podemos ayudarte?"
        ></textarea>
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 text-lg font-bold rounded-xl glow-green transition-all"
        style={{ backgroundColor: "#00ff88", color: "#0a1628" }}
      >
        {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
      </Button>
    </form>
  );
}
