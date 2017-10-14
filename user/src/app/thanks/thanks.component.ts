import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppComponent } from "../app.component";
import { Router, RouterModule } from "@angular/router";
import { AuthService } from "../services/auth.service";
declare var $: any;

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent implements OnInit {

  constructor(private authService: AuthService, private title: Title, private router: Router) { }

  order_id:string;

  ngOnInit() {

    if (localStorage.getItem('order_id') == null || localStorage.getItem('order_id') == undefined){
      // redirect to Home page
      this.router.navigate(['/home']);
    }

    this.order_id = localStorage.getItem('order_id');
    this.title.setTitle('Thanks ! - Fysu');
    localStorage.removeItem('order_id');


  }

}
