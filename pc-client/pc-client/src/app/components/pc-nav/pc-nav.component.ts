import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/funtions.service';


@Component({
  selector: 'pc-nav',
  templateUrl: './pc-nav.component.html',
  styleUrls: ['./pc-nav.component.scss']
})
export class PcNavComponent implements OnInit {
  userName: any;
  job: any;
  office: any;

  constructor(private conf: ConfigService) { }

  imageUser: any;

  ngOnInit() {
      // this.imageUser = sessionStorage.getItem('USER_TOKEN');
      // setTimeout(() => {
      //   this.userName = JSON.parse(this.imageUser).displayName;
      //   this.job = JSON.parse(this.imageUser).jobTitle;
      //   this.office = JSON.parse(this.imageUser).officeLocation;
      // }, 2000);
  
  }

}
