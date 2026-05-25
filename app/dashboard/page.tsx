export const dynamic = "force-dynamic";

import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <p className="text-zinc-400 mt-2">
            This page is for the parallel routes.
          </p>
        </div>
        <Link href="/" className="text-zinc-400 hover:text-white transition">
          ← Home
        </Link>
      </div>
    </div>
  );
}
