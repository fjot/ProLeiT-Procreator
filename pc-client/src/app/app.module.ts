import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PcHomeComponent } from './components/pc-home/pc-home.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { PcNavComponent } from './components/pc-nav/pc-nav.component';
import { PcLoginComponent } from './components/pc-login/pc-login.component';
import { HtmlElementsModule } from './components/html-elements/html-elements.module';
import { PcAccountComponent } from './components/pc-account/pc-account.component';
import { PcIconsComponent } from './components/pc-icons/pc-icons.component';
import { PcDeployComponent } from './components/pc-deploy/pc-deploy.component';
import { PcSaveComponent } from './components/pc-save/pc-save.component';
import { PcQrComponent } from './components/pc-qr/pc-qr.component';

@NgModule({
  declarations: [
    AppComponent,
    PcHomeComponent,
    PcNavComponent,
    PcLoginComponent,
    PcAccountComponent,
    PcIconsComponent,
    PcDeployComponent,
    PcSaveComponent,
    PcQrComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DragDropModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HtmlElementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
