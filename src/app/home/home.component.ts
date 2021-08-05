import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  // showSiginForm: boolean = false;
  // showForgotPasswordForm: boolean = false;
  // displaySignIn: boolean = false;
  collections: Object;
  loanForm: any;
  selectedItem: any;

  // @HostBinding('.cross') cross
  constructor(
    private router:Router,
    private apiService:ApiService,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar
    ) { }

  ngOnInit(): void {

    this.apiService.getCollection().subscribe(x =>{
      console.log(x);

    this.collections = x;
    console.log(this.collections);
    });

    



    // $('.cross').click(function () {

    //   console.log("close button");
      // if()
      // $('#sign-in-form,#sign_in,#forgot-password,#forgot-password-email').hide();

      // check paragraph once toggle effect is completed
      // if($("#sign_in").is(":visible")){
      // $("#sign_in").hide();
      // }


    // })
    // $('#sign-in-button').click(function () {
    //   console.log("signin button");
    //   // $('#sign_in').toggle();
    //   $('#sign-in-form').show();
    //   $('#sign_in').fadeIn();


    // })


    // $('#forgot-password-button').click(function () {
    //   $('#forgot-password-email').show("fast");
    //   $('#sign-in-form').hide();
    //   // $('#sign-in-form').animate({ 'left': "-700px" }, 'slow');

    // })

    $('#forgot-password-email-button').click(function () {
      $('#forgot-password').show("fast");
      $('#forgot-password-email').hide();
      // $('#forgot-password-email').animate({ 'left': "-700px" }, 'slow');

    })

    $(".toggle-password").click(function () {

      $(this).toggleClass("fa-eye fa-eye-slash");
      var input = $($(this).attr("toggle"));
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });




  }

  // $('.cross').click(function () {

  //   console.log("close button");
  //   // if()
  //   $('#sign-in-form,#sign_in,#forgot-password,#forgot-password-email').hide();

    // check paragraph once toggle effect is completed
    // if($("#sign_in").is(":visible")){
    // $("#sign_in").hide();
//  })

displaySigininForm(){
  console.log("siginform");
  // this.showSiginForm = true;
  // this.showForgotPasswordForm = true;
  }

  showSiginFormOnClick(event){
    console.log(event);
    // this.displaySignIn = event;

  }

  closeButton(){
    console.log("close button method")
    // $('#sign-in-form,#sign_in,#forgot-password,#forgot-password-email').hide();
    // this.showSiginForm = true;
  }

  selected(categoryId){
    this.selectedItem = categoryId;
  }

  categorySubmit(){
    console.log(this.selectedItem);
    this.router.navigate(['/query-form', this.selectedItem]);

  }

  

}
