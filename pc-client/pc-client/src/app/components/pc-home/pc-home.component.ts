import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Input } from '@angular/core';
import { ConfigService } from '../../services/funtions.service';
import { CdkDragDrop, CdkDragEnter, CdkDragExit, moveItemInArray, transferArrayItem  } from '@angular/cdk/drag-drop';


import gql from 'graphql-tag';
import {Apollo} from 'apollo-angular';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


// const GET_BATCHES = gql`
//  query  {
//     getBatches {
//       _Name
//     }
// }`;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pc-home',
  templateUrl: './pc-home.component.html',
  styleUrls: ['./pc-home.component.scss']
})
export class PcHomeComponent implements OnInit, OnDestroy {
  //batches: Observable<Batches.Query>;
  getBatches: Observable<any>;
  constructor(private conf: ConfigService, 
              private apollo: Apollo) { }

  
  titleHeader = 'Header';
  titleNavigation = 'Navigation';



  dropdown: any;
  isVisibleDropdownContainer: string;
  

  navigation = [{title: 'Navigation Bar'}]
  navigationCopy = [];
  
  navigationHeader = [{title: 'Header'}]
  navigationHeaderCopy = []  

  tableCopy = [];
  table = []

  isVisibleText = false;
  isVisibleHeader = false;
  isVisibleTextBar = true;
  isVisibleHeaderText = true

  @ViewChild('dropdownList', {static: false}) dropdownList: ElementRef;
  @ViewChild('dropdownContainer', {static: false}) dropdownContainer: ElementRef;


  ngOnInit() {
   this.isVisibleDropdownContainer = 'none';
    // this.getBatches = this.apollo
    // .watchQuery<any>({
    //   query: GET_BATCHES,
    // })
    // .valueChanges.pipe(map(result => result.data.getBatches));
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
//a 
  entered(event: CdkDragEnter<string[]>) {
    console.log('Entered', event.item.data);
   }
//a
   exited(event: CdkDragExit<string[]>) {
    switch(event && event.container.id) {
      case 'dropListBasic':
       switch(this.navigation.length === 1 && this.navigationCopy.length < 1) {
          case true:  
          this.navigation.push(this.navigation[0]);
          this.isVisibleTextBar = false;
          break;
          default:
       }
       break;
       case 'dropListHeader':
          switch(this.navigationHeader.length === 1 && this.navigationHeaderCopy.length < 1) {
             case true:  
             this.navigationHeader.push(this.navigationHeader[0]);
             this.isVisibleHeaderText = false;
             break;
             default:
          }
          break;
       default:
       console.log('Problem');
    }


    //  if(event && event.id===this.navigation.length === 1){
    //    this.navigation.push(this.navigation[0]);
    //  } 
    //  if(this.navigationHeader.length === 1){
    //   this.navigationHeader.push(this.navigationHeader[0]);
    // } 
    //  if(this.navigationCopy.length < 1) {
    //    this.isVisibleTextBar = false;
    //  }
    //  if(this.navigationHeaderCopy.length < 1) {
    //   this.isVisibleHeaderText = false;
    // }
      
   }

   
 
  selectedNavigation(event: any) {
    if(event) {
      this.isVisibleText = true;
      this.isVisibleHeader = false;
      // this.isVisibleButton = false;
      // this.isVisibleDropdown = false;
    }
  }

  selectedHeader(event: any) {
    if(event) {
      this.isVisibleText = false;
      this.isVisibleHeader = true;
      // this.isVisibleButton = false;
      // this.isVisibleDropdown = false;
    }
  }

  selectedButton(event: any) {
    if(event) {
      this.isVisibleText = false;
      // this.isVisibleButton = true;
      // this.isVisibleDropdown = false;
      //this.todos.push(this.completed[0].name)
    }
  }

  selectedDropdown(event: any) {
    if(event) {
      this.isVisibleText = false;
      // this.isVisibleButton = false;
      // this.isVisibleDropdown = true;
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
