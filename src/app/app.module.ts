import { AuthGuard } from './auth-guard.service';
import { ImagesService } from './images/images.service';
import { DigitalMediasService } from './digital-medias/digital-medias.service';
import { DevicesService } from './devices/devices.service';
import { CasesService } from './cases/cases.service';
import { LoginService } from './login/login.service';
import { AccountService } from './account/account.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ServerService } from './server.service'; 
import { BreadcrumbService } from './breadcrumb.service';
import { CollapsibleService } from './collapsible.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap';
import { LoginComponent } from './login/login.component';
import { CaseComponent } from './cases/case/case.component';
import { TreeModule } from 'angular-tree-component';
import { MaterializeModule } from 'ng2-materialize';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CasesComponent } from './cases/cases.component';
import { SettingsComponent } from './settings/settings.component';

import { AppRoutingModule } from './app-routing.module';
import { AccountComponent } from './account/account.component';
import { DeviceComponent } from './devices/device/device.component';
import { DevicesComponent } from './devices/devices.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DigitalMediasComponent } from './digital-medias/digital-medias.component';
import { ImageComponent } from './images/image/image.component';
import { ImagesComponent } from './images/images.component';
import { FileComponent } from './files/file/file.component';
import { FilesComponent } from './files/files.component';
import { DigitalMediaComponent } from './digital-medias/digital-media/digital-media.component'; 
import { AccInfoComponent } from './acc-info/acc-info.component';
import { CollapsibleComponent } from './collapsible/collapsible.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CaseComponent,
    DashboardComponent,
    CasesComponent,
    SettingsComponent,
    AccountComponent,
    DevicesComponent,
    ToolbarComponent,
    DigitalMediasComponent,
    ImagesComponent,
    FilesComponent,
    DigitalMediaComponent,
    DeviceComponent,
    ImagesComponent,
    ImageComponent,
    FileComponent,
    AccInfoComponent,
    CollapsibleComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    TreeModule,
    MaterializeModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ServerService, BreadcrumbService, CollapsibleService, 
              AccountService, LoginService, CasesService,
              DevicesService, DigitalMediasService, ImagesService,
              AuthGuard], 
  bootstrap: [AppComponent],
  exports: [ ReactiveFormsModule ]
})
export class AppModule { }

