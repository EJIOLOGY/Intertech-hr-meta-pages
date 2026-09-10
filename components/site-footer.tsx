import Image from "next/image";
import Link from "next/link";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Data Deletion", href: "/data-deletion" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-[#12346b] text-white">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/intertech-icon-noBg.png"
            alt="Intertech Systems Limited logo"
            width={44}
            height={44}
            className="h-10 w-10 object-contain"
          />

          <div>
            <p className="text-sm font-semibold">Intertech Systems Limited</p>
            <p className="text-xs text-slate-300">Intertech HR Bot-Assistant</p>
          </div>
        </Link>

        <nav
          className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300"
          aria-label="Footer navigation"
        >
          {legalLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-slate-400 md:text-right">
          © 2026 Intertech Systems Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
