import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { DeactiveGuard } from './deactive.guard';
import { LoadGuard } from './load.guard';
import { SuperAdminGuard } from './super-admin.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminAcessGuard } from './admin-acess.guard';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent,canDeactivate:[DeactiveGuard]},
  {path:"companydetails",component:CompanyDetailsComponent,canActivate:[AuthGuardGuard]},

  {path:"admin",canActivate:[SuperAdminGuard],
  children:[{
    path:'',
    component:AdminComponent,
    
   },
   {
    path:'',
    canActivateChild:[AdminAcessGuard],
    children:[
      {
        path:"edit",
        component:AdminEditComponent,
       },
       {
        path:"delete",
        component:AdminDeleteComponent,
       }
    ]
   }
  
]},


  {path:"formodule",canLoad:[LoadGuard],loadChildren:()=>import("./one-module/one-module.module").then(a=>a.OneModuleModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
