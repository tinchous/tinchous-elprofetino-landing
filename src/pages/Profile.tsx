import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, User, Mail, Shield } from "lucide-react";
import { Link } from "wouter";

export default function Profile() {
  const { user, loading } = useAuth();

  if (loading) return <div>Cargando...</div>;

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
          <h1 className="text-2xl font-bold">Mi Perfil</h1>
          <div className="w-24"></div>
        </div>
      </div>
      <div className="container py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-6 h-6 text-cyan-500" />
              Información de Usuario
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
              <User className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground uppercase font-semibold">Nombre</p>
                <p className="font-medium">{user?.name || "No especificado"}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
              <Mail className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground uppercase font-semibold">Email</p>
                <p className="font-medium">{user?.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
              <Shield className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground uppercase font-semibold">Rol</p>
                <p className="font-medium capitalize">{user?.role}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
