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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEvolutions = exports.getPokemonTypesService = exports.getPokemonService = exports.getPokemonsService = void 0;
const axios_1 = __importDefault(require("axios"));
const typeConverter_1 = require("../utils/converters/typeConverter");
const evolutionConverter_1 = require("../utils/converters/evolutionConverter");
const pokemonDetailConverter_1 = require("../utils/converters/pokemonDetailConverter");
const text_1 = require("../utils/helpers/text");
const pokemons_1 = require("../utils/data/pokemons");
const getPokemonsService = (param) => __awaiter(void 0, void 0, void 0, function* () {
    let pokemons;
    if (param) {
        pokemons = pokemons_1.pokeJSON.filter(poke => poke.name.toUpperCase().includes(param.toUpperCase()));
    }
    else {
        pokemons = pokemons_1.pokeJSON;
    }
    return {
        code: pokemons ? 1 : 0,
        message: pokemons ? 'OK' : 'NO DATA',
        data: pokemons,
        recordsTotal: pokemons.length
    };
});
exports.getPokemonsService = getPokemonsService;
const getPokemonService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const resp = yield axios_1.default.get(`${process.env.API_ROUTE}/pokemon/${id}`);
    const evolutionResponse = yield axios_1.default.get(`${process.env.API_ROUTE}/pokemon-species/${id}`);
    const evolutionId = text_1.getIdByUrl(evolutionResponse.data.evolution_chain.url);
    const evolutions = yield exports.getEvolutions(evolutionId);
    console.log(evolutions);
    const pokemon = pokemonDetailConverter_1.pokemonDetailConverter(resp.data, evolutions, evolutionResponse.data);
    return {
        code: pokemon ? 1 : 0,
        message: pokemon ? 'OK' : 'NO DATA',
        data: pokemon
    };
});
exports.getPokemonService = getPokemonService;
const getPokemonTypesService = () => __awaiter(void 0, void 0, void 0, function* () {
    const resp = yield axios_1.default.get(`${process.env.API_ROUTE}/type`);
    const types = [];
    resp.data.results.map((type => {
        types.push(typeConverter_1.typesConverter(type));
    }));
    return {
        code: types.length > 0 ? 1 : 0,
        message: types.length > 0 ? 'OK' : 'NO DATA',
        data: types
    };
});
exports.getPokemonTypesService = getPokemonTypesService;
const getEvolutions = (param) => __awaiter(void 0, void 0, void 0, function* () {
    const resp = yield axios_1.default.get(`${process.env.API_ROUTE}/evolution-chain/${param}`);
    return evolutionConverter_1.evolutionConverter(resp.data);
});
exports.getEvolutions = getEvolutions;
//# sourceMappingURL=pokemonService.js.map