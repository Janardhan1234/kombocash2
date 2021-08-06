import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-usercontactus',
  templateUrl: './usercontactus.component.html',
  styleUrls: ['./usercontactus.component.css']
})
export class UsercontactusComponent implements OnInit {
  userContactForm: any;
  selectedItem: any;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {

    this.userContactForm = this.formBuilder.group({
      name: ["",Validators.required],
      email: ["",Validators.required],
      phone: ["",Validators.required],
      // Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)
      subject: ["",Validators.required],
      message: ["",Validators.required],
      
    });
    
     
               
  }

  selectedItemFromList(item){
    console.log(item);
    this.selectedItem = item;
  }

  addUserContact(event){
    event.preventDefault();
    let obj={
      name: this.userContactForm.get('name').value,
      email:  this.userContactForm.get('email').value,
      phone: this.userContactForm.get('phone').value,
      subject: this.selectedItem,
      message:  this.userContactForm.get('message').value,      
      
    }

    console.log(obj);

    this.apiService.postAddContact(obj).subscribe(result=>{
      console.log(result);
      // this.userDetails = result;
      // this.listData.push(result);
      // this.userData = result;
      this.snackbar.open("Your Query is submited Succesfully we will contact you further",'',{
        duration:5000
      })
      this.userContactForm.reset();
      
    },
    error => {console.log(error);}
    ) 
  
  }

}
