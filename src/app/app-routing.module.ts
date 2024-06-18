import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Screens/login/login.component';
import { MenuComponent } from './Screens/menu/menu.component';
import { PrincipalComponent } from './Screens/principal/principal.component';
import { GeneralComponent } from './Screens/general/general.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'general', component: GeneralComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
