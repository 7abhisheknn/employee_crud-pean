import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styles: [
  ]
})
export class EmployeeFormComponent {
  constructor(public service: EmployeeService) { }

  onSubmit() {
    if (this.service.employeeForm.valid)
      console.log(this.service.employeeForm.value);

  }
}
