export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <article className="mx-auto w-full max-w-5xl">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>

          <p className="mt-3 text-lg text-gray-600">
            InterTech HR Bot-Assistant
          </p>

          <p className="mt-6 text-sm text-gray-500">
            Last updated: September 2026
          </p>
        </header>

        <div className="mt-12 space-y-10 leading-7 text-gray-700">
          <section aria-labelledby="info-process">
            <h2
              id="info-process"
              className="text-2xl font-semibold text-gray-900"
            >
              1. Information We Process
            </h2>
            <p className="mt-3">
              InterTech Systems Limited (&quot;InterTech&quot;, &quot;we&quot;,
              &quot;us&quot;, or &quot;our&quot;) operates the InterTech HR
              Bot-Assistant...
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Your WhatsApp telephone number.</li>
              <li>Messages and responses you send to the HR Bot.</li>
              <li>Menu selections and service options you use.</li>
              <li>Information required to respond to an HR request.</li>
              <li>Information associated with an HR escalation.</li>
              <li>
                Timestamps and technical information associated with your
                interaction.
              </li>
              <li>
                Other information you voluntarily provide when requesting HR
                assistance.
              </li>
            </ul>
          </section>

          {/* Repeat this pattern for each section:
              - Add aria-labelledby
              - Give each <h2> a unique id
              - Keep consistent spacing and indentation */}
        </div>
      </article>
    </main>
  );
}
