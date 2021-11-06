import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor( private as:AuthService,private route:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Promise<boolean | UrlTree> {
    return new Promise(resol=>{
      this.as.user.subscribe(user=>{
        if(user){
          resol(true)
        }else{
          this.route.navigate(['/'])
          resol(false)
        }
      })
    })
  }
}
