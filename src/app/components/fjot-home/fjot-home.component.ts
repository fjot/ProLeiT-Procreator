import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ConfigService } from '../../services/serverConnection';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'fjot-home',
  templateUrl: './fjot-home.component.html',
  styleUrls: ['./fjot-home.component.scss']
})
export class FjotHomeComponent implements OnInit {
  constructor(private conf: ConfigService) { }
  todos = [
    {
      name: 'Button',
    },
    {
      name: 'DateTime Pickup',
    },
    {
      name: 'Input',
    },
    {
      name: 'Parraf',
    }
  ];

  completed = [
    {
      name: 'Button',
    },
    {
      name: 'DateTime Pickup',
    },
    {
      name: 'Input',
    },
    {
      name: 'Parraf',
    }
  ];


  title: any;
  htmlObject: any;
  html: any;
  isVisible = false;
  toasIsVisible = false;
  isCompilerProcess = false;
  isDeploymentProcess = false;

  @ViewChild('clone') button: ElementRef;
  @ViewChild('toastIs') toast: ElementRef;
  @ViewChild('result') result: ElementRef;


  ngOnInit() {
    this.title = 'button';
  }

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
    }
  }

  shellUp() {
    this.conf.getConfig();
    this.isDeploymentProcess = true;
    this.isCompilerProcess = false;

  }

  runServerUp() {
    this.conf.runServer();
  }

  okButton() {
    this.toasIsVisible = false;
    this.isCompilerProcess = true;

  }

  cancelButton() {
    this.toasIsVisible = false;
    this.isVisible = true;
  }


  setButton() {
    const buttonSelected = this.button.nativeElement.lastChild;
    const cln = buttonSelected.cloneNode(true);
    const result = this.result.nativeElement;
    // const resultHTML = result.appendChild(cln);

    this.conf.createHtml();

    // add new element into DB
    this.htmlObject = cln.outerHTML;
    this.conf.addDataB(this.htmlObject);

    // this.conf.injectHtml();
    this.toasIsVisible = true;
    this.isVisible = true;
  }

  // getDataBaseObject() {
  //   this.conf.getByKey();
  // }

}
