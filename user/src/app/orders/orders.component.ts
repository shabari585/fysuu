import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AdminAuthService } from '../services/admin-auth.service';
import { AdminServicesService } from '../services/admin-services.service';
declare var $: any;

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css', '../settings/settings.component.css']
})
export class OrdersComponent implements OnInit {

  all_orders;
  users_orders = [];
  users_orders_all = [];


  userEmail: string;
  userName: string;
  companyName: string;
  userMobile: string;
  userId: string;
  orders_exist = false;
  user_today= [];
  user_day= [];

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private adminAuth: AdminAuthService , private title: Title, private getadMenu: AdminServicesService, private authService: AuthService) { }

  ngOnInit() {
    this.title.setTitle('Settings: Orders');

    const user = this.authService.getUserFromLocal();
    const user_parsed = JSON.parse(user);
    this.userEmail = user_parsed.email;
    this.userName = user_parsed.name;
    this.companyName = user_parsed.company_name;
    this.userMobile = user_parsed.mobile;
    this.userId = user_parsed.id;

    this.getadMenu.getOrders().subscribe(res => {
      this.all_orders = res.msg;
      // console.log(this.all_orders);
      this.all_orders.forEach(element => {
        // console.log(element.order.user_id);
        if (this.userId === element.order.user_id) {
          this.users_orders.push(element.order);
        }
      });
      console.log(this.users_orders.length);
      this.users_orders.forEach(element => {
        // console.log(element.order);
        if (element.order.next_days != null) {
          // console.log(element.order.next_days);
          if (element.order.next_days.day_one != null) {
            // console.log(element.order.next_days.day_one.menu);
            this.user_day.push(element.order.next_days.day_one.menu);
          }
          if (element.order.next_days.day_two != null) {
            // console.log(element.order.next_days.day_two.menu);
            this.user_day.push(element.order.next_days.day_two.menu);
          }
          if (element.order.next_days.day_three != null) {
            // console.log(element.order.next_days.day_three.menu);
            this.user_day.push(element.order.next_days.day_three.menu);
          }
          if (element.order.next_days.day_four != null) {
            // console.log(element.order.next_days.day_four.menu);
            this.user_day.push(element.order.next_days.day_four.menu);
          }
          if (element.order.next_days.day_five != null) {
            // console.log(element.order.next_days.day_five.menu);
            this.user_day.push(element.order.next_days.day_five.menu);
          }
        }

        const today_json = {order_id: element.order_id, order: element.order.today};
        this.user_today.push(today_json);
      });
      if (this.users_orders.length > 0) {
        this.orders_exist = true;
      }
    });
    // console.log(this.user_today);
    console.log(this.user_day);
  }

  contains(a, obj) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] === obj) {
          return true;
      }
  }
  return false;
  }

}
