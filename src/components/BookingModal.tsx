import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function BookingModal({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-space-navy-800 border-space-navy-600 text-foreground">
        <DialogHeader>
          <DialogTitle className="text-gold-400 font-display text-2xl">Reservar Clase</DialogTitle>
        </DialogHeader>
        <div className="py-6 space-y-4">
          <p className="text-muted-foreground">
            Para agendar una clase personalizada con ElProfeTino, por favor contáctanos directamente por WhatsApp para coordinar el horario que mejor te convenga.
          </p>
          <div className="bg-space-navy-700 p-4 rounded-lg border border-space-navy-600">
            <p className="text-sm font-semibold text-cyan-400 mb-1">Horarios Disponibles:</p>
            <p className="text-xs text-muted-foreground">Lunes a Viernes: 08:00 - 20:00</p>
            <p className="text-xs text-muted-foreground">Sábados: 09:00 - 13:00</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Button 
            className="w-full glow-green"
            style={{ backgroundColor: '#00ff88', color: '#0a1628' }}
            onClick={() => {
              window.open("https://wa.me/59898175225?text=Hola,%20quisiera%20reservar%20una%20clase%20con%20ElProfeTino", "_blank");
              onOpenChange(false);
            }}
          >
            Contactar por WhatsApp
          </Button>
          <Button variant="ghost" onClick={() => onOpenChange(false)} className="text-muted-foreground hover:text-foreground">
            Cerrar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
