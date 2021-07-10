import { Type } from '../../models/type';
import { ITypeDTO } from "../interfaces/ITypeDTO";
import { typeColorSwitch, statsNameSwitch } from '../helpers/switches';

export const typesConverter = (data: Type): ITypeDTO => {
  const urlSplit = data.url.split('/');
  const id = urlSplit[urlSplit.length - 2];

  return {
    name: typeColorSwitch(data.name)?.es,
    url: data.url,
    id: Number(id),
    color: typeColorSwitch(data.name)?.color
  }
}
