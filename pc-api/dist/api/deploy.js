"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const child_process_1 = require("child_process");
function deployProject() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        child_process_1.exec('ng deploy', {
            cwd: '/Users/hrzwksfot01-proleit-ag-francisco_ortuzar/Sites/github/procreator/projects/demo-app'
        }, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
        });
    });
}
exports.default = deployProject;
//# sourceMappingURL=deploy.js.map