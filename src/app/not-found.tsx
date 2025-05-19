// src/app/not-found.tsx
export default function NotFoundPage() {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-white">
        <h1 className="text-4xl font-bold text-red-600 mb-4">404 - پست پیدا نشد</h1>
        <p className="text-gray-600 text-lg">پستی با این شناسه وجود ندارد یا حذف شده است.</p>
      </div>
    );
  }
  