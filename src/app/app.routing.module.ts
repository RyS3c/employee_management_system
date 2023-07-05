import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModuleModule { }





// import { NgModule } from '@angular/core';
// import { RouterModule, Routes, CanActivateFn } from '@angular/router';
// import { EmployeeListComponent } from './employee-list/employee-list.component';
// import { CreateEmployeeComponent } from './create-employee/create-employee.component';
// import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
// import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

// const routes: Routes = [
//   {path : '', redirectTo: 'employee', pathMatch: 'full' },
//   {path : 'employees', component: EmployeeListComponent },
//   {path : 'add', component: CreateEmployeeComponent },
//   {path : 'update/:id', component: UpdateEmployeeComponent },
//   {path : 'details/:id', component: EmployeeDetailsComponent },
// ];

// @NgModule({
//   declarations: [],
//   imports: [
//     RouterModule.forRoot(routes)
//   ],
//   exports: [RouterModule]
// })
// export class AppRoutingModuleModule { }


