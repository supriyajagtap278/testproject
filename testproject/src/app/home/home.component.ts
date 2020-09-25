import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { ApiService } from '../api.service';
import { User } from '../user.model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registrationForm: FormGroup;
  submitted = false;
  user : User;

  constructor(private apiService : ApiService, 
              private router : Router) { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      firstName: new FormControl('', [Validators.required,
      Validators.maxLength(50),
      Validators.pattern('^[a-zA-Z ]*$')]),
      lastName: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      phoneNumber: new FormControl('',[Validators.required]),
      age: new FormControl('',[]),
      state: new FormControl('',[]),
      country: new FormControl('',[]),
      address: new FormControl('',[]),
      profile: new FormControl('')
      /* state: new FormControl('',[Validators.required]),
      country: new FormControl('',[Validators.required]),
      address: new FormControl('',[Validators.required]) */
    });
  }

  onSubmit(form: FormGroup) {
    this.submitted = true;
    console.log("FORM", form.valid);
    if(form.valid) {
      this.user = new User(0, form.value.firstName,
                           form.value.lastName,
                           form.value.email,
                           form.value.phoneNumber,
                           form.value.age,
                           form.value.state,
                           form.value.country,
                           form.value.address,
                           form.value.subscribeToNewsletter);

                           
      this.apiService.registerUser(this.user).subscribe((data)=> {
        console.log("Record added");
        this.router.navigateByUrl('/profile');
      }, (err) => {
        console.log("Something went wrong!");
      });
    }
    
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.apiService.uploadFile(file).subscribe((data)=> {
        console.log("Record added",data);
      }, (err) => {
        console.log("Something went wrong!",err);
      });
      this.registrationForm.get('profile').setValue(file);
    }
  }

}
