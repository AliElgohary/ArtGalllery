import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.scss']
})
export class ProductsComponentComponent {
  products!: any[];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.fetchProduct();
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
}
