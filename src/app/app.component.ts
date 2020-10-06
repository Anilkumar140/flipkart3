import { Component, Input } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { RouterModule } from '@angular/router';
import { getLocaleDateFormat } from '@angular/common';


@Component({
  selector: 'app-root',
  template: `
    <div class="container" style='width:100%; height:5%;'>
    
      <nav class="navbar navbar-dark bg-primary">
        <div class="navbar-header" >
          <a class="navbar-brand" routerLink="/dashboard"></a>
        </div>
        <ul class="nav navbar-nav">
        <li>
           <a> <img src='/assets/flipkart_new_icon.png' width='42' height='34'><font color="white">FlipKart</font></a>
          </li>
          <li>
            <a routerLink="/deals" routerLinkActive="active"><font color='white'>Deals</font></a>
          </li>
          <li>
            <a routerLink="/special" *ngIf="authService.isLoggedIn" routerLinkActive="active"><font color='white'>Private Deals</font></a>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
        <li>
        <a ><font color='white'><input type="text" class="form-control" placeholder="Search" [(ngModel)]="inputdata"></font></a>
        
      </li>
          <li>
            <a *ngIf="!authService.isLoggedIn" (click)="authService.login()"><font color='white'>Log In</font></a>
            
          </li>
         
        
          <li>
          <a *ngIf="authService.isLoggedIn" (click)="otpAuth()"><font color='white'>Verify your number</font></a>
        </li>
          <li>
            <a (click)="authService.logout()" *ngIf="authService.isLoggedIn"><font color='white'>Log Out</font></a>
          </li>
        </ul>
      </nav>
      
      <div class="col-sm-12">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [
    `.navbar-right { margin-right: 0px !important}`
  ]
})
export class AppComponent {
  title = 'Daily Deals';
  @Input()
  inputdata:any;
  

  constructor(public authService: AuthService) { }


getDate(){
localStorage.setItem('setdata',this.inputdata);
}

}