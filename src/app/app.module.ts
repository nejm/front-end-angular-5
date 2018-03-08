import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { NavbarModule } from './navbar/navbar.module';

import { StatService } from './services/stat.service';
import { StatistiqueComponent } from './statistique/statistique.component';


@NgModule({
  declarations: [
    AppComponent,
    StatistiqueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SidebarModule,
    NavbarModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [StatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
