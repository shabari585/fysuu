import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NgModel } from '@angular/forms';
import { Router } from "@angular/router";
import { Title } from '@angular/platform-browser';

import { AdminServicesService } from "../../services/admin-services.service";

declare var $: any;

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css','../admin/admin.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(private getMenu: AdminServicesService, private router: Router, private title: Title) { }
  ngOnInit() {
    // Set title
    this.title.setTitle('Reports');
  }

}
