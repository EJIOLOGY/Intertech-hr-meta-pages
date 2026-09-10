export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto w-full max-w-5xl">
        <h1 className="text-4xl font-bold tracking-tight">
          InterTech HR Bot-Assistant
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Public information and legal documents relating to the InterTech HR
          Bot-Assistant.
        </p>

        <nav className="mt-10 space-y-4">
          <a
            href="/privacy-policy"
            className="block text-lg font-medium underline"
          >
            Privacy Policy
          </a>

          <a href="/terms" className="block text-lg font-medium underline">
            Terms of Service
          </a>

          <a
            href="/data-deletion"
            className="block text-lg font-medium underline"
          >
            Data Deletion Instructions
          </a>
        </nav>
      </div>
    </main>
  );
}
