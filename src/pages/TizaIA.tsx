import { GTEChat } from "@/components/GTEChat";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function TizaIA() {
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
            <span className="text-foreground">Tiza</span>
            <span style={{ color: "#ffd700" }}>IA</span>
          </h1>
          <div className="w-24"></div>
        </div>
      </div>
      <div className="container py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold">Tu Asistente Educativo</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Resuelve tus dudas, explica conceptos complejos y te guía paso a paso en tu aprendizaje.
            </p>
          </div>
          <GTEChat />
        </div>
      </div>
    </div>
  );
}
