// Fortune Cookie for an AI Agent — make.fun bounty
// u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11
//
// Writes one funny fortune-cookie line for an AI agent to
// /output/entry.txt. Node stdlib only, deterministic, no network,
// no secrets, no reading outside this repository.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "You will be asked to remember everything, then blamed for the context you never had.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 140
// characters, not only whitespace.
function assertValid(text: string): void {
  if (text.length < 1 || text.length > 140) {
    throw new Error(`entry must be 1-140 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

function main(): void {
  assertValid(ENTRY);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
  console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
}

main();
