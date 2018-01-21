import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Product } from '../constants/product';
import { productsUrl, productUrl } from '../constants/endPoints';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class ProductManagerService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(productsUrl);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(productUrl, product, httpOptions);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${productUrl}/${id}`);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${productUrl}/${id}`, httpOptions);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${productUrl}/${product.id}`, product, httpOptions);
  }

}
