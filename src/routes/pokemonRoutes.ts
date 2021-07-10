import { Router } from 'express';
import { getPokemons, getPokemon, getPokemonTypesController } from '../controllers/pokemonController';

const router: Router = Router();

router.get('/', getPokemons);
router.get('/pokemonTypes', getPokemonTypesController);
router.get('/:id', getPokemon);

export default router;