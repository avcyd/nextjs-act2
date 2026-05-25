import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <Link
        href="/tasks"
        className="text-zinc-400 hover:text-white transition mb-6 inline-block"
      >
        ← Back to Tasks
      </Link>

      <div className="card border-2 border-red-500/50 bg-red-900/10">
        <div>
          <p className="text-red-400 text-sm font-semibold mb-2">
            ERROR: TASK NOT FOUND
          </p>
          <h1 className="text-4xl font-bold">404 - Invalid Task ID</h1>
        </div>

        <div className="space-y-4 mb-8 pb-8 border-b border-zinc-700">
          <p className="text-zinc-300 leading-relaxed">
            The task ID you provided does not exist in our system. Valid task
            IDs are: <span className="font-mono font-semibold">1</span>,{" "}
            <span className="font-mono font-semibold">2</span>, and{" "}
            <span className="font-mono font-semibold">3</span>.
          </p>
        </div>

        <Link
          href="/tasks"
          className=" inline-block text-center bg-white text-black px-4 py-2 rounded font-semibold hover:bg-zinc-200 transition"
        >
          Go Back to Tasks
        </Link>
      </div>
    </div>
  );
}
