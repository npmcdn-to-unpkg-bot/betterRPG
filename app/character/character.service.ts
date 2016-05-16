import { Injectable } from '@angular/core';
import {CHARACTER} from './mock-characterinfo'
import {Character} from './character'


@Injectable()
export class CharacterService { 
    getCharacters(){
        return Promise.resolve(CHARACTER);
    }
    getCharacter(characterId:number){
        return Promise.resolve(CHARACTER).then(
            character => character.filter(character => character.characterId === characterId)[0]        
        );
        
    }
    getPrefix(prefixId:number){
        return Promise.resolve(CHARACTER).then(
            character => character.filter(character => character.prefixId === prefixId)[0]        
        );
        
    }
    getSuffix(suffixId:number){
        return Promise.resolve(CHARACTER).then(
            character => character.filter(character => character.suffixId === suffixId)[0]        
        );
        
    }
}