/* Design: Cosmic Education - Futurismo Educativo Espacial
   Colors: Space Navy (#0a1628), Cyan (#00d4ff), Gold (#ffd700), Green (#00ff88)
   Typography: Space Grotesk (display), Inter (body)
   Layout: Asymmetric, floating cards, diagonal sections
*/

import { Link } from "wouter";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { LogOut, User, Settings, LayoutDashboard, Sparkles } from "lucide-react";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl, getLogoutUrl } from "@/const";

export function Header() {
  const { user, isAuthenticated, loading } = useAuth();

  return (
    <header className="bg-space-navy-800 border-b border-space-navy-600 py-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/">
          <a className="text-2xl font-bold font-display text-gold-400 hover:text-cyan-400 transition-colors">
            ElProfeTino
          </a>
        </Link>

        <nav className="flex items-center space-x-4">
          {loading ? (
            <div className="h-8 w-24 animate-pulse rounded-md bg-space-navy-600"></div>
          ) : isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                  <Avatar className="h-9 w-9 border border-cyan-500">
                    <AvatarImage src={user?.picture || ""} alt={user?.name || "User"} />
                    <AvatarFallback className="bg-space-navy-600 text-gold-400">
                      {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-space-navy-700 border-space-navy-600 text-foreground" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none text-gold-400">{user?.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user?.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-space-navy-600" />
                <DropdownMenuItem asChild className="hover:bg-space-navy-600 focus:bg-space-navy-600">
                  <Link href="/dashboard">
                    <LayoutDashboard className="mr-2 h-4 w-4 text-cyan-400" />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-space-navy-600 focus:bg-space-navy-600">
                  <Link href="/genera-tus-ejercicios">
                    <Sparkles className="mr-2 h-4 w-4 text-green-400" />
                    <span>GeneraTusEjercicios</span>
                  </Link>
                </DropdownMenuItem>
                {user?.isAdmin && (
                  <DropdownMenuItem asChild className="hover:bg-space-navy-600 focus:bg-space-navy-600">
                    <Link href="/admin">
                      <Settings className="mr-2 h-4 w-4 text-gold-400" />
                      <span>Admin</span>
                    </Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator className="bg-space-navy-600" />
                <DropdownMenuItem asChild className="hover:bg-space-navy-600 focus:bg-space-navy-600">
                  <a href={getLogoutUrl()}>
                    <LogOut className="mr-2 h-4 w-4 text-red-400" />
                    <span>Cerrar Sesión</span>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild style={{ backgroundColor: "#00d4ff", color: "#0a1628" }}>
              <a href={getLoginUrl()}>Iniciar Sesión</a>
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
}
