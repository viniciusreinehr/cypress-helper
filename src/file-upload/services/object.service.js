"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var ObjectService = /** @class */ (function () {
    function ObjectService() {
    }
    ObjectService.merge = function (target, source) {
        return __assign(__assign({}, source), target);
    };
    return ObjectService;
}());
exports["default"] = ObjectService;
