import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RouterModule } from "@angular/router";
declare var $: any;

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css','../settings/settings.component.css']
})
export class PaymentsComponent implements OnInit {

  constructor(private router: Router, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Settings: Payments');
  }

}
