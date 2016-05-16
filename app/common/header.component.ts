import {Component} from '@angular/core';
import {Router, RouterLink} from '@angular/router-deprecated';
import {config} from '../config';
import {LoginComponent} from '../login/login.component';
import {LoginService} from '../login/login.service';

@Component({
    selector: 'header-component',
    templateUrl: config.templateUrl + 'common/views/header.component.html',
    styleUrls: ['public/js/app/common/styles/header.component.css'],
    directives: [
        RouterLink,
        LoginComponent
    ],
    providers: [
        LoginService
    ]
})

export class HeaderComponent {

    constructor(
       private _router: Router,
       private _loginSrv: LoginService
    ) {}
    
    getAuthState(){
       return this._loginSrv.getAuthState();
    }

    logout(){
        
        console.log(this.getAuthState());
        localStorage.clear();
        this._router.navigate(['Home']);
        location.reload();
    }

}
