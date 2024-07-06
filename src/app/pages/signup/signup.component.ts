import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar
  ) { }

  public user: User = {
    userName: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  };

  ngOnInit(): void {
  }



  registerUser() {
    if(this.user.userName == '' || this.user.userName == null) {
      this.snackBar.open("Username is required !!", '', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
    }
    
    this.userService.addUser(this.user).subscribe(
      (data: any) => {
        Swal.fire('User Registered Successfully !!',  'User Id - ' + data.userName , 'success');
      }, (error) => {
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong !!',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
    )
  }

}
