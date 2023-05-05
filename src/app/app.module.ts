import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuardGuard } from './auth-guard.guard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { AuthServiceService } from './auth-service.service';
import { DeactiveGuard } from './deactive.guard';
import { OneModuleModule } from './one-module/one-module.module';
import { LoadGuard } from './load.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CompanyDetailsComponent,
    AdminComponent,
    AdminEditComponent,
    AdminDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OneModuleModule
    
  ],
  providers: [AuthGuardGuard,DeactiveGuard,LoadGuard,AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
