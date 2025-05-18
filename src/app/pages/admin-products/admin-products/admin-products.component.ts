import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../models/product/product.component';
import { ProductService } from '../../../shared/services/product/product.service';
import { Observable } from 'rxjs';

// Angular Material importok
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    FormsModule,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './admin-products.component.html',
  styleUrl: './admin-products.component.css'
})
export class AdminProductsComponent implements OnInit {
  products$!: Observable<Product[]>;

  newProduct: Product = {
    name: '',
    description: '',
    price: 0,
    imageUrl: '',
    category: '',
    stock: 0
  };

  editingProduct: Product | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getAllProducts();
  }

  addProduct() {
    this.productService.addProduct(this.newProduct).then(() => {
      this.newProduct = {
        name: '',
        description: '',
        price: 0,
        imageUrl: '',
        category: '',
        stock: 0
      };
    });
  }

  editProduct(product: Product) {
    this.editingProduct = { ...product };
  }

  updateProduct() {
    if (this.editingProduct && this.editingProduct.id) {
      this.productService.updateProduct(this.editingProduct).then(() => {
        this.editingProduct = null;
      });
    }
  }

  cancelEdit() {
    this.editingProduct = null;
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id);
  }

  getImageUrl(product: Product): string {
    return product.imageUrl && product.imageUrl.trim() !== '' ? product.imageUrl : 'textilshop.png';
  }
  

}
