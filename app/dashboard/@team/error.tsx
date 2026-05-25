"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const handleRetry = () => {
    reset();
  };

  return (
    <div className="card border border-red-500">
      <h2 className="text-red-400 text-xl font-bold">Team Slot Error</h2>

      <p className="mt-2 text-zinc-300">{error.message}</p>

      <button
        onClick={handleRetry}
        className="mt-4 bg-red-500 hover:bg-red-600 px-4 py-2 rounded font-semibold transition"
      >
        Retry
      </button>
    </div>
  );
}
