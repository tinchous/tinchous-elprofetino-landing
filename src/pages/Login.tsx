/* Design: Cosmic Education - Futurismo Educativo Espacial
   Colors: Space Navy (#0a1628), Cyan (#00d4ff), Gold (#ffd700), Green (#00ff88)
   Typography: Space Grotesk (display), Inter (body)
   Layout: Asymmetric, floating cards, diagonal sections
*/

import { Button } from "@/components/ui/button";
import { ArrowLeft, Github } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";
import { getLoginUrl } from "@/const";

export default function Login() {
  useEffect(() => {
    document.title = "Iniciar Sesión - ElProfeTino";
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-4xl font-bold font-display text-gold-400">
          Bienvenido a <span className="text-cyan-400">ElProfeTino</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Inicia sesión para acceder a tu plataforma educativa.
        </p>

        <div className="space-y-4">
          <Button
            asChild
            className="w-full py-3 text-lg font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
            style={{ backgroundColor: "#00d4ff", color: "#0a1628" }}
          >
            <a href={getLoginUrl()}>
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Iniciar sesión con Google
            </a>
          </Button>
          <Button
            asChild
            className="w-full py-3 text-lg font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
            variant="outline"
          >
            <a href={getLoginUrl()}>
              <Github className="w-5 h-5 mr-3" />
              Iniciar sesión con GitHub
            </a>
          </Button>
        </div>

        <Link href="/">
          <Button variant="ghost" className="w-full text-muted-foreground hover:text-cyan-400">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Button>
        </Link>
      </div>
    </div>
  );
}
