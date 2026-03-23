import { getIntrospectionQuery, buildClientSchema, printSchema } from 'graphql';
import fetch from 'node-fetch';

const endpoint = process.argv[2];
if (!endpoint) {
  console.error('Usage: node introspect.js <graphql-endpoint>');
  process.exit(1);
}

async function main() {
  const resp = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: getIntrospectionQuery() }),
  });

  const { data } = await resp.json();
  const schema = buildClientSchema(data);
  console.log(printSchema(schema));
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
