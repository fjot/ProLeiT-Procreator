import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  titleNavigation = '';
  imgNavigation = 'https://img.icons8.com/ios-glyphs/24/000000/search.png';
  titleHeader = 'Batch Overview';
  
  constructor() { }

  ngOnInit() {
  }

}
