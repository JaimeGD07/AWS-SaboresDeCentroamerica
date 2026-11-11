import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-1 mx-auto max-w-4xl px-6 pt-24 pb-16 w-full">
      <h1 className="font-display text-3xl text-gold">
        No encontramos esta página
      </h1>
      <p className="mt-4 text-muted">
        Puede que el país o el platillo que buscas no exista todavía.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block border border-gold px-5 py-2 text-gold hover:bg-gold hover:text-background transition-colors"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
