import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AdminAuthService } from "../services/admin-auth.service";

@Injectable()
export class AdminAuthGuard implements CanActivate {
    constructor(private adminauthService: AdminAuthService, private router: Router) { }

    canActivate() {
        if (this.adminauthService.loggedIn()) {
            return true;
        } else {
            // this.router.navigate(['/home']);
            // console.log('false');
            return false;
        }
    }
}