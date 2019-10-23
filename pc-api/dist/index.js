"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const app_1 = tslib_1.__importDefault(require("./app"));
const api_1 = tslib_1.__importDefault(require("./api"));
const port = 8000;
api_1.default.api();
app_1.default.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
    console.log('Running a GraphQL API server at localhost:8000/graphql');
});
//# sourceMappingURL=index.js.map