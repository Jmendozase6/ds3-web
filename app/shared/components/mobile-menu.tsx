import { brands } from "@/lib/utils";
import { XIcon } from "lucide-react";

export function MobileMenu({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <div
      className={`fixed inset-0 z-30 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose}></div>

      {/* Panel del Menú */}
      <div
        className={`relative z-40 bg-white h-full w-72 shadow-xl transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h3 className="font-bold text-lg">Marcas</h3>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100">
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {brands.map((brand) => (
              <li key={brand.name}>
                <a href="#" className="block p-3 rounded-md text-gray-700 font-medium hover:bg-gray-100 transition-colors">
                  {brand.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}