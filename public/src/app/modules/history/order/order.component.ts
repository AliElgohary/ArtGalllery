import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';
import { OrderData } from '../order.model';
import { OrderItemService } from 'src/app/services/orderItem/order-item.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  constructor(private orderService: OrderService, private orderItemsService: OrderItemService) {}
  orderData: OrderData[] = [];
  getOrderItems() {
    const cartJSON = localStorage.getItem('cartItems');
    if (cartJSON) {
      const cart = JSON.parse(cartJSON);
      console.log(cart);
    } else {
      console.log('Cart is empty or not found in local storage.');
    }
  }

  ngOnInit(): void {
    this.orderService.getOrderHistory().subscribe(
      (response) => {
        console.log(response);
        this.orderData = response.data;
      },
      (error) => {
        console.error('Error fetching order history:', error);
      }
    );
    this.getOrderItems();
  }
}
