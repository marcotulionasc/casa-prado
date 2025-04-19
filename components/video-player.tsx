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

  // Detectar iOS
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

  // Atualizar progresso
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

  // Mostrar/ocultar controles via mousemove
  useEffect(() => {
    const handleMouseMove = () => {
      setShowControls(true)
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current)
      }
      // Some controles depois de 3s se o vídeo estiver tocando
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

  // Detectar fullscreen (Desktop/Android)
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

  // Progresso
  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current
    if (!video) return

    const newValue = Number.parseFloat(e.target.value)
    const newTime = (newValue / 100) * duration

    video.currentTime = newTime
    setCurrentTime(newTime)
    setProgress(newValue)
  }

  // Fullscreen
  const toggleFullscreen = () => {
    const video = videoRef.current
    const container = playerRef.current
    if (!video || !container) return

    // Se já está fullscreen no desktop...
    if (document.fullscreenElement) {
      document.exitFullscreen()
      return
    }

    // Se for iOS, chamar webkitEnterFullscreen() no <video>
    if (isIOS) {
      const iOSVideo = video as HTMLVideoElement & {
        webkitEnterFullscreen?: () => void
      }
      if (iOSVideo.webkitEnterFullscreen) {
        iOSVideo.webkitEnterFullscreen()
        // iOS nativo assume o player e sai apenas tocando "Done"
        return
      }
    }

    // Para desktop/Android, API padrão
    if (container.requestFullscreen) {
      container
        .requestFullscreen()
        .catch((err) => console.error("Erro ao entrar em fullscreen:", err))
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  return (
    <div
      ref={playerRef}
      className="relative w-full aspect-video bg-black rounded-xl overflow-hidden group"
      onMouseEnter={() => setShowControls(true)}
    >
      <video
        ref={videoRef}
        src={videoUrl}
        poster={posterUrl}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onClick={togglePlay}
        // playsInline desativado no iOS pra forçar fullscreen nativo ao dar play
        playsInline={!isIOS}
        className="w-full h-full object-cover"
      />

      {/* Overlay do botão de Play central */}
      {!isPlaying && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer"
          onClick={togglePlay}
        >
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:scale-110 transition-transform">
            <Play className="h-12 w-12 text-white" />
          </div>
        </div>
      )}

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
          ${showControls ? "opacity-100" : "opacity-0"}`}
      >
        {/* Barra de progresso */}
        <div className="mb-2">
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleProgressChange}
            aria-label="Barra de progresso do vídeo"
            className="w-full h-1 bg-white/30 rounded-full appearance-none cursor-pointer
    [&::-webkit-slider-thumb]:appearance-none
    [&::-webkit-slider-thumb]:h-3
    [&::-webkit-slider-thumb]:w-3
    [&::-webkit-slider-thumb]:rounded-full
    [&::-webkit-slider-thumb]:bg-white"
          />

        </div>

        {/* Botões (Play/Pause, Mute, Tempo, Fullscreen) */}
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

            {/* Mute */}
            <button
              onClick={toggleMute}
              className="text-white hover:text-figueira-lavender transition-colors"
              aria-label={isMuted ? "Ativar som" : "Desativar som"}
            >
              {isMuted ? (
                <VolumeX className="h-5 w-5" />
              ) : (
                <Volume2 className="h-5 w-5" />
              )}
            </button>

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
