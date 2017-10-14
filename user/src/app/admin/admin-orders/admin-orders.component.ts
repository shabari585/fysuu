import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NgModel } from '@angular/forms';
import { Router } from "@angular/router";
import { Title } from '@angular/platform-browser';
import * as moment from 'moment';
// import { Order } from "./models/order";
// import { OrderedMenu } from "./models/ordered-menu";

import { AdminServicesService } from "../../services/admin-services.service";

declare var $: any;

@Component({
  selector: 'app-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css','../admin/admin.component.css']
})
export class AdminOrdersComponent implements OnInit {

  total_orders:any;
  next_days:any;
  day_one_orders:any=[];
  day_two_orders:any=[];
  day_three_orders:any=[];
  day_four_orders:any=[];
  day_five_orders:any=[];
  day_six_orders:any=[];
  // today_orders = [];

  today_total_orders:any=[];
  day_one_total_orders:any=[];
  day_two_total_orders:any=[];
  day_three_total_orders:any=[];
  day_four_total_orders:any=[];
  day_five_total_orders:any=[];
  day_six_total_orders:any=[];

  today_one = moment();
  day_one = moment().add(1, 'days');
  day_two = moment().add(2, 'days');
  day_three = moment().add(3, 'days');
  day_four = moment().add(4, 'days');
  day_five = moment().add(5, 'days');
  day_six = moment().add(6, 'days');
  day_seven = moment().add(7, 'days');

  p_today_one: any;
  p_day_one: any;
  p_day_two: any;
  p_day_three: any;
  p_day_four: any;
  p_day_five: any;
  p_day_six: any;
  p_day_seven: any;

  disp_today_one:any;
  disp_day_one:any;
  disp_day_two:any;
  disp_day_three:any;
  disp_day_four:any;
  disp_day_five:any;
  disp_day_six:any;

  today_orders_status:any;
  day_one_status:any;

  p_h_order = [];

  p_h_order_id;
  p_h_user_name;
  p_h_user_email;
  p_h_user_mobile;
  p_h_address;
  p_h_num_times;
  
  

  today_orders:any=[];

  constructor(private getMenu: AdminServicesService, private router: Router, private title: Title, private datePipe: DatePipe) { }

  ngOnInit() {
    // alert(this.today_one);
    // Set title
    this.title.setTitle('View Orders');

    // Dates for next seven days
    this.p_today_one = this.datePipe.transform(this.today_one, 'fullDate');
    this.p_day_one = this.datePipe.transform(this.day_one, 'fullDate');
    this.p_day_two = this.datePipe.transform(this.day_two, 'fullDate');
    this.p_day_three = this.datePipe.transform(this.day_three, 'fullDate');
    this.p_day_four = this.datePipe.transform(this.day_four, 'fullDate');
    this.p_day_five = this.datePipe.transform(this.day_five, 'fullDate');
    this.p_day_six = this.datePipe.transform(this.day_six, 'fullDate');
    console.log(this.p_today_one);

    this.disp_today_one = this.p_today_one;
    this.disp_day_one = this.p_day_one;
    this.disp_day_two = this.p_day_two;
    this.disp_day_three = this.p_day_three;
    this.disp_day_four = this.p_day_four;
    this.disp_day_five = this.p_day_five;
    this.disp_day_six = this.p_day_six;

    // Get orders
    this.getMenu.getOrders().subscribe(res=>{

      this.total_orders = res.msg;
      this.total_orders.forEach(element => {

        if(element.order.order){
          // console.log(element.order);
          let user_id = element.order.user_id;
          let order_time = element.order.order_time;
          let order_id = element.order.order_id;

          this.getMenu.getUserFromId(user_id).subscribe(res => {
            if (res.success) {
              let user = res.msg;
              let username = user[0].name;
              let user_mobile = user[0].mobile;
              let user_email = user[0].email;

              // Today
              if (this.p_today_one == element.order.order.today.date) {
                // Add these to today orders
                // tab_one, tab_two,tab_three
                let iind = { user_id: user_id, user_name:username,user_mobile:user_mobile,user_email:user_email, order_id: order_id, order_time: order_time, delivery_address: element.order.delivery_address, order: element.order.order.today, payment_type: element.order.payment_method };
                this.today_orders.push(iind);
                // console.log('see');
                // console.log(iind);
              }
              // Next Days
              this.next_days = element.order.order.next_days;
              for (var key in this.next_days) {
                if (this.next_days.hasOwnProperty(key)) {
                  var e = this.next_days[key];
                  
                  if (e != null) {
                    // console.log(e.date);
                    switch (e.date) {

                      case this.p_today_one:
                        console.log(e.date);

                        let iind = { user_id: user_id, user_name: username, user_mobile: user_mobile, user_email: user_email, order_id: order_id, order_time: order_time, delivery_address: element.order.delivery_address, order: e, payment_type: element.order.payment_method };
                        this.today_orders.push(iind);
                        // console.log('now today');
                        // console.log(iind);

                      break;

                      case this.p_day_one:
                        this.day_one_orders.push(e);

                        // let order = this.day_one_orders;
                        let ind = { user_id: user_id, user_name: username, user_mobile: user_mobile, user_email: user_email, order_id: order_id, order_time: order_time, delivery_address: element.order.delivery_address, order: e, payment_type: element.order.payment_method };
                        this.day_one_total_orders.push(ind);

                        // console.log(ind);

                        break;
                      case this.p_day_two:
                        this.day_two_orders.push(e);

                        let indd = { user_id: user_id, user_name: username, user_mobile: user_mobile, user_email: user_email, order_id: order_id, order_time: order_time, delivery_address: element.order.delivery_address, order: e, payment_type: element.order.payment_method };
                        this.day_two_total_orders.push(indd);


                        break;
                      case this.p_day_three:
                        this.day_three_orders.push(e);

                        let inddd = { user_id: user_id, user_name: username, user_mobile: user_mobile, user_email: user_email, order_id: order_id, order_time: order_time, delivery_address: element.order.delivery_address, order: e, payment_type: element.order.payment_method};
                        this.day_three_total_orders.push(inddd);

                        break;
                      case this.p_day_four:
                        this.day_four_orders.push(e);

                        let indddd = { user_id: user_id, user_name: username, user_mobile: user_mobile, user_email: user_email, order_id: order_id, order_time: order_time, delivery_address: element.order.delivery_address, order: e, payment_type: element.order.payment_method };
                        this.day_four_total_orders.push(indddd);

                        break;
                      case this.p_day_five:
                        this.day_five_orders.push(e);

                        let innddd = { user_id: user_id, user_name: username, user_mobile: user_mobile, user_email: user_email, order_id: order_id, order_time: order_time, delivery_address: element.order.delivery_address, order: e, payment_type: element.order.payment_method };
                        this.day_five_total_orders.push(innddd);

                        break;
                      case this.p_day_six:
                        this.day_six_orders.push(e);

                        let iinddd = { user_id: user_id, user_name: username, user_mobile: user_mobile, user_email: user_email, order_id: order_id, order_time: order_time, delivery_address: element.order.delivery_address, order: e, payment_type: element.order.payment_method};
                        this.day_six_total_orders.push(iinddd);

                        break;
                      default:
                        break;
                    }
                  }
                }
              }

            } else {
              // user = 'No';
            }
          });
          // console.log(this.day_one_total_orders);
        }
      });
    });
  
  }

  getUserfromUserId(id):any{
    // return 
    let user:any;
    this.getMenu.getUserFromId(id).subscribe(res=>{
        if(res.success){
          user = res.msg;
        }else{
          user = 'No';
        }
    });

    return user;
  }
  
  ViewDetails(today,order_id,date){
    this.p_h_order = [];
    // Display the dark back
    $('.db').css({'display':'flex'});
    switch (today) {
      case 'today':
      // Get order with order id
        console.log(this.today_orders);
        // place_holder_order = this.today_orders;
      // this.p_today_one;
      this.today_orders.forEach(element => {
        // console.log(element.order_id);
        if (order_id == element.order_id){
          // console.log(element);
          this.p_h_order_id = element.order_id;
          this.p_h_user_name = element.user_name;
          this.p_h_user_email = element.user_email;
          this.p_h_user_mobile = element.user_mobile;
          this.p_h_address = element.delivery_address;
          this.p_h_num_times = element.order.numOfTimes;
          console.log('kk' + element.order.numOfTimes);
          element.order.menu.forEach(el => {
              this.p_h_order.push(el);
              // console.log(this.p_h_order);
          });
        }
      });



        break;
        case 'day_one':

        this.day_one_total_orders.forEach(element => {
        
          if (order_id == element.order_id) {
            // console.log(element);
            this.p_h_order_id = element.order_id;
            this.p_h_user_name = element.user_name;
            this.p_h_user_email = element.user_email;
            this.p_h_user_mobile = element.user_mobile;
            this.p_h_address = element.delivery_address;
            this.p_h_num_times = element.order.numOfTimes;
            // console.log('kk' + element.order.numOfTimes);
            element.order.menu.forEach(el => {
              this.p_h_order.push(el);

            });
          }
        });

        break;
        case 'day_two':
        console.log(this.day_two_total_orders);
        this.day_two_total_orders.forEach(element => {

          console.log(element.order_id);

          if (order_id == element.order_id) {
            // console.log(element);
            this.p_h_order_id = element.order_id;
            this.p_h_user_name = element.user_name;
            this.p_h_user_email = element.user_email;
            this.p_h_user_mobile = element.user_mobile;
            this.p_h_address = element.delivery_address;
            this.p_h_num_times = element.order.numOfTimes;
            // console.log('kk' + element.order.numOfTimes);
            element.order.menu.forEach(el => {
              this.p_h_order.push(el);

            });
          }
        });
        
      // this.p_day_two;

        
        break;
        case 'day_three':
        this.day_three_total_orders.forEach(element => {

          if (order_id == element.order_id) {
            // console.log(element);
            this.p_h_order_id = element.order_id;
            this.p_h_user_name = element.user_name;
            this.p_h_user_email = element.user_email;
            this.p_h_user_mobile = element.user_mobile;
            this.p_h_address = element.delivery_address;
            this.p_h_num_times = element.order.numOfTimes;
            // console.log('kk' + element.order.numOfTimes);
            element.order.menu.forEach(el => {
              this.p_h_order.push(el);
            });
          }
        });
        
      // this.p_day_three;

        
        break;
        case 'day_four':
        // console.log(this.day_four_total_orders);
        this.day_four_total_orders.forEach(element => {

          if (order_id == element.order_id) {
            // console.log(element);
            this.p_h_order_id = element.order_id;
            this.p_h_user_name = element.user_name;
            this.p_h_user_email = element.user_email;
            this.p_h_user_mobile = element.user_mobile;
            this.p_h_address = element.delivery_address;
            this.p_h_num_times = element.order.numOfTimes;
            // console.log('kk' + element.order.numOfTimes);
            element.order.menu.forEach(el => {
              this.p_h_order.push(el);

            });
          }
        });

      // this.p_day_four;
        
        
        break;
        case 'day_five':
        // console.log(this.day_five_total_orders);
        this.day_five_total_orders.forEach(element => {

          if (order_id == element.order_id) {
            // console.log(element);
            this.p_h_order_id = element.order_id;
            this.p_h_user_name = element.user_name;
            this.p_h_user_email = element.user_email;
            this.p_h_user_mobile = element.user_mobile;
            this.p_h_address = element.delivery_address;
            this.p_h_num_times = element.order.numOfTimes;
            // console.log('kk' + element.order.numOfTimes);
            element.order.menu.forEach(el => {
              this.p_h_order.push(el);

            });
          }
        });

      // this.p_day_five;
        
        
        break;
        case 'day_six':
        console.log(this.day_six_total_orders);
        this.day_six_total_orders.forEach(element => {

          if (order_id == element.order_id) {
            // console.log(element);
            this.p_h_order_id = element.order_id;
            this.p_h_user_name = element.user_name;
            this.p_h_user_email = element.user_email;
            this.p_h_user_mobile = element.user_mobile;
            this.p_h_address = element.delivery_address;
            this.p_h_num_times = element.order.numOfTimes;
            // console.log('kk' + element.order.numOfTimes);
            element.order.menu.forEach(el => {
              this.p_h_order.push(el);

            });
          }
        });

      // this.p_day_six;
        
        
        break;
    
      default:
        break;
    }
  }
  
  closedb(){
    $('.db').hide(); 
  }
}
