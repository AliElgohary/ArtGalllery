import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-orderstatus',
  templateUrl: './orderstatus.component.html',
  styleUrls: ['./orderstatus.component.scss'],
})
export class OrderstatusComponent implements OnInit {
  orders: any[] = [];
  isEditFormOpen: boolean = false;
  updatedOrder: any = {};

  constructor(private http: HttpClient, private auth: AuthService) {}

  ngOnInit(): void {
    this.fetchOrders();
  }

  fetchOrders() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.getToken(),
    });

    this.http.get('http://localhost:8000/api/v1/order', { headers }).subscribe(
      (response: any) => {
        this.orders = response.data;
      },
      (error) => {
        console.error('Error fetching orders:', error);
      }
    );
  }

  deleteOrder(orderId: number) {
    const order = this.orders.find((o) => o.id === orderId);
    if (order && order.items) {
      for (const item of order.items) {
        this.http
          .delete(`http://localhost:8000/api/v1/item/${item.id}`, {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${this.auth.getToken()}`
            })
          })
          .subscribe(
            () => {
              console.log('Order item deleted successfully');
            },
            (error) => {
              console.error('Error deleting order item:', error);
            }
          );
      }
    }

    this.http
      .delete(`http://localhost:8000/api/v1/order/${orderId}`, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.auth.getToken()}`
        })
      })
      .subscribe(
        () => {
          console.log('Order deleted successfully');
          this.fetchOrders();
        },
        (error) => {
          console.error('Error deleting order:', error);
        }
      );
  }

  editOrderModal(order: any) {
    console.log('Editing order:', order);
    this.updatedOrder = { ...order };
    this.isEditFormOpen = true;
  }

  closeEditForm() {
    this.isEditFormOpen = false;
  }

  editOrder() {
    if (!this.updatedOrder || !this.updatedOrder.id) {
      console.error('Invalid order or order ID');
      return;
    }

    const url = `http://localhost:8000/api/v1/order/${this.updatedOrder.id}`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.auth.getToken()}`
    });

    this.http.put(url, this.updatedOrder, { headers }).subscribe(
      (response: any) => {
        console.log('Order updated successfully:', response);
        this.fetchOrders();
        this.closeEditForm();
      },
      (error) => {
        console.error('Error updating order:', error);
      }
    );
  }
}
