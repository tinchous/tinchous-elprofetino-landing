/* Design: Cosmic Education - Futurismo Educativo Espacial
   Colors: Space Navy (#0a1628), Cyan (#00d4ff), Gold (#ffd700), Green (#00ff88)
   Typography: Space Grotesk (display), Inter (body)
   Layout: Asymmetric, floating cards, diagonal sections
*/

import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { HomeIcon } from "lucide-react";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "Página no encontrada - ElProfeTino";
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-7xl md:text-9xl font-extrabold text-gold-400 mb-4 font-display">
        404
      </h1>
      <h2 className="text-3xl md:text-5xl font-bold text-cyan-400 mb-6 font-display">
        Página no encontrada
      </h2>
      <p className="text-lg md:text-xl text-muted-foreground max-w-md mb-8">
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </p>
      <Link href="/">
        <Button
          className="px-8 py-3 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          style={{ backgroundColor: "#00d4ff", color: "#0a1628" }}
        >
          <HomeIcon className="w-5 h-5 mr-2" />
          Volver al Inicio
        </Button>
      </Link>
    </div>
  );
}
