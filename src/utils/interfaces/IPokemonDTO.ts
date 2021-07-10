import { ITypeDTO } from "./ITypeDTO";

export interface IPokemonDTO {
  name: string;
  id: number;
  url?: string;
  image?: string;
  type?: string;
  color?: string;
}

export interface IPokemonDetailDTO {
  id: number;
  name: string;
  weight: number;
  height: number;
  types: ITypeDTO[];
  stats: IStatsDTO[];
  img: string;
  evolutions: IPokemonDTO[];
  pokedex?: number;
  is_legendary?: boolean;
  is_mythical?: boolean;
  varieties?: IPokemonDTO[];
}

export interface IStatsDTO {
  name?: string;
  value?: number;
}