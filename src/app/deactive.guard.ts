import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@Injectable({
  providedIn: 'root'
})
export class DeactiveGuard implements CanDeactivate<RegisterComponent> {

  canDeactivate(
    component: RegisterComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(component.ForChanges){
      return window.confirm("Have u registered!.please register first");
    }
    return false;
    }

  }
  

