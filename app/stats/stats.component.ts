import {Component, OnInit} from '@angular/core';
import {config} from '../config';
import {Stat} from './stat';
import {StatsService} from './stats.service';
import {UserService} from '../users/user.service' //refactor to character service
import {LocalStorageService} from '../common/localStorage.service'


@Component({
  selector: 'my-stats',
  templateUrl: config.templateUrl + 'stats/views/stats.component.html',
  styleUrls: ['public/js/app/stats/styles/stats.component.css']
})
export class StatsComponent implements OnInit{
  stat:Stat;
  stats:Stat[];
  
  characterId:number;
  statScore:number;
  
  constructor(
    private statsService:StatsService,
    private userService:UserService,
    private localStorage:LocalStorageService
  ){}
  
  storeStats(statName:string, statScore:number){
    this.statScore = this.localStorage.retrieve(statName);
    if(this.statScore){
      this.localStorage.store(statName,this.statScore);
    } else {
      this.localStorage.store(statName,statScore);
    }
  }
  
  addStat(statName:string){
    this.statScore = this.localStorage.retrieve(statName);
    this.statScore++;
    this.localStorage.store(statName,this.statScore);
  }
    
  ngOnInit(){
    this.characterId = this.userService.getCurrentUserId();
    this.getStats(this.characterId);
    this.updateCharacterStats(this.characterId);
  }
  
  getStats(characterId:number){
    this.statsService.getStats(characterId).then(stats => this.stats = stats);
  };
  
  getStat(characterId:number,statName:string){
    this.statsService.getStat(characterId,statName).then(stat => this.stat = stat);
  };

  updateCharacterStats(characterId:number){
    this.statsService.updateCharacterStats(characterId);
  };

}