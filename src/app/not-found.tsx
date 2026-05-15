import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <h1 className="text-6xl font-bold text-neutral-900">404</h1>
      <p className="mt-4 text-neutral-600">This page doesn&apos;t exist.</p>
      <Link
        href="/"
        className="mt-8 inline-block text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600"
      >
        Go home
      </Link>
    </div>
  );
}
