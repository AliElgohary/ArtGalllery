import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class OrderItemService {
  private baseURL: string = 'http://localhost:8000/api/v1/item';

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

  addOrderItem(orderItemData: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post<any>(this.baseURL, orderItemData, { headers }).pipe(
      catchError((error) => {
        console.error('Error adding order item:', error);
        return throwError(error);
      })
    );
  }
  getAllOrderItems(): Observable<any>{
    const headers = this.getHeaders();
    return this.http.get<any>(this.baseURL, {headers}).pipe(
      catchError((error) => {
        console.error('Error getting ordered items:', error);
        return throwError(error);
      })
    )
  }
}
