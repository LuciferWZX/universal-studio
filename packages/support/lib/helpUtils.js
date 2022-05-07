"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getType = void 0;
var getType = function (a) {
    if (Object.prototype.toString.call(a).includes("[object ")) {
        return Object.prototype.toString.call(a).slice(7, 13);
    }
    return "unknow type";
};
exports.getType = getType;
//# sourceMappingURL=helpUtils.js.map