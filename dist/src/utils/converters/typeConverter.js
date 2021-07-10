"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typesConverter = void 0;
const switches_1 = require("../helpers/switches");
const typesConverter = (data) => {
    var _a, _b;
    const urlSplit = data.url.split('/');
    const id = urlSplit[urlSplit.length - 2];
    return {
        name: (_a = switches_1.typeColorSwitch(data.name)) === null || _a === void 0 ? void 0 : _a.es,
        url: data.url,
        id: Number(id),
        color: (_b = switches_1.typeColorSwitch(data.name)) === null || _b === void 0 ? void 0 : _b.color
    };
};
exports.typesConverter = typesConverter;
//# sourceMappingURL=typeConverter.js.map