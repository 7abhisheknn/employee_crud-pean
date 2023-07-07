import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styles: [
  ]
})
export class EmployeesComponent implements OnInit{

  constructor(public service: EmployeeService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.fetchEmployees();
  }

  populateForm(selectedRecord: Employee) {
    this.service.employeeForm.setValue({
      e_id: selectedRecord.e_id,
      e_name: selectedRecord.e_name,
      e_position: selectedRecord.e_position,
      e_location: selectedRecord.e_location,
      e_salary: selectedRecord.e_salary
    });
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?'))
      this.service.deleteEmployee(id).subscribe(res => {
        this.service.fetchEmployees();
        this.service.employeeForm.reset();
        this.toastr.error('Deleted successfully', 'Employee Register');
      });
  }
}
