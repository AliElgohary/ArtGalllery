import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  cartItems: any[] = [];

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
  saveCartToLocalStorage(){
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
  removeFromCart(item: any): void {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.saveCartToLocalStorage();
    }
  }

}
