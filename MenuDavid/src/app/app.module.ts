import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BackOfficeComponent } from './components/back-office/back-office.component';
import {HttpClientModule} from '@angular/common/http';
import { MenuOfDayComponent } from './components/menu-of-day/menu-of-day.component';
import { Route } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KitchenComponent } from './components/kitchen/kitchen.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BackOfficeComponent,
    MenuOfDayComponent,
    IndexComponent,
    LoginComponent,
    MenuComponent,
    KitchenComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
