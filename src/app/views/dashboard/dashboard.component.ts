import { Component, OnInit } from '@angular/core';

import { ProductManagerService } from '../../services/product-manager.service';

import { Product } from '../../constants/product';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products: Product[]

  constructor(private productManager: ProductManagerService) { }

  ngOnInit() {
    this.getProducts()
  }

  getProducts() {
    this.productManager.getProducts()
      .subscribe(products => this.products = products);
  }

  addProduct() {
    const product: Product = {
      name: 'merguez',
      price: 7.0,
    }
    this.productManager.createProduct(product)
      .subscribe(product => this.products.push(product))
  }

}
