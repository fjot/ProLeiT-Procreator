import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/serverConnection';

@Component({
  selector: 'fjot-nav',
  templateUrl: './fjot-nav.component.html',
  styleUrls: ['./fjot-nav.component.scss']
})
export class FjotNavComponent implements OnInit {

  constructor(private conf: ConfigService) { }
  isVisibleText = false;
  isVisibleButton = false;
  isVisibleDropdown = false;
  toasIsVisible = false;
  isCompilerProcess = false;
  isDeploymentProcess = false;
  ngOnInit() {
  }

  shellUp() {
    this.conf.getConfig();
    this.isDeploymentProcess = true;
    this.isCompilerProcess = false;

}
}
