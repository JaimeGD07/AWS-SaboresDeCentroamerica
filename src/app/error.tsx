"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex-1 mx-auto max-w-4xl px-6 pt-24 pb-16 w-full">
      <h1 className="font-display text-3xl text-clay">Algo salió mal</h1>
      <p className="mt-4 text-muted">
        No se pudo cargar la información. {error.message}
      </p>
      <button
        onClick={reset}
        className="mt-8 border border-gold px-5 py-2 text-gold hover:bg-gold hover:text-background transition-colors"
      >
        Intentar de nuevo
      </button>
    </main>
  );
}
