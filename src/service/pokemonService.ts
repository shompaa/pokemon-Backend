import { IResponseDTO } from '../utils/interfaces/IResponseDTO';
import axios, { AxiosResponse } from 'axios';
import { PokemonResponse } from '../models/pokemon';
import { IPokemonDTO, IPokemonDetailDTO } from '../utils/interfaces/IPokemonDTO';
import { TypeResultApi } from '../models/type';
import { ITypeDTO } from "../utils/interfaces/ITypeDTO";
import { typesConverter } from '../utils/converters/typeConverter';
import { EvolutionResponseApi } from '../models/evolution';
import { evolutionConverter } from '../utils/converters/evolutionConverter';
import { pokemonDetailConverter } from '../utils/converters/pokemonDetailConverter';
import { SpeciesResponseApi } from '../models/specie';
import { getIdByUrl } from '../utils/helpers/text';
import { pokeJSON } from '../utils/data/pokemons';

export const getPokemonsService = async (param?: string): Promise<IResponseDTO> => {
  let pokemons: any;
  if (param) {
    pokemons = pokeJSON.filter(poke => poke.name.toUpperCase().includes(param.toUpperCase()));
  } else {
    pokemons = pokeJSON;
  }

  return {
    code: pokemons ? 1 : 0,
    message: pokemons ? 'OK' : 'NO DATA',
    data: pokemons,
    recordsTotal: pokemons.length
  }
}

export const getPokemonService = async (id: number): Promise<IResponseDTO> => {
  const resp: AxiosResponse<PokemonResponse> = await axios.get(`${process.env.API_ROUTE}/pokemon/${id}`);
  const evolutionResponse: AxiosResponse<SpeciesResponseApi> = await axios.get(`${process.env.API_ROUTE}/pokemon-species/${id}`);
  const evolutionId = getIdByUrl(evolutionResponse.data.evolution_chain.url);
  const evolutions: IPokemonDTO[] = await getEvolutions(evolutionId);
  console.log(evolutions);


  const pokemon: IPokemonDetailDTO = pokemonDetailConverter(resp.data, evolutions, evolutionResponse.data);

  return {
    code: pokemon ? 1 : 0,
    message: pokemon ? 'OK' : 'NO DATA',
    data: pokemon
  }
}

export const getPokemonTypesService = async (): Promise<IResponseDTO> => {
  const resp: AxiosResponse<TypeResultApi> = await axios.get(`${process.env.API_ROUTE}/type`);
  const types: ITypeDTO[] = [];

  resp.data.results.map((type => {
    types.push(typesConverter(type));
  }));

  return {
    code: types.length > 0 ? 1 : 0,
    message: types.length > 0 ? 'OK' : 'NO DATA',
    data: types
  }
}

export const getEvolutions = async (param: number): Promise<IPokemonDTO[]> => {
  const resp: AxiosResponse<EvolutionResponseApi> = await axios.get(`${process.env.API_ROUTE}/evolution-chain/${param}`);
  return evolutionConverter(resp.data);
}

