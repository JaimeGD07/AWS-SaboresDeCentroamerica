export default function LoadingPais() {
  return (
    <main className="flex-1 mx-auto max-w-4xl px-6 pt-16 pb-24 w-full">
      <div className="h-4 w-24 animate-pulse bg-background-alt" />
      <div className="mt-6 h-12 w-1/2 animate-pulse bg-background-alt" />
      <div className="mt-4 h-5 w-2/3 animate-pulse bg-background-alt" />

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i}>
            <div className="aspect-[4/3] w-full animate-pulse bg-background-alt" />
            <div className="mt-3 h-6 w-1/2 animate-pulse bg-background-alt" />
          </div>
        ))}
      </div>
    </main>
  );
}
