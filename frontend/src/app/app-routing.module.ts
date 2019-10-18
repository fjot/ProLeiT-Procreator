import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PcLoginComponent } from './components/pc-login/pc-login.component';
import { PcAccountComponent } from './components/pc-account/pc-account.component';
import { PcHomeComponent } from './components/pc-home/pc-home.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: PcLoginComponent},
  {path: 'account', component: PcAccountComponent},
  {path: 'dashboard', component: PcHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
