import {Component} from '@angular/core';
import {RouterLink} from '@angular/router-deprecated';
import {config} from '../config';
import {LoginComponent} from '../login/login.component';
import {LoginService} from '../login/login.service';

@Component({
    selector: 'sidebar-component',
    templateUrl: config.templateUrl + 'common/views/sidebar.component.html',
    styleUrls: ['public/js/app/common/styles/sidebar.component.css'],
    directives: [
        RouterLink,
        LoginComponent
    ],
    providers: [
        LoginService
    ]
}) 

export class SidebarComponent {

    // private isLoggedIn: boolean = (!localStorage.getItem("userName")) ? false : true;
    constructor(
       private _loginSrv: LoginService
    ) {}

    getAuthState(){
        return this._loginSrv.getAuthState();
    }

}