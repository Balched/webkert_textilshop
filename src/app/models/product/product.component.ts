import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

