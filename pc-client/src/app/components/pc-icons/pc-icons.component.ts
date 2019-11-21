import { Component, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'pc-icons',
  templateUrl: './pc-icons.component.html',
  styleUrls: ['./pc-icons.component.scss']
})
export class PcIconsComponent implements OnInit {

  iconList = [
    {
      name: "create",
      icon: '../assets/img/edit.svg'
    },
    {
      name: "delete",
      icon: '../assets/img/add.svg'
    },
    {
      name: "edit",
      icon: '../assets/img/filter.svg'
    }
  ];
  isSelected: string;

  constructor() { }

  ngOnInit() {
  }

  // selectIcon(event){
  //   console.log(event)
  //   if(event && event.target.src === "http://localhost:4200/assets/img/filter.svg") {
  //     this.isSelected = '#999';
  //   }

  // }

}
