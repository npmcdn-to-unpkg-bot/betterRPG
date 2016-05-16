import {Component, OnInit} from '@angular/core';

import {config} from '../config';
import {User} from './user';
import {UserService} from './user.service'


@Component({
  selector: 'my-user',
  templateUrl: config.templateUrl + 'users/views/user.component.html',
  styleUrls: ['public/js/app/users/styles/user.component.css']
  })

export class UserComponent implements OnInit {
  user:User = new User();
  users: User[];
  
  userId:number;
  
  constructor(
    private userService:UserService
    ){}
  
  getCurrentUser(){
    this.userService.getUser(this.userId).then(user => this.user = user);
  }
  
  getUsers(){
    this.userService.getUsers().then(users => this.users = users);
  }
  
  ngOnInit(){
    this.userId = this.userService.getCurrentUserId()
    this.getCurrentUser();
    this.getUsers();
  }
}