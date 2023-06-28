import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private fb:FormBuilder) { }

  employeeForm = this.fb.group({
    _id: [null],
    e_name: ['',Validators.required],
    e_position: ['',Validators.required],
    e_location: [''],
    e_salary: ['',Validators.required]
  })
}
