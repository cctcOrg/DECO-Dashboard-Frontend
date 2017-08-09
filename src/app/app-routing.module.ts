import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CaseComponent } from './case/case.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CasesComponent } from './cases/cases.component';
import { SettingsComponent } from './settings/settings.component';
import { DevicesComponent } from './devices/devices.component';
import { DigitalMediasComponent } from './digital-medias/digital-medias.component';
import { ImagesComponent } from './images/images.component';
import { FilesComponent } from './files/files.component';

const appRoutes: Routes = [
  //{ path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '', component: LoginComponent },
  { path: 'dashboard/:userId', component: DashboardComponent, children: [
    { path: 'cases', children: [
      { path: '', pathMatch: 'full', component: CasesComponent },
      { path: ':caseId/devices', children: [
        { path: '', pathMatch: 'full', component: DevicesComponent }, 
        { path: ':deviceId/digital-medias', children: [
          { path: '', pathMatch: 'full', component: DigitalMediasComponent },
          { path: ':dmId/images', children:[
            {path: '', pathMatch: 'full', component: ImagesComponent },
            { path: ':imageId/file', component: FilesComponent },
          ]}
        ]}
      ]},
    ] },
    /*{ path: 'digital-medias', component: DigitalMediasComponent},
    { path: 'images', component: ImagesComponent},
    { path: 'files', component: FilesComponent},
    { path: 'settings', component: SettingsComponent }*/
  ]},
  { path: 'not-found', component: PageNotFoundComponent},
  { path: '**', redirectTo: '/not-found'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}