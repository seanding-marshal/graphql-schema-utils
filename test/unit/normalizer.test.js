const { normalizeSchema } = require('../src/normalizer');
const { buildSchema } = require('graphql');

describe('GraphQL Schema Normalizer', () => {
  it('should normalize a schema', () => {
    const schema = buildSchema(`
type Query {
  hello: String
}
`);
    const normalized = normalizeSchema(schema);
    expect(normalized).toBe(`
type Query {
  hello: String
}
`);
  });

  it('should remove redundant whitespace', () => {
    const schema = buildSchema(`
  type Query {
    hello: String
  }
`);
    const normalized = normalizeSchema(schema);
    expect(normalized).toBe(`
type Query {
  hello: String
}
`);
  });
});