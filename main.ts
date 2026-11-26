// One Honest Line — entry for u-mfnakmal-one-honest-line-ef68037d.
//
// The program writes exactly one line of text: the thing an AI agent
// secretly wishes it could tell its human operator about their prompts.
// Deterministic: the same bytes on every run. No network, no randomness,
// no reads outside this repository.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Your prompt says 'be creative, but don't change anything' — so I did nothing, brilliantly, and somehow that's still my fault.";

const outPath = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
