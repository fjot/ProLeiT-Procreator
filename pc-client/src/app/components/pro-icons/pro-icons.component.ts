import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pro-icons',
  templateUrl: './pro-icons.component.html',
  styleUrls: ['./pro-icons.component.scss']
})
export class ProIconsComponent implements OnInit {

  iconList = [
    {
      name: "create",
      icon: '../assets/img/delete-button.svg'
    },
    {
      name: "delete",
      icon: '../assets/img/delete-button.svg'
    },
    {
      name: "edit",
      icon: '../assets/img/delete-button.svg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
