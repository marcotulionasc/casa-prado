"use client"
import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from "lucide-react"

interface VideoPlayerProps {
  videoUrl: string
  posterUrl?: string
  title?: string
}

export default function VideoPlayer({ videoUrl, posterUrl, title }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showControls, setShowControls] = useState(true)

  const videoRef = useRef<HTMLVideoElement>(null)
  const playerRef = useRef<HTMLDivElement>(null)
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // --- Detectar se é iOS (para forçar webkitEnterFullscreen) ---
  const isIOS = typeof window !== "undefined" && /iPhone|iPad|iPod/.test(navigator.userAgent)

  // Carregar metadados para pegar duração
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedMetadata = () => {
      setDuration(video.duration)
    }

    video.addEventListener("loadedmetadata", handleLoadedMetadata)
    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata)
    }
  }, [])

  // Atualizar o progresso e o tempo atual
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime)
      setProgress((video.currentTime / video.duration) * 100)
    }

    video.addEventListener("timeupdate", handleTimeUpdate)
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate)
    }
  }, [])

  // Exibir/ocultar controles com base em movimentação do mouse
  useEffect(() => {
    const handleMouseMove = () => {
      setShowControls(true)

      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current)
      }

      // Se estiver tocando, após 3s sem mexer o mouse, some controles
      controlsTimeoutRef.current = setTimeout(() => {
        if (isPlaying) {
          setShowControls(false)
        }
      }, 3000)
    }

    const playerElement = playerRef.current
    if (playerElement) {
      playerElement.addEventListener("mousemove", handleMouseMove)
      return () => {
        playerElement.removeEventListener("mousemove", handleMouseMove)
        if (controlsTimeoutRef.current) {
          clearTimeout(controlsTimeoutRef.current)
        }
      }
    }
  }, [isPlaying])

  // Detectar mudanças de fullscreen (desktop/Android)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [])

  // Play/Pause
  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
    } else {
      video.play()
    }
    setIsPlaying(!isPlaying)
  }

  // Mute/Unmute
  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return

    video.muted = !isMuted
    setIsMuted(!isMuted)
  }

  // Alterar tempo do vídeo
  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current
    if (!video) return

    const newValue = Number.parseFloat(e.target.value)
    const newTime = (newValue / 100) * duration

    video.currentTime = newTime
    setCurrentTime(newTime)
    setProgress(newValue)
  }

  // Fullscreen (com fallback iOS)
  const toggleFullscreen = () => {
    const player = playerRef.current
    const video = videoRef.current
    if (!player || !video) return

    // Se já está em fullscreen no desktop/Android, sai do fullscreen
    if (document.fullscreenElement) {
      document.exitFullscreen()
      return
    }

    // Para iOS, chamar webkitEnterFullscreen direto no <video>
    if (isIOS) {
      const iOSVideo = video as HTMLVideoElement & {
        webkitEnterFullscreen?: () => void
      }
      if (iOSVideo.webkitEnterFullscreen) {
        iOSVideo.webkitEnterFullscreen()
        return
      }
    }

    // Se não for iOS (ou se iOS 16+ suportar requestFullscreen no container)
    if (player.requestFullscreen) {
      player
        .requestFullscreen()
        .catch((err) => {
          console.error("Erro ao entrar em fullscreen:", err)
        })
    } else {
      console.log("Fullscreen não suportado neste dispositivo/navegador.")
    }
  }

  // Formatar tempo em min:seg
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  return (
    <div
      ref={playerRef}
      className="relative w-full aspect-video rounded-xl overflow-hidden bg-black group"
      onMouseEnter={() => setShowControls(true)}
    >
      <video
        ref={videoRef}
        src={videoUrl}
        poster={posterUrl}
        className="w-full h-full object-cover"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onClick={togglePlay}
        playsInline // no iOS 16+ permite inline, mas com fallback chamamos fullscreen
      />

      {/* Overlay para exibir o ícone de play quando está pausado */}
      <div
        className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center cursor-pointer"
        onClick={togglePlay}
      >
        {!isPlaying && (
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transition-transform transform hover:scale-110">
            <Play className="h-12 w-12 text-white fill-white" />
          </div>
        )}
      </div>

      {/* Título do vídeo */}
      {title && (
        <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/70 to-transparent">
          <h3 className="text-white font-medium">{title}</h3>
        </div>
      )}

      {/* Controles */}
      <div
        className={`absolute bottom-0 left-0 right-0 
          bg-gradient-to-t from-black/70 to-transparent 
          p-4 transition-opacity duration-300
          ${showControls ? "opacity-100" : "opacity-0"}
        `}
      >
        {/* Barra de progresso */}
        <div className="mb-2">
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleProgressChange}
            className="w-full h-1 bg-white/30 rounded-full appearance-none cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:h-3
              [&::-webkit-slider-thumb]:w-3
              [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:bg-white"
          />
        </div>

        {/* Botões de controle */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Play/Pause */}
            <button
              onClick={togglePlay}
              className="text-white hover:text-figueira-lavender transition-colors"
              aria-label={isPlaying ? "Pausar" : "Reproduzir"}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Play className="h-5 w-5" />
              )}
            </button>

            {/* Mute/Unmute */}
            <button
              onClick={toggleMute}
              className="text-white hover:text-figueira-lavender transition-colors"
              aria-label={isMuted ? "Ativar som" : "Desativar som"}
            >
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </button>

            {/* Tempo atual / Duração */}
            <div className="text-white text-sm">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>

          {/* Fullscreen */}
          <button
            onClick={toggleFullscreen}
            className="text-white hover:text-figueira-lavender transition-colors"
            aria-label={isFullscreen ? "Sair da tela cheia" : "Entrar em tela cheia"}
          >
            {isFullscreen ? (
              <Minimize className="h-5 w-5" />
            ) : (
              <Maximize className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
