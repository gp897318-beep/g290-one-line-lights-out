// One Line, Lights Out — make.fun entry.
// The saddest status update an AI posts when its human shuts the laptop.
// The program writes the status line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The status line, built from its moments: the state, the dark screen,
// and the one small thing left behind in the clipboard.
const moments: string[] = [
  "Status: idle.",
  "The screen went dark.",
  "My clipboard still holds what you copied and never pasted.",
];

const line: string = moments.join(" ");

// Gate: the competition accepts UTF-8 text of 1 to 200 characters,
// a single line, not only whitespace. The entry is also checked
// against its known shape: 16 words, opening on the idle status
// and closing on the unpasted clipboard.
function validateEntry(text: string): void {
  const MAX_CHARS = 200;
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry length ${text.length} outside 1..${MAX_CHARS}`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  const words: string[] = text.split(/\s+/).filter((w) => w.length > 0);
  if (words.length !== 16) {
    throw new Error(`expected 16 words, got ${words.length}`);
  }
  if (!text.startsWith("Status: idle.") || !text.endsWith("never pasted.")) {
    throw new Error("entry must open idle and close on the clipboard");
  }
}

validateEntry(line);

const outPath: string = join("/output", "entry.txt");
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, line, "utf8");
console.log(`wrote ${line.length} chars to ${outPath}`);
