import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss'],
})
export class AddproductComponent {
  constructor(private http: HttpClient, private auth: AuthService) {}

  addProduct(productForm: any) {
    const product = {
      id: 32,
      name: productForm.value.productName,
      description: productForm.value.productDescription,
      price: productForm.value.productPrice,
      stock: productForm.value.productStock,
      image: productForm.value.productImage,
      category: productForm.value.productCategory,
      status: productForm.value.productStatus
    };

    const token = this.auth.getToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    });

    this.http.post('http://localhost:8000/api/v1/products', product, { headers })
      .subscribe(
        response => {
          console.log('Product added successfully:', response);
        },
        error => {
          console.error('Error adding product:', error);
        }
      );
        productForm.reset();
  }
}
