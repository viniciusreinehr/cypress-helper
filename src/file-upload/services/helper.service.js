"use strict";
exports.__esModule = true;
var events_subject_type_const_1 = require("../constants/events-subject-type.const");
var subject_type_const_1 = require("../constants/subject-type.const");
var browser_service_1 = require("./browser.service");
var dom_service_1 = require("./dom.service");
var file_service_1 = require("./file.service");
var HelperService = /** @class */ (function () {
    function HelperService() {
    }
    HelperService.prototype.attachFileToElement = function (subject, opts) {
        var files = opts.files, subjectType = opts.subjectType, force = opts.force, window = opts.window;
        var dataTransfer = new window.DataTransfer();
        files.forEach(function (f) { return dataTransfer.items.add(f); });
        if (subjectType === subject_type_const_1.SUBJECT_TYPE.INPUT) {
            var inputElement = subject[0];
            inputElement.files = dataTransfer.files;
            if (force) {
                this.dispatchEvents(inputElement, this.getEventsBySubjectType(subjectType), dataTransfer);
            }
        }
        else if (subjectType === subject_type_const_1.SUBJECT_TYPE.DRAG_N_DROP) {
            var inputElements = subject[0].querySelectorAll('input[type="file"]');
            if (inputElements.length === 1) {
                var inputElement = inputElements[0];
                inputElement.files = dataTransfer.files;
                if (force) {
                    this.dispatchEvents(inputElement, this.getEventsBySubjectType(subjectType), dataTransfer);
                }
            }
            else {
                var inputElement = subject[0];
                inputElement.files = dataTransfer.files;
                if (force) {
                    this.dispatchEvents(inputElement, this.getEventsBySubjectType(subjectType), dataTransfer);
                }
            }
        }
    };
    HelperService.prototype.getFixtureInfo = function (fixtureInput) {
        var fileService = new file_service_1["default"]();
        if (typeof fixtureInput === 'string') {
            return {
                filePath: fixtureInput,
                encoding: '',
                mimeType: '',
                fileName: fileService.getFileName(fixtureInput)
            };
        }
        return {
            filePath: fixtureInput.filePath,
            encoding: fixtureInput.encoding || '',
            mimeType: fixtureInput.mimeType || '',
            fileName: fixtureInput.fileName || fileService.getFileName(fixtureInput.filePath),
            fileContent: fixtureInput.fileContent,
            lastModified: fixtureInput.lastModified
        };
    };
    HelperService.prototype.getForceValue = function (subject) {
        return (browser_service_1["default"].isManualEventHandling() ||
            !dom_service_1["default"].isElementVisible(subject) ||
            dom_service_1["default"].isShadowElement(subject));
    };
    HelperService.prototype.dispatchEvents = function (element, events, dataTransfer) {
        events.forEach(function (event) {
            dom_service_1["default"].dispatchEvent(element, event, dataTransfer);
        });
    };
    HelperService.prototype.getEventsBySubjectType = function (subjectType) {
        var events = events_subject_type_const_1.EVENTS_BY_SUBJECT_TYPE[subjectType];
        events.push('change');
        // if (subjectType === SUBJECT_TYPE.DRAG_N_DROP && BrowserService.isBrowserFirefox()) {
        // }
        return events;
    };
    return HelperService;
}());
exports["default"] = HelperService;
