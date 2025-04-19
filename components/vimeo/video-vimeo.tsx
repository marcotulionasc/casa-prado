"use client";

import { useEffect, useRef } from "react";
import Player, { Options } from "@vimeo/player";

interface VimeoPlayerProps {
  url: string;
  options?: Partial<Options>;
  onReady?: () => void;
}

export default function VimeoPlayer({
  url,
  options = {},
  onReady,
}: VimeoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const player = new Player(containerRef.current, {
      url,
      autoplay: true,
      muted: true,
      responsive: true,
      autopause: false,
      ...options,
    });

    if (onReady) player.ready().then(onReady);

    return () => {
      player.destroy().catch(() => void 0);
    };
  }, [url, options, onReady]);

return (
    <div
        ref={containerRef}
        className="aspect-video w-[90%] rounded-xl shadow-xl overflow-hidden lg:mt-12"
        style={{ margin: "0 auto" }}
    />
);
}
