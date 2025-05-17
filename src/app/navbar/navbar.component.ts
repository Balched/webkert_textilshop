import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';
import { CartService } from '../shared/services/cart.service';
import { Product } from '../models/product/product.component';
import { ClickOutsideDirective } from '../shared/directives/click-outside.directive';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink, RouterLinkActive, MatIconModule, MatBadgeModule, MatMenuModule,
    MatButtonModule, NgIf, NgFor, ClickOutsideDirective, MatDivider
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: true
})
export class NavbarComponent {
  menuOpen = false;
  cartVisible: boolean = false;

  constructor(
    public cartService: CartService,
    public authService: AuthService,
    private router: Router
  ) {}

  get isLoggedIn(): boolean {
    return this.authService.user !== null;
  }

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

  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/home']);
    });
  }
}
