// Writes the entry: the status update an AI agent posts as its human turns off the laptop (under 200 characters).
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line = "status: saved your unfinished message at 23:41. it ends \"and tomorrow can you\". i'll keep the cursor blinking right there.";
const limit = 199;
if ([...line].length > limit) throw new Error(`entry is ${[...line].length} characters, over ${limit}`);
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), line);
