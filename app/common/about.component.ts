import {Component} from '@angular/core';
import {config} from '../config';

@Component({
    selector: 'about-component',
    templateUrl: config.templateUrl + 'common/views/about.component.html',
    styleUrls: ['public/js/app/common/styles/about.component.css']
})

export class AboutComponent {
    constructor() {
    }
}