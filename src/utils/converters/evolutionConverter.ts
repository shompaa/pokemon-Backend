import { IPokemonDTO } from "../interfaces/IPokemonDTO";
import { EvolutionResponseApi } from '../../models/evolution';
import { pokemonsConverter } from './pokemonConverter';

export const evolutionConverter = (data: EvolutionResponseApi): IPokemonDTO[] => {
  const array = getPokemon(data);
  const pokemons: IPokemonDTO[] = [];
  array.map((poke => {
    pokemons.push(pokemonsConverter(poke));
  }));
  return pokemons;
}

const getPokemon = (data: EvolutionResponseApi) => {
  const array: any[] = [];

  if (data) {
    if (data.chain.species) {
      const value = data.chain.species;
      array.push({ name: value.name, url: value.url })
    }
    if (data.chain.evolves_to.length > 0) {
      const value = data.chain.evolves_to[0].species;
      array.push({ name: value.name, url: value.url })

      if (data.chain.evolves_to[0]?.evolves_to?.length > 0) {
        const value = data.chain.evolves_to[0].evolves_to[0].species;
        array.push({ name: value.name, url: value.url })
      }
    }
  }
  console.log(array);

  return array;

}

