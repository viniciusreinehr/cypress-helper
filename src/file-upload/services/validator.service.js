"use strict";
exports.__esModule = true;
var err_types_const_1 = require("../constants/err-types.const");
var subject_type_const_1 = require("../constants/subject-type.const");
var encoding_enum_1 = require("../enums/encoding.enum");
var error_service_1 = require("./error.service");
var ValidatorService = /** @class */ (function () {
    function ValidatorService() {
    }
    ValidatorService.file = function (file, allowEmpty) {
        if (!allowEmpty) {
            var size = file.size;
            if (size === 0) {
                throw new error_service_1["default"](err_types_const_1.ERR_TYPES.INVALID_FILE);
            }
        }
        return true;
    };
    ValidatorService.fixtures = function (fixture) {
        var filePath = fixture.filePath, fileName = fixture.fileName, encoding = fixture.encoding, mimeType = fixture.mimeType, fileContent = fixture.fileContent, lastModified = fixture.lastModified;
        if (encoding && !encoding_enum_1.ENCODING[encoding]) {
            throw new error_service_1["default"](err_types_const_1.ERR_TYPES.INVALID_FILE_ENCODING);
        }
        if (typeof filePath !== 'string' && !fileContent) {
            throw new error_service_1["default"](err_types_const_1.ERR_TYPES.INVALID_FILE_PATH);
        }
        if (typeof mimeType !== 'string') {
            throw new error_service_1["default"](err_types_const_1.ERR_TYPES.INVALID_MIME_TYPE);
        }
        if (!filePath && !fileName) {
            throw new error_service_1["default"](err_types_const_1.ERR_TYPES.MISSING_FILE_NAME_OR_PATH);
        }
        if (lastModified && typeof lastModified !== 'number') {
            throw new error_service_1["default"](err_types_const_1.ERR_TYPES.INVALID_LAST_MODIFIED);
        }
        return true;
    };
    ValidatorService.options = function (opts) {
        var subjectType = opts.subjectType, force = opts.force, allowEmpty = opts.allowEmpty;
        if (Object.values(subject_type_const_1.SUBJECT_TYPE).indexOf(subjectType) === -1) {
            throw new error_service_1["default"](err_types_const_1.ERR_TYPES.INVALID_SUBJECT_TYPE);
        }
        if (typeof force !== 'boolean') {
            throw new error_service_1["default"](err_types_const_1.ERR_TYPES.INVALID_FORCE);
        }
        if (typeof allowEmpty !== 'boolean') {
            throw new error_service_1["default"](err_types_const_1.ERR_TYPES.INVALID_ALLOW_EMPTY);
        }
        return true;
    };
    return ValidatorService;
}());
exports["default"] = ValidatorService;
