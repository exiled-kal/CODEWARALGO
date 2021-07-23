var { graphql, buildSchema } = require('graphql');
 
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var wish ='Good morning'

var root = { hello: () => `` };
 
graphql(schema, '{ hello }', root).then((response) => {
  console.log(response);
});