"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
// import cors from 'cors';
class App {
    // private schema: GraphQLSchema;
    // private root;
    constructor() {
        this.header = (req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, ' +
                'Access-Control-Request-Method, Access-Control-Request-Headers');
            next();
        };
        this.app = express_1.default();
        this.config();
    }
    config() {
        this.app.use(this.header);
        // this.app.use('/graphql', cors(), graphqlHTTP({
        //   schema: this.schema,
        //   rootValue: this.root,
        //   graphiql: true
        // }))
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map