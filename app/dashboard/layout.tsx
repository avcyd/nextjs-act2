export default function DashboardLayout({
  children,
  analytics,
  team,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <div className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-96">
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold text-zinc-400 mb-3 uppercase tracking-wide">
              Slot: @team
            </h3>
            {team}
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold text-zinc-400 mb-3 uppercase tracking-wide">
              Slot: @analytics
            </h3>
            {analytics}
          </div>
        </div>
      </div>
    </div>
  );
}
