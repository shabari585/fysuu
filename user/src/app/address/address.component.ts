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
      }
    })

  }

  editAddress(i, address){
    console.log(i);
  }

  addressDelete(event,ad) {
    

    let address = {
      user_id: this.userId,
      address: ad
    }
    // delete the respective address
    this.authService.deleteAddress(address).subscribe(res=>{
        if(res.success){
          var address = event.target;
          // this.router.navigate['/home'];
          // this.addressDeleted = true;
          // setTimeout(function() {
          //   alert('loop');
          //   this.addressDeleted = false;
          // }, 1000);
        }else{
          console.log('Something went wrong');
        }
    });
    // var target = event.target;
    // $(target).parent().parent().parent().hide();
    // this.authService
  }
  addAddress(event: any) {
    

  }

  geoLocate(callback) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.location = position.coords;
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
      });
      // console.log(this.lat);
      if (this.lat == undefined) {
        // this.geoLocate();
        $('#locate-me-btn').trigger('click');
      } else {
        this.authService.getLocation(this.lat, this.long).subscribe(res => {
          // console.log(res);
          // console.log(res.results[0].formatted_address);

          this.address = res.results[0].formatted_address;
          if (this.address.includes('Madhapur')) {
            localStorage.setItem('home_address', this.address);
            // Add to user's address if he is logged in
            if (this.authService.loggedIn()) {
              console.log('user is logged in');
              // User is logged in 
              // send this address to save
              let address = {
                user_id: this.userId,
                address: this.address
              }
              this.authService.saveAddress(address).subscribe(res => {
                if (res.success) {
                  // Address saved
                  console.log(res);
                } else {
                  // Address not saved
                  if (res.msg = 'exists') {
                    // address already exists
                  } else {
                    console.log(res);
                  }
                }
              });
            } else {
              console.log('not logged in');
            }
            // Add to input box
            $('.location-search-input').val(this.address);
          } else {
            // ********** VERY IMPORTANT DELETE AFTER TESTING IS DONE ************** 
            // Delete after testing is done



            localStorage.setItem('home_address', this.address);
            // Add to user's address if he is logged in
            if (this.authService.loggedIn()) {
              console.log('user is logged in');
              // User is logged in 
              // send this address to save
              let address = {
                user_id: this.userId,
                address: this.address
              }
              // console.log(address);
              this.authService.saveAddress(address).subscribe(res => {
                console.log('entered');
                if (res.success) {
                  // Address saved
                  console.log(res.msg);
                } else {
                  // Address not saved
                  if (res.msg == 'exists') {
                    // address already exists
                    console.log('exists');
                  } else {
                    console.log(res.msg);
                  }
                }
              });
            } else {
              console.log('not logged in');
            }



            $('.location-search-input').val(this.address);
            $('.location-warning-div').show();
          }
        });
      }
    }

  }

}
