import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ShopComponent } from './pages/shop/shop.component';
import { OrderComponent } from './pages/order/order.component';
import { RegisterComponent } from './pages/register/register/register.component';
import { LoginComponent } from './pages/login/login/login.component';
import { ProfilComponent } from './pages/profil/profil.component';

export const routes: Routes = [
  { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent), },
  { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent), },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent), },
  { path: 'shop', loadComponent: () => import('./pages/shop/shop.component').then(m => m.ShopComponent), },
  { path: 'order', loadComponent: () => import('./pages/order/order.component').then(m => m.OrderComponent), },
  { path: 'register', loadComponent: () => import('./pages/register/register/register.component').then(m => m.RegisterComponent), },
  { path: 'login', loadComponent: () => import('./pages/login/login/login.component').then(m => m.LoginComponent), },
  { path: 'profil', loadComponent: () => import('./pages/profil/profil.component').then(m => m.ProfilComponent), },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
];