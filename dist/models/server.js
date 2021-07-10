"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Colors = require("colors.ts");
class Server {
    constructor() {
        this.app = express_1.default();
        this.port = process.env.PORT || '8000';
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server online in port ${this.port}`.green);
            Colors.colors("green", "Server online in port");
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map