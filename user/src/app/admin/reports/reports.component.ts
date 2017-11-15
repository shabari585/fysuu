import { Component, OnInit} from '@angular/core';
import { DatePipe } from '@angular/common';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { IMyDpOptions } from 'mydatepicker';
import * as moment from 'moment';

import { AdminServicesService } from '../../services/admin-services.service';

declare var $: any;

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css', '../admin/admin.component.css'],
})
export class ReportsComponent implements OnInit {
  // public fromDate: any = { date: { year: 2017, month: 10, day: 1 } };
  // public toDate: any = { date: { year: 2017, month: 10, day: 4 } };

  public fromDate; toDate;

  allTodayOrders = [];
  allNextDayOrders = [];
  orders_of_these_sc_days = [];
  today_all_items = [];

  sc_all_items = [];
  un_items = [];
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
  };
  constructor(private getMenu: AdminServicesService, private router: Router, private title: Title, private datePipe: DatePipe) { }
  ngOnInit() {
    this.title.setTitle('Reports');
    // Get orders
    this.getMenu.getOrders().subscribe( res => {
      if (res.success) {
        // All today orders within brought orders
        res.msg.forEach(element => {
          if (element.order.order !== null || element.order.order !== undefined) {
            // push today orders
            this.allTodayOrders.push(element.order.order.today);
            // push next day orders
            this.allNextDayOrders.push(element.order.order.next_days);
          }
        });
      }
    });
  }
  datesUpdated() {
    const datesArray: any = [];
    let unique_items = [];
    let filter_array = [];
    this.un_items = [];
    let all_items = [];
    const orders_of_todays: any = [];
    let orders_of_next_days: any = [];
    const for_from = this.fromDate.date.month + '/' +  this.fromDate.date.day + '/' + this.fromDate.date.year;
    const for_to = this.toDate.date.month + '/' + this.toDate.date.day + '/' + this.toDate.date.year;

    const from = this.datePipe.transform(for_from, 'fullDate');
    const to = this.datePipe.transform(for_to, 'fullDate');
    const mfrom = moment(this.datePipe.transform(from, 'shortDate'));
    const mto = moment(this.datePipe.transform(to, 'shortDate'));
    const new_from = mto.diff(mfrom, 'days');
    for (let i = 1; i <= new_from; i++) {
      const ph = mfrom;
      datesArray.push(this.datePipe.transform(ph.add(1, 'days'), 'fullDate'));
    }
    // console.log(datesArray);
    datesArray.forEach(element => {
      // Today dates
      this.allTodayOrders.forEach(to_e => {
        if (to_e !== null) {
          // console.log(to_e);
          if (to_e.date === element) {
            orders_of_todays.push(to_e);
          }
        }
      });
      // Next days orders
      this.allNextDayOrders.forEach(n_e => {
        if (n_e !== null) {
          // day_one
          if (n_e.day_one !== null) {
            if (n_e.day_one.date === element) {
              orders_of_next_days.push(n_e.day_one);
            }
          }
          // day_two
          if (n_e.day_two != null) {
            if (n_e.day_two.date === element) {
              orders_of_next_days.push(n_e.day_two);
            }
          }
          // day_three
          if (n_e.day_three != null) {
            if (n_e.day_three.date === element) {
              orders_of_next_days.push(n_e.day_three);
            }
          }
          // day_four
          if (n_e.day_four != null) {
            if (n_e.day_four.date === element) {
              orders_of_next_days.push(n_e.day_four);
            }
          }
          // day_five
          if (n_e.day_five != null) {
            if (n_e.day_five.date === element) {
              orders_of_next_days.push(n_e.day_five);
            }
          }
          // day_six
          if (n_e.day_six != null) {
            if (n_e.day_six.date === element) {
              orders_of_next_days.push(n_e.day_six);
            }
          }
        }
      });

    });
    orders_of_next_days.forEach(t => {
      // iterate through t.menu
      t.menu.forEach(menu_el => {
        all_items.push(menu_el.item_name);
        const p_ar = all_items;
        filter_array = p_ar.filter(function (item, pos) {
          return p_ar.indexOf(item) === pos;
        });
        // for each object in unique_items
        // tslint:disable-next-line:radix
        const j_obj = [menu_el.item_name, parseInt(t.numOfTimes)];
        unique_items.push(j_obj);
      });
    });

    this.un_items = [];

    if (this.un_items.length < 1) {
      filter_array.forEach(far => {
        const js = {item_name: far, num_of_times: 0};
        this.un_items.push(js);
      });
    }
    unique_items.forEach(uu => {
      this.un_items.forEach(unq => {
        if (unq.item_name === uu[0]) {
          unq.num_of_times = unq.num_of_times + uu[1];
        }
      });
    });
    console.log(this.un_items);
    all_items.length = 0;
    all_items = [];
    filter_array.length = 0;
    filter_array = [];
    unique_items = [];
    unique_items.length = 0;
    orders_of_next_days = [];
    orders_of_next_days.length = 0;
  }

}
