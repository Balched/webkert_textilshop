import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product/product.component';
import { ProductService } from '../../shared/services/product/product.service';
import { CartService } from '../../shared/services/cart.service';
import { Observable, of } from 'rxjs';
import { NgIf, NgFor } from '@angular/common';
import { HighlightOnHoverDirective } from '../../shared/directives/highlight-on-hover.directive';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { PriceFormatPipe } from '../../shared/pipes/priceFormat/price-format.pipe';
import { PriceColorPipe } from '../../shared/pipes/priceColor/price-color.pipe';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    NgIf, NgFor, HighlightOnHoverDirective,
    MatSliderModule, MatCardModule, MatFormFieldModule,
    MatInputModule, MatButtonModule, MatIconModule, FormsModule, AsyncPipe, PriceFormatPipe, PriceColorPipe
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit {
  products$: Observable<Product[]> = of([]);

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.products$ = this.productService.getAllProducts();
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  getImageUrl(product: Product): string {
    return product.imageUrl && product.imageUrl.trim() !== '' ? product.imageUrl : 'textilshop.png';
  }

}
