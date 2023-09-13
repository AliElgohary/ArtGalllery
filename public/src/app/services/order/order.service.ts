import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { APIres } from 'src/app/modules/history/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private baseURL: string = 'http://localhost:8000/api/v1/order';
  constructor(private http: HttpClient, private authService: AuthService) {}

  getOrderHistory(): Observable<APIres> {
    const authToken = this.authService.getToken();

    if (!authToken) {
      throw new Error('Authentication token is missing.');
    }

    const headers = new HttpHeaders({
      'content-type': 'application/json',
      authorization: `Bearer ${authToken}`,
    });

    return this.http.get<APIres>(`${this.baseURL}/history`, { headers });
  }
}
