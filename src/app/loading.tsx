export default function Loading() {
  return (
    <main className="flex-1 mx-auto max-w-4xl px-6 pt-20 pb-16 w-full">
      <div className="h-12 w-2/3 animate-pulse bg-background-alt" />
      <div className="mt-6 h-5 w-1/2 animate-pulse bg-background-alt" />
      <div className="mt-16 space-y-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-16 animate-pulse bg-background-alt" />
        ))}
      </div>
    </main>
  );
}
