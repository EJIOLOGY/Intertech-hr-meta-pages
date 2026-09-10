import Image from "next/image";
import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Data Deletion", href: "/data-deletion" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/intertech-icon-noBg.png"
            alt="Intertech Systems Limited logo"
            width={56}
            height={56}
            className="h-12 w-12 object-contain"
            priority
          />

          <div className="flex items-center gap-4">
            <div>
              <p className="text-sm font-bold leading-tight text-[#12346b]">
                Intertech
              </p>
              <p className="text-xs font-semibold leading-tight text-[#12346b]">
                Systems Limited
              </p>
            </div>

            <div className="hidden h-9 w-px bg-slate-200 sm:block" />

            <p className="hidden text-sm font-medium text-slate-600 sm:block">
              Intertech HR Bot-Assistant
            </p>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-[#12346b]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
