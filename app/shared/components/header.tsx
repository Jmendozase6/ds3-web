import { MenuIcon } from "lucide-react";

export function Header({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-20">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* Botón de Menú Hamburguesa (visible solo en móvil) */}
          <button onClick={onMenuClick} className="lg:hidden p-2 rounded-md hover:bg-gray-100">
            <MenuIcon className="h-6 w-6 text-gray-800" />
          </button>
          <div className="text-xl font-bold text-blue-600">DS3</div>
        </div>
        <nav className="hidden md:flex gap-6 text-gray-600 font-normal">
          <a href="#" className="hover:text-blue-600">Switch Catalyst</a>
          <a href="#" className="hover:text-blue-600">Cisco Business</a>
          <a href="#" className="hover:text-blue-600">Switch Industrial</a>
          <a href="#" className="hover:text-blue-600">Aironet</a>
        </nav>
        <div>
          <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
