import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private fb:FormBuilder, private http: HttpClient) { }

  readonly baseURL = 'http://localhost:3000/api/employees/'

  employeeForm = this.fb.group({
    _id: [null],
    e_name: ['',Validators.required],
    e_position: ['',Validators.required],
    e_location: [''],
    e_salary: ['',Validators.required]
  })

  postEmployee(){
    return this.http.post(this.baseURL, this.employeeForm.value).pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
