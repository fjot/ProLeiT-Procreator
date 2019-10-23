import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Input } from '@angular/core';
import { ConfigService } from '../../services/funtions.service';
import { CdkDragDrop, CdkDragEnter, CdkDragExit, moveItemInArray, transferArrayItem  } from '@angular/cdk/drag-drop';
import {Apollo} from 'apollo-angular';
import {Observable} from 'rxjs';
import gql from 'graphql-tag';
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
  devices: { option: number; name: string; }[];
  naviList: any;
  navigationName: any;
  navigationHeaderName: any;
  tableName: any;
  
  constructor(private conf: ConfigService, 
              private apollo: Apollo) { }

  // Set names into Smartphone
  titleHeader = 'Header';
  titleNavigation = 'Navigation';
  imgNavigation = '../../../assets/img/u289.svg';
  titleContent = 'Content';

  // Set titles into smarthone
  isVisibleTextBar = true;
  isVisibleHeaderText = true;
  isVisibleTableText = true;

  // Set the html elements list sidebar
  isVisibleNavigationList: boolean;
  isVisibleTablelist: boolean;

  // Arrays 
  navigation = [{title: 'Navigation Bar'}]
  navigationCopy = [];
  navigationHeader = [{title: 'Header'}]
  navigationHeaderCopy = []  
  table = [{title: 'Header'}]
  tableCopy = [];

  // Set proporties into sidebar for change
  isVisibleHeader = false;
  isVisibleNavigationBar = false

  
  ngOnInit() {
  this.devices = [{option: 1, name: 'Smartphone'}]
  this.isVisibleNavigationList = false;
  this.isVisibleTablelist = false;
    // this.getBatches = this.apollo
    // .watchQuery<any>({
    //   query: GET_BATCHES,
    // })
    // .valueChanges.pipe(map(result => result.data.getBatches));
}

ngOnDestroy() {

}

openList(event){
 console.log(event)
  switch(event && event.currentTarget.id){
     case 'navigationList':
       this.isVisibleNavigationList = !this.isVisibleNavigationList
      break;
      case 'tableList':
          this.isVisibleTablelist = !this.isVisibleTablelist
         break;
      default:
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
          this.isVisibleNavigationBar = true;
          this.isVisibleHeader = false;
          break;
          default:
       }
       break;
       case 'dropListHeader':
          switch(this.navigationHeader.length === 1 && this.navigationHeaderCopy.length < 1) {
             case true:  
             this.navigationHeader.push(this.navigationHeader[0]);
             this.isVisibleHeaderText = false;
             this.isVisibleNavigationBar = false;
             this.isVisibleHeader = true;
             break;
             default:
          }
          break;
          case 'dropListTable':
              switch(this.table.length === 1 && this.tableCopy.length < 1) {
                 case true:  
                 this.table.push(this.table[0]);
                 this.isVisibleTableText = false;
                 break;
                 default:
              }
              break;
       default:
    }
   }

  selectedNavigation(event: any) {
    if(event) {
      this.isVisibleNavigationBar = true;
      this.isVisibleHeader = false;
    }
  }

  selectedHeader(event: any) {
    if(event) {
      this.isVisibleNavigationBar = false;
             this.isVisibleHeader = true;
    }
  }

  deploy() {
    this.conf.deploy();
    alert('https://demoappstatic.z6.web.core.windows.net/')
  }

  save() {
    alert('Ready to Deploy')
  }





}
