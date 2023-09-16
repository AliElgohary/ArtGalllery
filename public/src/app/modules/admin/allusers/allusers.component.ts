import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';

interface User {
  id: number;
  email: string;
  name: string;
  phone: number;
  adress: string;
}

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.scss'],
})
export class AllusersComponent implements OnInit {
  AllUsers: User[] = [];
  errorMessage: string = '';

  constructor(private http: HttpClient, private auth: AuthService) {}

  ngOnInit(): void {
    const authToken = this.auth.getToken();

    if (!authToken) {
      throw new Error(`Auth token not found`);
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + authToken,
    });

    this.http
      .get<any[]>('http://localhost:8000/api/v1/auth', { headers })
      .pipe(
        map((response: any[]) => {
          return response.map((userFromApi) => {
            return {
              id: userFromApi.id,
              email: userFromApi.email,
              name: userFromApi.name,
              phone: userFromApi.phone,
              adress: userFromApi.address,
            };
          });
        }),
        catchError((error) => {
          this.errorMessage = 'An error occurred while fetching user data.';
          console.error('Error fetching users:', error);
          throw error;
        })
      )
      .subscribe(
        (users) => {
          this.AllUsers = users;
        },
        (error) => {
          console.error('Error fetching users:', error);
        }
      );
  }
}
