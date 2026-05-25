import Link from "next/link";
import ClientUrlFix from "./client-url-fix";
import ModalClose from "./client-close";

interface TaskDetail {
  id: string;
  title: string;
  description: string;
  status: string;
}

const taskDetails: Record<string, TaskDetail> = {
  "1": {
    id: "1",
    title: "Design homepage",
    description: "Create wireframes and design system for the homepage",
    status: "In Progress",
  },
  "2": {
    id: "2",
    title: "Fix authentication",
    description: "Debug login flow issues and improve security",
    status: "In Progress",
  },
  "3": {
    id: "3",
    title: "Deploy app",
    description: "Deploy to production environment and monitor",
    status: "Pending",
  },
};

export default async function ModalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const task = taskDetails[id];

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      {/* to rewrite the browser URL so a hard refresh goes to /tasks/:id */}
      <ClientUrlFix id={id} />
      <div className="bg-zinc-900 p-8 rounded-xl w-full max-w-md border border-zinc-700 shadow-2xl animate-in fade-in zoom-in">
        <div>
          <p className="text-zinc-500 text-sm font-semibold">
            INTERCEPTED MODAL
          </p>
          <h2 className="text-3xl font-bold mt-1">Task #{id}</h2>
        </div>

        <div className="space-y-4 my-6 pb-6 border-b border-zinc-700">
          {task ? (
            <>
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-wide mb-1">
                  Title
                </p>
                <p className="text-lg font-semibold">{task.title}</p>
              </div>
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-wide mb-1">
                  Description
                </p>
                <p className="text-zinc-300">{task.description}</p>
              </div>
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-wide mb-1">
                  Status
                </p>
                <p className="inline-block px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm">
                  {task.status}
                </p>
              </div>
            </>
          ) : (
            <p className="text-zinc-400">Task details not found</p>
          )}
        </div>

        {/* Use a client close button to reliably navigate back to /tasks */}
        <ModalClose />
      </div>
    </div>
  );
}
