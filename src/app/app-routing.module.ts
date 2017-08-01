import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CasesComponent } from './cases/cases.component';
import { SettingsComponent } from './settings/settings.component';
import { DevicesComponent } from './devices/devices.component';
import { DigitalMediasComponent } from './digital-medias/digital-medias.component';
import { ImagesComponent } from './images/images.component';
import { FilesComponent } from './files/files.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'cases',  component: CasesComponent },
  { path: 'devices', component: DevicesComponent },
  { path: 'digital-medias', component: DigitalMediasComponent},
  { path: 'images', component: ImagesComponent},
  { path: 'files', component: FilesComponent},
  { path: 'settings', component: SettingsComponent }
];

export const routing = RouterModule.forRoot(routes);