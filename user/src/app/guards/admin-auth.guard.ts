import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AdminAuthService } from "../services/admin-auth.service";

@Injectable()
export class AdminAuthGuard implements CanActivate {
    constructor(private adminauthService: AdminAuthService, private router: Router) { }

    canActivate() {
        // return true;
        if (this.adminauthService.loggedIn() == true) {
            return true;
        } else {
            this.router.navigateByUrl('/admin/login');
            // console.log('false');
            return false;
        }
    }
}