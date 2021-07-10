"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pokemonsConverter = void 0;
const text_1 = require("../helpers/text");
const image_1 = require("../helpers/image");
const pokemonsConverter = (data) => {
    const urlSplit = data.url.split('/');
    const id = urlSplit[urlSplit.length - 2];
    // const resp: AxiosResponse<PokemonResponse> = await axios.get(`${process.env.API_ROUTE}/pokemon/${id}`);
    // const types = resp.data.types[0].type.name;
    return {
        name: text_1.textCapitalize(data.name),
        url: data.url,
        id: Number(id),
        image: image_1.getImage(Number(id)),
        // type: typeColorSwitch(types)?.es,
        // color: typeColorSwitch(types)?.color
    };
};
exports.pokemonsConverter = pokemonsConverter;
//# sourceMappingURL=pokemonConverter.js.map