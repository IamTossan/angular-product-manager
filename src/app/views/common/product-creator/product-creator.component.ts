import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Product } from '../../../constants/product';

@Component({
  selector: 'app-product-creator',
  templateUrl: './product-creator.component.html',
  styleUrls: ['./product-creator.component.css']
})
export class ProductCreatorComponent implements OnInit {

  @Output() create = new EventEmitter<Product>();

  isCreating = false;
  newProduct: Product = {
    name: '',
    price: null
  };

  constructor() { }

  ngOnInit() {
  }

  handleClickAdd() {
    this.isCreating = true;
  }

  handleClickCreate() {
    if (!this.newProduct.name.trim().length || !this.newProduct.price) {
      return;
    }
    this.create.emit(this.newProduct);
    this.newProduct = {
      name: '',
      price: null
    };
    this.isCreating = false;
  }

}
