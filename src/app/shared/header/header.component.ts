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

constructor(private router: Router, private authService: AuthService) {
  
  // this.authService.getStatusUser().subscribe({
    
  //   console.log("loged user or status not ",val)
  // })

  this.authService.userActive.subscribe((res)=>{
    console.log("response from user Active",res);
     
    if(res=="active"){
        this.isLoggedIn =true;
      }else{
        this.isLoggedIn= false;
      }
  });
 }

ngOnInit() {
  // Check for existing login state on initialization
  // this.authService.getStatusUser().subscribe((val)=>{
  //   if(val==='active'){
  //     this.isLoggedIn =true;
  //   }else{
  //     this.isLoggedIn= false;
  //   }
  // });
  // this.isLoggedIn = localStorage.getItem('user') === 'active';
  this.authService.getStatusUser().subscribe((status) => {
    this.isLoggedIn = !!status;
  });
}
logout() {
  this.authService.logout();
  // localStorage.removeItem('user');
  // this.isLoggedIn = false;
  // this.router.navigate(['/login']); // Redirect to login after logout
}

}