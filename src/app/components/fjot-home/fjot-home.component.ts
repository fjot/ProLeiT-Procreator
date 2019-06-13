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
 
  todos = [];
  content = [];
  text = [];
  completed = [{button: 'Button'}];
  contentList = [{dropdown: 'Dropdown'}]
  textList = [{text: 'Text', subText: 'You can white here'}]
                
  title: any;
  htmlObject: any;
  html: any;
  isVisibleText = false;
  isVisibleButton = false;
  isVisibleDropdown = false;
  toasIsVisible = false;
  isCompilerProcess = false;
  isDeploymentProcess = false;

  // @ViewChild('clone') button: ElementRef;
  // @ViewChild('toastIs') toast: ElementRef;
  // @ViewChild('result') result: ElementRef;


  ngOnInit() {
   // this.completed[0].name = 'Button';
  }

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex,event.currentIndex);
     
     // this.contentList[0].push(event.container.data[0);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
    }
  }


  selectedText(event: any) {
    if(event) {
      this.isVisibleText = true;
      this.isVisibleButton = false;
      this.isVisibleDropdown = false;
     this.text[0].subText = '';
    }
  }

  selectedButton(event: any) {
    if(event) {
      this.isVisibleText = false;
      this.isVisibleButton = true;
      this.isVisibleDropdown = false;
      //this.todos.push(this.completed[0].name)
    }
  }

  selectedDropdown(event: any) {
    if(event) {
      this.isVisibleText = false;
      this.isVisibleButton = false;
      this.isVisibleDropdown = true;
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
  }


  // setButton() {
  //   const buttonSelected = this.button.nativeElement.lastChild;
  //   const cln = buttonSelected.cloneNode(true);
  //   const result = this.result.nativeElement;
  //   // const resultHTML = result.appendChild(cln);

  //   this.conf.createHtml();

  //   // add new element into DB
  //   this.htmlObject = cln.outerHTML;
  //   this.conf.addDataB(this.htmlObject);

  //   // this.conf.injectHtml();
  //   this.toasIsVisible = true;
  //   this.isVisible = true;
  // }

  // getDataBaseObject() {
  //   this.conf.getByKey();
  // }

}
