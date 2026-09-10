export default function DataDeletionPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <article className="mx-auto w-full max-w-5xl">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Data Deletion Instructions
          </h1>

          <p className="mt-3 text-lg text-gray-600">
            InterTech HR Bot-Assistant
          </p>

          <p className="mt-6 text-sm text-gray-500">
            Last updated: September 2026
          </p>
        </header>

        <div className="mt-12 space-y-10 leading-7 text-gray-700">
          <section aria-labelledby="request-deletion">
            <h2
              id="request-deletion"
              className="text-2xl font-semibold text-gray-900"
            >
              1. How to Request Deletion
            </h2>
            <p className="mt-3">
              To request deletion of personal information associated with your
              interaction with the InterTech HR Bot-Assistant, contact InterTech
              Systems Limited through its designated HR or data-protection
              contact channel.
            </p>
            <p className="mt-3">
              Your request should include enough information for InterTech to
              identify the relevant account, WhatsApp interaction, or records
              without unnecessarily providing additional personal information.
            </p>
          </section>

          <section aria-labelledby="verify-requests">
            <h2
              id="verify-requests"
              className="text-2xl font-semibold text-gray-900"
            >
              2. Verification of Requests
            </h2>
            <p className="mt-3">
              For security and privacy reasons, InterTech may need to verify
              your identity before processing a deletion request.
            </p>
            <p className="mt-3">
              This helps prevent unauthorised individuals from requesting
              deletion or modification of another person&apos;s information.
            </p>
          </section>

          <section aria-labelledby="what-may-be-deleted">
            <h2
              id="what-may-be-deleted"
              className="text-2xl font-semibold text-gray-900"
            >
              3. What May Be Deleted
            </h2>
            <p className="mt-3">
              Depending on the circumstances and applicable requirements, a
              deletion request may relate to personal information associated
              with:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>WhatsApp interactions.</li>
              <li>HR service requests.</li>
              <li>Escalation records.</li>
              <li>Other personal information processed through the HR Bot.</li>
            </ul>
            <p className="mt-3">
              The specific information eligible for deletion will depend on the
              purpose for which it was collected and any applicable retention
              requirements.
            </p>
          </section>

          <section aria-labelledby="info-retained">
            <h2
              id="info-retained"
              className="text-2xl font-semibold text-gray-900"
            >
              4. Information That May Need to Be Retained
            </h2>
            <p className="mt-3">
              Some information may need to be retained even after a deletion
              request where retention is necessary or permitted for purposes
              such as:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Legal or regulatory compliance.</li>
              <li>Employment records.</li>
              <li>Security and fraud prevention.</li>
              <li>Audit requirements.</li>
              <li>Dispute resolution.</li>
              <li>Establishment or defence of legal claims.</li>
              <li>
                Other legitimate and applicable organisational requirements.
              </li>
            </ul>
            <p className="mt-3">
              Where information must be retained, InterTech will retain it only
              for the applicable purpose and period.
            </p>
          </section>

          <section aria-labelledby="processing-request">
            <h2
              id="processing-request"
              className="text-2xl font-semibold text-gray-900"
            >
              5. Processing Your Request
            </h2>
            <p className="mt-3">
              InterTech will review your request and determine the appropriate
              action based on applicable data-protection requirements and the
              nature of the information concerned.
            </p>
            <p className="mt-3">
              If additional information is required to process your request,
              InterTech may contact you through an appropriate channel.
            </p>
          </section>

          <section aria-labelledby="alt-support">
            <h2
              id="alt-support"
              className="text-2xl font-semibold text-gray-900"
            >
              6. Alternative HR Support
            </h2>
            <p className="mt-3">
              If you cannot use the WhatsApp HR Bot or need assistance with a
              privacy or HR matter, you may use the alternative HR support
              channel provided by InterTech Systems Limited.
            </p>
          </section>

          <section aria-labelledby="contact">
            <h2 id="contact" className="text-2xl font-semibold text-gray-900">
              7. Contact
            </h2>
            <p className="mt-3">
              For data-deletion and privacy requests, contact InterTech Systems
              Limited through its designated HR or data-protection contact
              channel.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
