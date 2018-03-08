import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { StatistiqueComponent } from './statistique/statistique.component';

const routes: Routes =[
    { path: 'home',                   component: StatistiqueComponent },

    { path: 'stats',                  component: StatistiqueComponent },
    { path: 'stats/new',              component: StatistiqueComponent },
    { path: 'stats/edit/:id',         component: StatistiqueComponent },

    { path: 'dashboards',             component: StatistiqueComponent },
    { path: 'dashboards/new',         component: StatistiqueComponent },
    { path: 'dashboards/edit/:id',    component: StatistiqueComponent },
    { path: 'dashboards/:id',         component: StatistiqueComponent },

    { path: 'users',                  component: StatistiqueComponent },

    { path: 'roles',                  component: StatistiqueComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
