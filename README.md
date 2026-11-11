# Sabores de Centroamérica

## Descripción del proyecto

Un recorrido por los platillos típicos de los siete países centroamericanos
(El Salvador, Guatemala, Honduras, Nicaragua, Costa Rica, Panamá y Belice).
Cada país tiene su propia página con la lista de sus platillos, y cada
platillo tiene una página de detalle con su descripción e ingredientes.

**Stack técnico**

- [Next.js 16](https://nextjs.org) con App Router
- [Supabase](https://supabase.com) como base de datos (Postgres) y backend
  serverless, con Row Level Security y Storage para las imágenes
- TypeScript
- Tailwind CSS v4
- Gestor de paquetes: `pnpm`

**Rutas dinámicas**

- `/paises/[slug]` — detalle de un país y sus platillos
- `/platillos/[slug]` — detalle de un platillo, con ingredientes e imagen

Todo el fetching de datos ocurre en Server Components (sin `useEffect` ni
fetching del lado del cliente), consultando Supabase directamente en cada
página.

## Instalación local

1. Clona el repositorio:

   ```bash
   git clone <url-del-repo>
   cd sabores-centroamerica
   ```

2. Instala las dependencias:

   ```bash
   pnpm install
   ```

3. Crea un archivo `.env.local` en la raíz del proyecto con las variables
   de entorno (ver sección siguiente).

4. Corre el servidor de desarrollo:

   ```bash
   pnpm dev
   ```

5. Abre [http://localhost:3000](http://localhost:3000).

## Variables de entorno necesarias

Copia `.env.example` a `.env.local` y completa con los valores de tu
propio proyecto de Supabase (Project Settings → Data API / API Keys):

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

> La `anon key` es segura de exponer en el frontend — el acceso real está
> controlado por las políticas de Row Level Security configuradas en
> Supabase (ver `supabase/schema.sql`).

## Estructura de datos en Supabase

El esquema completo (tablas, RLS, policies) está en
[`supabase/schema.sql`](./supabase/schema.sql), y los datos de ejemplo en
[`supabase/seed.sql`](./supabase/seed.sql).

- **`paises`**: nombre, slug, bandera (emoji), descripción
- **`platillos`**: nombre, slug, país (FK), descripción, ingredientes, tipo,
  imagen (URL pública desde Supabase Storage)