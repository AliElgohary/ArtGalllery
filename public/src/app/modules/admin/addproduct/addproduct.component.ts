import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss'],
})
export class AddproductComponent {
  constructor(private http: HttpClient, private auth: AuthService) {}

  addProduct(productForm: any) {
    const product = {
      name: productForm.value.productName,
      description: productForm.value.productDescription,
      price: productForm.value.productPrice,
      stock: productForm.value.productStock,
      image: productForm.value.productImage,
      category: productForm.value.productCategory,
      status: productForm.value.productStatus,
    };

    const token = this.auth.getToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    });

    this.http.post('http://localhost:8000/api/v1/products', product, { headers })
      .subscribe(
        (response: any) => {
          if (response && response.success) {
            const addedProduct = response.data;
            console.log('Product added successfully:', addedProduct);
          } else {
            console.error('Error adding product:', response.message);
          }
        },
        (error) => {
          if (error.status === 422) {
            console.error('Error adding product:', 'The name is already taken.');
          } else {
            console.error('Error adding product:', error);
          }
        }
      );
  }
}
