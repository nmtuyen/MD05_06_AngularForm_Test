import { Component, OnInit } from '@angular/core';
import {IProduct} from '../iproduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: IProduct[] = [];
  product: IProduct = {};
  constructor() { }

  ngOnInit() {
  }
  createProduct() {
    let product1 = {
      id: this.product.id,
      name: this.product.name,
      price: this.product.price
    };
    this.products.push(product1);
  }

}
