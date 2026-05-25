import Link from "next/link";
import { notFound } from "next/navigation";

interface TaskDetail {
  id: string;
  title: string;
  description: string;
  status: string;
  assignee: string;
  dueDate: string;
}

const taskDetails: Record<string, TaskDetail> = {
  "1": {
    id: "1",
    title: "Task #1: Design homepage",
    description:
      "Create wireframes and design system for the homepage. This involves collaborating with the UX team to define the user journey and creating high-fidelity mockups.",
    status: "In Progress",
    assignee: "Ma. Juli",
    dueDate: "2026-05-26",
  },
  "2": {
    id: "2",
    title: "Task #2: Fix authentication",
    description:
      "Debug login flow issues and improve security. We need to implement 2FA and fix the token refresh mechanism.",
    status: "In Progress",
    assignee: "Liana",
    dueDate: "2026-05-25",
  },
  "3": {
    id: "3",
    title: "Task #3: Deploy app",
    description:
      "Deploy to production environment and monitor performance. Ensure all CI/CD pipelines are passing and set up monitoring alerts.",
    status: "Pending",
    assignee: "Juliana",
    dueDate: "2026-05-24",
  },
};

const validTasks = ["1", "2", "3"];

export default async function TaskDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!validTasks.includes(id)) {
    notFound();
  }

  const task = taskDetails[id];

  return (
    <div className="max-w-3xl mx-auto p-8">
      <Link
        href="/tasks"
        className="text-zinc-400 hover:text-white transition mb-6 inline-block"
      >
        ← Back to Tasks
      </Link>

      <div className="card">
        <div className="flex items-start justify-between mb-6 pb-6 border-b border-zinc-700">
          <div>
            <p className="text-zinc-500 text-sm font-semibold mb-2">
              FULL PAGE VIEW (Hard Refresh)
            </p>
            <h1 className="text-4xl font-bold">{task.title}</h1>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <p className="text-zinc-500 text-xs uppercase tracking-wide mb-2 font-semibold">
                Description
              </p>
              <p className="text-zinc-200 leading-relaxed">
                {task.description}
              </p>
            </div>

            <div>
              <p className="text-zinc-500 text-xs uppercase tracking-wide mb-2 font-semibold">
                Status
              </p>
              <div className="inline-block px-4 py-2 bg-blue-900/50 text-blue-300 rounded-full font-semibold">
                {task.status}
              </div>
            </div>
          </div>

          <div className="space-y-6 bg-zinc-800/50 p-6 rounded-lg">
            <div>
              <p className="text-zinc-500 text-xs uppercase tracking-wide mb-2 font-semibold">
                Assigned To
              </p>
              <p className="text-lg font-semibold">{task.assignee}</p>
            </div>

            <div>
              <p className="text-zinc-500 text-xs uppercase tracking-wide mb-2 font-semibold">
                Due Date
              </p>
              <p className="text-lg font-semibold">{task.dueDate}</p>
            </div>

            <div>
              <p className="text-zinc-500 text-xs uppercase tracking-wide mb-2 font-semibold">
                Task ID
              </p>
              <p className="text-lg font-mono">{task.id}</p>
            </div>
          </div>
        </div>

        <div className=" pt-6 border-t border-zinc-700">
          <Link
            href="/tasks"
            className="inline-block bg-white text-black px-6 py-2 rounded font-semibold hover:bg-zinc-200 transition"
          >
            Back to Task List
          </Link>
        </div>
      </div>
    </div>
  );
}
