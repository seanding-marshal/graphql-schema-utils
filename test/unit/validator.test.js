const { validateSchema } = require('../src/validator');
const { buildSchema } = require('graphql');

describe('GraphQL Schema Validator', () => {
  it('should validate a valid schema', () => {
    const schema = buildSchema(`
type Query {
  hello: String
}
`);
    const result = validateSchema(schema);
    expect(result.errors).toBeNull();
  });

  it('should catch a syntax error', () => {
    const schema = buildSchema(`
type Query {
  hello: String

`);
    const result = validateSchema(schema);
    expect(result.errors).toBeDefined();
    expect(result.errors[0].message).toContain('Unexpected end of input');
  });

  it('should detect missing required fields', () => {
    const schema = buildSchema(`
type Query {
  hello: String
}

type User {
  name: String
}
`);
    const result = validateSchema(schema);
    expect(result.errors).toBeDefined();
    expect(result.errors[0].message).toContain('Type User is not used anywhere');
  });
});