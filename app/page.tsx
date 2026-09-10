import Link from "next/link";

const services = [
  {
    number: "01",
    title: "HR Information",
    description:
      "Access HR-approved information on company policies, benefits, procedures, leave, payroll and other employee-related matters through the WhatsApp service.",
  },
  {
    number: "02",
    title: "Employee Support",
    description:
      "Make HR enquiries and supported employee-service requests through guided options, with quick access to the information and assistance you need.",
  },
  {
    number: "03",
    title: "Human Assistance",
    description:
      'If your request requires personal attention, connect with an authorised HR representative through the "Talk to HR" option.',
  },
];

const legalDocuments = [
  {
    title: "Privacy Policy",
    description:
      "Learn how InterTech HR Bot-Assistant collects, uses, retains and protects personal information.",
    href: "/privacy-policy",
  },
  {
    title: "Terms of Service",
    description:
      "Review the terms and conditions governing the use of the InterTech HR Bot-Assistant.",
    href: "/terms",
  },
  {
    title: "Data Deletion Instructions",
    description:
      "Learn how to request deletion of personal information associated with the service.",
    href: "/data-deletion",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <section>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
            Employee HR Service
          </p>

          <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            InterTech HR Bot-Assistant
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
            HR information and employee support through WhatsApp.
          </p>

          <p className="mt-3 max-w-3xl leading-7 text-slate-600 sm:mt-4">
            The InterTech HR Bot-Assistant provides employees with convenient
            access to HR-approved information, supported employee services and
            assistance from authorised HR personnel.
          </p>
        </section>

        <section className="mt-12 sm:mt-14 lg:mt-16">
          <h2 className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
            What this service provides
          </h2>

          <div className="mt-5 grid gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700 sm:h-10 sm:w-10">
                  {service.number}
                </div>

                <h3 className="mt-4 text-base font-semibold text-slate-950 sm:mt-5 sm:text-lg">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600 sm:mt-3">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 sm:mt-14 lg:mt-16">
          <div className="border-b border-slate-200 pb-4 sm:pb-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
              Public Information
            </p>

            <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
              Legal Documents
            </h2>

            <p className="mt-2 max-w-2xl leading-7 text-slate-600">
              Review the documents that explain how the InterTech HR
              Bot-Assistant operates and how information provided through the
              service is handled.
            </p>
          </div>

          <div className="mt-5 grid gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {legalDocuments.map((document) => (
              <Link
                key={document.href}
                href={document.href}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700 sm:h-10 sm:w-10">
                    →
                  </div>

                  <span
                    aria-hidden="true"
                    className="text-xl text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-blue-700"
                  >
                    →
                  </span>
                </div>

                <h3 className="mt-5 text-base font-semibold text-slate-950 sm:mt-6 sm:text-lg">
                  {document.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600 sm:mt-3">
                  {document.description}
                </p>

                <p className="mt-4 text-sm font-semibold text-blue-700 sm:mt-5">
                  View document
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
