import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pc-dropdown-list',
  templateUrl: './pc-dropdown-list.component.html',
  styleUrls: ['./pc-dropdown-list.component.scss']
})
export class PcDropdownListComponent implements OnInit {

  @Input() data: any[];
  
  constructor() { }

  ngOnInit() {
  //  this.values = [{ opcion: 1, name: 'item 1'}, { opcion: 2, name: 'item 2'}]
  }

}
