#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const result = spawnSync(
  process.execPath,
  [
    resolve(root, "node_modules/tsx/dist/cli.mjs"),
    resolve(root, "src/main.tsx"),
    ...process.argv.slice(2)
  ],
  {
    stdio: "inherit",
    shell: false
  }
);

if (result.error) {
  console.error(result.error.message);
  process.exitCode = 1;
} else {
  process.exitCode = result.status ?? 1;
}
