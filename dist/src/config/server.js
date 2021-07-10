"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Colors = require("colors.ts");
const pokemonRoutes_1 = __importDefault(require("../routes/pokemonRoutes"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.apiPaths = {
            pokemons: `${process.env.API_PATH}/pokemons`
        };
        this.app = express_1.default();
        this.port = process.env.PORT || '8000';
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.pokemons, pokemonRoutes_1.default);
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