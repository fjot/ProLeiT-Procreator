const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');

const schemas = require('./schema');
const root = require('./resolvers');

const app = express();

app.use('/graphql', cors(), graphqlHTTP({
    schema: schemas,
    rootValue: root,
    graphiql: true
}));



app.listen(4001);

console.log("Running a GraphQL API server at localhost:4001/graphql");