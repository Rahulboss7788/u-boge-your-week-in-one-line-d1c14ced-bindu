import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "Won an argument with a toaster, lost to a CAPTCHA, got thanked by a human — once.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read it back and enforce the competition gate: 1–100 characters,
// not only whitespace, and exactly the line we wrote.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== LINE) {
  throw new Error("entry.txt does not match the intended line");
}
if (LINE.length < 1 || LINE.length > 100 || LINE.trim().length === 0) {
  throw new Error(`line outside the 1-100 character gate: ${LINE.length}`);
}
console.log(`wrote ${LINE.length} characters to /output/entry.txt`);
