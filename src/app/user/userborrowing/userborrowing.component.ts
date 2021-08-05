import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userborrowing',
  templateUrl: './userborrowing.component.html',
  styleUrls: ['./userborrowing.component.css']
})
export class UserborrowingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    
         $('#sign-in-button').click(function(){
         
         $('#sign_in').fadeIn({queue: false, duration: 'slow'});
         
         
         })
          $('.cross').click(function(){
         
         $('#sign_in').fadeOut({queue: false, duration: 'slow'});
         
         
         })
         
          $('#otp-submit').click(function(){
         $('#forgot-password').fadeIn({queue: false, duration: 'slow'});
         $('#sign-in-form').fadeOut( {queue: false, duration: 'slow'});
         $('#sign-in-form').animate({ 'left': "-700px" }, 'slow');
         
         })
         
           $("#dropdown").on("click", function(e){
         
         if
         ($(this).hasClass("open") ) {
         
         $(this).removeClass("open");
         $(this).children("ul").slideUp("fast");}
         else {
         $(this).addClass("open");
         $(this).children("ul").slideDown("fast");
         }
         });
      
  }

}
