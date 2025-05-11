export default function Loading() {
  return (
    <div className="space-y-6 animate-pulse">
      <div>
        <div className="h-10 w-3/4 bg-gray-200 rounded-md"></div>
        <div className="h-5 w-1/2 bg-gray-200 rounded-md mt-2"></div>
      </div>

      <div className="h-12 w-full bg-gray-200 rounded-md"></div>

      <div className="space-y-4">
        <div className="h-40 w-full bg-gray-200 rounded-md"></div>
        <div className="h-40 w-full bg-gray-200 rounded-md"></div>
        <div className="h-40 w-full bg-gray-200 rounded-md"></div>
      </div>
    </div>
  )
}
