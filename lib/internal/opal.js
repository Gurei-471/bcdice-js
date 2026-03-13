"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nilToNull = nilToNull;
require("../../lib/bcdice/opal");
Opal.config.unsupported_features_severity = 'ignore';
exports.default = Opal;
function nilToNull(value) {
    return value === Opal.nil ? null : value;
}
//# sourceMappingURL=opal.js.map