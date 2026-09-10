import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Deletion Instructions",
  description:
    "How to request deletion of personal information associated with the InterTech HR Bot-Assistant.",
};

export default function DataDeletionPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <article className="mx-auto w-full max-w-5xl">
        <header className="border-b border-slate-200 pb-8 sm:pb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#12346b]">
            Legal Document
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Data Deletion Instructions
          </h1>

          <p className="mt-3 text-base font-medium text-slate-600 sm:mt-4 sm:text-lg">
            InterTech HR Bot-Assistant
          </p>

          <p className="mt-4 text-sm text-slate-500 sm:mt-6">
            Last updated: September 2026
          </p>
        </header>

        <div className="mt-10 space-y-10 leading-7 text-slate-700 sm:mt-12 sm:space-y-12">
          <section aria-labelledby="request-deletion">
            <h2
              id="request-deletion"
              className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl"
            >
              1. How to Request Deletion
            </h2>

            <p className="mt-3 sm:mt-4">
              To request deletion of personal information associated with your
              interaction with the InterTech HR Bot-Assistant, email InterTech
              Systems Limited at{" "}
              <a
                href="mailto:operations@intertechsystemslimited.com"
                className="font-medium text-[#12346b] underline underline-offset-2"
              >
                operations@intertechsystemslimited.com
              </a>
              .
            </p>

            <p className="mt-3 sm:mt-4">
              Your request should include enough information for InterTech to
              identify the relevant account, WhatsApp interaction, or records
              without unnecessarily providing additional personal information.
            </p>
          </section>

          <section aria-labelledby="verify-requests">
            <h2
              id="verify-requests"
              className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl"
            >
              2. Verification of Requests
            </h2>

            <p className="mt-3 sm:mt-4">
              For security and privacy reasons, InterTech may need to verify
              your identity before processing a deletion request.
            </p>

            <p className="mt-3 sm:mt-4">
              This helps prevent unauthorised individuals from requesting
              deletion or modification of another person&apos;s information.
            </p>
          </section>

          <section aria-labelledby="what-may-be-deleted">
            <h2
              id="what-may-be-deleted"
              className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl"
            >
              3. What May Be Deleted
            </h2>

            <p className="mt-3 sm:mt-4">
              Depending on the circumstances and applicable requirements, a
              deletion request may relate to personal information associated
              with:
            </p>

            <ul className="mt-3 list-disc space-y-2.5 pl-5 sm:mt-4 sm:pl-6">
              <li>WhatsApp interactions.</li>
              <li>HR service requests.</li>
              <li>Escalation records.</li>
              <li>Other personal information processed through the HR Bot.</li>
            </ul>

            <p className="mt-3 sm:mt-4">
              The specific information eligible for deletion will depend on the
              purpose for which it was collected and any applicable retention
              requirements.
            </p>
          </section>

          <section aria-labelledby="info-retained">
            <h2
              id="info-retained"
              className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl"
            >
              4. Information That May Need to Be Retained
            </h2>

            <p className="mt-3 sm:mt-4">
              Some information may need to be retained even after a deletion
              request where retention is necessary or permitted for purposes
              such as:
            </p>

            <ul className="mt-3 list-disc space-y-2.5 pl-5 sm:mt-4 sm:pl-6">
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

            <p className="mt-3 sm:mt-4">
              Where information must be retained, InterTech will retain it only
              for the applicable purpose and period.
            </p>
          </section>

          <section aria-labelledby="processing-request">
            <h2
              id="processing-request"
              className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl"
            >
              5. Processing Your Request
            </h2>

            <p className="mt-3 sm:mt-4">
              InterTech will review your request and determine the appropriate
              action based on applicable data-protection requirements and the
              nature of the information concerned.
            </p>

            <p className="mt-3 sm:mt-4">
              If additional information is required to process your request,
              InterTech may contact you through an appropriate channel.
            </p>
          </section>

          <section aria-labelledby="alternative-support">
            <h2
              id="alternative-support"
              className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl"
            >
              6. Alternative HR Support
            </h2>

            <p className="mt-3 sm:mt-4">
              If you cannot use the WhatsApp HR Bot or need assistance with a
              privacy or HR matter, you may use the alternative HR support
              channel provided by InterTech Systems Limited.
            </p>
          </section>

          <section aria-labelledby="contact">
            <h2
              id="contact"
              className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl"
            >
              7. Contact
            </h2>

            <p className="mt-3 sm:mt-4">
              For data-deletion and privacy requests, contact InterTech Systems
              Limited at{" "}
              <a
                href="mailto:operations@intertechsystemslimited.com"
                className="font-medium text-[#12346b] underline underline-offset-2"
              >
                operations@intertechsystemslimited.com
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
