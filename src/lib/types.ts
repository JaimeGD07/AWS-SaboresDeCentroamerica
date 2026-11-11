export interface Pais {
  id: string;
  nombre: string;
  slug: string;
  bandera_emoji: string | null;
  descripcion: string | null;
}

export interface Platillo {
  id: string;
  nombre: string;
  slug: string;
  pais_id: string;
  descripcion: string | null;
  ingredientes: string | null;
  imagen_url: string | null;
  tipo: string | null;
}

export interface PlatilloConPais extends Platillo {
  paises: Pick<Pais, "nombre" | "slug" | "bandera_emoji"> | null;
}
