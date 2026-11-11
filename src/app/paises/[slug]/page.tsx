import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import type { Pais, Platillo } from "@/lib/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function PaisPage({ params }: PageProps) {
  const { slug } = await params;

  const { data: pais } = await supabase
    .from("paises")
    .select("*")
    .eq("slug", slug)
    .single<Pais>();

  if (!pais) {
    notFound();
  }

  const { data: platillos, error } = await supabase
    .from("platillos")
    .select("*")
    .eq("pais_id", pais.id)
    .order("nombre")
    .returns<Platillo[]>();

  return (
    <main className="flex-1">
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-10">
        <Link href="/" className="text-sm text-muted hover:text-gold">
          ← Todos los países
        </Link>
        <div className="mt-6 flex items-center gap-4">
          <span className="text-4xl" aria-hidden>
            {pais.bandera_emoji}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl">{pais.nombre}</h1>
        </div>
        {pais.descripcion && (
          <p className="mt-4 max-w-2xl text-lg text-muted">
            {pais.descripcion}
          </p>
        )}
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        {error && (
          <p className="text-clay">
            No se pudieron cargar los platillos: {error.message}
          </p>
        )}

        {platillos && platillos.length === 0 && (
          <p className="text-muted">
            Todavía no hay platillos registrados para {pais.nombre}.
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
          {platillos?.map((platillo) => (
            <Link
              key={platillo.id}
              href={`/platillos/${platillo.slug}`}
              className="group"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-background-alt relative">
                {platillo.imagen_url ? (
                  <Image
                    src={platillo.imagen_url}
                    alt={platillo.nombre}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm text-muted">
                    Sin imagen todavía
                  </div>
                )}
              </div>
              <h2 className="mt-3 font-display text-2xl group-hover:text-gold">
                {platillo.nombre}
              </h2>
              {platillo.tipo && (
                <p className="text-sm text-muted">{platillo.tipo}</p>
              )}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
