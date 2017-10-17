import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RouterModule } from "@angular/router";
import { AuthService } from "../services/auth.service";
declare var $: any;


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css','../settings/settings.component.css']
})
export class AddressComponent implements OnInit {

  constructor(private title: Title, private authService: AuthService,private router:Router) { }

  addresses = [];
  userId: string;
  userEmail: string;
  userName: string;
  companyName: string;
  userMobile: number;

  locationEntry: string;
  location = {};
  lat: number;
  long: number;
  address: string;
  
  original_address :string;
  placeholder_address :string;

  // addressDeleted = false;

  ngOnInit() {
    // Set title
    this.title.setTitle('Settings: Address');
    let user = this.authService.getUserFromLocal();
    let user_parsed = JSON.parse(user);
    this.userEmail = user_parsed.email;
    this.userName = user_parsed.name;
    this.companyName = user_parsed.company_name;
    this.userMobile = user_parsed.mobile;
    this.userId = user_parsed.id;

    //Get addresses
    this.authService.getUserAddressses(this.userId).subscribe(res=>{
      if(res.success){
        this.addresses = res.msg[0].address;
        console.log(res.msg);
      }else{
        console.log('err');
      }
    })

  }

  editAddress(i, address){
    this.original_address = address;
    this.placeholder_address = address;
    $('.db').css({'display':'flex'});
  }

  addressDelete(event,ad) {

    let address = {
      user_id: this.userId,
      address: ad
    }
    // delete the respective address
    this.authService.deleteAddress(address).subscribe(res=>{
        if(res.success){
          window.location.reload();
        }else{
          console.log('Something went wrong');
        }
    });
  }

  geoLocate(callback) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.location = position.coords;
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
        if (this.lat == undefined) {
          
        } else {
          this.authService.getLocation(this.lat, this.long).subscribe(res => {
  
            this.address = res.results[0].formatted_address;
            // if (this.address.includes('Madhapur')) {
                // send this address to save
                let address = {
                  user_id: this.userId,
                  address: this.address
                }
                this.authService.saveAddress(address).subscribe(res => {
                  if (res.success) {
                    // Address saved
                    // console.log(res);
                    window.location.reload();
                  } else {
                    // Address not saved
                    if (res.msg = 'exists') {
                      // address already exists
                    } else {
                      console.log(res);
                    }
                  }
                });
            // } 
          });
        }
      });
    }

  }

  closeUpAddress(){
    $('.db').css({'display':'none'});
  }
  updateAddress(){
    // alert('fd');
    let addresses = {
      user_id: this.userId,
      original : this.original_address,
      edited : this.placeholder_address
    }
    this.authService.updateAddress(addresses).subscribe(res=>{
      if(res.success){
        window.location.reload();
      }else{
        console.log(res.msg);
      }
    });
  }
}
