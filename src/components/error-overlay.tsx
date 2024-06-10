export function ErrorOverlay({ error }: { error: string }) {
  return (
    <div
      className="absolute top-0 bottom-0 left-0 right-0 flex opacity-90 z-40 bg-red-200 flex-col items-center justify-center text-center"
      aria-hidden={true}
    >
      <span className="font-extrabold">Oops!</span>
      <span className="font-extralight">{error}</span>
    </div>
  )
}
