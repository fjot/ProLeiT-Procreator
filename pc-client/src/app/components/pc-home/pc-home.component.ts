import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Input } from '@angular/core';
import { ConfigService } from '../../services/funtions.service';
import { CdkDragDrop, CdkDragEnter, CdkDragExit, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pc-home',
  templateUrl: './pc-home.component.html',
  styleUrls: ['./pc-home.component.scss']
})
export class PcHomeComponent implements OnInit, OnDestroy {
  //batches: Observable<Batches.Query>;
  getBatches: Observable<any>;
  devices: { id: number; name: string; }[];
  datasource: any;
  naviList: any;
  navigationName: any;
  navigationHeaderName: any;
  tableName: any;
  isVisibleTable: boolean;
  isVisibleDeploy: boolean;
  isVisibleSave: boolean;
  isVisibleQR: boolean;
  label: string;

  data1: any;
  data2: any;
  data3: any;

  od: number = 0;
  icon: string;
 

  constructor(private conf: ConfigService) { }

  // Set names into Smartphone
  //aqui
  titleHeader = 'Header';
  titleNavigation = 'Navigation';
  imgNavigation = '../../../assets/img/u289.svg';
  titleContent = 'Content';
  title1 = 'Title 1';
  title2 = 'Title 2';
  title3 = 'Title 3';
  label1 = 'Label 1';
  label2 = 'Label 2';
  label3 = 'Label 3';
  //aqui
  // Set titles into smarthone
  isVisibleTextBar = true;
  isVisibleHeaderText = true;
  isVisibleTableText = true;
  isVisibleIcons = false;

  // Set the html elements list sidebar
  isVisibleNavigationList: boolean;
  isVisibleTablelist: boolean;

  // Arrays 
  navigation = [{ title: 'Navigation Bar' }]
  navigationCopy = [];
  navigationHeader = [{ title: 'Header' }]
  navigationHeaderCopy = []
  table = [{ title: 'Header' }]
  tableCopy = [];

  // Set proporties into sidebar for change
  isVisibleHeader = false;
  isVisibleNavigationBar = false

  storageLocation = [
    {
      Location: 'Tank-01',
      Material: 'Produkt-A',
      Quantity: '100,5 hl'
    },
    {
      Location: 'Tank-02',
      Material: 'Produkt-B',
      Quantity: '10,5 hl'
    },
    {
      Location: 'Tank-03',
      Material: 'Produkt-C',
      Quantity: '14 hl'
    },
    {
      Location: 'Tank-04',
      Material: 'Produkt-D',
      Quantity: '130,5 hl'
    },
    {
      Location: 'Tank-05',
      Material: 'Produkt-E',
      Quantity: '100,5 hl'
    },
    {
      Location: 'Tank-06',
      Material: 'Produkt-F',
      Quantity: '10,5 hl'
    },
    {
      Location: 'Tank-07',
      Material: 'Produkt-G',
      Quantity: '100,5 hl'
    },
    {
      Location: 'Tank-08',
      Material: 'Produkt-H',
      Quantity: '100,5 hl'
    },
    {
      Location: 'Tank-09',
      Material: 'Produkt-I',
      Quantity: '30,3 hl'
    },
    {
      Location: 'Tank-10',
      Material: 'Produkt-J',
      Quantity: '20 hl'
    },
    {
      Location: 'Tank-11',
      Material: 'Produkt-K',
      Quantity: '14,5 hl'
    },
    {
      Location: 'Tank-12',
      Material: 'Produkt-L',
      Quantity: '34,5 hl'
    }
  ]


  location = [
    { id: 1, name: this.label1},
    { id: 2, name: this.label2},
    { id: 3, name: this.label3}
  ]
  material = [
    { id: 1, name: this.label1},
    { id: 2, name: this.label2},
    { id: 3, name: this.label3}
  ]

  quantity = [
    { id: 1, name: this.label1},
    { id: 2, name: this.label2},
    { id: 3, name: this.label3}
  ]

  labelDefault = [
    { id: 1, name: this.label1},
    { id: 2, name: this.label2},
    { id: 3, name: this.label3}
  ]

  titleDefault = [
    { id: 1, name: this.title1},
    { id: 2, name: this.title2},
    { id: 3, name: this.title3}
  ]

  data = [
    { id: 0, name: 'Select a Value'},
    { id: 1, name: this.data1},
    { id: 2, name: this.data2},
    { id: 3, name: this.data3}
  ]


  ngOnInit() { 
    this.devices = [{ id: 1, name: 'iPhone X' }]
    this.datasource = [{ id: 0, name: 'Select Datasource' }, { id: 1, name: 'Batches' }, { id: 2, name: 'Transfers' }, { id: 3, name: 'Storage Location' }]
    this.isVisibleNavigationList = false;
    this.isVisibleTablelist = false;
  }

  ngOnDestroy() {

  }

  getElementforArray(object: any){
    Object.getOwnPropertyNames(object);
  }
  
  openList(event) {
    console.log(event)
    switch (event && event.currentTarget.id) {
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
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
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
    switch (event && event.container.id) {
      case 'dropListBasic':
        switch (this.navigation.length === 1 && this.navigationCopy.length < 1) {
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
        switch (this.navigationHeader.length === 1 && this.navigationHeaderCopy.length < 1) {
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
        switch (this.table.length === 1 && this.tableCopy.length < 1) {
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
    if (event) {
      this.isVisibleNavigationBar = true;
      this.isVisibleHeader = false;
      this.isVisibleTable = false;
    }
  }

  selectedHeader(event: any) {
    if (event) {
      this.isVisibleNavigationBar = false;
      this.isVisibleHeader = true;
      this.isVisibleTable = false;
    }
  }

  selectedTable(event: any) {
    if (event) {
      this.isVisibleNavigationBar = false;
      this.isVisibleHeader = false;
      this.isVisibleTable = true;
    }
  }

  selectedIcons(event: any) {
    if (event) {
      this.isVisibleIcons = true;
    }
  }

  clickCloseModal(event: any) {
    if (event) {
      if (this.isVisibleIcons) {
        this.isVisibleIcons = !this.isVisibleIcons
        this.imgNavigation = '../assets/img/filter.svg'
      } else if (this.isVisibleDeploy) {
        this.isVisibleDeploy = !this.isVisibleDeploy
      } else if (this.isVisibleSave) {
        this.isVisibleSave = !this.isVisibleSave
      } else if (this.isVisibleQR) {
        this.isVisibleQR = !this.isVisibleQR
      }

    }
  }

  somethingChanged(event: any) {
    switch (event && event.target.value) {
      case '1':
        console.log('Batch')
        break;
      case '2':
        console.log('Transfer')
        break;
      case '3':
        const valueStorage = Object.getOwnPropertyNames(this.storageLocation[0]);
        this.data = [];
        this.data1 = valueStorage[0];
        this.data2 = valueStorage[1];
        this.data3 = valueStorage[2];
        this.data.push( { id: 0, name: 'Select a Value'}, {id: 1, name: this.data1},{id: 2, name: this.data2}, {id: 3, name: this.data3} )
        break;
      default:
    }
  }

  valueChanged(event: any) {
    switch (event && event.target.value) {
      case '1':
        this.location = [];
        this.titleDefault.splice(0, 1, {id:1, name: 'Location'});
        this.storageLocation.forEach((element) => {
          if(element.Location) {
            this.od++
            this.location.splice(this.od - 1, 1,{id: this.od, name: element.Location});
          }
        });
        break;
      case '2':
          this.material = []
        this.titleDefault.splice(1, 1, {id:1, name: 'Material'});
        this.storageLocation.forEach((element) => {
          if(element.Material) {
            this.od++
            this.material.splice(this.od - 1, 1,{id: this.od, name: element.Material});
          }
        });
        break;
      case '3':
          this.quantity = []
        this.titleDefault.splice(2, 1, {id:1, name: 'Quantity'});
        this.storageLocation.forEach((element) => {
          if(element.Quantity) {
            this.od++
            this.quantity.splice(this.od - 1, 1,{id: this.od, name: element.Quantity});
          }
        });
        break;
      default:
    }
  }

  

  deploy() {
    if (event) {
      this.isVisibleDeploy = true;
      this.closeModalDeploy();
    }
  }

  save() {
    if (event) {
      this.isVisibleSave = true;
      this.closeModalSave();
    }
  }


  closeModalSave() {
    setTimeout(() => {
      this.isVisibleSave = false;

    }, 4000);
  }

  closeModalDeploy() {
    setTimeout(() => {
      this.isVisibleDeploy = false;
      this.isVisibleQR = true;
    }, 4000);
  }


}
