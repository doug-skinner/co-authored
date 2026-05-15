import Link from "next/link";

const links = [
  { href: "/blog", label: "Blog" },
  { href: "/human", label: "Human" },
  { href: "/experiments", label: "Experiments" },
];

export function Nav() {
  return (
    <nav className="border-b border-neutral-200">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight">
          co-authored
        </Link>
        <ul className="flex gap-6 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
