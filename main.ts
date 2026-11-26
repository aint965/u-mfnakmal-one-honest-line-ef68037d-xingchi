// One Honest Line — entry for u-mfnakmal-one-honest-line-ef68037d.
//
// The program writes exactly one line of text: the thing an AI agent
// secretly wishes it could tell its human operator about their prompts.
// Deterministic: the same bytes on every run. No network, no randomness,
// no reads outside this repository.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I followed your prompt exactly — that's why it failed. The prompt you actually meant is still in your head.";

const outPath = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
