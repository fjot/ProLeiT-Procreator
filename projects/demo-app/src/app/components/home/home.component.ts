import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
 //aqui
  titleHeader = 'Storage Overview';
  titleNavigation = '';
  imgNavigation = '../assets/img/filter.svg'
  titleContent = 'Content';
  title1 = 'Title 1';
  title2 = 'Title 2';
  title3 = 'Title 3';
  label1 = 'Label 1';
  label2 = 'Label 2';
  label3 = 'Label 3';
  TcolorText = '#073a73';
  TcolorTitle = '#073a73';
  TcolorBackground = '#fff';
  od: number = 0;
  //aqui

  objectKeys = Object.keys;
  
  displayColumns = ['Location'];
  
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
    },
    {
      Location: 'Tank-12',
      Material: 'Produkt-L',
      Quantity: '34,5 hl'
    },
    {
      Location: 'Tank-12',
      Material: 'Produkt-L',
      Quantity: '34,5 hl'
    },
    {
      Location: 'Tank-12',
      Material: 'Produkt-L',
      Quantity: '34,5 hl'
    },
    {
      Location: 'Tank-12',
      Material: 'Produkt-L',
      Quantity: '34,5 hl'
    },
    {
      Location: 'Tank-12',
      Material: 'Produkt-L',
      Quantity: '34,5 hl'
    },
    {
      Location: 'Tank-12',
      Material: 'Produkt-L',
      Quantity: '34,5 hl'
    },
    {
      Location: 'Tank-12',
      Material: 'Produkt-L',
      Quantity: '34,5 hl'
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


  titleDefault = [
    { id: 1, name: this.title1},
    { id: 2, name: this.title2},
    { id: 3, name: this.title3}
  ]



 
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.valueChanged();

    });
   
  }


  valueChanged() {
        this.location = [];
        this.material = []
        this.quantity = []

        this.titleDefault.splice(0, 1, {id:1, name: 'Location'});
        this.titleDefault.splice(1, 1, {id:1, name: 'Material'});
        this.titleDefault.splice(2, 1, {id:1, name: 'Quantity'});
        this.getLocation();
        this.getMaterial();
        this.getQuantity();
    }

    getLocation() {
      this.storageLocation.forEach((element) => {
          this.od++
          this.location.splice(this.od - 1, 1,{id: this.od, name: element.Location});
        
      });

    }

    getMaterial(){
      this.storageLocation.forEach((element) => {
          this.od++
          this.material.splice(this.od - 1, 1,{id: this.od, name: element.Material});
      });
    }

    getQuantity() {
      this.storageLocation.forEach((element) => {
          this.od++
          this.quantity.splice(this.od - 1, 1,{id: this.od, name: element.Quantity});
      });
    }
  }


