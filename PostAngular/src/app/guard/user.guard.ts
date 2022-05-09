import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthorizationService} from "../services/authorization.service";

@Injectable({providedIn: 'root'})
export class UserGuard implements CanActivate{
  constructor(private service: AuthorizationService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean> | Promise<boolean> | boolean {

    if(this.service.role === 'User'){
      return true
    }else{
      this.service.logout()
      this.router.navigate(['/login'])
      return false
    }
  }

}
