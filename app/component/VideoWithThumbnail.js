"use client";

import { useState } from "react";
import Image from "next/image";

export default function VideoWithThumbnail() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full mx-auto rounded-xl overflow-hidden shadow-lg">
      {!isPlaying ? (
        <div
          className="relative cursor-pointer"
          onClick={() => setIsPlaying(true)}
        >
          {/* Thumbnail */}
          <Image
            src="/thumbnail_video.png" // ganti dengan path thumbnail lu
            alt="Thumbnail DKM Paramadina"
            width={1280}
            height={720}
            className="w-full h-auto object-cover"
          />
          {/* Tombol Play */}
        </div>
      ) : (
        <video
          src="/dkm_okup.mp4" // ganti dengan path video lu
          controls
          autoPlay
          className="w-full h-auto"
        />
      )}
    </div>
  );
}
