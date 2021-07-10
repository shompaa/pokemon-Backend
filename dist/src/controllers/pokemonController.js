"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonTypesController = exports.getPokemon = exports.getPokemons = void 0;
const pokemonService_1 = require("../service/pokemonService");
const responses_1 = require("../utils/helpers/responses");
const getPokemons = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.query;
    try {
        const pokemonsResp = yield pokemonService_1.getPokemonsService(name === null || name === void 0 ? void 0 : name.toString());
        res.json(pokemonsResp);
    }
    catch (e) {
        console.log(1);
        res.status(500).json(responses_1.errorResponse('Ups! Contacte al administrador'));
    }
});
exports.getPokemons = getPokemons;
const getPokemon = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    console.log(id);
    try {
        const pokemonResp = yield pokemonService_1.getPokemonService(Number(id));
        res.json(pokemonResp);
    }
    catch (e) {
        res.status(500).json(responses_1.errorResponse('Ups! Contacte al administrador'));
    }
});
exports.getPokemon = getPokemon;
const getPokemonTypesController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pokemonsResp = yield pokemonService_1.getPokemonTypesService();
        res.json(pokemonsResp);
    }
    catch (e) {
        res.status(500).json(responses_1.errorResponse('Ups! Contacte al administrador'));
    }
});
exports.getPokemonTypesController = getPokemonTypesController;
//# sourceMappingURL=pokemonController.js.map