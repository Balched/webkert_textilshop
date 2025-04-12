import { Component} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button'
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { CartService } from '../shared/services/cart.service';
import { Product } from '../models/product/product.component';
import { ClickOutsideDirective } from '../shared/directives/click-outside.directive';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, MatIconModule, MatBadgeModule, MatMenuModule, MatButtonModule, NgIf, NgFor, ClickOutsideDirective],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  public cartVisible: boolean = false;  // Kosár láthatóság vezérlés

  constructor(public cartService: CartService) {}

  // Kosárban lévő elemek száma (összes darab)
  get cartItemCount(): number {
    return this.cartService.getCart().reduce((total, item) => total + item.quantity, 0);
  }

  // Kosár összesített ára
  get totalAmount(): number {
    return this.cartService.getCart().reduce((total, item: { product: Product, quantity: number }) => total + (item.product.price * item.quantity), 0);
  }

  // Kosár megjelenítése/elrejtése
  toggleCart() {
    this.cartVisible = !this.cartVisible;
  }

  // Termékek darabszámának változtatása
  changeQuantity(item: { product: Product, quantity: number }, action: string) {
    if (action === 'increase') {
      item.quantity++;
    } else if (action === 'decrease' && item.quantity > 1) {
      item.quantity--;
    }
  }

  // Kosár törlése
  clearCart() {
    this.cartService.clearCart();
  }
}

