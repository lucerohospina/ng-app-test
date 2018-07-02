import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from './services/data.service';
import { EmployeesService } from './services/employees.service';
 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './table/table.component';
import { InboxComponent } from './inbox/inbox.component';
import { GenerateSinglesComponent } from './generate-singles/generate-singles.component';
import { GenerateStackComponent } from './generate-stack/generate-stack.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const appRoutes:Routes = [
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'inbox',
    component: InboxComponent
  },
  {
    path: 'singles',
    component: GenerateSinglesComponent
  },
  {
    path: 'stack',
    component: GenerateStackComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    FooterComponent,
    DashboardComponent,
    TableComponent,
    InboxComponent,
    GenerateSinglesComponent,
    GenerateStackComponent,
    EmployeeListComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [EmployeesService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
