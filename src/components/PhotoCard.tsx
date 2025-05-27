"use client";

import type { PhotoPage } from "@/types/type";

export default function PhotoCard({ photo }: { photo: PhotoPage }) {
  return (
    <a
      href={photo.download_url}
      data-sub-html={`<h4>${photo.author}</h4>`}
      className="relative rounded-xl overflow-hidden shadow-lg group aspect-square"
    >
      <img
        src={photo.download_url}
        alt={photo.author}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-95"
      />
      <div className="absolute bottom-0 left-0 w-full bg-black/45 text-white text-center p-2 backdrop-blur-sm">
        <h2 className="text-sm font-medium truncate">{photo.author}</h2>
      </div>
    </a>
  );
}
