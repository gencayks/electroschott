"use client"

import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react"
import { cn } from "@/lib/utils"

interface VideoSectionProps {
  title: string
  description: string
  videoSrc: string
  poster?: string
}

export function VideoSection({ title, description, videoSrc, poster }: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [showControls, setShowControls] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        videoRef.current.requestFullscreen()
      }
    }
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
          <p className="mt-2 text-muted-foreground">{description}</p>
        </div>

        <div
          className="relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden bg-foreground/5 shadow-lg"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => isPlaying && setShowControls(false)}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster={poster || "/electronic-recycling-facility.png"}
            muted={isMuted}
            playsInline
            onEnded={() => setIsPlaying(false)}
          >
            <source src={videoSrc} type="video/mp4" />
            Ihr Browser unterstützt das Video-Tag nicht.
          </video>

          {/* Play overlay when paused */}
          {!isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-foreground/20 transition-opacity hover:bg-foreground/30"
              aria-label="Video abspielen"
            >
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <Play className="w-8 h-8 text-primary-foreground ml-1" />
              </div>
            </button>
          )}

          {/* Controls bar */}
          <div
            className={cn(
              "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4 transition-opacity duration-300",
              showControls || !isPlaying ? "opacity-100" : "opacity-0",
            )}
          >
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={togglePlay}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-background/20 hover:bg-background/30 transition-colors"
                aria-label={isPlaying ? "Video pausieren" : "Video abspielen"}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 text-background" />
                ) : (
                  <Play className="w-5 h-5 text-background ml-0.5" />
                )}
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-background/20 hover:bg-background/30 transition-colors"
                  aria-label={isMuted ? "Ton einschalten" : "Ton ausschalten"}
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5 text-background" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-background" />
                  )}
                </button>
                <button
                  onClick={toggleFullscreen}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-background/20 hover:bg-background/30 transition-colors"
                  aria-label="Vollbild"
                >
                  <Maximize className="w-5 h-5 text-background" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
