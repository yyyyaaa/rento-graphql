const QueryResolvers = {
  Query: {
    helloWorld: (parent, args) => {
      return Promise.resolve("Hey I'm alive");
    }
  }
}

export default QueryResolvers;