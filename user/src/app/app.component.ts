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
  public basket_num:number;

  isInputEmail:boolean = false;
  isInputMobile:boolean = false;

  // geocoder: google.maps.Geocoder;

  constructor(private title: Title, private router: Router,private validate: ValidateService,private authService:AuthService,private http:Http) { }
  ngOnInit() {
    // Set title
    this.title.setTitle('Home');

    this.basket_num = parseInt(localStorage.getItem('basket_number'));
    if(this.basket_num == undefined || this.basket_num == null || this.basket_num == 0 || isNaN(this.basket_num) == true){
      // redirect to menu
      this.basket_num = 0;
      // alert('no');
    }else{
      // this.basket_num;
    }

    $(document).keypress(function(e) {
      if(e.which == 13) {
          // Login trigger tab is visible
          if($('#login-fixed-dark-cover').is(':visible')){
            // Trigger continue-btn
            $('#continue-btn').trigger('click');
          }
          // Sign up tab is visible
          if($('#next-reg-fixed-dark-cover').is(':visible')){
            // OTP and sign up buttons
            if($('#reg-otp').val()){
              // trigger sign-up btn
              $('#signup-btn').trigger('click');
            }else{
              // Trigger otp btn
              $('#otp-btn').trigger('click');
            }
          }
          // Login tab is visible
          if($('#next-login-fixed-dark-cover').is(':visible')){
            // trigger login-btn
            $('#login-btn').trigger('click');
          }
      }
    });
    
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
            this.loginEmailInput = this.initialLoginInput;
            this.isInputEmail = true;
            $('#next-login-fixed-dark-cover').css({ 'display': 'flex' });
            this.loginEmailInput = this.initialLoginInput;
            $('#login-password').keyup(function(e){
              let inp = $(this).val();
              if(inp.length>5){
                $('#login-btn').css({'background-color':'#6DA942'});
              }else{
                $('#login-btn').css({'background-color':'#b2b2b2'});
              }
            });
          }else{
            $('#next-reg-fixed-dark-cover').css({ 'display': 'flex' });
            this.regEmailInput = this.initialLoginInput;
            $('#next-reg-fixed-dark-cover').keyup(function(e) {
              let regname = $('#reg-name').val();
              let regemail = $('#reg-email').val();
              let regmobile = $('#reg-mobile').val();
              let regpwd = $('#reg-pwd').val();
              let otp = $('#reg-otp').val();
              // Validate inputs
              if (
                regname && 
                regemail && 
                regmobile && 
                regpwd
              ){
                if(regpwd.length>5){
                  $('#otp-btn').css({'background-color':'#6DA942'});
                  if(otp){
                    $('#signup-btn').css({'background-color':'#6DA942'});
                  }
                }
              }else{
                $('#otp-btn').css({'background-color':'#b2b2b2'});
              }
            });
          }
        });
        $('.err').html('');
      } else if (this.validate.validateMobile(input)) {
        // User entered mobile
        $('.err').html('');
        $('.fixed-dark-cover').hide();

        this.authService.authenticateMobile(input).subscribe(data => {
          if (data.success) {
            // this.loginMobileInput = this.initialLoginInput;
            this.loginEmailInput = this.initialLoginInput;
            this.isInputMobile = true;
            // Mobile number exists
            $('#next-login-fixed-dark-cover').css({ 'display': 'flex' });
            $('#login-email').keyup(function(){
            });
          } else {
            this.regMobileInput = this.initialLoginInput;
            $('#next-reg-fixed-dark-cover').css({ 'display': 'flex' });
          }
        });
        
      } else {
        $('.err').html('Please enter valid Email or Mobile number');
        $('#email').css({'border-color':'#fa0000'});
      }
    } else {
      $('.err').html('Please enter valid Email or Mobile number');
      $('#email').css({'border-color':'#fa0000'});
    }
  }


  public otpKeyUp(event: any) {
    var otp = event.target.value;
    if (otp.length == 6) {
      $('#accept-btn').css({ 'background-color': '#f00', 'color': '#fff' });
    }
  }

  public LoginSubmit(loginEmailInput: string, loginPasswordInput: string) {

    this.isInputEmail = false;
    this.isInputMobile = false;
    $('.err').html('');

    this.loginEmailInput = loginEmailInput;
    this.loginPasswordInput = loginPasswordInput;
    // Check if password has atleast 6 characters
    
    // valiadte
    if(this.validate.validateInput(loginEmailInput) && this.validate.validateInput(loginPasswordInput)){
      if (this.validate.validateEmail(loginEmailInput)) {
        const user={
          email: loginEmailInput,
          password: loginPasswordInput
        };
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
        if(this.validate.validateMobile(loginEmailInput)){
          // User gave mobile
          this.isInputMobile = true;
          const user={
            email: loginEmailInput,
            password: loginPasswordInput
          };

          
          this.authService.authenticateMobile(loginEmailInput).subscribe(data => {
            if (data.success) {
              // Mobile exists
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



          
        }else{
          $('.err').html('Please enter valid input');
        }
      }
    }else{
      $('.err').html('All fields are required');
      if(this.validate.validateInput(loginEmailInput)){
        $('#login-email').css({'border-color':'#fa0000'});
      }
    }
    
  }

   // On clicking enter OTP button
   public OtpBtnClick() {

    $('.err').html('');
    // Validate inputs
    if (
      this.validate.validateInput(this.regNameInput) && 
      this.validate.validateInput(this.regEmailInput) && 
      this.validate.validateInput(this.regMobileInput) && 
      this.validate.validateInput(this.regPwdInput)
    ){
      // Validate Email and Mobile
      if(this.validate.validateEmail(this.regEmailInput)){
        if(this.validate.validateMobile(this.regMobileInput)){
          if(this.regPwdInput.length > 6){

            this.authService.authenticateMobile(this.regMobileInput).subscribe(data => {
              if (data.success) {
                // Mobile exists
                // Send otp
                this.authService.sendOtp(this.regMobileInput).subscribe(res=>{
                  console.log(res);
                });
                $('.otp-span').show('slow');
                $('#otp-btn').hide();
                $('#signup-btn').css({ 'display': 'block' });
                $('.err').html('That mobile number is already registered with us');
              } else {
                // Send otp
                this.authService.sendOtp(this.regMobileInput).subscribe(res=>{
                  console.log(res);
                });
                $('.otp-span').show('slow');
                $('#otp-btn').hide();
                $('#signup-btn').css({ 'display': 'block' });
              }
            });


            

          }else{
            $('.err').html('Please Enter password with atleast 6 characters');
            $('#reg-pwd').css({'border-color':'#fa0000'});
          }
        }else{
          $('.err').html('Please Enter Valid Mobile number');
          $('#reg-mobile').css({'border-color':'#fa0000'});
        }
      }else{
        $('.err').html('Please Enter Valid Email');
        $('#reg-email').css({'border-color':'#fa0000'});
      }
    }else{
      $('.err').html('All input fields are required');
      if(!this.validate.validateInput(this.regNameInput)){
        $('#reg-name').css({'border-color':'#fa0000'});
      }
      if(!this.validate.validateInput(this.regEmailInput)){
        $('#reg-email').css({'border-color':'#fa0000'});
      }
      if(!this.validate.validateInput(this.regMobileInput)){
        $('#reg-mobile').css({'border-color':'#fa0000'});
      }
      if(!this.validate.validateInput(this.regPwdInput)){
        $('#reg-pwd').css({'border-color':'#fa0000'});
      }
    }

    

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
      rewardPoints: 0,
      otp:this.regOTPInput
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
          if(regPwdInput.length > 6){
            // Valid email and mobile numbers. register user
            this.authService.registerUser(this.user).subscribe(res=>{
              if(res.success){
                window.location.reload();
              }else{
                // Show Error
                // if(res.msg = )
                if(res.msg.message = 'otp_not_verified'){
                  $('.err').html('Please enter valid OTP');
                  $('#reg-otp').css({'border-color':'#fa0000'});
                }
              }
            });

          }else{
            $('.err').html('Please Enter password with atleast 6 characters');
            $('#reg-pwd').css({'border-color':'#fa0000'});
          }
        }else{
          $('.err').html('Please Enter Valid Mobile number');
          // Hightlight mogile number
          $('#reg-mobile').css({'border-color':'#fa0000'});
        }
      }else{
        $('.err').html('Please Enter Valid Email');
        $('#reg-email').css({'border-color':'#fa0000'});
      }
    }else{
      $('.err').html('All input fields are required');
      if(!this.validate.validateInput(this.regNameInput)){
        $('#reg-name').css({'border-color':'#fa0000'});
      }
      if(!this.validate.validateInput(this.regEmailInput)){
        $('#reg-email').css({'border-color':'#fa0000'});
      }
      if(!this.validate.validateInput(this.regMobileInput)){
        $('#reg-mobile').css({'border-color':'#fa0000'});
      }
      if(!this.validate.validateInput(this.regPwdInput)){
        $('#reg-pwd').css({'border-color':'#fa0000'});
      }
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

  clickedOnTerms(){
    $('.fixed-dark-cover').hide();
  }

  onLogoutClick() {
    this.authService.logout();
    this.router.navigate(['/home']);
    return false;
  }

}
