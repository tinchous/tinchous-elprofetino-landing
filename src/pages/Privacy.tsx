/* Design: Cosmic Education - Futurismo Educativo Espacial
   Colors: Space Navy (#0a1628), Cyan (#00d4ff), Gold (#ffd700), Green (#00ff88)
   Typography: Space Grotesk (display), Inter (body)
   Layout: Asymmetric, floating cards, diagonal sections
*/

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";

export default function Privacy() {
  useEffect(() => {
    document.title = "Política de Privacidad - ElProfeTino";
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
          Política de Privacidad
        </h1>
        <p className="text-muted-foreground mb-8">
          Última actualización: 15 de Julio de 2024
        </p>

        <div className="space-y-8 text-lg leading-relaxed">
          <section>
            <h2 className="text-3xl font-bold text-cyan-400 mb-4 font-display">1. Introducción</h2>
            <p>
              Bienvenido a ElProfeTino. Nos comprometemos a proteger su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos su información cuando visita nuestra plataforma educativa, incluyendo cualquier otro medio, canal de medios, sitio web móvil o aplicación móvil relacionado o conectado a este (colectivamente, la "Plataforma"). Lea atentamente esta política de privacidad. Si no está de acuerdo con los términos de esta política de privacidad, no acceda a la Plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-cyan-400 mb-4 font-display">2. Recopilación de su información</h2>
            <h3 className="text-2xl font-semibold text-green-400 mb-2">Información personal</h3>
            <p>
              Recopilamos información de identificación personal, como su nombre, dirección de correo electrónico, número de teléfono y datos demográficos (edad, sexo, etc.), que usted nos proporciona voluntariamente cuando se registra en la Plataforma, participa en diversas actividades relacionadas con la Plataforma o cuando se comunica con nosotros.
            </p>
            <h3 className="text-2xl font-semibold text-green-400 mb-2">Información derivada</h3>
            <p>
              Información que nuestros servidores recopilan automáticamente cuando accede a la Plataforma, como su dirección IP, tipo de navegador, sistema operativo, sus tiempos de acceso y las páginas que ha visto directamente antes y después de acceder a la Plataforma.
            </p>
            <h3 className="text-2xl font-semibold text-green-400 mb-2">Datos de terceros</h3>
            <p>
              Información de terceros, como información personal o datos de red, si conecta su cuenta a un tercero y nos otorga permiso para acceder a esta información.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-cyan-400 mb-4 font-display">3. Uso de su información</h2>
            <p>
              Tener información precisa sobre usted nos permite brindarle una experiencia fluida, eficiente y personalizada. Específicamente, podemos usar la información recopilada sobre usted a través de la Plataforma para:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Crear y administrar su cuenta.</li>
              <li>Permitirle acceder a nuestras herramientas de IA y contenido educativo.</li>
              <li>Personalizar su experiencia de aprendizaje.</li>
              <li>Enviarle correos electrónicos sobre su cuenta o pedidos.</li>
              <li>Solicitar comentarios y contactarlo sobre su uso de la Plataforma.</li>
              <li>Resolver disputas y solucionar problemas.</li>
              <li>Responder a solicitudes de productos y servicios.</li>
              <li>Realizar otras actividades comerciales según sea necesario.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-cyan-400 mb-4 font-display">4. Divulgación de su información</h2>
            <p>
              Podemos compartir información que hemos recopilado sobre usted en ciertas situaciones. Su información puede ser divulgada de la siguiente manera:
            </p>
            <h3 className="text-2xl font-semibold text-green-400 mb-2">Por ley o para proteger derechos</h3>
            <p>
              Si creemos que la divulgación de información sobre usted es necesaria para responder a un proceso legal, investigar o remediar posibles violaciones de nuestras políticas, o para proteger los derechos, la propiedad y la seguridad de otros, podemos compartir su información según lo permitido o requerido por cualquier ley, norma o regulación aplicable.
            </p>
            <h3 className="text-2xl font-semibold text-green-400 mb-2">Proveedores de servicios</h3>
            <p>
              Podemos compartir su información con terceros que realizan servicios para nosotros o en nuestro nombre, incluyendo procesamiento de pagos, análisis de datos, entrega de correo electrónico, servicios de alojamiento, servicio al cliente y asistencia de marketing.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-cyan-400 mb-4 font-display">5. Seguridad de su información</h2>
            <p>
              Utilizamos medidas de seguridad administrativas, técnicas y físicas para ayudar a proteger su información personal. Si bien hemos tomado medidas razonables para proteger la información personal que nos proporciona, tenga en cuenta que a pesar de nuestros esfuerzos, ninguna medida de seguridad es perfecta o impenetrable, y ningún método de transmisión de datos puede garantizarse contra cualquier intercepción u otro tipo de uso indebido.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-cyan-400 mb-4 font-display">6. Opciones con respecto a su información</h2>
            <h3 className="text-2xl font-semibold text-green-400 mb-2">Información de la cuenta</h3>
            <p>
              Puede revisar o cambiar la información en su cuenta o cancelar su cuenta en cualquier momento al:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Iniciar sesión en la configuración de su cuenta y actualizar su cuenta.</li>
              <li>Contactarnos utilizando la información de contacto proporcionada a continuación.</li>
            </ul>
            <p className="mt-4">
              Si desea cancelar su cuenta, al hacerlo, se eliminará su cuenta de los sistemas activos. Sin embargo, parte de la información puede conservarse en nuestros archivos para prevenir fraudes, solucionar problemas, ayudar con cualquier investigación, hacer cumplir nuestros Términos de Servicio y/o cumplir con los requisitos legales.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-cyan-400 mb-4 font-display">7. Contacto</h2>
            <p>
              Si tiene preguntas o comentarios sobre esta Política de Privacidad, contáctenos en:
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
