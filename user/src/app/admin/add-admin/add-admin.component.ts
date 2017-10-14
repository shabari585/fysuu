import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NgModel } from '@angular/forms';
import { Router } from "@angular/router";
import { Title } from '@angular/platform-browser';

import { AdminServicesService } from "../../services/admin-services.service";
import { ValidateService } from "../../services/validate.service";
import { AdminAuthService } from "../../services/admin-auth.service";
import { FlashMessagesService } from "angular2-flash-messages";
declare var $: any;

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['../admin/admin.component.css']
})
export class AddAdminComponent implements OnInit {

  adminname: String;
  password: String;

  constructor(private getMenu: AdminServicesService, private validateService: ValidateService, private flashMessage: FlashMessagesService, private router: Router, private authService: AdminAuthService, private title: Title) { }


  ngOnInit() {
    // Set title
    this.title.setTitle('Add Admin - Admin');
  }

  onAddAdminSubmit() {
    const admin = {
      adminname: this.adminname,
      password: this.password
    }
    // RequiredFields
    if (!this.validateService.validateInput(this.adminname) && !this.validateService.validateInput(this.password)) {
      this.flashMessage.show('Fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }else{

      // Register Admin
      this.authService.registerAdmin(admin).subscribe(data => {
        alert('else');
        if (data.success) {
          this.flashMessage.show('Registered !', { cssClass: 'alert-success', timeout: 3000 });
          // this.router.navigate(['/login']);
        } else {
          this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
          this.router.navigate(['/add-admin']);
        }
      });
    }
  }

}
