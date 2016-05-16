import { Injectable } from '@angular/core';
import {ACHIEVEMENT} from '../achievement/achievement-mock'
import {Character} from '../character/character'


@Injectable()
export class AchievementService { 
    getAchievements(){
        return Promise.resolve(ACHIEVEMENT);
    }
    getAchievement(userID:number,achievementId: number){
        return Promise.resolve(ACHIEVEMENT).then(
            achievement => achievement.filter(achievement => achievement.achievementId === achievementId)[0]
        );
    }
}
