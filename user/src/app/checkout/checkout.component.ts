import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppComponent } from "../app.component";
import { Router, RouterModule } from "@angular/router";
import { AuthService } from "../services/auth.service";
import * as shortid from 'shortid';
import * as moment from 'moment';
declare var $: any;

// var shortid = require('shortid');

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css','../menu/menu.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private authService: AuthService, private title: Title,private router:Router) {}

  addresses= [];
  userId: string;
  userEmail: string;
  userName: string;
  companyName: string;
  userMobile: number;
  orders:object;
  today_orders:object;

  today_date:string = null;
  day_one_date:string = null;
  day_two_date:string = null;
  day_three_date:string = null;
  day_four_date: string = null;
  day_five_date: string = null;
  day_six_date :string = null;

  today_per_portion_price: number;
  day_one_per_portion_price: number;
  day_two_per_portion_price: number;
  day_three_per_portion_price: number;
  day_four_per_portion_price: number;
  day_five_per_portion_price: number;
  day_six_per_portion_price: number;

  today_num_items:number;
  day_one_num_items:number;
  day_two_num_items:number;
  day_three_num_items:number;
  day_four_num_items:number;
  day_five_num_items:number;
  day_six_num_items:number;

  today_total_price:number = 0;
  day_one_total_price:number = 0;
  day_two_total_price:number = 0;
  day_three_total_price:number = 0;
  day_four_total_price:number = 0;
  day_five_total_price:number = 0;
  day_six_total_price:number = 0;

  today_menu = [];
  day_one_menu = [];
  day_two_menu = [];
  day_three_menu = [];
  day_four_menu = [];
  day_five_menu = [];
  day_six_menu = [];

  today_slot:string;
  day_one_slot:string;
  day_two_slot:string;
  day_three_slot:string;
  day_four_slot:string;
  day_five_slot:string;
  day_six_slot:string;

  slot_one = '12:00 - 12:45';
  slot_two = '12:45 - 1:30';
  slot_three = '1:30 - 2:15';
  slot_four = '2:15 - 3';

  delivery_fee = 30;
  total_price:number;

  tab_one:object;
  tab_two:object;
  tab_three:object;

  // Tabs names
  tab_one_name: string;
  tab_two_name: string;
  tab_three_name: string;

  // Tabs time slots
  tab_one_time_slot:string;
  tab_two_time_slot:string;
  tab_three_time_slot:string;

  // Tabs base price
  tab_one_base_price:number;
  tab_two_base_price:number;
  tab_three_base_price:number;
  
  // Tabs total price
  tab_one_total_price:number = 0;
  tab_two_total_price:number = 0;
  tab_three_total_price:number = 0;

  // Tab num of times
  tab_one_times: number;
  tab_two_times: number;
  tab_three_times: number;


  selected_address:string;
  payment_method:string;
  deliveryInst:string = '';


  ngOnInit() {
    // Getting orders
    this.title.setTitle('Fysu - Checkout');

    // Get basketnumber from localstorage
    let basket_num = parseInt(localStorage.getItem('basket_number'));
    // alert(basket_num);
    // alert(isNaN(basket_num));
    if(basket_num == undefined || basket_num == null || basket_num == 0 || isNaN(basket_num) == true){
      // redirect to menu
      this.router.navigate(['/menu']);
      // alert('no');
    }else{
      // alert('yes');
    }

    let user = this.authService.getUserFromLocal();
    let user_parsed = JSON.parse(user);
    this.userEmail = user_parsed.email;
    this.userName = user_parsed.name;
    this.companyName = user_parsed.company_name;
    this.userMobile = user_parsed.mobile;
    this.userId = user_parsed.id;

    // Get orders from local storage
    let s_orders = localStorage.getItem('all_orders');
    this.orders = JSON.parse(s_orders);

    let to_orders = localStorage.getItem('today_orders');
    this.today_orders = JSON.parse(to_orders);
    if(this.today_orders != null){
      // console.log(this.today_orders);
      // tab one
      this.tab_one = this.today_orders['tab_one'];
      this.tab_two = this.today_orders['tab_two'];
      this.tab_three = this.today_orders['tab_three'];

      if(this.tab_one != null){
        this.tab_one_base_price = this.today_orders['tab_one'].base_price;
        this.tab_one_total_price = this.today_orders['tab_one'].total_price;
        this.tab_one_name = this.today_orders['tab_one'].name;
        this.tab_one_times = this.today_orders['tab_one'].num_of_items;
        this.tab_one_time_slot = this.getSlotValue(this.today_orders['tab_one'].time_slot);
        // alert(this.tab_one_name);
      }


      if(this.tab_two != null){
        this.tab_two_base_price = this.today_orders['tab_two'].base_price;
        this.tab_two_total_price = this.today_orders['tab_two'].total_price;
        this.tab_two_name = this.today_orders['tab_two'].name;
        this.tab_two_times = this.today_orders['tab_two'].num_of_items;
        this.tab_two_time_slot = this.getSlotValue(this.today_orders['tab_two'].time_slot);
      }

      if(this.tab_three != null){
        this.tab_three_base_price = this.today_orders['tab_three'].base_price;
        this.tab_three_total_price = this.today_orders['tab_three'].total_price;
        this.tab_three_name = this.today_orders['tab_three'].name;
        this.tab_three_times = this.today_orders['tab_three'].num_of_items;
        this.tab_three_time_slot = this.getSlotValue(this.today_orders['tab_three'].time_slot);
      }
      
    }


    //Get addresses
    this.authService.getUserAddressses(this.userId).subscribe(res => {
      if (res.success) {
        this.addresses = res.msg[0].address;
      }
    })
    
    // if(this.orders['today'] != null){
    //   this.today_date = this.orders['today'].date;
    //   this.today_per_portion_price = this.orders['today'].perPortionPrice;
    //   this.today_total_price = this.orders['today'].totalPrice;
    //   this.today_num_items = this.orders['today'].numOfTimes;
    //   this.today_menu = this.orders['today'].menu;

    //   // Time slots
    //   switch (this.orders['today'].timeSlot) {
    //     case 'slot_one':
    //     this.today_slot = this.slot_one;
    //       break;
    //     case 'slot_two':
    //     this.today_slot = this.slot_two;
    //       break;
    //     case 'slot_three':
    //     this.today_slot = this.slot_three;
    //       break; 
    //     default:
    //       break;
    //   }
    // }else{
    //   this.today_menu = null;
    // }

    if(this.orders != null){
      
      if(this.orders['day_one'] != null){
        this.day_one_date = this.orders['day_one'].date;
        this.day_one_per_portion_price = this.orders['day_one'].perPortionPrice;
        this.day_one_total_price = this.orders['day_one'].totalPrice;
        this.day_one_num_items = this.orders['day_one'].numOfTimes;
        this.day_one_menu = this.orders['day_one'].menu;
        // Time slots
        switch (this.orders['day_one'].timeSlot) {
          case 'slot_one':
            this.day_one_slot = this.slot_one;
            break;
          case 'slot_two':
            this.day_one_slot = this.slot_two;
            break;
          case 'slot_three':
            this.day_one_slot = this.slot_three;
            break;
          default:
            break;
        }
      }else{
        this.day_one_menu = null;
      }
      if(this.orders['day_two'] != null){
        this.day_two_date = this.orders['day_two'].date;
        this.day_two_per_portion_price = this.orders['day_two'].perPortionPrice;
        this.day_two_total_price = this.orders['day_two'].totalPrice;
        this.day_two_num_items = this.orders['day_two'].numOfTimes;
        this.day_two_menu = this.orders['day_two'].menu;
        
        // Time slots
        switch (this.orders['day_two'].timeSlot) {
          case 'slot_one':
            this.day_two_slot = this.slot_one;
            break;
          case 'slot_two':
            this.day_two_slot = this.slot_two;
            break;
          case 'slot_three':
            this.day_two_slot = this.slot_three;
            break;
          default:
            break;
        }
  
      }else{
        this.day_two_menu = null;
      }
      
      if(this.orders['day_three'] != null){
        this.day_three_date = this.orders['day_three'].date;
        this.day_three_per_portion_price = this.orders['day_three'].perPortionPrice;
        this.day_three_total_price = this.orders['day_three'].totalPrice;
        this.day_three_num_items = this.orders['day_three'].numOfTimes;
        this.day_three_menu = this.orders['day_three'].menu;
        
        // Time slots
        switch (this.orders['day_three'].timeSlot) {
          case 'slot_one':
            this.day_three_slot = this.slot_one;
            break;
          case 'slot_two':
            this.day_three_slot = this.slot_two;
            break;
          case 'slot_three':
            this.day_three_slot = this.slot_three;
            break;
          default:
            break;
        }
  
      }else{
        this.day_three_menu = null;
      }
      
      if(this.orders['day_four'] != null){
        this.day_four_date = this.orders['day_four'].date;
        this.day_four_per_portion_price = this.orders['day_four'].perPortionPrice;
        this.day_four_total_price = this.orders['day_four'].totalPrice;
        this.day_four_num_items = this.orders['day_four'].numOfTimes;
        this.day_four_menu = this.orders['day_four'].menu;
        // Time slots
        switch (this.orders['day_four'].timeSlot) {
          case 'slot_one':
            this.day_four_slot = this.slot_one;
            break;
          case 'slot_two':
            this.day_four_slot = this.slot_two;
            break;
          case 'slot_three':
            this.day_four_slot = this.slot_three;
            break;
          default:
            break;
        }
  
      }else{
        this.day_four_menu = null;
      }
      
      if(this.orders['day_five'] != null){
        this.day_five_date = this.orders['day_five'].date;
        this.day_five_per_portion_price = this.orders['day_five'].perPortionPrice;
        this.day_five_total_price = this.orders['day_five'].totalPrice;
        this.day_five_num_items = this.orders['day_five'].numOfTimes;
        this.day_five_menu = this.orders['day_five'].menu;
        // Time slots
        switch (this.orders['day_five'].timeSlot) {
          case 'slot_one':
            this.day_five_slot = this.slot_one;
            break;
          case 'slot_two':
            this.day_five_slot = this.slot_two;
            break;
          case 'slot_three':
            this.day_five_slot = this.slot_three;
            break;
          default:
            break;
        }
      }else{
        this.day_five_menu = null;
      }
      
      if(this.orders['day_six'] != null){
        this.day_six_date = this.orders['day_six'].date;
        this.day_six_per_portion_price = this.orders['day_six'].perPortionPrice;
        this.day_six_total_price = this.orders['day_six'].totalPrice;
        this.day_six_num_items = this.orders['day_six'].numOfTimes;
        this.day_six_menu = this.orders['day_six'].menu;
        // Time slots
        switch (this.orders['day_six'].timeSlot) {
          case 'slot_one':
            this.day_six_slot = this.slot_one;
            break;
          case 'slot_two':
            this.day_six_slot = this.slot_two;
            break;
          case 'slot_three':
            this.day_six_slot = this.slot_three;
            break;
          default:
            break;
        }
      }else{
        this.day_six_menu = null;
      }

    }

    
    // Get location from local storage
    this.total_price = this.delivery_fee + this.today_total_price + this.day_one_total_price + this.day_two_total_price + this.day_three_total_price + this.day_four_total_price + this.day_five_total_price + this.day_six_total_price+this.tab_one_total_price+this.tab_two_total_price+this.tab_three_total_price;
    // this.address = localStorage.getItem('home_address');
    // console.log(this.address);
    
  }
  onLogoutClick() {
    this.authService.logout();
    this.router.navigate(['/home']);
    return false;
  }
  addressChecked(event){
    this.selected_address = event.target.value;
    // alert(this.selected_address);
  }
  paymentMethod(event){
    this.payment_method = event.target.value;
    // alert(this.payment_method);
  }
  placeOrder(){
    // Check for address
    if(this.selected_address == null || this.selected_address == undefined){
      // Show Error
      $('.err').html('Please select an address');
    }else{
      let delivery_address = this.selected_address;
      // Check for payment type
      if (this.payment_method == null || this.payment_method == undefined){
        // Show error
        $('.err').html('Please select a payment method');
      }else{
        let pay_method = this.payment_method;
        // Generate Order Id
        // delivery notes
        let delivery_notes; 
        if(this.deliveryInst != null) { 
          delivery_notes = this.deliveryInst; 
        }else{
          delivery_notes = '-'; 
        }
        // Order id
        let order_id = shortid.generate();


        // delivery_address,pay_method, delivery_notes
        // Make order
        // Cumulative of today's and all schduled orders
        let cum_orders = {
          // today orders
          today: this.today_orders,
          // next days orders
          next_days: this.orders

        }

        // Whole order in one place
        let main_order = {
          user_id: this.userId,
          order_id: order_id,
          order_time: moment().format('llll'),
          delivery_address :delivery_address,
          payment_method: pay_method,
          order: cum_orders,
          total_price: this.total_price
        }
        // console.log(main_order);
        // Send order to backend
        // var json = { 'name': catName };
        let json = {'order_dets':main_order}
        console.log(json);
        this.authService.postOrder(json).subscribe(res=>{
          if(res.success){
            console.log(res.msg);
            // Save order id to local storage
            // localStorage.setItem('order_id',order_id);
            // localStorage.removeItem('all_orders');
            // localStorage.removeItem('today_orders');
            // redirect to thanks page
            // this.router.navigate(['/thanks']);
          }else{
            $('.err').html('Something went wrong. please try again later');
          }
        });

      }
    }

    

    // Get payment type
    // alert(this.payment_method+' AND '+this.deliveryInst+ ' AND ' +order_id);
    // Make order
    
  }

  getSlotValue(slot){
    switch (slot) {
      case 'slot_one':
        return "12:00PM - 12:45PM";
        // break;/
      case 'slot_two':
        return "12:45PM - 1:30PM";
        // break;
      case 'slot_three':
        return "1:30PM - 2:15PM";
      case 'slot_four':
        return "2:15PM - 3:00PM";
        // break;
    
      default:
        break;
    }
  }
}
