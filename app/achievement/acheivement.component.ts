import {Component, OnInit} from '@angular/core';

import {config} from '../config';
import { Achievement } from './achievement';
import {AchievementService} from './achievement.service'


@Component({
    selector: 'achievement-component',
    templateUrl: config.templateUrl + 'achievement/views/achievement.component.html',
    styleUrls: ['public/js/app/achievement/styles/achievement.component.css'],
})

export class AchievementComponent implements OnInit {
    achievement:Achievement;
    achievements: Achievement[];
    constructor(
      private achievementService:AchievementService
    ) {}

    getAchievements(){
        this.achievementService.getAchievements().then(achievements => this.achievements = achievements);
    }

    addIcons(requiredStats:string[]){
        for(var i = 0; i < requiredStats.length; i++){
            if(requiredStats[i] === "Con"){
                return "fa fa-heartbeat"
            }
            if(requiredStats[i] === "Cha"){
                return "ion-chatboxes"
            }
            if(requiredStats[i] === "Str"){
                return "ion-ios-body"
            }
            if(requiredStats[i] === "Dex"){
                return "fa fa-tachometer"
            }
            if(requiredStats[i] === "Int"){
                return "fa fa-book"
            }
            if(requiredStats[i] === "Wis"){
                return "ion-bonfire"
            }
        }
    }

    ngOnInit(){
    this.getAchievements();
    }
}
 
    
    
