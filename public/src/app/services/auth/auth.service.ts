import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from 'src/app/modules/auth/user.model';

interface RegistrationData {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(credentials: LoginCredentials): Observable<User> {
    return this.http
      .post<User>('http://localhost:8000/api/v1/auth/login', credentials)
      .pipe(
        tap((user: User) => {
          this.isAuthenticatedSubject.next(true);
          this.currentUserSubject.next(user);
        }),
        catchError((error) => {
          return throwError('Login failed: ' + error.message);
        })
      );
  }

  register(formData: RegistrationData): Observable<any> {
    return this.http
      .post('http://localhost:8000/api/v1/auth/register', formData)
      .pipe(
        tap((response) => {
        }),
        catchError((error) => {
          return throwError('Registration failed: ' + error.message);
        })
      );
  }

  logout(): void {
    this.isAuthenticatedSubject.next(false);
    this.currentUserSubject.next(null);
  }
}
