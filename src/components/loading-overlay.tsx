export function LoadingOverlay() {
  return (
    <div
      className="absolute top-0 bottom-0 left-0 right-0 flex opacity-90 z-40 bg-white"
      aria-hidden={true}
    >
      <span className="m-auto">Loading...</span>
    </div>
  )
}
