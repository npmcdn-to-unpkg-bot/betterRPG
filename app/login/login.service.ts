/**
 * Created by SirCaptainMitch on 5/14/2016.
 */
import {Injectable} from '@angular/core'
import {Http, HTTP_PROVIDERS} from '@angular/http';

import {User} from '../users/user';
import {USERS} from '../users/mock-users';
import {UserService} from '../users/user.service'

@Injectable()
export class LoginService{
    user:User = new User();
    users:User[] = this._userSrv.users();

    constructor(
        private _userSrv: UserService
    ){}

    private isLoggedIn: boolean = (localStorage.getItem("userName")) ? true : false;
    getAuthState(){
        return this.isLoggedIn;
    }

    getUserByUserName(user:User){
        return this.users.filter(u => u.userName.toLowerCase() === user.userName.toLowerCase() && u.password === user.password)[0]
    }
}