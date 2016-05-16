import {Component, OnInit} from '@angular/core';
import {config} from '../config';
import { Character } from './character';
import {CharacterService} from './character.service'
import {StatsComponent} from '../stats/stats.component'
import {StatsService} from '../stats/stats.service'
import {UserService} from '../users/user.service';
import {User} from '../users/user'
import {Title} from '../titles/title'
import {TitleService} from '../titles/title.service';


@Component({
    selector: 'character-component',
    templateUrl: config.templateUrl + 'character/views/character.component.html',
    styleUrls: ['public/js/app/character/styles/character.component.css'],
    directives: [StatsComponent],
    providers: [StatsService]
})

export class CharacterComponent implements OnInit{
    character:Character = new Character();
    characters: Character[];
     users: User[] = this.getUsers();
    
    characterId: number = this.userService.getCurrentUserId();
    characterName: string;
    prefixId: number;
    suffixId: number;
    
  constructor(  private characterService:CharacterService,
                private userService:UserService,
                private titleService:TitleService
             ) {}
   getCharacter(characterId:number){
    return this.userService.getUser(this.characterId).then(user => this.characterName = user.userName);
  }
   getUsers(){
     return this.userService.users();
   } 
   getPrefix(characterId:number){
     return this.characterService.getPrefix(this.characterId).then(character => this.prefixId = character.prefixId);
   }
   getSuffix(characterId:number){
      return this.characterService.getSuffix(this.characterId).then(character => this.suffixId = character.suffixId);
   }
  ngOnInit(){
    this.getCharacter(this.characterId);
    this.prefixId = this.character.prefixId;
    this.suffixId = this.character.suffixId;
    
    }
  }
 
    
    
