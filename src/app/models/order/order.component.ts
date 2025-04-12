import { Component } from '@angular/core';
import { CartItem } from '../cart-item/cart-item.component';

@Component({
  selector: 'app-order',
  imports: [],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

}

export interface Order {
  id: number;
  items: CartItem[];
  totalAmount: number;
  customerName: string;
  customerEmail: string;
}
