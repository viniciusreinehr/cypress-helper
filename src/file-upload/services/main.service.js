"use strict";
exports.__esModule = true;
var processing_options_const_1 = require("../constants/processing-options.const");
var helper_service_1 = require("./helper.service");
var object_service_1 = require("./object.service");
var validator_service_1 = require("./validator.service");
var file_service_1 = require("./file.service");
var mainService = /** @class */ (function () {
    function mainService(helper, file) {
        if (helper === void 0) { helper = new helper_service_1["default"]; }
        if (file === void 0) { file = new file_service_1["default"]; }
        this.helper = helper;
        this.file = file;
    }
    mainService.prototype.attachFile = function (subject, fixtureOrFixtureArray, processingOptions) {
        var _this = this;
        var _a = object_service_1["default"].merge(processingOptions, processing_options_const_1.DEFAULT_PROCESSING_OPTIONS), subjectType = _a.subjectType, force = _a.force, allowEmpty = _a.allowEmpty;
        validator_service_1["default"].options({
            subjectType: subjectType,
            force: force,
            allowEmpty: allowEmpty
        });
        var fixturesArray = Array.isArray(fixtureOrFixtureArray)
            ? fixtureOrFixtureArray
            : [fixtureOrFixtureArray];
        var fixtures = fixturesArray.map(this.helper.getFixtureInfo).filter(function (fixture) { return validator_service_1["default"].fixtures(fixture); });
        cy.window({ log: false }).then(function (window) {
            var forceValue = force || _this.helper.getForceValue(subject);
            Cypress.Promise.all(fixtures.map(function (f) {
                return _this.file.resolveFile(f, window);
            }))
                .then(function (files) {
                return files.filter(function (f) { return validator_service_1["default"].file(f, allowEmpty); });
            })
                .then(function (files) {
                _this.helper.attachFileToElement(subject, {
                    files: files,
                    subjectType: subjectType,
                    force: forceValue,
                    window: window
                });
                return files;
            })
                .then(function (files) {
                Cypress.log({
                    name: 'attachFile',
                    displayName: 'FILE',
                    message: files.reduce(_this.reduce, '')
                });
            });
        });
        return cy.wrap(subject, { log: false });
    };
    mainService.prototype.reduce = function (acc, f) {
        return "" + (acc.length > 0 ? acc + ", " : acc) + f.name;
    };
    return mainService;
}());
exports["default"] = mainService;
