import { Pokemon, PokemonResponse } from '../../models/pokemon';
import { textCapitalize } from "../helpers/text";
import { IPokemonDTO } from "../interfaces/IPokemonDTO";
import { getImage } from '../helpers/image';
import { AxiosResponse } from 'axios';
import axios from 'axios';
import { typeColorSwitch } from '../helpers/switches';

export const pokemonsConverter = (data: Pokemon): IPokemonDTO => {
  const urlSplit = data.url.split('/');
  const id = urlSplit[urlSplit.length - 2];

  // const resp: AxiosResponse<PokemonResponse> = await axios.get(`${process.env.API_ROUTE}/pokemon/${id}`);
  // const types = resp.data.types[0].type.name;


  return {
    name: textCapitalize(data.name),
    url: data.url,
    id: Number(id),
    image: getImage(Number(id)),
    // type: typeColorSwitch(types)?.es,
    // color: typeColorSwitch(types)?.color
  }
}
