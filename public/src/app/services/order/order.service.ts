import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { APIres } from 'src/app/modules/history/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private baseURL: string = 'http://localhost:8000/api/v1/order';

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getHeaders(): HttpHeaders {
    const authToken = this.authService.getToken();
    if (!authToken) {
      throw new Error('Authentication token is missing.');
    }
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    });
  }

  getOrderHistory(): Observable<APIres> {
    const headers = this.getHeaders();
    return this.http.get<APIres>(`${this.baseURL}/history`, { headers }).pipe(
      catchError((error) => {
        console.error('Error fetching order history:', error);
        return throwError(error);
      })
    );
  }

  createOrder(orderData: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post<any>(this.baseURL, orderData, { headers }).pipe(
      catchError((error) => {
        console.error('Error creating order:', error);
        return throwError(error);
      })
    );
  }
}
