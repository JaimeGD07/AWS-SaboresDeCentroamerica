export default function LoadingPlatillo() {
  return (
    <main className="flex-1 mx-auto max-w-3xl px-6 pt-16 pb-24 w-full">
      <div className="h-4 w-32 animate-pulse bg-background-alt" />
      <div className="mt-6 h-12 w-2/3 animate-pulse bg-background-alt" />
      <div className="mt-8 aspect-[16/9] w-full animate-pulse bg-background-alt" />
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div className="sm:col-span-2 space-y-2">
          <div className="h-5 w-24 animate-pulse bg-background-alt" />
          <div className="h-4 w-full animate-pulse bg-background-alt" />
          <div className="h-4 w-5/6 animate-pulse bg-background-alt" />
        </div>
        <div className="space-y-2">
          <div className="h-5 w-28 animate-pulse bg-background-alt" />
          <div className="h-4 w-full animate-pulse bg-background-alt" />
        </div>
      </div>
    </main>
  );
}
