import { NextFunction, Request, Response } from "express";
import { getPokemonsService, getPokemonTypesService, getPokemonService } from '../service/pokemonService';
import { errorResponse } from "../utils/helpers/responses";

export const getPokemons = async (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.query;
  try {
    const pokemonsResp = await getPokemonsService(name?.toString());
    res.json(pokemonsResp);
  } catch (e) {
    console.log(1);
    res.status(500).json(errorResponse('Ups! Contacte al administrador'));
  }
}

export const getPokemon = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  console.log(id);
  try {
    const pokemonResp = await getPokemonService(Number(id));
    res.json(pokemonResp);
  } catch (e) {
    res.status(500).json(errorResponse('Ups! Contacte al administrador'));
  }
}

export const getPokemonTypesController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const pokemonsResp = await getPokemonTypesService();
    res.json(pokemonsResp);
  } catch (e) {
    res.status(500).json(errorResponse('Ups! Contacte al administrador'));
  }
}
