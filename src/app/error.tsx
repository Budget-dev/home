'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#F9F6EF] flex flex-col items-center justify-center p-6 text-center">
      <div className="text-5xl mb-4">🍃</div>
      <h2 className="font-headline text-3xl font-extrabold text-primary mb-2">Something went wrong!</h2>
      <p className="text-[#7A6848] text-sm mb-6 max-w-md">
        An unexpected error occurred while loading this page.
      </p>
      <div className="flex items-center gap-3">
        <button
          onClick={() => reset()}
          className="px-6 py-3 rounded-full bg-primary text-white text-xs font-black uppercase tracking-widest hover:bg-secondary transition-all shadow-md cursor-pointer"
        >
          Try again
        </button>
        <Link 
          href="/" 
          className="px-6 py-3 rounded-full bg-white text-primary border border-primary text-xs font-black uppercase tracking-widest hover:bg-primary/5 transition-all shadow-sm"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
