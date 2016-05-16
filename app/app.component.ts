import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {LocalStorageService} from './common/localStorage.service';
import {HeaderComponent} from './common/header.component';
import {SidebarComponent} from './common/sidebar.component';
import {WelcomeComponent} from './common/welcome.component';
import {AboutComponent} from './common/about.component';

import {UserComponent} from './users/user.component';
import {UserService} from './users/user.service';

import {CharacterComponent} from './character/character.component';
import {CharacterService} from './character/character.service';

import {AchievementService} from './achievement/achievement.service';
import {AchievementComponent} from './achievement/acheivement.component';

import {TitlesComponent} from './titles/titles.component';
import {TitleService} from './titles/title.service';


@Component({
    selector: 'my-app',
    template: `
    <header-component> </header-component>    
            <div class="container">
                <div class="row">
                    <div class="col-sm-3 col-md-2 sidebar"> 
                        <sidebar-component> </sidebar-component>
                    </div>
                        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"> 
                            <router-outlet> </router-outlet>
                        </div>                 
                    </div>
            </div>           
    
        
    `,
    directives: [
        ROUTER_DIRECTIVES,
        HeaderComponent,
        SidebarComponent,
        WelcomeComponent,
        AboutComponent,
        UserComponent,
        CharacterComponent,
        AchievementComponent,
        TitlesComponent
    ],
    providers:[
        UserService,
        CharacterService,
        AchievementService,
        LocalStorageService,
        TitleService
    ]
})
@RouteConfig([
    {path: "/", name:"Home", component: WelcomeComponent, useAsDefault: true },
    {path: '/users', name: 'Users', component: UserComponent},
    {path: "/about", name:"About", component: AboutComponent},
    {path: "/character", name:"Character", component: CharacterComponent},
    {path: "/achievements", name:"Achievements", component:AchievementComponent},
    {path: "/titles", name: "Titles", component: TitlesComponent}
])
export class AppComponent {
    
    constructor(){

    }

}