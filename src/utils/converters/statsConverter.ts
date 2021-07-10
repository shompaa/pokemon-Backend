import { Stat } from '../../models/pokemon';
import { IStatsDTO } from '../interfaces/IPokemonDTO';
import { statsNameSwitch } from '../helpers/switches';

export const statsConverter = (data: Stat): IStatsDTO => {
  const name = statsNameSwitch(data.stat.name);

  return {
    name: name,
    value: data.base_stat
  }
}
