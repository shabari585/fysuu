import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import * as moment from 'moment';
// import { Order } from "./models/order";
// import { OrderedMenu } from "./models/ordered-menu";

import { AdminServicesService } from '../../services/admin-services.service';
import { AdminAuthService } from '../../services/admin-auth.service';

declare var $: any;

@Component({
  selector: 'app-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css', '../admin/admin.component.css']
})
export class AdminOrdersComponent implements OnInit {

  total_orders: any;
  next_days: any;
  day_one_orders = [];
  day_two_orders = [];
  day_three_orders = [];
  day_four_orders = [];
  day_five_orders = [];
  day_six_orders = [];

  today_total_orders = [];
  day_one_total_orders = [];
  day_two_total_orders = [];
  day_three_total_orders = [];
  day_four_total_orders = [];
  day_five_total_orders = [];
  day_six_total_orders = [];

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

  disp_today_one: any;
  disp_day_one: any;
  disp_day_two: any;
  disp_day_three: any;
  disp_day_four: any;
  disp_day_five: any;
  disp_day_six: any;

  today_orders_status: any;
  day_one_status: any;

  p_h_order = [];

  p_h_order_id;
  p_h_user_name;
  p_h_user_email;
  p_h_user_mobile;
  p_h_address;
  p_h_num_times;
  p_h_tab_one_times;
  p_h_tab_two_times;
  p_h_tab_three_times;
  p_h_time_slot;
  today_active= false;
  now_exists = false;
  p_h_one_time_slot;
  p_h_two_time_slot;
  p_h_three_time_slot;

  today_orders = [];

  // tslint:disable-next-line:max-line-length
  constructor(private getMenu: AdminServicesService, private router: Router, private title: Title, private datePipe: DatePipe, private adminAuth: AdminAuthService) { }

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
    // this.p_day_six = this.datePipe.transform(this.day_six, 'fullDate');

    this.disp_today_one = this.p_today_one;
    this.disp_day_one = this.p_day_one;
    this.disp_day_two = this.p_day_two;
    this.disp_day_three = this.p_day_three;
    this.disp_day_four = this.p_day_four;
    this.disp_day_five = this.p_day_five;
    // this.disp_day_six = this.p_day_six;

    // Get orders
    this.getMenu.getOrders().subscribe(res => {

      this.total_orders = res.msg;
      this.total_orders.forEach(element => {

        if (element.order.order) {
          // console.log(element.order);
          const user_id = element.order.user_id;
          const order_time = element.order.order_time;
          const order_id = element.order.order_id;

          this.getMenu.getUserFromId(user_id).subscribe(ress => {
            if (ress.success) {
              const user = ress.msg;
              const username = user[0].name;
              const user_mobile = user[0].mobile;
              const user_email = user[0].email;
              // Today
              if (element.order.order.today !== null) {
                if (this.p_today_one === element.order.order.today.date) {
                  this.now_exists = true;
                  // Add these to today orders
                  // tab_one, tab_two,tab_three
                  // tslint:disable-next-line:max-line-length
                  const iind = { user_id: user_id, user_name: username, user_mobile: user_mobile, user_email: user_email, order_id: order_id, order_time: order_time, delivery_address: element.order.delivery_address, order: element.order.order.today, payment_type: element.order.payment_method };
                  this.today_orders.push(iind);
                }
              }
              // Next Days
              this.next_days = element.order.order.next_days;
              for (const key in this.next_days) {
                if (this.next_days.hasOwnProperty(key)) {
                  const e = this.next_days[key];
                  if (e != null) {
                    switch (e.date) {

                      case this.p_today_one:
                        // console.log(e.date);

                        // tslint:disable-next-line:max-line-length
                        const iind = { user_id: user_id, user_name: username, user_mobile: user_mobile, user_email: user_email, order_id: order_id, order_time: order_time, delivery_address: element.order.delivery_address, order: e, payment_type: element.order.payment_method };
                        this.today_total_orders.push(iind);

                      break;

                      case this.p_day_one:
                        this.day_one_orders.push(e);

                        // let order = this.day_one_orders;
                        // tslint:disable-next-line:max-line-length
                        const ind = { user_id: user_id, user_name: username, user_mobile: user_mobile, user_email: user_email, order_id: order_id, order_time: order_time, delivery_address: element.order.delivery_address, order: e, payment_type: element.order.payment_method };
                        this.day_one_total_orders.push(ind);
                        break;
                      case this.p_day_two:
                        this.day_two_orders.push(e);

                        // tslint:disable-next-line:max-line-length
                        const indd = { user_id: user_id, user_name: username, user_mobile: user_mobile, user_email: user_email, order_id: order_id, order_time: order_time, delivery_address: element.order.delivery_address, order: e, payment_type: element.order.payment_method };
                        this.day_two_total_orders.push(indd);


                        break;
                      case this.p_day_three:
                        this.day_three_orders.push(e);

                        // tslint:disable-next-line:max-line-length
                        const inddd = { user_id: user_id, user_name: username, user_mobile: user_mobile, user_email: user_email, order_id: order_id, order_time: order_time, delivery_address: element.order.delivery_address, order: e, payment_type: element.order.payment_method};
                        this.day_three_total_orders.push(inddd);

                        break;
                      case this.p_day_four:
                        this.day_four_orders.push(e);

                        // tslint:disable-next-line:max-line-length
                        const indddd = { user_id: user_id, user_name: username, user_mobile: user_mobile, user_email: user_email, order_id: order_id, order_time: order_time, delivery_address: element.order.delivery_address, order: e, payment_type: element.order.payment_method };
                        this.day_four_total_orders.push(indddd);

                        break;
                      case this.p_day_five:
                        this.day_five_orders.push(e);

                        // tslint:disable-next-line:max-line-length
                        const innddd = { user_id: user_id, user_name: username, user_mobile: user_mobile, user_email: user_email, order_id: order_id, order_time: order_time, delivery_address: element.order.delivery_address, order: e, payment_type: element.order.payment_method };
                        this.day_five_total_orders.push(innddd);

                        break;
                      case this.p_day_six:
                        this.day_six_orders.push(e);

                        // tslint:disable-next-line:max-line-length
                        const iinddd = { user_id: user_id, user_name: username, user_mobile: user_mobile, user_email: user_email, order_id: order_id, order_time: order_time, delivery_address: element.order.delivery_address, order: e, payment_type: element.order.payment_method};
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

  getUserfromUserId(id): any {
    // return
    let user: any;
    this.getMenu.getUserFromId(id).subscribe(res => {
        if (res.success) {
          user = res.msg;
        }else {
          user = 'No';
        }
    });

    return user;
  }

  ViewDetails(today, order_id, date) {
    this.p_h_order = [];
    // Display the dark back
    $('.db').css({'display': 'flex'});
    switch (today) {
      case 'today':
      this.today_active = true;
      // Get order with order id
        console.log(this.today_orders);
        // place_holder_order = this.today_orders;
      // this.p_today_one;
      this.today_orders.forEach(element => {
        console.log(element);
        if (order_id === element.order_id) {
          // console.log(element);
          this.p_h_order_id = element.order_id;
          this.p_h_user_name = element.user_name;
          this.p_h_user_email = element.user_email;
          this.p_h_user_mobile = element.user_mobile;
          this.p_h_address = element.delivery_address;
          this.p_h_time_slot = element.order.timeSlot;
          // this.p_h_num_times = element.order.numOfTimes;
          if (element.order.tab_one) {
            if (element.order.tab_one !== undefined || element.order.tab_one !== null) {
              this.p_h_order.push(element.order.tab_one.name);
              this.p_h_tab_one_times = element.order.tab_one.num_of_items;
              this.p_h_one_time_slot = element.order.tab_one.time_slot;
            }
          }
          if (element.order.tab_two) {
            if (element.order.tab_two !== undefined || element.order.tab_two !== null) {
              this.p_h_order.push(element.order.tab_two.name);
              this.p_h_tab_two_times = element.order.tab_two.num_of_items;
              this.p_h_two_time_slot = element.order.tab_two.time_slot;
            }
          }
          if (element.order.tab_three) {
            if (element.order.tab_three !== undefined || element.order.tab_three !== null) {
              this.p_h_order.push(element.order.tab_three.name);
              this.p_h_tab_three_times = element.order.tab_three.num_of_items;
              this.p_h_three_time_slot = element.order.tab_three.time_slot;
            }
          }
        }
      });

        break;
        case 'today_one':
        this.today_active = false;

        this.day_one_total_orders.forEach(element => {

          if (order_id === element.order_id) {
            // console.log(element);
            this.p_h_order_id = element.order_id;
            this.p_h_user_name = element.user_name;
            this.p_h_user_email = element.user_email;
            this.p_h_user_mobile = element.user_mobile;
            this.p_h_address = element.delivery_address;
            this.p_h_num_times = element.order.numOfTimes;
            this.p_h_time_slot = element.order.timeSlot;
            // console.log('kk' + element.order.numOfTimes);
            element.order.menu.forEach(el => {
              this.p_h_order.push(el);
            });
          }
        });

        break;
        case 't_today_one':
        this.today_active = false;

        this.today_total_orders.forEach(element => {
          console.log(element);
          if (order_id === element.order_id) {
            // console.log(element);
            this.p_h_order_id = element.order_id;
            this.p_h_user_name = element.user_name;
            this.p_h_user_email = element.user_email;
            this.p_h_user_mobile = element.user_mobile;
            this.p_h_address = element.delivery_address;
            this.p_h_num_times = element.order.numOfTimes;
            this.p_h_time_slot = element.order.timeSlot;
            // console.log('kk' + element.order.numOfTimes);
            element.order.menu.forEach(el => {
              this.p_h_order.push(el);
            });
          }
        });

        break;
        case 'day_one':
        this.today_active = false;

        this.day_one_total_orders.forEach(element => {

          if (order_id === element.order_id) {
            // console.log(element);
            this.p_h_order_id = element.order_id;
            this.p_h_user_name = element.user_name;
            this.p_h_user_email = element.user_email;
            this.p_h_user_mobile = element.user_mobile;
            this.p_h_address = element.delivery_address;
            this.p_h_num_times = element.order.numOfTimes;
            this.p_h_time_slot = element.order.timeSlot;
            // console.log('kk' + element.order.numOfTimes);
            element.order.menu.forEach(el => {
              this.p_h_order.push(el);
            });
          }
        });

        break;
        case 'day_two':
        this.today_active = false;
        this.day_two_total_orders.forEach(element => {

          console.log(element.order_id);

          if (order_id === element.order_id) {
            // console.log(element);
            this.p_h_order_id = element.order_id;
            this.p_h_user_name = element.user_name;
            this.p_h_user_email = element.user_email;
            this.p_h_user_mobile = element.user_mobile;
            this.p_h_address = element.delivery_address;
            this.p_h_num_times = element.order.numOfTimes;
            this.p_h_time_slot = element.order.timeSlot;
            // console.log('kk' + element.order.numOfTimes);
            element.order.menu.forEach(el => {
              this.p_h_order.push(el);

            });
          }
        });

        break;
        case 'day_three':
        this.today_active = false;
        this.day_three_total_orders.forEach(element => {

          if (order_id === element.order_id) {
            // console.log(element);
            this.p_h_order_id = element.order_id;
            this.p_h_user_name = element.user_name;
            this.p_h_user_email = element.user_email;
            this.p_h_user_mobile = element.user_mobile;
            this.p_h_address = element.delivery_address;
            this.p_h_num_times = element.order.numOfTimes;
            this.p_h_time_slot = element.order.timeSlot;
            // console.log('kk' + element.order.numOfTimes);
            element.order.menu.forEach(el => {
              this.p_h_order.push(el);
            });
          }
        });
        break;
        case 'day_four':
        this.today_active = false;
        this.day_four_total_orders.forEach(element => {

          if (order_id === element.order_id) {
            // console.log(element);
            this.p_h_order_id = element.order_id;
            this.p_h_user_name = element.user_name;
            this.p_h_user_email = element.user_email;
            this.p_h_user_mobile = element.user_mobile;
            this.p_h_address = element.delivery_address;
            this.p_h_num_times = element.order.numOfTimes;
            this.p_h_time_slot = element.order.timeSlot;
            // console.log('kk' + element.order.numOfTimes);
            element.order.menu.forEach(el => {
              this.p_h_order.push(el);

            });
          }
        });
        break;
        case 'day_five':
        this.today_active = false;
        this.day_five_total_orders.forEach(element => {

          if (order_id === element.order_id) {
            // console.log(element);
            this.p_h_order_id = element.order_id;
            this.p_h_user_name = element.user_name;
            this.p_h_user_email = element.user_email;
            this.p_h_user_mobile = element.user_mobile;
            this.p_h_address = element.delivery_address;
            this.p_h_num_times = element.order.numOfTimes;
            this.p_h_time_slot = element.order.timeSlot;
            element.order.menu.forEach(el => {
              this.p_h_order.push(el);
            });
          }
        });

        break;
      default:
        break;
    }
    switch (this.p_h_time_slot) {
      case 'slot_one':
        this.p_h_time_slot = '12:00 PM - 12:45 PM';
        break;
      case 'slot_two':
        this.p_h_time_slot = '12:45 PM - 1:30 PM';
        break;
      case 'slot_three':
        this.p_h_time_slot = '1:30 PM - 2:15 PM';
        break;
      case 'slot_four':
        this.p_h_time_slot = '2:15 PM - 3:00 PM';
        break;
      default:
        break;
    }
  }
  closedb() {
    $('.db').hide();
  }
}
