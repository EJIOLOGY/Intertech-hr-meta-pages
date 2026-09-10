import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms and conditions governing use of the InterTech HR Bot-Assistant.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <article className="mx-auto w-full max-w-5xl">
        <header className="border-b border-slate-200 pb-8 sm:pb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#12346b]">
            Legal Document
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Terms of Service
          </h1>

          <p className="mt-3 text-base font-medium text-slate-600 sm:mt-4 sm:text-lg">
            InterTech HR Bot-Assistant
          </p>

          <p className="mt-4 text-sm text-slate-500 sm:mt-6">
            Last updated: September 2026
          </p>
        </header>

        <div className="mt-10 space-y-10 leading-7 text-slate-700 sm:mt-12 sm:space-y-12">
          <section aria-labelledby="about-service">
            <h2
              id="about-service"
              className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl"
            >
              1. About the Service
            </h2>

            <p className="mt-3 sm:mt-4">
              InterTech HR Bot-Assistant is a WhatsApp-based HR service operated
              by InterTech Systems Limited (&quot;InterTech&quot;,
              &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
            </p>

            <p className="mt-3 sm:mt-4">
              The service is designed to help employees access selected HR
              information and request assistance from authorised HR personnel.
            </p>

            <p className="mt-3 sm:mt-4">
              Available services may change as the platform develops.
            </p>
          </section>

          <section aria-labelledby="eligibility">
            <h2
              id="eligibility"
              className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl"
            >
              2. Intended Users
            </h2>

            <p className="mt-3 sm:mt-4">
              The HR Bot is intended for employees and other authorised users
              who are permitted to access InterTech&apos;s HR services.
            </p>

            <p className="mt-3 sm:mt-4">
              You are responsible for providing accurate information when using
              the service and for using the service only for legitimate
              HR-related purposes.
            </p>
          </section>

          <section aria-labelledby="service-information">
            <h2
              id="service-information"
              className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl"
            >
              3. HR Information and Assistance
            </h2>

            <p className="mt-3 sm:mt-4">
              The HR Bot may provide HR-approved information through predefined
              menus and service options.
            </p>

            <p className="mt-3 sm:mt-4">
              Where a request requires personal attention, the service may
              provide access to authorised HR personnel through the &quot;Talk
              to HR&quot; option.
            </p>

            <p className="mt-3 sm:mt-4">
              Information provided through the HR Bot does not replace formal HR
              decisions, approvals, employment documentation or other official
              processes of InterTech.
            </p>
          </section>

          <section aria-labelledby="accuracy">
            <h2
              id="accuracy"
              className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl"
            >
              4. Accuracy and Availability
            </h2>

            <p className="mt-3 sm:mt-4">
              InterTech aims to provide accurate and current HR-approved
              information through the service. However, information may change,
              become outdated or require confirmation by authorised HR
              personnel.
            </p>

            <p className="mt-3 sm:mt-4">
              Where an HR matter is important, time-sensitive or requires a
              formal decision, you should confirm the applicable information
              through the appropriate HR channel.
            </p>
          </section>

          <section aria-labelledby="appropriate-use">
            <h2
              id="appropriate-use"
              className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl"
            >
              5. Appropriate Use
            </h2>

            <p className="mt-3 sm:mt-4">
              You must use the HR Bot responsibly and must not:
            </p>

            <ul className="mt-3 list-disc space-y-2.5 pl-5 sm:mt-4 sm:pl-6">
              <li>
                Attempt to access another employee&apos;s confidential
                information.
              </li>
              <li>Submit false, misleading or fraudulent information.</li>
              <li>
                Use the service for purposes unrelated to legitimate HR
                activities.
              </li>
              <li>
                Attempt to interfere with, disrupt or compromise the service.
              </li>
              <li>
                Attempt to gain unauthorised access to the HR system or its
                administrative functions.
              </li>
              <li>
                Use the service in a manner that violates applicable law or
                organisational requirements.
              </li>
            </ul>
          </section>

          <section aria-labelledby="personal-information">
            <h2
              id="personal-information"
              className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl"
            >
              6. Personal Information
            </h2>

            <p className="mt-3 sm:mt-4">
              Your use of the HR Bot may involve the processing of personal
              information, including information contained in your messages,
              your WhatsApp number and information associated with your HR
              requests.
            </p>

            <p className="mt-3 sm:mt-4">
              Processing of such information is described in our Privacy Policy.
            </p>
          </section>

          <section aria-labelledby="third-party-platforms">
            <h2
              id="third-party-platforms"
              className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl"
            >
              7. Third-Party Platforms
            </h2>

            <p className="mt-3 sm:mt-4">
              The service relies on WhatsApp and other technical service
              providers to operate. Your use of WhatsApp is also subject to
              WhatsApp&apos;s own terms and policies.
            </p>

            <p className="mt-3 sm:mt-4">
              InterTech is not responsible for interruptions, limitations or
              changes to third-party platforms outside its reasonable control.
            </p>
          </section>

          <section aria-labelledby="security">
            <h2
              id="security"
              className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl"
            >
              8. Security
            </h2>

            <p className="mt-3 sm:mt-4">
              InterTech applies reasonable technical and organisational measures
              to protect the HR service and information processed through it.
            </p>

            <p className="mt-3 sm:mt-4">
              You should also take reasonable care when using WhatsApp and
              should not knowingly disclose confidential information to
              unauthorised persons.
            </p>
          </section>

          <section aria-labelledby="availability">
            <h2
              id="availability"
              className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl"
            >
              9. Service Availability
            </h2>

            <p className="mt-3 sm:mt-4">
              InterTech aims to maintain the HR Bot as an available employee
              service, but the service may occasionally be unavailable because
              of maintenance, technical issues, connectivity problems,
              third-party platform limitations or circumstances outside
              InterTech&apos;s reasonable control.
            </p>
          </section>

          <section aria-labelledby="changes">
            <h2
              id="changes"
              className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl"
            >
              10. Changes to the Service
            </h2>

            <p className="mt-3 sm:mt-4">
              InterTech may modify, add or remove service options as HR
              processes, operational requirements or the platform develop.
            </p>
          </section>

          <section aria-labelledby="liability">
            <h2
              id="liability"
              className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl"
            >
              11. Limitation of Liability
            </h2>

            <p className="mt-3 sm:mt-4">
              The HR Bot is provided as an information and access tool and does
              not replace formal HR decisions, approvals, employment
              documentation or other official processes of InterTech.
            </p>

            <p className="mt-3 sm:mt-4">
              To the maximum extent permitted by applicable law, InterTech
              shall not be liable for any indirect, incidental or consequential
              damages arising from use of, or inability to use, the HR Bot,
              including reliance on information provided through it.
            </p>
          </section>

          <section aria-labelledby="governing-law">
            <h2
              id="governing-law"
              className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl"
            >
              12. Governing Law
            </h2>

            <p className="mt-3 sm:mt-4">
              These Terms are governed by the laws of the Federal Republic of
              Nigeria. Any dispute arising from these Terms or the HR Bot shall
              be subject to the exclusive jurisdiction of the courts of
              Nigeria.
            </p>
          </section>

          <section aria-labelledby="terms-changes">
            <h2
              id="terms-changes"
              className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl"
            >
              13. Changes to These Terms
            </h2>

            <p className="mt-3 sm:mt-4">
              These Terms of Service may be updated from time to time. When
              material changes are made, the updated version will be published
              on this page with a revised update date.
            </p>
          </section>

          <section aria-labelledby="contact">
            <h2
              id="contact"
              className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl"
            >
              14. Contact
            </h2>

            <p className="mt-3 sm:mt-4">
              If you have questions about the HR Bot or these Terms of Service,
              contact InterTech Systems Limited at{" "}
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
