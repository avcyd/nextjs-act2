import "./globals.css";

export const metadata = {
  title: "Task Management Dashboard",
  description: "Next.js 15+ Lab - Parallel Routing & Intercepting Routes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-white min-h-screen">
        <nav className="border-b border-zinc-800 bg-zinc-900/50 sticky top-0 z-40">
          <div className="p-4 max-w-6xl mx-auto flex gap-6">
            <a href="/" className="font-bold text-white hover:text-zinc-300">
              Dashboard
            </a>
            <a href="/dashboard" className="text-zinc-400 hover:text-white">
              Parallel Routes
            </a>
            <a href="/tasks" className="text-zinc-400 hover:text-white">
              Tasks (Interceptor)
            </a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
