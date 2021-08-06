import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signInForm: any;

  constructor(
    private router:Router,
    private formBuilder: FormBuilder,
    private apiService:ApiService,
    private snackbar: MatSnackBar,
    public dialogRef: MatDialogRef<any>,
    // @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    // console.log(this.data);
    this.signInForm = this.formBuilder.group({
      email: ["",[Validators.required,]],
      password: ["",Validators.required]
    });
      
  }

  signInSubmit(event){
    event.preventDefault();
    let obj={
      email: this.signInForm.get('email').value,
      password:  this.signInForm.get('password').value,
     
    }

    console.log(obj);

    this.apiService.postUserLogin(obj).subscribe(result=>{
      console.log(result);
      // this.userDetails = result;
      // this.listData.push(result);
      // this.userData = result;
      if(result.code === 200){
        this.snackbar.open("successfully signed in",'',{
          duration:5000
        })
        this.close();
        this.signInForm.reset();
        this.router.navigate(['/user']);
      }else{
        // console.log(error);
      this.snackbar.open("wrong username/password",'',{
        duration:5000
      })      
      // this.router.navigate(['/user']);  
      }
      
      
    },
    error => {
      console.log(error);
      // this.snackbar.open("wrong username/password",'',{
      //   duration:5000
      // })
    }
    ) 
  
  }

  close(){
    this.dialogRef.close(true);
  }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }
}
