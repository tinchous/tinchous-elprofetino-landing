import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function TuExamenPersonal() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">
            <span className="text-foreground">Tu Examen </span>
            <span style={{ color: "#00d4ff" }}>Personal</span>
          </h1>
          <div className="w-24"></div>
        </div>
      </div>
      <div className="container py-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Evaluación Adaptativa</h2>
          <p className="text-lg text-muted-foreground">
            Sección en desarrollo. Aquí podrás realizar exámenes personalizados generados por IA basados en tu progreso.
          </p>
          <div className="p-12 border-2 border-dashed border-border rounded-xl">
            <p className="text-muted-foreground italic">Próximamente...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
