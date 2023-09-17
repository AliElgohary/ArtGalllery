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
  isEditFormOpen: boolean = false;
  updatedProduct: any = {};

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
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.auth.getToken(),
      });

      this.http.delete(`http://localhost:8000/api/v1/products/${id}`, { headers })
        .subscribe(
          (response) => {
            console.log('Product deleted successfully:', response);
            this.fetchProduct();
          },
          (error) => {
            if (error.status === 422 && error.error.message === 'Product associated with order items') {
            console.error('Error deleting product:', error);
              alert('This product cannot be deleted as it is associated with order item(s).');
            } else {
              alert('An error occurred while deleting the product.');
            }
          }
        );
    } else {
      console.error(`User doesn't have permission to delete`);
    }
  }


  openEditForm(product: any) {
    console.log('openEditForm called');
    this.updatedProduct = { ...product };
    this.isEditFormOpen = true;
    console.log('isEditFormOpen:', this.isEditFormOpen);
  }

  closeEditForm() {
    this.isEditFormOpen = false;
    this.updatedProduct = {};
  }

  editProduct() {
    if (this.isAdmin) {
      const headers = new HttpHeaders({
        'content-type': 'application/json',
        Authorization: 'Bearer ' + this.auth.getToken()
      });

      const productId = this.updatedProduct.id;

      this.http.put(`http://localhost:8000/api/v1/products/${productId}`, this.updatedProduct, { headers })
        .subscribe(
          (response) => {
            console.log('Product updated successfully:', response);
            this.fetchProduct();
            this.closeEditForm();
          },
          (error) => {
            console.error('Error updating product:', error);
          }
        );
    } else {
      console.error(`User doesn't have permission to edit`);
    }
  }

}
