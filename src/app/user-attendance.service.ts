import { Injectable } from '@angular/core';
import { UserAttendance } from './attendance-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAttendanceService {

  attendanceData:Array<UserAttendance> = [];
  constructor(private http:HttpClient) { }

  saveUser(attendance:UserAttendance){
    console.log(attendance)
    return this.http.post(`https://6167d7e1ba841a001727c43f.mockapi.io/attendance/`, JSON.stringify(attendance), {headers: {
      'Content-Type': 'application/json'
    }})
  }
  
  getAllUser(){
    return this.http.get<Array<UserAttendance>>(`https://6167d7e1ba841a001727c43f.mockapi.io/attendance/`)
  }

  getUserByID(id:number){
    return this.http.get<UserAttendance>(`https://6167d7e1ba841a001727c43f.mockapi.io/api/attendance/${id}`)
  }

}