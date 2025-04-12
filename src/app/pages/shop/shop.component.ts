import { Component } from '@angular/core';
import { Product } from '../../models/product/product.component';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { CartService } from '../../shared/services/cart.service';
import { HighlightOnHoverDirective } from '../../shared/directives/highlight-on-hover.directive';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-shop',
  imports: [NgIf, NgFor, HighlightOnHoverDirective, MatSliderModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, FormsModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})

export class ShopComponent {
  products: Product[] = [
    { id: 1, name: 'Termék 1', description: 'Leírás', price: 1000, imageUrl: '1.jpg' },
    { id: 2, name: 'Termék 2', description: 'Leírás', price: 2000, imageUrl: '2.jpg' },
    { id: 3, name: 'Termék 3', description: 'Leírás', price: 3990, imageUrl: '3.jpg' },
    { id: 4, name: 'Termék 4', description: 'Leírás', price: 5500, imageUrl: '4.jpg' },
    { id: 5, name: 'Termék 5', description: 'Leírás', price: 2990, imageUrl: '5.jpg' },
    { id: 6, name: 'Termék 6', description: 'Leírás', price: 8000, imageUrl: '6.jpg' },
    { id: 7, name: 'Termék 7', description: 'Leírás', price: 10000, imageUrl: '7.jpg' },
    { id: 8, name: 'Termék 8', description: 'Leírás', price: 1000, imageUrl: '8.jpg' },
    { id: 9, name: 'Termék 9', description: 'Leírás', price: 2000, imageUrl: '9.jpg' },
    { id: 10, name: 'Termék 10', description: 'Leírás', price: 3990, imageUrl: '10.jpg' },
    { id: 11, name: 'Termék 11', description: 'Leírás', price: 5500, imageUrl: '11.jpg' },


    // További termékek itt
  ];

  constructor(private cartService: CartService) {}

  // addToCart függvény hozzáadja a terméket a kosárhoz
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
  

