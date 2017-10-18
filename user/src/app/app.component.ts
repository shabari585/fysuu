import { Component,OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RouterModule } from "@angular/router";
import { Http } from "@angular/http";

import { ValidateService } from "./services/validate.service";
import { AuthService } from "./services/auth.service";
declare var $: any;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public locationEntry: string;
  public location = {};
  public lat: number;
  public long: number;

  public initialLoginInput: string;
  public regNameInput: string;
  public regComNameInput: string;
  public regEmailInput: string;
  public regMobileInput: string;
  public regPwdInput: string;
  public regOTPInput: string;

  public loginEmailInput: string;
  public loginPasswordInput: string;

  public user:object;

  address:string;

  public uName:string;

  // geocoder: google.maps.Geocoder;

  constructor(private title: Title, private router: Router,private validate: ValidateService,private authService:AuthService,private http:Http) { }
  ngOnInit() {
    // Set title
    this.title.setTitle('Home');
  }


  // On clicking login/signup
  public loginSignupTrigger() {
    $('.fixed-dark-cover').hide();
    $('#login-fixed-dark-cover').css({ 'display': 'flex' });
    $('#email').keyup(function(){
      let input = $(this).val();
      // let input = this.initialLoginInput;
      if(input.length > 2){
        // Validate
        if(input == undefined || input == null || input == ''){
          $('#continue-btn').css({'background-color':'#b2b2b2'});
        }else{
          const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if(re.test(input)){
            $('#continue-btn').css({'background-color':'#6DA942'});
          }else{
            if(/^\d{10}$/.test(input)){
              $('#continue-btn').css({'background-color':'#6DA942'});
            }else{
              $('#continue-btn').css({'background-color':'#b2b2b2'});
            }
          }
        }
      }else{
        $('#continue-btn').css({'background-color':'#b2b2b2'});
      }

    }); 
  }

  // On clicking continue in first login/signup slide
  public firstConClick(input: string) {
    $('.err').html('');
    // Validate input
    if (this.validate.validateInput(input)) {
      // User has entered input
      // Checking if it is email
      if (this.validate.validateEmail(input)) {
        // User have entered email
        // Check if email is registered
        
        $('.fixed-dark-cover').hide();
        this.authService.authenticateEmail(input).subscribe(data=>{
          if(data.success){
            // Email exists
            $('#next-login-fixed-dark-cover').css({ 'display': 'flex' });
            this.loginEmailInput = this.initialLoginInput;
          }else{
            $('#next-reg-fixed-dark-cover').css({ 'display': 'flex' });
            this.regEmailInput = this.initialLoginInput;
          }
        });
        $('.err').html('');
      } else if (this.validate.validateMobile(input)) {
        // User entered mobile
        $('.err').html('');
        $('.fixed-dark-cover').hide();

        this.authService.authenticateMobile(input).subscribe(data => {
          if (data.success) {
            // Mobile number exists
            $('#next-login-fixed-dark-cover').css({ 'display': 'flex' });
            $('#login-email').keyup(function(){
            });
          } else {
            $('#next-reg-fixed-dark-cover').css({ 'display': 'flex' });
          }
        });
        
      } else {
        $('.err').html('Please enter valid Email or Mobile number');
      }
    } else {
      $('.err').html('Please enter valid Email or Mobile number');
    }
  }

  // On clicking enter OTP button
  public OtpBtnClick() {
    $('.otp-span').show('slow');
    $('#accept-btn').hide();
    $('#signup-btn').css({ 'display': 'block' });

  }

  public otpKeyUp(event: any) {
    var otp = event.target.value;
    if (otp.length == 4) {
      $('#accept-btn').css({ 'background-color': '#f00', 'color': '#fff' });
    }
  }

  public LoginSubmit(loginEmailInput: string, loginPasswordInput: string) {
    $('.err').html('');
    this.loginEmailInput = loginEmailInput;
    this.loginPasswordInput = loginPasswordInput;
    const user={
      email: loginEmailInput,
      password: loginPasswordInput
    };
    // valiadte
    if(this.validate.validateInput(loginEmailInput) && this.validate.validateInput(loginPasswordInput)){
      if (this.validate.validateEmail(loginEmailInput)) {
        // User have entered email
        // Check if email is registered

        // $('.fixed-dark-cover').hide();
        this.authService.authenticateEmail(loginEmailInput).subscribe(data => {
          if (data.success) {
            // Email exists
            // Log user in
            this.authService.authenticateUser(user).subscribe(dat => {
              // console.log(dat);
              if (dat.success) {

                this.uName = dat.user.name;

                this.authService.storeUserData(dat.token, dat.user);
                // this.router.navigate(['/home']);
                window.location.reload();
                  $('.login-trig-div').hide();
                  $('.account-trig-div').show();
                  $('.fixed-dark-cover').hide();
              }
              else {
                $('.err').html(dat.msg);
              }
            });
          } else {
            $('.err').html('That email is not registered with us');
          }
        });
        $('.err').html('');
      } else{
        $('.err').html('Please enter valid input');
      }
    }else{
      $('.err').html('All fields are required');
    }
    // Log user in
    // 
    // this.showError('login-err','Password wrong !');
    // Redirect to Menu
    
  }

  public SignUpClick(regNameInput: string, regEmailInput: string, regMobileInput: string, regPwdInput: string, regOTPInput: string) {
    $('.err').html('');
    // validate and signup
    this.regNameInput = regNameInput;
    this.regEmailInput = regEmailInput;
    this.regMobileInput = regMobileInput;
    this.regPwdInput = regPwdInput;
    this.regOTPInput = regOTPInput;

    this.user={
      email: this.regEmailInput,
      mobile: this.regMobileInput,
      name: this.regNameInput,
      password: this.regPwdInput,
      address: [],
      rewardPoints: 0
    }
    

    // Validate inputs
    if (
      this.validate.validateInput(regNameInput) && 
      this.validate.validateInput(regEmailInput) && 
      this.validate.validateInput(regMobileInput) && 
      this.validate.validateInput(regPwdInput)
    ){
      // Validate Email and Mobile
      if(this.validate.validateEmail(regEmailInput)){
        if(this.validate.validateMobile(regMobileInput)){
          // Valid email and mobile numbers. register user
          this.authService.registerUser(this.user).subscribe(res=>{
            if(res.success){
              window.location.reload();
            }else{
              // Show Error
            }
          });
        }else{
          $('.err').html('Please Enter Valid Mobile number');
        }
      }else{
        $('.err').html('Please Enter Valid Email');
      }
    }else{
      $('.err').html('All input fields are required');
    }

    $('.login-trig-div').hide();
    $('.account-trig-div').show();
  }

  public showError(context: string, error: string) {
    switch (context) {
      case 'login-err':
        $('.login-err').html(error);
        break;

      default:
        break;
    }
  }

  // Onclicking Close button
  public mainClose() {
    $('.fixed-dark-cover').hide();
  }

  onLogoutClick() {
    this.authService.logout();
    this.router.navigate(['/login']);
    return false;
  }

}
