import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../../shared/services/cart.service';
import { Product } from '../../models/product/product.component';
import { NgIf } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    ReactiveFormsModule, NgIf,
    MatFormFieldModule, MatInputModule, MatButtonModule, MatTableModule
  ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
  orderForm!: FormGroup;
  cartItems: { product: Product, quantity: number }[] = [];
  totalAmount: number = 0;
  displayedColumns: string[] = ['name', 'quantity', 'total'];

  constructor(private fb: FormBuilder, private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();

    this.orderForm = this.fb.group({
      customerName: ['', [Validators.required, Validators.minLength(2)]],
      customerEmail: ['', [Validators.required, Validators.email]],
      customerPhone: ['', Validators.required],
      customerZip: ['', Validators.required],
      customerCity: ['', Validators.required],
      customerStreetType: ['', Validators.required],
      customerStreetName: ['', Validators.required],
      customerHouseNumber: ['', Validators.required]
    });
  }

  loadCart() {
    this.cartItems = this.cartService.getCart();
    this.totalAmount = this.cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  }

  submitOrder(): void {
    if (this.orderForm.valid && this.cartItems.length > 0) {
      const order = {
        items: this.cartItems,
        totalAmount: this.totalAmount,
        customerData: this.orderForm.value
      };
      console.log('Rendelés leadva:', order);
      alert('Köszönjük a rendelését!');

      this.cartService.clearCart(); 
      this.loadCart();            
      this.orderForm.reset();     
    } else {
      alert('Tölts ki minden mezőt, és legyen termék a kosárban!');
    }
  }
}
