import express from 'express';
// import cors from 'cors';

class App {
    public app: express.Application;
    // private schema: GraphQLSchema;
    // private root;

constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.use(this.header);
    // this.app.use('/graphql', cors(), graphqlHTTP({
    //   schema: this.schema,
    //   rootValue: this.root,
    //   graphiql: true
    // }))
  }

  private header = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, ' +
      'Access-Control-Request-Method, Access-Control-Request-Headers',
    );
    next();
  }
}

export default new App().app;

