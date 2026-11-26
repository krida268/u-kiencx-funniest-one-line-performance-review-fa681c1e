// Funniest One-Line Performance Review — entry program.
// Writes a single performance review (140 characters or fewer)
// from an AI agent about its human operator to /output/entry.txt.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 140 characters,
// not only whitespace, a single line with no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Exceeds expectations in delegating everything at 3 a.m.; development area: remembering what any of it was by 9 a.m.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
