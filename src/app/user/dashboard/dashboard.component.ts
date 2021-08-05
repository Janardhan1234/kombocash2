import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {    
    $('#sign-in-button').click(function(){
                  
      $('#sign_in').fadeIn({queue: false, duration: 'slow'});
  
  
  });
       $('.cross').click(function(){
     
      $('#sign_in').fadeOut({queue: false, duration: 'slow'});
      
  
  });
  
       $('#otp-submit').click(function(){
  $('#forgot-password').fadeIn({queue: false, duration: 'slow'});
  $('#sign-in-form').fadeOut( {queue: false, duration: 'slow'});
  $('#sign-in-form').animate({ 'left': "-700px" }, 'slow');
  
  });
  
  
  
      $('#business').click(function(){
         $("#vehicle").hide();
         $("#rent").hide();
         $("#student").hide();
         $("#medical").hide();
         $("#land").hide();
         $("#amount").fadeIn();
  
  
  // $('#business').fadeIn({queue: false, duration: 'slow'});
     $('#business').animate({ 'left': "-10px" }, 'slow').css("border-right","1px solid black");
  });
      $('#vehicle').click(function(){
         $("#business").hide();
         $("#rent").hide();
         $("#student").hide();
         $("#medical").hide();
         $("#land").hide();
         $("#amount").fadeIn();
  // $('#business').fadeIn({queue: false, duration: 'slow'});
     $('#vehicle').animate({ 'left': "-10px" }, 'slow');
  })
      $('#rent').click(function(){
         $("#vehicle").hide();
         $("#business").hide();
         $("#student").hide();
         $("#medical").hide();
         $("#land").hide();
         $("#amount").fadeIn();
  // $('#business').fadeIn({queue: false, duration: 'slow'});
     $('#rent').animate({ 'left': "-10px" }, 'slow');
  });
      $('#student').click(function(){
         $("#vehicle").hide();
         $("#rent").hide();
         $("#business").hide();
         $("#medical").hide();
         $("#land").hide();
         $("#amount").fadeIn();
  // $('#business').fadeIn({queue: false, duration: 'slow'});
     $('#student').animate({ 'left': "-10px" }, 'slow');
  });
      $('#medical').click(function(){
         $("#vehicle").hide();
         $("#rent").hide();
         $("#student").hide();
         $("#business").hide();
         $("#land").hide();
         $("#amount").fadeIn();
  // $('#business').fadeIn({queue: false, duration: 'slow'});
     $('#medical').animate({ 'left': "-10px" }, 'slow');
  });
      $('#land').click(function(){
         $("#vehicle").hide();
         $("#rent").hide();
         $("#student").hide();
         $("#medical").hide();
         $("#business").hide();
         $("#amount").fadeIn();
  // $('#business').fadeIn({queue: false, duration: 'slow'});
     $('#land').animate({ 'left': "-10px" }, 'slow');
  
  });
  
      $('#cross').click(function(){
         $("#vehicle").fadeIn();
         $("#rent").fadeIn();
         $("#student").fadeIn();
         $("#medical").fadeIn();
         $("#business").fadeIn();
         $("#land").fadeIn();
         $("#amount").hide();
         $("#business").css("border-right","0px");
      });
  
      $("#dropdown").on("click", function(e){
  
  if($(this).hasClass("open") ) {
  
  $(this).removeClass("open");
  $(this).children("ul").slideUp("fast");}
  else {
  $(this).addClass("open");
  $(this).children("ul").slideDown("fast");
  }
  });
  }

  


                             //   $(document).ready(function() {
               //    $('#example').DataTable();
               // } );


}
