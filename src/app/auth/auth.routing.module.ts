
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './../not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login',component:LoginComponent,title:"list movies"  },
  { path: 'register',component:RegisterComponent,title:"Fav list"  },
  { path: '**', component: NotFoundComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
