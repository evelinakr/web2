import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

import { Department } from './department';

@Injectable({
  providedIn: 'root'
})

export class DepartmentService {

  private departmentsUrl = 'api/departments';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient, private messageService: MessageService) { }

  /** GET departments from the server */
  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.departmentsUrl)
      .pipe(
        tap(_ => this.log('fetched departments')),
        catchError(this.handleError<Department[]>('getDepartments', []))
      );
  }

  /** GET department by id. Return `undefined` when id not found */
  getDepartmentNo404<Data>(id: number): Observable<Department> {
    const url = `${this.departmentsUrl}/?id=${id}`;
    return this.http.get<Department[]>(url)
      .pipe(
        map(departments => departments[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} department id=${id}`);
        }),
        catchError(this.handleError<Department>(`getDepartment id=${id}`))
      );
  }

  /** GET department by id. Will 404 if id not found */
  getDepartment(id: number): Observable<Department> {
    const url = `${this.departmentsUrl}/${id}`;
    return this.http.get<Department>(url).pipe(
      tap(_ => this.log(`fetched department id=${id}`)),
      catchError(this.handleError<Department>(`getDepartment id=${id}`))
    );
  }

  /* GET departments whose name contains search term */
  searchDepartments(term: string): Observable<Department[]> {
    if (!term.trim()) {
      // if not search term, return empty department array.
      return of([]);
    }
    return this.http.get<Department[]>(`${this.departmentsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found departments matching "${term}"`) :
        this.log(`no departments matching "${term}"`)),
      catchError(this.handleError<Department[]>('searchDepartments', []))
    );
  }

  /** POST: add a new department to the server */
  addDepartment(department: Department): Observable<Department> {
    return this.http.post<Department>(this.departmentsUrl, department, this.httpOptions).pipe(
      tap((newTask: Department) => this.log(`added hero w/ id=${newTask.id}`)),
      catchError(this.handleError<Department>('addDepartment'))
    );
  }

  /** DELETE: delete the department from the server */
  deleteDepartment(department: Department | number): Observable<Department> {
    const id = typeof department === 'number' ? department : department.id;
    const url = `${this.departmentsUrl}/${id}`;

    return this.http.delete<Department>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted department id=${id}`)),
      catchError(this.handleError<Department>('deleteDepartment'))
    );
  }

  /** PUT: update the department on the server */
  updateDepartment(department: Department): Observable<any> {
    return this.http.put(this.departmentsUrl, department, this.httpOptions).pipe(
      tap(_ => this.log(`updated department id=${department.id}`)),
      catchError(this.handleError<any>('updateDepartment'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`DepartmentService: ${message}`);
  }

}

