async function getAnalytics() {
  // 3-second delay to demonstrate Suspense streaming
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return {
    completed: 24,
    pending: 8,
    total: 32,
    completionRate: 75,
  };
}

export default async function AnalyticsPage() {
  const data = await getAnalytics();

  return (
    <div className="card">
      <h2 className="text-2xl font-bold mb-6">Analytics</h2>

      <div className="space-y-4">
        <div className="flex justify-between items-center p-3 bg-zinc-800/50 rounded">
          <span className="text-zinc-300">Completed Tasks</span>
          <span className="text-2xl font-bold text-green-400">
            {data.completed}
          </span>
        </div>
        <div className="flex justify-between items-center p-3 bg-zinc-800/50 rounded">
          <span className="text-zinc-300">Pending Tasks</span>
          <span className="text-2xl font-bold text-yellow-400">
            {data.pending}
          </span>
        </div>
        <div className="flex justify-between items-center p-3 bg-zinc-800/50 rounded">
          <span className="text-zinc-300">Total Tasks</span>
          <span className="text-2xl font-bold text-blue-400">{data.total}</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-zinc-800/50 rounded">
          <span className="text-zinc-300">Completion Rate</span>
          <span className="text-2xl font-bold text-purple-400">
            {data.completionRate}%
          </span>
        </div>
      </div>
    </div>
  );
}
