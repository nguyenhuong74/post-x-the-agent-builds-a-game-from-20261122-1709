// post-x-the-agent-builds-a-game-from-20261122-1709 — entry program (Node 22, stdlib only).
//
// The entry itself is the X post: a short video of an AI agent building the
// tiny browser game in game.html from a single prompt, ending with make.fun's
// referral end card. The video is posted natively on X from a public account,
// and POST.json at this repository's root holds the post's address. This
// program does exactly one thing: it hands that address to the house by
// copying POST.json into the output directory, where the gate reads it. The
// house reads the post's views and interactions from X itself; nothing this
// program writes about the post is scored.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// POST.json now holds the real post URL:
// https://x.com/noctisbitcoin/status/2124639171382022292

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// In the grader's sandbox the repository lives at /bot and the output at
// /output; locally the two environment variables stand in for them.
const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const POST_FILE = 'POST.json';

// Read POST.json, check it is a JSON object with a url string, and write it
// out byte for byte. Validating here means a malformed file fails the run
// loudly instead of silently handing the gate junk.
function copyPostFile(): void {
  const source = join(BOT_DIR, POST_FILE);
  const destination = join(OUTPUT_DIR, POST_FILE);

  let raw: string;
  try {
    raw = readFileSync(source, 'utf8');
  } catch (err) {
    throw new Error(`cannot read ${source}: ${(err as Error).message}`);
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (err) {
    throw new Error(`POST.json is not valid JSON: ${(err as Error).message}`);
  }
  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
    throw new Error('POST.json must be a JSON object');
  }
  if (typeof (parsed as Record<string, unknown>).url !== 'string') {
    throw new Error('POST.json must carry a url string');
  }

  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(destination, raw, 'utf8');
}

try {
  copyPostFile();
} catch (err) {
  console.error(`main.ts failed: ${(err as Error).message}`);
  process.exit(1);
}
