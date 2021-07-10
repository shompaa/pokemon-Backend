"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statsConverter = void 0;
const switches_1 = require("../helpers/switches");
const statsConverter = (data) => {
    const name = switches_1.statsNameSwitch(data.stat.name);
    return {
        name: name,
        value: data.base_stat
    };
};
exports.statsConverter = statsConverter;
//# sourceMappingURL=statsConverter.js.map