"use client"

export function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-green-600/20 rotate-45 animate-pulse" />
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-green-600/10 rounded-full animate-bounce"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-40 left-20 w-12 h-12 border border-green-600/30 animate-spin"
        style={{ animationDuration: "8s" }}
      />
      <div
        className="absolute bottom-20 right-40 w-24 h-24 border-2 border-green-600/15 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-60 left-1/3 w-8 h-8 bg-green-600/20 rotate-12 animate-bounce"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute top-80 right-1/3 w-14 h-14 border border-green-600/25 rotate-45 animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />
    </div>
  )
}
