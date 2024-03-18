import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackOfficeComponent } from './components/back-office/back-office.component';
import { MenuOfDayComponent } from './components/menu-of-day/menu-of-day.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: IndexComponent},
  {path: 'inicio', component: NavbarComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'login', component: LoginComponent},
  {path: 'backOficce', component: BackOfficeComponent },
  {path: 'menu/dayMenu/:day', component: MenuOfDayComponent},
  {path: 'kitchen', component: KitchenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
