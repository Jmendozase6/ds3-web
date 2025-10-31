import { Facebook, Instagram, MailIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const footerLinks = {
    soluciones: [
      { title: "Access Point", href: "#" }, { title: "Antenas MIMO", href: "#" },
      { title: "Antenas de Panel", href: "#" }, { title: "Antenas Sectoriales", href: "#" },
      { title: "Cable Pigtail", href: "#" }, { title: "Media Converter", href: "#" },
    ],
    soporte: [
      { title: "Soporte Técnico", href: "#" }, { title: "Acerca de Nosotros", href: "#" },
    ]
  };

  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Columna 1: Logo e Info */}
          <div className="flex flex-col gap-4">
            <Image src="https://www.ds3comunicaciones.com/Logo1.jpg" alt="DS3 Comunicaciones" width={150} height={50} />
            <h3 className="font-bold mt-4">Redes Sociales</h3>
            {/* Aquí irían los iconos de redes sociale s */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/ds3comunicaciones" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://www.instagram.com/ds3comunicaciones" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
            <h3 className="font-bold mt-4">Correo</h3>
            <a href="mailto:netperu100@hotmail.com" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <MailIcon className="h-5 w-5" />
              <span>netperu100@hotmail.com</span>
            </a>
          </div>

          {/* Columna 2: Soluciones */}
          <div>
            <h3 className="font-bold mb-4 text-gray-800">Soluciones</h3>
            <ul className="space-y-3">
              {footerLinks.soluciones.map(link => (
                <li key={link.title}><a href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors">{link.title}</a></li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Soporte y Contacto */}
          <div>
            <h3 className="font-bold mb-4 text-gray-800">Soporte</h3>
            <ul className="space-y-3 mb-8">
              {footerLinks.soporte.map(link => (
                <li key={link.title}><a href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors">{link.title}</a></li>
              ))}
            </ul>
            <h3 className="font-bold mb-4 text-gray-800">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-600"><PhoneIcon className="h-5 w-5" /><span>994 428 965</span></li>
              <li className="flex items-center gap-2 text-gray-600"><PhoneIcon className="h-5 w-5" /><span>996 533 223</span></li>
            </ul>
          </div>

          {/* Columna 4: Horario de Atención */}
          <div>
            <h3 className="font-bold mb-4 text-gray-800">Horario de Atención</h3>
            <p className="text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>
            <p className="text-gray-600">Sábados: 9:00 - 13:00</p>
          </div>

        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} DS3 Comunicaciones. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}