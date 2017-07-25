import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CasesComponent } from './cases/cases.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
//   { path: '', redirectTo: '/', pathMatch: 'full' },
//   { path: 'heroes',     component: HeroesComponent }
  { path: 'cases',  component: CasesComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}