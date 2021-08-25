"use strict";
exports.__esModule = true;
var BROWSER_FIREFOX = 'firefox';
var BROWSER_CHROME = 'chrome';
var BrowserService = /** @class */ (function () {
    function BrowserService() {
    }
    BrowserService.isBrowserFirefox = function () {
        var name = Cypress.browser.name;
        return name === BROWSER_FIREFOX;
    };
    BrowserService.isManualEventHandling = function () {
        var _a = Cypress.browser, name = _a.name, majorVersion = _a.majorVersion;
        if (name === BROWSER_CHROME && majorVersion < 73) {
            return false;
        }
        return true;
    };
    return BrowserService;
}());
exports["default"] = BrowserService;
