"use client"

import { useEffect, useRef, useState } from "react"
import { Play, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AutoVideoPlayerProps {
  src: string
  title?: string
}

export function AutoVideoPlayer({ src, title = "Video" }: AutoVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  const togglePlay = async () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      try {
        await video.play()
        setIsPlaying(true)
      } catch (error) {
        console.log("Reprodução bloqueada:", error)
      }
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return

    video.muted = !video.muted
    setIsMuted(video.muted)
  }

return (
    <div className="relative w-full max-w-sm mx-auto rounded-md overflow-hidden group">
        <video ref={videoRef} src={src} className="w-full h-auto" playsInline loop preload="auto" aria-label={title} />

        {/* Controles que aparecem ao passar o mouse */}
        <div
            className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-200 opacity-0 group-hover:opacity-100"
        >
            {!isPlaying && (
                <Button onClick={togglePlay} size="sm" className="bg-white/30 hover:bg-white/40 backdrop-blur-sm">
                    <Play className="w-6 h-6 fill-white" />
                </Button>
            )}
        </div>

        {/* Controles de volume */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Button onClick={toggleMute} size="sm" variant="secondary" className="bg-black/60 hover:bg-black/80 text-white">
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </Button>
        </div>
    </div>
)
}
