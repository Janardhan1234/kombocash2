import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import {MatDialog,  MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatMenuTrigger} from '@angular/material/menu';
import { FooterComponent } from '../footer/footer.component';
import { SigninComponent } from '../signin/signin.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;


  // showSiginForm:boolean = false;
  // showForgotPasswordForm: boolean = false;
  // displayForgotPasswordEmail: boolean = false;
  displaySignIn: boolean = false;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    // $('.cross').click(function(){
    //   // if()
    //    $('#sign-in-form,#sign_in,#forgot-password,#forgot-password-email').hide();
    
     // check paragraph once toggle effect is completed
     // if($("#sign_in").is(":visible")){
         // $("#sign_in").hide();
     // }
       

// })
      //  $('#sign-in-button').click(function(){
      //     // $('#sign_in').toggle();
      //  $('#sign-in-form').show();
//        $('#sign_in').fadeIn();  ----


// })
       

//         $('#forgot-password-button').click(function(){
// $('#forgot-password-email').show("fast");
// $('#sign-in-form').hide();
// // $('#sign-in-form').animate({ 'left': "-700px" }, 'slow');

// })

           $('#forgot-password-email-button').click(function(){
$('#forgot-password').show("fast");
$('#forgot-password-email').hide();
// $('#forgot-password-email').animate({ 'left': "-700px" }, 'slow');

}) 

$(".toggle-password").click(function() {

$(this).toggleClass("fa-eye fa-eye-slash");
var input = $($(this).attr("toggle"));
if (input.attr("type") == "password") {
input.attr("type", "text");
} else {
input.attr("type", "password");
}
});


    

}

openDialog() {
  const dialogRef = this.dialog.open(SigninComponent);

  // Manually restore focus to the menu trigger since the element that
  // opens the dialog won't be in the DOM any more when the dialog closes.
  dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
}


// displaySigininForm(){
//   console.log("header sigin form");
// // this.showSiginForm = true;
// // this.showForgotPasswordForm = true;
// // this.displayForgotPasswordEmail = true;
// this.displaySignIn = true;
// }

@Output() sendSignInformDisplay : EventEmitter <boolean> = new EventEmitter<boolean>();
public displaySigininForm($event) {  
  this.sendSignInformDisplay.emit(true);
}

dispalyForgotPassword(){
  // this.showForgotPasswordForm = true;
  // this.showSiginForm = false;
}
  

}
