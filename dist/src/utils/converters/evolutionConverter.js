"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evolutionConverter = void 0;
const pokemonConverter_1 = require("./pokemonConverter");
const evolutionConverter = (data) => {
    const array = getPokemon(data);
    const pokemons = [];
    array.map((poke => {
        pokemons.push(pokemonConverter_1.pokemonsConverter(poke));
    }));
    return pokemons;
};
exports.evolutionConverter = evolutionConverter;
const getPokemon = (data) => {
    var _a, _b;
    const array = [];
    if (data) {
        if (data.chain.species) {
            const value = data.chain.species;
            array.push({ name: value.name, url: value.url });
        }
        if (data.chain.evolves_to.length > 0) {
            const value = data.chain.evolves_to[0].species;
            array.push({ name: value.name, url: value.url });
            if (((_b = (_a = data.chain.evolves_to[0]) === null || _a === void 0 ? void 0 : _a.evolves_to) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                const value = data.chain.evolves_to[0].evolves_to[0].species;
                array.push({ name: value.name, url: value.url });
            }
        }
    }
    console.log(array);
    return array;
};
//# sourceMappingURL=evolutionConverter.js.map