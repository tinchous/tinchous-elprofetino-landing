/* Design: Cosmic Education - Futurismo Educativo Espacial
   Colors: Space Navy (#0a1628), Cyan (#00d4ff), Gold (#ffd700), Green (#00ff88)
   Typography: Space Grotesk (display), Inter (body)
   Layout: Asymmetric, floating cards, diagonal sections
*/

import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

export function ThemeToggle() {
  // This is a placeholder. In a real app, you'd manage theme state (e.g., dark/light)
  // with React context or a global state manager and update the 'dark' class on <html>.
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    // You might also want to save the preference in localStorage
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-gold-400" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-cyan-400" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
