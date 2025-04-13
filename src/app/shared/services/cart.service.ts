import { Injectable } from '@angular/core';
import { Product } from '../../models/product/product.component'; // Az 'Product' modell importálása

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: { product: Product, quantity: number }[] = [];

  addToCart(product: Product) {
    const existingProduct = this.cart.find(item => item.product.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.cart.push({ product, quantity: 1 });
    }
  }

  removeFromCart(item: { product: Product, quantity: number }) {
    const index = this.cart.findIndex(cartItem => cartItem.product.id === item.product.id);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }

  clearCart() {
    this.cart = [];
  }

  getCart() {
    return this.cart;
  }
}
