import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../product.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.scss']
})
export class ProductsComponentComponent implements OnInit {
  products: any[] = [];
  cartItems: Product[] = [];
  isAdmin: boolean = false;

  constructor(private http: HttpClient, private auth: AuthService) {}

  ngOnInit() {
    this.fetchProduct();
    this.auth.isAuthenticated$.subscribe((authenticated) => {
      if (authenticated) {
        this.isAdmin = this.auth.isUserAdmin();
      } else {
        this.isAdmin = false;
      }
    });
  }

  fetchProduct() {
    this.http.get('http://localhost:8000/api/v1/products').subscribe(
      (data: any) => {
        this.products = data.data;
      },
      (error) => {
        if (error.status === 404) {
          console.error('The product resource was not found.');
        } else {
          console.error('An error occurred while fetching product data.');
        }
      }
    );
  }

  addToCart(item: Product) {
    this.cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  deleteProduct(id: number) {
    if (this.isAdmin) {
      const headers = new HttpHeaders({
        'content-type': 'application/json',
        Authorization: 'Bearer ' + this.auth.getToken()
      });
      this.http.delete(`http://localhost:8000/api/v1/products/${id}`, { headers }).subscribe(
        (response) => {
          console.log('Product deleted successfully:', response);
          this.fetchProduct();
        },
        (error) => {
          console.error('Error deleting product:', error);
        }
      );
    } else {
      console.error(`User doesn't have permission to delete`);
    }
  }
}
