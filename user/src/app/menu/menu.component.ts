import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppComponent } from "../app.component";
import { Router, RouterModule, NavigationEnd } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { GetMenuService } from "../services/get-menu.service";
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
declare var $:any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  categories: any;
  subs:any;
  rotiItems:any;

  tab_one_text: string;
  tab_two_text: string;
  tab_three_text: string

  // Three menus
  tab_one: string = "Rajin-e ka Roti";
  tab_two: string = "Kohil-e ka Khana";
  tab_three: string = "Mode-e ka Meals";
  // Today 
  today_books = [];
  today_c_books = [];
  today_tab_one_books: object;
  today_tab_two_books: object;
  today_tab_three_books: object;
  today_slot: string;
  today_tab_one_slot: string = "slot_one";
  today_tab_two_slot: string = "slot_one";
  today_tab_three_slot: string = "slot_one";
  num_today_items: number = 0;
  num_tab_one_items: number = 0;
  num_tab_two_items: number = 0;
  num_tab_three_items: number = 0;
  num_tab_one: number = 0;
  num_tab_two: number = 0;
  num_tab_three: number = 0;

  tab_one_cost:number = 79;
  tab_two_cost:number = 89;
  tab_three_cost:number = 99;


  today_one = moment();
  day_one = moment().add(1, 'days');
  day_two = moment().add(2, 'days');
  day_three = moment().add(3, 'days');
  day_four = moment().add(4, 'days');
  day_five = moment().add(5, 'days');
  day_six = moment().add(6, 'days');
  day_seven = moment().add(7, 'days');

  last_today_one = moment().subtract(7,'days');
  last_day_one = moment().subtract(6,'days');
  last_day_two = moment().subtract(5,'days');
  last_day_three = moment().subtract(4,'days');
  last_day_four = moment().subtract(3,'days');
  last_day_five = moment().subtract(2,'days');
  last_day_six = moment().subtract(1,'days');

  

  p_today_one: any;
  p_day_one: any;
  p_day_two: any;
  p_day_three: any;
  p_day_four: any;
  p_day_five: any;
  p_day_six: any;
  p_day_seven: any;

  p_last_today_one: any;
  p_last_day_one:any;
  p_last_day_two:any;
  p_last_day_three:any;
  p_last_day_four:any;
  p_last_day_five:any;
  p_last_day_six:any;


  today_menu: any;
  day_one_menu: any;
  day_two_menu: any;
  day_three_menu: any;
  day_four_menu: any;
  day_five_menu: any;
  day_six_menu: any;

  today_item_dets=[];
  day_one_item_dets=[];
  day_two_item_dets=[];
  day_three_item_dets=[];
  day_four_item_dets=[];
  day_five_item_dets=[];
  day_six_item_dets=[];
  numberOfItems: number;

  
  day_one_books= [];
  day_two_books= [];
  day_three_books= [];
  day_four_books= [];
  day_five_books= [];
  day_six_books= [];

  
  day_one_c_books= [];
  day_two_c_books= [];
  day_three_c_books= [];
  day_four_c_books= [];
  day_five_c_books= [];
  day_six_c_books= [];

  

  // Time slots
  day_one_slot:string = "slot_one";
  day_two_slot:string = "slot_one";
  day_three_slot:string = "slot_one";
  day_four_slot:string = "slot_one";
  day_five_slot:string = "slot_one";
  day_six_slot:string = "slot_one";


  
  num_day_one_items:number = 0;
  num_day_two_items:number = 0;
  num_day_three_items:number = 0;
  num_day_four_items:number = 0;
  num_day_five_items:number = 0;
  num_day_six_items:number = 0;
  
  today_status:boolean;
  day_one_status:boolean;
  day_two_status:boolean;
  day_three_status:boolean;
  day_four_status:boolean;
  day_five_status:boolean;
  day_six_status:boolean;

  today_price: number = 0;
  day_one_price: number  = 0;
  day_two_price: number  = 0;
  day_three_price: number  = 0;
  day_four_price: number  = 0;
  day_five_price: number  = 0;
  day_six_price: number  = 0;
  
  total_today_price: number = 0;
  total_day_one_price: number  = 0;
  total_day_two_price: number  = 0;
  total_day_three_price: number  = 0;
  total_day_four_price: number  = 0;
  total_day_five_price: number  = 0;
  total_day_six_price: number  = 0;

  place_holder_price:number = 0;

  menu_to_be_loaded: any;

  basketNumber = 0;

  tab_one_status = false;
  tab_two_status = false;
  tab_three_status = false;

  tab_one_total_price:number;
  tab_two_total_price:number;
  tab_three_total_price:number;

  userEmail: string;
  userName: string;
  companyName: string;
  userMobile: string;
  userId: string;

  allOrders: any;

  roti_img = '../assets/menu-icons/roti_b.png';
  roti_r_img = '../assets/menu-icons/roti_r.png';

  curry_img = '../assets/menu-icons/cur_b.png';
  curry_r_img = '../assets/menu-icons/cur_r.png';

  dal_img = '../assets/menu-icons/dal_b.png';
  dal_r_img = '../assets/menu-icons/dal_r.png';

  rice_img = '../assets/menu-icons/rice_b.png';
  rice_r_img = '../assets/menu-icons/rice_r.png';

  curd_img = '../assets/menu-icons/curd_b.png';
  curd_r_img = '../assets/menu-icons/curd_r.png';

  fry_img = '../assets/menu-icons/fry_b.png';
  fry_r_img = '../assets/menu-icons/fry_r.png';

  sweets_img = '../assets/menu-icons/sweets_b.png';
  sweets_r_img = '../assets/menu-icons/sweets_r.png';
  
  time_slot_one_status = true;
  time_slot_two_status = true;
  time_slot_three_status = true;
  time_slot_four_status = true;
  dateForHeader:string;

  // slot_one_time_form = "08:40:00";
  slot_one_time_form = moment("08:60:00", "HH:mm:ss").format('hh:mm:ss A');

  // curtime = moment().format('LTS');

  constructor(private router: Router, private title: Title, private appComponent: AppComponent, private authService: AuthService, private getMenuItems: GetMenuService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });

    // Getting current date and time
    $(document).ready(function(){
      setInterval(function(){
        // $('#ttime').html(moment(new Date()).format('LTS'));
        // $('#tttime').html("7:05:00 PM");

        var cur_time = moment(new Date()).format('LTS');

        switch (cur_time) {
          case "11:59:00 AM":
          // Disable slot one
            
            break;
          case "12:44:00 PM":
          // Disable slot two
            
            break;
          case "1:29:00 PM":
          // Disable slot three
            
            break;
          case "2:14:00 PM":
          // Disable slot four
            
            break;
          
        
          default:
            break;
        }

      },1000)
    });

    

    // clear localStorage

    localStorage.removeItem('all_orders');
    localStorage.removeItem('today_orders');
    localStorage.removeItem('basket_number');
    
    // Set title
    this.title.setTitle('Fysu - Menu');

    if(this.authService.loggedIn() == true){
      let user = this.authService.getUserFromLocal();
      let user_parsed = JSON.parse(user);
      this.userEmail = user_parsed.email;
      this.userName = user_parsed.name;
      this.companyName = user_parsed.company_name;
      this.userMobile = user_parsed.mobile;
      this.userId = user_parsed.id;
    }
    

    // console.log(this.datePipe.transform(this.day_six, 'fullDate') + 'ee roju' + this.datePipe.transform(this.last_day_six, 'fullDate'));

    this.numberOfItems = 1;
    this.place_holder_price = 0;

    this.p_today_one = this.datePipe.transform(this.today_one, 'fullDate');
    this.p_day_one = this.datePipe.transform(this.day_one, 'fullDate');
    this.p_day_two = this.datePipe.transform(this.day_two, 'fullDate');
    this.p_day_three = this.datePipe.transform(this.day_three, 'fullDate');
    this.p_day_four = this.datePipe.transform(this.day_four, 'fullDate');
    this.p_day_five = this.datePipe.transform(this.day_five, 'fullDate');
    this.p_day_six = this.datePipe.transform(this.day_six, 'fullDate');

    this.p_last_today_one = this.datePipe.transform(this.last_today_one,'fullDate');
    this.p_last_day_one = this.datePipe.transform(this.last_day_one,'fullDate');
    this.p_last_day_two = this.datePipe.transform(this.last_day_two,'fullDate');
    this.p_last_day_three = this.datePipe.transform(this.last_day_three,'fullDate');
    this.p_last_day_four = this.datePipe.transform(this.last_day_four,'fullDate');
    this.p_last_day_five = this.datePipe.transform(this.last_day_five,'fullDate');
    this.p_last_day_six = this.datePipe.transform(this.last_day_six,'fullDate');  

    this.dateForHeader = this.datePipe.transform(this.last_today_one,'EEE, MMM d');

    $(document).keyup(function (e) {
      if (e.keyCode == 27) {
        $('.schedule-menu-back').css({ 'display': 'none' });
      }
    });



    this.getMenuItems.getCats().subscribe(res=>{
      if(res.success){
        this.categories = res.msg;
      }else{
        window.location.reload();
      }
    });

    // Get day one menu
      this.getMenuItems.getDatesMenu(this.p_day_one,this.p_last_day_one).subscribe(do_res=>{
        if(do_res.success){
          this.day_one_menu = do_res.msg;
          if (this.day_one_menu.length < 1) {
            // Menu does't exist for today
          } else {

            let un = [];
            this.day_one_menu.forEach(e => {
              if (un.length < 1) {
                un.push(e.item_id);
              } else {
                if (un.includes(e.item_id)) {
                  // Do nothing
                } else {
                  un.push(e.item_id);
                }
              }
            });

            if (un.length > 0) {
              // For each item id
              un.forEach(el => {
                this.getMenuItems.getItemDetails(el).subscribe(idets => {
                  if (idets.success) {
                    idets.msg[0].checked = false;
                    idets.msg[0].date = this.p_day_one;
                    this.day_one_item_dets.push(idets.msg);
                  }
                });
              });
              this.day_one_books = this.day_one_item_dets;
            }
          }
        }
      });
    // Get day two menu
    this.getMenuItems.getDatesMenu(this.p_day_two,this.p_last_day_two).subscribe(dt_res => {
      if (dt_res.success) {
        this.day_two_menu = dt_res.msg;
        if (this.day_two_menu.length < 1) {
          // Menu does't exist for today
        } else {

          let un = [];
          this.day_two_menu.forEach(e => {

            if (un.length < 1) {
              un.push(e.item_id);
            } else {
              if (un.includes(e.item_id)) {
                // Do nothing
              } else {
                un.push(e.item_id);
              }
            }
          });

          if (un.length > 0) {
            // For each item id
            un.forEach(el => {
              this.getMenuItems.getItemDetails(el).subscribe(idets => {
                if (idets.success) {
                  idets.msg[0].checked = false;
                  idets.msg[0].date = this.p_day_two;
                  this.day_two_item_dets.push(idets.msg);
                }
              });
            });
            this.day_two_books = this.day_two_item_dets;
          }


        }
      }else{
        // console.log(dt_res.msg);
      }
    });

    // Get day three menu
    this.getMenuItems.getDatesMenu(this.p_day_three,this.p_last_day_three).subscribe(dth_res => {
      if (dth_res.success) {
        this.day_three_menu = dth_res.msg;
        if (this.day_three_menu.length < 1) {
          // Menu does't exist for today
        } else {

          let un = [];
          this.day_three_menu.forEach(e => {
            if (un.length < 1) {
              un.push(e.item_id);
            } else {
              if (un.includes(e.item_id)) {
                // Do nothing
              } else {
                un.push(e.item_id);
              }
            }
          });

          if (un.length > 0) {
            // For each item id
            un.forEach(el => {
              this.getMenuItems.getItemDetails(el).subscribe(idets => {
                if (idets.success) {
                  idets.msg[0].checked = false;
                  idets.msg[0].date = this.p_day_three;
                  this.day_three_item_dets.push(idets.msg);
                }
              });
            });
            this.day_three_books = this.day_three_item_dets;
          }


        }
      }
    });

    // Get day four menu
    this.getMenuItems.getDatesMenu(this.p_day_four,this.p_last_day_four).subscribe(df_res => {
      if (df_res.success) {
        console.log(df_res);
        this.day_four_menu = df_res.msg;
        if (this.day_four_menu.length < 1) {
          // Menu does't exist for today
        } else {
          let un = [];
            this.day_four_menu.forEach(e => {
              if (un.length < 1) {
                un.push(e.item_id);
              }else{
                if (un.includes(e.item_id)) {
                  // Do nothing
                } else {
                  un.push(e.item_id);
                }
              }
            });

            if(un.length>0){
              // For each item id
              un.forEach(el=>{
                this.getMenuItems.getItemDetails(el).subscribe(idets=>{
                  if(idets.success){
                    idets.msg[0].checked=false;
                    idets.msg[0].date = this.p_day_four;
                    this.day_four_item_dets.push(idets.msg);
                    // this.day_four_item_dets[0][0].checked='true';
                    
                  }
                });
              });
              this.day_four_books = this.day_four_item_dets;
            }
        }
      }
    });

    // Get day five menu
    this.getMenuItems.getDatesMenu(this.p_day_five,this.p_last_day_five).subscribe(dfi_res => {
      if (dfi_res.success) {
        // console.log(dfi_res.msg[0]);
        this.day_five_menu = dfi_res.msg;
        if (this.day_five_menu.length < 1) {
          // Menu does't exist for today
        } else {

          let un = [];
          this.day_five_menu.forEach(e => {
            if (un.length < 1) {
              un.push(e.item_id);
            } else {
              if (un.includes(e.item_id)) {
                // Do nothing
              } else {
                un.push(e.item_id);
              }
            }
          });

          if (un.length > 0) {
            // For each item id
            un.forEach(el => {
              this.getMenuItems.getItemDetails(el).subscribe(idets => {
                if (idets.success) {
                  idets.msg[0].checked = false;
                  idets.msg[0].date = this.p_day_five;

                  this.day_five_item_dets.push(idets.msg);

                }
              });
            });
            this.day_five_books = this.day_five_item_dets;

          }


        }
      }
    });

    // Get day six menu
    this.getMenuItems.getDatesMenu(this.p_day_six,this.p_last_day_six).subscribe(dsix_res => {
      if (dsix_res.success) {
        this.day_six_menu = dsix_res.msg;
        if (this.day_six_menu.length < 1) {
          // Menu does't exist for today
        } else {

          let un = [];
          this.day_six_menu.forEach(e => {
            if (un.length < 1) {
              un.push(e.item_id);
            } else {
              if (un.includes(e.item_id)) {
                // Do nothing
              } else {
                un.push(e.item_id);
              }
            }
          });

          if (un.length > 0) {
            // For each item id
            un.forEach(el => {
              this.getMenuItems.getItemDetails(el).subscribe(idets => {
                if (idets.success) {
                  idets.msg[0].checked = false;
                  idets.msg[0].date = this.p_day_six;
                  this.day_six_item_dets.push(idets.msg);
                }
              });
            });
            this.day_six_books = this.day_six_item_dets;
          }

        }
      }
    });
    

    // Date li
    $(document).on('click','.calender-li',function(){
      $('.calender-li').removeClass('selected-date-li');
      $(this).addClass('selected-date-li');
    });
    
    this.getMenuItems.getRotiItems().subscribe(rotiis=>{
      if(rotiis.success){
        this.rotiItems = rotiis.msg;
      }else{
        
      }
    });
  }
  // Load menu
  loadDay(date){
    
    switch (this.datePipe.transform(date, 'fullDate')) {
      case this.p_day_one:
        // Day one menu
        
        this.menu_to_be_loaded = this.day_one_books;

        // Experiment
        $('.sc-ch-mid').hide();
        $('#day-one-div').show();
       

        this.numberOfItems = this.num_day_one_items;
        this.place_holder_price = this.total_day_one_price;
        // Update active day status
        this.day_one_status = true;
        this.day_two_status = false;
        this.day_three_status = false;
        this.day_four_status = false;
        this.day_five_status = false;
        this.day_six_status = false;
        break;
      case this.p_day_two:
        // Day two menu
        this.menu_to_be_loaded = this.day_two_books;
        
        // Experiment
        $('.sc-ch-mid').hide();
        $('#day-two-div').show();

        this.numberOfItems = this.num_day_two_items;
        this.place_holder_price = this.total_day_two_price;
        // Update active day status
        this.day_one_status = false;
        this.day_two_status = true;
        this.day_three_status = false;
        this.day_four_status = false;
        this.day_five_status = false;
        this.day_six_status = false;
        break;
      case this.p_day_three:
        // Day three menu
        this.menu_to_be_loaded = this.day_three_books;

        // Experiment
        $('.sc-ch-mid').hide();
        $('#day-three-div').show();

        this.numberOfItems = this.num_day_three_items;
        this.place_holder_price = this.total_day_three_price;
        // Update active day status
        this.day_one_status = false;
        this.day_two_status = false;
        this.day_three_status = true;
        this.day_four_status = false;
        this.day_five_status = false;
        this.day_six_status = false;
        break;
      case this.p_day_four:
        
        // Day four menu
          this.menu_to_be_loaded = this.day_four_books;

          // Experiment
          $('.sc-ch-mid').hide();
          $('#day-four-div').show();

          this.numberOfItems = this.num_day_four_items;
          this.place_holder_price = this.total_day_four_price;
        // Update active day status
        this.day_one_status = false;
        this.day_two_status = false;
        this.day_three_status = false;
        this.day_four_status = true;
        this.day_five_status = false;
        this.day_six_status = false;
        break;
      case this.p_day_five:
        // Day five menu
        // this.menu_to_be_loaded = this.day_five_books;
         // Experiment
         $('.sc-ch-mid').hide();
         $('#day-five-div').show();

        this.numberOfItems = this.num_day_five_items;
        this.place_holder_price = this.total_day_five_price;
        // Update active day status
        this.day_one_status = false;
        this.day_two_status = false;
        this.day_three_status = false;
        this.day_four_status = false;
        this.day_five_status = true;
        this.day_six_status = false;
        break;
      case this.p_day_six:
        // Day six menu
        this.menu_to_be_loaded = this.day_six_books;
         // Experiment
         $('.sc-ch-mid').hide();
         $('#day-six-div').show();
        this.numberOfItems = this.num_day_six_items;
        this.place_holder_price = this.total_day_six_price;
        // Update active day status
        this.day_one_status = false;
        this.day_two_status = false;
        this.day_three_status = false;
        this.day_four_status = false;
        this.day_five_status = false;
        this.day_six_status = true;
        break;
      default:
        break;
    }
  }

  decNumberOfItems() {
    
    switch (true) {
      case this.today_status:
        
        if (this.numberOfItems == 1) {
          this.numberOfItems = 1;
          this.num_today_items = 1;
          // this.today_price = 1;
        } else {
          // console.log('Num today Items :'+ this.num_today_items);
          this.numberOfItems--;
          this.num_today_items--;
          console.log('Num today Items updated :'+ this.num_today_items);

          if(this.num_today_items == 1){
            this.total_today_price = this.place_holder_price = this.today_price;
            console.log("NUmber of items is one"+this.total_today_price);
          }else{
            this.total_today_price = this.place_holder_price = this.total_today_price-this.today_price;
            console.log(this.today_price);
          }
        }

        break;
      case this.day_one_status:

        if (this.numberOfItems == 1) {
          this.numberOfItems = 1;
          this.num_day_one_items = 1;
        } else {
          this.numberOfItems--;
          this.num_day_one_items--;
          
          if (this.num_day_one_items == 1) {
            this.total_day_one_price = this.place_holder_price = this.day_one_price;
            console.log("Number of items is one" + this.total_day_one_price);
          } else {
            this.total_day_one_price = this.place_holder_price = this.total_day_one_price - this.day_one_price;
            // console.log(this.today_price);
          }
        }
        break;

      case this.day_two_status:

        if (this.numberOfItems == 1) {
          this.numberOfItems = 1;
          this.num_day_two_items = 1;
        } else {
          this.numberOfItems--;
          this.num_day_two_items--;

          if (this.num_day_two_items == 1) {
            this.total_day_two_price = this.place_holder_price = this.day_two_price;
            console.log("Number of items is one" + this.total_day_two_price);
          } else {
            this.total_day_two_price = this.place_holder_price = this.total_day_two_price - this.day_two_price;
            // console.log(this.today_price);
          }
        }

        break;
      case this.day_three_status:

        if (this.numberOfItems == 1) {
          this.numberOfItems = 1;
          this.num_day_three_items = 1;
        } else {
          this.numberOfItems--;
          this.num_day_three_items--;
          if (this.num_day_three_items == 1) {
            this.total_day_three_price = this.place_holder_price = this.day_three_price;
            console.log("Number of items is one" + this.total_day_three_price);
          } else {
            this.total_day_three_price = this.place_holder_price = this.total_day_three_price - this.day_three_price;
            // console.log(this.today_price);
          }
        }

        break;
      case this.day_four_status:

        if (this.numberOfItems == 1) {
          this.numberOfItems = 1;
          this.num_day_four_items = 1;
        } else {
          this.numberOfItems--;
          this.num_day_four_items--;

          if (this.num_day_four_items == 1) {
            this.total_day_four_price = this.place_holder_price = this.day_four_price;
            console.log("Number of items is one" + this.total_day_four_price);
          } else {
            this.total_day_four_price = this.place_holder_price = this.total_day_four_price - this.day_four_price;
            // console.log(this.today_price);
          }
        }

        break;
      case this.day_five_status:

        if (this.numberOfItems == 1) {
          this.numberOfItems = 1;
          this.num_day_five_items = 1;
        } else {
          this.numberOfItems--;
          this.num_day_five_items--;

          if (this.num_day_five_items == 1) {
            this.total_day_five_price = this.place_holder_price = this.day_five_price;
            console.log("Number of items is one" + this.total_day_five_price);
          } else {
            this.total_day_five_price = this.place_holder_price = this.total_day_five_price - this.day_five_price;
            // console.log(this.today_price);
          }

        }

        break;
      case this.day_six_status:

        if (this.numberOfItems == 1) {
          this.numberOfItems = 1;
          this.num_day_six_items = 1;
        } else {
          this.numberOfItems--;
          this.num_day_six_items--;
          
          if (this.num_day_six_items == 1) {
            this.total_day_six_price = this.place_holder_price = this.day_six_price;
            console.log("Number of items is one" + this.total_day_six_price);
          } else {
            this.total_day_six_price = this.place_holder_price = this.total_day_six_price - this.day_six_price;
            // console.log(this.today_price);
          }
        }

        break;

      default:
        break;
      }
  }

  incNumberOfItems() {

    switch (true) {
      case this.today_status:
        this.numberOfItems++;
        this.num_today_items++;
        // Increase the cost as well
        if(this.num_today_items == 0){
          this.total_today_price = this.place_holder_price = this.today_price*1;
          console.log(this.total_today_price);
        }else{
          this.total_today_price = this.place_holder_price = this.today_price*this.num_today_items;
          console.log(this.total_today_price);
        }
        break;
      case this.day_one_status:
        this.numberOfItems++;
        this.num_day_one_items++;
        // Increase the cost as well
        if (this.num_day_one_items == 0) {
          this.total_day_one_price= this.place_holder_price = this.day_one_price * 1;
          // console.log(this.total_today_price);
        } else {
          this.total_day_one_price = this.place_holder_price = this.day_one_price * this.num_day_one_items;
          // console.log(this.total_today_price);
        }
        break;
      case this.day_two_status:
        this.numberOfItems++;
        this.num_day_two_items++;
        // Increase the cost as well
        if (this.num_day_two_items == 0) {
          this.total_day_two_price = this.place_holder_price = this.day_two_price * 1;
          // console.log(this.total_today_price);
        } else {
          this.total_day_two_price = this.place_holder_price = this.day_two_price * this.num_day_two_items;
          // console.log(this.total_today_price);
        }
        break;
      case this.day_three_status:
        this.numberOfItems++;
        this.num_day_three_items++;
        // Increase the cost as well
        if (this.num_day_three_items == 0) {
          this.total_day_three_price = this.place_holder_price = this.day_three_price * 1;
          // console.log(this.total_today_price);
        } else {
          this.total_day_three_price = this.place_holder_price = this.day_three_price * this.num_day_three_items;
          // console.log(this.total_today_price);
        }
        break;
      case this.day_four_status:
        this.numberOfItems++;
        this.num_day_four_items++;
        // Increase the cost as well
        if (this.num_day_four_items == 0) {
          this.total_day_four_price = this.place_holder_price = this.day_four_price * 1;
          // console.log(this.total_today_price);
        } else {
          this.total_day_four_price = this.place_holder_price = this.day_four_price * this.num_day_four_items;
          // console.log(this.total_today_price);
        }
        break;
      case this.day_five_status:
        this.numberOfItems++;
        this.num_day_five_items++;
        // Increase the cost as well
        if (this.num_day_five_items == 0) {
          this.total_day_five_price = this.place_holder_price = this.day_five_price * 1;
          // console.log(this.total_today_price);
        } else {
          this.total_day_five_price = this.place_holder_price = this.day_five_price * this.num_day_five_items;
          // console.log(this.total_today_price);
        }
        break;
      case this.day_six_status:
        this.numberOfItems++;
        this.num_day_six_items++;
        // Increase the cost as well
        if (this.num_day_six_items == 0) {
          this.total_day_six_price = this.place_holder_price = this.day_six_price * 1;
          // console.log(this.total_today_price);
        } else {
          this.total_day_six_price = this.place_holder_price = this.day_six_price * this.num_day_six_items;
          // console.log(this.total_today_price);
        }
        break;
      default:
        break;
    }
  }

  // Each item

  decNumberOfItem() {

    switch (true) {
      case this.today_status:

        break;
      case this.day_one_status:

        break;
      case this.day_two_status:

        break;
      case this.day_three_status:

        break;
      case this.day_four_status:

        break;
      case this.day_five_status:

        break;
      case this.day_six_status:

        break;

      default:
        break;
    }
  }

  incNumberOfItem() {

    switch (true) {
      case this.today_status:
        
        break;
      case this.day_one_status:
        
        break;
      case this.day_two_status:
        
        break;
      case this.day_three_status:
       
        break;
      case this.day_four_status:
       
        break;
      case this.day_five_status:
        
        break;
      case this.day_six_status:
        
        break;
      default:
        break;
    }
  }


  onCheckChange(menu,event,mevent){
    
    menu.checked = event;

    let tar = mevent.target;
    if(event == true){
      // b_img
      if ($(tar).parent().find('img').hasClass('roti-cl')){
        $(tar).parent().find('img').attr('src',this.roti_r_img);
      }

      if ($(tar).parent().find('img').hasClass('curry-cl')){
        $(tar).parent().find('img').attr('src',this.curry_r_img);
      }

      if ($(tar).parent().find('img').hasClass('dal-cl')){
        $(tar).parent().find('img').attr('src',this.dal_r_img);
      }

      if ($(tar).parent().find('img').hasClass('rice-cl')){
        $(tar).parent().find('img').attr('src',this.rice_r_img);
      }

      if ($(tar).parent().find('img').hasClass('curd-cl')){
        $(tar).parent().find('img').attr('src',this.curd_r_img);
      }

      if ($(tar).parent().find('img').hasClass('fry-cl')){
        $(tar).parent().find('img').attr('src',this.fry_r_img);
      }
      if ($(tar).parent().find('img').hasClass('sweet-cl')) {
        $(tar).parent().find('img').attr('src', this.sweets_r_img);
      }

    }else{
      // r_img
      if ($(tar).parent().find('img').hasClass('roti-cl')) {
        $(tar).parent().find('img').attr('src',this.roti_img);
      }

      if ($(tar).parent().find('img').hasClass('curry-cl')) {
        $(tar).parent().find('img').attr('src', this.curry_img);
      }

      if ($(tar).parent().find('img').hasClass('dal-cl')) {
        $(tar).parent().find('img').attr('src', this.dal_img);
      }

      if ($(tar).parent().find('img').hasClass('rice-cl')) {
        $(tar).parent().find('img').attr('src', this.rice_img);
      }

      if ($(tar).parent().find('img').hasClass('curd-cl')) {
        $(tar).parent().find('img').attr('src', this.curd_img);
      }

      if ($(tar).parent().find('img').hasClass('fry-cl')) {
        $(tar).parent().find('img').attr('src', this.fry_img);
      }

      if ($(tar).parent().find('img').hasClass('sweet-cl')) {
        $(tar).parent().find('img').attr('src', this.sweets_img);
      }
    }
    switch (true) {
      case this.day_one_status:
        this.day_one_books = this.menu_to_be_loaded;
        if (event) {
          // checked
          // Add to added items
          this.day_one_c_books.push(menu);
          // Update prices
          if (this.num_day_one_items == 0) {
            this.num_day_one_items++;
            this.numberOfItems = this.num_day_one_items;
            let to_be_added_price = this.num_day_one_items * menu.item_price;
            this.day_one_price += +menu.item_price;
            this.total_day_one_price += +menu.item_price;
            this.place_holder_price = this.total_day_one_price;
          } else {
            let to_be_added_price = this.num_day_one_items * menu.item_price;
            this.day_one_price += +menu.item_price;
            this.total_day_one_price += +to_be_added_price;
            this.place_holder_price = this.total_day_one_price;
          }
        } else {
          // must remove from added items if exists
          this.day_one_c_books.forEach(element => {
            if (element._id == menu._id && element.date == menu.date) {
              var ind = this.day_one_c_books.indexOf(element, 0);
              if (ind > -1) {
                this.day_one_c_books.splice(ind, 1);
                this.day_one_price -= menu.item_price;
                let to_be_added_price = this.num_day_one_items * menu.item_price;
                this.total_day_one_price -= to_be_added_price;
                this.place_holder_price = this.total_day_one_price;
              }
            }
          });
        }
        break;
      case this.day_two_status:
        this.day_two_books = this.menu_to_be_loaded;
        if (event) {
          // checked
          // Add to added items
          this.day_two_c_books.push(menu);
          // Update prices
          if (this.num_day_two_items == 0) {
            this.num_day_two_items++;
            this.numberOfItems = this.num_day_two_items;
            let to_be_added_price = this.num_day_two_items * menu.item_price;
            this.day_two_price += +menu.item_price;
            this.total_day_two_price += +menu.item_price;
            this.place_holder_price = this.total_day_two_price;
          } else {
            let to_be_added_price = this.num_day_two_items * menu.item_price;
            this.day_two_price += +menu.item_price;
            this.total_day_two_price += +to_be_added_price;
            this.place_holder_price = this.total_day_two_price;
          }

        } else {
          // must remove from added items if exists
          this.day_two_c_books.forEach(element => {
            if (element._id == menu._id && element.date == menu.date) {
              var ind = this.day_two_c_books.indexOf(element, 0);
              if (ind > -1) {
                this.day_two_c_books.splice(ind, 1);
                this.day_two_price -= menu.item_price;
                let to_be_added_price = this.num_day_two_items * menu.item_price;
                this.total_day_two_price -= to_be_added_price;
                this.place_holder_price = this.total_day_two_price;
              }
            }
            // console.log(this.day_two_c_books);
          });
        }
        break;
      case this.day_three_status:
        this.day_three_books = this.menu_to_be_loaded;
        if (event) {
          // checked
          // Add to added items
          this.day_three_c_books.push(menu);
          // Update prices
          if (this.num_day_three_items == 0) {
            this.num_day_three_items++;
            this.numberOfItems = this.num_day_three_items;
            let to_be_added_price = this.num_day_three_items * menu.item_price;
            this.day_three_price += +menu.item_price;
            this.total_day_three_price += +menu.item_price;
            this.place_holder_price = this.total_day_three_price;
          } else {
            let to_be_added_price = this.num_day_three_items * menu.item_price;
            this.day_three_price += +menu.item_price;
            this.total_day_three_price += +to_be_added_price;
            this.place_holder_price = this.total_day_three_price;
          }
        } else {
          // must remove from added items if exists
          this.day_three_c_books.forEach(element => {
            if (element._id == menu._id && element.date == menu.date) {
              var ind = this.day_three_c_books.indexOf(element, 0);
              if (ind > -1) {
                this.day_three_c_books.splice(ind, 1);
                this.day_three_c_books.splice(ind, 1);
                this.day_three_price -= menu.item_price;
                let to_be_added_price = this.num_day_three_items * menu.item_price;
                this.total_day_three_price -= to_be_added_price;
                this.place_holder_price = this.total_day_three_price;
              }
            }
            // console.log(this.day_three_c_books);
          });
        }
        break;
      case this.day_four_status:
        this.day_four_books = this.menu_to_be_loaded;
        
        if(event){
          // checked
          // Add to added items
          this.day_four_c_books.push(menu);
          // Update prices
          if (this.num_day_four_items == 0) {
            this.num_day_four_items++;
            this.numberOfItems = this.num_day_four_items;
            let to_be_added_price = this.num_day_four_items * menu.item_price;
            this.day_four_price += +menu.item_price;
            this.total_day_four_price += +menu.item_price;
            this.place_holder_price = this.total_day_four_price;
          } else {
            let to_be_added_price = this.num_day_four_items * menu.item_price;
            this.day_four_price += +menu.item_price;
            this.total_day_four_price += +to_be_added_price;
            this.place_holder_price = this.total_day_four_price;
          }
        }else{
          // must remove from added items if exists
          this.day_four_c_books.forEach(element => {
            if(element._id == menu._id && element.date == menu.date){
              var ind = this.day_four_c_books.indexOf(element, 0);
              if (ind > -1) {
                this.day_four_c_books.splice(ind, 1);
                this.day_four_price -= menu.item_price;
                let to_be_added_price = this.num_day_four_items * menu.item_price;
                this.total_day_four_price -= to_be_added_price;
                this.place_holder_price = this.total_day_four_price;
              }
            }
          });
        }
        break;
      case this.day_five_status:
        this.day_five_books = this.menu_to_be_loaded;
        if (event) {
          // checked
          // Add to added items
          this.day_five_c_books.push(menu);
          // Update prices
          if (this.num_day_five_items == 0) {
            this.num_day_five_items++;
            this.numberOfItems = this.num_day_five_items;
            let to_be_added_price = this.num_day_five_items * menu.item_price;
            this.day_five_price += +menu.item_price;
            this.total_day_five_price += +menu.item_price;
            this.place_holder_price = this.total_day_five_price;
          } else {
            let to_be_added_price = this.num_day_five_items * menu.item_price;
            this.day_five_price += +menu.item_price;
            this.total_day_five_price += +to_be_added_price;
            this.place_holder_price = this.total_day_five_price;
          }
        } else {
          // must remove from added items if exists
          this.day_five_c_books.forEach(element => {
            if (element._id == menu._id && element.date == menu.date) {
              var ind = this.day_five_c_books.indexOf(element, 0);
              if (ind > -1) {
                this.day_five_c_books.splice(ind, 1);
                this.day_five_price -= menu.item_price;
                let to_be_added_price = this.num_day_five_items * menu.item_price;
                this.total_day_five_price -= to_be_added_price;
                this.place_holder_price = this.total_day_five_price;
              }
            }
          });
        }
        break;
      case this.day_six_status:
        this.day_six_books = this.menu_to_be_loaded;
        if (event) {
          // checked
          // Add to added items
          this.day_six_c_books.push(menu);
          // Update books
          if (this.num_day_six_items == 0) {
            this.num_day_six_items++;
            this.numberOfItems = this.num_day_six_items;
            let to_be_added_price = this.num_day_six_items * menu.item_price;
            this.day_six_price += +menu.item_price;
            this.total_day_six_price += +menu.item_price;
            this.place_holder_price = this.total_day_six_price;
          } else {
            let to_be_added_price = this.num_day_six_items * menu.item_price;
            this.day_six_price += +menu.item_price;
            this.total_day_six_price += +to_be_added_price;
            this.place_holder_price = this.total_day_six_price;
          }
        } else {
          // must remove from added items if exists
          this.day_six_c_books.forEach(element => {
            if (element._id == menu._id && element.date == menu.date) {
              var ind = this.day_six_c_books.indexOf(element, 0);
              if (ind > -1) {
                this.day_six_c_books.splice(ind, 1);
                this.day_six_price -= menu.item_price;
                let to_be_added_price = this.num_day_six_items * menu.item_price;
                this.total_day_six_price -= to_be_added_price;
                this.place_holder_price = this.total_day_six_price;
              }
            }
            // console.log(this.day_six_c_books);
          });
        }
        break;
    
      default:
        break;
    }
  }

  // Add to cart button clicked
  addCartClicked(){
    let today:object,day_one:object,day_two:object,day_three:object,day_four:object,day_five:object,day_six:object;

        // Today's items are active
        if (this.num_today_items > 0) {
          let date, menu, numOfTimes, totalPrice;
          today = {
            // Get Date
            date: this.p_today_one,
            // Raw date for reports
            rawDate: this.today_one,
            // Get the booked menu
            menu: this.today_c_books,
            // Get the number of times menu has been booked
            numOfTimes: this.num_today_items,
            // Price per portion
            perPortionPrice: this.today_price,
            // Time slot
            timeSlot: this.today_slot,
            // Total price
            totalPrice: this.total_today_price
          }

        } else {
          today = null;
        }
        // If day one's items are active
        if(this.num_day_one_items>0){
          let date, menu, numOfTimes, totalPrice;
          day_one = {
            // Get Date
            date: this.p_day_one,
            // Raw date for reports
            rawDate : this.day_one,
            // Get the booked menu
            menu: this.day_one_c_books,
            // Get the number of times menu has been booked
            numOfTimes: this.num_day_one_items,
            // Price per portion
            perPortionPrice: this.day_one_price,
            // Time slot
            timeSlot: this.day_one_slot,
            // Total price
            totalPrice: this.total_day_one_price
          }

        } else {
          day_one = null;
        }
        // If day two's items are active
        if(this.num_day_two_items>0){
          let date, menu, numOfTimes, totalPrice;
          day_two = {
            // Get Date
            date: this.p_day_two,
            // Raw date for reports
            rawDate: this.day_two,
            // Get the booked menu
            menu: this.day_two_c_books,
            // Get the number of times menu has been booked
            numOfTimes: this.num_day_two_items,
            // Price per portion
            perPortionPrice: this.day_two_price,
             // Time slot
            timeSlot: this.day_two_slot,
            // Total price
            totalPrice: this.total_day_two_price
          }

        } else {
          day_two = null;
        }
        // If day three's items are active
        if(this.num_day_three_items>0){
          let date, menu, numOfTimes, totalPrice;
          day_three = {
            // Get Date
            date: this.p_day_three,
            // Raw date for reports
            rawDate: this.day_three,
            // Get the booked menu
            menu: this.day_three_c_books,
            // Get the number of times menu has been booked
            numOfTimes: this.num_day_three_items,
            // Price per portion
            perPortionPrice: this.day_three_price,
             // Time slot
            timeSlot: this.day_three_slot,
            // Total price
            totalPrice: this.total_day_three_price
          }

        } else {
          day_three = null;
        }

        // If day four's items are active
        if(this.num_day_four_items>0){
          let date, menu, numOfTimes, totalPrice;
          day_four = {
            // Get Date
            date: this.p_day_four,
            // Raw date for reports
            rawDate: this.day_four,
            // Get the booked menu
            menu: this.day_four_c_books,
            // Get the number of times menu has been booked
            numOfTimes: this.num_day_four_items,
            // Price per portion
            perPortionPrice: this.day_four_price,
            // Time slot
            timeSlot: this.day_four_slot,
            // Total price
            totalPrice: this.total_day_four_price
          }

        } else {
          day_four = null;
        }

        // If day five's items are active
        if(this.num_day_five_items>0){
          let date, menu, numOfTimes, totalPrice;
          day_five = {
            // Get Date
            date: this.p_day_five,
            // Raw date for reports
            rawDate : this.day_five,
            // Get the booked menu
            menu: this.day_five_c_books,
            // Get the number of times menu has been booked
            numOfTimes: this.num_day_five_items,
            // Price per portion
            perPortionPrice: this.day_five_price,
            // Time slot
            timeSlot: this.day_five_slot,
            // Total price
            totalPrice: this.total_day_five_price
          }

        } else {
          day_five = null;
        }
        // If day six's items are active
        if(this.num_day_six_items){
          let date, menu, numOfTimes, totalPrice;
          day_six = {
            // Get Date
            date: this.p_day_six,
            // Raw date for reports
            rawDate: this.day_six,
            // Get the booked menu
            menu: this.day_six_c_books,
            // Get the number of times menu has been booked
            numOfTimes: this.num_day_six_items,
            // Price per portion
            perPortionPrice: this.day_six_price,
            // Time slot
            timeSlot: this.day_six_slot,
            // Total price
            totalPrice: this.total_day_six_price
          }

        } else {
          day_six = null;
        }
        
        switch (true) {
          case this.today_status:
            this.basketNumber++;
            break;
          case this.day_one_status:
            this.basketNumber++;
            break;
          case this.day_two_status:
            this.basketNumber++;
            break;
          case this.day_three_status:
            this.basketNumber++;
            break;
          case this.day_four_status:
            this.basketNumber++;
            break;
          case this.day_five_status:
            this.basketNumber++;
            break;
          case this.day_six_status:
            this.basketNumber++;
            break;
          default:
            break;
        }
        // Updating basket number
        // this.basketNumber += index;
        // Get noted to chef
        // this.notesToChef;

        this.allOrders = {
          // today: today,
          day_one: day_one,
          day_two: day_two,
          day_three: day_three,
          day_four: day_four,
          day_five: day_five,
          day_six: day_six,
          // notes: this.notesToChef
        }
        localStorage.setItem('all_orders',JSON.stringify(this.allOrders));
        $('.added-db').css({'display':'flex'});
        setTimeout(function() {
          $('.added-db').css({'display':'none'});
        }, 1000);
  }

  // Close schedule menu
  scClose() {
    $('.schedule-menu-back').css({ 'display': 'none' });
  }
  onLogoutClick() {
    this.authService.logout();
    this.router.navigate(['/home']);
    return false;
  }
  schMenuBtn(){

    if(this.authService.loggedIn()== true){
      this.day_one_status = true;
      this.day_two_status = false;
      this.day_three_status = false;
      this.day_four_status = false;
      this.day_five_status = false;
      this.day_six_status = false;
      this.place_holder_price = this.total_today_price;
      this.loadDay(this.day_one);
  
      $('.schedule-menu-back').css({ 'display': 'flex' });
      $('.schedule-choose-core').show();

    }else{
      this.appComponent.loginSignupTrigger();
    }


  }

  // Slot selected event
  slotSelected(event){
    let slot = event.target.value;
    switch (true) {
      case this.today_status:
          this.today_slot = slot;
        break;
      case this.day_one_status:
          this.day_one_slot = slot;
        break;
      case this.day_two_status:
          this.day_two_slot = slot;
        break;
      case this.day_three_status:
          this.day_three_slot = slot;
        break;
      case this.day_four_status:
          this.day_four_slot = slot;
        break;
      case this.day_five_status:
          this.day_five_slot = slot;
        break;
      case this.day_six_status:
          this.day_six_slot = slot;
        break;
      default:
        break;
    }
  }

  // Today slot select
  todayMenuSlotSelect(event){
    let tslot = event.target.value;
    // this.today_slot = tslot;
    switch (true) {
      case this.tab_one_status:
          this.today_tab_one_slot = event.target.value;
        break;
        case this.tab_two_status:
          this.today_tab_two_slot = event.target.value;
        break;
        case this.tab_three_status:
          this.today_tab_three_slot = event.target.value;
        break;
      default:
        break;
    }
  }
  todayMenuTimesSelect(event){
    switch (true) {
      case this.tab_one_status:
        this.num_tab_one_items = event.target.value;
        break;
      case this.tab_two_status:
        this.num_tab_two_items = event.target.value;
        
        break;
        case this.tab_three_status:
        this.num_tab_three_items = event.target.value;
        
        break;
      default:
        break;
    }
  }
  todayAdd(tab){
    // check if user is loggedIn
    if(this.authService.loggedIn() == true){
      $('.today-menu-back').css('display','flex');
      // Reset dropdowns in today-menu tab
      $('#t-menu-select-slot').prop('selectedIndex',0);
      $('#t-menu-select-times').prop('selectedIndex',0);
      switch (tab) {
        case 'tab_one':
          this.tab_two_status = false;
          this.tab_three_status = false;
          this.tab_one_status = true;
          // Updating tab item number
          this.num_tab_one_items = 1;
          break;
          case 'tab_two':
          this.tab_three_status = false;
          this.tab_one_status = false;
          this.tab_two_status = true;
          this.num_tab_two_items = 1;
          break;
          case 'tab_three':
          this.tab_two_status = false;
          this.tab_one_status = false;
          this.tab_three_status = true;
          this.num_tab_three_items = 1;
          break;
        default:
          break;
      }
    }else{
      // propmt to login
      this.appComponent.loginSignupTrigger();
    }
    
  }
  addTodayCartClicked(){
    switch (true) {
      case this.tab_one_status:
        this.tab_one_total_price = this.num_tab_one_items * this.tab_one_cost;
        // Add to orders
        this.today_tab_one_books = {
          name: this.tab_one,
          time_slot: this.today_tab_one_slot,
          num_of_items: this.num_tab_one_items,
          base_price: this.tab_one_cost,
          total_price: this.tab_one_total_price
        }
        this.basketNumber++;
        // add announcement
        // Update tab_one_text and display
        this.num_tab_one = this.num_tab_one_items;
        $('#tab-one-band').show();
        // Show tab remove btn
        $('#rem-t-tab_one').show();
        break;
      case this.tab_two_status:
        this.tab_two_total_price = this.num_tab_two_items * this.tab_two_cost;
      
        // Add to orders
        this.today_tab_two_books = {
          name: this.tab_two,
          time_slot: this.today_tab_two_slot,
          num_of_items: this.num_tab_two_items,
          base_price: this.tab_two_cost,
          total_price: this.tab_two_total_price
        }
        this.basketNumber++;
        // Update tab_two_text and display
        this.num_tab_two = this.num_tab_two_items;
        $('#tab-two-band').show();
         // Show tab remove btn
         $('#rem-t-tab_two').show();
        break;
      case this.tab_three_status:
        this.tab_three_total_price = this.num_tab_three_items * this.tab_three_cost;
        // Add to orders
        this.today_tab_three_books = {
          name: this.tab_three,
          time_slot: this.today_tab_three_slot,
          num_of_items: this.num_tab_three_items,
          base_price: this.tab_three_cost,
          total_price: this.tab_three_total_price
        }
        this.basketNumber++;
        // Update tab three text and display band
        this.num_tab_three = this.num_tab_three_items;
        $('#tab-three-band').show();
        // Show tab remove btn
        $('#rem-t-tab_three').show();
        break;
      default:
        break;
    }
    let today_orders = {
      date: this.p_today_one,
      tab_one: this.today_tab_one_books,
      tab_two: this.today_tab_two_books,
      tab_three: this.today_tab_three_books
    }
    localStorage.setItem('today_orders', JSON.stringify(today_orders));
    $('.today-menu-back').hide();
  }
  removeTodayTab(tab){
    switch (tab) {
      case "tab_one":
        // Remove from today_orders
        this.today_tab_one_books = null;
        // Hide band
        $('#tab-one-band').hide();
        // Hide tab remove btn
        $('#rem-t-tab_one').hide();
        // basket number decrement
        this.basketNumber--;
        break;
      case "tab_two":
        // Remove from today_orders
        this.today_tab_two_books = null;
         // Hide band
         $('#tab-two-band').hide();
         // Hide tab remove btn
          $('#rem-t-tab_two').hide();

         // basket number decrement
        this.basketNumber--;
        break;
      case "tab_three":
        // Remove from today_orders
        this.today_tab_three_books = null;
        // Hide band
        $('#tab-three-band').hide();
        // Hide tab remove btn
        $('#rem-t-tab_three').hide();
        // basket number decrement
        this.basketNumber--;
        break;
    
      default:
        break;
    }
    let today_orders = {
      date: this.p_today_one,
      tab_one: this.today_tab_one_books,
      tab_two: this.today_tab_two_books,
      tab_three: this.today_tab_three_books
    }
    localStorage.setItem('today_orders', JSON.stringify(today_orders));
    console.log(today_orders);
  }
  tdClose(){
    $('.today-menu-back').hide();
    this.num_tab_one_items = 0;
    this.num_tab_two_items = 0;
    this.num_tab_three_items = 0;
  }
  
  navToChekout(){
    // if basket number is atleast one
    if(this.basketNumber>0){
      localStorage.setItem('basket_number',this.basketNumber.toString());
      this.router.navigate(['/checkout']); 
    }
  }
}
