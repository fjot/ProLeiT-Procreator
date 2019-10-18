import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pc-header',
  templateUrl: './pc-header.component.html',
  styleUrls: ['./pc-header.component.scss']
})
export class PcHeaderComponent implements OnInit {
  @Input() title = 'Title';
  constructor() { }

  ngOnInit() {
  }

}
