import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


isLoggedIn = false; // Flag to track login status

constructor( private authService: AuthService) {

  this.authService.userActive.subscribe((res)=>{
    if(res=="active"){
        this.isLoggedIn =true;
      }else{
        this.isLoggedIn= false;
      }
  });
 }

ngOnInit() {
  
  this.authService.getStatusUser().subscribe((status) => {
    this.isLoggedIn = !!status;
  });
}
logout() {
  this.authService.logout();
}

}