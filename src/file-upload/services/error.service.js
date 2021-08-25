"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var InternalError = /** @class */ (function (_super) {
    __extends(InternalError, _super);
    function InternalError(errorType) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var _this = _super.apply(this, params) || this;
        if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, InternalError);
        }
        _this.name = '[cypress-file-upload error]';
        _this.message = errorType.message + ".\n" + errorType.tip;
        return _this;
    }
    return InternalError;
}(Error));
exports["default"] = InternalError;
