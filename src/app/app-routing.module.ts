import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { AuthGuard } from './auth-guard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CaseComponent } from './cases/case/case.component';
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
import { AccInfoComponent } from './acc-info/acc-info.component';
/**
 * The basic idea behind the routing is that the login page will be the default home page,
 * and once logged in, the default action will be to load the Dashboard Component, along with
 * any cases that have been added. An example route upon first logging in would be 
 * localhost:4200/dashboard/:userId/cases. Where userId is dynamically generated based on login info.
 * Additionally the user may create new cases from this route. 
 * Since all subsequent data to be entered is a child of the Cases Component, the following model was
 * adopted: cases->devices->digital-medias->images->files, where '->' indicates a parent to child relationship.
 * This means that you cant add device info before you've added a case, and cant add digital-media info
 * before adding a device and so on. Thus the routes reflect this type of relationship between components.
 * The 'canActivate: [AuthGuard] ensures that a only a logged in user can view the dashboard.
 * The 'canDeactivate: [CanDeactiveGuard] warns the user if they attempt to change routes while adding
 * a new case/device/etc...
**/
const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard/:userId',canActivate: [AuthGuard], component: DashboardComponent, children: [
    { path: 'account', component: AccInfoComponent},
    { path: 'cases', children: [
      { path: '', pathMatch: 'full', canDeactivate: [CanDeactivateGuard], component: CasesComponent },
      { path: ':caseId/devices', children: [
        { path: '', pathMatch: 'full', canDeactivate: [CanDeactivateGuard], component: DevicesComponent }, 
        { path: ':deviceId/digital-medias', children: [
          { path: '', pathMatch: 'full', canDeactivate: [CanDeactivateGuard], component: DigitalMediasComponent },
          { path: ':dmId/images', children:[
            {path: '', pathMatch: 'full', canDeactivate: [CanDeactivateGuard],component: ImagesComponent },
            { path: ':imageId/file', canDeactivate: [CanDeactivateGuard], component: FilesComponent },
          ]}
        ]}
      ]},
    ] },
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