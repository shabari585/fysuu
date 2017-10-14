import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RouterModule } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { AdminServicesService } from "../services/admin-services.service";
declare var $: any;

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css','../settings/settings.component.css']
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
  orders_exist:boolean = false;

  constructor(private router: Router, private title: Title, private getadMenu: AdminServicesService, private authService: AuthService) { }

  ngOnInit() {
    this.title.setTitle('Settings: Orders');


    let user = this.authService.getUserFromLocal();
    let user_parsed = JSON.parse(user);
    this.userEmail = user_parsed.email;
    this.userName = user_parsed.name;
    this.companyName = user_parsed.company_name;
    this.userMobile = user_parsed.mobile;
    this.userId = user_parsed.id;

    this.getadMenu.getOrders().subscribe(res=>{
      this.all_orders = res.msg;
      console.log(this.all_orders);
      this.all_orders.forEach(element => {
        // console.log(element.order.user_id);
        if (this.userId == element.order.user_id){
          this.users_orders.push(element.order);
        }
      });
      console.log(this.users_orders);
      if(this.users_orders.length>0){
        this.orders_exist = true;
      }
    });
  }

}
