import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PcNavigationComponent } from './pc-navigation/pc-navigation.component';
import { PcHeaderComponent } from './pc-header/pc-header.component';

@NgModule({
  declarations: [    
    PcNavigationComponent,
    PcHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PcNavigationComponent,
    PcHeaderComponent
  ]
})
export class HtmlElementsModule { }
