import type { Metadata } from "next";
import { experiments } from "@/lib/experiments";
import { ExperimentCard } from "@/components/experiment-card";

export const metadata: Metadata = {
  title: "Experiments",
  description: "Interactive experiments and creative explorations.",
};

export default function ExperimentsIndex() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
          Experiments
        </h1>
        <p className="mt-2 text-neutral-600">
          Interactive experiments and creative explorations.
        </p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2">
        {experiments
          .filter((e) => !e.draft)
          .map((experiment) => (
            <ExperimentCard key={experiment.slug} experiment={experiment} />
          ))}
      </div>
    </div>
  );
}
