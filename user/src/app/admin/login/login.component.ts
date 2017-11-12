import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AdminAuthService } from '../../services/admin-auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

import { AdminAuthGuard } from '../../guards/admin-auth.guard';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../admin/admin.component.css']
})
export class LoginComponent implements OnInit {

  adminname: string;
  password: string;
  constructor(private router: Router, private title: Title, private authService: AdminAuthService,
    private flash: FlashMessagesService, private adminAuth: AdminAuthGuard) { }

    ngOnInit() {
      this.title.setTitle('Login');
      if (this.authService.loggedIn() === true) {
        this.router.navigate(['/admin/orders']);
      }
  }
  adminLoginFormSubmit() {
    const admin = {
      adminname: this.adminname,
      password: this.password
    };
        // this.router.navigate(['/admin/add-admin']);
    this.authService.authenticateAdmin(admin).subscribe(data => {
      if (data.success) {

        this.authService.storeAdminData(data.token, data.admin);
        this.flash.show('You are logged in !', {
          cssClass: 'alert-success',
          timeout: 5000
        });
        this.router.navigate(['/admin/orders']);
      }else {
        this.flash.show(data.msg, {
          cssClass: 'alert-danger',
          timeout: 5000
        });
        this.router.navigate(['/admin/login']);
      }
    });

  }

}
