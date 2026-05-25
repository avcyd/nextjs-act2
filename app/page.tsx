import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Task Management Dashboard</h1>
        <p className="text-xl text-zinc-400 mb-8">
          Next.js 15+ Lab Activity: Advanced Routing & Resilience
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/dashboard"
            className="card hover:bg-zinc-900 cursor-pointer transition"
          >
            <h2 className="text-2xl font-bold mb-3">Parallel Routes</h2>
            <p className="text-zinc-400 mb-4">
              Instruction: Implement parallel slots (@team and @analytics) to
              display distinct dashboard sections side-by-side.
            </p>
            <div className="text-blue-400 font-semibold">View Dashboard →</div>
          </Link>

          <Link
            href="/tasks"
            className="card hover:bg-zinc-900 cursor-pointer transition"
          >
            <h2 className="text-2xl font-bold mb-3">Intercepting Routes</h2>
            <p className="text-zinc-400 mb-4">
              Instruction: Implement a "soft navigation" interceptor. Clicking a
              task must open a modal overlay, while a hard refresh must load a
              full-page view.
            </p>
            <div className="text-blue-400 font-semibold">View Tasks →</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
