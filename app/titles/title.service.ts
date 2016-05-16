/**
 * Created by SirCaptainMitch on 5/14/2016.
 */
import {Injectable} from '@angular/core';

import {Title} from './title';
import {TITLES} from './mock-titles';

@Injectable()
export class TitleService {

    constructor(){
    }

    getTitle(id:number){
        return Promise.resolve(TITLES)
            .then(title => title.filter(titles => titles.id === id)[0]
            );
    }

    getTitles(){
        return Promise.resolve(TITLES);
    }
}
