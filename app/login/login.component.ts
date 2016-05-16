import {Component} from '@angular/core';
import { Router } from '@angular/router-deprecated'

import {config} from '../config';
import {User} from '../users/user';
import {LoginService} from './login.service';
import {LocalStorageService} from '../common/localStorage.service'

@Component({
    selector: 'login-component',
    templateUrl: config.templateUrl + 'login/views/login.component.html',
    styleUrls: ['public/js/app/login/styles/login.component.css'],
    providers: [
        LoginService        
    ]
})


export class LoginComponent{
    user:User = new User();
    vuser:User = new User();

    constructor(
        private _loginSrv: LoginService,
        private localStorage: LocalStorageService
    ){ }
    
    login(){
        this.getUser();
        if(this.vuser) {
            this.localStorage.store("userName", this.vuser.userName);
            this.localStorage.store("userId", this.vuser.userId);
            location.reload();
        }
    }
    
    getUser() {
        this.vuser = this._loginSrv.getUserByUserName(this.user);
    }

}