import { IPokemonDetailDTO, IStatsDTO, IPokemonDTO } from '../interfaces/IPokemonDTO';
import { PokemonResponse } from '../../models/pokemon';
import { ITypeDTO } from "../interfaces/ITypeDTO";
import { getImage } from "../helpers/image";
import { typesConverter } from './typeConverter';
import { statsConverter } from './statsConverter';
import { SpeciesResponseApi, Variety } from '../../models/specie';
import { pokemonsConverter } from './pokemonConverter';
import { textCapitalize } from '../helpers/text';

export const pokemonDetailConverter = (data: PokemonResponse, evolutions: IPokemonDTO[], species?: SpeciesResponseApi): IPokemonDetailDTO => {
  const types: ITypeDTO[] = [];
  const stats: IStatsDTO[] = [];
  const varieties: IPokemonDTO[] = [];
  let pokedexNum: number = 0;
  const array = getVarieties(species?.varieties);

  console.log(data);
  console.log(evolutions);



  array.map((poke => {
    varieties.push(pokemonsConverter(poke));
  }));

  data.types.map(type => {
    types.push(typesConverter(type.type));
  });

  data.stats.map(stat => {
    stats.push(statsConverter(stat));
  });

  species?.pokedex_numbers.map((poke) => { if (poke.pokedex.name === "national") pokedexNum = poke.entry_number });

  return {
    id: data.id,
    name: textCapitalize(data.name),
    weight: data.weight,
    height: data.height,
    types: types,
    stats: stats,
    img: getImage(data.id),
    evolutions: evolutions,
    pokedex: pokedexNum,
    is_legendary: species?.is_legendary,
    is_mythical: species?.is_mythical,
    varieties: varieties
  }
}

const getVarieties = (data?: Variety[]) => {
  const array: any[] = [];
  data?.map(variety => {
    if (!variety.is_default) array.push(variety.pokemon)
  })
  return array;
}