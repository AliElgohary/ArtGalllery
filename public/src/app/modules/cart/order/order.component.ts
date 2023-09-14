import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { OrderService } from 'src/app/services/order/order.service';
import { OrderItemService } from 'src/app/services/orderItem/order-item.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  cartItems: any[] = [];
  newOrder: any = {};

  constructor(
    private orderService: OrderService,
    private orderItemService: OrderItemService
  ) {}

  getCartItems() {
    const cart = localStorage.getItem('cartItems');
    if (!cart) {
      console.log('Cart not found');
    } else {
      this.cartItems = JSON.parse(cart);
    }
    console.log(this.cartItems);
  }

  ngOnInit(): void {
    this.getCartItems();
  }

  saveCartToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  removeFromCart(item: any): void {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.saveCartToLocalStorage();
    }
  }

  createAndAddToOrder() {
    this.orderService.createOrder(this.newOrder).subscribe(
      (orderResponse) => {
        console.log('Order created:', orderResponse);

        const orderItemsObservable = this.cartItems.map((cartItem) => {
          console.log(cartItem)
          const orderItemData = {
            product_id: cartItem.id,
            order_id: orderResponse.data.id,
            product_quantity: 1,
          };

          console.log('this is fixing : '+cartItem.productId, orderItemData)
          return this.orderItemService.addOrderItem(orderItemData);
        });

        forkJoin(orderItemsObservable).subscribe(
          (orderItemResponses) => {
            console.log('Order items added:', orderItemResponses);
            this.cartItems = [];
            this.saveCartToLocalStorage();
          },
          (error) => {
            console.error('Error adding order items:', error);
          }
        );
      },
      (error) => {
        console.error('Error creating order:', error);
      }
    );
  }

}
