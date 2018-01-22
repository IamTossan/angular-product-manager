import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../../constants/product';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.css']
})
export class ProductEditorComponent implements OnInit {

  @Input() product: Product;
  @Output() save = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  handleClickSave() {
    this.save.emit();
  }

  handleClickDelete() {
    this.delete.emit();
  }

}
