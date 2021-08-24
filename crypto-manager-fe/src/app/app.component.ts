import {Component, OnInit} from '@angular/core';
import {IsidenavMenuConfiguration} from './interfaces/isidenav-menu-configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  sideNavConfig: IsidenavMenuConfiguration[] = [
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
