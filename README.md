# graphql-schema-utils

A few utility scripts I wrote for working with GraphQL schemas across projects.

## Scripts

### `schema-diff.js`
Compare two GraphQL schema files and output breaking changes.

```bash
node schema-diff.js old-schema.graphql new-schema.graphql
```

### `introspect.js`
Introspect a running GraphQL endpoint and save the schema.

```bash
node introspect.js http://localhost:4000/graphql > schema.graphql
```

## Install dependencies

```bash
npm install
```

## TODO

- [ ] Add support for schema stitching diff
- [ ] Output changes in JSON format
- [ ] Add tests

## License

MIT


## Getting Started

See individual files for usage details.
