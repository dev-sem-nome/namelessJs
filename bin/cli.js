#!/usr/bin/env node

import { spawnSync } from "node:child_process";

const result = spawnSync(
  "tsx",
  ["./bin/cli.tsx", ...process.argv.slice(2)],
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
