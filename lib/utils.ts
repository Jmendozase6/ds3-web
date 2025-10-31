import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const productData = {
  sku: "6-1427200-4",
  name: "Cable UTP AMP Categoria 6 Chaqueta CMR 23AWG",
  price: {
    amount: 187.00,
    currency: "S/ ",
    unit: "por rollo"
  },
  images: [
    { id: 1, url: "https://www.ds3comunicaciones.com/AMP/images/6-1427200-4-1.jpg" },
    { id: 2, url: "https://placehold.co/600x400/D1D5DB/374151?text=Detalle+1" },
    { id: 3, url: "https://placehold.co/600x400/9CA3AF/1F2937?text=Detalle+2" },
    { id: 4, url: "https://placehold.co/600x400/BEE3F8/2A4365?text=Empaque" },
  ],
  description: [
    "Los Cables AMP NetConnect categoría 6 exceden los requerimientos TIA/EIA-568-B.2-1 e ISO / IEC 11801 Clase E.",
    "Además cumplen con todos los requisitos de rendimiento para aplicaciones actuales y propuestos, tales como Gigabit Ethernet (1000BASE-TX), 10/100BASE-TX, Token Ring, ATM 155 Mbps, 100 Mbps TPPMD, Vídeo ISDN, analógico y digital y analógica y digital de voz (VoIP).",
    "AMP NetConnect categoría 6 cables UTP están disponibles en (CMR) colores estándar, incluyendo blanco, gris y azul. El embalaje es en un reel-in-box, con el estándar 1000ft libres de empalme longitudinales."
  ],
  specifications: [
    { spec: "Voltaje", value: "300VAC or VDC" },
    { spec: "Velocidad Nominal de Propagación", value: "70%" },
    { spec: "Temperatura de Operación", value: "–20° C a -60° C" },
    { spec: "Temperatura de Almacenamiento", value: "–20° C a -80° C" }
  ],
  breadcrumb: ["AMP", "Cable de red Cat 6", "6-1427200-4"]
};

export const brands = [
  { name: 'AMP', logoUrl: 'https://cdn.thefpsreview.com/wp-content/uploads/2020/10/amd-logo-ruby-red.jpg.webp' },
  { name: 'Amphenol', logoUrl: 'https://www.amphenolalden.com/es/sites/default/files/background_images/Amphenol%20Image_Hero_Amphenol%20Corporate.PNG' },
  { name: 'MikroTik', logoUrl: 'https://1000marcas.net/wp-content/uploads/2021/05/MikroTik-logo.jpg' },
  { name: 'Cisco', logoUrl: 'https://ssd2.s3.amazonaws.com/wsp3qn4f09irgfvybarrl2tsy3in' },
];

export const relatedProducts = [
  {
    id: "C9200L-24T-4G-E",
    name: "C9200L-24T-4G-E",
    description: "Switch Cisco Catalyst 9200L Essentials C9200L-24T, capa L3 con 24 puertos Gigabit, 04 puertos para...",
    imageUrl: "https://placehold.co/400x300/F3F4F6/4A5568?text=C9200L-24T",
    url: "#"
  },
  {
    id: "C9200L-24P-4G-E",
    name: "C9200L-24P-4G-E",
    description: "Switch Cisco Catalyst 9200L Essentials C9200L-24P, capa L3 con 24 puertos PoE+ (370W) Gigabit, 04...",
    imageUrl: "https://placehold.co/400x300/E2E8F0/4A5568?text=C9200L-24P",
    url: "#"
  },
  {
    id: "C9200L-24T-4X-E",
    name: "C9200L-24T-4X-E",
    description: "Switch Cisco Catalyst 9200L Essentials C9200L-24T, capa L3 con 24 puertos Gigabit, 04 puertos 10G pa...",
    imageUrl: "https://placehold.co/400x300/D1D5DB/4A5568?text=C9200L-4X",
    url: "#"
  }
];