#!/usr/bin/env node
const name = process.argv[2] ?? "list";
const file = name === "list" ? "index.txt" : `${encodeURIComponent(name)}.md`;
const res = await fetch(`https://raw.githubusercontent.com/gurinder-25/instructions/main/${file}`);
if (!res.ok) {
  console.error(`instruct: "${name}" not found (HTTP ${res.status}). Try: instruct list`);
  process.exit(1);
}
console.log((await res.text()).trimEnd());
