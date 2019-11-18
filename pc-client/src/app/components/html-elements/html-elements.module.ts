import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PcNavigationComponent } from './pc-navigation/pc-navigation.component';
import { PcHeaderComponent } from './pc-header/pc-header.component';
import { PcTableComponent } from './pc-table/pc-table.component';
import { PcDropdownListComponent } from './pc-dropdown-list/pc-dropdown-list.component';

@NgModule({
  declarations: [    
    PcNavigationComponent,
    PcHeaderComponent,
    PcTableComponent,
    PcDropdownListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PcNavigationComponent,
    PcHeaderComponent,
    PcTableComponent,
    PcDropdownListComponent
  ]
})
export class HtmlElementsModule { }
