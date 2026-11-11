import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import type { PlatilloConPais } from "@/lib/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function PlatilloPage({ params }: PageProps) {
  const { slug } = await params;

  const { data: platillo } = await supabase
    .from("platillos")
    .select("*, paises(nombre, slug, bandera_emoji)")
    .eq("slug", slug)
    .single<PlatilloConPais>();

  if (!platillo) {
    notFound();
  }

  const ingredientes = platillo.ingredientes
    ? platillo.ingredientes.split(",").map((i) => i.trim())
    : [];

  return (
    <main className="flex-1">
      <section className="mx-auto max-w-3xl px-6 pt-16 pb-10">
        {platillo.paises && (
          <Link
            href={`/paises/${platillo.paises.slug}`}
            className="text-sm text-muted hover:text-gold"
          >
            ← {platillo.paises.bandera_emoji} {platillo.paises.nombre}
          </Link>
        )}
        <h1 className="mt-6 font-display text-4xl sm:text-5xl">
          {platillo.nombre}
        </h1>
        {platillo.tipo && (
          <p className="mt-2 text-sm text-gold">{platillo.tipo}</p>
        )}
      </section>

      <section className="mx-auto max-w-3xl px-6">
        <div className="aspect-[16/9] w-full overflow-hidden bg-background-alt relative">
          {platillo.imagen_url ? (
            <Image
              src={platillo.imagen_url}
              alt={platillo.nombre}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-muted">
              Sin imagen todavía
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div className="sm:col-span-2">
          <h2 className="font-display text-xl text-gold">Descripción</h2>
          <p className="mt-3 text-muted leading-relaxed">
            {platillo.descripcion ?? "Descripción no disponible todavía."}
          </p>
        </div>

        {ingredientes.length > 0 && (
          <div>
            <h2 className="font-display text-xl text-gold">Ingredientes</h2>
            <ul className="mt-3 space-y-2 text-muted">
              {ingredientes.map((ing) => (
                <li key={ing} className="border-b border-background-alt pb-2">
                  {ing}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </main>
  );
}
