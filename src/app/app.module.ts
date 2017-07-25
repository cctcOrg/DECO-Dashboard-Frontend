import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ServerService } from './server.service';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap';
import { LoginComponent } from './login/login.component';
import { CaseComponent } from './case/case.component';
import { TreeModule } from 'angular-tree-component';
import { MaterializeModule } from 'ng2-materialize';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CasesComponent } from './cases/cases.component';
import { SettingsComponent } from './settings/settings.component';

import { AppRoutingModule }     from './app-routing.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
 
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    CaseComponent,
    DashboardComponent,
    CasesComponent,
    SettingsComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, BrowserAnimationsModule, TreeModule, MaterializeModule.forRoot(), AppRoutingModule, ReactiveFormsModule
    
  ],
  providers: [ServerService],
  bootstrap: [AppComponent],
  exports: [ ReactiveFormsModule ]
})
export class AppModule { }

