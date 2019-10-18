import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pc-navigation',
  templateUrl: './pc-navigation.component.html',
  styleUrls: ['./pc-navigation.component.scss']
})
export class PcNavigationComponent implements OnInit {

 @Input() title = 'Title';

  constructor() { }

  ngOnInit() {
  }

}
