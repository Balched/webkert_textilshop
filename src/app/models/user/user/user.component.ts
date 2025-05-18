import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}

export interface Address {
  id: string;
  name: string;
  street: string;
  city: string;
  zip: string;
}

export interface UserData {
  email: string;
  billingAddresses: Address[];
  shippingAddresses: Address[];
}
