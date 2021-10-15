import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ShowAttendanceComponent } from './show-attendance/show-attendance.component';

const routes: Routes = [
  {
    path : "user-list",
    component : UserListComponent
  },
  {
    path : "user-create",
    component : UserCreateComponent
  },
  {
    path : "attendance",
    component : AttendanceComponent
  },
  {
    path : "user-edit/:id",
    component : UserEditComponent
  },
  {
    path : "show-attendance",
    component : ShowAttendanceComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
