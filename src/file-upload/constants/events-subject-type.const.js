"use strict";
var _a;
exports.__esModule = true;
exports.EVENTS_BY_SUBJECT_TYPE = void 0;
var subject_type_const_1 = require("./subject-type.const");
exports.EVENTS_BY_SUBJECT_TYPE = (_a = {},
    _a[subject_type_const_1.SUBJECT_TYPE.INPUT] = ['change'],
    _a[subject_type_const_1.SUBJECT_TYPE.DRAG_N_DROP] = [
        'dragstart',
        'drag',
        'dragenter',
        'drop',
        'dragleave',
        'dragend',
    ],
    _a);
