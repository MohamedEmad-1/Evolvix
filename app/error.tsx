"use client";

import React from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
        <pre className="text-sm text-red-400 mb-4">{error?.message}</pre>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-indigo-600 text-white rounded"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
