import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ServerService } from './server.service';
import { BreadcrumbService } from './breadcrumb.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap';
import { LoginComponent } from './login/login.component';
import { CaseComponent } from './case/case.component';
import { TreeModule } from 'angular-tree-component';
import { MaterializeModule } from 'ng2-materialize';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CasesComponent } from './cases/cases.component';
import { SettingsComponent } from './settings/settings.component';

import { routing } from './app-routing.module';
// import { AppRoutingModule } from './app-routing.module';
import { AccountComponent } from './account/account.component';
import { DevicesComponent } from './devices/devices.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DigitalMediasComponent } from './digital-medias/digital-medias.component';
import { ImagesComponent } from './images/images.component';
import { FilesComponent } from './files/files.component';
// import { ImagesComponent } from './images/images.component';
// import { DmComponent } from './dm/dm.component';
// import { ImageComponent } from './image/image.component';
// import { DeviceComponent } from './device/device.component';
// import { FileComponent } from './file/file.component';
// import { FilesComponent } from './files/files.component';
 
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
    FilesComponent
    // ToolbarComponent,
    // ImagesComponent,
    // DmComponent,
    // ImageComponent,
    // DeviceComponent,
    // FileComponent,
    // FilesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    TreeModule,
    MaterializeModule.forRoot(),
    ReactiveFormsModule,
    routing
    /*AppRoutingModule,*/
  ],
  providers: [ServerService, BreadcrumbService], 
  bootstrap: [AppComponent],
  exports: [ ReactiveFormsModule ]
})
export class AppModule { }

