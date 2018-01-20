import { Component, OnInit } from '@angular/core';

import { ProductManagerService } from '../../services/product-manager.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private productManager: ProductManagerService) { }

  ngOnInit() {
    this.productManager.getProducts()
      .subscribe(products => console.log(products));
  }

}
