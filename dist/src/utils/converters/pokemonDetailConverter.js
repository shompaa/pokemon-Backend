"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pokemonDetailConverter = void 0;
const image_1 = require("../helpers/image");
const typeConverter_1 = require("./typeConverter");
const statsConverter_1 = require("./statsConverter");
const pokemonConverter_1 = require("./pokemonConverter");
const text_1 = require("../helpers/text");
const pokemonDetailConverter = (data, evolutions, species) => {
    const types = [];
    const stats = [];
    const varieties = [];
    let pokedexNum = 0;
    const array = getVarieties(species === null || species === void 0 ? void 0 : species.varieties);
    console.log(data);
    console.log(evolutions);
    array.map((poke => {
        varieties.push(pokemonConverter_1.pokemonsConverter(poke));
    }));
    data.types.map(type => {
        types.push(typeConverter_1.typesConverter(type.type));
    });
    data.stats.map(stat => {
        stats.push(statsConverter_1.statsConverter(stat));
    });
    species === null || species === void 0 ? void 0 : species.pokedex_numbers.map((poke) => { if (poke.pokedex.name === "national")
        pokedexNum = poke.entry_number; });
    return {
        id: data.id,
        name: text_1.textCapitalize(data.name),
        weight: data.weight,
        height: data.height,
        types: types,
        stats: stats,
        img: image_1.getImage(data.id),
        evolutions: evolutions,
        pokedex: pokedexNum,
        is_legendary: species === null || species === void 0 ? void 0 : species.is_legendary,
        is_mythical: species === null || species === void 0 ? void 0 : species.is_mythical,
        varieties: varieties
    };
};
exports.pokemonDetailConverter = pokemonDetailConverter;
const getVarieties = (data) => {
    const array = [];
    data === null || data === void 0 ? void 0 : data.map(variety => {
        if (!variety.is_default)
            array.push(variety.pokemon);
    });
    return array;
};
//# sourceMappingURL=pokemonDetailConverter.js.map