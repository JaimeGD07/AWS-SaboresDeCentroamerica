import Link from "next/link";
import { supabase } from "@/lib/supabase";
import type { Pais } from "@/lib/types";

export default async function HomePage() {
  const { data: paises, error } = await supabase
    .from("paises")
    .select("*")
    .order("nombre");

  return (
    <main className="flex-1">
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-16">
        <h1 className="font-display text-5xl sm:text-6xl leading-[1.05] text-gold">
          Sabores de Centroamérica
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">
          Siete países, un mismo istmo, cientos de formas de sentarse a
          comer. Este recorrido reúne los platillos que definen la mesa de
          cada región, desde la pupusa salvadoreña hasta el rice and beans
          beliceño.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        {error && (
          <p className="text-clay">
            No se pudieron cargar los países: {error.message}
          </p>
        )}

        <ul className="divide-y divide-background-alt border-t border-b border-background-alt">
          {paises?.map((pais: Pais) => (
            <li key={pais.id}>
              <Link
                href={`/paises/${pais.slug}`}
                className="group flex items-center justify-between gap-6 py-6 transition-colors hover:bg-background-alt/40"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl" aria-hidden>
                    {pais.bandera_emoji}
                  </span>
                  <div>
                    <h2 className="font-display text-2xl">{pais.nombre}</h2>
                    {pais.descripcion && (
                      <p className="mt-1 max-w-md text-sm text-muted">
                        {pais.descripcion}
                      </p>
                    )}
                  </div>
                </div>
                <span className="shrink-0 text-sm text-gold opacity-0 transition-opacity group-hover:opacity-100">
                  Ver platillos
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
