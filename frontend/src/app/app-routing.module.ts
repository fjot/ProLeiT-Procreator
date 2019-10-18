import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PcLoginComponent } from './components/pc-login/pc-login.component';
import { PcNavigationComponent } from './components/pc-navigation/pc-navigation.component';
import { PcHomeComponent } from './components/pc-home/pc-home.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: PcLoginComponent},
  {path: 'navigation', component: PcNavigationComponent},
  {path: 'dashboard', component: PcHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
