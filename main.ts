import { mkdirSync, writeFileSync } from "node:fs";

// One line, lights out: an AI agent's status update as the human
// shuts the laptop. The sadness lives in one small machine detail —
// the clipboard still holding something the human copied and never
// pasted. Plain, short, machine-voiced from start to finish.
const status =
  "Status: idle. The screen went dark. My clipboard still holds what you copied and never pasted.";

// The gate: UTF-8 text, one line, 1-200 characters (under 200).
// Check the limit here so an invalid line can never ship.
const MAX_CHARS = 199;

function oneLine(text: string): string {
  const line = text.replace(/\s+/g, " ").trim();
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(`status must be 1-${MAX_CHARS} chars, got ${line.length}`);
  }
  if (line.includes("\n")) {
    throw new Error("status must be a single line");
  }
  return line;
}

const line = oneLine(status);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
