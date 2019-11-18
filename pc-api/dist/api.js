"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const app_1 = tslib_1.__importDefault(require("./app"));
const create_1 = tslib_1.__importDefault(require("./api/create"));
const build_1 = tslib_1.__importDefault(require("./api/build"));
const create_component_1 = tslib_1.__importDefault(require("./api/create-component"));
const delete_content_1 = tslib_1.__importDefault(require("./api/delete-content"));
const deploy_1 = tslib_1.__importDefault(require("./api/deploy"));
class Api {
    constructor() {
        this.api();
    }
    api() {
        app_1.default.get('/', (req, res) => {
            res.send('Welcome to Proleit WA');
        });
        app_1.default.get('/create', (req, res) => {
            create_1.default().then(() => {
                setTimeout(() => {
                    create_component_1.default();
                }, 5000);
            });
        });
        app_1.default.get('/delete-content', (req, res) => {
            delete_content_1.default().then(() => {
                console.log('done!');
            });
        });
        app_1.default.get('/build', (req, res) => {
            build_1.default().then(() => {
                console.log('done!');
            });
        });
        app_1.default.get('/deploy', (req, res) => {
            deploy_1.default().then(() => {
                console.log('see your deployed site at https://demoappstatic.z6.web.core.windows.net/');
            });
        });
    }
}
exports.default = new Api();
//# sourceMappingURL=api.js.map