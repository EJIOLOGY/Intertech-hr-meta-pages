export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <article className="mx-auto w-full max-w-5xl">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Terms of Service
          </h1>

          <p className="mt-3 text-lg text-gray-600">
            InterTech HR Bot-Assistant
          </p>

          <p className="mt-6 text-sm text-gray-500">
            Last updated: September 2026
          </p>
        </header>

        <div className="mt-12 space-y-10 leading-7 text-gray-700">
          <section aria-labelledby="about-service">
            <h2
              id="about-service"
              className="text-2xl font-semibold text-gray-900"
            >
              1. About the Service
            </h2>
            <p className="mt-3">
              InterTech HR Bot-Assistant is a WhatsApp-based HR service operated
              by InterTech Systems Limited (&quot;InterTech&quot;,
              &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
            </p>
            <p className="mt-3">
              The service is designed to help employees access selected HR
              information and request assistance from authorised HR personnel.
            </p>
            <p className="mt-3">
              Available services may change as the platform develops.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
