import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/funtions.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'pc-account',
  templateUrl: './pc-account.component.html',
  styleUrls: ['./pc-account.component.scss']
})
export class PcAccountComponent implements OnInit {
  isModalOpen: boolean
  // Create a new Observable that will deliver the above sequence
  
  constructor(private conf: ConfigService, ) { }

  ngOnInit() {
    this.isModalOpen = false;
 
  }

  clickOpenModal(event: any) {
    this.isModalOpen = true;
  }

  clickCloseModal(event: any) {
    this.isModalOpen = !this.isModalOpen
  }

  createProject() {
    this.conf.create()
    .subscribe((res)=>{
      console.log(res);
    })
  }

  

}
