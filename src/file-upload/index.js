"use strict";
exports.__esModule = true;
var main_service_1 = require("./services/main.service");
var main = new main_service_1["default"]();
var initialize = function () {
    Cypress.Commands.add('attachFile', { prevSubject: true }, function (subject, fixtureOrFixtureArray, processingOptions) {
        main.attachFile(subject, fixtureOrFixtureArray, processingOptions);
    });
};
initialize();
