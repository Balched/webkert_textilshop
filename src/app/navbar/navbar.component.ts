import { Component} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button'
import { MatDivider } from '@angular/material/divider';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { CartService } from '../shared/services/cart.service';
import { Product } from '../models/product/product.component';
import { ClickOutsideDirective } from '../shared/directives/click-outside.directive';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive,MatDivider, MatIconModule, MatBadgeModule, MatMenuModule, MatButtonModule, NgIf, NgFor, ClickOutsideDirective],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  public cartVisible: boolean = false;

  constructor(public cartService: CartService) {}

  get cartItemCount(): number {
    return this.cartService.getCart().reduce((total, item) => total + item.quantity, 0);
  }

  get totalAmount(): number {
    return this.cartService.getCart().reduce((total, item: { product: Product, quantity: number }) => total + (item.product.price * item.quantity), 0);
  }

  toggleCart() {
    this.cartVisible = !this.cartVisible;
  }

  changeQuantity(item: { product: Product, quantity: number }, action: string) {
    if (action === 'increase') {
      item.quantity++;
    } else if (action === 'decrease' && item.quantity > 1) {
      item.quantity--;
    }
  }

  clearCart() {
    this.cartService.clearCart();
  }
}


