import {Component, OnInit} from '@angular/core';
import {UserDataService} from '../../Services/user-data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor(private userDataService: UserDataService) {
  }

  ngOnInit(): void {

  }


}
