import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/funtions.service';

@Component({
  selector: 'pc-nav',
  templateUrl: './pc-nav.component.html',
  styleUrls: ['./pc-nav.component.scss']
})
export class PcNavComponent implements OnInit {

  constructor(private conf: ConfigService) { }
  isVisibleText = false;
  isVisibleButton = false;
  isVisibleDropdown = false;
  toasIsVisible = false;
  isCompilerProcess = false;
  isDeploymentProcess = false;
  ngOnInit() {
  }

//   shellUp() {
//     this.conf.getConfig();
//     this.isDeploymentProcess = true;
//     this.isCompilerProcess = false;

// }
}
