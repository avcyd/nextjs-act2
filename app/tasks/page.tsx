import Link from "next/link";

const tasks = [
  {
    id: 1,
    title: "Design Homepage",
    description: "Create wireframes and design system",
  },
  {
    id: 2,
    title: "Fix Authentication",
    description: "Debug login flow issues",
  },
  {
    id: 3,
    title: "Deploy App",
    description: "Deploy to production environment",
  },
];

export default function TasksPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold">Tasks</h1>
          <p className="text-zinc-400 mt-2">
            Click a task to see the intercepted modal. Hard refresh to see full
            page.
          </p>
        </div>
        <Link href="/" className="text-zinc-400 hover:text-white transition">
          ← Home
        </Link>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <Link
            key={task.id}
            href={`/tasks/tasks/${task.id}`}
            className="block card hover:bg-zinc-900/80 hover:border-zinc-600 cursor-pointer transition group"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold group-hover:text-blue-400 transition">
                  {task.title}
                </h3>
                <p className="text-zinc-400 text-sm mt-1">{task.description}</p>
              </div>
              <div className="text-2xl text-zinc-600 group-hover:text-zinc-400 transition">
                →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
