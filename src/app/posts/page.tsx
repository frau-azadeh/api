import { getPhoto } from "@/lib/api";

export default async function PhotoPage() {
    const photos = await getPhoto();

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
            <div className="w-full max-w-[1400px]">
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                    {photos.slice(0, 12).map((photo) => (
                        <li
                            key={photo.id}
                            className="relative aspect-square rounded-xl overflow-hidden shadow-lg group"
                        >
                            <img
                                src={photo.download_url}
                                alt={photo.author}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-center p-2 backdrop-blur-sm">
                                <h2 className="text-sm font-medium truncate">{photo.author}</h2>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
