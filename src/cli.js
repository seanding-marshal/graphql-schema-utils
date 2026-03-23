#!/usr/bin/env node
const args = process.argv.slice(2);

if (args.includes("--version")) {
  console.log("0.2.0");
  process.exit(0);
}

if (args.includes("--help") || args.length === 0) {
  console.log(`graphql-schema-utils CLI\n\nUsage:\n  graphql-schema-utils run [--port N]\n  graphql-schema-utils check\n  graphql-schema-utils --version\n`);
  process.exit(0);
}

const command = args[0];
if (command === "run") {
  const portIdx = args.indexOf("--port");
  const port = portIdx >= 0 ? parseInt(args[portIdx + 1]) : 3000;
  console.log(`Starting on port ${port}...`);
} else if (command === "check") {
  console.log("Configuration OK");
}
