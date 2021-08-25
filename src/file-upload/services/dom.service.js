"use strict";
exports.__esModule = true;
var DomService = /** @class */ (function () {
    function DomService() {
    }
    DomService.dispatchEvent = function (target, event, dataTransfer) {
        var eventPayload = {
            bubbles: true,
            cancelable: true,
            detail: dataTransfer
        };
        try {
            var e = new CustomEvent(event, eventPayload);
            Object.assign(e, { dataTransfer: dataTransfer });
            target.dispatchEvent(e);
        }
        catch (e) {
            // make sure event triggering won't break if subject element is not visible or in DOM anymore
        }
    };
    DomService.isElementVisible = function (element) {
        if (!element) {
            throw new Error('Element cannot be empty');
        }
        /* running isVisible command on detached element throws an error */
        return Cypress.dom.isAttached(element) && Cypress.dom.isVisible(element);
    };
    DomService.isShadowElement = function (element) {
        if (!element) {
            throw new Error('Element cannot be empty');
        }
        return Cypress.dom.isDetached(element);
    };
    return DomService;
}());
exports["default"] = DomService;
