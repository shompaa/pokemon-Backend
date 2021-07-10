"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pokemonController_1 = require("../controllers/pokemonController");
const router = express_1.Router();
router.get('/', pokemonController_1.getPokemons);
router.get('/pokemonTypes', pokemonController_1.getPokemonTypesController);
router.get('/:id', pokemonController_1.getPokemon);
exports.default = router;
//# sourceMappingURL=pokemonRoutes.js.map