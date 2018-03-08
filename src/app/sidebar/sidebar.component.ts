import { Component, OnInit } from '@angular/core';

declare const $: any;

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'home', title: 'Home',  icon: 'pe-7s-graph', class: '' },
    { path: 'stats', title: 'Statistiques',  icon:'pe-7s-user', class: '' },
    { path: 'dashboards', title: 'Dashboards',  icon:'pe-7s-note2', class: '' },
    { path: 'users', title: 'Utilisateurs',  icon:'pe-7s-news-paper', class: '' },
    { path: 'roles', title: 'Roles',  icon:'pe-7s-science', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if (window.innerWidth  > 991) {
          return false;
      }
      return true;
  };
}
