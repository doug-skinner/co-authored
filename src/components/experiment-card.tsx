import Link from "next/link";
import type { ExperimentMeta } from "@/lib/types";

export function ExperimentCard({ experiment }: { experiment: ExperimentMeta }) {
  return (
    <Link
      href={`/experiments/${experiment.slug}`}
      className="group block rounded-lg border border-neutral-200 p-6 transition-colors hover:border-neutral-400"
    >
      <h3 className="font-semibold text-neutral-900 group-hover:text-neutral-600 transition-colors">
        {experiment.title}
      </h3>
      <p className="mt-2 text-sm text-neutral-600">{experiment.description}</p>
      <time className="mt-3 block text-xs text-neutral-400" dateTime={experiment.date}>
        {experiment.date}
      </time>
    </Link>
  );
}
