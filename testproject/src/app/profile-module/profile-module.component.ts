import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-profile-module',
  templateUrl: './profile-module.component.html',
  styleUrls: ['./profile-module.component.css']
})
export class ProfileModuleComponent implements OnInit {

  user : User;
  constructor() { }

  ngOnInit(): void {
    
  }

}
