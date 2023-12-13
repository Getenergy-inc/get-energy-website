"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold">Something went wrong!</h2>
        <div className="w-fit mx-auto">
          <button onClick={() => reset()} className="px-4 py-2 bg-primaryBlue text-white rounded-lg">
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
