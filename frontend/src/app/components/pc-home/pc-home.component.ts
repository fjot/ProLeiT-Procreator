import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ConfigService } from '../../services/serverConnection';
import { CdkDragDrop, CdkDragEnter, CdkDragExit, moveItemInArray, transferArrayItem  } from '@angular/cdk/drag-drop';


import gql from 'graphql-tag';
import {Apollo} from 'apollo-angular';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


const GET_BATCHES = gql`
 query  {
    getBatches {
      _Name
    }
}`;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pc-home',
  templateUrl: './pc-home.component.html',
  styleUrls: ['./pc-home.component.scss']
})
export class PcHomeComponent implements OnInit, OnDestroy {
  //batches: Observable<Batches.Query>;

  getBatches: Observable<any>;
  dropdown: any;
  isVisibleDropdownContainer: string;
  constructor(private conf: ConfigService, 
              private apollo: Apollo) { }
 
  todos = [];
  content = [];
  text = [];

  completed = [{button: 'Primary Button'}];
  contentList = [{dropdown: 'Dropdown'}]
  // Define a list of HTML element
  elements = [{p: 'Parragraph'}]

                
  // title: any;
  // htmlObject: any;
  // html: any;
  isVisibleText = false;
  isVisibleButton = false;
  isVisibleDropdown = false;
  // toasIsVisible = false;
  isCompilerProcess = false;
  isDeploymentProcess = false;

  @ViewChild('dropdownList', {static: false}) dropdownList: ElementRef;
  @ViewChild('dropdownContainer', {static: false}) dropdownContainer: ElementRef;



  ngOnInit() {
   this.isVisibleDropdownContainer = 'none';
    this.getBatches = this.apollo
    .watchQuery<any>({
      query: GET_BATCHES,
    })
    .valueChanges.pipe(map(result => result.data.getBatches));
}

ngOnDestroy() {

}

setDropdownList(){

  if ( this.isVisibleDropdownContainer === 'flex') {
    this.isVisibleDropdownContainer = 'none';
  } else {
    this.isVisibleDropdownContainer = 'flex';
  }
}

  

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex,event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
    }
  }

  entered(event: CdkDragEnter<string[]>) {
    console.log('Entered', event.item.data);
   
   }
   exited(event: CdkDragExit<string[]>) {
     if(this.elements.length === 1){
       this.elements.push(this.elements[0]);
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

  create() {
    this.conf.create();
    // this.isDeploymentProcess = true;
    // this.isCompilerProcess = false;

  }

  copy() {
    this.conf.copy();
    console.log('click')
    // this.isDeploymentProcess = true;
    // this.isCompilerProcess = false;

  }

  // runServerUp() {
  //   this.conf.runServer();
  // }

  // okButton() {
  //   this.toasIsVisible = false;
  //   this.isCompilerProcess = true;

  // }

  // cancelButton() {
  //   this.toasIsVisible = false;
  // }


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
