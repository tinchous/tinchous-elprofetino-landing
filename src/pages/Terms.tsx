/* Design: Cosmic Education - Futurismo Educativo Espacial
   Colors: Space Navy (#0a1628), Cyan (#00d4ff), Gold (#ffd700), Green (#00ff88)
   Typography: Space Grotesk (display), Inter (body)
   Layout: Asymmetric, floating cards, diagonal sections
*/

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";

export default function Terms() {
  useEffect(() => {
    document.title = "Términos y Condiciones - ElProfeTino";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <div className="max-w-4xl mx-auto py-8">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Button>
          </Link>
        </div>
        <h1 className="text-4xl font-bold font-display text-gold-400 mb-6">
          Términos y Condiciones
        </h1>
        <p className="text-muted-foreground mb-8">
          Última actualización: 15 de Julio de 2024
        </p>

        <div className="space-y-8 text-lg leading-relaxed">
          <section>
            <h2 className="text-3xl font-bold text-cyan-400 mb-4 font-display">1. Aceptación de los Términos</h2>
            <p>
              Al acceder y utilizar la plataforma educativa ElProfeTino (la "Plataforma"), usted acepta cumplir y estar sujeto a los siguientes términos y condiciones de uso (los "Términos"). Si no está de acuerdo con estos Términos, no debe utilizar la Plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-cyan-400 mb-4 font-display">2. Servicios Ofrecidos</h2>
            <p>
              ElProfeTino ofrece una variedad de servicios educativos, incluyendo clases en vivo, material de estudio, ejercicios personalizados generados por IA, seguimiento de progreso y herramientas de gamificación para estudiantes de secundaria y bachillerato.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-cyan-400 mb-4 font-display">3. Registro de Cuenta</h2>
            <p>
              Para acceder a ciertas funciones de la Plataforma, es posible que deba registrar una cuenta. Usted se compromete a proporcionar información precisa y completa durante el proceso de registro y a mantener actualizada dicha información. Usted es responsable de mantener la confidencialidad de su contraseña y de todas las actividades que ocurran bajo su cuenta.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-cyan-400 mb-4 font-display">4. Uso Aceptable</h2>
            <p>
              Usted acepta utilizar la Plataforma únicamente para fines lícitos y de acuerdo con estos Términos. Usted no debe:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Utilizar la Plataforma de cualquier manera que infrinja cualquier ley o regulación local, nacional o internacional aplicable.</li>
              <li>Participar en cualquier conducta que restrinja o inhiba el uso o disfrute de la Plataforma por parte de cualquier persona.</li>
              <li>Intentar obtener acceso no autorizado a cualquier parte de la Plataforma, otros sistemas informáticos o redes conectadas a la Plataforma.</li>
              <li>Utilizar la Plataforma para distribuir virus, troyanos, gusanos o cualquier otro material malicioso o tecnológicamente dañino.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-cyan-400 mb-4 font-display">5. Propiedad Intelectual</h2>
            <p>
              Todo el contenido y los materiales disponibles en la Plataforma, incluyendo, entre otros, texto, gráficos, logotipos, iconos, imágenes, clips de audio, descargas digitales, compilaciones de datos y software, son propiedad de ElProfeTino o de sus proveedores de contenido y están protegidos por las leyes de derechos de autor y otras leyes de propiedad intelectual. Usted no puede reproducir, distribuir, modificar, crear trabajos derivados, mostrar públicamente, ejecutar públicamente, volver a publicar, descargar, almacenar o transmitir ningún material de nuestra Plataforma, excepto según lo expresamente permitido por estos Términos.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-cyan-400 mb-4 font-display">6. Limitación de Responsabilidad</h2>
            <p>
              En la máxima medida permitida por la ley aplicable, ElProfeTino no será responsable de ningún daño indirecto, incidental, especial, consecuente o punitivo, o cualquier pérdida de ganancias o ingresos, ya sea incurrida directa o indirectamente, o cualquier pérdida de datos, uso, buena voluntad u otras pérdidas intangibles, resultantes de (i) su acceso o uso o incapacidad de acceder o usar la Plataforma; (ii) cualquier conducta o contenido de cualquier tercero en la Plataforma; (iii) cualquier contenido obtenido de la Plataforma; y (iv) el acceso, uso o alteración no autorizados de sus transmisiones o contenido, ya sea basado en garantía, contrato, agravio (incluida la negligencia) o cualquier otra teoría legal, hayamos sido o no informados de la posibilidad de tales daños.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-cyan-400 mb-4 font-display">7. Modificaciones de los Términos</h2>
            <p>
              Nos reservamos el derecho, a nuestra entera discreción, de modificar o reemplazar estos Términos en cualquier momento. Si una revisión es material, intentaremos proporcionar un aviso de al menos 30 días antes de que los nuevos términos entren en vigor. Lo que constituye un cambio material se determinará a nuestra entera discreción.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-cyan-400 mb-4 font-display">8. Ley Aplicable</h2>
            <p>
              Estos Términos se regirán e interpretarán de acuerdo con las leyes de Uruguay, sin tener en cuenta sus disposiciones sobre conflictos de leyes.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-cyan-400 mb-4 font-display">9. Contacto</h2>
            <p>
              Si tiene alguna pregunta sobre estos Términos, contáctenos en:
            </p>
            <p className="mt-2">
              ElProfeTino<br />
              Jose E Rodo 2270, Montevideo, Uruguay<br />
              Correo electrónico: contacto@elprofetino.online<br />
              Teléfono: +59898175225
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
