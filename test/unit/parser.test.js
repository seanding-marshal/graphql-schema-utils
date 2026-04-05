const { parseSchema } = require('../src/parser');
const { buildSchema } = require('graphql');

describe('GraphQL Schema Parser', () => {
  it('should parse a simple schema', () => {
    const schema = buildSchema(`
type Query {
  hello: String
}
`);
    const parsed = parseSchema(schema);
    expect(parsed.types).toBeDefined();
    expect(parsed.types['Query']).toBeDefined();
    expect(parsed.types['Query'].fields).toBeDefined();
  });

  it('should handle multiple types', () => {
    const schema = buildSchema(`
type Query {
  user: User
}

type User {
  name: String
}
`);
    const parsed = parseSchema(schema);
    expect(parsed.types['User']).toBeDefined();
    expect(parsed.types['User'].fields['name']).toBeDefined();
  });
});