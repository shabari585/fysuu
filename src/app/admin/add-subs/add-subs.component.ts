import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NgModel } from '@angular/forms';
import { Category } from "../../models/category";
import { Router } from "@angular/router";
import { Title } from '@angular/platform-browser';

import { AdminServicesService } from "../../services/admin-services.service";

declare var $: any;

@Component({
  selector: 'app-add-subs',
  templateUrl: './add-subs.component.html',
  styleUrls: ['./add-subs.component.css','../admin/admin.component.css']
})
export class AddSubsComponent implements OnInit {

  categories: Category[] = [];
  subName: string;
  subsOfCat: string[];
  selectedCat: string;

  constructor(private getMenu: AdminServicesService, private router: Router, private title: Title) { }

  ngOnInit() {
    // Set title
    this.title.setTitle('Add Sub Catregories');

    this.getMenu.getCategories().subscribe(res => {
      if (res.success) {
        this.categories = res.msg;
      }
      console.log(res);
    });
  }
  submitSubCat(cat: string, sub: string) {
    if (sub) {
      sub = sub.trim();
      var json = { 'category_id': cat, 'sub': sub };
      this.getMenu.addSub(json).subscribe(res => {
        if (res.msg == 'success') {
          // Category added
          $('.err').html('Added !');
          $('#sub-inp').val('');
          window.location.reload();
        }
      });
    } else {
      $('.err').html('Sub category name required !');
    }

  }
  catSelect(event) {
    // var cjson = {'catId':event};
    this.selectedCat = event;
    var cjson = event;
    this.getMenu.getSubs(cjson).subscribe(res => {
      if (res.msg != 'failed') {
        this.subsOfCat = res;
      } else {
        console.log(res.msg);
      }
    });
  }

  deleteSubFromCategory(subName: string) {

    this.getMenu.deleteSubFromCategory(subName, this.selectedCat).subscribe(res => {
      if (res.msg == 'success') {
        // deleted
        $('.err').html('Deleted ' + subName);
        window.location.reload();
      } else {
        // failed
        $('.err').html('Failed to delete ' + subName);
      }
    });
  }

}
