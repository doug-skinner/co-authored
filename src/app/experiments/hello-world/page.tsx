"use client";

import { useState } from "react";
import type { Metadata } from "next";

export default function HelloWorldExperiment() {
  const [count, setCount] = useState(0);

  return (
    <div className="mx-auto max-w-2xl px-6 py-16 text-center">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
        Hello World
      </h1>
      <p className="mt-4 text-neutral-600">
        A simple interactive experiment to kick things off. Click the button.
      </p>
      <div className="mt-12">
        <button
          onClick={() => setCount((c) => c + 1)}
          className="rounded-lg bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
        >
          Clicked {count} {count === 1 ? "time" : "times"}
        </button>
      </div>
    </div>
  );
}
