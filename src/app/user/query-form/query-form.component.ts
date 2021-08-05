import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-query-form',
  templateUrl: './query-form.component.html',
  styleUrls: ['./query-form.component.css']
})
export class QueryFormComponent implements OnInit {
  loanForm: any;

  constructor(private apiService:ApiService,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.loanForm = this.formBuilder.group({
      email: ["",[Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      username: ["",Validators.required],
      number: ["",Validators.required],
      for:["", Validators.required],
      // Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)
      address: ["",Validators.required],
      location: ["",Validators.required],
      amount: ["",Validators.required ],
      
    });
  }

  submitLoanForm(event){
    event.preventDefault();
    let obj={
      
      email:  this.loanForm.get('email').value,
      username: this.loanForm.get('username').value,
      number: this.loanForm.get('number').value,
      for:  this.loanForm.get('for').value,
      
      address: this.loanForm.get('address').value,
      location: this.loanForm.get('location').value,
      amount: this.loanForm.get('amount').value,
    }

    console.log(obj);

    this.apiService.postLoanQuery(obj).subscribe(result=>{
      console.log(result);
      // this.userDetails = result;
      // this.listData.push(result);
      // this.userData = result;
      this.snackbar.open("Thanks for applling loan .Your Query is recorded we will contact you soon",'',{
        duration:5000
      })
      this.loanForm.reset();
      
    },
    error => {console.log(error);}
    ) 
  
  }

}
