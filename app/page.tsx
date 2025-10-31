'use client';

import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { brands, productData, relatedProducts } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "./shared/components/header";
import { MobileMenu } from "./shared/components/mobile-menu";
import { Footer } from "./shared/components/footer";

function RelatedProducts() {
  return (
    <section className="mt-12">
      {/* Título de la sección */}
      <div className="bg-sky-500 rounded-lg text-center p-3 mb-6">
        <h2 className="text-white font-bold text-xl">
          También Disponible en: Cisco
        </h2>
      </div>

      {/* Grid responsivo para las tarjetas de producto */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {relatedProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden flex flex-col">
            <CardHeader className="p-0">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-auto object-cover"
                loading="eager"
                unoptimized
              />
            </CardHeader>
            <CardContent className="p-4 grow">
              <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
              <p className="text-sm text-gray-600">
                {product.description}
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button asChild variant="link" className="p-0 h-auto text-base">
                <a href={product.url}>Ver Producto</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

function BrandSidebar() {
  return (
    // Se oculta en móvil y se muestra como un bloque en pantallas medianas o más grandes
    <aside className="hidden lg:block bg-white rounded-lg shadow-md p-4 w-60">
      <h3 className="font-bold text-lg mb-4 text-gray-800">Marcas</h3>
      <div className="space-y-2">
        {brands.map((brand) => (
          <a key={brand.name} href="#" className="block p-2 rounded-md hover:bg-gray-100">
            <Image
              src={brand.logoUrl}
              alt={brand.name}
              width={100}
              height={50}
              className="w-full h-auto object-contain"
              unoptimized
            />
          </a>
        ))}
      </div>
    </aside>
  );
}

export default function ProductPage() {

  const [mainImage, setMainImage] = useState(productData.images[0].url);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <div className="grow">

        <style jsx global>{`
        body {
          overflow: ${isMobileMenuOpen ? 'hidden' : 'auto'};
        }
      `}</style>

        {/* Pasamos la función para abrir el menú al Header */}
        <Header onMenuClick={() => setIsMobileMenuOpen(true)} />

        {/* Renderizamos el menú móvil y le pasamos su estado y función de cierre */}
        <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

        {/* Layout principal con grid para la barra lateral */}
        <div className="container mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8">
          <BrandSidebar />

          {/* Contenido principal de la página */}
          <main>
            <nav className="text-sm text-gray-500 mb-4">{productData.breadcrumb.join(' / ')}</nav>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12">

                {/* Columna Izquierda: Galería de Imágenes */}
                <section>
                  <div className="mb-4">
                    <Image
                      src={mainImage}
                      alt={productData.name}
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-md shadow-sm"
                      priority
                      unoptimized
                      loading="eager"
                    />
                  </div>
                  {/* Contenedor para thumbnails */}
                  <div className="grid grid-cols-4 gap-2">
                    {productData.images.map((image) => (
                      <button
                        key={image.id}
                        onClick={() => setMainImage(image.url)}
                        className={`rounded-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${mainImage === image.url ? 'ring-2 ring-blue-500' : 'ring-1 ring-gray-200'
                          }`}
                      >
                        <Image
                          src={image.url}
                          alt={`Thumbnail ${image.id}`}
                          width={100}
                          height={75}
                          className="w-full h-auto"
                          unoptimized
                        />
                      </button>
                    ))}
                  </div>
                </section>

                {/* Columna Derecha: Información y Acciones (sin cambios mayores) */}
                <section>
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">{productData.name}</h1>
                  <p className="text-sm text-gray-500 mb-4">SKU: {productData.sku}</p>
                  <div className="my-6">
                    <span className="text-3xl lg:text-4xl font-extrabold text-blue-600">{productData.price.currency} {productData.price.amount.toFixed(2)}</span>
                    <span className="text-gray-500 ml-2">{productData.price.unit}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mb-8">
                    <Button className="flex-1">Comprar</Button>
                    <Button variant="outline" className="flex-1">Añadir al Carrito</Button>
                  </div>

                  <Tabs defaultValue="description" className="w-full">
                    <TabsList>
                      <TabsTrigger value="description">Descripción</TabsTrigger>
                      <TabsTrigger value="specs">Especificaciones</TabsTrigger>
                    </TabsList>
                    <TabsContent value="description" className="py-6 text-gray-700 space-y-3">
                      {productData.description.map((p, i) => (<p key={i}>{p}</p>))}
                    </TabsContent>
                    <TabsContent value="specs" className="py-6">
                      <div className="flow-root">
                        <dl className="-my-4 divide-y divide-gray-200">
                          {productData.specifications.map((s, i) => (
                            <div key={i} className="flex items-center justify-between py-4">
                              <dt className="text-sm font-medium text-gray-600">{s.spec}</dt>
                              <dd className="text-sm text-gray-800 text-right">{s.value}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </TabsContent>
                  </Tabs>
                </section>
              </div>
            </div>

            <RelatedProducts />

          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}