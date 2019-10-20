import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import { RegistrationService } from '../registration.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   states=['TN','TX','AL'];
   constructor(private fb:FormBuilder,private _registrationService:RegistrationService,private router:Router) {}

   get firstName(){
     return this.registrationForm.get('firstname');
   }

   get userName(){
    return this.registrationForm.get('username');
   }

   registrationForm=this.fb.group({
     firstname:['',[Validators.required,Validators.minLength(3)]],
     lastname:[''],
     username:['',[Validators.required,Validators.minLength(3)]],
     password:[''],
     address:this.fb.group({
       address1:[''],
       address2:[''],
       city:[''],
       state:[''],
       zip:['']
     })
     
   });

  

 ngOnInit() {
  }

  onSubmit(){
    console.log(this.registrationForm.value);

    this._registrationService.register(this.registrationForm.value).subscribe(
      response =>{
        console.log('Successful Registration');
        let token = (<any>response).token;
        localStorage.setItem("jwt",token);
        this.router.navigate(['/dashboard']);
      },
      error=>console.log('Error',error)
    )
  }

}
