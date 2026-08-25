import fs from "node:fs/promises";
import path from "node:path";

import YAML from "yaml";

const roots = [
  "intelligence/runtime",
  "intelligence/engines/brand_intelligence/branches/identity",
];

async function yamlFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const target = path.join(directory, entry.name);
      if (entry.isDirectory()) return yamlFiles(target);
      return /\.ya?ml$/i.test(entry.name) ? [target] : [];
    }),
  );
  return files.flat();
}

const files = (await Promise.all(roots.map(yamlFiles))).flat().sort();
const failures = [];

for (const file of files) {
  const source = await fs.readFile(file, "utf8");
  const document = YAML.parseDocument(source, { prettyErrors: true });
  if (document.errors.length > 0) {
    failures.push(
      `${file}: ${document.errors.map((error) => error.message).join("; ")}`,
    );
  }
}

if (failures.length > 0) {
  throw new Error(`YAML validation failed:\n${failures.join("\n")}`);
}

console.log(`Parsed ${files.length} runtime/Identity YAML files.`);
