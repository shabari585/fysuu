import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RouterModule, NavigationEnd } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { AppComponent } from "../app.component";
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  locationEntry: string;
  location = {};
  lat: number;
  long: number;
  address: string;
  // give_menu_permission= false;

  userEmail :string;
  userName :string;
  companyName :string;
  userMobile :string;
  userId :string;


  constructor(private router: Router, private title: Title, private appComponent: AppComponent, private authService: AuthService) { }

  ngOnInit() {

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });

    if(this.authService.loggedIn()){

      let user = this.authService.getUserFromLocal();
      let user_parsed = JSON.parse(user);
      this.userEmail = user_parsed.email;
      this.userName = user_parsed.name;
      this.companyName = user_parsed.company_name;
      this.userMobile = user_parsed.mobile;
      this.userId = user_parsed.id;

      if(this.userName == undefined || this.userName == null || this.userName == ''){
        this.userName  = this.appComponent.uName;
      }
      
    }else{
      // window.location.reload();
      // console.log('shlog');
    }

    // Set title
    this.title.setTitle('Fysu - Home');

    $(window).on('scroll', function () {
      var scrollTop = $(this).scrollTop();
      $('.location-input-scrolltop-helper').each(function () {
        var topDistance = $(this).offset().top;
        if ((topDistance + 100) < scrollTop) {
          $('.scroll-header').css({ 'top': '0' });
          $('.mob-main-header').css({ 'background-color': 'rgba(0,0,0,1)' });
        } else {
          $('.scroll-header').css({ 'top': '-100px' });
          $('.mob-main-header').css({ 'background-color': 'rgba(0,0,0,.5)'});
          $('.scroll-header .dropdown').removeClass('open');
        }
      });
    });

    showSentence();
    // Typed effect

    function showSentence() {
      var tOut = setTimeout(showSentence, 8000);


      // First 
      setTimeout(function () {
        $('#t-two-one').hide();
        $('#t-two-two').hide();
        $('#t-three-one').hide();
        $('#t-three-two').hide();
        $('#t-one-one').fadeIn(500);
      }, 0);

      setTimeout(function () {
        $('#t-one-two').fadeIn(500);
      }, 1000);

      // Second lines
      setTimeout(function () {
        $('#t-one-one').hide();
        $('#t-one-two').hide();
        $('#t-three-one').hide();
        $('#t-three-two').hide();
        $('#t-two-one').fadeIn(500);
      }, 3000);

      setTimeout(function () {
        $('#t-two-two').fadeIn(500);
      }, 4000);

      // Third lines
      setTimeout(function () {
        $('#t-one-one').hide();
        $('#t-one-two').hide();
        $('#t-two-one').hide();
        $('#t-two-two').hide();
        $('#t-three-one').fadeIn(500);
      }, 5500);

      setTimeout(function () {
        $('#t-three-two').fadeIn(500)
      }, 6500);
    }
  }
  public gotoHowitWorks() {
    $('html, body').animate({ scrollTop: $(".how-it-works-div").offset().top - 70 }, 1000);
  }

  gotoConcept(){
    $('html, body').animate({ scrollTop: $(".concept-div").offset().top - 70 }, 1000);
  }

  onLogoutClick() {
    this.authService.logout();
    this.router.navigate(['/']);
    return false;
  }
  public geoLocate(callback) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.location = position.coords;
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
        if (this.location == undefined || this.location == null) {
        } else {
          this.authService.getLocation(this.lat, this.long).subscribe(res => {
            console.log(res);
            this.address = res.results[0].formatted_address;
            this.locationEntry = this.address;
            // if (this.address.includes('Madhapur')) {
            //   // this.give_menu_permission = true;
            //   localStorage.setItem('home_address', this.address);
            //   // Add to user's address if he is logged in
            //   if (this.authService.loggedIn()) {
            //     // User is logged in 
            //     // send this address to save
            //     let address = {
            //       user_id: this.userId,
            //       address: this.address
            //     }
            //     this.authService.saveAddress(address).subscribe(res => {
            //       if (res.success) {
            //         // Address saved
            //         console.log(res);
            //       } else {
            //         // Address not saved
            //         if (res.msg = 'exists') {
            //           // address already exists
            //         } else {
            //           // console.log(res);
            //         }
            //       }
            //     });
            //   } else {
            //     // Not logged in 
            //     // this.give_menu_permission = true;
            //   }
            //   // Add to input box
            //   // $('.location-search-input').val(this.address);
            //   this.locationEntry = this.address;
            // } else {
            //   // ********** VERY IMPORTANT DELETE AFTER TESTING IS DONE ************** 
            //   // Delete after testing is done

            //   // this.give_menu_permission = true;


            //   localStorage.setItem('home_address', this.address);
            //   // Add to user's address if he is logged in
            //   if (this.authService.loggedIn()) {
            //     // console.log('user is logged in');
            //     // User is logged in 
            //     // send this address to save
            //     let address = {
            //       user_id: this.userId,
            //       address: this.address
            //     }
            //     // console.log(address);
            //     this.authService.saveAddress(address).subscribe(res => {
            //       if (res.success) {
            //         // Address saved
            //         console.log(res.msg);
            //       } else {
            //         // Address not saved
            //         if (res.msg == 'exists') {
            //           // address already exists
            //           console.log('exists');
            //         } else {
            //           console.log(res.msg);
            //         }
            //       }
            //     });
            //   } else {
            //     // console.log('not logged in');
            //   }
            //   this.locationEntry = this.address;
            //   $('.location-warning-div').show();
            // }
          });
        }
      });
    
      
    }

  }

  seeMenu() {
    // alert('menu');
    // Address in this.locationEntry
    if(this.locationEntry != undefined){

      if (this.locationEntry.includes('Madhapur') || this.locationEntry.includes('madhapur') || this.locationEntry == 'Madhapur' || this.locationEntry == 'madhapur'|| this.locationEntry == 'Madapur' || this.locationEntry == 'madapur' || this.locationEntry.includes('Madapur') || this.locationEntry.includes('madapur') ) {
        localStorage.setItem('home_address', this.locationEntry);
        // Add to user's address if he is logged in
        if (this.authService.loggedIn()) {
          // User is logged in 
      //     // send this address to save
          let address = {
            user_id: this.userId,
            address: this.locationEntry
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
                // console.log(res);
              }
            }
          });
          this.router.navigate(['/menu']);
        } else {
          // Navigate to menu
          this.router.navigate(['/menu']);
        }
      } else {
        this.locationEntry = this.address;
        $('.location-warning-div').show();
  
        // Remove later
        this.router.navigate(['/menu']);
      }
    }
    
  }

}
