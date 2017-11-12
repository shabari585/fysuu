import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AdminServicesService } from '../../services/admin-services.service';
import { GetMenuService } from '../../services/get-menu.service';
import * as moment from 'moment';

@Component({
  selector: 'app-soldout',
  templateUrl: './soldout.component.html',
  styleUrls: ['./soldout.component.css']
})
export class SoldoutComponent implements OnInit {

  tab_one_checked: boolean;
  tab_two_checked: boolean;
  tab_three_checked: boolean;

  // tslint:disable-next-line:max-line-length
  constructor(private getMenu: AdminServicesService, private flash: FlashMessagesService , private router: Router, private title: Title, private getMenuService: GetMenuService) { }

  ngOnInit() {
    this.title.setTitle('Update Soldout');

    this.getMenuService.getTabStatus('tab_one').subscribe(res => {
      if (res.success) {
        this.tab_one_checked = true;
      }else {
        this.tab_one_checked = false;
      }
    });
    this.getMenuService.getTabStatus('tab_two').subscribe(res => {
      if (res.success) {
        this.tab_two_checked = true;
      }else {
        this.tab_two_checked = false;
      }
    });
    this.getMenuService.getTabStatus('tab_three').subscribe(res => {
      if (res.success) {
        this.tab_three_checked = true;
      }else {
        this.tab_three_checked = false;
      }
    });

  }
  onCheckChange(tab, event) {
      switch (tab) {
        case 'tab_one':
          // Update tab_one
          this.getMenuService.postTabStatus(tab, event).subscribe(res => {
            console.log(res);
            if (res.success) {
              this.flash.show('Success !', {
                cssClass: 'alert-success',
                timeout: 5000
              });
            }
          });
          break;
          case 'tab_two':
          this.getMenuService.postTabStatus(tab, event).subscribe(res => {
            if (res.success) {
              this.flash.show('Success !', {
                cssClass: 'alert-success',
                timeout: 5000
              });
            }
          });
          break;
          case 'tab_three':
          this.getMenuService.postTabStatus(tab, event).subscribe(res => {
            if (res.success) {
              this.flash.show('Success!', {
                cssClass: 'alert-success',
                timeout: 5000
              });
            }
          });
          break;
        default:
          break;
      }
  }

}
