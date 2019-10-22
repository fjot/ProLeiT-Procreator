"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const child_process_1 = require("child_process");
function deleteContent() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        child_process_1.exec('gulp deleteHTML', {
            cwd: '/Users/hrzwksfot01-proleit-ag-francisco_ortuzar/Sites/github/procreator/pc-api/src/task'
        }, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
        });
    });
}
exports.default = deleteContent;
//# sourceMappingURL=delete-content.js.map