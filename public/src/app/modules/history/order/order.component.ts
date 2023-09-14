import { Component, OnInit } from '@angular/core';
import { OrderData, orderHistory } from '../order.model';
import { OrderItemService } from 'src/app/services/orderItem/order-item.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})


export class OrderComponent implements OnInit {
  constructor( private orderItemsService: OrderItemService) {}
  orderData: OrderData[] = [];
  History: orderHistory[] = [];

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
    this.orderItemsService.getAllOrderItems().subscribe(
      (response) => {
        console.log(response);
        this.History = response.data;
      },
      (error) => {
        console.error('Error fetching order history:', error);
      }
    );
    this.getOrderItems();
  }
}
