import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NgModel } from '@angular/forms';
import { Router } from "@angular/router";
import { Title } from '@angular/platform-browser';
import { Category } from "../../models/category";

// import { MenuItem } from "./models/menu-item";
import { Items } from "../../models/items";

// importing service
import { AdminServicesService } from "../../services/admin-services.service";
import { GetMenuService } from "../../services/get-menu.service";

// importing momentjs
import * as moment from 'moment';

declare var $: any;

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css','../admin/admin.component.css']
})
export class AddMenuComponent implements OnInit {

  constructor(private getMenu: AdminServicesService, private router: Router, private title: Title, private getMenuService: GetMenuService) { }

  items: Items[];
  selectedItemName: string;
  selectedItemPrice: string;
  selectedItemId: string;
  dateIsSelected = 'false';
  dateSelected: string;
  dates: any;

  categories: Category[] = [];
  subsOfCat: string[];
  selectedCat: string;
  catSelected = 'false';
  selectedSubCat: string;
  itemName: string;
  itemPrice: number;
  item_img: string;
  subSelected = 'false';


  addedItems: any[] = [];
  removedItems: any[] = [];

  itemsPosted: string;
  itemsDeleted: string;

  outCats:any=[];


  // date = new Date((60 * 60 * 24 * 1));
  today = moment().format('LLLL');
  day_one = moment().add(1, 'days');
  day_two = moment().add(2, 'days');
  day_three = moment().add(3, 'days');
  day_four = moment().add(4, 'days');
  day_five = moment().add(5, 'days');
  day_six = moment().add(6, 'days');
  day_seven = moment().add(7, 'days');

  ngOnInit() {
    // Set title
    this.title.setTitle('Add Menu');

    // Get category
    this.getMenu.getCategories().subscribe(res => {
      this.categories = res.msg;
    });
    this.getMenu.getDates().subscribe(res => {
      this.dates = res;
      // console.log(res);

      res.forEach(element => {
        
        // element.date
        // element.item_id
        this.getMenuService.getItemDetails(element.item_id).subscribe(res=>{
          // console.log(res.msg[0].item_name);
          let json = {date_id:element._id, date: element.date, name:res.msg[0].item_name }
          this.outCats.push(json);
        });
      });

      console.log(this.outCats);

      // this.getMenuService.getItemDetails(res[0].item_id).subscribe(res=>{
      //   console.log(res);
      // });

    });
  }
  selectedDate(event) {
    // alert(event);
    this.dateIsSelected = 'false';
    this.catSelected = 'false';
    this.subSelected = 'false';
    $('#cat-select').prop('selectedIndex', 0)
    $('#sub-cat-select').prop('selectedIndex', 0)
    this.dateIsSelected = 'true';
    this.dateSelected = event;
  }

  catSelect(event) {
    this.catSelected = 'false';
    this.subSelected = 'false';
    // var cjson = {'catId':event};
    this.selectedCat = event;
    var cjson = event;
    this.getMenu.getSubs(cjson).subscribe(res => {
      if (res.msg != 'failed') {
        this.subsOfCat = res;
        this.catSelected = 'true';
      } else {
        console.log(res.msg);
      }
    });
  }

  subCatSelect(subCat) {
    this.subSelected = 'true';
    // selected category 
    this.selectedCat;
    // selected sub category
    this.selectedSubCat;
    this.getMenu.getDateItems(this.selectedCat, this.selectedSubCat, this.dateSelected).subscribe(res => {
      if (res == 'failed') {
        // alert('failed');
      } else {
        // console.log(res);

        this.items = res.msg;

      }
    });
  }

  onCheckChange(dateSelected: string, cat_id: string, sub_name: string, item_id, isChecked: boolean) {

    alert(item_id);

    if (isChecked == true) {

      let temp_array = [dateSelected, item_id];
      // Add to added items
      // check if it already exists
      for (var x = 0; x < this.addedItems.length; x++) {
        if (this.addedItems[x][0] == dateSelected && this.addedItems[x][1] == item_id) {
          this.addedItems.splice(x, 1);
        }
      }
      this.addedItems.push(temp_array);
      
      // Remove from removedItems
      for (var x = 0; x < this.removedItems.length; x++) {
        if (this.removedItems[x][0] == dateSelected && this.removedItems[x][1] == item_id) {
          this.removedItems.splice(x, 1);
        }
      }
      console.log(this.addedItems);
    } else {
      let tmp_array = [dateSelected, item_id];
      // Adding to removed items
      for (var x = 0; x < this.removedItems.length; x++) {
        if (this.removedItems[x][0] == dateSelected && this.removedItems[x][1] == item_id) {
          this.removedItems.splice(x, 1);
        }
      }
      this.removedItems.push(tmp_array);
      // Removing from added items 
      for (var x = 0; x < this.addedItems.length; x++) {
        if (this.addedItems[x][0] == dateSelected && this.addedItems[x][1] == item_id) {
          this.addedItems.splice(x, 1);
        }
      }
      // console.log(this.addedItems);
    }
  }
  submitMenu() {
    this.getMenu.postSchedule(this.addedItems, this.removedItems).subscribe(res => {

      if (res) {
        window.location.reload();
      }
    });

  }

  deleteDate(date_id) {
    this.getMenu.deleteDate(date_id).subscribe(res => {
      if (res.success) {
        console.log(res.msg);
        window.location.reload();
      } else {
        console.log(res);
      }
    });
  }

}
