import {Component, OnInit} from '@angular/core';
import {config} from '../config';

import {Title} from './title';
import {TitleService} from './title.service';

@Component({
    selector: 'titles-component',
    templateUrl: config.templateUrl + 'titles/views/titles.component.html',
    styleUrls: ['public/js/app/titles/styles/titles.component.css'],
    providers: [
        TitleService
    ]
})

export class TitlesComponent implements OnInit{
    title: Title = new Title();
    titles:Title[];

    constructor(
        private _titleSrv: TitleService
    ) {}

    getTitle(id: number){
        this._titleSrv.getTitle(id).then(title => this.title = title);
    }

    getTitles(){
        this._titleSrv.getTitles().then(titles => this.titles = titles);
    }

    ngOnInit(){
        this.getTitle(1);
        this.getTitles();
    }

}