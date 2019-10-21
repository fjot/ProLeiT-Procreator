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
import { GraphQLModule } from './graphql/graphql.module';
import { PcLoginComponent } from './components/pc-login/pc-login.component';
import { HtmlElementsModule } from './components/html-elements/html-elements.module';
import { PcAccountComponent } from './components/pc-account/pc-account.component';
// import { NbEvaIconsModule } from '@nebular/eva-icons';
// import { NbThemeModule, NbLayoutModule } from '@nebular/theme';

@NgModule({
  declarations: [
    AppComponent,
    PcHomeComponent,
    PcNavComponent,
    PcLoginComponent,
    PcAccountComponent,
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
    GraphQLModule,
    HtmlElementsModule
    // NbEvaIconsModule,
    // NbThemeModule.forRoot({ name: 'default' }),
    // NbLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
