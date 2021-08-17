import {Component, OnInit} from '@angular/core';
import {SidenavMenuConfiguration} from './interfaces/sidenav-menu-configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  sideNavConfig: SidenavMenuConfiguration[] = [
    {
      displayValue: 'Dashboard',
      icon: 'dashboard',
      routeLink: 'dashboard'
    },
    {
      displayValue: 'Wallet',
      icon: 'wallet',
      routeLink: 'wallet'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {

  }
}
