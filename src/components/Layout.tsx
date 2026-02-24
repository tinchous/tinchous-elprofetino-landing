/* Design: Cosmic Education - Futurismo Educativo Espacial
   Colors: Space Navy (#0a1628), Cyan (#00d4ff), Gold (#ffd700), Green (#00ff88)
   Typography: Space Grotesk (display), Inter (body)
   Layout: Asymmetric, floating cards, diagonal sections
*/

import { Header } from "./Header";
import { Toaster } from "sonner";
import { motion } from "motion/react";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col"
    >
      <Header />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <Toaster richColors position="bottom-right" theme="dark" />
    </motion.div>
  );
}
