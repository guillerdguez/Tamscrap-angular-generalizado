export interface ProductoDetails {
  id?: number;
  nombre: string;
  precio: number;
  imagen: string;
  lettering?: boolean;
  scrapbooking?: boolean;
  oferta?: boolean;
  descuento?: number;
  precioOriginal?: number;
  favorito?: boolean;
}
