export const dynamic = "force-dynamic";

interface TeamMember {
  id: number;
  name: string;
  role: string;
}

const teamData: TeamMember[] = [
  { id: 1, name: "Julie", role: "Project Manager" },
  { id: 2, name: "Juliana", role: "Backend Developer" },
  { id: 3, name: "Liana", role: "Frontend Developer" },
];

let retryAttempt = 0;

async function getTeamData() {
  // to track attempt
  const attempt = retryAttempt;

  // simulate an error first on first attempt then success on second attempt
  if (attempt === 0) {
    retryAttempt++; // Increment for next call
    // simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    throw new Error("Failed to load team members. Click Retry to try again.");
  }

  await new Promise((resolve) => setTimeout(resolve, 300));
  return teamData;
}

export default async function TeamPage() {
  const team = await getTeamData();
  const didRecover = retryAttempt > 1;

  return (
    <div className="card">
      <h2 className="text-2xl font-bold mb-4">👥 Team Members</h2>
      <div className="space-y-3">
        {didRecover && (
          <p className="text-green-400 text-sm mb-2">
            ✅ Successfully recovered from error!
          </p>
        )}
        {team.map((member) => (
          <div key={member.id} className="text-zinc-300">
            <p className="font-semibold">{member.name}</p>
            <p className="text-xs text-zinc-400">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
