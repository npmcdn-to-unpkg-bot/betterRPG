import {Injectable} from '@angular/core'

import {LocalStorageService} from '../common/localStorage.service'
import {User} from './user';
import {USERS} from './mock-users';

@Injectable()
export class UserService{

  constructor(
    private localStorage:LocalStorageService
  ){}

  users(){
    return USERS;
  }

  getUsers(){
    return Promise.resolve(USERS)
  }

  getUser(userId:number){
    return Promise.resolve(USERS)
      .then(user => user.filter(users => users.userId === userId)[0]
    );
  }

  getUserName(userName:string, password:string){
    return Promise.resolve(USERS).then(
        users => users.filter(user => user.userName === userName && user.password === password)[0]
    );
  }
  
  getCurrentUserId(){
    return this.localStorage.retrieve("userId");
  }
  
}