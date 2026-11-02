#!/usr/bin/env node
const name = process.argv[2];
if (!name) {
  console.log(`instruct: prints my instruction files from github.com/gurinder-25/instructions

Usage:
  instruct list      list available instructions
  instruct <name>    print one (e.g. instruct general)`);
  process.exit(0);
}
const file = name === "list" ? "index.txt" : `${encodeURIComponent(name)}.md`;
const res = await fetch(`https://raw.githubusercontent.com/gurinder-25/instructions/main/${file}`);
if (!res.ok) {
  console.error(`instruct: "${name}" not found (HTTP ${res.status}). Try: instruct list`);
  process.exit(1);
}
console.log((await res.text()).trimEnd());
