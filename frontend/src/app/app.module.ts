import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FjotHomeComponent } from './components/fjot-home/fjot-home.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { FjotNavComponent } from './components/fjot-nav/fjot-nav.component';
import { GraphQLModule } from './graphql.module';
// import { NbEvaIconsModule } from '@nebular/eva-icons';
// import { NbThemeModule, NbLayoutModule } from '@nebular/theme';

@NgModule({
  declarations: [
    AppComponent,
    FjotHomeComponent,
    FjotNavComponent
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
    // NbEvaIconsModule,
    // NbThemeModule.forRoot({ name: 'default' }),
    // NbLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
