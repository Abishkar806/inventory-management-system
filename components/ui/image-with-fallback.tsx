"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface ImageWithFallbackProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  fill?: boolean
  priority?: boolean
}

export function ImageWithFallback({
  src,
  alt,
  width,
  height,
  className,
  fill = false,
  priority = false,
}: ImageWithFallbackProps) {
  const [error, setError] = useState<boolean>(false)

  const handleError = () => {
    setError(true)
  }

  // Use local fallback images for external URLs that fail to load
  const imageSrc = error ? "/furniture-fallback.jpg" : src

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {fill ? (
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={alt}
          className={cn("absolute inset-0 w-full h-full object-cover", className)}
          onError={handleError}
        />
      ) : (
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className={cn("w-full h-full object-cover", className)}
          onError={handleError}
        />
      )}
    </div>
  )
}
