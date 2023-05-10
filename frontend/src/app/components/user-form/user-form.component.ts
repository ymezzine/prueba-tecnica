import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  form:FormGroup

  constructor(private fb: FormBuilder, private _userService: UserService) {
    this.form = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      username: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  addUser() {
    const user: User = {...this.form.value};

    const newList = this._userService.addUser(user)
  }
}
