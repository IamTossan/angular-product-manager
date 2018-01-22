import { Component, OnInit } from '@angular/core';

import { ProductManagerService } from '../../services/product-manager.service';

import { Product } from '../../constants/product';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products: Product[];

  constructor(private productManager: ProductManagerService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productManager.getProducts()
      .subscribe(products => this.products = products);
  }

  createProduct(product: Product) {
    this.productManager.createProduct(product)
      .subscribe(p => this.products.push(p));
  }

  updateProduct(product: Product) {
    this.productManager.updateProduct(product)
      .subscribe(() => this.getProducts());
  }

  deleteProduct(id: number) {
    this.productManager.deleteProduct(id)
      .subscribe(() => this.getProducts());
  }

}
