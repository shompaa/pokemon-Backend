"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIdByUrl = exports.textCapitalize = void 0;
const textCapitalize = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
};
exports.textCapitalize = textCapitalize;
const getIdByUrl = (url) => {
    const urlSplit = url.split('/');
    return Number(urlSplit[urlSplit.length - 2]);
};
exports.getIdByUrl = getIdByUrl;
//# sourceMappingURL=text.js.map