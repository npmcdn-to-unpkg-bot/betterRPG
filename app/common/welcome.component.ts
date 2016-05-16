import {Component} from '@angular/core';
import {config} from '../config';
import {RouterLink} from '@angular/router-deprecated';

@Component({
    selector: 'welcome-component',
    templateUrl: config.templateUrl + 'common/views/welcome.component.html',
    styleUrls: ['public/js/app/common/styles/welcome.component.css'],
    directives: [
        RouterLink
    ]
})

export class WelcomeComponent {
    constructor() {
    }
}