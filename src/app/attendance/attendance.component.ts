import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAttendanceService } from '../user-attendance.service';
import { UserAttendance } from '../attendance-model';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  id: number = 0;
  userList:Array<UserAttendance> = []
  userAttendance:FormGroup
  constructor(private userService:UserAttendanceService,private router:Router) {
    this.userAttendance = new FormGroup({
      'userID': new FormControl('', Validators.required),
      'date': new FormControl('', Validators.required),
      'status': new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {

  }

  submitAttendance(){
    Object.keys(this.userAttendance.controls).forEach(field => {
      const control = this.userAttendance.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });

    if(this.userAttendance.valid){
      console.log(this.userAttendance.value);
      this.userService.saveUser(this.userAttendance.value).subscribe(() => {

        this.router.navigate([`/show-attendance`])
      },() => {
        alert("Something Went Wrong")
      })  
    }
  }

}