import {Injectable} from '@angular/core';

import {Stat} from './stat';
import {STATS} from './mock-stats';

@Injectable()
export class StatsService{
  stat:Stat = new Stat;
  stats:Stat[];
  
  getStats(characterId:number){
    return Promise.resolve(STATS)
      .then(stats => stats.filter(stats => stats.characterId === characterId)
    );
  }
  
  getStat(characterId:number, statName:string){
    return Promise.resolve(STATS)
      .then(stats => stats.filter(stat => stat.characterId === characterId && stat.name === statName)[0]
    );
  }
  
  updateCharacterStats(characterId:number){
    this.getStats(characterId).then(stats => this.stats = stats);
  }
  
}