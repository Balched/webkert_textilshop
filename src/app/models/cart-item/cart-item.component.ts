import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product/product.component';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  @Input() product!: Product;
  @Output() removeFromCart = new EventEmitter<Product>();

  onRemove() {
    this.removeFromCart.emit(this.product);
  }
}


export interface CartItem {
  product: Product;
  quantity: number;
}
