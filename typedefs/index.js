const SchemaDefinition = `
  type Query {
    helloWorld: String!
  }

  schema {
    query: Query
  }
`;

export default () => [SchemaDefinition];