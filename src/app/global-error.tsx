'use client';

import React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F9F6EF] min-h-screen flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-bold text-[#1B5E3B] mb-2">Application Error</h2>
          <p className="text-sm text-[#7A6848] mb-4">A critical error occurred.</p>
          <button
            onClick={() => reset()}
            className="px-6 py-2 bg-[#1B5E3B] text-white rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer"
          >
            Reset
          </button>
        </div>
      </body>
    </html>
  );
}
