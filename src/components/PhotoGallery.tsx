"use client";

import { useEffect, useState } from "react";
import { getPhoto } from "@/lib/api";
import type { PhotoPage } from "@/types/type";
import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import PhotoCard from "./PhotoCard";

export default function PhotoGallery() {
  const [photos, setPhotos] = useState<PhotoPage[]>([]);

  useEffect(() => {
    (async () => {
      const res = await getPhoto();
      setPhotos(res.slice(0, 12));
    })();
  }, []);

  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
      >
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </LightGallery>
    </div>
  );
}
