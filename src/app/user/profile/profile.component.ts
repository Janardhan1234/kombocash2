import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

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
               

               
                  $(document).ready(function() {

    
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e:any) {
                $('.profile-pic').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    

    $(".file-upload").on('change', function(){
        readURL(this);
    });
    
    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    });
});

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
