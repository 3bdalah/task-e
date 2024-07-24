import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 // this my server backend by node and express create for task it's more challange me to handle it with task front okay and thanks
 private loginUrl = 'https://nodeauthapiproduction.up.railway.app/api/v1/auth/login';
 private registerUrl = 'https://nodeauthapiproduction.up.railway.app/api/v1/auth/register';
 userActive = new BehaviorSubject('');
 constructor(private http: HttpClient,private router:Router) {
   const userToken = localStorage.getItem('user');
   if (userToken) {
     this.userActive.next(userToken);
   }
 }

 login(loginData:object): Observable<any> {
   return this.http.post<any>(this.loginUrl, loginData);
 }

 register(formData:object): Observable<any> {
   return this.http.post<any>(this.registerUrl, formData);
 }

 getStatusUser(): Observable<string > {
   return this.userActive.asObservable();
 }

 updateUserIsActive(token: string ) {
   if (token) {
     localStorage.setItem('user', token);
   } else {
     localStorage.removeItem('user');
   }
   this.userActive.next(token);
 }
 logout(){
   localStorage.removeItem("user");
   this.userActive.next('');
   this.router.navigate(['auth/login']);
 }
}
